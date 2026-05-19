// Rotating pool of news sources for the bot.
// The bot picks a random entry each tick.

export const MARKETS = [
  // ── CRYPTO ────────────────────────────────────────────────────────────────
  { category: 'crypto',   url: 'https://www.coindesk.com/markets/2026/05/15/bitcoin-etf-inflows-record-may',           terms: 'bitcoin ETF inflows May 2026' },
  { category: 'crypto',   url: 'https://www.cointelegraph.com/news/ethereum-pectra-upgrade-mainnet-june-2026',         terms: 'Ethereum Pectra upgrade June 2026' },
  { category: 'crypto',   url: 'https://www.coindesk.com/policy/2026/05/10/sec-solana-etf-decision-june',              terms: 'SEC Solana ETF decision June 2026' },
  { category: 'crypto',   url: 'https://decrypt.co/2026/05/16/solana-tvl-record-high-may',                             terms: 'Solana TVL record May 2026' },
  { category: 'crypto',   url: 'https://www.theblock.co/post/2026/05/15/coinbase-q1-earnings-record',                  terms: 'Coinbase Q1 earnings 2026' },
  { category: 'crypto',   url: 'https://www.coindesk.com/markets/2026/05/17/bitcoin-price-target-100k',                terms: 'bitcoin price 100k 2026' },
  { category: 'crypto',   url: 'https://www.cointelegraph.com/news/binance-cz-return-ceo-2026',                        terms: 'Binance CZ return CEO 2026' },
  { category: 'crypto',   url: 'https://decrypt.co/2026/05/14/xrp-etf-approval-summer-2026',                           terms: 'XRP ETF approval summer 2026' },
  { category: 'crypto',   url: 'https://www.theblock.co/post/2026/05/16/usdc-supply-record-may-2026',                  terms: 'USDC supply record May 2026' },
  { category: 'crypto',   url: 'https://www.coindesk.com/markets/2026/05/13/avalanche-subnet-launch-june',             terms: 'Avalanche subnet launch June 2026' },
  { category: 'crypto',   url: 'https://cryptobriefing.com/2026/05/15/chainlink-ccip-integration-major-bank',          terms: 'Chainlink CCIP bank integration 2026' },
  { category: 'crypto',   url: 'https://www.coindesk.com/business/2026/05/12/strategy-bitcoin-purchase-may',           terms: 'Strategy bitcoin purchase May 2026' },

  // ── TECH ──────────────────────────────────────────────────────────────────
  { category: 'tech',     url: 'https://www.reuters.com/technology/ai/openai-gpt-6-release-summer-2026',               terms: 'GPT-6 release summer 2026' },
  { category: 'tech',     url: 'https://www.theverge.com/2026/5/12/apple-wwdc-2026-vision-pro-2',                      terms: 'Apple WWDC 2026 Vision Pro 2' },
  { category: 'tech',     url: 'https://www.cnbc.com/2026/05/13/nvidia-q1-earnings-may-2026',                          terms: 'Nvidia Q1 earnings May 2026' },
  { category: 'tech',     url: 'https://techcrunch.com/2026/05/14/tesla-robotaxi-launch-q2',                           terms: 'Tesla robotaxi launch Q2 2026' },
  { category: 'tech',     url: 'https://www.bloomberg.com/news/articles/2026-05-12/meta-quest-4-release-date',         terms: 'Meta Quest 4 release 2026' },
  { category: 'tech',     url: 'https://www.theinformation.com/articles/anthropic-claude-5-release-summer-2026',       terms: 'Anthropic Claude 5 release 2026' },
  { category: 'tech',     url: 'https://www.theverge.com/2026/5/14/google-pixel-11-leak-specs',                        terms: 'Google Pixel 11 specs 2026' },
  { category: 'tech',     url: 'https://techcrunch.com/2026/05/16/spacex-starship-mars-mission-2026',                  terms: 'SpaceX Starship Mars 2026' },
  { category: 'tech',     url: 'https://www.cnbc.com/2026/05/15/microsoft-copilot-enterprise-numbers-may',             terms: 'Microsoft Copilot enterprise May 2026' },
  { category: 'tech',     url: 'https://arstechnica.com/2026/05/14/amd-mi400-launch-june',                             terms: 'AMD MI400 launch June 2026' },
  { category: 'tech',     url: 'https://www.theverge.com/2026/5/11/samsung-galaxy-z-fold-7-release',                   terms: 'Samsung Galaxy Z Fold 7 release' },

  // ── POLITICS / MARKETS ────────────────────────────────────────────────────
  { category: 'politics', url: 'https://www.bloomberg.com/news/articles/2026-05-14/fed-rate-decision-june-fomc',       terms: 'Fed rate cut June FOMC 2026' },
  { category: 'politics', url: 'https://www.reuters.com/world/europe/uk-general-election-july-2026',                   terms: 'UK general election July 2026' },
  { category: 'politics', url: 'https://www.reuters.com/world/us/biden-trump-rematch-polls-may-2026',                  terms: 'US election polls May 2026' },
  { category: 'politics', url: 'https://www.ft.com/content/eu-summit-june-2026-ukraine-aid',                           terms: 'EU summit June 2026 Ukraine' },
  { category: 'politics', url: 'https://www.bloomberg.com/news/articles/2026-05-13/china-gdp-q2-forecast',             terms: 'China GDP Q2 2026 forecast' },
  { category: 'politics', url: 'https://www.reuters.com/world/india/india-election-results-june-2026',                 terms: 'India election results June 2026' },
  { category: 'politics', url: 'https://www.ft.com/content/japan-boj-rate-hike-june-2026',                             terms: 'Japan BOJ rate hike June 2026' },
  { category: 'politics', url: 'https://www.bloomberg.com/news/articles/2026-05-15/ecb-rate-decision-june',            terms: 'ECB rate decision June 2026' },
  { category: 'politics', url: 'https://www.reuters.com/markets/commodities/oil-price-summer-2026-forecast',           terms: 'oil price summer 2026' },
  { category: 'politics', url: 'https://www.bloomberg.com/news/articles/2026-05-12/gold-price-2500-target',            terms: 'gold price 2500 target 2026' },

  // ── SPORTS ────────────────────────────────────────────────────────────────
  { category: 'sports',   url: 'https://www.espn.com/nba/story/_/finals-2026-game-1-preview',                          terms: 'NBA Finals 2026 Game 1' },
  { category: 'sports',   url: 'https://www.theathletic.com/champions-league-final-2026-preview',                      terms: 'Champions League final 2026 winner' },
  { category: 'sports',   url: 'https://www.skysports.com/football/news/premier-league-final-matchday-2026',           terms: 'Premier League final matchday 2026' },
  { category: 'sports',   url: 'https://www.formula1.com/en/latest/article/monaco-gp-2026-preview.html',               terms: 'Monaco GP 2026 winner' },
  { category: 'sports',   url: 'https://www.espn.com/nfl/story/_/2026-draft-first-pick-prediction',                    terms: 'NFL 2026 draft first pick' },
  { category: 'sports',   url: 'https://www.theathletic.com/mlb/2026/world-series-odds-preseason',                     terms: 'MLB World Series 2026 odds' },
  { category: 'sports',   url: 'https://www.bbc.com/sport/tennis/french-open-2026-preview',                            terms: 'French Open 2026 winner' },
  { category: 'sports',   url: 'https://www.espn.com/soccer/champions-league/story/_/uefa-final-2026',                 terms: 'UEFA Champions League final 2026' },
  { category: 'sports',   url: 'https://www.formula1.com/en/latest/article/spanish-gp-2026.html',                      terms: 'Spanish GP 2026 winner' },
  { category: 'sports',   url: 'https://www.theathletic.com/nba/2026/mvp-race-final',                                  terms: 'NBA MVP 2026 winner' },
  { category: 'sports',   url: 'https://www.skysports.com/boxing/news/heavyweight-title-fight-june-2026',              terms: 'heavyweight title fight June 2026' },
  { category: 'sports',   url: 'https://www.espn.com/golf/story/_/us-open-2026-preview',                               terms: 'US Open golf 2026 winner' },

  // ── OTHER ─────────────────────────────────────────────────────────────────
  { category: 'other',    url: 'https://variety.com/2026/film/summer-blockbuster-box-office-predictions',              terms: 'summer 2026 box office' },
  { category: 'other',    url: 'https://www.reuters.com/business/aerospace-defense/boeing-737-deliveries-q2-2026',     terms: 'Boeing 737 deliveries Q2 2026' },
  { category: 'other',    url: 'https://www.theguardian.com/environment/2026/05/global-temperature-record-2026',       terms: 'global temperature record 2026' },
  { category: 'other',    url: 'https://www.bbc.com/news/science-environment-65432198',                                terms: 'space mission launch June 2026' },
  { category: 'other',    url: 'https://variety.com/2026/tv/emmy-nominations-2026-predictions',                        terms: 'Emmy nominations 2026' },
];

export const ARTICLES = [
  // CRYPTO
  { category: 'CRYPTO',   urls: ['https://www.coindesk.com/markets/2026/05/15/bitcoin-etf-inflows-record-may', '', ''] },
  { category: 'CRYPTO',   urls: ['https://decrypt.co/2026/05/16/solana-tvl-record-high-may', '', ''] },
  { category: 'CRYPTO',   urls: ['https://www.coindesk.com/policy/2026/05/10/sec-solana-etf-decision-june', '', ''] },
  { category: 'CRYPTO',   urls: ['https://www.theblock.co/post/2026/05/15/coinbase-q1-earnings-record', '', ''] },
  { category: 'CRYPTO',   urls: ['https://www.cointelegraph.com/news/ethereum-pectra-upgrade-mainnet-june-2026', '', ''] },
  { category: 'CRYPTO',   urls: ['https://cryptobriefing.com/2026/05/15/chainlink-ccip-integration-major-bank', '', ''] },
  { category: 'CRYPTO',   urls: ['https://decrypt.co/2026/05/14/xrp-etf-approval-summer-2026', '', ''] },

  // TECH
  { category: 'TECH',     urls: ['https://www.theverge.com/2026/5/12/apple-wwdc-2026-vision-pro-2', '', ''] },
  { category: 'TECH',     urls: ['https://techcrunch.com/2026/05/14/tesla-robotaxi-launch-q2', '', ''] },
  { category: 'TECH',     urls: ['https://www.cnbc.com/2026/05/13/nvidia-q1-earnings-may-2026', '', ''] },
  { category: 'TECH',     urls: ['https://www.theinformation.com/articles/anthropic-claude-5-release-summer-2026', '', ''] },
  { category: 'TECH',     urls: ['https://www.bloomberg.com/news/articles/2026-05-12/meta-quest-4-release-date', '', ''] },
  { category: 'TECH',     urls: ['https://arstechnica.com/2026/05/14/amd-mi400-launch-june', '', ''] },
  { category: 'TECH',     urls: ['https://techcrunch.com/2026/05/16/spacex-starship-mars-mission-2026', '', ''] },

  // MARKETS
  { category: 'MARKETS',  urls: ['https://www.bloomberg.com/news/articles/2026-05-14/fed-rate-decision-june-fomc', '', ''] },
  { category: 'MARKETS',  urls: ['https://www.bloomberg.com/news/articles/2026-05-13/china-gdp-q2-forecast', '', ''] },
  { category: 'MARKETS',  urls: ['https://www.ft.com/content/japan-boj-rate-hike-june-2026', '', ''] },
  { category: 'MARKETS',  urls: ['https://www.reuters.com/markets/commodities/oil-price-summer-2026-forecast', '', ''] },
  { category: 'MARKETS',  urls: ['https://www.bloomberg.com/news/articles/2026-05-12/gold-price-2500-target', '', ''] },

  // POLITICS
  { category: 'POLITICS', urls: ['https://www.reuters.com/world/europe/uk-general-election-july-2026', '', ''] },
  { category: 'POLITICS', urls: ['https://www.reuters.com/world/us/biden-trump-rematch-polls-may-2026', '', ''] },
  { category: 'POLITICS', urls: ['https://www.ft.com/content/eu-summit-june-2026-ukraine-aid', '', ''] },
  { category: 'POLITICS', urls: ['https://www.reuters.com/world/india/india-election-results-june-2026', '', ''] },

  // SPORTS
  { category: 'SPORTS',   urls: ['https://www.espn.com/nba/story/_/finals-2026-game-1-preview', '', ''] },
  { category: 'SPORTS',   urls: ['https://www.theathletic.com/champions-league-final-2026-preview', '', ''] },
  { category: 'SPORTS',   urls: ['https://www.formula1.com/en/latest/article/monaco-gp-2026-preview.html', '', ''] },
  { category: 'SPORTS',   urls: ['https://www.espn.com/nfl/story/_/2026-draft-first-pick-prediction', '', ''] },
  { category: 'SPORTS',   urls: ['https://www.bbc.com/sport/tennis/french-open-2026-preview', '', ''] },
  { category: 'SPORTS',   urls: ['https://www.theathletic.com/nba/2026/mvp-race-final', '', ''] },

  // OTHER
  { category: 'OTHER',    urls: ['https://variety.com/2026/film/summer-blockbuster-box-office-predictions', '', ''] },
  { category: 'OTHER',    urls: ['https://www.reuters.com/business/aerospace-defense/boeing-737-deliveries-q2-2026', '', ''] },
  { category: 'OTHER',    urls: ['https://www.theguardian.com/environment/2026/05/global-temperature-record-2026', '', ''] },
];
