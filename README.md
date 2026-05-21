# Foresight Bot

Off-chain automation for the Foresight platform on GenLayer Bradbury testnet. Runs on GitHub Actions every 30 minutes and keeps the platform active without any manual intervention.

## What it does

Each run generates one new prediction market and publishes one new Signal article. The bot picks a random news URL from the pool defined in news-pool.js, calls generate_market on the Markets contract, then calls publish_article on the Signal contract. It uses genlayer-js to send both transactions and waits for each one to reach FINALIZED status before exiting.

## Network

| Parameter | Value |
|-----------|-------|
| Network | GenLayer Bradbury Testnet |
| Chain ID | 4221 |
| RPC | https://rpc-bradbury.genlayer.com |
| Explorer | https://explorer-bradbury.genlayer.com |

## Contracts

| Contract | Address |
|----------|---------|
| Foresight Markets | `0x43b38042d43dffD570bD561Ac46294785f7E202B` |
| The Signal | `0xd776B579E21a89C0FC0Ee33E78eda866d9aD5ded` |

## Setup

Create a new wallet and export the private key. Make sure the wallet has GEN tokens on Bradbury testnet.

Add the private key as a GitHub Actions secret named BOT_PRIVATE_KEY under Settings → Secrets and variables → Actions. Enable the workflow from the Actions tab if prompted, then trigger it manually once from Actions → Foresight Bot → Run workflow to confirm it works. After that the cron schedule takes over automatically.

To test locally, run npm install, copy .env.example to .env and paste your private key, then run node bot.js.

## Files

bot.js is the main script. One execution generates one market and one article. news-pool.js contains the pool of URLs and topic hints that rotate each run. .github/workflows/bot.yml has the cron configuration.
