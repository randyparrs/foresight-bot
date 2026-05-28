// Rotating pool of live news sources for the bot.
// Uses section homepages — always current, no hardcoded article dates.
// The AI reads whatever is live on the page and generates the market/article.

export const MARKETS = [
  // ── CRYPTO ────────────────────────────────────────────────────────────────
  { category: 'CRYPTO',   url: 'https://coindesk.com/',                                    terms: 'latest crypto market news' },
  { category: 'CRYPTO',   url: 'https://cointelegraph.com/',                               terms: 'latest cryptocurrency news' },
  { category: 'CRYPTO',   url: 'https://decrypt.co/',                                      terms: 'latest crypto and web3 news' },
  { category: 'CRYPTO',   url: 'https://cryptobriefing.com/',                              terms: 'latest DeFi and crypto news' },
  { category: 'CRYPTO',   url: 'https://theblock.co/',                                     terms: 'latest blockchain and crypto news' },
  { category: 'CRYPTO',   url: 'https://bitcoinmagazine.com/',                             terms: 'latest Bitcoin news' },
  { category: 'CRYPTO',   url: 'https://coindesk.com/markets/',                            terms: 'crypto market price movements' },
  { category: 'CRYPTO',   url: 'https://cointelegraph.com/tags/bitcoin',                   terms: 'Bitcoin latest developments' },
  { category: 'CRYPTO',   url: 'https://cointelegraph.com/tags/ethereum',                  terms: 'Ethereum latest news' },
  { category: 'CRYPTO',   url: 'https://cryptobriefing.com/category/defi/',                terms: 'DeFi protocol latest news' },

  // ── TECH ──────────────────────────────────────────────────────────────────
  { category: 'TECH',     url: 'https://techcrunch.com/',                                  terms: 'latest tech startup news' },
  { category: 'TECH',     url: 'https://www.theverge.com/',                                terms: 'latest technology news' },
  { category: 'TECH',     url: 'https://arstechnica.com/',                                 terms: 'latest tech and science news' },
  { category: 'TECH',     url: 'https://venturebeat.com/',                                 terms: 'latest AI and enterprise tech news' },
  { category: 'TECH',     url: 'https://www.wired.com/',                                   terms: 'latest technology culture news' },
  { category: 'TECH',     url: 'https://techcrunch.com/category/artificial-intelligence/', terms: 'latest AI industry news' },
  { category: 'TECH',     url: 'https://www.theverge.com/ai-artificial-intelligence',      terms: 'AI industry latest developments' },
  { category: 'TECH',     url: 'https://arstechnica.com/ai/',                              terms: 'AI and machine learning latest' },

  // ── MARKETS ───────────────────────────────────────────────────────────────
  { category: 'MARKETS',  url: 'https://www.reuters.com/markets/',                         terms: 'latest financial markets news' },
  { category: 'MARKETS',  url: 'https://finance.yahoo.com/',                               terms: 'latest stock market news' },
  { category: 'MARKETS',  url: 'https://www.marketwatch.com/',                             terms: 'stock market and economy news' },
  { category: 'MARKETS',  url: 'https://www.reuters.com/markets/commodities/',             terms: 'commodities oil gold latest' },
  { category: 'MARKETS',  url: 'https://www.reuters.com/markets/rates-bonds/',             terms: 'interest rates and bonds latest' },

  // ── POLITICS ──────────────────────────────────────────────────────────────
  { category: 'POLITICS', url: 'https://www.reuters.com/world/',                           terms: 'latest world politics news' },
  { category: 'POLITICS', url: 'https://apnews.com/',                                      terms: 'latest global news' },
  { category: 'POLITICS', url: 'https://www.bbc.com/news/world',                           terms: 'latest world news' },
  { category: 'POLITICS', url: 'https://www.reuters.com/world/us/',                        terms: 'latest US politics news' },
  { category: 'POLITICS', url: 'https://apnews.com/world-news',                            terms: 'latest international politics' },

  // ── SPORTS ────────────────────────────────────────────────────────────────
  { category: 'SPORTS',   url: 'https://www.espn.com/nba/schedule/',                       terms: 'upcoming NBA game prediction next match winner' },
  { category: 'SPORTS',   url: 'https://www.espn.com/nfl/schedule/',                       terms: 'upcoming NFL game prediction next match winner' },
  { category: 'SPORTS',   url: 'https://www.espn.com/soccer/schedule/',                    terms: 'upcoming soccer match prediction next game winner' },
  { category: 'SPORTS',   url: 'https://www.bbc.com/sport/football/scores-fixtures',       terms: 'upcoming football fixture prediction next match winner' },
  { category: 'SPORTS',   url: 'https://www.skysports.com/football/fixtures',              terms: 'upcoming football match prediction next game winner' },
  { category: 'SPORTS',   url: 'https://www.formula1.com/en/racing/2026.html',             terms: 'upcoming Formula 1 race prediction next GP winner' },
  { category: 'SPORTS',   url: 'https://www.espn.com/tennis/schedule/',                    terms: 'upcoming tennis tournament prediction next match winner' },
  { category: 'SPORTS',   url: 'https://www.skysports.com/boxing/news',                    terms: 'upcoming boxing fight prediction winner' },

  // ── OTHER ─────────────────────────────────────────────────────────────────
  { category: 'OTHER',    url: 'https://www.bbc.com/news',                                 terms: 'latest global news story' },
  { category: 'OTHER',    url: 'https://apnews.com/oddities',                              terms: 'interesting and unusual news story' },
  { category: 'OTHER',    url: 'https://www.reuters.com/science/',                         terms: 'latest science news' },
  { category: 'OTHER',    url: 'https://www.bbc.com/news/science-environment',             terms: 'latest environment and climate news' },
  { category: 'OTHER',    url: 'https://techcrunch.com/category/space/',                   terms: 'latest space exploration news' },
];

export const ARTICLES = [
  // CRYPTO
  { category: 'CRYPTO',   urls: ['https://coindesk.com/',          'https://cointelegraph.com/',   'https://decrypt.co/'] },
  { category: 'CRYPTO',   urls: ['https://decrypt.co/',            'https://cryptobriefing.com/', 'https://theblock.co/'] },
  { category: 'CRYPTO',   urls: ['https://cointelegraph.com/',     'https://bitcoinmagazine.com/', 'https://coindesk.com/markets/'] },
  { category: 'CRYPTO',   urls: ['https://theblock.co/',           'https://decrypt.co/',          'https://coindesk.com/'] },
  { category: 'CRYPTO',   urls: ['https://cryptobriefing.com/',    'https://cointelegraph.com/',   'https://decrypt.co/'] },

  // TECH
  { category: 'TECH',     urls: ['https://techcrunch.com/',        'https://www.theverge.com/',    'https://arstechnica.com/'] },
  { category: 'TECH',     urls: ['https://venturebeat.com/',       'https://www.wired.com/',       'https://techcrunch.com/'] },
  { category: 'TECH',     urls: ['https://www.theverge.com/',      'https://arstechnica.com/',     'https://venturebeat.com/'] },
  { category: 'TECH',     urls: ['https://techcrunch.com/category/artificial-intelligence/', 'https://venturebeat.com/', 'https://www.theverge.com/ai-artificial-intelligence'] },

  // MARKETS
  { category: 'MARKETS',  urls: ['https://www.reuters.com/markets/', 'https://finance.yahoo.com/', 'https://www.marketwatch.com/'] },
  { category: 'MARKETS',  urls: ['https://www.marketwatch.com/',    'https://www.reuters.com/markets/', 'https://finance.yahoo.com/'] },
  { category: 'MARKETS',  urls: ['https://www.reuters.com/markets/commodities/', 'https://www.reuters.com/markets/rates-bonds/', 'https://finance.yahoo.com/'] },

  // POLITICS
  { category: 'POLITICS', urls: ['https://apnews.com/',            'https://www.reuters.com/world/', 'https://www.bbc.com/news/world'] },
  { category: 'POLITICS', urls: ['https://www.bbc.com/news/world', 'https://apnews.com/',           'https://www.reuters.com/world/us/'] },
  { category: 'POLITICS', urls: ['https://www.reuters.com/world/', 'https://apnews.com/world-news', 'https://www.bbc.com/news/world'] },

  // SPORTS
  { category: 'SPORTS',   urls: ['https://www.espn.com/',          'https://www.bbc.com/sport',    'https://www.skysports.com/'] },
  { category: 'SPORTS',   urls: ['https://www.bbc.com/sport/football', 'https://www.skysports.com/', 'https://www.espn.com/soccer/'] },
  { category: 'SPORTS',   urls: ['https://www.espn.com/nba/',      'https://www.espn.com/nfl/',    'https://www.bbc.com/sport'] },

  // OTHER
  { category: 'OTHER',    urls: ['https://www.bbc.com/news',       'https://apnews.com/',          'https://www.reuters.com/science/'] },
  { category: 'OTHER',    urls: ['https://www.reuters.com/science/', 'https://www.bbc.com/news/science-environment', 'https://techcrunch.com/category/space/'] },
];
