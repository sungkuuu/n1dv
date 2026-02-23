import { Layout } from '../components/Layout';
import { ArrowLeft, ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const macroData = [
  { date: 'Jan 29', yield: 4.24, btc: 77000 },
  { date: 'Jan 30', yield: 4.25, btc: 76500 },
  { date: 'Feb 2', yield: 4.27, btc: 74200 },
  { date: 'Feb 3', yield: 4.29, btc: 72100 },
  { date: 'Feb 4', yield: 4.30, btc: 71800 },
  { date: 'Feb 5', yield: 4.31, btc: 71340 }
];

export function WeeklyBriefFeb06() {
  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Weekly Brief: Feb 6</span>
          </nav>

          {/* Header */}
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 bg-transparent text-blue-500 border border-blue-500 text-xs font-bold mb-6 uppercase tracking-wider">
              WEEKLY BRIEF
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              The Great Decoupling & Institutional Capitulation
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              BTC loses $70k, Warsh Shock, and Korea opens Corporate Accounts
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800">
              <span className="font-medium text-gray-400">Nexus One Research Desk</span>
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
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Executive Summary
            </h2>
            <div className="text-gray-300 leading-[1.8] space-y-6">
              <p>
                In the first week of February 2026, the global digital asset market faced its most violent structural correction since the approval of spot ETFs. Bitcoin (BTC) broke below the psychological support level of $70,000 and subsequently tumbled to the low $60,000s, marking a catastrophic price adjustment. This represents a retracement of nearly 50% from its All-Time High (ATH) of $126,000 recorded in October 2025.
              </p>
              <p>
                This report identifies the convergence of three key vectors driving the current market collapse:
              </p>
              <ul className="space-y-4 ml-6 list-disc">
                <li>
                  <strong className="text-white">Macro-Political Shock:</strong> The "Warsh Shock" (Kevin Warsh nomination) triggered a repricing of risk assets globally, pushing U.S. 10-year Treasury yields to 4.3%.
                </li>
                <li>
                  <strong className="text-white">ETF Flow Reversal:</strong> Structural outflows confirmed. Major funds like IBIT and FBTC recorded hundreds of millions in redemptions, challenging the "Diamond Hands" thesis.
                </li>
                <li>
                  <strong className="text-white">Derivatives Cascade:</strong> A "super cycle" of forced liquidations wiped out over <strong>$2.5 billion</strong> in long positions.
                </li>
              </ul>
            </div>
          </div>

          {/* Article Body */}
          <div className="text-gray-300 leading-[1.8]">
            {/* Section 2 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">
                2. Macroeconomic Environment
              </h2>

              <p className="mb-6">
                The global financial landscape in early February 2026 has been dominated by the intersection of monetary policy uncertainty and geopolitical instability. The nomination of Kevin Warsh as Federal Reserve Chair, colloquially termed the "Warsh Shock," sent shockwaves through risk asset markets.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">2.1 Key Macro Indicators</h3>

              <ul className="space-y-4 ml-6 list-disc mb-8">
                <li>
                  <strong className="text-white">U.S. Treasury Yields:</strong> Rose to <strong>4.29%</strong>, draining liquidity from non-interest-bearing assets.
                </li>
                <li>
                  <strong className="text-white">Commodities:</strong> WTI Crude is weak (<strong>$62</strong>), but BTC failed to react, proving the crash is liquidity-driven.
                </li>
                <li>
                  <strong className="text-white">Safe Havens:</strong> Gold hit a new ATH (<strong>$4,859/oz</strong>) while BTC fell 50%, signaling a breakdown of the "Digital Gold" narrative.
                </li>
              </ul>

              {/* Macro Divergence Chart */}
              <div className="my-12 bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={macroData} margin={{ top: 20, right: 50, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis
                      dataKey="date"
                      stroke="#666"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      yAxisId="left"
                      domain={[4.20, 4.35]}
                      stroke="#3b82f6"
                      style={{ fontSize: '12px' }}
                      label={{ value: 'US 10Y Yield (%)', angle: -90, position: 'insideLeft', style: { fill: '#3b82f6' } }}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      domain={[70000, 78000]}
                      stroke="#ec4899"
                      style={{ fontSize: '12px' }}
                      label={{ value: 'Bitcoin Price ($)', angle: 90, position: 'insideRight', style: { fill: '#ec4899' } }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Legend
                      wrapperStyle={{ paddingTop: '20px' }}
                      iconType="line"
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="yield"
                      stroke="#3b82f6"
                      strokeWidth={2.5}
                      name="US 10Y Yield (%)"
                      dot={{ fill: '#3b82f6', r: 4 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="btc"
                      stroke="#ec4899"
                      strokeWidth={2.5}
                      name="Bitcoin Price (USD)"
                      dot={{ fill: '#ec4899', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-500 italic mt-4 text-center">
                  Macro Divergence: As 10Y Yields (Blue) spiked to 4.3%, Bitcoin (Pink) broke the $74k support.
                </p>
              </div>

              <p className="mb-6">
                This divergence is particularly noteworthy. Historically, Bitcoin has exhibited correlation with traditional safe havens during periods of monetary instability. The current decoupling suggests that institutional capital views BTC as a speculative risk asset rather than a store of value, at least in the short to medium term.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">
                3. Deep Dive: Crypto Market Capitulation
              </h2>

              <p className="mb-6">
                The cryptocurrency market has entered a phase of technical and psychological capitulation. Multiple on-chain and derivatives metrics confirm that this is not merely a correction, but a structural repricing event.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">3.1 BTC Technical Analysis</h3>
              <p className="mb-4">
                The <strong>$74,000</strong> "Bull Market Floor" that held through Q4 2025 and Q1 2026 has been decisively broken. This level, supported by the 100-Week Moving Average and previous cycle highs, was considered sacrosanct by many institutional analysts. Its breach signals a regime change.
              </p>

              <p className="mb-8">
                Next structural support is the 200-Week MA at approximately <strong>$58,000</strong>. This level has historically acted as the ultimate capitulation floor in previous bear markets (2018, 2022). A breakdown below this level would open the door to a retest of the <strong>$40,000-$45,000</strong> zone.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">3.2 Derivatives Market Signals</h3>
              <ul className="space-y-4 ml-6 list-disc mb-8">
                <li>
                  <strong className="text-white">Funding Rates:</strong> Negative funding rates (<strong>-0.009%</strong>) indicate bears are in full control. Shorts are paying longs, a classic sign of bearish dominance.
                </li>
                <li>
                  <strong className="text-white">Open Interest:</strong> Collapsed by <strong>22%</strong> week-over-week as leveraged positions were forcibly closed.
                </li>
                <li>
                  <strong className="text-white">Liquidations:</strong> Over <strong>$2.56 billion</strong> in long positions liquidated in a 48-hour window, one of the largest forced unwind events in history.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-white">3.3 ETH Weakness</h3>
              <p className="mb-4">
                Ethereum has shown even weaker defensive characteristics than Bitcoin. Falling to <strong>$2,068</strong>, ETH is down approximately 58% from its cycle high of <strong>$4,950</strong>. The ETH/BTC ratio has compressed to 0.033, near multi-year lows.
              </p>

              <p className="mb-6">
                This relative weakness is attributable to ETH's higher beta profile and ongoing concerns about Layer 2 value capture. As L2s like Base, Arbitrum, and Optimism scale transaction volumes, questions persist about whether transaction fee revenue will accrue to mainnet ETH holders or be captured by L2 ecosystems.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">
                4. News Analysis (Jan 30 – Feb 6)
              </h2>

              <h3 className="text-xl font-semibold mb-4 text-white">4.1 Korea (Bullish Long-Term)</h3>
              <p className="mb-4">
                In a landmark decision, South Korea's Financial Services Commission (FSC) announced it will <strong>allow corporate crypto accounts</strong>, reversing years of restrictive policy. This represents a massive structural shift with implications for the next cycle.
              </p>

              <p className="mb-8">
                Previously, only individual retail accounts were permitted on regulated exchanges like Upbit and Bithumb. Corporate participation was restricted to indirect exposure via funds or offshore vehicles. The FSC's policy reversal opens the door for Korean conglomerates (Samsung, SK Group, LG) to directly allocate treasury reserves to digital assets.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">4.2 Regulation: Exchange Ownership Caps</h3>
              <p className="mb-4">
                A proposed <strong>15-20% ownership cap</strong> on crypto exchanges targets Dunamu (Upbit's parent) and may accelerate Bithumb's long-delayed IPO. This regulatory framework aims to prevent monopolistic control and ensure decentralized ownership structures.
              </p>

              <p className="mb-8">
                While ostensibly pro-competitive, the policy may create unintended consolidation pressures, particularly for smaller exchanges like Coinone and Korbit.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">4.3 USA (Bearish): Strategy (MSTR) Losses</h3>
              <p className="mb-4">
                MicroStrategy, rebranded as "Strategy" (MSTR), reported a staggering <strong>$12.6 billion Q4 loss</strong> due to mark-to-market accounting on its Bitcoin holdings. While the company's strategy of leveraging debt to accumulate BTC has been lauded during bull markets, the current drawdown exposes the fragility of this approach.
              </p>

              <p className="mb-6">
                The stock (MSTR) has declined 68% from its highs, trading at a significant discount to its Bitcoin NAV. This signals that equity markets are pricing in execution risk, dilution risk, and the possibility of forced selling if debt covenants are breached.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">
                5. Sector Watch
              </h2>

              <h3 className="text-xl font-semibold mb-4 text-white">5.1 Layer 2 Ecosystems</h3>
              <p className="mb-6">
                Despite the broader market downturn, certain Layer 2 ecosystems continue to demonstrate resilience and user activity growth.
              </p>

              <ul className="space-y-4 ml-6 list-disc mb-8">
                <li>
                  <strong className="text-white">Base (Coinbase L2):</strong> Dominates activity with <strong>144 UOPS</strong> (User Operations Per Second), far exceeding Arbitrum (89 UOPS) and Optimism (76 UOPS). Base's integration with Coinbase's 110M+ user base provides a structural moat.
                </li>
                <li>
                  <strong className="text-white">Kaia (Klaytn Merger):</strong> Surged <strong>40%</strong> on news of a major game launch partnership. Kaia represents the merger of Klaytn (Kakao) and Finschia (LINE), targeting 250M+ Asian users.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-white">5.2 RWA (Real World Assets): The Safe Haven</h3>
              <p className="mb-4">
                Tokenized Treasuries have emerged as the unexpected winner of the 2026 crypto correction. Assets like BlackRock's BUIDL and Franklin Templeton's FOBXX have grown <strong>900%</strong> since 2022, now exceeding <strong>$4.2 billion</strong> in AUM.
              </p>

              <p className="mb-6">
                These instruments offer positive real returns (4-5% APY) with minimal volatility, functioning as on-chain cash equivalents. For institutional allocators seeking crypto exposure without directional price risk, RWAs represent the logical safe haven.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">
                6. Outlook & Strategy
              </h2>

              <h3 className="text-xl font-semibold mb-4 text-white">6.1 Nexus One Verdict</h3>
              <p className="mb-4">
                The post-ETF "Easy Mode" is over. The market is entering a prolonged consolidation and re-rating phase. Institutional flows, once assumed to be one-directional inflows, have proven fickle and momentum-driven.
              </p>
              <p className="mb-8">
                We maintain our cautious stance and recommend capital preservation strategies over speculative long positioning.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">6.2 Key Catalysts to Watch</h3>
              <ul className="space-y-4 ml-6 list-disc mb-8">
                <li>
                  <strong className="text-white">Berachain Unlock (Feb 6/7):</strong> Large-scale token unlock event. Watch for sell pressure.
                </li>
                <li>
                  <strong className="text-white">US CPI (Feb 11):</strong> Critical inflation data. A hot print could push yields higher and extend crypto weakness.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-white">6.3 Strategic Recommendations</h3>
              <ul className="space-y-4 ml-6 list-disc mb-6">
                <li>
                  <strong className="text-white">Preserve Capital:</strong> Shift allocations to RWA/Stablecoins earning positive real yields. BUIDL (4.8% APY) and USDC on-chain lending markets offer superior risk-adjusted returns in current environment.
                </li>
                <li>
                  <strong className="text-white">Selective Accumulation:</strong> Accumulate infrastructure winners (Base, Kaia) on deep dips. These ecosystems are building real user traction independent of token price.
                </li>
              </ul>

              <p className="mb-6">
                The trend remains <strong>down</strong> until BTC reclaims and holds <strong>$70,000</strong>. Until then, defensive positioning and patience are paramount.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">
                7. Deep Dive: The Korean Market Anomaly
              </h2>

              <p className="mb-8">
                South Korea's crypto market has long been characterized by unique dynamics that diverge from global trends. The so-called "Kimchi Premium"—the price premium Korean exchanges command over global spot prices—has historically served as a barometer of retail sentiment.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">7.1 Kimchi Premium Death</h3>
              <p className="mb-8">
                As of Feb 6, 2026, the Kimchi Premium has compressed to a mere <strong>1.5%</strong>, down from 8-12% during the October 2025 peak. This compression signals retail capitulation among Korean investors, who were among the most aggressive buyers during the 2024-2025 rally.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">7.2 Exchange Wars: Regulatory Pressure on Bithumb</h3>
              <p className="mb-4">
                Bithumb, Korea's second-largest exchange, is currently under investigation for alleged anti-money laundering violations and corporate governance issues. Regulatory scrutiny has intensified following the FSC's push for stricter compliance standards.
              </p>
              <p className="mb-8">
                Meanwhile, rumors suggest <strong>Coinbase is eyeing Coinone</strong>, Korea's fourth-largest exchange, as a potential acquisition target to establish a regulated foothold in the market. If consummated, this would mark Coinbase's first major international M&A and signal confidence in Korea's long-term potential despite near-term headwinds.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">7.3 Tax Limbo: 2027 Deferral</h3>
              <p className="mb-4">
                Korea's controversial <strong>20% capital gains tax</strong> on crypto profits has been deferred once again, now likely postponed to 2027. While this removes near-term selling pressure, it creates ongoing uncertainty for institutional participants planning multi-year allocations.
              </p>
              <p className="mb-6">
                The repeated delays suggest political indecision and regulatory fragmentation, which may deter serious institutional capital until a permanent framework is established.
              </p>
            </section>

            {/* Section 8 - Conclusion */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">
                8. Conclusion
              </h2>

              <p className="text-xl font-semibold mb-6 text-white">
                The market is in a "Perfect Storm" of converging bearish forces: macro repricing, ETF outflows, and technical breakdown.
              </p>
              <p className="mb-6">
                However, beneath the surface volatility, critical infrastructure for the next cycle is being built. Korea's decision to allow corporate crypto accounts represents a structural shift that will bear fruit in 2027-2028. RWA protocols are demonstrating product-market fit with institutional allocators seeking yield without volatility.
              </p>
              <p className="mb-6">
                <strong className="text-white">"Caution" is the watchword until on-chain metrics hit deep value zones.</strong> We are monitoring the following indicators for signs of capitulation completion:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>MVRV Ratio below 1.0 (currently 1.8)</li>
                <li>Exchange reserves declining for 4+ consecutive weeks</li>
                <li>Positive divergence in network fundamentals (active addresses, transaction volume)</li>
              </ul>
              <p className="font-semibold mb-6">
                Until these conditions are met, preservation of capital and selective infrastructure accumulation remain our core strategy. The market will recover—but not yet.
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
