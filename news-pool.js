// Rotating pool of news sources for the bot.
// Each tick the bot picks ONE market entry + ONE signal entry based on timestamp.

export const MARKETS = [
  { category: 'crypto',   url: 'https://www.coindesk.com/markets/2026/05/15/bitcoin-etf-inflows-record-may',          terms: 'bitcoin ETF inflows May 2026' },
  { category: 'tech',     url: 'https://www.reuters.com/technology/ai/openai-gpt-6-release-summer-2026',              terms: 'GPT-6 release summer 2026' },
  { category: 'crypto',   url: 'https://www.cointelegraph.com/news/ethereum-pectra-upgrade-mainnet-june-2026',        terms: 'Ethereum Pectra upgrade June 2026' },
  { category: 'politics', url: 'https://www.bloomberg.com/news/articles/2026-05-14/fed-rate-decision-june-fomc',      terms: 'Fed rate cut June FOMC 2026' },
  { category: 'sports',   url: 'https://www.espn.com/nba/story/_/finals-2026-game-1-preview',                         terms: 'NBA Finals 2026 Game 1' },
  { category: 'tech',     url: 'https://www.theverge.com/2026/5/12/apple-wwdc-2026-vision-pro-2',                     terms: 'Apple WWDC 2026 Vision Pro 2' },
  { category: 'politics', url: 'https://www.reuters.com/world/europe/uk-general-election-july-2026',                  terms: 'UK general election July 2026' },
  { category: 'crypto',   url: 'https://www.coindesk.com/policy/2026/05/10/sec-solana-etf-decision-june',             terms: 'SEC Solana ETF decision June 2026' },
  { category: 'tech',     url: 'https://www.cnbc.com/2026/05/13/nvidia-q1-earnings-may-2026',                         terms: 'Nvidia Q1 earnings May 2026' },
  { category: 'sports',   url: 'https://www.theathletic.com/champions-league-final-2026-preview',                     terms: 'Champions League final 2026 winner' },
  { category: 'crypto',   url: 'https://decrypt.co/2026/05/16/solana-tvl-record-high-may',                            terms: 'Solana TVL record May 2026' },
  { category: 'tech',     url: 'https://techcrunch.com/2026/05/14/tesla-robotaxi-launch-q2',                          terms: 'Tesla robotaxi launch Q2 2026' },
  { category: 'politics', url: 'https://www.reuters.com/world/us/biden-trump-rematch-polls-may-2026',                 terms: 'US election polls May 2026' },
  { category: 'sports',   url: 'https://www.skysports.com/football/news/premier-league-final-matchday-2026',          terms: 'Premier League final matchday 2026' },
  { category: 'crypto',   url: 'https://www.theblock.co/post/2026/05/15/coinbase-q1-earnings-record',                 terms: 'Coinbase Q1 earnings 2026' },
  { category: 'tech',     url: 'https://www.bloomberg.com/news/articles/2026-05-12/meta-quest-4-release-date',        terms: 'Meta Quest 4 release 2026' },
  { category: 'crypto',   url: 'https://www.coindesk.com/markets/2026/05/17/bitcoin-price-target-100k',               terms: 'bitcoin price 100k 2026' },
  { category: 'sports',   url: 'https://www.formula1.com/en/latest/article/monaco-gp-2026-preview.html',              terms: 'Monaco GP 2026 winner' },
  { category: 'politics', url: 'https://www.ft.com/content/eu-summit-june-2026-ukraine-aid',                          terms: 'EU summit June 2026 Ukraine' },
  { category: 'tech',     url: 'https://www.theinformation.com/articles/anthropic-claude-5-release-summer-2026',      terms: 'Anthropic Claude 5 release 2026' },
];

export const ARTICLES = [
  { category: 'CRYPTO',   urls: ['https://www.coindesk.com/markets/2026/05/15/bitcoin-etf-inflows-record-may', '', ''] },
  { category: 'TECH',     urls: ['https://www.theverge.com/2026/5/12/apple-wwdc-2026-vision-pro-2', '', ''] },
  { category: 'MARKETS',  urls: ['https://www.bloomberg.com/news/articles/2026-05-14/fed-rate-decision-june-fomc', '', ''] },
  { category: 'POLITICS', urls: ['https://www.reuters.com/world/europe/uk-general-election-july-2026', '', ''] },
  { category: 'SPORTS',   urls: ['https://www.espn.com/nba/story/_/finals-2026-game-1-preview', '', ''] },
  { category: 'CRYPTO',   urls: ['https://decrypt.co/2026/05/16/solana-tvl-record-high-may', '', ''] },
  { category: 'TECH',     urls: ['https://techcrunch.com/2026/05/14/tesla-robotaxi-launch-q2', '', ''] },
  { category: 'CRYPTO',   urls: ['https://www.coindesk.com/policy/2026/05/10/sec-solana-etf-decision-june', '', ''] },
  { category: 'TECH',     urls: ['https://www.cnbc.com/2026/05/13/nvidia-q1-earnings-may-2026', '', ''] },
  { category: 'SPORTS',   urls: ['https://www.theathletic.com/champions-league-final-2026-preview', '', ''] },
];
