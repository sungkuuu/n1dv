export interface Report {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  link?: string;
}

export const reports: Report[] = [
  {
    id: 'weekly-brief-feb-27-2026',
    title: 'Nexus One Weekly Report: Macro Shocks, ETF Reversals, and the $6B March Mega Unlock',
    date: 'Feb 27, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'Macro tariff shocks, VIX spike, Bitcoin short squeeze, ETF flow reversal, and the $6B March token unlock risk. Full analysis of on-chain indicators, NUPL/MVRV, and strategic suggestions.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-brief-feb-27-2026'
  },
  {
    id: 'bitcoin-market-cycle-2026-analysis',
    title: '2026 BTC Market Cycle: 70% Crash vs. $60K Floor',
    date: 'Feb 26, 2026',
    category: 'DEEP RESEARCH',
    summary: 'A comprehensive probability assessment comparing a 70% historical drawdown against a $60K structural support driven by institutional ETF flows and on-chain fundamentals.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/research/bitcoin-market-cycle-2026-analysis'
  },
  {
    id: 'optimism-op-dcf-analysis',
    title: '90% Margins & The $270M Wipeout: Why Base Really Left Optimism',
    date: 'Feb 23, 2026',
    category: 'DEEP RESEARCH',
    summary: 'DCF modeling reveals $286M in permanent cash flows evaporated from the Optimism treasury after Coinbase\'s Base exit. A forensic analysis of the 15% royalty trigger, the hollowed-out OP-0017 buyback, and the open-source ecosystem dilemma.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/optimism-op-dcf-analysis'
  },
  {
    id: 'uniswap-fee-switch-dilemma',
    title: 'The Uniswap Fee Switch Dilemma: A 25x P/E Call Option and the Market\'s Hidden Alpha',
    date: 'Feb 20, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Applying the 25% fee burn governance proposal to $1.2B annualized revenue places $UNI at 25x P/E. A binary call option on regulatory clarity, v4 LVR defense, and Unichain sequencer revenue.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/uniswap-fee-switch-dilemma'
  },
  {
    id: 'weekly-brief-feb-13-2026',
    title: 'Nexus One Weekly Report: The Great Decoupling and Liquidity Test',
    date: 'Feb 13, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'Analyzing the multidimensional decoupling in macro policies and crypto market structure, alongside the resilience of institutional accumulation.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-brief-feb-13-2026'
  },
  {
    id: 'zcash-500x-thesis',
    title: 'Digital Privacy\'s Asymmetric Bet: A Deep Dive Verification of Barry Silbert\'s "Zcash 500x" Thesis',
    date: 'Feb 13, 2026',
    category: 'DEEP RESEARCH',
    summary: 'A critical verification of the $2 Trillion market cap thesis. Is privacy the next HTTPS of money, or a regulatory trap?',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/zcash-500x-thesis'
  },
  {
    id: 'bittensor-500x-narrative',
    title: 'Barry Silbert\'s Bittensor 500x Narrative: A Replay of Bitcoin 2012?',
    date: 'Feb 12, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Analyzing the math and logic behind the $1 Trillion market cap thesis. Is Bittensor the \'Monetary Primitive of Intelligence\' or just hype?',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/bittensor-500x-narrative'
  },
  {
    id: 'ethereum-agentic-layer',
    title: 'The Settlement Layer of Trust: Strategic Pivot and Competitive Advantage of Ethereum in the Agentic Economy',
    date: 'Feb 11, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Ethereum pivots from \'World Computer\' to \'Global Registry of Trust\'. While Solana wins execution, Ethereum secures the keystone layers: Identity & Settlement via ERC-8004.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/ethereum-agentic-layer'
  },
  {
    id: 'fat-app-thesis',
    title: 'The End of the Fat Protocol Thesis and the Dawn of the \'Fat App\' Era',
    date: 'Feb 11, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Crypto markets bifurcate: \'Ghost Chain\' infra vs. High-Revenue Apps. As costs collapse, value shifts to the \'Dopamine Economy\' (Polymarket, Hyperliquid) over empty blockspace.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/fat-app-thesis'
  },
  {
    id: 'weekly-brief-feb-10-2026',
    title: 'Weekly Report: The Trust Test & Macro Headwinds',
    date: 'Feb 10, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'BTC volatility threatens $60k amid macro pressure. BlackRock IBIT dominates with concentrated inflows as Kimchi Premium collapses to 1%. Institutional flows, macro indicators & market sentiment analysis.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-brief-feb-10-2026'
  },
  {
    id: 'six-sigma-stress-test',
    title: 'Structural Risk Assessment: "Six Sigma" Stress Test of USDe',
    date: 'Feb 9, 2026',
    category: 'DEEP RESEARCH',
    summary: 'A quantitative analysis of Ethena\'s delta neutrality under "Six Sigma" tail risk scenarios, calculating the 17-day survival runway of the Reserve Fund during extreme negative funding.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/six-sigma-stress-test'
  },
  {
    id: 'dencun-paradox',
    title: 'The Dencun Paradox: Ethereum\'s Structural Divergence',
    date: 'Feb 9, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Ethereum L1 revenue collapsed 99.7% post-Dencun, yet ecosystem dominance solidified at 85%. How the shift from B2C gas seller to B2B data anchor redefined valuation models.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/dencun-paradox'
  },
  {
    id: 'weekly-brief-feb-06-2026',
    title: 'Weekly Report: The Great Decoupling & Institutional Capitulation',
    date: 'Feb 6, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'BTC falls to $60k as \'Warsh Shock\' hits liquidity. Korea lifts ban on corporate crypto accounts. Analysis of the 50% drawdown and ETF outflows.',
    author: 'Nexus One Weekly Report',
    content: '',
    link: '/insight/weekly-brief-feb-06-2026'
  },
  {
    id: 'usde-synthetic-dollar-paradox',
    title: 'The Mirage of the "10/10" Crisis: A Forensic Critique of the USDe Market Event',
    date: 'Feb 9, 2026',
    category: 'DEEP RESEARCH',
    summary: 'A logical and forensic verification dismantling the "Structural Failure" discourse surrounding the Oct 10th USDe depegging event.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/usde-synthetic-dollar-paradox'
  },
  {
    id: 'market-deep-dive-feb-2026',
    title: 'Global Risk Assets: The Bear Trap Debate',
    date: 'Feb 06, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Structural transition, AI Capex reality check, and the death of the 4-year cycle. Analyzing Kevin Warsh\'s nomination impact, Nasdaq-BTC 0.80 correlation, and the perpetual beta regime.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/market-deep-dive-feb-2026'
  },
  {
    id: 'hyperliquid-valuation',
    title: 'Equity Research: Hyperliquid (HYPE) – Structural Alpha & Valuation Re-Rating',
    date: 'Feb 7, 2026',
    category: 'DEEP RESEARCH',
    summary: 'A forensic valuation analysis challenging the \'bubble\' narrative. Why Hyperliquid\'s 99% operating margins and ~30x P/E ratio justify a $33B FDV compared to Coinbase and Solana.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/hyperliquid-valuation'
  },
  {
    id: 'risk-off-contagion',
    title: 'Weekly Insight: Risk-Off Contagion & The Flight to Quality',
    date: 'Feb 03, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'The Fed\'s hawkish hold and Kevin Warsh nomination trigger commodity flash crash. N1DV Vault\'s 40% stablecoin allocation proves defensive strength.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-risk-off-contagion'
  }
];
