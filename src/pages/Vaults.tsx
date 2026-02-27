import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Vaults() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="absolute inset-0 pointer-events-none bg-grid-unified" aria-hidden />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
              All Vaults
            </h1>
            <p className="text-xl text-gray-400">
              Institutional-grade onchain capital deployment vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            {/* Card 1: N1DV — Active */}
            <div className="border border-white/10 bg-gradient-to-br from-gray-900/50 to-black px-12 py-10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 rounded-xl min-w-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  <span className="animate-live-pulse h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">LIVE</span>
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Nexus One Deep Value (N1DV)</h2>
              <p className="text-sm text-gray-400 mb-6 font-semibold">Deep Value / Defensive Alpha</p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                A dynamic barbell strategy balancing 40% yield-bearing working capital with 60% high-conviction growth assets.
              </p>
              <Link
                to="/vaults/n1dv"
                className="group inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all"
              >
                View Details
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Card 2: N1PA — Coming Q3 2026 */}
            <div className="border border-white/10 bg-gradient-to-br from-gray-900/30 to-black px-12 py-10 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 rounded-xl opacity-90 min-w-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1.5 bg-gray-800 border border-white/10">
                  <span className="text-gray-500 font-black tracking-wider text-xs uppercase">
                    [ Coming Q3 2026 ]
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-300">Nexus One Alpha (N1PA)</h2>
              <p className="text-sm text-gray-500 mb-6 font-semibold">Event-Driven / Asymmetric Upside</p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Capturing alpha through catalyst-based execution. We target mispriced assets and liquidity inefficiencies in early-stage markets.
              </p>
              <button
                type="button"
                disabled
                className="w-full py-3 px-6 border border-white/10 bg-white/[0.02] text-gray-500 text-sm font-medium cursor-not-allowed"
              >
                Notify Me
              </button>
            </div>

            {/* Card 3: N1INO — Research Phase */}
            <div className="border border-white/10 bg-gradient-to-br from-gray-900/30 to-black px-12 py-10 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 rounded-xl opacity-90 min-w-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1.5 bg-gray-800 border border-white/10">
                  <span className="text-gray-500 font-black tracking-wider text-xs uppercase">
                    [ Research Phase ]
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-300">Nexus One Innovative (N1INO)</h2>
              <p className="text-sm text-gray-500 mb-6 font-semibold">Frontier Thesis / Structural Shift</p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Early exposure to high-conviction narratives. Focused on the convergence of AI, DePIN, and Next-Gen RWA infrastructure.
              </p>
              <button
                type="button"
                disabled
                className="w-full py-3 px-6 border border-white/10 bg-white/[0.02] text-gray-500 text-sm font-medium cursor-not-allowed"
              >
                Read Thesis
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
