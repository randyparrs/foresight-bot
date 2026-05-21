// Foresight Bot — automated GenLayer Bradbury testnet activity
// Runs one tick per execution. Designed for GitHub Actions cron (every 5 min).
//
// Each tick:
//   1. Generates a new market   (Markets contract · generate_market)
//   2. Publishes a new article  (Signal contract  · publish_article)
//   3. Tries to resolve any expired markets (best-effort, ignores failures)

import { createClient, createAccount } from 'genlayer-js';
import * as chains from 'genlayer-js/chains';
import { MARKETS, ARTICLES } from './news-pool.js';

// Bradbury testnet chain (Chain ID 4221, RPC https://rpc-bradbury.genlayer.com)
const testnetBradbury = chains.testnetBradbury;

if (!testnetBradbury) {
  console.error('✕ Could not find testnetBradbury chain export. Available:', Object.keys(chains));
  process.exit(1);
}

// ── Config ────────────────────────────────────────────────────────────────────
const MARKETS_ADDR = '0x43b38042d43dffD570bD561Ac46294785f7E202B';
const SIGNAL_ADDR  = '0xd776B579E21a89C0FC0Ee33E78eda866d9aD5ded';

const PK = process.env.BOT_PRIVATE_KEY;
if (!PK) {
  console.error('✕ Missing BOT_PRIVATE_KEY env variable');
  process.exit(1);
}

// ── Setup client ──────────────────────────────────────────────────────────────
const account = createAccount(PK.startsWith('0x') ? PK : '0x' + PK);
const client  = createClient({
  chain:   testnetBradbury,
  account,
});

console.log(`[BOT] Wallet: ${account.address}`);

// ── Helpers ───────────────────────────────────────────────────────────────────
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

async function writeAndWait(label, fn) {
  try {
    console.log(`[BOT] ${label} → sending…`);
    const hash = await fn();
    console.log(`[BOT] ${label} → tx ${hash}`);
    const receipt = await client.waitForTransactionReceipt({
      hash, retries: 60, interval: 5000,
    });
    console.log(`[BOT] ${label} → ✓ finalized (${receipt.status || 'OK'})`);
    return hash;
  } catch (err) {
    console.error(`[BOT] ${label} → ✕ ${err.message || err}`);
    return null;
  }
}

// ── Actions ───────────────────────────────────────────────────────────────────
async function generateMarket() {
  const item = pick(MARKETS);
  return writeAndWait(`generate_market [${item.category}]`, () =>
    client.writeContract({
      address:      MARKETS_ADDR,
      functionName: 'generate_market',
      args:         [item.url, item.terms],
      value:        0n,
    })
  );
}

async function publishArticle() {
  const item = pick(ARTICLES);
  return writeAndWait(`publish_article [${item.category}]`, () =>
    client.writeContract({
      address:      SIGNAL_ADDR,
      functionName: 'publish_article',
      args:         [item.category, ...item.urls],
      value:        0n,
    })
  );
}

async function resolveExpiredMarkets() {
  try {
    const countRaw = await client.readContract({
      address:      MARKETS_ADDR,
      functionName: 'get_market_count',
      args:         [],
    });
    const count = parseInt(String(countRaw)) || 0;
    console.log(`[BOT] market count: ${count}`);

    // Check last 5 markets (most likely to be expirable)
    const ids = Array.from({ length: Math.min(5, count) }, (_, i) => count - 1 - i);
    for (const id of ids) {
      try {
        const raw = await client.readContract({
          address:      MARKETS_ADDR,
          functionName: 'get_market',
          args:         [String(id)],
        });
        const text   = String(raw);
        const isOpen = text.includes('Status: OPEN') || text.includes('Status: open');
        if (!isOpen) continue;

        // Try expire (will no-op if not actually expired)
        await writeAndWait(`expire_market(${id})`, () =>
          client.writeContract({
            address:      MARKETS_ADDR,
            functionName: 'expire_market',
            args:         [String(id)],
            value:        0n,
          })
        );
      } catch (_) { /* ignore individual failures */ }
    }
  } catch (err) {
    console.error(`[BOT] resolveExpiredMarkets → ${err.message}`);
  }
}

// ── Main tick ─────────────────────────────────────────────────────────────────
async function tick() {
  console.log(`\n=== [BOT TICK] ${new Date().toISOString()} ===`);
  await generateMarket();
  await publishArticle();
  // Disabled by default — uncomment if you want resolve attempts each tick
  // await resolveExpiredMarkets();
  console.log(`=== [BOT TICK DONE] ===\n`);
}

// ── Entry ─────────────────────────────────────────────────────────────────────
const onceMode = process.argv.includes('--once') || process.env.GITHUB_ACTIONS;

if (onceMode) {
  tick().then(() => process.exit(0));
} else {
  // Long-running mode (Railway / local dev): loop every 15 min
  console.log('[BOT] Running in loop mode (every 30 min). Ctrl+C to stop.');
  tick();
  setInterval(tick, 30 * 60 * 1000);
}
