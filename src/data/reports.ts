export interface Report {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  link?: string;
  badge?: {
    text: string;
    variant: string;
  };
  description?: string;
  readTime?: string;
}

export const reports: Report[] = [
  {
    id: 'weekly-brief-may-25-2026',
    badge: {
      text: 'WEEKLY BRIEF',
      variant: 'outline-blue'
    },
    title: 'Nexus One Weekly Digital Asset Market Report - May 25 to June 1, 2026',
    description:
      'BTC -5.1% to $73.3K on 9 days of ETF outflows, hawkish Fed, WTI -16% on US-Iran easing; AI (WLD/VVV) and DePIN (Aethir/Filecoin) counter-trend strength, RWA credit fee growth, Sui CME futures, and the 6/10 CPI pivot.',
    date: '2026-06-01',
    category: 'WEEKLY BRIEF',
    summary:
      'BTC -5.1% to $73.3K on 9 days of ETF outflows, hawkish Fed, WTI -16% on US-Iran easing; AI (WLD/VVV) and DePIN (Aethir/Filecoin) counter-trend strength, RWA credit fee growth, Sui CME futures, and the 6/10 CPI pivot.',
    readTime: '30 min read',
    author: 'Nexus One Digital Asset Research',
    content: '',
    link: '/insights/weekly-brief-may-25-2026'
  },
  {
    id: 'chainlink-ccip-link-fundamentals-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title:
      'Chainlink (LINK): CCIP Migration & Tokenomics After the Kelp DAO Incident',
    description:
      'Kelp DAO ($292M) triggers a flight-to-quality to Chainlink CCIP: ~$4B migrated (Lombard, Solv, Kraken), record ~$1.3B weekly volume, LINK decoupling, 72.7% circulating + Staking v0.2 lock-up, and a rich PSR (29x-97x) with crowded longs.',
    date: '2026-05-29',
    category: 'DEEP RESEARCH',
    summary:
      'Kelp DAO ($292M) triggers a flight-to-quality to Chainlink CCIP: ~$4B migrated (Lombard, Solv, Kraken), record ~$1.3B weekly volume, LINK decoupling, 72.7% circulating + Staking v0.2 lock-up, and a rich PSR (29x-97x) with crowded longs.',
    readTime: '35 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/chainlink-ccip-link-fundamentals-2026'
  },
  {
    id: 'morpho-aave-hegemony-valuation-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title:
      'DeFi Lending Hegemony War: Morpho vs. Aave Valuation & Tokenomics (2026)',
    description:
      'Morpho FDV ($2.28B) flips Aave ($1.45B) on narrative, but Aave is the only DeFi cash cow: Hub-and-Spoke vs. Morpho Blue, the April 2026 Kelp DAO stress test, Coinbase/Apollo B2B, P/E gap, and the 22.6% unlock overhang.',
    date: '2026-05-29',
    category: 'DEEP RESEARCH',
    summary:
      'Morpho FDV ($2.28B) flips Aave ($1.45B) on narrative, but Aave is the only DeFi cash cow: Hub-and-Spoke vs. Morpho Blue, the April 2026 Kelp DAO stress test, Coinbase/Apollo B2B, P/E gap, and the 22.6% unlock overhang.',
    readTime: '35 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/morpho-aave-hegemony-valuation-2026'
  },
  {
    id: 'weekly-brief-may-18-2026',
    badge: {
      text: 'WEEKLY BRIEF',
      variant: 'outline-blue'
    },
    title: 'Nexus One Weekly Digital Asset Market Report - May 18–24, 2026',
    description:
      'BTC range $74K–$78K, 6-day BTC ETF outflows ($1.55B), Verus $20M exploit, Hyperliquid SEC exemption narrative, RWA $31.4B, and May 29 PCE risk.',
    date: '2026-05-25',
    category: 'WEEKLY BRIEF',
    summary:
      'BTC range $74K–$78K, 6-day BTC ETF outflows ($1.55B), Verus $20M exploit, Hyperliquid SEC exemption narrative, RWA $31.4B, and May 29 PCE risk.',
    readTime: '35 min read',
    author: 'Nexus One Digital Asset Research Desk',
    content: '',
    link: '/insights/weekly-brief-may-18-2026'
  },
  {
    id: 'clarity-act-project-classification-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title:
      'Clarity Act Project Classification: SEC/CFTC Jurisdictional Integration',
    description:
      'Senate Banking draft analysis: digital commodity certification, Regulation Crypto caps, Section 404 stablecoin yield, Section 105 XRP, and DeFi safe harbor winners vs losers.',
    date: '2026-05-18',
    category: 'DEEP RESEARCH',
    summary:
      'Senate Banking draft analysis: digital commodity certification, Regulation Crypto caps, Section 404 stablecoin yield, Section 105 XRP, and DeFi safe harbor winners vs losers.',
    readTime: '40 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/clarity-act-project-classification-2026'
  },
  {
    id: 'circle-arc-economic-os-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title:
      'Circle Arc Blockchain and the ARC Token: Economic OS Architecture and Capital Markets',
    description:
      'GENIUS Act commoditization defense, $3B Arc presale, Malachite/Reth architecture, USDC gas burn economics, Agent Stack M2M, and permissioned-chain centralization risks.',
    date: '2026-05-18',
    category: 'DEEP RESEARCH',
    summary:
      'GENIUS Act commoditization defense, $3B Arc presale, Malachite/Reth architecture, USDC gas burn economics, Agent Stack M2M, and permissioned-chain centralization risks.',
    readTime: '45 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/circle-arc-economic-os-2026'
  },
  {
    id: 'weekly-brief-may-03-2026',
    badge: {
      text: 'WEEKLY BRIEF',
      variant: 'outline-blue'
    },
    title: 'Nexus One Weekly Digital Asset Market Report - May 3, 2026',
    description:
      'BTC reclaim, ETF inflow divergence, final Powell FOMC split, KelpDAO shock spillover, RWA share shifts, and May macro/unlock risk map.',
    date: '2026-05-04',
    category: 'WEEKLY BRIEF',
    summary:
      'BTC reclaim, ETF inflow divergence, final Powell FOMC split, KelpDAO shock spillover, RWA share shifts, and May macro/unlock risk map.',
    readTime: '25 min read',
    author: 'Nexus One Research',
    content: '',
    link: '/insights/weekly-brief-may-03-2026'
  },
  {
    id: 'centrifuge-rwa-structural-valuation-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title:
      'Structural Valuation and the Real-World Asset Divergence: A Deep-Dive Analysis of Centrifuge Protocol',
    description:
      'CFG valuation vs Ondo: infrastructure take-rate, TVL stickiness after Resolv, V3 indexing gaps, April 29 fee switch, and an observe-and-verify playbook.',
    date: '2026-05-04',
    category: 'DEEP RESEARCH',
    summary:
      'CFG valuation vs Ondo: infrastructure take-rate, TVL stickiness after Resolv, V3 indexing gaps, April 29 fee switch, and an observe-and-verify playbook.',
    readTime: '25 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/centrifuge-rwa-structural-valuation-2026'
  },
  {
    id: 'venice-uncapped-mint-risk-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title: 'A single key, a $700M token: inside Venice\'s uncapped mint',
    description:
      'On-chain deep dive into Venice token mint authority design, governance surface, and structural valuation risk relative to decentralized AI peers.',
    date: '2026-04-23',
    category: 'DEEP RESEARCH',
    summary:
      'On-chain deep dive into Venice token mint authority design, governance surface, and structural valuation risk relative to decentralized AI peers.',
    readTime: '35 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/venice-uncapped-mint-risk-2026'
  },
  {
    id: 'weekly-brief-apr-20-2026',
    badge: {
      text: 'WEEKLY BRIEF',
      variant: 'outline-blue'
    },
    title: 'Nexus One Weekly Digital Asset Market Report - April 20, 2026',
    description:
      'Weekly macro-to-on-chain synthesis covering Hormuz risk shocks, ETF flows, DeFi contagion, L1/L2 metrics, and the coming week\'s key catalysts.',
    date: '2026-04-20',
    category: 'WEEKLY BRIEF',
    summary:
      'Weekly macro-to-on-chain synthesis covering Hormuz risk shocks, ETF flows, DeFi contagion, L1/L2 metrics, and the coming week\'s key catalysts.',
    readTime: '35 min read',
    author: 'NexusOne Research Team',
    content: '',
    link: '/insights/weekly-brief-apr-20-2026'
  },
  {
    id: 'canton-network-bme-crossover-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title:
      'Canton Network (CC) Valuation: Beyond the P/E Illusion to the BME Crossover',
    description:
      'A deep-dive into Canton Network valuation optics, hidden inflation costs, and the projected Burn-Mint Equilibrium crossover that may trigger structural repricing.',
    date: '2026-04-20',
    category: 'DEEP RESEARCH',
    summary:
      'A deep-dive into Canton Network valuation optics, hidden inflation costs, and the projected Burn-Mint Equilibrium crossover that may trigger structural repricing.',
    readTime: '40 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/canton-network-bme-crossover-2026'
  },
  {
    id: 'cross-chain-vulnerability-kelp-aave-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title:
      '2026 Cross-Chain Infrastructure Vulnerability and Contagion Risk Analysis: Focusing on Kelp DAO, LayerZero, and AAVE',
    description:
      'An in-depth forensic analysis of the $292M Kelp DAO exploit, the structural contagion to AAVE, and the looming threat of AI-driven autonomous exploits.',
    date: '2026-04-20',
    category: 'DEEP RESEARCH',
    summary:
      'An in-depth forensic analysis of the $292M Kelp DAO exploit, the structural contagion to AAVE, and the looming threat of AI-driven autonomous exploits.',
    readTime: '45 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/cross-chain-vulnerability-kelp-aave-2026'
  },
  {
    id: 'weekly-brief-apr-13-2026',
    badge: {
      text: 'WEEKLY BRIEF',
      variant: 'outline-blue'
    },
    title: 'Nexus One Weekly Digital Asset Market Report - April 13, 2026',
    description:
      'Analysis of the market impact following the collapse of US-Iran peace negotiations, March CPI inflation data, and institutional accumulation trends.',
    date: '2026-04-13',
    category: 'WEEKLY BRIEF',
    summary:
      'Analysis of the market impact following the collapse of US-Iran peace negotiations, March CPI inflation data, and institutional accumulation trends.',
    readTime: '25 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/weekly-brief-apr-13-2026'
  },
  {
    id: 'aave-vs-morpho-governance-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title: 'Paradigm Shift in DeFi Lending: Morpho vs. AAVE Valuation & Governance Crisis',
    description:
      "An in-depth comparison of AAVE and Morpho's architectures, capital efficiency, and the ripple effects of AAVE's recent governance civil war.",
    date: '2026-04-13',
    category: 'DEEP RESEARCH',
    summary:
      "An in-depth comparison of AAVE and Morpho's architectures, capital efficiency, and the ripple effects of AAVE's recent governance civil war.",
    readTime: '35 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/aave-vs-morpho-governance-2026'
  },
  {
    id: 'aptos-structural-reset-2026',
    badge: {
      text: 'DEEP RESEARCH',
      variant: 'outline-green'
    },
    title: 'APT Just Lost 70% of its TVL: A Structural Reset, Not a Crisis',
    description:
      "An in-depth fundamental analysis of the Aptos ecosystem's evolution, and why October 2026 marks the real inflection point.",
    date: '2026-04-10',
    category: 'DEEP RESEARCH',
    summary:
      "An in-depth fundamental analysis of the Aptos ecosystem's evolution, and why October 2026 marks the real inflection point.",
    readTime: '35 min read',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/aptos-structural-reset-2026'
  },
  {
    id: 'weekly-brief-apr-05-2026',
    title: 'Nexus One Weekly Digital Asset Market Report - April 5, 2026',
    date: 'Apr 5, 2026',
    category: 'WEEKLY BRIEF',
    summary:
      'Iran/Hormuz shock, tariff regime reset, Fed freeze probability, BTC/ETH technical setup, ETF outflows, L1/L2 and DeFi diagnostics, and key event/unlock risks for next week.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-brief-apr-05-2026'
  },
  {
    id: 'q1-2026-digital-asset-market-quarterly-report',
    title: 'Q1 2026 Market Report: Macro Realignment & On-chain Evolution',
    date: 'Apr 5, 2026',
    category: 'QUARTERLY REPORT',
    summary:
      'Q1 2026 macro shock and crypto correction, ETF flows and L1/L2 divergence, RWA and stablecoin infrastructure, prediction markets and agentic commerce, Korea exchange dynamics, and global regulatory catalysts.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/q1-2026-digital-asset-market-quarterly-report'
  },
  {
    id: 'raoul-pal-macro-liquidity-peak-2026',
    title: "An In-Depth Verification Report on Raoul Pal's 2026 Bitcoin Macro Liquidity Peak Theory and the 5.4-Year Debt Cycle",
    date: 'Apr 1, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Verification of the 2026 macro liquidity peak thesis: 5.4-year debt cycle, debt-wall rollover dynamics, ISM coupling, demographic debasement pressure, and scenario risks.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/raoul-pal-macro-liquidity-peak-2026'
  },
  {
    id: 'weekly-brief-mar-30-2026',
    title: 'Nexus One Weekly Digital Asset Market Report - March 30, 2026',
    date: 'Mar 30, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'Comprehensive macro and crypto market deep-dive covering core indicators, ETF flows, on-chain sector dynamics, April events, and token unlock implications.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-brief-mar-30-2026'
  },
  {
    id: 'peaq-m2m-deep-value-analysis',
    title: 'In-Depth Analysis of the Peaq Network: Its Role in the M2M Transaction Ecosystem and Deep Value Investment Valuation',
    date: 'Mar 29, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Comprehensive analysis of Peaq’s machine-native L1 architecture, DePIN ecosystem moat, real-yield commercialization, tokenomics, regulatory catalysts, and risk-adjusted deep value thesis.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/peaq-m2m-deep-value-analysis'
  },
  {
    id: 'weekly-brief-mar-20-2026',
    title: 'Nexus One Weekly Digital Asset Market Report - March 20, 2026',
    date: 'Mar 20, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'In-depth macro and digital asset analysis: on-chain decoupling, ETF flow dynamics, protocol metrics, anomalies, and strategic outlook for the next week.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-brief-mar-20-2026'
  },
  {
    id: 'solana-global-infrastructure',
    title: 'Solana: Breaking the ‘Memecoin Casino’ Shell to Become ‘Global Infrastructure’',
    date: 'Mar 20, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Deconstructing valuation and the structural deficit: on-chain decoupling, memecoin dependency discount, and the path to positive real yield via payments, AI, and DePIN.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/solana-global-infrastructure'
  },
  {
    id: 'weekly-brief-mar-10-2026',
    title: 'Nexus One Weekly Digital Asset Market Report - March 10, 2026',
    date: 'Mar 10, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'The intersection of institutional capital, RWA, and macro volatility. TL;DR on ETF flows, on-chain vs derivatives divergence, L2 parasitic dilemma, and key sector trends.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-brief-mar-10-2026'
  },
  {
    id: 'tron-m2m-ecosystem-analysis',
    title: "In-Depth Analysis Report on TRON's Architecture and On-chain Metric Deviation within the M2M Machine Economy Ecosystem",
    date: 'Mar 11, 2026',
    category: 'DEEP RESEARCH',
    summary: 'TRON architecture vs M2M/Machine Economy requirements. DPoS centralization, Bandwidth/Energy cost trap, TVM limitations, on-chain metrics 2024-2026, comparison with peaq and IOTA.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/tron-m2m-ecosystem-analysis'
  },
  {
    id: 'pump-fun-value-capture-2026',
    title: 'Pump.fun: Revenue Sustainability & $PUMP Value Capture',
    date: 'Mar 4, 2026',
    category: 'DEEP RESEARCH',
    summary: 'In-depth analysis of Pump.fun\'s business model revenue sustainability, $PUMP token value capture failure, competitive landscape, regulatory risks, and July 2026 cliff unlock.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/pump-fun-value-capture-2026'
  },
  {
    id: 'l1-infrastructure-machine-economy-2026',
    title: 'L1 Blockchain Infrastructure in the Machine Economy Era',
    date: 'Mar 3, 2026',
    category: 'DEEP RESEARCH',
    summary: 'Analysis of L1 blockchain infrastructure competitiveness in the machine economy era: M2M transaction environments, Solana, Sui, Hyperliquid, Base, Tron, Peaq, Monad, Sei, Aptos, and IoTeX.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insights/l1-infrastructure-machine-economy-2026'
  },
  {
    id: 'weekly-brief-feb-27-2026',
    title: 'Nexus One Weekly Digital Asset Market Report - February 27, 2026',
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
    title: 'Nexus One Weekly Digital Asset Market Report - February 13, 2026',
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
    title: 'Nexus One Weekly Digital Asset Market Report - February 10, 2026',
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
    title: 'Nexus One Weekly Digital Asset Market Report - February 6, 2026',
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
    title: 'Nexus One Weekly Digital Asset Market Report - February 3, 2026',
    date: 'Feb 03, 2026',
    category: 'WEEKLY BRIEF',
    summary: 'The Fed\'s hawkish hold and Kevin Warsh nomination trigger commodity flash crash. N1DV Vault\'s 40% stablecoin allocation proves defensive strength.',
    author: 'Nexus One Research Desk',
    content: '',
    link: '/insight/weekly-risk-off-contagion'
  }
];
