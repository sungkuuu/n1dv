import { Layout } from '../components/Layout';
import { ArrowLeft, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RiskOff() {
  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Risk-Off Contagion</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-16">
            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 bg-transparent text-blue-500 border border-blue-500 text-xs font-bold mb-6 uppercase tracking-wider">
              WEEKLY BRIEF
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              Risk-Off Contagion & The Flight to Quality
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Fed hawkish hold and Kevin Warsh nomination trigger commodity flash crash
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800">
              <span className="font-medium text-gray-400">By Nexus One Research Desk</span>
              <span>•</span>
              <span>Feb 3, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-neutral-900 border-l-4 border-blue-900 rounded-r-xl p-8 mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6 flex items-center gap-3">
              <AlertCircle className="text-blue-500" size={24} />
              Key Takeaways
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Macro Shock:</span> Kevin Warsh's nomination as Fed Chair triggered a violent repricing of risk assets, with Gold (-11%) and Silver (-36%) experiencing flash crashes as markets price in "Sound Money" policy.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Defensive Validation:</span> N1DV Vault's 40% stablecoin allocation proves strategically sound as global liquidity retreats and risk-off contagion spreads from macro to crypto markets.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Strategic Stance:</span> With $1.4B in token unlocks ahead and elevated uncertainty, the Barbell Strategy (40% Cash / 60% Core) offers limited risk with uncapped potential.
                </p>
              </li>
            </ul>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                Market Regime: Macro-to-Crypto Contagion
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The market regime for the week (Jan 26 – Feb 02) was defined by a clear <span className="font-semibold text-white">Macro-to-Crypto risk-off contagion</span>. With the Federal Reserve freezing rates at 3.50–3.75% and maintaining a "high-for-longer" stance, global liquidity has noticeably retreated.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notably, the nomination of <span className="font-semibold text-white">Kevin Warsh</span>—a known hawk—as the next Fed Chair by the Trump administration triggered a <span className="font-semibold text-white">"Flash Crash" in commodities</span>, with Gold (-11%) and Silver (-36%) plunging. This flight to the USD validates the <span className="font-semibold text-white">N1DV Vault's</span> strategic decision to maintain a <span className="font-semibold text-white">40% Stablecoin allocation</span>.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                Federal Reserve Policy Impact
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Fed maintained rates at 3.50–3.75%. Chair Powell cited labor cooling but persistent inflation, pushing the US 10Y Yield up by <span className="font-semibold text-white">+2.4bp to 4.235%</span>. The market interpreted Warsh's nomination as a signal for "Sound Money" and higher real rates, triggering a broad valuation reset across risk assets.
              </p>

              {/* Key Metrics Card */}
              <div className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Key Macro Indicators</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Fed Funds Rate</span>
                    <span className="text-white font-semibold">3.50 – 3.75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">US 10Y Yield</span>
                    <span className="text-white font-semibold">4.235% (+2.4bp)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Gold (Weekly)</span>
                    <span className="text-red-400 font-semibold">-11%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Silver (Weekly)</span>
                    <span className="text-red-400 font-semibold">-36%</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The liquidity drain manifested violently in raw materials, with Gold breaking the $4,900 support. This fear of liquidity withdrawal has spilled over into digital assets.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                Global Liquidity Dynamics
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Bank of Japan's summary hinted at the risk of falling "behind the curve" on inflation, reigniting fears of an unwinding yen carry trade. This has created additional pressure on global liquidity conditions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When global liquidity tightens, we typically observe a cascade effect: first commodities sell off, then high-beta equities, and finally crypto assets. This sequential risk-off behavior is precisely what we're witnessing now.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                Token Unlocks & Upcoming Catalysts
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Next week brings approximately <span className="font-semibold text-white">$1.4B in token unlocks</span> (Sui, Aptos) and key labor data (NFP on Feb 7). These events add additional supply pressure and uncertainty to an already fragile market environment.
              </p>

              {/* Upcoming Events Card */}
              <div className="bg-gray-900/60 border border-yellow-700/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Week Ahead</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Token Unlocks (Sui, Aptos)</span>
                    <span className="text-yellow-400 font-semibold">~$1.4B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">NFP Report</span>
                    <span className="text-white font-semibold">Feb 7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Market Sentiment</span>
                    <span className="text-red-400 font-semibold">Risk-Off</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                Nexus One Strategy: Barbell Positioning
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nexus One maintains the <span className="font-semibold text-white">Barbell Strategy (40% Cash / 60% Core)</span> via N1DV. Market uncertainty remains elevated, and our Barbell Strategy offers <span className="font-semibold text-white">"Limited Risk, Uncapped Potential."</span>
              </p>

              {/* Strategy Card */}
              <div className="bg-gradient-to-br from-emerald-950/50 to-gray-900/60 border-2 border-emerald-600/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">N1DV Barbell Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-emerald-300 font-semibold">Defensive Position (40%)</span>
                      <span className="text-emerald-300 font-bold">Stablecoins</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      High-yield stablecoin positions provide downside protection while generating 5-10% APY. This allocation proved prescient as commodities crashed and flight-to-USD accelerated.
                    </p>
                  </div>
                  <div className="border-t border-emerald-800/50 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-emerald-300 font-semibold">Core Position (60%)</span>
                      <span className="text-emerald-300 font-bold">BTC, ETH, Quality Alts</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Concentrated in blue-chip assets with strong fundamentals. Positioned to capture upside when risk-on sentiment returns, while maintaining quality bias.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We believe this is the optimal posture for the current environment. The 40% cash allocation provides capital preservation and dry powder for opportunities, while the 60% core allocation ensures we're not fully de-risked if markets reverse.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                Conclusion
              </h2>
              <p className="text-xl text-white font-semibold mb-4 italic">
                "In times of uncertainty, preservation of capital is alpha."
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The current macro environment favors defensive positioning. While many crypto portfolios remain fully exposed to risk assets, our barbell approach provides both protection and optionality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We continue to monitor Fed policy, commodity markets, and crypto-specific catalysts. The N1DV strategy is designed for exactly this type of environment: limited downside risk, unlimited upside potential.
              </p>
            </section>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-slate-800/50">
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Disclaimer</h4>
                <p className="text-xs text-slate-500 leading-relaxed text-justify">
                  This report is for informational purposes only and does not constitute financial, investment, legal, or tax advice. The views expressed herein are those of the Nexus One Research Desk as of the date of publication and are subject to change without notice.
                  <br /><br />
                  Nexus One and its affiliates may hold long or short positions in the assets discussed (including but not limited to Bitcoin, Ethereum, Solana, and other digital assets) and may adjust these positions at any time. Digital asset investments are highly volatile and involve a significant risk of loss. Investors should conduct their own due diligence.
                </p>
              </div>

              <div className="border-t border-slate-800/50 pt-6">
                <a href="/" className="group inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors font-medium text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                  Back to All Insights
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
