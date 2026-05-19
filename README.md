# Foresight Bot

Automated testnet activity bot for the Foresight Platform on GenLayer Studio.
Runs every 5 minutes via GitHub Actions cron — no server needed.

## What it does each tick

1. **Generates 1 new market** — picks a random news URL + search terms from `news-pool.js` and calls `generate_market` on the Markets contract.
2. **Publishes 1 new article** — picks a random article and calls `publish_article` on the Signal contract.

## Setup (5 minutes)

### 1. Create a new wallet for the bot
Use MetaMask or any wallet → create a new account → copy the **private key** (Account details → Export private key).
This wallet only needs to exist on GenLayer Studio testnet (gas is free).

### 2. Create the GitHub repo
```bash
cd foresight-bot
git init
git add .
git commit -m "Initial bot setup"
git branch -M main
git remote add origin https://github.com/<your-user>/foresight-bot.git
git push -u origin main
```

### 3. Add the private key as a GitHub secret
Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
- Name: `BOT_PRIVATE_KEY`
- Value: the private key from step 1 (with or without `0x` prefix)

### 4. Enable the workflow
Repo → **Actions** tab → if prompted, click **"I understand my workflows, enable them"**.

### 5. Trigger it manually the first time
Actions tab → **Foresight Bot** → **Run workflow** → main → green button.
After ~30s you'll see logs. Once it works, the cron takes over and runs every 5 min.

## Local testing

```bash
npm install
cp .env.example .env
# edit .env and paste your BOT_PRIVATE_KEY
node bot.js --once    # one shot
node bot.js           # loop every 5 min
```

## Files

- `bot.js` — main script (one tick = 1 market + 1 article)
- `news-pool.js` — pool of URLs and search terms (rotate / add more here)
- `.github/workflows/bot.yml` — cron config (every 5 min)

## Contracts

- Markets: `0xC22D35c20D53730a86A7d456fc03B48556287903`
- Signal:  `0xCb20df465C11BcB67e87b68A5B936453340c9d01`
- RPC:     `https://studio.genlayer.com/api`
- Chain:   GenLayer Studio (chainId 61999)
