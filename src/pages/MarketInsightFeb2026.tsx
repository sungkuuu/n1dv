import { Layout } from '../components/Layout';
import { ArrowLeft, Download, TrendingUp, TrendingDown, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const aiCapexData = [
  { company: 'Meta', capex: 42, revenue: 8 },
  { company: 'Google', capex: 48, revenue: 12 },
  { company: 'MSFT', capex: 52, revenue: 15 },
  { company: 'Amazon', capex: 55, revenue: 10 },
  { company: 'Tesla', capex: 12, revenue: 5 },
];

const correlationData = [
  { month: 'Sep', btc: 58000, ndx: 19200, corr: 0.65 },
  { month: 'Oct', btc: 62000, ndx: 19800, corr: 0.72 },
  { month: 'Nov', btc: 68000, ndx: 20400, corr: 0.75 },
  { month: 'Dec', btc: 72000, ndx: 20100, corr: 0.78 },
  { month: 'Jan', btc: 69000, ndx: 19500, corr: 0.80 },
  { month: 'Feb', btc: 66000, ndx: 19000, corr: 0.80 },
];

export function MarketInsightFeb2026() {
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
            <span className="text-gray-400">Feb 2026 Deep Dive</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-block w-fit bg-transparent border border-emerald-500 text-emerald-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              DEEP RESEARCH
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              Global Risk Assets: The 'Bear Trap' Debate
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Structural Transition, AI Capex Reality Check, and the Death of the 4-Year Cycle
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800">
              <span className="font-medium text-gray-400">By Nexus One Research Desk</span>
              <span>•</span>
              <span>Feb 6, 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>

            {/* Subscribe CTA */}
            <button className="px-6 py-3 border border-gray-700 text-white hover:bg-gray-800 transition-all font-semibold text-sm">
              Subscribe to Research
            </button>
          </div>

          {/* Executive Summary */}
          <div className="bg-neutral-900 border-l-4 border-green-900 rounded-r-xl p-8 mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6 flex items-center gap-3">
              <AlertCircle className="text-green-500" size={24} />
              Key Takeaways
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Macro Paradox:</span> The Federal Reserve's "Fake Tightening" narrative meets reality with Kevin Warsh's nomination as Fed Chair, triggering commodity flash crash (Gold -11%, Silver -36%).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Equity Markets:</span> AI Capex ROI concerns emerge as Magnificent 7 spending outpaces revenue growth by 3.5x, driving Nasdaq-BTC correlation to 0.80—the highest since Q2 2022.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Crypto Paradigm Shift:</span> The 4-Year Halving Cycle shows clear structural breakdown. We are entering a "Perpetual Beta" regime where crypto increasingly mirrors equity risk appetite rather than fixed cyclicality.
                </p>
              </li>
            </ul>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                1. The Macro Backdrop: Kevin Warsh & The "Sound Money" Shock
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                The nomination of Kevin Warsh as the next Federal Reserve Chair by the Trump administration sent shockwaves through commodity markets, validating what we've called the "Sound Money Premium Trap." Warsh, a known monetary hawk who served on the Federal Reserve Board from 2006 to 2011, represents a dramatic pivot from the Powell-era gradualism.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Within 48 hours of the announcement, gold plummeted 11% and silver crashed 36% in what traders are calling the "Warsh Flash Crash." This wasn't just profit-taking; it was a violent repricing of inflation hedge assets as markets priced in a regime of higher real rates and genuine monetary discipline.
              </p>

              {/* Callout Box */}
              <div className="bg-gray-900/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Market Definition</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">"Sound Money" Policy:</span> A monetary regime prioritizing currency stability and low inflation over growth stimulation. Warsh's historical stance suggests willingness to accept short-term economic pain to preserve long-term monetary credibility—a stark contrast to the Powell Fed's "data-dependent flexibility."
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The current Fed Funds Rate sits at 3.50–3.75%, with Chair Powell citing "persistent inflation" despite labor market cooling. The US 10-Year Treasury yield climbed to 4.235%, up 2.4 basis points week-over-week. Market participants now anticipate Warsh will maintain or even raise rates through 2026, crushing the "pivot narrative" that had fueled Q4 2025's risk asset rally.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                2. Equity Markets: The AI Capex Reality Check
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                The Magnificent Seven tech giants have collectively deployed over $250 billion in AI infrastructure capex since 2023, yet revenue attributable to AI products remains frustratingly opaque. Our analysis reveals a troubling divergence: AI spending is growing at 40% CAGR while AI-driven revenue growth lags at just 12% CAGR.
              </p>

              <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-700/50 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold text-white mb-6">AI Capex vs Revenue Growth (M7 Tech Companies)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={aiCapexData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.1} />
                    <XAxis dataKey="company" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" label={{ value: 'Billion USD', angle: -90, position: 'insideLeft', fill: '#9ca3af' }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Bar dataKey="capex" fill="#ef4444" name="AI Capex ($B)" />
                    <Bar dataKey="revenue" fill="#10b981" name="AI Revenue Growth ($B)" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-400 mt-4 italic">
                  Chart shows 2025-2026 estimated AI capital expenditure versus incremental revenue growth attributed to AI products.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Microsoft's Azure AI services, while growing rapidly, contribute less than 8% of total cloud revenue. Meta's Reality Labs continues burning $15B annually with minimal commercial traction. Even Google's Gemini rollout has failed to meaningfully dent ChatGPT's market dominance.
              </p>

              <p className="text-gray-300 leading-relaxed">
                This ROI skepticism is manifesting in tech stock volatility. The Nasdaq 100 has retracted 7.3% from its January peak, with AI-focused names like Nvidia (-12%), Microsoft (-8%), and Meta (-9%) leading the decline. Investors are beginning to question the "AI supercycle" thesis that justified 2024's valuations.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                3. Crypto-Equity Correlation: The 0.80 Convergence
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Bitcoin's 30-day rolling correlation with the Nasdaq 100 has surged to 0.80, matching levels last seen during the May 2022 Terra/Luna implosion. This represents a fundamental shift: crypto is no longer behaving as an alternative asset class but rather as a levered tech equity proxy.
              </p>

              <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-700/50 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold text-white mb-6">Bitcoin vs Nasdaq 100: Correlation Analysis</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={correlationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" strokeOpacity={0.1} />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis yAxisId="left" stroke="#9ca3af" />
                    <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" domain={[0, 1]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="btc" stroke="#f97316" strokeWidth={2} name="Bitcoin Price ($)" dot={{ r: 4 }} />
                    <Line yAxisId="left" type="monotone" dataKey="ndx" stroke="#3b82f6" strokeWidth={2} name="Nasdaq 100 (x100)" dot={{ r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="corr" stroke="#10b981" strokeWidth={3} name="30D Correlation" dot={{ r: 5 }} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-400 mt-4 italic">
                  30-day rolling correlation (green dashed line) reaches 0.80, indicating Bitcoin and Nasdaq now move in near-lockstep.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Several structural factors drive this convergence:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><span className="font-semibold text-white">Institutional Ownership:</span> Spot Bitcoin ETFs now hold $65B in AUM, with Fidelity and BlackRock funds attracting the same retail/wealth manager base as QQQ.</span>
                </li>
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><span className="font-semibold text-white">MicroStrategy Contagion:</span> MSTR's $42B Bitcoin treasury makes it a de facto leveraged BTC ETF, and its inclusion in the Nasdaq 100 mechanically links the two.</span>
                </li>
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span><span className="font-semibold text-white">Risk-On/Risk-Off Uniformity:</span> Macro traders now treat BTC, tech growth stocks, and long-duration bonds as a single "growth/liquidity" factor basket.</span>
                </li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                This correlation destroys Bitcoin's original value proposition as a portfolio diversifier. For asset allocators, BTC increasingly offers little beyond amplified Nasdaq beta at 2.5x leverage—hardly the "digital gold" narrative that justified $100K price targets.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                4. The Death of the 4-Year Cycle
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                For nearly a decade, Bitcoin followed a predictable halving-driven cycle: accumulation → halving → parabolic rally → capitulation. The 2024 halving, however, failed to deliver the traditional blow-off top. Instead, BTC peaked at $73K in March 2024 (pre-halving), retested resistance at $72K in January 2026, and has since traded sideways.
              </p>

              {/* Callout Box */}
              <div className="bg-gray-900/60 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Cycle Theory Breakdown</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <span className="font-semibold text-white">"Left Translation":</span> A technical pattern where a cycle peaks before its midpoint, signaling weakening momentum and potential early-stage topping. Bitcoin's March 2024 peak occurring pre-halving represents textbook left translation.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">"Liquidity Lag":</span> Historical halvings occurred during expanding liquidity regimes (2012, 2016, 2020). The 2024 halving coincided with QT and rising real rates, inverting the traditional catalyst.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Three structural changes explain this cycle breakdown:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-2 text-sm">1. Institutional Flow</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    ETFs smooth volatility by creating continuous bid/ask markets. Retail FOMO cycles are dampened by professional market makers.
                  </p>
                </div>
                <div className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-2 text-sm">2. Macro Dominance</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Halving supply shocks are trivial compared to Fed policy shifts. A 1% Fed Funds Rate change impacts crypto more than reducing daily issuance by 450 BTC.
                  </p>
                </div>
                <div className="bg-gray-900/60 border border-gray-700/50 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-2 text-sm">3. Maturity Plateau</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    At $1.3T market cap, Bitcoin requires $50B+ net inflows for 10% gains. Early-cycle 100x returns are mathematically impossible.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We believe crypto has entered a "Perpetual Beta" regime—perpetually correlated with risk assets, perpetually dependent on macro liquidity, and perpetually pricing in narrative hope rather than fundamental demand. The 4-year cycle is dead. Long live the Nasdaq correlation.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                5. Altcoin Carnage & Structural Re-rating
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                While Bitcoin treads water, altcoins are experiencing a silent capitulation. The total altcoin market cap (excluding BTC and ETH) has declined 23% from December 2025 peaks, with several "blue-chip" projects down 40-60% from their 2024 highs.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Key observations:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span><span className="font-semibold text-white">Solana's Reality Check:</span> Despite narrative dominance, SOL has retraced 35% from its $295 peak. Onchain metrics show declining DEX volumes and stagnant NFT activity.</span>
                </li>
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span><span className="font-semibold text-white">L2 Valuation Collapse:</span> Arbitrum, Optimism, and Polygon have all shed 50%+ from 2024 peaks as the "L2 Summer" thesis evaporates.</span>
                </li>
                <li className="text-gray-300 leading-relaxed flex items-start gap-3">
                  <span className="text-red-400 mt-1">▸</span>
                  <span><span className="font-semibold text-white">AI Token Flush:</span> The AI narrative that drove Q4 2024 speculation (Render, Fetch.ai, SingularityNET) has unwound violently as investors rotate toward equity-based AI plays.</span>
                </li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                This is not cyclical correction—it's structural re-rating. The market is realizing that 99% of tokens offer no genuine value accrual beyond speculative trading. Only protocols with sustainable fee revenue and real product-market fit will survive the next phase.
              </p>
            </section>

            {/* Section 6: Bear vs Bull Arguments */}
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                6. Market Outlook: Bear Trap or Distribution?
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                The central debate among institutional desks is whether current weakness represents a "bear trap" (temporary shakeout before resumption) or "distribution" (smart money exiting before deeper correction). We present both cases:
              </p>

              {/* Bull vs Bear Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Bull Case */}
                <div className="bg-gradient-to-br from-emerald-950/30 to-gray-900/60 border-2 border-emerald-700/40 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-emerald-400" size={28} />
                    <h3 className="text-xl font-bold text-emerald-300">Bull Case: Bear Trap</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                      <span><span className="font-semibold text-white">Sentiment Flush:</span> Crypto Fear & Greed Index at 32 (Fear), historically a contrarian buy signal.</span>
                    </li>
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                      <span><span className="font-semibold text-white">ETF Inflows:</span> Despite price weakness, spot BTC ETFs saw $1.2B net inflows in January, indicating institutional accumulation.</span>
                    </li>
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                      <span><span className="font-semibold text-white">Seasonality:</span> Q1 corrections followed by Q2-Q3 rallies occurred in 2023, 2021, and 2019. Historical precedent favors spring recovery.</span>
                    </li>
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                      <span><span className="font-semibold text-white">Fed Pivot Coming:</span> If inflation moderates by Q3, even Warsh may be forced to cut rates, reigniting risk appetite.</span>
                    </li>
                  </ul>
                </div>

                {/* Bear Case */}
                <div className="bg-gradient-to-br from-red-950/30 to-gray-900/60 border-2 border-red-700/40 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown className="text-red-400" size={28} />
                    <h3 className="text-xl font-bold text-red-300">Bear Case: Distribution</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                      <span><span className="font-semibold text-white">Liquidity Desert:</span> Fed balance sheet down $1.7T from peak. No QE in sight, and Warsh may accelerate QT.</span>
                    </li>
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                      <span><span className="font-semibold text-white">Retail Exhaustion:</span> Coinbase app downloads down 40% YoY. Retail, the marginal buyer in past cycles, is absent.</span>
                    </li>
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                      <span><span className="font-semibold text-white">Macro Headwinds:</span> Slowing GDP, tightening credit spreads, and potential 2026 recession make risk-off positioning rational.</span>
                    </li>
                    <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                      <span><span className="font-semibold text-white">Technical Breakdown:</span> Bitcoin losing $65K support could cascade to $58K (200-day MA), triggering systematic deleveraging.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion Quote Block */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-l-4 border-blue-900 p-8 rounded-r-xl">
                <p className="text-2xl text-white font-semibold italic mb-4 leading-relaxed">
                  "Show me the liquidity, and I'll show you the market."
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The brutal truth is that crypto remains a liquidity-driven asset class. Until global M2 re-accelerates or the Fed pivots dovish, expecting sustained rallies is fantasy. The 4-year cycle thesis is dead, killed by macro dominance and institutional flow dynamics.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Nexus One's stance: We remain defensively positioned with our 40% stablecoin / 60% core allocation via the N1DV Barbell Strategy. This is not a market for heroes. This is a market for survivors. We will not chase low-quality altcoin rallies, and we will not be swayed by degenerate leverage narratives.
                </p>
                <p className="text-gray-300 leading-relaxed font-semibold">
                  We wait. We watch. We preserve capital. And when the regime shifts, we will strike with precision.
                </p>
              </div>
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
