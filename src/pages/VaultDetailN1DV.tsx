import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Layout } from '../components/Layout';
import { CustomConnectButton } from '../components/CustomConnectButton';
import { VaultChart } from '../components/VaultChart';
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from 'recharts';
import { PieChart as PieChartIcon, TrendingUp, Shield, Search, Handshake } from 'lucide-react';

/** Asset allocation — USDC 40%, ETH 30% + others */
const ALLOCATION = [
  { symbol: 'USDC', name: 'USD Coin', pct: 40, color: '#34D399' },
  { symbol: 'ETH', name: 'Ethereum', pct: 30, color: '#818CF8' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', pct: 15, color: '#FBBF24' },
  { symbol: 'HYPE', name: 'Hyperliquid', pct: 8, color: '#2DD4BF' },
  { symbol: 'PENDLE', name: 'Pendle', pct: 4, color: '#FCD34D' },
  { symbol: 'AERO', name: 'Aerodrome', pct: 3, color: '#38BDF8' },
];

export function VaultDetailN1DV() {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [depositStep, setDepositStep] = useState<'input' | 'approving' | 'readyToDeposit' | 'depositing' | 'success'>('input');

  const openDepositModal = () => {
    setIsDepositModalOpen(true);
    setDepositStep('input');
  };
  const closeDepositModal = () => {
    setIsDepositModalOpen(false);
    setDepositAmount('');
    setDepositStep('input');
  };

  const handleApproveUsdc = () => {
    setDepositStep('approving');
    setTimeout(() => setDepositStep('readyToDeposit'), 2000);
  };

  const handleDeposit = () => {
    setDepositStep('depositing');
    setTimeout(() => setDepositStep('success'), 2000);
  };

  const handleViewDashboard = () => {
    closeDepositModal();
    navigate('/dashboard');
  };

  const canCloseModal = depositStep === 'input' || depositStep === 'readyToDeposit' || depositStep === 'success';

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="absolute inset-0 pointer-events-none bg-grid-unified" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10">
          {/* ——— Full-width title section (above grid) ——— */}
          <header className="w-full mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-emerald-500/40 bg-emerald-500/10 mb-4">
              <span className="text-emerald-400 font-semibold tracking-widest text-xs uppercase">
                [ Multi-Chain ]
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              Nexus One Deep Value (N1DV)
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Deep Value / Defensive Alpha — Barbell strategy on Base
            </p>
            <div className="mt-4 inline-flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 max-w-2xl">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex-shrink-0 mt-0.5">Seed Stage</span>
              <span className="text-sm text-slate-400 leading-relaxed">
                Vault deployed; live deployment imminent. Performance shown is a simulated
                portfolio and allocation is the strategy target. On-chain NAV goes live at launch.
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-12 items-start">
            {/* ——— Left 70%: Content (starts aligned with right panel) ——— */}
            <div className="min-w-0">
              {/* Performance chart */}
              <section className="border border-white/10 bg-white/[0.02] rounded-xl p-6 mb-8">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp size={20} className="text-gray-400" />
                  Vault Performance
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                    <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">Simulated</span>
                  </span>
                  <button
                    onClick={() => navigate('/performance')}
                    className="ml-auto text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-2"
                  >
                    Full track record →
                  </button>
                </h2>
                <VaultChart />
              </section>

              {/* Asset Allocation */}
              <section className="border border-white/10 bg-white/[0.02] rounded-xl p-6 mb-8">
                <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <PieChartIcon size={20} className="text-gray-400" />
                  Asset Allocation
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                    Target
                  </span>
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-full max-w-[240px] h-[240px] flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={ALLOCATION.map((d) => ({ ...d, value: d.pct }))}
                          cx="50%"
                          cy="50%"
                          innerRadius="52%"
                          outerRadius="88%"
                          paddingAngle={0}
                          dataKey="pct"
                          stroke="transparent"
                        >
                          {ALLOCATION.map((entry) => (
                            <Cell key={entry.symbol} fill={entry.color} />
                          ))}
                        </Pie>
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex-1 w-full min-w-0">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 text-xs font-semibold text-gray-400 tracking-wider uppercase">Asset</th>
                          <th className="text-right py-3 text-xs font-semibold text-gray-400 tracking-wider uppercase">Allocation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ALLOCATION.map((item) => (
                          <tr key={item.symbol} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <td className="py-3.5">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-3 h-3 flex-shrink-0 rounded-full"
                                  style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}40` }}
                                />
                                <div>
                                  <div className="font-medium text-white text-sm">{item.symbol}</div>
                                  <div className="text-xs text-gray-500 font-mono-num">{item.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 text-right font-mono-num text-sm text-white font-light">{item.pct}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* N1DV Investment Thesis — full original text (above Key Features) */}
              <section className="border border-white/10 bg-white/[0.02] rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-white mb-2">N1DV Investment Thesis</h2>
                <p className="text-gray-400 mb-8">Nexus One Deep Value Strategies. True Value in a World of Hype.</p>

                <div className="space-y-10 text-gray-300 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">1. The Dilemma: Transparency vs. Alpha</h3>
                    <h4 className="text-base font-semibold text-gray-200 mb-3">The Problem</h4>
                    <div className="space-y-4 mb-6">
                      <p><strong className="text-white">Traditional Funds</strong><br />Privacy without trust. Opaque structures enabled disasters like FTX. Investors had no real-time visibility into solvency or positions.</p>
                      <p><strong className="text-white">Early DeFi</strong><br />Trust without privacy. Full transparency led to alpha leak and front-running. Every move is visible and exploitable by MEV bots.</p>
                    </div>
                    <h4 className="text-base font-semibold text-gray-200 mb-3 mt-6">The N1DV Solution</h4>
                    <div className="space-y-4">
                      <p><strong className="text-white">Now (MVP): Real-time Proof of Solvency</strong><br />LPs can verify funds on-chain 24/7. Complete transparency through Base Network verification eliminates counterparty risk. No more FTX-style collapses.</p>
                      <p><strong className="text-white">Future (Privacy): Zero-Knowledge (ZK) Proofs</strong><br />Verify returns without revealing live positions. The perfect balance of institutional trust and alpha protection. Prove performance cryptographically while keeping strategy private.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">2. Strategy: Defensive Alpha in a Cyclical Downturn</h3>
                    <h4 className="text-base font-semibold text-gray-200 mb-3">Market Context: 2026 Defense Mode</h4>
                    <div className="space-y-3 mb-6">
                      <p>We anticipate 2026 to be a defensive year. In volatile, uncertain markets, risk management trumps reckless leverage. Capital preservation is the foundation of long-term alpha generation.</p>
                      <p>Our strategy is designed to protect downside while maintaining upside optionality through intelligent capital allocation.</p>
                    </div>
                    <h4 className="text-base font-semibold text-gray-200 mb-3 mt-6">Barbell Strategy</h4>
                    <div className="space-y-4 mb-6">
                      <p><strong className="text-white">40% — Smart Stable</strong><br />Yield defense and dry powder. Deployed into high-quality stable yield strategies (USDC/USDT/DAI pools) to generate cash flow while maintaining liquidity for opportunistic deployment.</p>
                      <p><strong className="text-white">60% — Core Value</strong><br />Undervalued blue-chips based on strict metrics. BTC, ETH, and AERO positions selected via quantifiable valuation frameworks. We buy quality assets when they're statistically cheap, not when narratives are hot.</p>
                    </div>
                    <h4 className="text-base font-semibold text-gray-200 mb-3">Dynamic Pivot Mechanism</h4>
                    <p>AI-augmented CIO system monitors market regime in real-time. When structural shifts occur (e.g., macro policy changes, liquidity expansion), the system aggressively redeploys stablecoins into growth assets. Human oversight combined with algorithmic execution ensures we capture regime changes faster than traditional funds.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">3. The Era of Crypto Valuation</h3>
                    <h4 className="text-base font-semibold text-gray-200 mb-3">From Speculation to Science</h4>
                    <div className="space-y-3 mb-6">
                      <p>Crypto has matured like tech stocks did in the 2000s. The days of "narrative-only" investing are ending. Institutional capital demands rigorous, quantifiable frameworks.</p>
                      <p>We reject vague narratives. We buy based on data. The market is too complex for retail intuition alone—professional valuation methods are now required.</p>
                    </div>
                    <h4 className="text-base font-semibold text-gray-200 mb-3 mt-6">Our Valuation Framework</h4>
                    <div className="space-y-4 mb-6">
                      <p><strong className="text-white">Price-to-Fees (P/F)</strong><br />Protocol revenue efficiency. Lower P/F ratios indicate undervalued cash flow generation relative to market cap. We target protocols trading below their historical P/F mean.</p>
                      <p><strong className="text-white">Earnings-to-Expense Ratio (EER)</strong><br />Operational sustainability metric. Protocols with high EER demonstrate structural profitability and capital efficiency. A protocol earning 10x its operational costs is fundamentally stronger than one barely breaking even.</p>
                      <p><strong className="text-white">Real-time Token Burn Rates</strong><br />Supply dynamics tracking. Deflationary mechanisms compound value over time. We monitor burn rates, staking ratios, and emission schedules to identify tokens with favorable supply-demand dynamics.</p>
                    </div>
                    <p><strong className="text-gray-200">Professional Insight:</strong> The market now requires institutional-grade analysis. Retail FOMO and Twitter narratives are insufficient for risk-adjusted alpha. We deploy battle-tested valuation models adapted from traditional finance.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">4. Future Roadmap: AI & Omnichain</h3>
                    <h4 className="text-base font-semibold text-gray-200 mb-3">Semi-Autonomous Driving</h4>
                    <p className="mb-4">Integrating Enzyme protocol with LLM Agents for automated risk control. Think "self-driving" for vault management, but with human oversight.</p>
                    <ul className="space-y-3 mb-6">
                      <li><strong className="text-white">Auto-Rebalancing:</strong> Automatic shifts to USDT during panic/volatility spikes detected via onchain metrics.</li>
                      <li><strong className="text-white">Risk Monitoring:</strong> 24/7 portfolio health checks with instant alerts and corrective actions.</li>
                      <li><strong className="text-white">Execution Optimization:</strong> AI-driven order routing to minimize slippage and MEV extraction.</li>
                    </ul>
                    <h4 className="text-base font-semibold text-gray-200 mb-3 mt-6">Chain-Agnostic Deep Value</h4>
                    <p className="mb-4">Launching on Base for efficiency and low fees, but the best risk-adjusted returns don't respect chain borders. We're expanding to capture alpha wherever it exists.</p>
                    <ul className="space-y-3 mb-4">
                      <li><strong className="text-white">Hyperliquid (HYPE):</strong> Perpetual DEX infrastructure with superior capital efficiency and deep liquidity.</li>
                      <li><strong className="text-white">Ethereum Mainnet:</strong> Access to battle-tested DeFi primitives like Curve, Aave, and Uniswap v4.</li>
                      <li><strong className="text-white">Cross-chain Arbitrage:</strong> Exploit pricing inefficiencies and yield differentials across ecosystems.</li>
                    </ul>
                    <p>A truly omnichain vault that deploys capital based on opportunity, not tribal loyalty. The future of institutional crypto investing is chain-agnostic, AI-augmented, and radically transparent.</p>
                  </div>
                </div>
              </section>

              {/* Key Features — brochure-style card (bottom of left column) */}
              <section className="border border-white/10 bg-white/[0.02] rounded-xl p-6 mt-8">
                <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-6">Key Features</h2>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-400/90" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Resilience First</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        We secure the downside with 40% cash-flow assets, ensuring capital preservation through market volatility.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center">
                      <Search className="w-5 h-5 text-emerald-400/90" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Deep Value Discovery</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Active allocation in undervalued on-chain assets like AERO, identifying asymmetric risk-reward opportunities.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center">
                      <Handshake className="w-5 h-5 text-emerald-400/90" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Aligned Incentives</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Zero management fees. We only win when you win. Performance-based compensation ensures true alignment.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>

            {/* ——— Right 30%: Sticky action panel ——— */}
            <aside className="w-full h-fit max-h-[calc(100vh-160px)] lg:sticky lg:top-40 lg:self-start lg:overflow-y-auto">
              <div className="border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Vault snapshot</h3>
                <div className="space-y-5 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-1">TVL</div>
                    <div className="text-2xl font-light tracking-tight text-white font-mono-num">$24.5M</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-1">APY</div>
                    <div className="text-2xl font-light tracking-tight text-emerald-400 font-mono-num">+18.4%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-1">Management fee</div>
                    <div className="text-xl font-light tracking-tight text-white font-mono-num">0%</div>
                  </div>
                </div>
                {!isConnected ? (
                  <>
                    <CustomConnectButton
                      variant="fullWidth"
                      connectLabel="Connect Wallet to Deposit"
                    />
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      Connect your wallet to deposit into this vault.
                    </p>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={openDepositModal}
                      className="w-full py-4 px-6 bg-emerald-500 text-white text-base font-bold hover:bg-emerald-600 transition-colors rounded-lg"
                    >
                      Deposit
                    </button>
                    <button
                      type="button"
                      className="w-full py-3 px-6 mt-3 border border-white/20 bg-white/[0.04] text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors rounded-lg"
                    >
                      Withdraw
                    </button>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      Deposits and withdrawals are subject to vault processing.
                    </p>
                  </>
                )}
              </div>
            </aside>
          </div>

          <div className="mt-10">
            <Link to="/vaults" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              ← Back to All Vaults
            </Link>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      {isDepositModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" aria-modal="true" role="dialog">
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity ${canCloseModal ? 'cursor-pointer' : 'cursor-wait'}`}
            onClick={canCloseModal ? closeDepositModal : undefined}
            aria-hidden
          />
          <div
            className="relative z-10 w-full max-w-md rounded-xl border border-white/10 bg-[#0a0a0a]/95 shadow-2xl backdrop-blur-md transition-all duration-300"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 25px 50px -12px rgba(0,0,0,0.5)' }}
          >
            <div className="p-6 sm:p-8">
              <div className="mb-5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-xs text-amber-300 leading-relaxed">
                <span className="font-bold uppercase tracking-wider">Demo flow.</span>{' '}
                No real funds move. Live deposits open when the vault launches — leave your email
                on any report page to be notified.
              </div>
              {depositStep === 'success' ? (
                <div className="py-4 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40">
                    <svg className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Demo Deposit Complete</h2>
                  <p className="text-sm text-gray-400 mb-8">This was a demo — no funds moved. Live deposits open at vault launch.</p>
                  <button
                    type="button"
                    onClick={handleViewDashboard}
                    className="w-full py-3.5 px-6 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    View Dashboard
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-white mb-6">Deposit to N1DV</h2>
                  <p className="text-xs text-gray-500 mb-3">Available Balance: 0.00 USDC</p>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="0.00"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      disabled={depositStep === 'approving' || depositStep === 'depositing'}
                      className="w-full py-4 pl-4 pr-16 text-lg font-mono-num bg-white/[0.04] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                    <button
                      type="button"
                      onClick={() => setDepositAmount('0.00')}
                      disabled={depositStep === 'approving' || depositStep === 'depositing'}
                      className="absolute right-3 px-2.5 py-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      MAX
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 mb-6">Enter amount in USDC</p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={closeDepositModal}
                      disabled={depositStep === 'approving' || depositStep === 'depositing'}
                      className="flex-1 py-3 px-6 rounded-lg border border-white/20 bg-white/[0.04] text-gray-400 text-sm font-medium hover:bg-white/10 hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    {depositStep === 'input' && (
                      <button
                        type="button"
                        onClick={handleApproveUsdc}
                        className="flex-1 py-3 px-6 rounded-lg bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-600 transition-colors"
                      >
                        Approve USDC
                      </button>
                    )}
                    {depositStep === 'approving' && (
                      <button
                        type="button"
                        disabled
                        className="flex-1 py-3 px-6 rounded-lg bg-emerald-500/80 text-white text-sm font-bold flex items-center justify-center gap-2 cursor-not-allowed"
                      >
                        <span className="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Approving...
                      </button>
                    )}
                    {depositStep === 'readyToDeposit' && (
                      <button
                        type="button"
                        onClick={handleDeposit}
                        className="flex-1 py-3 px-6 rounded-lg bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-600 transition-colors"
                      >
                        Deposit
                      </button>
                    )}
                    {depositStep === 'depositing' && (
                      <button
                        type="button"
                        disabled
                        className="flex-1 py-3 px-6 rounded-lg bg-emerald-500/80 text-white text-sm font-bold flex items-center justify-center gap-2 cursor-not-allowed"
                      >
                        <span className="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Depositing...
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
