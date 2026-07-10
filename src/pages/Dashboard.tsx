import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Layout } from '../components/Layout';
import { CustomConnectButton } from '../components/CustomConnectButton';
import { Wallet, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/** Dark-mode friendly palette for allocation chart */
const ALLOCATION_DATA = [
  { symbol: 'USDT', name: 'Tether USD', pct: 40, color: '#34D399' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', pct: 20, color: '#FBBF24' },
  { symbol: 'ETH', name: 'Ethereum', pct: 20, color: '#818CF8' },
  { symbol: 'HYPE', name: 'Hyperliquid', pct: 10, color: '#2DD4BF' },
  { symbol: 'PENDLE', name: 'Pendle', pct: 5, color: '#FCD34D' },
  { symbol: 'AERO', name: 'Aerodrome', pct: 5, color: '#38BDF8' },
];

export function Dashboard() {
  const { isConnected } = useAccount();
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const closeWithdrawModal = () => {
    setIsWithdrawModalOpen(false);
    setWithdrawAmount('');
  };

  const handleApproveAndWithdraw = () => {
    console.log('Withdraw action triggered');
    closeWithdrawModal();
  };

  return (
    <Layout>
      <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
        {/* Grid pattern — shared class with Letter & Insights */}
        <div className="absolute inset-0 pointer-events-none bg-grid-unified" aria-hidden />
        {/* Aurora (disconnected only) */}
        {!isConnected && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,560px)] h-[360px] pointer-events-none"
            aria-hidden
          >
            <div
              className="absolute inset-0 rounded-full blur-[100px] opacity-30"
              style={{
                background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(52, 211, 153, 0.35) 0%, rgba(45, 212, 191, 0.2) 40%, transparent 70%)',
              }}
            />
            <div
              className="absolute inset-0 rounded-full blur-[120px] opacity-20"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 65%)',
              }}
            />
          </div>
        )}

        {/* Content (title + disconnected or connected UI) — above background */}
        <div className="relative z-10">
        {/* Page title — always visible */}
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Portfolio
          </h1>
        </div>

        {/* Disconnected: Gatekeeper card only */}
        {!isConnected && (
          <div className="flex-1 flex items-center justify-center min-h-[70vh]">
            <div
              className="w-full max-w-md mx-4 rounded-2xl p-10 text-center border border-white/20 bg-white/[0.06] backdrop-blur-2xl"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(52, 211, 153, 0.08), 0 25px 50px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-emerald-500/5">
                  <Wallet className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Connect Wallet
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                Connect your wallet to view your personal portfolio, live PnL, and manage deposits.
              </p>
              <CustomConnectButton variant="fullWidth" />
            </div>
          </div>
        )}

        {/* Connected: dashboard body with fade-in */}
        {isConnected && (
          <div className="animate-fade-in">
            <div className="max-w-6xl mx-auto px-4 pb-16">
              {/* Seed-stage disclosure — the vault is not live yet */}
              <div className="mb-8 rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 flex items-start gap-2.5">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex-shrink-0 mt-0.5">Seed Stage</span>
                <span className="text-sm text-gray-400 leading-relaxed">
                  N1DV is not live yet. Balances and allocation shown here are a preview — live deposits, PnL, and on-chain NAV begin at vault launch.
                </span>
              </div>

              {/* 1) Key metric cards */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                      My Deposit
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light tracking-tight text-white font-mono">
                    $0.00
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Your vault share value</p>
                </div>
                <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                      Real-time PnL
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light tracking-tight text-emerald-400 font-mono">
                    +0.00%
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Unrealized performance</p>
                </div>
                <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChartIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                      Vault Status
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light tracking-tight text-amber-400">
                    Pre-launch
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Live TVL begins at vault launch</p>
                </div>
              </section>

              {/* 2) Asset Allocation donut + 3) Deposit / Withdraw */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <PieChartIcon size={22} className="text-gray-400" />
                    Asset Allocation
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                      Target
                    </span>
                  </h3>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="w-full max-w-[260px] h-[260px] flex-shrink-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={ALLOCATION_DATA.map((d) => ({ ...d, value: d.pct }))}
                            cx="50%"
                            cy="50%"
                            innerRadius="48%"
                            outerRadius="85%"
                            paddingAngle={0}
                            dataKey="pct"
                            stroke="transparent"
                          >
                            {ALLOCATION_DATA.map((entry) => (
                              <Cell key={entry.symbol} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex-1 w-full min-w-0">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 text-xs font-semibold text-gray-400 tracking-wider uppercase">
                              Asset
                            </th>
                            <th className="text-right py-3 text-xs font-semibold text-gray-400 tracking-wider uppercase">
                              Allocation
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {ALLOCATION_DATA.map((item) => (
                            <tr
                              key={item.symbol}
                              className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                            >
                              <td className="py-3.5">
                                <div className="flex items-center gap-3">
                                  <div
                                    className="w-3 h-3 flex-shrink-0 rounded-full"
                                    style={{
                                      backgroundColor: item.color,
                                      boxShadow: `0 0 10px ${item.color}40`,
                                    }}
                                  />
                                  <div>
                                    <div className="font-medium text-white text-sm">{item.symbol}</div>
                                    <div className="text-xs text-gray-500 font-mono">{item.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 text-right font-mono text-sm text-white font-light">
                                {item.pct}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-4">
                  <Link
                    to="/vaults"
                    className="w-full py-3.5 px-6 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors text-center"
                  >
                    Deposit
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsWithdrawModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                  >
                    Withdraw
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Deposits and withdrawals are subject to vault processing.
                  </p>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>

      {/* Withdraw Modal */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeWithdrawModal}
            aria-hidden
          />
          <div
            className="relative z-10 w-full max-w-md rounded-xl border border-white/10 bg-[#0a0a0a]/95 shadow-2xl backdrop-blur-md"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 25px 50px -12px rgba(0,0,0,0.5)' }}
          >
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6">Withdraw from Nexus One</h2>
              <p className="text-xs text-gray-500 mb-3">Available to withdraw: 0.00 USDC</p>
              <div className="relative flex items-center">
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full py-4 pl-4 pr-16 text-lg font-mono-num bg-white/[0.04] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500/30"
                />
                <button
                  type="button"
                  onClick={() => setWithdrawAmount('0.00')}
                  className="absolute right-3 px-2.5 py-1 text-xs font-bold text-gray-400 hover:text-gray-300 transition-colors"
                >
                  MAX
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 mb-6">Enter amount to withdraw (USDC)</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closeWithdrawModal}
                  className="flex-1 py-3 px-6 rounded-lg border border-white/20 bg-white/[0.04] text-gray-400 text-sm font-medium hover:bg-white/10 hover:text-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApproveAndWithdraw}
                  className="flex-1 py-3 px-6 rounded-lg bg-red-500/90 text-white text-sm font-bold hover:bg-red-500 transition-colors"
                >
                  Approve & Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
