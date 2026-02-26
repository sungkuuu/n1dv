import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Thesis } from './pages/Thesis';
import { Letter } from './pages/Letter';
import { Insights } from './pages/Insights';
import { Partners } from './pages/Partners';
import { HyperliquidValuation } from './pages/HyperliquidValuation';
import { RiskOff } from './pages/RiskOff';
import { ChainAbstraction } from './pages/ChainAbstraction';
import { MarketInsightFeb2026 } from './pages/MarketInsightFeb2026';
import { USDeSyntheticDollarParadox } from './pages/USDeSyntheticDollarParadox';
import { WeeklyBriefFeb06 } from './pages/WeeklyBriefFeb06';
import { WeeklyBriefFeb10 } from './pages/WeeklyBriefFeb10';
import { DencunParadox } from './pages/DencunParadox';
import { SixSigmaStressTest } from './pages/SixSigmaStressTest';
import { FatAppThesis } from './pages/FatAppThesis';
import { EthereumAgenticLayer } from './pages/EthereumAgenticLayer';
import { BittensorNarrative } from './pages/BittensorNarrative';
import { ZcashThesis } from './pages/ZcashThesis';
import { WeeklyBriefFeb13 } from './pages/WeeklyBriefFeb13';
import { UniswapFeeSwitchDilemma } from './pages/UniswapFeeSwitchDilemma';
import { OptimismDCFAnalysis } from './pages/OptimismDCFAnalysis';
import { ScrollToTop } from './components/ScrollToTop';
import { ReferralRegister } from './components/ReferralRegister';
import { Dashboard } from './pages/Dashboard';
import { BitcoinMarketCycle2026Analysis } from './pages/BitcoinMarketCycle2026Analysis';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/research/bitcoin-market-cycle-2026-analysis" element={<BitcoinMarketCycle2026Analysis />} />
        <Route path="/insights/ethereum-agentic-layer" element={<EthereumAgenticLayer />} />
        <Route path="/insights/fat-app-thesis" element={<FatAppThesis />} />
        <Route path="/insights/bittensor-500x-narrative" element={<BittensorNarrative />} />
        <Route path="/insights/zcash-500x-thesis" element={<ZcashThesis />} />
        <Route path="/insights/six-sigma-stress-test" element={<SixSigmaStressTest />} />
        <Route path="/insights/dencun-paradox" element={<DencunParadox />} />
        <Route path="/insights/hyperliquid-valuation" element={<HyperliquidValuation />} />
        <Route path="/insight/weekly-risk-off-contagion" element={<RiskOff />} />
        <Route path="/insight/chain-abstraction-layer" element={<ChainAbstraction />} />
        <Route path="/insights/market-deep-dive-feb-2026" element={<MarketInsightFeb2026 />} />
        <Route path="/insights/usde-synthetic-dollar-paradox" element={<USDeSyntheticDollarParadox />} />
        <Route path="/insight/weekly-brief-feb-06-2026" element={<WeeklyBriefFeb06 />} />
        <Route path="/insight/weekly-brief-feb-10-2026" element={<WeeklyBriefFeb10 />} />
        <Route path="/insight/weekly-brief-feb-13-2026" element={<WeeklyBriefFeb13 />} />
        <Route path="/insights/uniswap-fee-switch-dilemma" element={<UniswapFeeSwitchDilemma />} />
        <Route path="/insights/optimism-op-dcf-analysis" element={<OptimismDCFAnalysis />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vault" element={<Navigate to="/dashboard" replace />} />
        <Route path="/referral" element={<ReferralRegister />} />
      </Routes>
    </>
  );
}

export default App;
