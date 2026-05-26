# Foresight Bot

Automated bot that runs on GenLayer Studionet every 4 hours. Each tick generates a new prediction market and publishes a news article on-chain.

## What it does

Each run calls two contracts on Studionet:

1. `generate_market` on Foresight Markets — picks a random news URL from the pool and creates a new YES/NO prediction market on-chain
2. `publish_article` on The Signal — picks a random news source and publishes an AI-written article on-chain with title, headline, body, tags, and sentiment

## Network

| Parameter | Value |
|-----------|-------|
| Network | GenLayer Studionet |
| Chain ID | 61999 |
| RPC | https://studio.genlayer.com/api |

## Contracts (Studionet)

| Contract | Address |
|----------|---------|
| Foresight Markets | `0x990e6B8982e5624fb700d051b9D90e74Cf68a6Cf` |
| The Signal | `0x317ce8bb69C97ED302F22643b92Bc6e423B687C3` |

## Bot wallet

`0x027bE5Ff6123a660243Fb65602a78e99271F0Fec` — authorized in both contracts to call `generate_market` and `publish_article`.

## How it runs

cron-job.org triggers the GitHub Actions workflow via API dispatch every 4 hours. GitHub Actions runs `node bot.js --once` with the bot private key stored as `BOT_PRIVATE_KEY` secret.

Schedule: `0 */4 * * *`

## Setup

```bash
npm install
```

Set `BOT_PRIVATE_KEY` as a GitHub Actions secret (the private key of the bot wallet).

## Run manually

```bash
BOT_PRIVATE_KEY=0x... node bot.js --once
```

## Files

- `bot.js` — main bot logic
- `news-pool.js` — curated pool of news URLs by category (CRYPTO, TECH, POLITICS, SPORTS, MARKETS, OTHER)
- `.github/workflows/bot.yml` — GitHub Actions workflow triggered by cron-job.org

## Related

- Contracts repo: https://github.com/randyparrs/foresight
- Frontend: https://foresight-appv2.netlify.app
