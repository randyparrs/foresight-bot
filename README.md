# Foresight Bot

Off-chain automation for the Foresight platform on GenLayer Studio testnet. Runs on GitHub Actions every 30 minutes and keeps the platform active without any manual intervention.

## What it does

Each run generates one new prediction market and publishes one new Signal article. The bot picks a random news URL from the pool defined in news-pool.js, calls generate_market on the Markets contract, then calls publish_article on the Signal contract. It uses genlayer-js to send both transactions and waits for each one to reach FINALIZED status before exiting.

## Setup

Create a new wallet in MetaMask and export the private key. The wallet only needs to exist on GenLayer Studio testnet since gas is free there.

Add the private key as a GitHub Actions secret named BOT_PRIVATE_KEY under Settings → Secrets and variables → Actions. Enable the workflow from the Actions tab if prompted, then trigger it manually once from Actions → Foresight Bot → Run workflow to confirm it works. After that the cron schedule takes over automatically.

To test locally, run npm install, copy .env.example to .env and paste your private key, then run node bot.js.

## Files

bot.js is the main script. One execution generates one market and one article. news-pool.js contains the pool of URLs and topic hints that rotate each run. .github/workflows/bot.yml has the cron configuration.

## Contracts

Markets contract at 0x705eF45c6dEC36dE0E8fF4c17E7e6E24CB6bB359. Signal contract at 0x46e821C8Ec4D329AEd82F9e4FB4D9AcEBD573F17. RPC at https://studio.genlayer.com/api on GenLayer Studio testnet chainId 61999.
