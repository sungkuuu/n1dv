import { useState } from 'react';
import { Layout } from '../components/Layout';
import { MultiChainBadge } from '../components/MultiChainBadge';
import { PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/** Dark-mode friendly neon/pastel palette for allocation chart */
const DUMMY_ALLOCATION = [
  { symbol: 'USDT', name: 'Tether USD', pct: 40, color: '#34D399' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', pct: 20, color: '#FBBF24' },
  { symbol: 'ETH', name: 'Ethereum', pct: 20, color: '#818CF8' },
  { symbol: 'HYPE', name: 'Hyperliquid', pct: 10, color: '#2DD4BF' },
  { symbol: 'PENDLE', name: 'Pendle', pct: 5, color: '#FCD34D' },
  { symbol: 'AERO', name: 'Aerodrome', pct: 5, color: '#38BDF8' },
];

const ASSET_OPTIONS = [
  { value: 'USDT', label: 'USDT' },
  { value: 'USDC', label: 'USDC' },
];

export function VaultDetail() {
  const [asset, setAsset] = useState('USDT');
  const [amount, setAmount] = useState('');
  const [showBetaModal, setShowBetaModal] = useState(false);

  const handleDepositClick = () => {
    setShowBetaModal(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Stats — monochrome base, accent on APY only */}
        <section className="px-4 pt-16 pb-12 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <MultiChainBadge />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Nexus One Deep Value (N1DV)</h1>
            <p className="text-gray-400 mb-10">Deep Value / Defensive Alpha — Barbell strategy on Base</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center md:text-left p-6 bg-white/[0.02] border border-white/10">
                <div className="text-sm text-gray-400 mb-2 font-semibold tracking-wider">TVL</div>
                <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono-num">$1,024,500</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Total Value Locked</div>
              </div>
              <div className="text-center md:text-left p-6 bg-white/[0.02] border border-white/10">
                <div className="text-sm text-gray-400 mb-2 font-semibold tracking-wider">APY</div>
                <div className="text-3xl sm:text-4xl font-light tracking-tight text-emerald-400 font-mono-num">+12.4%</div>
                <div className="text-xs text-gray-500 font-medium mt-1">APY (Est.)</div>
              </div>
              <div className="text-center md:text-left p-6 bg-white/[0.02] border border-white/10">
                <div className="text-sm text-gray-400 mb-2 font-semibold tracking-wider">Share Price</div>
                <div className="text-3xl sm:text-4xl font-light tracking-tight text-white font-mono-num">$1.12</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Per Share (NAV)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content: Allocation + Deposit — same as Live Portfolio container */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Asset Allocation */}
              <div className="lg:col-span-2">
                <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 text-gray-200">
                    <PieChartIcon size={22} className="text-gray-400" />
                    Asset Allocation
                  </h3>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="w-full max-w-[280px] h-[280px] flex-shrink-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={DUMMY_ALLOCATION.map((d) => ({ ...d, value: d.pct }))}
                            cx="50%"
                            cy="50%"
                            innerRadius="52%"
                            outerRadius="88%"
                            paddingAngle={0}
                            dataKey="pct"
                            stroke="transparent"
                          >
                            {DUMMY_ALLOCATION.map((entry) => (
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
                            <th className="text-left py-3 text-xs font-semibold text-gray-400 tracking-wider uppercase">Asset</th>
                            <th className="text-right py-3 text-xs font-semibold text-gray-400 tracking-wider uppercase">Allocation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {DUMMY_ALLOCATION.map((item) => (
                            <tr key={item.symbol} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                              <td className="py-3.5">
                                <div className="flex items-center gap-3">
                                  <div
                                    className="w-3 h-3 flex-shrink-0"
                                    style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}40` }}
                                  />
                                  <div>
                                    <div className="font-medium text-white text-sm">{item.symbol}</div>
                                    <div className="text-xs text-gray-500 font-mono-num">{item.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 text-right font-mono-num text-sm text-white font-light tracking-tight">
                                {item.pct}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deposit UI — institutional box + sharp CTA */}
              <div className="lg:col-span-1">
                <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-6 text-gray-200">Deposit</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2 font-semibold tracking-wider">Asset</label>
                      <select
                        value={asset}
                        onChange={(e) => setAsset(e.target.value)}
                        className="w-full px-4 py-3 bg-black border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 font-mono-num"
                      >
                        {ASSET_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2 font-semibold tracking-wider">Amount</label>
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-3 bg-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 font-mono-num"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleDepositClick}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-all"
                    >
                      Deposit
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Deposits are subject to vault approval and queue processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Private Beta Modal — sharp institutional */}
      {showBetaModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowBetaModal(false)}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-md border border-white/20 bg-[#0A0A0A] p-8 shadow-2xl">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Private Beta Only</h3>
              <p className="text-gray-400 mb-6">
                현재 화이트리스트된 지갑만 예치가 가능합니다.
              </p>
              <button
                type="button"
                onClick={() => setShowBetaModal(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-black text-sm font-bold hover:bg-gray-200 transition-all shadow-lg"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
