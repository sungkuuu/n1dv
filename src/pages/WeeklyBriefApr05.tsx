import { Layout } from '../components/Layout';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WeeklyBriefApr05() {
  return (
    <Layout>
      <article className="min-h-screen font-sans bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Weekly Brief: Apr 5</span>
          </nav>

          <div className="mb-16">
            <div className="inline-block w-fit bg-transparent border border-blue-500 text-blue-400 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6">
              WEEKLY BRIEF
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              Nexus One Weekly Digital Asset Market Report - April 5, 2026
            </h1>

            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              By Nexus One Research Desk • Apr 5, 2026 • 25 min read
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                1. Global Macroeconomic Trends
              </h2>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Key Indicators (Weekly Change)</h3>
              <div className="overflow-x-auto mb-6 rounded-lg border border-slate-800">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/50">
                      <th className="py-3 px-4 text-slate-400 font-semibold">Indicator</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">Level</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">WoW</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-slate-300">10-Year U.S. Treasury Yield</td>
                      <td className="py-3 px-4 text-slate-300">4.31%</td>
                      <td className="py-3 px-4 text-slate-300">Approx. +5bp</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-slate-900/50">
                      <td className="py-3 px-4 text-slate-300">USD/KRW Exchange Rate</td>
                      <td className="py-3 px-4 text-slate-300">1,515~1,516 KRW</td>
                      <td className="py-3 px-4 text-slate-300">Approx. +15~20 KRW (Won weakness)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-slate-300">Brent Crude Oil</td>
                      <td className="py-3 px-4 text-slate-300">$112.42</td>
                      <td className="py-3 px-4 text-slate-300">Approx. +12%</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-slate-900/50">
                      <td className="py-3 px-4 text-slate-300">Dollar Index (DXY)</td>
                      <td className="py-3 px-4 text-slate-300">100.22</td>
                      <td className="py-3 px-4 text-slate-300">Slight increase, sideways</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                During this week (March 30 - April 5), global financial markets exhibited extreme volatility amidst the collision of two massive variables: the Iran conflict and U.S. tariff policies. The U.S.-Israeli coalition&apos;s airstrikes on Iran (which began on February 28) have persisted for six weeks, sparking fears of a blockade in the Strait of Hormuz - through which approximately 20% of global crude oil and gas cargo volume passes - which hammered energy markets, causing international oil prices to shock markets by breaking above $112 per barrel. Concurrently, following a Supreme Court ruling on the unconstitutionality of previous tariff structures, the Trump administration reignited trade uncertainty by shifting to a 15% global tariff utilizing Section 122 provisions ¹. Consequently, global risk-on sentiment significantly contracted, while safe-haven gold maintained levels between $4,600 and $4,769 ².
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Regarding Federal Reserve (Fed) policy, Chairman Jerome Powell has completely withdrawn signals for rate cuts, wary of rising inflation expectations due to high oil prices. While the FOMC presented a scenario of a single 25bp cut to 3.25-3.50% by the end of 2026, the market currently reflects a 94% probability of a freeze at the April 28-29 meeting ³. The 2Y-10Y Treasury spread remains at +52bp, indicating ongoing yield curve normalization, but the risk remains that surging energy prices could further push up long-term yields.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                While the Dollar Index (DXY) remained relatively stable at 100.22, it is noteworthy that the USD/KRW exchange rate rose to 1,515-1,516 KRW, approaching the weakest levels for the Won since 2009. This is a complex result of net selling of domestic stocks by foreign investors and a worsening current account balance due to increased energy import costs ⁴. This Won weakness acts as a factor expanding the &quot;Kimchi Premium,&quot; making Bitcoin prices on domestic exchanges relatively higher compared to dollar-based global benchmarks.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">U.S. Treasury Yields (2Y, 10Y, 30Y)</h3>
              <ul className="space-y-2 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed">2-Year (2Y): 3.79% (+5bp WoW) - Reflects expectations for Fed policy rates. Short-term rates rose slightly as rate cut expectations receded ⁵.</li>
                <li className="text-slate-300 leading-relaxed">10-Year (10Y): 4.31% (+5bp WoW) - Persistent upward pressure on long-term rates due to inflation concerns and the energy shock ⁵.</li>
                <li className="text-slate-300 leading-relaxed">30-Year (30Y): 4.88% (+1bp WoW) - Limited increase as long-term fiscal concerns and safe-haven demand balanced each other out ⁵.</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mb-6">
                The 2Y-10Y spread is at +52bp (normalization phase), completely escaping the inversion phase of 2024. This suggests that short-term recession fears have eased, though inflation risks from high oil prices limit mid-term rate declines. Major data catalysts ahead include mid-April CPI and the FOMC (April 28-29).
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">WTI Oil, Gold Price, USD/KRW</h3>
              <ul className="space-y-2 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed">WTI Crude Oil: $111.54/barrel (Approx. +$11.90 WoW, +11.94%) - Historical surge on a weekly basis due to fears of a Hormuz blockade ⁶.</li>
                <li className="text-slate-300 leading-relaxed">Brent Crude: $112.42/barrel (Approx. +11% WoW) - Formed an unusually identical level with WTI ⁷.</li>
                <li className="text-slate-300 leading-relaxed">International Gold: $4,632~$4,769/oz (Intraday high $4,769, Approx. +/-1~2% WoW) - Continued safe-haven demand due to geopolitical instability ².</li>
                <li className="text-slate-300 leading-relaxed">USD/KRW: 1,515~1,516 KRW (Approx. +15~20 KRW Won weakness) - Approaching weakest levels since 2009 ⁴.</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mb-6">
                Surging oil prices have complex impacts on both the Korean stock market and the crypto market. As a country that imports all of its crude oil, the surge in energy costs induces both inflationary pressure and Won weakness. Conversely, gold prices absorbing safe-haven demand around $4,700 creates a competitive narrative for Bitcoin as &quot;Digital Gold.&quot; Historically, there have been cases where gold and Bitcoin bull markets occurred simultaneously, so the current gold strength could foster a favorable environment for Bitcoin.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">VIX Index</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                VIX Index: 24.54 (WoW down - slight stabilization from VIX 31 on March 27) ⁸. A VIX level of 24.54 is a &quot;Caution&quot; zone, having stabilized somewhat from the surge (above 30) immediately after the outbreak of the Iran war in Feb/March 2026. Historically, after entering the top 10% of VIX (above 28.3), the average 1-year S&amp;P 500 return is +22%, suggesting extreme volatility zones often serve as mid-term buy-the-dip opportunities. In the crypto market, VIX stabilization is interpreted as a risk-on recovery signal due to its high correlation with the Crypto Fear &amp; Greed Index ⁸.
              </p>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                2. Weekly Major Macroeconomic News Summary
              </h2>
              <ul className="space-y-3 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Prolonged Iran Conflict and Hormuz Crisis:</span> U.S.-Israeli airstrikes on Iran have continued for six weeks, with vessel passage through the Strait of Hormuz decreasing by 90-95%. While Bitcoin rebounded to $68,807 mid-week following President Trump&apos;s remarks suggesting a possible &quot;military operation end within 2-3 weeks,&quot; uncertainty remains ⁹.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Trump Administration Tariff Realignment:</span> Following a Supreme Court ruling on the unconstitutionality of IEEPA-based tariffs, the administration reapplied 15% global tariffs using Section 122 and Section 232. The average U.S. household tax burden is expected to increase by approximately $1,500 in 2026, and trade uncertainty is cooling corporate investment sentiment ¹.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Fed Strengthening FOMC Freeze Signals:</span> Chairman Powell reaffirmed a cautious stance on rate cuts, wary of high oil-driven inflation. A freeze at the April 28-29 FOMC is nearly certain (above 94%), with a single 25bp cut projected by the end of 2026 ³.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">OPEC+ Meeting on April 5:</span> Despite surging oil prices, OPEC+ decided to maintain existing production plans (206,000 b/d for April). With actual export volumes already limited by the Hormuz blockade, the production decision was largely symbolic, and the market expects high oil prices to persist ⁶.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Digital Asset Investment Product Outflows:</span> Due to the impact of the Iran war, the first fund outflows in five weeks occurred for crypto ETFs/ETPs. The weekly outflow volume was approximately $414 million, as surging energy prices and rate hike concerns triggered risk management among institutional investors ¹⁰.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">IMF, 2026 U.S. Economic Consultations:</span> On April 1, the IMF concluded its 2026 U.S. economic consultations, warning that the combined shock of tariff hikes and rising energy prices could reduce GDP by 0.1% in the long term ¹.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">U.S. March Employment Data Focus:</span> The market focused on the March Non-Farm Payrolls (NFP) data scheduled for release on April 3 (local time); signs of labor market weakening could reignite Fed rate cut expectations ¹¹.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Grayscale Files for Bittensor (TAO) ETF:</span> On April 3, Grayscale submitted a Bittensor (TAO) ETF application to the SEC. This is the first institutional-grade investment vehicle attempt for the AI crypto sector, symbolizing the entry of the AI-crypto convergence trend into the mainstream ¹².</li>
              </ul>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                3. BTC/ETH Trends and Technical Analysis, ETF Fund Flows
              </h2>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Price Trends</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Bitcoin (BTC) and Ethereum (ETH) repeated limited fluctuations last week amidst geopolitical uncertainty and high oil-driven inflation concerns. BTC hovered around $66,600 early in the week due to thin liquidity over the Good Friday holiday, then rebounded to $68,807 mid-week following President Trump&apos;s operation end remarks ⁹. However, weighed down by the weekend energy price re-surge and ETF outflow news, it closed at $67,540 on April 5, a slight weekly decline of approximately -1~2% ¹³. ETH showed sluggish performance relative to BTC around $2,060, as the ETH/BTC ratio continued to decline, showing that market leadership remains concentrated in Bitcoin.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Technical Analysis</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The core support zone for BTC is $66,000~$64,000; if this breaks, the $60,000 psychological level becomes the next line of defense. The upper resistance is at $71,500, a price level it has failed to break multiple times on the weekly chart. RSI is near 45, and MACD is below the signal line, indicating short-term bearish momentum is dominant. For ETH, $1,900~$2,000 is the key support zone, and a significant trend reversal is unlikely until it breaks above $2,200 ¹³.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                In the derivatives market, Open Interest (OI) is showing a slight decline as leverage positions are being cleared. Liquidations data shows slightly more long liquidations than shorts, suggesting lingering short-term selling pressure.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Key Indicators</h3>
              <ul className="space-y-2 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed">Funding Rate: Average BTC/ETH futures funding rate approx. -0.0053% (Short dominance). Historically, negative funding rates suggest excessive pessimism and act as a contrarian signal for a possible short-term reversal ¹⁴.</li>
                <li className="text-slate-300 leading-relaxed">BTC Dominance: Approx. 57~59% (High level for recent years). Institution funds are concentrated in Bitcoin while an Altcoin season has yet to arrive ¹³.</li>
                <li className="text-slate-300 leading-relaxed">Kimchi Premium: Approx. +1~2%. Won weakness (1,515 range) is an expansion factor. Signals a slight recovery in domestic retail demand ⁴.</li>
                <li className="text-slate-300 leading-relaxed">VIX Index: Approx. 24.54 (Stabilizing from 31 on March 27) ⁸.</li>
                <li className="text-slate-300 leading-relaxed">MVRV Z-score: Approx. +1.2 sigma (Approaching undervaluation zone). MVRV ratio of 1.8 is low compared to cycle peaks (3.5~4.0). Signal for &quot;Opportunity&quot; zone ¹⁵.</li>
                <li className="text-slate-300 leading-relaxed">Stock-to-Flow Model: Actual BTC price is approx. 15~20% lower than the model price. Situated within the 1 sigma band of the S2F model post-halving, expecting convergence to model price within 6-12 months based on past patterns ¹⁵.</li>
                <li className="text-slate-300 leading-relaxed">Google Trends: &quot;Bitcoin&quot; global search volume slightly increased WoW, but approx. 30% lower than the yearly peak ¹⁶.</li>
                <li className="text-slate-300 leading-relaxed">NUPL Index (Net Unrealized Profit/Loss) - BTC: Approx. +0.28 (Fear), ETH: Approx. +0.15 (Capitulation), SOL: Approx. -0.05 (Entering Capitulation) ¹⁷.</li>
              </ul>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">ETF Fund Flows</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Massive fund outflows occurred from top U.S. Bitcoin ETFs as of April 1: FBTC (Fidelity): Weekly approx. -$79M, IBIT (BlackRock): Weekly approx. -$87M, GBTC (Grayscale): Weekly -$13.3M, ARKB: Weekly -$5M, BITB: Weekly -$3M, HODL: Weekly +/-$0, others small outflows. Total weekly U.S. Spot ETF fund outflow was approx. $414 million, turning to outflows for the first time in five weeks ¹⁰. While institutional demand foundations for Q1 2026 remain solid (IBIT +$8.4B, FBTC +$4.1B net inflow), short-term Iran war and inflation concerns triggered risk management. Ethereum ETFs also saw a slight weakness with -$7.1M outflow on April 1.
              </p>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                4. L1/L2 Protocol Status (Revenue, Transactions, Burn)
              </h2>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Ethereum (L1)</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Last week, the Ethereum L1 network maintained an average gas fee of 3 gwei, the lowest in two years ¹⁸. This is a result of user migration to L2 networks accelerating and significantly reducing mainnet congestion. Net burn volume via EIP-1559 decreased significantly due to lower gas fees, leading to a phase of slight ETH supply inflation expansion. Ethereum&apos;s daily transactions were around 1.2M-1.3M, with active addresses maintaining 400k-500k. The major upcoming catalyst is the Glamsterdam upgrade (Q2 2026), expected to improve EVM efficiency and L2 cost structures ¹⁹.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Other Major L1 Chains</h3>
              <ul className="space-y-2 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed">Tron: Daily active addresses approx. 2M, approx. 8M daily transactions. Maintains a self-sufficient economy where protocol revenue (R/E ratio &gt; 1) exceeds issuance costs.</li>
                <li className="text-slate-300 leading-relaxed">Solana: Daily active addresses approx. 1.5M, average transactions approx. 3,000 TPS. Alpenglow upgrade expected to shorten finality from 12s to 150ms (80x improvement) ²⁰.</li>
                <li className="text-slate-300 leading-relaxed">BNB Chain: Improved TPS via Binance Maxwell upgrade and continued ecosystem expansion including Tether Gold integration ²¹.</li>
              </ul>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">L2 Networks</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Arbitrum One (TVL $15.2B, daily tx approx. 4M), Base (TVL $10.9B, low swap fees), Starknet and Optimism all maintained large TVL and progressed technical roadmaps. Combined L2 daily transactions are 13M, processing over 10x the mainnet volume ¹⁸.
              </p>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                5. DeFi Trends (TVL, DEX/Derivatives Volume, Revenue, and Valuation)
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Overall DeFi TVL remains around $105 billion (based on Feb 2026 levels) ²². Despite geopolitical instability, stablecoin deposits and yield-seeking demand sustained the DeFi ecosystem. Ethereum holds approx. 55~60% of total DeFi TVL, Tron approx. 10~12%, Solana and Arbitrum each 5~7%, and BNB Chain 7~8%.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Weekly combined volume of major DEXs is estimated at $30~40 billion. Hyperliquid maintains an overwhelming #1 position in Perps DEX with $2~3 billion daily volume, followed by dYdX and GMX.
              </p>
              <div className="overflow-x-auto mb-6 rounded-lg border border-slate-800">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/50">
                      <th className="py-3 px-4 text-slate-400 font-semibold">Protocol</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">Weekly Fees (Est.)</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">Token Holder Dist.</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">P/F Multiple</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800"><td className="py-3 px-4 text-slate-300">Uniswap (UNI)</td><td className="py-3 px-4 text-slate-300">~$18M</td><td className="py-3 px-4 text-slate-300">None</td><td className="py-3 px-4 text-slate-300">N/A</td><td className="py-3 px-4 text-slate-300">Full fees to LPs</td></tr>
                    <tr className="border-b border-slate-800 bg-slate-900/50"><td className="py-3 px-4 text-slate-300">GMX</td><td className="py-3 px-4 text-slate-300">~$3M</td><td className="py-3 px-4 text-slate-300">30% to holders</td><td className="py-3 px-4 text-slate-300">~20x</td><td className="py-3 px-4 text-slate-300">stGMX staking yield</td></tr>
                    <tr className="border-b border-slate-800"><td className="py-3 px-4 text-slate-300">Hyperliquid (HYPE)</td><td className="py-3 px-4 text-slate-300">~$10M</td><td className="py-3 px-4 text-slate-300">Some Buyback/Burn</td><td className="py-3 px-4 text-slate-300">~15x</td><td className="py-3 px-4 text-slate-300">Fast-growing Perps DEX</td></tr>
                    <tr className="border-b border-slate-800 bg-slate-900/50"><td className="py-3 px-4 text-slate-300">Tron (TRX)</td><td className="py-3 px-4 text-slate-300">~$15M</td><td className="py-3 px-4 text-slate-300">Some Burn</td><td className="py-3 px-4 text-slate-300">PSR ~2x</td><td className="py-3 px-4 text-slate-300">R/E &gt; 1, Self-sufficient</td></tr>
                    <tr className="border-b border-slate-800"><td className="py-3 px-4 text-slate-300">Solana (SOL)</td><td className="py-3 px-4 text-slate-300">~$5M</td><td className="py-3 px-4 text-slate-300">Some Burn</td><td className="py-3 px-4 text-slate-300">PSR ~Thousands</td><td className="py-3 px-4 text-slate-300">R/E approx. 0.01, Inflation-dependent</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Note: Belt indicator - TVL $1M, Current APY 4.07%, Net APY 4.12%, Share Price $1.030. This is mid-range for current stablecoin yield (3~5% APY), slightly lower than the U.S. 10Y yield (4.31%), showing contracted crypto risk premiums relative to risk-free rates ²³.
              </p>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                6. NFT Market Trends (Volume, Users, and Bluechips)
              </h2>
              <div className="overflow-x-auto mb-6 rounded-lg border border-slate-800">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/50">
                      <th className="py-3 px-4 text-slate-400 font-semibold">Chain</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">Weekly Volume</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">WoW Change</th>
                      <th className="py-3 px-4 text-slate-400 font-semibold">Weekly Buyers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800"><td className="py-3 px-4 text-slate-300">Ethereum</td><td className="py-3 px-4 text-slate-300">$56.6M</td><td className="py-3 px-4 text-slate-300">+30%</td><td className="py-3 px-4 text-slate-300">~5,370</td></tr>
                    <tr className="border-b border-slate-800 bg-slate-900/50"><td className="py-3 px-4 text-slate-300">BNB Chain</td><td className="py-3 px-4 text-slate-300">$12.0M</td><td className="py-3 px-4 text-slate-300">+15%</td><td className="py-3 px-4 text-slate-300">~30,000</td></tr>
                    <tr className="border-b border-slate-800"><td className="py-3 px-4 text-slate-300">Solana</td><td className="py-3 px-4 text-slate-300">$1.9M</td><td className="py-3 px-4 text-slate-300">+26%</td><td className="py-3 px-4 text-slate-300">~99,000</td></tr>
                    <tr className="border-b border-slate-800 bg-slate-900/50"><td className="py-3 px-4 text-slate-300">Polygon</td><td className="py-3 px-4 text-slate-300">$4.0M</td><td className="py-3 px-4 text-slate-300">+10%</td><td className="py-3 px-4 text-slate-300">~20,000</td></tr>
                    <tr className="border-b border-slate-800"><td className="py-3 px-4 text-slate-300">Mythos</td><td className="py-3 px-4 text-slate-300">$15.0M</td><td className="py-3 px-4 text-slate-300">-</td><td className="py-3 px-4 text-slate-300">Gaming item NFTs</td></tr>
                    <tr className="border-b border-slate-800 bg-slate-900/50"><td className="py-3 px-4 text-slate-300">Total</td><td className="py-3 px-4 text-slate-300">$88.29M</td><td className="py-3 px-4 text-slate-300">+37.4%</td><td className="py-3 px-4 text-slate-300">-</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Ethereum led the market with 64% share of volume, showing a strong +30% rebound ²⁴. Solana showed active small-scale participation with nearly 98,000 buyers, while Mythos recorded strong gaming item transaction flows.
              </p>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                7. Real World Asset (RWA) Tokenization Trends
              </h2>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Market Size</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Total on-chain RWA value is approx. $26.48 billion (as of March 23, +5.25% MoM) ²⁵. It has grown over 5x from approx. $5 billion in early 2025, making it one of the fastest-growing segments after stablecoins.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Major Projects and Share</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                U.S. T-Bills/Treasury funds account for 55~60% of tokenized assets. BlackRock&apos;s BUIDL (AUM approx. $1.9B across 9 chains) and Franklin Templeton&apos;s BENJI (Stellar, Ethereum, Solana) lead the market ²⁵. Ondo Finance&apos;s OUSG and Matrixdock&apos;s STBT are also growing fast. Others include tokenized stocks/ETFs (15%), real estate (10%), and private credit (15%).
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Recent Trends</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                U.S. Congress held hearings on tokenized assets on March 25, accelerating institutionalization discussions. McKinsey projects the market could reach $2T by 2030, or up to $16-30T in optimistic scenarios ²⁵. In Korea, the FSC-led STO institutionalization is in focus, with tokenized real estate and art being prepared as initial cases.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                8. On-chain Activity Analysis (Artemis, Dune, CryptoQuant, etc.)
              </h2>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Active Addresses/Transactions</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Bitcoin daily active addresses are in a downtrend at 800k-1M, continuing to decrease from the 2024 halving peak (approx. 1.3M) ²⁶. Ethereum active addresses are also at 400k-500k as activity disperses to L2.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Chain Activity and L2 Impact</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Ranking by active addresses: Tron &gt; BNB Chain &gt; Solana &gt; Ethereum L1. Including L2, the Ethereum ecosystem is the absolute #1. Arbitrum One and Base combined daily transactions broke 13M, 10x the Ethereum L1 volume ¹⁸.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">On-chain Fund Flows</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                CryptoQuant data shows a slight increase in BTC exchange inflows, indicating short-term selling pressure, but no signs of extreme panic selling. USDT market cap slightly increased WoW, indicating maintained dry powder. USDC maintains a stable issuance balance.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Unique On-chain Events</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Most notable was the approx. $1 billion BTC transfer by MARA Holdings, confirmed via Caleb &amp; Brown on March 31 ²⁷. While some large whale exchange deposits were caught, Long-Term Holder (LTH) share remains high at 78% ¹⁵. No abnormal spikes in Tornado Cash or mixer usage.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                9. Sector Summary: Meme, GameFi, AI, etc.
              </h2>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Meme Coin Sector</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Total Meme coin market cap is approx. $34.5 billion, down 77% from the Dec 2024 peak ($150.6B) ²⁸. DOGE, SHIB, and PEPE are sideways at 87~94% below ATHs. PEPE RSI is at 27.49 (oversold), while DOGE (42.1) and SHIB (46.7) are neutral. Meme dominance is at a record low of 3.2%. While VIX stabilization could trigger short-term speculative re-entry, structural market maturation (SEC regulation, investor awareness) makes past 100x-1000x gains unlikely.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">GameFi</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Mythos led with $15M in weekly NFT volume ²⁴. Polygon-based games saw slight increases in active users; traditional giant Ubisoft continues blockchain gaming experiments. Major tokens (AXS, GALA, IMX) followed overall market weakness, but UAW (Unique Active Wallets) shows gradual recovery. Solana&apos;s Alpenglow upgrade will be a structural boon for GameFi and high-frequency DeFi ²⁰.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Artificial Intelligence (AI) Sector</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The AI sector showed unusual strength despite the overall market weakness ²⁹. TAO (Bittensor) gained about +90% in 30 days ($180 to $332), RNDR rose about +40% WoW, and FET rose about +24% WoW. AI P/F ratios are high, but real demand for computing and AI agents is supporting utility-based valuation. Bittensor subnet expansion and Render GPU volume are key sustainability metrics.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                10. On-chain Anomaly Analysis (Top 200 Market Cap)
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Large Token Movements: Approx. $1 billion BTC transfer by MARA Holdings is the most notable; mining sell-offs are short-term pressure factors ²⁷. High LTH share (78%) suggests limited structural selling pressure ¹⁵.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Cross-chain Fund Flows: Ethereum to Arbitrum/Base bridge flows remained at standard levels. Solana to Ethereum L2 flows were observed for yield arbitrage rather than speculation.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Token Unlock Pressure: April 1 saw 17.2% ($1.5B) TIA unlock, plus SUI ($47.5M). April 3 saw 6.0% Wormhole (W) unlock ³⁰. TIA price saw a 5-10% correction pre/post unlock.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Overall Risk Assessment: &quot;Medium.&quot; MARA sell-offs and TIA/W unlocks are pressure points, but LTH share and ETF stability suggest low structural collapse risk.
              </p>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                11. Projects of the Week: Analysis of 3 Projects
              </h2>
              <ul className="space-y-3 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Bittensor (TAO):</span> Decentralized AI network. Grayscale&apos;s April 3 ETF application was a major catalyst ¹². Market cap approx. $2.2B, +90% over 30 days. Risks include high narrative dependency and high volatility.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Celestia (TIA):</span> Modular DA layer. April 1 saw a massive 17.2% cliff unlock, causing selling pressure ³⁰. Long-term DA demand remains positive post-EIP-4844, but competition and further unlocks are near-term risks.</li>
                <li className="text-slate-300 leading-relaxed"><span className="font-semibold text-white">Hyperliquid (HYPE):</span> Perps DEX on its own L1 with $2~3B daily volume. Buyback-burn program supports value narrative; major risk is DEX regulatory uncertainty.</li>
              </ul>
            </section>

            <section className="mb-16">
              <hr className="my-14 border-slate-800/60" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                12. Weekly Insight: In-depth Commentary
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                &quot;The Paradox of Energy Shock: Blockchain&apos;s Neutrality Shines in Extreme Fear&quot;
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Amidst the Iran war and Hormuz crisis, the crypto market is showing strange stability compared to extreme turmoil in traditional markets. While BTC is 46% below its peak, 78% LTH share and $40B+ ETF AUM prove its maturation as an institutional asset. Particularly, the 24-hour accessibility of blockchain during weekend market closures highlighted Bitcoin&apos;s &quot;Censorship Resistance&quot; as a practical hedge ²⁷.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Simultaneously, the AI sector (+90% TAO, +40% RNDR) showed independent strength. Grayscale&apos;s TAO ETF filing is a symbolic milestone for institutional AI crypto interest ²⁹. From a cycle perspective, MVRV Z-score +1.2 sigma and NUPL +0.28 (Fear) suggest we are near historical bottom-buying zones ¹⁵. However, geopolitical shocks and potential Fed hikes make simple repetitions of past patterns difficult. Strategy: Maintain BTC/ETH core positions, minimize leverage, and selectively expand exposure to sectors with real revenue (AI, RWA).
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                13. Major Event Schedule for Next Week
              </h2>
              <ul className="space-y-2 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed">April 7: OPEC+ consultations - watch for oil price impact ⁶.</li>
                <li className="text-slate-300 leading-relaxed">April 9: U.S. March PPI - key for inflation path judgment ¹¹.</li>
                <li className="text-slate-300 leading-relaxed">April 10: U.S. March CPI - key indicator for Fed. High numbers could pressure BTC ³.</li>
                <li className="text-slate-300 leading-relaxed">April 14-15: CLARITY Act markup - possible committee passage of U.S. crypto framework ³¹.</li>
                <li className="text-slate-300 leading-relaxed">April 14: SEC Altcoin ETF decision deadlines - possible 심사 results ¹².</li>
                <li className="text-slate-300 leading-relaxed">April 16: SEC CLARITY Act roundtable - token securities/commodity classification discussion ¹³.</li>
                <li className="text-slate-300 leading-relaxed">April 27-29: Bitcoin Conference 2026, Las Vegas ³¹.</li>
                <li className="text-slate-300 leading-relaxed">April 28-29: FOMC Meeting - Powell&apos;s last meeting before term end. 94% freeze probability ³.</li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mt-12 mb-6">
                14. Token Unlock Schedule Summary
              </h2>
              <ul className="space-y-2 mb-8 list-disc pl-6">
                <li className="text-slate-300 leading-relaxed">April 1 (Occurred): Celestia (TIA) - Approx. 17.2% ($1.5B) of supply. Massive cliff unlock; 5-10% price correction ³⁰.</li>
                <li className="text-slate-300 leading-relaxed">April 1 (Occurred): Sui (SUI) - 0.53% ($47.5M). Limited impact ³⁰.</li>
                <li className="text-slate-300 leading-relaxed">April 3 (Occurred): Wormhole (W) - 6.0% of supply ³⁰.</li>
                <li className="text-slate-300 leading-relaxed">Mid-April: Various small-scale unlocks totaling remainder of $398M monthly volume ³⁰.</li>
                <li className="text-slate-300 leading-relaxed">Late April: Arbitrum (ARB) - Regular vesting unlock.</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mb-6">
                Supply Pressure Analysis: April&apos;s $398M total unlock is high, driven by TIA&apos;s 17.2% single unlock. Historically, cliff unlocks of over 10% supply cause approx. -15~-25% correction over 6 weeks. Investors should differentiate between early investor (low cost) and community/team allocations.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800/50">
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Disclaimer</h4>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                This report is for informational purposes only and does not constitute financial, investment, legal, or tax advice. The views expressed herein are those of the Nexus One Research Desk as of the date of publication and are subject to change without notice.
                <br /><br />
                Nexus One and its affiliates may hold long or short positions in the assets discussed and may adjust these positions at any time. Digital asset investments are highly volatile and involve a significant risk of loss. Investors should conduct their own due diligence.
              </p>
            </div>
            <div className="border-t border-slate-800/50 pt-6">
              <Link to="/insights" className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                Back to All Insights
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
