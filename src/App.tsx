import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';

/**
 * All pages are lazy-loaded so each route ships as its own chunk instead of
 * one multi-MB bundle. Markdown-based reports have no dedicated page at all —
 * they render through the generic /insights/:slug route (InsightPage), driven
 * by src/data/reports.ts + public/content/insights/{slug}.md.
 */
const page = <T extends Record<string, unknown>>(
  loader: () => Promise<T>,
  name: keyof T
) => lazy(() => loader().then((m) => ({ default: m[name] as React.ComponentType })));

const Home = page(() => import('./pages/Home'), 'Home');
const Thesis = page(() => import('./pages/Thesis'), 'Thesis');
const Letter = page(() => import('./pages/Letter'), 'Letter');
const Insights = page(() => import('./pages/Insights'), 'Insights');
const Partners = page(() => import('./pages/Partners'), 'Partners');
const HyperliquidValuation = page(() => import('./pages/HyperliquidValuation'), 'HyperliquidValuation');
const RiskOff = page(() => import('./pages/RiskOff'), 'RiskOff');
const ChainAbstraction = page(() => import('./pages/ChainAbstraction'), 'ChainAbstraction');
const MarketInsightFeb2026 = page(() => import('./pages/MarketInsightFeb2026'), 'MarketInsightFeb2026');
const USDeSyntheticDollarParadox = page(() => import('./pages/USDeSyntheticDollarParadox'), 'USDeSyntheticDollarParadox');
const WeeklyBriefFeb06 = page(() => import('./pages/WeeklyBriefFeb06'), 'WeeklyBriefFeb06');
const WeeklyBriefFeb10 = page(() => import('./pages/WeeklyBriefFeb10'), 'WeeklyBriefFeb10');
const WeeklyBriefFeb13 = page(() => import('./pages/WeeklyBriefFeb13'), 'WeeklyBriefFeb13');
const DencunParadox = page(() => import('./pages/DencunParadox'), 'DencunParadox');
const SixSigmaStressTest = page(() => import('./pages/SixSigmaStressTest'), 'SixSigmaStressTest');
const FatAppThesis = page(() => import('./pages/FatAppThesis'), 'FatAppThesis');
const EthereumAgenticLayer = page(() => import('./pages/EthereumAgenticLayer'), 'EthereumAgenticLayer');
const BittensorNarrative = page(() => import('./pages/BittensorNarrative'), 'BittensorNarrative');
const ZcashThesis = page(() => import('./pages/ZcashThesis'), 'ZcashThesis');
const WeeklyBriefFeb27 = page(() => import('./pages/WeeklyBriefFeb27'), 'WeeklyBriefFeb27');
const WeeklyBriefMar10 = page(() => import('./pages/WeeklyBriefMar10'), 'WeeklyBriefMar10');
const WeeklyBriefMar20 = page(() => import('./pages/WeeklyBriefMar20'), 'WeeklyBriefMar20');
const WeeklyBriefMar30 = page(() => import('./pages/WeeklyBriefMar30'), 'WeeklyBriefMar30');
const WeeklyBriefApr05 = page(() => import('./pages/WeeklyBriefApr05'), 'WeeklyBriefApr05');
const UniswapFeeSwitchDilemma = page(() => import('./pages/UniswapFeeSwitchDilemma'), 'UniswapFeeSwitchDilemma');
const OptimismDCFAnalysis = page(() => import('./pages/OptimismDCFAnalysis'), 'OptimismDCFAnalysis');
const ReferralRegister = page(() => import('./components/ReferralRegister'), 'ReferralRegister');
const Dashboard = page(() => import('./pages/Dashboard'), 'Dashboard');
const Vaults = page(() => import('./pages/Vaults'), 'Vaults');
const VaultDetailN1DV = page(() => import('./pages/VaultDetailN1DV'), 'VaultDetailN1DV');
const BitcoinMarketCycle2026Analysis = page(() => import('./pages/BitcoinMarketCycle2026Analysis'), 'BitcoinMarketCycle2026Analysis');
const L1InfrastructureMachineEconomy2026 = page(() => import('./pages/L1InfrastructureMachineEconomy2026'), 'L1InfrastructureMachineEconomy2026');
const PumpFunValueCapture2026 = page(() => import('./pages/PumpFunValueCapture2026'), 'PumpFunValueCapture2026');
const TronM2MEcosystemAnalysis = page(() => import('./pages/TronM2MEcosystemAnalysis'), 'TronM2MEcosystemAnalysis');
const SolanaGlobalInfrastructure = page(() => import('./pages/SolanaGlobalInfrastructure'), 'SolanaGlobalInfrastructure');
const PeaqM2MDeepValueAnalysis = page(() => import('./pages/PeaqM2MDeepValueAnalysis'), 'PeaqM2MDeepValueAnalysis');
const RaoulPalMacroLiquidityPeak2026 = page(() => import('./pages/RaoulPalMacroLiquidityPeak2026'), 'RaoulPalMacroLiquidityPeak2026');
const Q12026DigitalAssetMarketQuarterlyReport = page(() => import('./pages/Q12026DigitalAssetMarketQuarterlyReport'), 'Q12026DigitalAssetMarketQuarterlyReport');
const InsightPage = page(() => import('./pages/InsightPage'), 'InsightPage');
const YieldRadar = page(() => import('./pages/YieldRadar'), 'YieldRadar');
const TrackRecord = page(() => import('./pages/TrackRecord'), 'TrackRecord');

function RouteFallback() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-white/10 border-t-emerald-400 animate-spin" />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/research/bitcoin-market-cycle-2026-analysis" element={<BitcoinMarketCycle2026Analysis />} />
          <Route path="/insights/l1-infrastructure-machine-economy-2026" element={<L1InfrastructureMachineEconomy2026 />} />
          <Route path="/insights/pump-fun-value-capture-2026" element={<PumpFunValueCapture2026 />} />
          <Route path="/insights/tron-m2m-ecosystem-analysis" element={<TronM2MEcosystemAnalysis />} />
          <Route path="/insights/solana-global-infrastructure" element={<SolanaGlobalInfrastructure />} />
          <Route path="/insights/peaq-m2m-deep-value-analysis" element={<PeaqM2MDeepValueAnalysis />} />
          <Route path="/insights/q1-2026-digital-asset-market-quarterly-report" element={<Q12026DigitalAssetMarketQuarterlyReport />} />
          <Route path="/insights/raoul-pal-macro-liquidity-peak-2026" element={<RaoulPalMacroLiquidityPeak2026 />} />
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
          <Route path="/insight/weekly-brief-feb-27-2026" element={<WeeklyBriefFeb27 />} />
          <Route path="/insight/weekly-brief-mar-10-2026" element={<WeeklyBriefMar10 />} />
          <Route path="/insight/weekly-brief-mar-20-2026" element={<WeeklyBriefMar20 />} />
          <Route path="/insight/weekly-brief-mar-30-2026" element={<WeeklyBriefMar30 />} />
          <Route path="/insight/weekly-brief-apr-05-2026" element={<WeeklyBriefApr05 />} />
          <Route path="/insight/weekly-brief-feb-13-2026" element={<WeeklyBriefFeb13 />} />
          <Route path="/insights/uniswap-fee-switch-dilemma" element={<UniswapFeeSwitchDilemma />} />
          <Route path="/insights/optimism-op-dcf-analysis" element={<OptimismDCFAnalysis />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vaults" element={<Vaults />} />
          <Route path="/vaults/n1dv" element={<VaultDetailN1DV />} />
          <Route path="/vault" element={<Navigate to="/dashboard" replace />} />
          <Route path="/referral" element={<ReferralRegister />} />
          <Route path="/radar" element={<YieldRadar />} />
          <Route path="/performance" element={<TrackRecord />} />
          {/* Generic insight route: any report in reports.ts with a matching
              /content/insights/{slug}.md file renders here without a dedicated
              page component. Explicit routes above always win over this one. */}
          <Route path="/insights/:slug" element={<InsightPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
