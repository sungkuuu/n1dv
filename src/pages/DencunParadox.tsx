import { Layout } from '../components/Layout';
import { ArrowLeft, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DencunParadox() {
  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#0A0A0A] relative">
        <div className="max-w-5xl mx-auto px-4 py-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">The Dencun Paradox</span>
          </nav>

          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 bg-transparent text-emerald-500 border border-emerald-500 text-xs font-bold mb-6 uppercase tracking-wider">
              DEEP RESEARCH
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              The Dencun Paradox: Ethereum's Structural Divergence (2024–2026)
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Structural Decoupling of L1 Valuation and Ecosystem Expansion
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800">
              <span className="font-medium text-gray-400">By Nexus One Research Desk</span>
              <span>•</span>
              <span>Feb 9, 2026</span>
              <span>•</span>
              <span>20 min read</span>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-700 border-l-4 border-l-emerald-500 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <AlertCircle className="text-gray-400" size={24} />
              Key Takeaways
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">The Revenue Collapse:</span> Post-Dencun, L2 Rent Revenue collapsed by 99.7% ($544M → $1.8M), effectively ending the "Ultra Sound Money" narrative.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Value Migration:</span> Value shifted from L1 Validators to L2 Sequencers. Base operates at a ~98.3% margin, capturing profits that formerly accrued to ETH.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">The Strategic Trade-off:</span> Ethereum sacrificed over $100M in guaranteed revenue to subsidize L2s, successfully retaining 85% dominance ($99B TVL) against monolithic competitors.
                </p>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                1. Introduction: The Dencun Hard Fork and the Great Pivot of Ethereum's Economic Model
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Dencun hard fork, executed in March 2024 with its core EIP-4844 (Proto-Danksharding), will be recorded as the most radical economic experiment in Ethereum's history. This was more than a simple technical upgrade; it was a signal flare fundamentally shifting the network's business model from a B2C (Business-to-Consumer) "Gas Sales" model to a B2B (Business-to-Business) "Data Availability (DA)" provision model for Layer 2s. As of February 2026, we are holding the midterm report card for this "Grand Experiment."
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The user's inquiry touches on the specific magnitude of the decline in Ethereum L1 (Layer 1) revenue and its impact on valuation, as well as the compensation gained by the ecosystem in terms of scalability and market share. This report utilizes extensive on-chain data and financial analysis reports to quantify the reality of the "Revenue Cliff" faced by Ethereum, and deeply analyzes the severe blow this has dealt to valuation models and the strategic advantages the ecosystem has secured. In particular, focusing on the decoupling phenomenon of increased L2 profitability versus deteriorated L1 profitability, we will trace the process of Ethereum losing its "Ultra Sound Money" narrative and being re-evaluated as an "Infrastructure Utility."
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                2. The Economic Shock: L1 Revenue Cliff and Valuation Divergence
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The core of the Dencun upgrade was to dramatically lower the cost for L2 rollups to record data on the Ethereum mainnet. The introduction of 'Blobs'—a new data storage space—maximized cost efficiency by providing temporary data storage rather than permanent execution data. Technically, it was a massive success, but it had an immediate and destructive impact on L1's financial statements.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">2.1 Specific Estimates of Revenue Collapse</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ethereum's protocol revenue consists of the Base Fee (which is burned) and Tips paid by users. Before Dencun, L2s recorded massive amounts of data on L1 in the form of expensive 'calldata', accounting for a significant portion of Ethereum's revenue. However, after the introduction of Blobs, this revenue source effectively evaporated.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                According to data, <span className="font-semibold text-white">L2 Rent Revenue (Blob Fees)</span> reached <span className="font-semibold text-white">~$544.37M (~720B KRW) in March 2024</span> (Pre-Dencun), but plummeted to <span className="font-semibold text-white">~$1.8M (~2.4B KRW) in September 2024</span>, when the upgrade effects were fully reflected. This represents a staggering <span className="font-semibold text-white">99.7% decline</span> from the peak. This is not a seasonal factor or a market downturn; a structural revenue collapse has occurred.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This revenue decline is not a temporary phenomenon. It is estimated that in 2025 alone, Ethereum L1 effectively <span className="font-semibold text-white">sacrificed over $100M (~130B KRW)</span> in guaranteed fee revenue it used to collect from L2s, in order to support L2 growth. This was an intended result of the Ethereum Foundation and developer community adopting an L2-centric roadmap, but the financial hit was far more severe than the market expected.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                In 2024, the total revenue generated by L2 networks was approximately $277M, of which 41% ($113M) was paid to the Ethereum mainnet as security costs. However, in 2025, even though L2 revenue decreased to $129.17M due to user fee reductions, the cost paid to Ethereum L1 shrank to less than 10%, around <span className="font-semibold text-white">$10M (~13B KRW)</span>. In other words, L2s maximized profit margins through cost structure innovation, while L1 lost its earning power as a platform provider.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2.2 The Collapse of Valuation Models: The Death of "Ultra Sound Money"</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The core of the Ethereum investment thesis, the "Ultra Sound Money" narrative, was based on the mechanism that increased network activity leads to burn amounts exceeding issuance, creating deflation (supply reduction). However, the Dencun hard fork severed this link.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Inflationary Flip:</span> The burn mechanism (EIP-1559) was effectively paralyzed due to gas fees plummeting post-Dencun. As of 2025, Ethereum's annual inflation rate rose to <span className="font-semibold text-white">0.35%</span>, reverting to an inflationary asset.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Supply Increase:</span> Analyzing data for 30 days post-Dencun, the network issued approximately 78,000 ETH, but only 45,000 ETH was burned, resulting in a net supply increase of over 30,000 ETH.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Burn Rate Collapse:</span> Daily ETH burn volume decreased by an average of 84% compared to pre-Dencun levels.
                  </p>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                This deterioration in fundamentals was directly reflected in price performance. While competing assets like Bitcoin and Solana broke new highs or showed strong uptrends in 2025, Ethereum fell 10% year-to-date, and the ETH/BTC ratio fell an additional 6%, reaching multi-year lows. The market can no longer value Ethereum using P/E (Price-to-Earnings) models like "Growing Tech Stocks." According to revenue-based valuation models, a 99% revenue drop should imply a 99% market cap drop, but Ethereum's market cap remaining above $300B suggests the market is pricing in other factors.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">2.3 Mechanism Analysis of Value Leakage</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Analyzing the change in value flow before and after Dencun clearly reveals where the value lost from L1 has gone. Previously, most of the high gas fees paid by users flowed to L1 validators and the burn mechanism. However, currently, most of that value is accruing to the operating profits of <span className="font-semibold text-white">L2 Sequencers</span>.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4 text-gray-400 font-semibold">Category</th>
                      <th className="py-3 px-4 text-gray-400 font-semibold">Pre-Dencun</th>
                      <th className="py-3 px-4 text-gray-400 font-semibold">Post-Dencun</th>
                      <th className="py-3 px-4 text-gray-400 font-semibold">Implication</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">User Cost</td>
                      <td className="py-3 px-4 text-gray-300">High ($2-$50 per tx)</td>
                      <td className="py-3 px-4 text-gray-300">Very Low (&lt;$0.01)</td>
                      <td className="py-3 px-4 text-gray-300">Improved User Experience, Basis for Mass Adoption</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">L2 Cost to L1</td>
                      <td className="py-3 px-4 text-gray-300">&gt;41% of Revenue (CallData)</td>
                      <td className="py-3 px-4 text-gray-300">&lt;10% of Revenue (Blob)</td>
                      <td className="py-3 px-4 text-gray-300">Radical Improvement in L2 Cost Structure</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">Value Accrual</td>
                      <td className="py-3 px-4 text-gray-300">Ethereum L1 (Burn & Validators)</td>
                      <td className="py-3 px-4 text-gray-300">L2 Sequencers (Coinbase, Arbitrum, etc.)</td>
                      <td className="py-3 px-4 text-gray-300">Wealth Transfer from L1 Shareholders to L2 Operators</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-semibold">ETH Burn Effect</td>
                      <td className="py-3 px-4 text-gray-300">Strong (Deflationary)</td>
                      <td className="py-3 px-4 text-gray-300">Minimal (Inflationary Flip)</td>
                      <td className="py-3 px-4 text-gray-300">Decline in Scarcity Value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                This table shows that Ethereum L1 has transformed into a structure where it sacrifices its own profitability to support its "children" (L2s). L1 is now functioning less as a profit-seeking "platform" and more as a "Settlement Layer" with the characteristics of a public good.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                3. The Rise of L2 and the Paradox of L1 Profitability: Specific Case Analysis
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The deterioration of L1 profitability is perfectly matched by the explosion of L2 profitability. The Dencun upgrade gifted L2 operators with unprecedented profit margins.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">3.1 Coinbase (Base): Privatizing Profit</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Base, the L2 operated by Coinbase, is the biggest beneficiary of the Dencun upgrade. As of May 2025, Base captures over 80% of total L2 transaction fees, recording an annualized revenue pace of <span className="font-semibold text-white">~$70M (~93B KRW)</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The surprising part is the margin. Base's operating margin reached <span className="font-semibold text-white">98.3%</span>. This means Base collected fees from users but paid only a tiny fraction (~1.7%) to Ethereum as 'Blob' usage fees, taking the remaining 98.3% entirely as profit. In the past, a significant portion of this revenue would have been spent on L1 gas fees contributing to ETH burn, but now it is being used to improve the financial statements of a for-profit corporation, Coinbase.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3.2 Unichain: The Second Shock</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The launch of Uniswap's own L2, Unichain, in late 2025 delivered a "Second Shock" to Ethereum L1. Uniswap was historically the application that consumed (burned) the most gas on the Ethereum mainnet. However, after the Unichain launch, <span className="font-semibold text-white">75%</span> of Uniswap's total volume migrated to Unichain.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unichain also utilizes blobs, paying only negligible costs of ~2-3 ETH (~10M KRW) per day to L1. Despite processing billions of dollars in volume, its contribution to L1 has become extremely low. This acted as a bullish factor for UNI token holders due to fee revenue distribution, but as a bearish factor for ETH holders due to the departure of a key burn source.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">3.3 Structural Change in Rollup Margins</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                According to Galaxy Research data, the average daily margin of Optimistic Rollups surged from ~22.6% pre-Dencun to <span className="font-semibold text-white">92.3%</span> post-Dencun. ZK Rollups (Zero-Knowledge Rollups), despite the burden of proof generation costs, also saw margins more than double from 27.3% to <span className="font-semibold text-white">66.7%</span>. This suggests that the L2 business model has been reorganized from a "Low Margin-High Cost" structure to a "Ultra-High Margin-Low Cost" structure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                4. The Reward: What Did the Ethereum Ecosystem Gain?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                So, what did Ethereum gain by giving up over $100M in revenue and its status as a deflationary asset? As the user asked, the rewards gained by the ecosystem can be summarized as "Scalability," "Market Share," and "Institutional Trust."
              </p>

              <h3 className="text-2xl font-bold mb-4 text-white">
                4.1 Massive Scalability and Transaction Processing Capacity
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The clearest reward is the explosive increase in network capacity. Ethereum is no longer a slow and expensive blockchain.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">TPS Explosion:</span> As of late 2025, the Ethereum L2 ecosystem processes an average of <span className="font-semibold text-white">5,600 TPS</span> through rollups, handling a daily maximum of 1.74 million transactions. This is hundreds of times higher than the existing L1 processing limit (~15-30 TPS).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Cost Democratization:</span> L2 transaction fees have dropped below $0.01. This implies that the Ethereum ecosystem has established an environment capable of accommodating micropayments and mass-market applications (SocialFi, GameFi), rather than being the exclusive property of high-net-worth individuals.
                  </p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-white mt-8">
                4.2 Defending Market Dominance
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Despite the rise of high-performance monolithic chains like Solana, Ethereum successfully defended the ecosystem's value through its L2 strategy.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">TVL Retention:</span> Ethereum L1 still secures <span className="font-semibold text-white">$99B (~130T KRW)</span> in Total Value Locked (TVL), corresponding to 85% of the entire ecosystem. Including L2 assets, Ethereum's DeFi market share exceeds <span className="font-semibold text-white">70%</span>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Internalizing Activity:</span> L2s process over 85% of total Ethereum ecosystem transactions. If the Dencun update hadn't happened, these transactions would likely have leaked to Solana or other cheaper L1s to avoid high fees. In other words, revenue was lost, but <span className="font-semibold text-white">Users and Activity</span> were successfully locked-in within the ecosystem.
                  </p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-white mt-8">
                4.3 Institutional Standard and Safe Asset Status
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                While retail users flocked to Solana for Memecoin trading, Ethereum solidified its position as a haven for institutional funds.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Stablecoin Settlement:</span> Ethereum processes <span className="font-semibold text-white">$18.8 Trillion (~2.5 Quadrillion KRW)</span> in stablecoin settlement volume annually, acting as the backbone of global digital dollar liquidity.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Real World Asset (RWA) Tokenization:</span> In the tokenized Treasury market and RWA sector, Ethereum L1 commands an <span className="font-semibold text-white">83% market share</span> (~$6B). Giant institutions like BlackRock prefer Ethereum L1, where security and decentralization are certain, even if fees are slightly higher. This shows Ethereum has evolved from a simple computing platform to the "Trust Layer" of global finance.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">ETF Inflows:</span> By early 2025, Ethereum Spot ETFs recorded over <span className="font-semibold text-white">$7 Billion</span> in net inflows. This proves its status as the second asset to firmly land in institutional finance following Bitcoin.
                  </p>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                5. Valuation Paradigm Shift: From P/E to Monetary Premium
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ethereum's valuation model is demanding fundamental revision post-Dencun. Past analysts valued ETH as "Digital Oil," calculating value based on a Buyback model via gas burned in proportion to network usage. However, with the current revenue structure, this model does not hold.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-white mt-8">
                5.1 New Valuation Model: Monetary Premium
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Now, the market is re-rating Ethereum not as a "Tech Stock" but as a "Monetary Commodity."
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">ETH as Collateral:</span> As the L2 economy grows, the amount of ETH locked up (Lock-up) on L1 to guarantee L2 security and perform bridging increases. In other words, ETH's value comes not from transaction fees (Flow), but from the collateral value (Stock) that supports the Ethereum economic zone.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">VanEck's 2030 Model Revision:</span> Global asset manager VanEck revised its 2030 Ethereum valuation model, pinpointing "L2 Settlement" as the most important business line. They predicted the L2 settlement market would grow to <span className="font-semibold text-white">$51B by 2030</span>. Although revenue has currently plummeted, it is a long-term bet that as thousands of L2 chains compete for Ethereum blockspace (Perfect Competition), blob prices will rise and L1 revenue will recover.
                  </p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-white mt-8">
                5.2 Valuation Gap and Market Assessment
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nevertheless, a short-term 'Valuation Gap' exists. From a P/E ratio perspective, the current Ethereum price is hard to justify. Market participants believe Ethereum must somehow recover the revenue lost to L2s. Due to this, throughout 2025, Ethereum passed through a period where its price was undervalued relative to fundamentals (TVL, User count). Analysts like Tom Lee argue that ETH should exceed <span className="font-semibold text-white">$5,000</span> in 2026 considering network fundamentals, but this is based on the premise that the L1 revenue model must be re-established.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                6. Competitive Landscape: Total War with Solana (2025-2026)
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Another cause of Ethereum's valuation decline is the rise of a powerful competitor, Solana. While Ethereum fragmented into complex L2 structures, Solana absorbed users with the simplicity and speed of a single chain.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Volume Flippening:</span> In March 2025, Solana's on-chain volume (<span className="font-semibold text-white">$47.3B</span>) overtook Ethereum's, marking a 'Flippening'. Notably, Solana surpassing Ethereum L1 in Decentralized Exchange (DEX) volume was a symbolic event.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">User Base Segmentation:</span> Data shows the blockchain market has clearly bifurcated. Solana recorded 3.2 million daily active wallets, dominating 'Retail/Speculative Demand' such as memecoins and small-scale trading. Conversely, Ethereum retains 'Asset Management/Financial Infrastructure' demand centered on whales and institutional funds.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Developer Leakage Risk:</span> Ethereum still holds ~32,000 active developers, about 2x more than Solana (~17,000), but Solana's growth rate is overwhelming at 83%. Particularly, the fact that <span className="font-semibold text-white">~40%</span> of Ethereum core developers moved to other networks or L2 projects over the last year raises concerns about the weakening of its long-term technical moat.
                  </p>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                7. Future Outlook: Revenue Recovery Scenarios Post-2026
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Ethereum community recognizes that the current "Growth without Revenue" is unsustainable. Upgrades scheduled for 2026 focus on recovering L1 profitability and re-strengthening economic links with L2s.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-white">
                7.1 Pectra (Prague-Electra) and Future Upgrades
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Pectra (Scheduled Late 2025/Early 2026):</span> This upgrade introduces MaxEB (Maximum Effective Balance) and improved validator operations, laying the technical groundwork for further scaling.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">Next Gen: Fusaka (Upcoming):</span> Following Pectra, future upgrades like Fusaka aim to drastically raise the L1 Gas Limit from 60 million to <span className="font-semibold text-white">200 million</span>. This is an attempt to triple L1's own execution capacity, activating L1 native transactions independent of L2s and increasing burn amounts again.
                  </p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-white mt-8">
                7.2 EIP-7762: Blob Price Normalization
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The most critical economic proposal is <span className="font-semibold text-white">EIP-7762 (Increasing Min Blob Base Fee)</span>. Currently, blob prices are designed to converge to '0' if demand is below supply, which is the main cause of L1 revenue collapse. EIP-7762 proposes increasing the minimum base fee to accelerate price discovery and enforce a <span className="font-semibold text-white">Price Floor</span> for blobs. Once introduced, no matter how efficient L2s are, the minimum "Tax" they must pay to Ethereum L1 increases, which is expected to play a decisive role in L1 revenue recovery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                8. Conclusion: The Report Card of the Great Trade-off
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The two-year journey of Ethereum post-Dencun can be summarized as <span className="font-semibold text-white">"Sacrificing Revenue to Buy Survival."</span>
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The confirmed 99% decline in L2 Rent Revenue and the forfeiture of over $100M in guaranteed profits may look like a painful mistake for valuation in the short term. Because of this, Ethereum's price underperformed compared to competing assets, and it lost the attractive investment narrative of 'Ultra Sound Money'.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                However, if Ethereum had stuck to high gas fees to defend 'Profitability', the 85% transaction dominance, $99B TVL, and $18T stablecoin settlement market the ecosystem currently enjoys would have all passed to competitors like Solana. Ethereum cut its own flesh (gave up L1 revenue) to build a massive dike called L2, and as a result, defended the position of the biggest pie in the blockchain market, 'Financial Infrastructure'.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The recovery of Ethereum's valuation in the future depends on whether it can recapture (Value Capture) a portion of L2's massive profits back to L1 through mechanisms like <span className="font-semibold text-white">EIP-7762</span>. 2026 will be the watershed moment deciding whether Ethereum can be reborn from a 'Benevolent Infrastructure' into a 'Profitable Platform'.
              </p>
            </section>

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
