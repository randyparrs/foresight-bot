// Foresight Bot — automated GenLayer Studionet activity
// Runs one tick per execution. Designed for GitHub Actions cron (every 4 hours).
//
// Each tick:
//   1. Generates a new market   (Markets contract · generate_market)
//   2. Publishes a new article  (Signal contract  · publish_article)

import { createClient, createAccount } from 'genlayer-js';
import * as chains from 'genlayer-js/chains';
import { MARKETS, ARTICLES } from './news-pool.js';

// Studionet chain (Chain ID 61999, RPC https://studio.genlayer.com/api)
const studionet = chains.studionet;

if (!studionet) {
  console.error('✕ Could not find studionet chain export. Available:', Object.keys(chains));
  process.exit(1);
}

// ── Config ────────────────────────────────────────────────────────────────────
const MARKETS_ADDR = '0x990e6B8982e5624fb700d051b9D90e74Cf68a6Cf'; // Foresight_markets_studio.py
const SIGNAL_ADDR  = '0x317ce8bb69C97ED302F22643b92Bc6e423B687C3'; // The_Signal_studio.py

const PK = process.env.BOT_PRIVATE_KEY;
if (!PK) {
  console.error('✕ Missing BOT_PRIVATE_KEY env variable');
  process.exit(1);
}

// ── Setup client ──────────────────────────────────────────────────────────────
const account = createAccount(PK.startsWith('0x') ? PK : '0x' + PK);
const client  = createClient({
  chain:   studionet,
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

// ── Main tick ─────────────────────────────────────────────────────────────────
async function tick() {
  console.log(`\n=== [BOT TICK] ${new Date().toISOString()} ===`);
  await generateMarket();
  await publishArticle();
  console.log(`=== [BOT TICK DONE] ===\n`);
}

// ── Entry ─────────────────────────────────────────────────────────────────────
const onceMode = process.argv.includes('--once') || process.env.GITHUB_ACTIONS;

if (onceMode) {
  tick().then(() => process.exit(0));
} else {
  // Long-running mode (local dev): loop every 4 hours
  console.log('[BOT] Running in loop mode (every 4 hours). Ctrl+C to stop.');
  tick();
  setInterval(tick, 4 * 60 * 60 * 1000);
}
