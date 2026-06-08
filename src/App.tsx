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
import { WeeklyBriefFeb13 } from './pages/WeeklyBriefFeb13';
import { DencunParadox } from './pages/DencunParadox';
import { SixSigmaStressTest } from './pages/SixSigmaStressTest';
import { FatAppThesis } from './pages/FatAppThesis';
import { EthereumAgenticLayer } from './pages/EthereumAgenticLayer';
import { BittensorNarrative } from './pages/BittensorNarrative';
import { ZcashThesis } from './pages/ZcashThesis';
import { WeeklyBriefFeb27 } from './pages/WeeklyBriefFeb27';
import { WeeklyBriefMar10 } from './pages/WeeklyBriefMar10';
import { WeeklyBriefMar20 } from './pages/WeeklyBriefMar20';
import { WeeklyBriefMar30 } from './pages/WeeklyBriefMar30';
import { WeeklyBriefApr05 } from './pages/WeeklyBriefApr05';
import { UniswapFeeSwitchDilemma } from './pages/UniswapFeeSwitchDilemma';
import { OptimismDCFAnalysis } from './pages/OptimismDCFAnalysis';
import { ScrollToTop } from './components/ScrollToTop';
import { ReferralRegister } from './components/ReferralRegister';
import { Dashboard } from './pages/Dashboard';
import { Vaults } from './pages/Vaults';
import { VaultDetailN1DV } from './pages/VaultDetailN1DV';
import { BitcoinMarketCycle2026Analysis } from './pages/BitcoinMarketCycle2026Analysis';
import { L1InfrastructureMachineEconomy2026 } from './pages/L1InfrastructureMachineEconomy2026';
import { PumpFunValueCapture2026 } from './pages/PumpFunValueCapture2026';
import { TronM2MEcosystemAnalysis } from './pages/TronM2MEcosystemAnalysis';
import { SolanaGlobalInfrastructure } from './pages/SolanaGlobalInfrastructure';
import { PeaqM2MDeepValueAnalysis } from './pages/PeaqM2MDeepValueAnalysis';
import { RaoulPalMacroLiquidityPeak2026 } from './pages/RaoulPalMacroLiquidityPeak2026';
import { Q12026DigitalAssetMarketQuarterlyReport } from './pages/Q12026DigitalAssetMarketQuarterlyReport';
import { AptosStructuralReset2026 } from './pages/AptosStructuralReset2026';
import { AaveVsMorphoGovernance2026 } from './pages/AaveVsMorphoGovernance2026';
import { WeeklyBriefApr13 } from './pages/WeeklyBriefApr13';
import { WeeklyBriefApr20 } from './pages/WeeklyBriefApr20';
import { WeeklyBriefMay03 } from './pages/WeeklyBriefMay03';
import { CrossChainVulnerabilityKelpAave2026 } from './pages/CrossChainVulnerabilityKelpAave2026';
import { CantonNetworkBMECrossover2026 } from './pages/CantonNetworkBMECrossover2026';
import { VeniceUncappedMintRisk2026 } from './pages/VeniceUncappedMintRisk2026';
import { CentrifugeRWAStructuralValuation2026 } from './pages/CentrifugeRWAStructuralValuation2026';
import { CircleArcEconomicOS2026 } from './pages/CircleArcEconomicOS2026';
import { ClarityActProjectClassification2026 } from './pages/ClarityActProjectClassification2026';
import { WeeklyBriefMay18 } from './pages/WeeklyBriefMay18';
import { WeeklyBriefMay25 } from './pages/WeeklyBriefMay25';
import { QuantumBitcoinThreat2026 } from './pages/QuantumBitcoinThreat2026';
import { BitcoinHalvingCycleDecline2026 } from './pages/BitcoinHalvingCycleDecline2026';
import { MorphoAaveHegemony2026 } from './pages/MorphoAaveHegemony2026';
import { ChainlinkCCIPFundamentals2026 } from './pages/ChainlinkCCIPFundamentals2026';

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
        <Route path="/insights/l1-infrastructure-machine-economy-2026" element={<L1InfrastructureMachineEconomy2026 />} />
        <Route path="/insights/pump-fun-value-capture-2026" element={<PumpFunValueCapture2026 />} />
        <Route path="/insights/tron-m2m-ecosystem-analysis" element={<TronM2MEcosystemAnalysis />} />
        <Route path="/insights/solana-global-infrastructure" element={<SolanaGlobalInfrastructure />} />
        <Route path="/insights/peaq-m2m-deep-value-analysis" element={<PeaqM2MDeepValueAnalysis />} />
        <Route path="/insights/q1-2026-digital-asset-market-quarterly-report" element={<Q12026DigitalAssetMarketQuarterlyReport />} />
        <Route path="/insights/bitcoin-halving-cycle-decline-2026" element={<BitcoinHalvingCycleDecline2026 />} />
        <Route path="/insights/quantum-computing-bitcoin-threat-2026" element={<QuantumBitcoinThreat2026 />} />
        <Route path="/insights/weekly-brief-may-25-2026" element={<WeeklyBriefMay25 />} />
        <Route path="/insights/chainlink-ccip-link-fundamentals-2026" element={<ChainlinkCCIPFundamentals2026 />} />
        <Route path="/insights/morpho-aave-hegemony-valuation-2026" element={<MorphoAaveHegemony2026 />} />
        <Route path="/insights/weekly-brief-may-18-2026" element={<WeeklyBriefMay18 />} />
        <Route path="/insights/clarity-act-project-classification-2026" element={<ClarityActProjectClassification2026 />} />
        <Route path="/insights/circle-arc-economic-os-2026" element={<CircleArcEconomicOS2026 />} />
        <Route path="/insights/weekly-brief-may-03-2026" element={<WeeklyBriefMay03 />} />
        <Route path="/insights/weekly-brief-apr-20-2026" element={<WeeklyBriefApr20 />} />
        <Route path="/insights/weekly-brief-apr-13-2026" element={<WeeklyBriefApr13 />} />
        <Route path="/insights/centrifuge-rwa-structural-valuation-2026" element={<CentrifugeRWAStructuralValuation2026 />} />
        <Route path="/insights/venice-uncapped-mint-risk-2026" element={<VeniceUncappedMintRisk2026 />} />
        <Route path="/insights/cross-chain-vulnerability-kelp-aave-2026" element={<CrossChainVulnerabilityKelpAave2026 />} />
        <Route path="/insights/canton-network-bme-crossover-2026" element={<CantonNetworkBMECrossover2026 />} />
        <Route path="/insights/aave-vs-morpho-governance-2026" element={<AaveVsMorphoGovernance2026 />} />
        <Route path="/insights/aptos-structural-reset-2026" element={<AptosStructuralReset2026 />} />
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
      </Routes>
    </>
  );
}

export default App;
