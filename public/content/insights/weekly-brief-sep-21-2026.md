# Nexus One Weekly Digital Asset Market Report — September 14 to September 21, 2026

**Published:** September 21, 2026 (Mon) · By Nexus One Digital Asset Research

> Figures that could not be verified against a primary source are omitted from the body and replaced with a qualitative statement or an explicit flag. WoW comparisons are versus the close seven days prior (Monday, September 14). Prices are as of 09:00 KST on 9/21 unless otherwise noted; on-chain metrics reflect the latest disclosures between 9/19 and 9/21, with the timestamp noted in each table and passage. Source links are attached at the end of this report.

---

## TL;DR

• **BTC — $81,183, up 3.83% on the week after a V-shaped reversal off a $74,897 low:** The path was violent. Bitcoin fell to a weekly low of **$74,897** on 9/15 as the CLARITY Act died in the Senate, then ripped **+5.9% in a single session** on 9/18 to reclaim $80,000 and printed a weekly high of **$81,950** on 9/19. The high-to-low range was 9.4%.

• **ETFs — BTC barely positive, ETH snaps a four-week inflow streak:** US spot BTC ETFs netted **+$6.1M** on the week, effectively flat. The 9/15–16 window bled **-$746.3M** before a single-session **+$433.0M** on 9/18 (led by FBTC at +$310.7M) pulled the week back to breakeven. ETH spot ETFs went the other way at **-$140.6M**, ending four consecutive weeks of inflows. SOL ETFs were the relative winner at +$60.7M.

• **Macro — the September FOMC *hiked* 25bp to a 3.75–4.00% target range:** The vote was 12-0. Chair Kevin Warsh said summer inflation prints did not show meaningful improvement in the underlying trend, and the dot plot was revised hawkishly from June. The US 2-year went 4.65%→**4.76%** (+11bp) and the 10-year 4.97%→**5.01%**, yet VIX *fell* 17.68→**14.81** (-16.2%) as the removal of uncertainty proved more supportive of risk assets than the hike was damaging.

• **DeFi/security — TVL recovering to $92.1B; September's hack total is one incident:** Total DeFi TVL stood at **$92.13B**, up **+4.7%** over seven days on a top-10-chain weighted basis. Perp DEX volume jumped **+17.87%** on the week with Hyperliquid alone at **$53.25B**. On security, the 9/6–7 Liquid Network exploit drained **$320M (~4,000 BTC)** and accounts for most of September's losses; the attacker returned 3,400 BTC (85%), cutting the net loss to roughly $47M.

• **L1/L2 — NEAR up 76% on the week, the largest move among major alts:** NEAR crossed $70M in Confidential TVL on 9/17, locking in the first NEAR@3.33 incentive tranche, and launched **private perpetual futures** on the Hyperliquid execution engine the same day. Hyperliquid shipped **manual borrowing** against HYPE and BTC collateral on 9/18 — $269M drawn on day one — and HYPE set an all-time high at $94.46. L2s rallied across the board: Starknet TVS +22.4%, OP Mainnet +11.2%, Base +6.29%.

• **RWA/regulation — the CLARITY Act failed, but the SEC, CFTC and Hong Kong moved forward:** The crypto market-structure bill lost a Senate cloture vote **49-50** on 9/15, effectively ending 2026 legislation. Against that, the SEC introduced a five-year **Innovation Exemption** for tokenized equity trading on 9/17, the CFTC extended front-end developer relief from intermediary registration industry-wide the same day, and Hong Kong's 9/16 Policy Address formalized regulated stablecoin trading on licensed exchanges and tokenized MMF settlement. Tokenized US Treasuries stand at **$14.82B**.

• **Next week — quarterly options expiry on 9/25, PCE on 9/30:** The **Deribit quarterly BTC/ETH expiry** on 9/25 carries materially larger open interest than a monthly, and **August PCE** lands on 9/30. Token unlocks over the next seven days total **$353.56M**, with TON on 9/23 ($50.75M) the largest single event. US shutdown risk is off the table through December 11 following the September 2 budget signing.

---

## Table of Contents

1. Global Macroeconomic Trends
2. Weekly Key Macro News Summary
3. BTC/ETH Trends, Technical Analysis, and ETF Flows
4. L1/L2 Protocol Status
5. DeFi Trends
6. NFT Market Trends
7. RWA Trends
8. On-chain Activity Analysis
9. Sector Summary (8)
10. On-chain Anomalies Within Top-200 by Market Cap
11. Projects of the Week — 3 Selected
12. Weekly Insight
13. Key Events Calendar — Next Week (9/21–9/30)
14. Token Unlock Schedule (Major)

---

## 1. Global Macroeconomic Trends

### Key Indicators (WoW)

| Indicator | 2026-09-14 | 2026-09-18 (latest) | WoW |
|---|---|---|---|
| US Treasury 2Y | 4.65% | **4.76%** | +11bp |
| US Treasury 10Y | 4.97% | **5.01%** | +4bp |
| US Treasury 30Y | 5.34% | **5.34%** | 0bp |
| VIX | 17.68 | **14.81** | -2.87pt (-16.2%) |
| WTI crude | $102.34 | **$100.07** | -$2.27 (-2.2%) |
| Gold (spot) | $4,270.52 | **$4,383.45** | +$112.93 (+2.6%) |
| USD/KRW | 1,347.30 | **1,383.30** | +36.0 (+2.67%) |
| DXY | 99.48 | **100.21** | +0.73pt (+0.73%) |
| S&P 500 | 7,585.73 | **7,650** | +64.27 (+0.85%) |
| Nasdaq | 25,981.57 | **26,522** | +540.43 (+2.08%) |

The path of the Treasury curve through the week compresses the whole story. On 9/14 the 10-year at **4.97%** pressed toward its highest level since 2023 and weighed on risk assets; on FOMC day, 9/16, the 2-year spiked to **4.74%**. Immediately after the decision the curve retraced — 2-year 4.67%, 10-year 4.94% on 9/17 — before the front end pushed back up to 4.76% on 9/18. In short, **the short end stair-stepped higher to price the hawkish dot plot while the long end barely moved, flattening the curve**. The 30-year pinned at 5.34% all week says the market reads this hike as a tactical response rather than a structural shift in the long-run growth and inflation path.

Risk assets did the opposite of what the rates move implies. VIX collapsing **-16.2%** to 14.81 shows that **the uncertainty around the decision was a heavier burden than the decision itself**. The index fell from 17.71 on 9/16 to 15.44 on 9/17 and 14.81 on 9/18, and over the same stretch the Nasdaq's +2.08% weekly gain comfortably outpaced the S&P 500's +0.85%. Bitcoin's 9/18 surge moves in lockstep with this.

Commodities and FX tell a different story. WTI fell 2.2% on the week, but that is **a decline from above $100** — it touched a four-month high near $106 intraweek on 9/15. The shutdown of Saudi Arabia's East-West pipeline on 9/11 and Houthi strikes on Saudi energy infrastructure drove supply-disruption fears. Gold at **$4,383** (+2.6%) holding near record territory and the won weakening to **1,383.30** (+36.0, +2.67%) share the same root. The won in particular is drawing 1,400-level warnings as a high-oil-driven deterioration in the trade balance compounds a Korea-US rate gap that the September hike just widened again. **High oil → reflation → a hawkish Fed → a stronger dollar** is the central chain in the current macro setup, and it is what is forcing a high-volatility, directionless regime on bitcoin.

---

## 2. Weekly Key Macro News Summary

- **(9/11) Saudi Arabia shuts the East-West crude pipeline.** Houthi attacks on Saudi energy infrastructure halted a critical transit route, pushing crude above $100 a barrel; Brent touched $108 at one point, then held elevated at $107.31 (9/14), $105.59 (9/17) and $103.87 (9/20).

- **(9/14) The US 10-year approaches its highest level since 2023 at 4.97%.** Reflation concerns ahead of the FOMC lifted long rates to the 5% threshold. The S&P 500 fell 0.45% and the Nasdaq 0.78% the same day, with VIX closing up 11.61% at 17.68.

- **(9/15) The Senate rejects CLARITY Act cloture, 49-50.** The crypto market-structure bill fell short not just of the 60-vote threshold but of a simple majority (Roll Call Vote #234, 119th Congress, 2nd Session). Senate action in 2026 is effectively finished. Bitcoin fell 5.3% on the day to $74,910.

- **(9/16) The FOMC hikes 25bp to a 3.75–4.00% target range.** The vote was unanimous at 12-0. In an unusually short press conference of about 30 minutes, Chair Kevin Warsh said the Fed cannot target individual prices such as oil but is aiming to block second- and third-round effects. The dot plot was revised hawkishly, implying one more hike this year and a 4.00–4.25% level at end-2026 and end-2027.

- **(9/16) House Financial Services Committee advances the American Reserve Modernization Act (H.R. 8957), 28-21.** The strategic bitcoin reserve bill directs Treasury to manage federally held BTC and **bars sales for 20 years**; after that window it permits a recommendation of up to 10% disposal on a two-year cycle, with verification amended to an annual third-party audit. No floor vote has been scheduled.

- **(9/17) The ECB and BOJ both hike.** The ECB raised its deposit rate 25bp to 2.50%, with President Lagarde flagging asymmetric risks — downside to growth, upside to prices. The Bank of Japan, meeting 9/17–18, lifted its policy rate 25bp from 1.00% to **1.25%**. Major central banks turned to tightening in the same week.

- **(9/17) The US delays new tariffs tied to Chinese overcapacity until after a Xi-Trump summit.** Read as a de-escalation signal, it supported risk sentiment.

- **(9/18) Bitcoin breaks $80,000, up 6% in 24 hours.** The driver was not a scheduled data release but **a short squeeze compounding the removal of FOMC risk**. Total liquidations that day were $547M, of which **$469.19M — 86% — were shorts**. Ethereum rose 7.3%, XRP 8.9% and Solana 12.7% alongside it.

---

## 3. BTC/ETH Trends, Technical Analysis, and ETF Flows

### 3.1 Prices (full seven-day window)

| Asset | Spot (9/21 09:00 KST) | Close 7d prior (9/14) | WoW | Weekly high | Weekly low |
|---|---|---|---|---|---|
| BTC | **$81,183.30** | $78,187.24 | **+3.83%** | $81,949.99 (9/19) | $74,897.07 (9/15) |
| ETH | **$2,646.11** | $2,514.98 | **+5.21%** | $2,669.52 (9/19) | $2,357.00 (9/15) |
| SOL | **$111.22** | $102.52 | **+8.49%** | $114.31 (9/18) | $95.72 (9/15) |
| HYPE | **$93.91** | $80.45 | **+16.74%** | $94.23 (9/19) | $75.27 (9/15) |

### 3.2 Technical Analysis

Bitcoin's weekly chart is a **clean V-shaped reversal**. It opened at $78,187 on 9/14, fell 4.2% to $74,897 on 9/15 on the CLARITY Act shock, then based for two sessions in a tight $74,900–$77,100 box at $75,587 (9/16) and $76,150 (9/17). The inflection was decisive on 9/18: an open at $76,365 to a close at $80,895, **+5.93% in a day**, on daily volume of 5,416 BTC versus 3,974 BTC the prior session — a 36% increase. It then set the $81,950 high on 9/19 and closed the week chopping in the $81,000–$81,500 area.

The structure worth watching is **support at $74,900 and resistance at $82,000**. The 9/15 low of $74,897 briefly broke the $76,000 support formed in early September and was immediately recovered, confirming strong absorption in that zone. Above, the 9/3 high of $82,304 and the 9/19 high of $81,950 overlap into a **double-top-flavored resistance band**. At $81,183 spot, price sits directly beneath it, awaiting resolution.

Ethereum carried more torque. It rebounded **13.2%** from a weekly low of $2,357 to a high of $2,669, and its +5.21% WoW beat BTC's +3.83%. The ETH/BTC ratio improved from 0.03217 to **0.03259**, +1.33% — the textbook pattern of alts outperforming through a risk-appetite recovery. Beta scaling up through Solana (+8.49%) and Hyperliquid (+16.74%) says the same thing.

### 3.3 Eight Core Metrics (two-point WoW)

| Metric | 2026-09-14 | 2026-09-20~21 | WoW |
|---|---|---|---|
| BTC price | $78,187.24 | **$81,183.30** | +3.83% |
| ETH price | $2,514.98 | **$2,646.11** | +5.21% |
| ETH/BTC ratio | 0.032166 | **0.032594** | +1.33% |
| Total market cap | $2.69T | **$2.74T** | +1.9% |
| BTC dominance | 57.9% | **58.9%** | +1.0pp |
| ETH dominance | 11.4% | **11.5%** | +0.1pp |
| Stablecoin total cap | $305.24B | **$304.90B** | -0.11% |
| Fear & Greed Index | 61 (Greed) | **71 (Greed)** | +10 |

### 3.4 Supplementary On-chain and Derivatives Metrics

- **MVRV of 1.524** (at BTC $81,194.61). The 1.5 area is historically neutral-to-modestly-profitable, far from both euphoria (above 3.0) and capitulation (below 1.0).
- **Funding (annualized APR):** Binance 3.65% / Bybit 2.34% / OKX 3.65% / Hyperliquid 3.65% / Deribit 5.49%. A simple average across the three major venues is roughly **3.21% APR** — mild long bias. That funding did not overheat even after the 9/18 squeeze suggests leverage rebuilt only modestly.
- **Open interest (all venues):** BTC **$55.12B** + ETH **$34.56B** = **$89.68B**. ETH OI sits near its highest since mid-May, having net increased through the 9/18–19 short liquidations.
- **Hashrate 914.39 EH/s, difficulty 132.76T.** The last adjustment was +4.16%; the next is estimated at -5.66%.
- **Weekly liquidations (9/14–9/20): roughly $2.83B.** By day: 9/14 $213M, 9/15 ~$600M (longs $570M), 9/16 $477M (longs $363M), 9/17 $386M (shorts $247M), 9/18 $547M (shorts $469M), 9/19 $294M (shorts $229M), 9/20 $316M (longs $183M). Longs and shorts burned alternately across the first and second halves of the week — **two-sided destruction**.

### 3.5 US Spot BTC ETF Flows

**Daily totals (US$ million)**

| Date | Net flow |
|---|---|
| 09/14 (Mon) | **+159.9** |
| 09/15 (Tue) | **-450.4** |
| 09/16 (Wed) | **-295.9** |
| 09/17 (Thu) | **+159.5** |
| 09/18 (Fri) | **+433.0** |
| **Weekly total** | **+6.1** |

**By fund (US$ million)**

| Fund | 09/14 | 09/15 | 09/16 | 09/17 | 09/18 | Weekly |
|---|---|---|---|---|---|---|
| IBIT (BlackRock) | 134.3 | -161.7 | -144.1 | 183.7 | 108.4 | **+120.6** |
| FBTC (Fidelity) | 53.3 | -214.8 | -52.7 | -16.6 | 310.7 | **+79.9** |
| BITB (Bitwise) | 0.0 | -12.4 | 0.0 | 0.0 | 9.7 | **-2.7** |
| ARKB (ARK 21Shares) | -42.0 | -17.4 | -84.4 | 0.0 | 1.9 | **-141.9** |
| BTCO (Invesco) | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | **0.0** |
| EZBC (Franklin) | 4.6 | 0.0 | 0.0 | 0.0 | 0.0 | **+4.6** |
| BRRR (Valkyrie) | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | **0.0** |
| HODL (VanEck) | 0.0 | 0.0 | 0.0 | -7.6 | 2.3 | **-5.3** |
| BTCW (WisdomTree) | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | **0.0** |
| MSBT (Morgan Stanley) | 9.7 | 0.0 | 3.5 | 0.0 | 0.0 | **+13.2** |
| GBTC (Grayscale) | 0.0 | -44.1 | -18.2 | 0.0 | 0.0 | **-62.3** |
| BTC (Grayscale Mini) | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | **0.0** |
| **Total** | **159.9** | **-450.4** | **-295.9** | **159.5** | **433.0** | **+6.1** |

**US spot ETH ETF daily totals (US$ million)**

| Date | 09/14 | 09/15 | 09/16 | 09/17 | 09/18 | Weekly |
|---|---|---|---|---|---|---|
| Net flow | +121.1 | -142.0 | -224.1 | -39.3 | +143.7 | **-140.6** |

By fund, ETHA (BlackRock) took **-$56.1M**, FETH (Fidelity) -$25.9M, ETHW -$33.1M and ETHE (Grayscale) -$31.4M — most major funds bled — with only ETH Mini (+$16.2M) and ETHB (+$7.0M) positive.

What this week's ETF data says is that **policy risk hit institutional money immediately and was unwound just as fast**. Across 9/15, when CLARITY failed, and 9/16, the FOMC day, BTC ETFs alone shed **$746.3M** — a rare magnitude for a two-day event window. Then 9/18 brought **+$433.0M** in a single session and dragged the week to a razor-thin +$6.1M. FBTC swinging from -$214.8M on 9/15 to +$310.7M on 9/18 shows **short-term de-risking followed by immediate re-entry through the same asset-manager channel**.

The structural point is cumulative scale. Cumulative net inflows into spot BTC ETFs stand at **$55.23B** with total AUM of **$102.53B**, equal to **6.29%** of bitcoin's entire market capitalization, or roughly 1.29–1.32 million BTC. The rotation among issuers also continues: ARKB at -$141.9M and GBTC at -$62.3M kept bleeding while IBIT (+$120.6M) and FBTC (+$79.9M) absorbed. ETH ETF AUM is about $11.85–12B, with BlackRock alone holding **3.56 million ETH ($8.69B)**.

Among altcoin ETFs, SOL took **+$60.7M** (BSOL accounted for +$58.7M of it, including +$47.6M on 9/18 alone) and XRP **+$9.57M** (the 9/16 +$3.5M led by Franklin Templeton's XRPZ). That XRP ETFs saw inflows on 9/16 while BTC and ETH ETFs were bleeding stands out.

---

## 4. L1/L2 Protocol Status

### 4.1 Core Chains (Base 5 + Flex 1)

| Chain | Price (WoW) | DAA (24h) | Transactions (24h) | Fees (7d) | TVL (7d) | Distinctive metric | Weekly event |
|---|---|---|---|---|---|---|---|
| **Ethereum** | $2,646.11 (+5.21%) | 616,395 | ~1.85M | $2.71M | $52.51B (+5.08%) | Stablecoin cap $146.9B | ETF inflow streak snapped at four weeks (-$140.6M) |
| **Solana** | $111.22 (+8.49%) | 2.93M | ~124.30M | $5.30M | $6.208B (+5.23%) | Stablecoin cap $16.56B | SOL spot ETF +$60.7M on the week |
| **Tron** | $0.3427 (+1.36%) | 3.59M | ~6.90M | $5.77M | $5.578B (+1.83%) | Stablecoin cap $94.44B | Holds #1 in DAA; JustLend TVL $3.781B |
| **BNB Chain** | $775.86 (+7.71%) | 1.97M | ~22.07M | $5.10M | $5.726B (+1.29%) | PancakeSwap 7d volume $6.285B | Market cap $103.33B, holds #4 |
| **Hyperliquid** | $93.91 (+16.74%) | — | — | L1 $153,249 / protocol $18.48M | **L1 $1.417B (+3.14%) / protocol $7.052B** | Perp 7d volume $53.25B, OI $8.107B | 9/18 manual borrowing launch, $269M drawn day one |
| **NEAR** (flex) | $4.12 (+76.0%) | 52,391 | 839,380 | $24,430 (7d equiv.) | $178.79M | NEAR Intents 7d DEX volume $1.132B | Confidential TVL crosses $70M; private perps launch |

> **How to read this table — chain TVL versus protocol TVL.** The two measure along different axes. Chain TVL is the sum of deposits across *every protocol deployed on that chain*; protocol TVL is the sum a *single protocol holds across all the chains it runs on*. Protocol TVL already aggregates per-chain figures, so adding it to chain TVL double-counts the same capital. The TVL column here is chain TVL, with Hyperliquid the sole exception where both are shown because the distinction is material.

Hyperliquid has to be **read as a chain and a protocol separately** to get the picture right. Chain TVL of $1.417B (+3.14%) is deposits in third-party apps built on HyperEVM; protocol TVL of **$7.052B** is capital custodied by the exchange itself (HLP vaults, user margin and so on). The former is not a subset of the latter — they measure different things — and chain fees of $153,249 over seven days against protocol fees of **$18.48M** is a 120x gap. The economic substance of Hyperliquid is overwhelmingly concentrated not in a general-purpose L1 but in **the single derivatives exchange running on top of it**. Its monopoly position in on-chain perpetuals — **32.0%** of 24-hour volume and **56.8%** of open interest — underwrote HYPE's +16.74% week.

The direct catalyst that pushed HYPE to an all-time high was **manual borrowing**, shipped 9/18. Previously only implicit borrowing existed, where the system extended margin automatically when a leveraged position was opened; now a user can post HYPE or BTC as collateral independent of any trade and withdraw USDC or USDT directly. It runs on the same HyperCore infrastructure as Portfolio Margin, with **LTVs of 65% on HYPE and 50% on BTC and partial-liquidation thresholds of 82.5% and 75%** respectively. **$269M** was borrowed on day one and HYPE printed consecutive records at $92.56 (9/18) and $94.46 (9/19). Functionally this folds a money market into the exchange itself, extending the revenue base from trading fees into interest income.

The structural risk arrives with it. **The entity accepting HYPE as collateral is the platform that issues HYPE** — a circular arrangement. Rising collateral value expands borrowing capacity, which expands buying capacity; that reflexivity is an amplifier on the way up and runs in reverse on the way down through liquidation → collateral sale → further decline. That HYPE carries a 65% LTV, near what major money markets extend to blue-chip assets, belongs in the same frame.

The contrast between Tron and Solana is instructive. Tron leads on DAA at 3.59 million but runs roughly 6.90 million transactions, while Solana has 2.93 million DAA and **124.30 million transactions** — 18 times more. Tron functions as a settlement rail carrying **$94.44B** of stablecoins, specialized in low-frequency, high-value transfers per user; Solana's users transact at very high frequency. Weekly fees are nearly identical at $5.30M (Solana) and $5.77M (Tron), which means **two entirely different routes arrived at a similar economic scale**.

NEAR is the week's headline. Its +76.0% is the largest move among major alts, yet chain fees are roughly $24,430 on a seven-day basis — effectively negligible. The driver was not chain activity but **a separate application layer called NEAR Intents** (see §11). NEAR Intents did $1.132B of DEX volume over seven days, 2.3 times the NEAR chain's entire DEX volume ($487.63M, +36.66% over seven days), because those trades route across 26 chains rather than settling inside NEAR. TVL falling 9.22% in 24 hours to $178.79M suggests early capital rotation has already begun after the spike.

### 4.2 Major L2s

| L2 | TVS | TVS 7d | Activity (UOPS) | UOPS 7d | Fees (7d) |
|---|---|---|---|---|---|
| Base | **$15.49B** | +6.29% | 94.19 | +17.2% | $762,088 |
| Arbitrum One | **$11.67B** | +6.76% | 15.68 | +12.0% | $123,355 |
| OP Mainnet | **$1.85B** | +11.2% | 17.37 | +30.9% | — |
| Starknet | **$476.72M** | +22.4% | 3.92 | +89.2% | $50,619 |
| Linea | **$372.49M** | +3.68% | 0.16 | +25.9% | — |
| ZKsync Era | **$256.64M** | +11.4% | 0.30 | +96.9% | — |

> **How to read this table — TVS is not TVL.** TVS (Total Value Secured) is L2Beat's renaming of TVL from early 2025. It sums ① assets bridged through the canonical bridge, ② assets bridged through third-party bridges, and ③ assets minted natively on that L2 (ARB, OP and the like). Its scope is wider than DeFi TVL, which counts only assets locked in smart contracts, so L2-native tokens simply sitting in wallets are included. It is therefore closer to **"total assets this rollup is responsible for securing"** and will differ from DefiLlama's TVL for the same chain. UOPS is user operations per second.

The L2 sector posted an unusually uniform advance, with **TVS and activity rising across every name**. What stands out is that gains scaled inversely with size. Base (+6.29%) and Arbitrum (+6.76%) stayed in single digits while Starknet put up TVS +22.4% and activity +89.2%, and ZKsync Era TVS +11.4% and activity +96.9%. STRK's +74.6% week sits on both this activity surge and anticipation of the v0.14.4 upgrade scheduled for October 5. In absolute terms, though, Base's $15.49B is 32 times Starknet's $476.72M, so percentage moves in smaller L2s need reading against that base effect. Linea was the rally's laggard at TVS +3.68% and a token up 4.44%.

---

## 5. DeFi Trends

### 5.1 Total TVL and Distribution by Chain

Total DeFi TVL stood at **$92.13B** (-0.72% on the day). Because DefiLlama does not publish a single seven-day change figure for aggregate TVL, we back-solved it by TVL-weighting the individual seven-day changes of the top ten chains. On that basis the top ten summed to **$84.25B** against **$80.45B** seven days prior, a **+4.7%** increase.

| Chain | TVL | 24h | 7d | 30d |
|---|---|---|---|---|
| Ethereum | **$52.51B** | +5.39% | +5.08% | +13.98% |
| Solana | **$6.208B** | +5.28% | +5.23% | +18.52% |
| Base | **$5.916B** | +6.00% | +5.97% | +17.58% |
| BSC | **$5.726B** | +2.86% | +1.29% | +9.88% |
| Tron | **$5.578B** | +2.98% | +1.83% | +11.36% |
| Bitcoin | **$4.395B** | +6.47% | +5.34% | +16.48% |
| Arbitrum | **$1.424B** | +3.91% | +2.51% | +6.65% |
| Hyperliquid L1 | **$1.417B** | +3.14% | +3.14% | +0.11% |
| Avalanche | **$580.33M** | +19.44% | +23.02% | +31.16% |
| Sui | **$494.75M** | +8.06% | +7.98% | +18.07% |

### 5.2 Top Protocols by TVL

| Protocol | TVL | 7d |
|---|---|---|
| Lido | **$25.23B** | +3.02% |
| Aave | **$18.744B** | +2.32% |
| Morpho | **$10.64B** | +9.41% |
| Binance staked ETH | **$9.622B** | +2.30% |
| Spark | **$7.03B** | **-18.91%** |
| EigenCloud | **$6.779B** | +2.24% |
| Sky/Maker | **$5.89B** | +4.71% |
| Ethena | **$5.314B** | +4.37% |
| ether.fi | **$5.23B** | **-6.27%** |
| Uniswap | **$3.681B** | **-7.22%** |

### 5.3 DEX and Perps Volume (7d)

| Rank | DEX | 7d volume | | Perp DEX | 7d volume | OI |
|---|---|---|---|---|---|---|
| 1 | Uniswap | **$20.637B** | | Hyperliquid | **$53.253B** | $8.107B |
| 2 | PancakeSwap | **$6.285B** | | Aster | **$16.724B** | $1.381B |
| 3 | Pump | **$3.146B** | | Lighter | **$13.674B** | $825.32M |
| 4 | Aerodrome | **$2.881B** | | Variational | **$12.13B** | $902.72M |
| 5 | BisonFi | **$2.609B** | | edgeX | **$9.944B** | $607.59M |

Aggregate DEX volume fell **-6.29%** on the week while perps rose **+17.87%**. That divergence — spot shrinking, leverage expanding — describes the week precisely. While price traversed a 9.4% range from $74,900 to $81,950, participants responded with **directional bets rather than spot accumulation**, and $2.83B of weekly liquidations is the result.

### 5.4 Top Seven Protocols by Revenue (DefiLlama 7d fees, single timestamp)

| Protocol | 7d fees | 7d revenue | Revenue/fees |
|---|---|---|---|
| Tether | **$118.72M** | $118.72M | 100.0% |
| Circle | **$48.51M** | $48.34M | 99.6% |
| Pump | **$37.91M** | $11.49M | 30.3% |
| Uniswap | **$36.93M** | $3.07M | 8.3% |
| Pons | **$27.40M** | $4.39M | 16.0% |
| Polymarket | **$21.40M** | $3.30M | 15.4% |
| Hyperliquid | **$18.48M** | $14.39M | 77.9% |

Aggregate fees were $73.89M over 24 hours and $2.372B over 30 days, down **-9.32%** on the week. Revenue fell less, at -5.97%.

What to read in this table is not the ranking but the **revenue-to-fees ratio**. Tether and Circle run 100% structures where fees are revenue, confirming stablecoin issuers as still the largest cash-flow generators in the on-chain economy. Uniswap, by contrast, books only $3.07M (8.3%) of its $36.93M in fees as protocol revenue, with the rest accruing to LPs. Hyperliquid's **77.9%** is singular among exchange-type protocols, and that most fees flow to the protocol — and into HYPE buybacks — is the basis of its valuation. Compare on headline fees and Uniswap is twice Hyperliquid; compare on money that actually reaches the protocol and Hyperliquid is **4.7 times larger**.

### 5.5 Stablecoins

Total capitalization **$304.90B** (-0.11% over seven days, -$349.06M; +0.81% over 30 days), USDT dominance **60.11%**.

| Stablecoin | Market cap | 7d |
|---|---|---|
| USDT | **$183.278B** | -0.11% |
| USDC | **$74.331B** | -0.09% |
| USDS (Sky) | **$6.515B** | +1.27% |
| USDe (Ethena) | **$4.842B** | +5.19% |
| DAI | **$4.801B** | +0.17% |

By chain: Ethereum $146.9B, Tron $94.444B, Solana $16.56B, BSC $13.297B, Hyperliquid L1 $7.254B. With the aggregate essentially flat (-0.11%), **only USDe stood out at +5.19%**, indicating sustained carry demand for synthetic dollars. That stablecoin supply did not grow in a week when prices rallied suggests the fuel was **reallocation of existing capital into risk assets** rather than new external money.

---

## 6. NFT Market Trends

Weekly NFT volume was **$37.54M**, down **-15.28%** from $46.78M the prior week. By chain: Ethereum $15.32M, Polygon $7.09M (-4.88%), Bitcoin $4.33M (-53.99%). Given the prior week was +6.8%, the trend has broken after two weeks. Bitcoin-based NFTs (the Ordinals complex) drove the decline with a **-53.99%** collapse.

**Blue-chip collection floors (7d change)**

| Collection | Floor | 7d | Market cap | vs. ATH |
|---|---|---|---|---|
| CryptoPunks | **29.69 ETH** ($77,105) | +0.3% | $770.59M | -83.8% |
| BAYC | **6.75 ETH** ($17,392.78) | +1.9% | $173.89M | -95.9% |
| Pudgy Penguins | **3.29 ETH** ($8,698.42) | +8.1% | $77.31M | -94.1% |

Total NFT market capitalization reads **$1.99B** (+3.6% on the day) on CoinGecko and **$2.57B** (+3.91%) on NFTPriceFloor. The gap between the two sources comes from collection coverage — NFTPriceFloor tracks 1,799 collections.

The defining feature of the week is that **volume and floors moved in opposite directions**. Volume fell 15.28% and yet all three blue chips were positive, with Pudgy Penguins strongest at +8.1%. The explanation is structural: with ETH up 5.21% on the week, an ETH-denominated floor that merely holds still appreciates in dollar terms, and **selling pressure itself eased** even as trading frequency dropped. All three remain 84–96% below their all-time highs, however, so this reads as marginal normalization off the lows rather than a trend reversal.

Two events stood out: **a rush of new NFT projects in the Zcash ecosystem**, tracking ZEC's +40.9% week, and **new collections on Robinhood Chain** (StonkBrokers, Chain Mancers), an observable attempt by a traditional retail brokerage to extend into NFTs.

---

## 7. RWA Trends

### 7.1 Top Eight Products

| Rank | Product | AUM | Issuer |
|---|---|---|---|
| 1 | **USYC** | $2.506B | Circle (Hashnote) |
| 2 | **BUIDL** | $2.305B | BlackRock / Securitize |
| 3 | **USDY** | $2.250B | Ondo Finance |
| 4 | **iBENJI** | $1.705B | Franklin Templeton |
| 5 | **WTGXX** | $1.230B | WisdomTree |
| 6 | **JLTXX** | $0.801B | — |
| 7 | **BENJI** | $0.672B | Franklin Templeton |
| 8 | **USTB** | $0.570B | Superstate |

Total tokenized US Treasuries stand at **$14.82B** (-5.25% over 30 days), with a seven-day average APY of **3.51%** across **80,416** holders. By issuer: Ondo $2.7B (10 assets), Circle $2.5B, Franklin Templeton $2.5B, Securitize $2.4B, WisdomTree $1.2B.

Total RWA scale on DefiLlama is **$29.881B** in Active AUM and **$33.168B** in Onchain AUM, with RWA TVL inside DeFi at **$3.802B**.

### 7.2 RWA Flows by Network (30-day net)

| Network | 30d net flow | Major RWA protocols in DeFi |
|---|---|---|
| **ZKsync Era** | **+$1.5B** | — |
| **Aptos** | **+$727.5M** | — |
| **Solana** | **+$308.5M** | Kamino Lend ($404.2M) |
| **Ethereum** | **-$1.9B** | Morpho Blue ($576.6M), Aave V3 ($390.6M), Pendle V2 ($252.2M) |
| **Base** | — | Morpho Blue (multi-chain deployment) |

What the 30-day flows show is **a crack in Ethereum's monopoly**. While $1.9B left Ethereum, $1.5B went to ZKsync Era, $727.5M to Aptos and $308.5M to Solana. Yet the RWA collateral actually put to work inside DeFi remains concentrated in the Ethereum ecosystem — Morpho Blue $576.6M, Aave V3 $390.6M. This is a transitional state in which **issuance and custody are dispersing to cheaper chains while financial utilization still sits on Ethereum**.

### 7.3 Regional Developments

**United States** — On 9/17 the SEC announced a five-year **Innovation Exemption** permitting tokenized US equities to trade on permissioned blockchain platforms using AMM and liquidity-pool designs. The same day the CFTC, through Staff Letter 26-25, exempted developers who provide only order-routing front ends from introducing-broker registration. Most of the $14.82B in tokenized Treasuries are US-issued products.

**Europe** — MiCA has cleared its transition period as of 2026 and entered the enforcement phase. Following ESMA's statement closing the transition in April 2026 and a further statement in June, the focus is enforcement of the existing framework rather than new legislation. European managers including WisdomTree (WTGXX, $1.23B) hold top-tier positions in tokenized money market funds.

**Asia** — Hong Kong is the most assertive. Chief Executive John Lee's 9/16 Policy Address specified permitting regulated stablecoins to trade on licensed virtual-asset exchanges, **the use of tokenized money market funds in settlement**, a regulatory framework for RWA tokenization including gold, and 24/7 settlement infrastructure via the HKMA's EnsembleTX by year end. Singapore's MAS is converting stablecoin regulation into binding law through a public consultation on amendments to the 2019 Payment Services Act (100% reserves, redemption within five business days, no interest payments), with the consultation closing October 16. In Korea, a Digital Asset Basic Act (the "second-stage" law) is being pursued as member-sponsored legislation within the September regular session, and phase two of corporate real-name accounts — covering listed companies and professional-investor entities — is tied to that legislation.

---

## 8. On-chain Activity Analysis

### 8.1 Top Eight Chains by DAA and Transactions

| Rank | Chain | DAA (24h) | Daily transactions (converted) |
|---|---|---|---|
| 1 | **Tron** | 3.59M | ~6.90M |
| 2 | **Solana** | 2.93M | ~124.30M |
| 3 | **BSC** | 1.97M | ~22.07M |
| 4 | **Ethereum** | 616,395 | ~1.85M |
| 5 | **Polygon** | 487,489 | ~4.73M |
| 6 | **Base** | 330,435 | ~7.11M |
| 7 | **Avalanche** | 200,054 | ~1.22M |
| 8 | **Arbitrum** | 115,072 | ~1.18M |

Transaction counts convert Chainspect's measured TPS (one-hour average) to a 24-hour basis. Methodology variance is significant and worth flagging: at the same timestamp Blockchair reports Ethereum at 7.92M (main) and 11.89M (all events) and Tron at 16.20M (main) and 20.45M (all events), four to six times higher, depending on whether internal calls and token transfers are counted. For comparing real usage with bot traffic stripped out, **DAA is the more reliable measure**, and on that basis Tron, Solana and BSC together account for 8.5 million users, or 87% of total DAA across the top eight chains.

### 8.2 Weekly Surges and Declines

**Surges** — Avalanche led decisively with TVL +**23.02%** over seven days and +31.16% over 30. Robinhood Chain grew fastest among new chains at +9.58% over seven days and **+79.40%** over 30, and its fees of $2.61M (7d) and $38.72M (30d) already exceed Bitcoin's ($1.48M over seven days). Sui followed at TVL +7.98%.

**Declines** — Spark posted the largest drawdown among major protocols at **-18.91%** over seven days, with ether.fi at **-6.27%** and Uniswap TVL at **-7.22%**. ether.fi's decline relates to an in-progress structural reallocation reducing EigenLayer exposure in favor of Symbiotic.

### 8.3 Flows

Exchange BTC flows averaged **+431.56 BTC** of net inflow per day through September, well above the quarterly average, but daily variance was extreme: +551 BTC on 9/10, +14 BTC on 9/12, **-1,292 BTC** on 9/14. That the large outflow (-1,292 BTC) landed immediately before the 9/15 drawdown suggests not pre-emptive withdrawal ahead of a decline but **movement to self-custody in preparation for buying the dip**.

Stablecoin supply was flat at -0.11% over seven days. That stablecoins did not grow in a week when prices rose is **a clear signal that new fiat inflows did not drive this rally**. The fuel was reallocation of existing on-chain capital and the liquidation of short positions, not external money.

---

## 9. Sector Summary (8)

> Sector market caps and 24-hour changes come from CoinGecko category pages; individual token seven-day changes were computed by comparing the 9/14 close to the current price on CoinGecko coin pages. All figures are as of September 21, 2026, and may vary at the decimal level with query timing.

### 9.1 AI — $21.7B (24h -1.9%)

Four of six major tokens gained double digits, making the weekly trend strong despite the daily print. TAO, RENDER, WLD and VVV all rose more than 13%, and the King Charles III AI safety summit held in the UK on 9/17 — attended by the heads of Nvidia, OpenAI, Anthropic and Google DeepMind — triggered a +9.4% sector-wide rally.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| TAO (Bittensor) | $263.84 | **$3.01B** (#37) | **+13.00%** | $274.70M |
| RENDER | $1.77 | **$913.89M** (#85) | **+27.30%** | $123.75M |
| VVV (Venice) | $28.16 | **$1.354B** (#68) | **+22.01%** | $76.61M |
| WLD (Worldcoin) | $0.4396 | **$1.591B** (#59) | **+14.05%** | $188.38M |
| FET (ASI Alliance) | $0.1673 | **$406.35M** | **+2.66%** | $115.28M |
| ELIZAOS | $0.0001548 | **$1.157M** | **-2.43%** | $377,812 |

**Events** — (a) **FET converter exploit:** ASI Alliance confirmed a token-converter exploit on 9/18 and suspended conversions; FET turned lower after a 9/18 high of $0.185 and finished last in the sector. (b) **ELIZAOS at a record low:** it printed an all-time low of $0.0001471 on 9/16 amid the continuing fallout from the Eliza Labs foundation wind-down and Burwick Law litigation.

**Reading** — The temperature gap inside a single sector was extreme. Compute and infrastructure names (TAO, RENDER, VVV) ran +13–27% while the agent-framework complex (ELIZAOS) was negative. This signals the AI narrative **rotating capital out of "agent tokens" and into actual compute resources**, a read supported by RENDER's 24-hour volume jumping 87.8% day over day.

### 9.2 Meme — $34.86B (24h -1.4%)

Sector 24-hour volume was $2.71B. The daily print is a modest pullback, but all three majors were positive on a seven-day basis — a midweek rally that gave back ground on the final session.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| DOGE | $0.08685 | **$13.55B** | **+3.85%** | $953.58M |
| PEPE | $0.000003953 | **$1.66B** | **+14.58%** | $530.44M |
| SHIB | $0.000005369 | **$3.16B** | **+2.46%** | $94.15M |

**Events** — PEPE recorded an all-time-high $40M of volume in Solana-based trading, and SHIB formed a technical golden cross. Memes rallied broadly alongside bitcoin's reclaim of $80K.

**Reading** — The 3.8x spread between PEPE (+14.58%) and DOGE (+3.85%) is the point. Smaller caps bouncing harder says this meme rally was **high-beta positioning within a risk-appetite recovery** rather than new money arriving. DOGE's $953.58M of 24-hour volume is only 7% of its $13.55B cap, while PEPE's $530.44M is 32% of its $1.66B — a turnover ratio 4.5 times higher.

### 9.3 GameFi — $3.45B (24h -2.3%)

Among the smallest of the eight sectors in absolute terms; the three majors rose 5–10%, in line with the broad market bounce.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| GALA | $0.001898 | **$95.18M** | **+10.10%** | $22.66M |
| IMX (Immutable) | $0.1352 | **$118.88M** | **+9.30%** | $10.53M |
| RONIN | $0.06018 | **$46.52M** | **+5.07%** | $2.82M |

**Events** — RONIN launched **Nomgar Clash** on 9/18 and retraced 4% the same day. GALA faced a delisting notice from Bithumb on 9/19.

**Reading** — Total sector capitalization of $3.45B is one-sixth of Hyperliquid's single-token market cap ($20.24B). That a new game launch (RONIN) coincided with a price decline while a delisting announcement (GALA) coincided with a +10.10% week shows **market beta dominating individual fundamentals**. GameFi rode the tape this week without a catalyst of its own.

### 9.4 DePIN — $9.24B (24h -3.3%)

The second-largest daily drawdown among the eight sectors. The three majors rose 1–6%, underperforming the broad market.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| IOTX (IoTeX) | $0.003302 | **$31.18M** | **+5.64%** | $4.23M |
| AKT (Akash) | $0.5699 | **$169.84M** | **+5.15%** | $3.63M |
| HNT (Helium) | $0.4617 | **$87.86M** | **+1.06%** | $4.79M |

**Events** — **Coinbase will suspend IOTX trading effective 9/23** across Coinbase.com, Exchange and Prime, reported as the outcome of a periodic review tied to low volume. Trading continues on Binance, KuCoin and elsewhere.

**Reading** — DePIN was bypassed by this week's AI rally. RENDER, classified into the AI sector, surged +27.30% while AKT — in the same compute category — managed only +5.15%. With Akash's Q1 2026 lease revenue down 45% quarter over quarter, the market appears to be **selecting within DePIN for projects with live revenue momentum**.

### 9.5 SocialFi — $2.64B (24h -1.9%)

The smallest of the eight sectors, and the one with the widest internal dispersion.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| PUMP (pump.fun) | $0.004313 | **$2.02B** | **+17.16%** | $151.87M |
| ANTFUN | $0.08009 | **$151.11M** | **-11.45%** | $9.35M |
| SWOP | — | **$64.4M** | — | — |

**Events** — ANTFUN set an all-time high of $0.0915 on 9/15 and immediately corrected 12%. PUMP's market cap grew 21–24% versus 9/14, and it ranked third in DEX volume over seven days at $3.146B.

**Reading** — PUMP alone accounts for $2.02B of the sector's $2.64B, or 76.5% — extreme concentration. Strictly speaking PUMP is closer to a memecoin launchpad than traditional SocialFi, and excluding it leaves a real SocialFi market of only about $600M. ANTFUN's -11.45% is profit-taking straight off a record high, which shows **the sector has yet to establish a durable demand base**.

### 9.6 Restaking — $1.59B (24h +0.2%)

The only one of eight sectors positive on a 24-hour basis. Sector 24-hour volume was $202.81M.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| EIGEN (EigenCloud) | $0.2375 | **$219.74M** | **+16.45%** | $33.25M |
| ETHFI (ether.fi) | $0.7263 | **$701.55M** | **+14.58%** | $49.10M |
| REZ (Renzo) | $0.003817 | **$34.43M** | **-4.80%** | $11.37M |

**Events** — **EigenLayer rebranded to EigenCloud**, repositioning around a "verifiable cloud" bundling EigenDA, EigenVerify and EigenCompute, and rose 13.6% after the announcement around 9/19.

**Reading** — The gap between token prices (EIGEN +16.45%, ETHFI +14.58%) and protocol TVL is the thing to watch. EigenCloud TVL of $6.779B grew only 2.24% over seven days, and ether.fi TVL actually fell **-6.27%**. With ether.fi mid-way through shifting EigenLayer exposure to Symbiotic, tokens rose while TVL drained — which makes it likely the price is front-running the rebrand narrative.

### 9.7 Perp DEX / Derivatives — ~$27B (24h -1.2%)

Sector 24-hour volume was $1.73B. On-chain perp volume rose 17.87% on the week, the strongest fundamental momentum of the eight sectors.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| HYPE (Hyperliquid) | $91.01 | **$20.24B** (#11) | **+13.28%** | $801.64M |
| DYDX | $0.1318 | **$111.33M** | **+15.84%** | $4.86M |
| GMX | $7.71 | **$80.62M** | **-1.90%** | $2.60M |

**Events** — Hyperliquid shipped **manual borrowing** on 9/18: HYPE and BTC as collateral against direct USDC and USDT borrowing (LTVs of 65% and 50%), a standalone money market usable without trading. **$269M** was drawn on day one and HYPE set consecutive records at $92.56 (9/18) and $94.46 (9/19). The same week NEAR launched private perpetual futures across more than 50 markets on the Hyperliquid execution engine.

**Reading** — The monopoly shows up in the data: HYPE alone is $20.24B of the sector's ~$27B, or 75%. Hyperliquid's $53.253B of seven-day volume is 3.2 times second-place Aster ($16.724B), while dYdX's seven-day volume has contracted to $220.43M. That DYDX nonetheless outperformed HYPE at +15.84% versus +13.28% is **a low-cap bounce untethered from fundamentals**, and a textbook instance of this week's recurring divergence in which the tokens of shrinking businesses rise fastest.

### 9.8 DA (Data Availability) — $5.54B (24h -4.1%)

The largest daily drawdown of the eight sectors. Sector 24-hour volume was $1.11B.

| Token | Price | Market cap | 7d | 24h volume |
|---|---|---|---|---|
| TIA (Celestia) | $0.4215 | **$409.27M** (#121) | **+18.29%** | $55.44M |
| EIGEN (EigenDA) | $0.2390 | **$221.21M** | **+18.10%** | $33.30M |
| AVAIL | $0.002252 | **$9.03M** | **+9.00%** | $0.79M |

**Events** — Derive V3 **proposed adopting Celestia** as its data availability layer (around 9/16). NEAR Intents TVL surged 77% month over month to $169M.

**Reading** — Down 4.1% on the day but top-tier over seven with TIA +18.29% and EIGEN +18.10% — the classic pattern of a late-week surge meeting concentrated profit-taking on the final session. Derive V3's Celestia proposal matters as **a case of an L2 actually selecting a DA layer**, evidence that DA demand is starting to convert from narrative into concrete commitments. TIA's $409M cap remains far below its all-time high, so the sector as a whole is early in any recovery.

---

## 10. On-chain Anomalies Within Top-200 by Market Cap

**① NEAR — a $5.5B alt up 76–80% on the week while TVL fell 9.22% in 24 hours.** A top-21 asset gaining 76% in a week is itself unusual. More striking is that chain TVL fell 9.22% over 24 hours to $178.79M while the price surged, which suggests capital is **flowing into token purchases rather than into deposits on the chain**. NEAR Intents did $1.132B of seven-day DEX volume, solid in absolute terms, but total protocol revenue is trending down from $14.37M in Q4'25 to a provisional $10.69M in Q3'26.

**② Derive (DRV) — up 161.5% on the week, market-cap-to-revenue expanding to 99x.** A $378M market cap became 2.6 times larger in seven days, touched off by a single V3 upgrade proposal on 9/13. Annualized revenue is only $3.93M, putting the multiple above same-category GMX (7.5x) and dYdX (18.2x) and even above category leader Hyperliquid (29.2x). Further, DefiLlama's treasury view shows "Own Tokens" at $191.06M — roughly 490 million DRV at current prices, **almost exactly matching the 500 million DRV foundation issuance approved in September 2025**. That raises the possibility that roughly half of the headline 999.7 million circulating DRV remains with the foundation as latent overhang.

**③ Pendle — TVL up 9.4% over 30 days while seven-day fees collapsed to $70,931.** Growth and revenue metrics decoupled and moved in opposite directions. Weekly fees in the $70K range on a $1.28B protocol mean deposited assets are not converting into actual trading or yield activity.

**④ Spark — the only major protocol down double digits, TVL -18.91% over seven days.** Nearly 19% left a $7.03B protocol in a week. It is the sole top-ten protocol with a double-digit decline, against Morpho at +9.41% and Sky/Maker at +4.71% over the same period, pointing to capital rotation within lending.

**⑤ Galxe (GAL) — up 103.19% on the week on $4,797 of 24-hour volume.** Daily turnover under five thousand dollars on an $81.81M token means price discovery has effectively stopped functioning. It is a legacy token left over from the Gravity migration, structurally able to move more than 100% on trivial size, and it severely distorts any sector statistic that includes it.

**⑥ Rain — a $10.06B asset down 6.9% on the week.** A top-14 asset fell in a broadly rising market. An unlock of roughly $586M on September 7 is cited as the cause, suggesting the supply is still being digested.

**⑦ dYdX — seven-day volume down to $220.43M while the token rose 15.84%.** Weekly volume at what was once the leading on-chain derivatives venue has shrunk to 0.4% of Hyperliquid's ($53.25B), yet the token outperformed the sector average. Business scale and token price have fully decoupled.

---

## 11. Projects of the Week — 3 Selected

> Category spread: L1 / DeFi-derivatives / AI-DePIN

### (1) NEAR Protocol (NEAR) — sharded L1 and chain abstraction layer (L1)

**Key market data**

- Price: **$4.12** (CoinGecko, 9/21; WoW +76.0%, weekly high $4.29 / low $2.28)
- Market cap / FDV: **$5.388B** / **$5.388B** (CoinGecko, 9/21; cap equals FDV, so supply is effectively fully circulating)
- 24h volume: roughly **$1.751B** (CoinGecko, 9/21)
- Circulating / total supply: **1.307B NEAR** circulating / 1.307B issued, no maximum supply cap (100% of issued supply circulating) (CoinGecko, 9/21)
- Venues: **87 exchanges, 152 markets**; top venues are Binance NEAR/USDT ($352.9M), Coinbase Exchange NEAR/USD ($82.4M), Gate NEAR/USDT ($49.6M) (CoinGecko, 9/21)
- On-chain metric 1 — staking: staking ratio **43.3%**, staked cap $2.31B, 565.88M NEAR staked, APY 5.21%, net inflation **+2.54%** (StakingRewards, 9/21)
- On-chain metric 2 — NEAR Intents: seven-day DEX volume **$1.132B** / 30-day $4.179B / cumulative $29.885B; trailing-twelve-month annualized fees **$46.84M** and annualized revenue **$6.23M**; TVL $167.53M (+72.6% over 30 days, spread across 26 chains) (DefiLlama, 9/21)

**Fundamentals**

① **Business and technology** — A Nightshade-sharded proof-of-stake L1, but the strategic axis has already moved to **chain abstraction**: the design philosophy that *a user should not need to know which blockchain they are on*. It strips multi-step friction — bridge selection, gas preparation, unwrapping, DEX selection — away from the user and pushes it into the backend.

There are three strands. (a) **NEAR Intents**: a user declares an outcome rather than a process ("1 ETH to BTC, best price"), handled in three steps — ⓐ the intent is broadcast to a solver network over a websocket relay, ⓑ specialist market makers (solvers) search on-chain and off-chain liquidity and submit **competing quotes**, ⓒ a Verifier contract on NEAR (`intents.near`) performs **atomic settlement** (all or nothing, no partial fills, no stuck funds). The user pays no separate fee beyond the solver quote spread; the solver keeps the difference between its sourcing cost and the quote. The decisive difference from an AMM model is that **the user never interacts with a liquidity pool directly**. DefiLlama shows TVL distributed across 26 chains (NEAR $90.2M, Ethereum $41.34M, Tron $10.23M, Bitcoin $6.93M and others). (b) **Confidential Intents**: routes trades through a private NEAR shard to block front-running and strategy exposure. (c) **AI agent infrastructure**: a staking-based AI payment system launched in July 2026 lets NEAR staking earn monthly compute credits, supporting 43 models. A June 2026 upgrade introduced dynamic resharding and post-quantum signatures.

② **Team and backing** — **$533.7M** raised cumulatively. Among the major rounds, **$21.6M (May 2020, led by a16z)** is verified via TechCrunch and BusinessWire and **$350M (April 2022, led by Tiger Global)** via CoinDesk, The Block and Bloomberg. The $12.1M (July 2019) and $150M (January 2022) rounds appear only in data aggregators and are therefore classified as **qualitative**. The backgrounds of founders Illia Polosukhin and Alexander Skidanov were likewise not re-verified against primary media in this review and are **qualitative**.

③ **Tokenomics** — 1 billion tokens at genesis with no maximum supply. Annual issuance is roughly 5%, of which 90% goes to validators and stakers and 10% to the protocol treasury. 70% of transaction fees are burned and 30% is distributed to contract developers as an incentive. Net deflation requires burns to exceed issuance, and **at +2.54% net inflation that crossover has not happened**. With circulating supply equal to total issued supply, **the vesting cliff is effectively exhausted**.

④ **Catalysts** — Milestones beyond stage two of the NEAR@3.33 incentive program, and expansion of chains connected to Confidential Intents (currently more than 30). A proposal for a 30 million token fund aimed at reducing inflation is under discussion, but details and whether it will pass are unconfirmed.

⑤ **Revenue and results** — L1 chain revenue itself is $2,443 per 24 hours, under a million dollars annualized. The real revenue source is NEAR Intents, and its P&L structure is the key to understanding this project.

| Item (DefiLlama, 9/21) | Q3'26 (prov.) | Q2'26 | Q1'26 | Q4'25 |
|---|---|---|---|---|
| Total protocol revenue (swap fees) | $10.69M | $9.32M | $12.13M | $14.37M |
| − Cost of revenue (mostly solver and distribution payouts) | -$8.53M | -$7.82M | -$10.55M | -$13.43M |
| **Gross profit** | **$2.16M** | **$1.50M** | **$1.59M** | **$944.69K** |
| Cost-of-revenue ratio | 79.8% | 83.9% | 87.0% | 93.5% |
| NEAR buybacks (accruing to holders) | $2.16M | $1.50M | $760.31K | $0 |

**Roughly 80% of total fees leak out to solvers and distribution channels.** That is where the 7.5x gap between $46.84M of annualized fees and $6.23M of annualized revenue comes from, and it sets the denominator for the valuation math below.

The core of this table is that the two metrics move in opposite directions. Total protocol revenue has **declined from a Q4'25 peak of $14.37M**, but the cost-of-revenue ratio fell for four consecutive quarters — **93.5% → 87.0% → 83.9% → 79.8%** — so gross profit *rose* from $944.69K to $1.59M to $1.50M to $2.16M. Volume growth has slowed, but **intensifying solver competition is improving the protocol's take rate**. There is a structural floor to how far that ratio can be pushed, however, so this mechanism alone cannot grow gross profit indefinitely.

⑥ **Value capture** — Since February 23, 2026, revenue captured by NEAR Intents has funded **open-market $NEAR buybacks**. These are purchases held rather than burns, so the acquired supply can re-enter circulation. The L1's own fee burn is smaller than issuance, so its contribution to value capture is negligible.

**Investment view**

- **Strengths:** ① NEAR Intents shows verified real usage at 30-day TVL +72.6% and seven-day DEX volume of $1.132B ($4.179B over 30 days), with the cost-of-revenue ratio falling from 93.5% to 79.8% across four quarters and gross profit up 2.3x from $944.69K to $2.16M. ② Circulating supply equals total issued supply, so there is **no large unlock overhang** — structurally no vesting pressure even after a spike. ③ Two concrete catalysts landed simultaneously on 9/17, Confidential TVL crossing $70M and the private perpetuals launch, both cross-confirmed across multiple outlets.

- **Risks:** ① **Valuation.** A $5.388B market cap against $6.23M of annualized NEAR Intents revenue is a **price-to-sales ratio of roughly 865x**; measured against L1 chain revenue it runs into the thousands. ② **Persistent net inflation of +2.54%.** Non-staking holders are diluted annually, and with burns not exceeding issuance the timing of any deflationary crossover is uncertain. ③ **The weekly range is itself the risk.** Price moved 88% in seven days, from a $2.28 low to a $4.29 high, and chain TVL fell 9.22% in 24 hours even as price surged — new flows concentrated purely in token purchases.

- **Comparables** (DefiLlama, 2026-09-21, same timestamp and source)

| Chain | TVL | Chain fees (24h) | Market cap | FDV |
|---|---|---|---|---|
| **NEAR** | $178.79M | $3,490 | $5.417B | $5.417B |
| SUI | $496.25M | $6,361 | $3.856B | $9.414B |
| AVAX | $636.33M | $20,660 | $5.02B | $5.322B |
| APT | $56.8M | $3,932 | $641.94M | $891.51M |
| SEI | $34.03M | $36 | $360.8M | $535.84M |

NEAR carries a market cap in the $5.4B range comparable to AVAX while holding 28% of AVAX's TVL and 17% of its chain fees. Against SUI, its market cap is 1.4 times larger on 36% of the TVL.

- **Scenarios:** From spot of **$4.12**. A return to the weekly high of $4.29 implies **+4.1%**; a retrace to the weekly low of $2.28 implies **-44.7%** (basis: actual 2026-09-14 to 09-21 trading range, CoinGecko). Price is 79.8% below its all-time high of $20.44 (2022-01-16), but with no primary-source basis for assuming a return to that level, **no upside numeric target is given (rule 4)**.

- **Verdict: hold and watch.** Real-usage metrics (Intents TVL, holder-accruing revenue) are improving, but a 865x PSR far outruns the pace of that improvement, and the +76% week has the character of an event-driven move concentrated in two catalysts.

---

### (2) Derive (DRV) — integrated on-chain options and perpetuals exchange (DeFi / derivatives)

**Key market data**

- Price: **$0.3775** (CoinGecko, 9/21; WoW +161.5%, weekly high $0.5089 / low $0.1356)
- Market cap / FDV: **$378.257M** / **$567.562M** (CoinGecko, 9/21)
- 24h volume: roughly **$101.99M** (CoinGecko, 9/21)
- Circulating / max supply: **999,689,257 DRV** / **1.5B DRV** (66.6% circulating) (CoinGecko, 9/21)
- Venues: **18 exchanges, 39 markets**, largest is Coinbase Exchange DRV/USD, plus Upbit, Kraken, Gate, Bithumb and OrangeX (including two KRW markets) (CoinGecko, 9/21)
- On-chain metric 1 — fees and revenue: seven-day fees **$188,576** / revenue **$161,465**; 30-day fees $681,120 / revenue $556,515; annualized fees $5.65M / revenue **$3.93M** (DefiLlama, 9/21)
- On-chain metric 2 — TVL and volume: TVL **$192.91M** (Hyperliquid L1 $57.87M / Base $52.26M / Ethereum $33.42M / OP Mainnet $30.93M / Arbitrum $18.43M); 30-day perp volume $841.86M; 30-day options notional $3.319B; OI $69.04M (DefiLlama, 9/21)

**Fundamentals**

① **Business and technology** — An on-chain derivatives exchange offering options and perpetuals through a unified order book, formerly Lyra Finance and rebranded to DRV in 2024. It has run its own OP Stack appchain, Derive Chain, but under **a DIP proposal filed September 13, 2026** it will move to **V3**, using a zkVM-based matching engine and sequencer, verifying and settling on Ethereum L1, with user funds custodied by an L1 smart contract (targeting L2Beat Stage 1). Cross-margining between options and perps is the core differentiator.

② **Team and backing** — Co-founder **Nick Forster**, formerly an options trader at Susquehanna, is confirmed through **The Block**. The $3.3M seed (July 2021), $3M strategic round (November 2022) and February 2026 Variant investment (undisclosed) appear only in data aggregators without individual coverage from established outlets, and are classified as **qualitative**. Cumulative disclosed funding is a modest $6.3M.

③ **Tokenomics** — Supply was fixed at 1 billion in the LYRA→DRV conversion, but **a co-founder proposal on September 12, 2025 approved a new issuance of 500 million DRV, raising supply 50% from 1 billion to 1.5 billion**. 46% of that (roughly 230 million DRV) vests to core contributors over four years, conditioned on **DRV market cap exceeding $150M before sales are permitted** — a condition **already met** at the current $378M. Existing holders face dilution of up to 8.25% annually over four years. 35% of fees go to weekly open-market buybacks; in week 84 the program bought 199,760 DRV at an average of $0.14, bringing cumulative purchases to 27.64 million DRV.

④ **Catalysts** — V3 deployment (zkVM, Ethereum L1 settlement, L2Beat Stage 1 target). With at least 14 days' notice required after approval, actual migration is expected in Q4 2026 to early 2027. Also stDRV deployment on Ethereum mainnet, **DRV OFT integration with Robinhood Chain** (a signal of institutional distribution), and a February 1, 2027 deadline for claiming legacy Optimism rewards.

⑤ **Revenue and results** — Quarterly total protocol revenue ran Q1'25 $2.4M → Q2'25 $778K → Q3'25 $940K → Q4'25 $935K → Q1'26 $1.28M → Q2'26 $1.88M → Q3'26 (provisional) $1.38M, confirming an uptrend through 2026 off a mid-2025 trough.

⑥ **Value capture** — 35% of fees fund weekly buybacks, yet DefiLlama records **holder-accruing revenue of $0 across every period**. The purchased tokens are apparently **retained in the treasury** rather than burned or distributed to stakers, which places value capture a grade below an unconditional burn model.

**Investment view**

- **Strengths:** ① Revenue doubled from $935K in Q4'25 to $1.88M in Q2'26, confirming an uptrend (30-day revenue $556K, $3.93M annualized). ② **Dominance in on-chain options** — as of September 7 it held roughly 95% of 30-day on-chain options premium volume in a market with about $2B of open interest. ③ Cash-flow return is demonstrated in execution, not just policy: 84 consecutive weeks of buybacks totaling 27.64 million DRV.

- **Risks:** ① **Valuation expansion.** A $388.89M market cap on $3.93M of annualized revenue is **about 99x**, markedly above GMX (7.5x), dYdX (18.2x) and even category leader Hyperliquid (29.2x). ② **Latent overhang.** The 2025 issuance added 50% to supply, and DefiLlama's treasury shows "Own Tokens" at $191.06M — roughly 490 million DRV at current prices — suggesting about half of the headline 999.7 million circulating supply may sit with the foundation. The core-contributor vesting condition of a $150M market cap has already been satisfied. ③ **Anticipation risk.** Spot sits only 25.7% below the all-time high of $0.5089 set on 9/19, so V3 expectations are substantially priced in.

- **Comparables** (DefiLlama, 2026-09-21, same timestamp and source, trailing-twelve-month annualized)

| Protocol | TVL | Market cap | FDV | Annualized fees | Annualized revenue | Cap/revenue |
|---|---|---|---|---|---|---|
| **Derive** | $192.91M | $388.89M | $583.52M | $5.65M | $3.93M | **~99x** |
| GMX | $213.12M | $78.32M | $78.32M | $28.34M | $10.49M | ~7.5x |
| dYdX | $110.75M | $113.62M | $128.69M | $6.25M | $6.25M | ~18.2x |
| Hyperliquid | $7.052B | $20.261B | $87.011B | $920.12M | $695.09M | ~29.2x |

(Aevo is **excluded from the multiple comparison — asymmetric comparison prohibited (rule 5)** — because DefiLlama does not track its fees or revenue.)

- **Scenarios:** From spot of **$0.3775**. A return to the all-time high of $0.5089 (2026-09-19) implies **+34.8%**; a retrace to the weekly low of $0.1356 implies **-64.1%** (basis: actual 2026-09-14 to 09-21 trading range and ATH, CoinGecko). No analyst targets were obtained, so **no further numeric targets are given (rule 4)**.

- **Verdict: hold and watch.** The 95% share of on-chain options and the revenue uptrend are real, but a 99x PSR sits 3–13x above peers and the structural overhang of foundation-held supply is unresolved.

---

### (3) Render Network (RENDER) — decentralized GPU rendering and compute network (AI / DePIN)

**Key market data**

- Price: **$1.77** (CoinGecko, 9/21; WoW +27.30%, weekly range $1.29–$1.77, with spot at the top of the range)
- Market cap / FDV: **$913.89M** (#85) / **$939.89M** (CoinGecko, 9/21; FDV on issued supply)
- 24h volume: roughly **$123.75M**, up 87.80% day over day (CoinGecko, 9/21)
- Circulating / total supply: **518,776,241 RENDER** circulating / 533.536M issued / **644.245M** maximum (**80.5%** of maximum circulating) (CoinGecko, 9/21)
- Venues: **90 exchanges, 150 markets**; largest by turnover are Binance, Coinbase Exchange and OKX (CoinGecko, 9/21)
- On-chain metric 1 — BME burn-based revenue: seven-day **$51,462** / 30-day **$210,438** / cumulative since tracking began $3.04M (DefiLlama render-network-bme, 9/21)
- On-chain metric 2 — value return rate: 30-day holder-accruing revenue of **$199,928** against revenue, or **95.0%** (DefiLlama, 9/21). Cumulative rendered frames above 79.6M and a peak of 5,600 active GPU nodes are **not cross-verified**, resting on secondary citations

**Fundamentals**

① **Business and technology** — It migrated wholesale from Ethereum to Solana on November 2, 2023 (RNDR→RENDER). The core is **BME (Burn and Mint Equilibrium)**: 95% of rendering payment value buys RENDER on the market and burns it, with the remaining 5% handled off-chain as an OTOY fee. The 2025 launch of Render Compute Network (RCN) extended scope into AI training and inference, and RNP-023 on July 9, 2026 integrated the Salad distributed GPU subnet as an exclusive supplier to expand capacity.

② **Team and backing** — Founder **Jules Urbach** is CEO of OTOY, developer of OctaneRender. **A $30M token sale backed by Multicoin Capital, with participation from the Solana Foundation, is verified across both CoinDesk (December 21, 2021) and The Block.** Alameda Research, on the investor list at the time, went bankrupt in the 2022 FTX collapse and is no longer an active relationship. Other details of the founding narrative rest on secondary sources and are **qualitative**.

③ **Tokenomics** — Roughly **126M RENDER (19.5%)** of the 644.245M maximum remains unissued, leaving latent supply capacity. BME runs burn (deflationary) and node-operator reward issuance (inflationary) simultaneously. 530,000 RENDER were burned across 2025, up 279% year over year, and cumulative burns passed 1 million RENDER in December 2025.

④ **Catalysts** — Participation in the **MPD2026 conference** on September 26, 2026. RNP-023 (Salad integration, July 9, 2026) and the SUBMERGE exhibition use case (September 11) have already been realized.

⑤ **Revenue and results** — Quarterly revenue ran Q2'25 $263.17K → Q3'25 $1.00M (presumed one-off spike) → Q4'25 $503.44K → Q1'26 $409.47K → Q2'26 $408.77K → Q3'26 (in progress, provisional) $454.55K. Trailing-twelve-month annualized revenue is roughly **$1.82M**, and after the Q3'25 spike the series sits in a **$400–500K range** with no clear uptrend.

⑥ **Value capture** — 30-day holder-accruing revenue of $199,928 against revenue of $210,438 is **95.0%**, precisely reconfirming the "95% burn" design in the data. Because capture happens through an **unconditional, mechanical burn requiring no staking**, the structural grade is best-in-class. The binding limitation is that **the absolute amount captured is very small relative to market cap**.

**Investment view**

- **Strengths:** ① **Unconditionality of value capture is top-tier** — 95.0% of revenue accrues to holders via burn with no staking or other action required. ② A real-usage growth base exists: 2025 burn volume up 279% year over year and cumulative rendered frames above 79.6M. ③ It carries an incumbent industry moat in OTOY/OctaneRender and is a rare case where backing is verified across both CoinDesk and The Block.

- **Risks:** ① **The gap between valuation and revenue.** A $913.89M market cap on $1.82M of annualized revenue is a **PSR of roughly 502x**. With quarterly revenue boxed into the $400–500K range, no growth path in the data justifies that multiple. ② It remains **-87.0%** below its all-time high of $13.53 (March 17, 2024), and this week's +27.30% carries the character of sector beta from the King Charles III AI safety summit (AI tokens broadly +9.4%). ③ **Intensifying competition** — io.net's estimated annualized revenue exceeds RENDER's, and Akash introduced its own BME on March 23, 2026 but saw Q1'26 lease revenue fall 45% quarter over quarter, implying weakening revenue momentum across the sector. The 126M unissued RENDER (19.5%) is an additional weight.

- **Comparables** (CoinGecko, 2026-09-21, same timestamp and source)

| Coin | Market cap | FDV | 7d |
|---|---|---|---|
| **RENDER** | $913.9M (#85) | $939.9M | +27.30% |
| TAO | $3.01B (#37) | $5.57B | +13.00% |
| AKT | $176.1M (#201) | $176.1M | +9.50% |
| IO | $54.9M (#439) | $110.2M | +5.50% |

Market cap, FDV and seven-day change are unified to a single CoinGecko timestamp. **Revenue multiple comparison is omitted — asymmetric comparison prohibited (rule 5)** — because revenue sources across these projects are variously DefiLlama, Messari and DePINpulse.

- **Scenarios:** From spot of **$1.77**. A retrace to the weekly low of $1.29 implies **-27.1%** (basis: actual 2026-09-14 to 09-21 trading range, CoinGecko). Price is 87.0% below its all-time high of $13.53 (2024-03-17), but with quarterly revenue range-bound there is no primary-source basis for assuming a return, so **no upside numeric target is given (rule 4)**.

- **Verdict: neutral.** The value capture design (95.0% unconditional burn) is best-in-class in the industry, but the absolute revenue captured — $1.82M a year — cannot support a 502x PSR. A break out of the quarterly revenue range is the precondition for any re-rating.

---

## 12. Weekly Insight

> **"This summer's inflation data does not tell us that the underlying trend has meaningfully improved."**
> — Kevin Warsh, Federal Reserve Chair, FOMC press conference, September 16, 2026

Compress the week into a sentence and it reads: **the bad news arrived, and the market went up anyway.** Within 48 hours the market absorbed the worst double blow it could have scripted — the CLARITY Act dying 49-50 in the Senate on 9/15, and the Fed hiking 25bp the next day. Bitcoin fell to $74,897 and ETFs shed $746.3M over two sessions. Then, in a single day on 9/18, it rose 5.93% to reclaim $80,000 and **closed the week up 3.83%**. That tells you the market had already discounted both events substantially, and that **uncertainty itself was the heavier burden than the content of the news**. VIX falling 16.2% from 17.68 to 14.81 says the same thing.

But **what fuelled the rebound** deserves a cold look. In the 9/18 liquidation data, short liquidations of $469.19M made up 86% of the $547M total. Over the same period total stablecoin capitalization was flat at -0.11%, and weekly net inflows into spot BTC ETFs came to **+$6.1M**. This rally was not produced by new fiat arriving; it was produced by **forced liquidation of existing positions and reallocation of on-chain capital**. DEX spot volume falling 6.29% while perp volume rose 17.87% and weekly liquidations reached $2.83B supports that reading. Price rose, but the market's capital base did not thicken.

The third thing to note is **broad decoupling between price and fundamentals**. dYdX saw weekly volume shrink to $220.43M yet its token rose 15.84%, outpacing category leader HYPE (+13.28%). Pendle grew TVL 9.4% over 30 days while weekly fees collapsed to $70,931. ether.fi shed 6.27% of TVL while its token gained 14.58%. NEAR surged 76% on the week as chain TVL fell 9.22% in 24 hours. Galxe rose 103% on $4,797 of daily turnover. That these divergences appear not in one or two names but simultaneously across sectors means capital is tracking **narrative and liquidity conditions rather than business metrics**.

Three risks stand out. First, **the resumption of a macro tightening cycle**. The Fed, ECB and BOJ all hiked in the same week and the dot plot implies one more this year. As long as high oil above $100 keeps pushing inflation expectations up, that direction is likely to hold. Second, **a prolonged legislative vacuum**. With CLARITY's failure effectively ending market-structure legislation in 2026, the scenario in which institutional capital waits for regulatory clarity has been pushed back by months at minimum. Third, **structurally expanding valuation multiples**. This week's leaders carry PSRs of roughly 870x (NEAR), 99x (Derive) and 502x (RENDER); revenue growth needs considerable time to catch up.

The things to watch are concentrated in the coming week. **The Deribit quarterly options expiry on 9/25** carries larger open interest than a monthly, and position adjustment typically picks up 48 to 72 hours beforehand. With combined BTC and ETH open interest at $89.68B and funding at a mild long-biased 3.21% annualized, how the market clears that expiry will likely set near-term direction. **August PCE on 9/30** is the first real test of whether the "second- and third-round effects" Warsh referenced are showing up in the data. Evidence that oil-driven headline inflation has passed through to core would sharply raise the odds of another hike this year; the absence of it leaves room for this week's risk-appetite recovery to extend. Finally, whether bitcoin clears the **double-top resistance** where the 9/3 high of $82,304 overlaps the 9/19 high of $81,950 is the technical decision point.

---

## 13. Key Events Calendar — Next Week (9/21–9/30)

| Date | Event | Note |
|---|---|---|
| **9/22 (Tue)** | Token unlocks totaling $111.9M (IP $96.0M, WLD $15.9M and others) | Largest unlock day of the week |
| 9/22 (Tue) | Moscow Exchange lists five new crypto futures | |
| 9/22 (Tue) | Chicago Fed National Activity Index | |
| 9/22–24 | Messari Mainnet NYC (institutional and research conference) | |
| 9/22–23 | Freedom Tech DC 2026 (Washington DC) | |
| 9/22–25 | Heavy Fed speaker calendar (Williams, Barkin, Hammack and others, 10+ appearances) | Guidance on the rate path |
| **9/23 (Wed)** | S&P Global September flash manufacturing and services PMIs | |
| 9/23 (Wed) | TON unlock of ~36.5M TON ($50.75M, 1.31% of float) | Largest single unlock |
| 9/24 (Thu) | US Q2 GDP third estimate (08:30 ET) | |
| 9/24 (Thu) | Humanity unlock of ~293M ($21.1M, 14.72% of float) | Largest relative to float |
| **★ 9/25 (Fri)** | **Deribit quarterly BTC/ETH options expiry (08:00 UTC)** | **Quarter-end expiry, largest open interest** |
| 9/25 (Fri) | US durable goods orders (preliminary), final UMich consumer sentiment | |
| 9/25–26 | BTCHEL 2026 (Helsinki) | |
| 9/26 (Sat) | Plasma unlock ($8.07M), Walrus unlock ($1.04M) | |
| 9/26 (Sat) | MPD2026 conference (Render Network attending) | |
| 9/26–30 | Institutional Q3 rebalancing (stablecoin and ETH exchange flows tend to rise) | |
| 9/27 (Sun) | AltLayer unlock ($1.7M) | |
| 9/28 (Mon) | Grass unlock ($3.79M) | |
| 9/29 (Tue) | Falcon Finance unlock ($10.12M, 2.39% of float) | |
| **★ 9/30 (Wed)** | **US August PCE price index (08:30 ET)** | **The Fed's preferred gauge** |
| 9/30 (Wed) | Quarter end / SEC fiscal year end | Enforcement actions cluster here |

**Note** — US shutdown risk has been resolved. Following a 90-6 Senate continuing resolution on August 8, 2026 and a 370-48 House vote on September 1, **the president signed the budget on September 2, funding the government through December 11**. The next fiscal cliff is mid-December. Separately, no floor vote has been scheduled for the American Reserve Modernization Act (H.R. 8957).

---

## 14. Token Unlock Schedule (Major)

### 14.1 Eight Major Unlocks (2026-09-21 to 10-05)

| Token | Date | Type | Amount (converted) | Unlock value | % of float |
|---|---|---|---|---|---|
| **TON** | 9/23 | Cliff | ~36.5M TON | **$50.75M** | 1.31% |
| **Humanity** | 9/24 | Cliff | ~293M | **$21.1M** | **14.72%** |
| **Canton (CC)** | Weekly | Weekly | ~148.5M / week | **$16.34M / week** | 0.38% / week |
| **Falcon Finance** | 9/29 | Cliff | ~77.8M | **$10.12M** | 2.39% |
| **Plasma** | 9/26 | Cliff | ~88.7M | **$8.07M** | 3.20% |
| **Grass** | 9/28 | Cliff | ~10.5M | **$3.79M** | 1.55% |
| **AltLayer** | 9/27 | Cliff | ~239.4M | **$1.70M** | 3.37% |
| **Walrus Protocol** | 9/26 | Cliff | ~32.5M | **$1.04M** | 1.28% |

Amounts are unlock value divided by current price.

**Totals** — Unlocks over the next seven days total **$353.56M** (cliff $249.27M + linear $104.29M), and over 30 days **$1.184B**. By day: 9/22 $51.38M, 9/23 $21.22M, 9/24 $76,439, 9/25 **$172.54M**, 9/26 $389,718, 9/27 $3.78M, 9/28 $5.16M, 9/29 $30.93M, 9/30 $6.81M.

### 14.2 Analysis

TON is the largest in absolute dollars at $50.75M, but **the genuinely risky one for price is Humanity**. Its $21.1M is only 42% of TON's size, yet at **14.72% of float** it expands circulating supply by nearly 15% in a single day. TON, at 1.31% of float, leaves the market ample capacity to absorb it. This is a clean illustration of the principle that **unlock impact should be judged by percentage of existing float and multiple of daily volume, not by dollar headline**.

The second thing to note is **Canton's recurring weekly unlock**. At $16.34M (0.38% of float) released every week, the annualized figure is roughly 20% of float. Unlike a one-off cliff it acts as constant selling pressure, and read alongside the fact that Canton chain ranks first among all chains at $11.2M of seven-day fees, the key question for this token becomes **how much of the unlock supply real usage revenue can offset**.

By date, **September 25 is the week's largest unlock day at $172.54M** — and it happens to coincide with the Deribit quarterly expiry. With unlock supply hitting the market alongside large derivatives settlement, elevated volatility around that date is worth anticipating. Falcon Finance (unlocking 9/29 at 2.39% of float) has already fallen 7.5% on the week, **the textbook pattern of an unlock being priced in early**, and that Rain, at a $10.06B market cap, remains 6.9% lower after its roughly $586M unlock on September 7 suggests large unlocks take weeks to digest.

---

Attached: Source links are listed inline beside each footnote.

1. [US Department of the Treasury — Daily Treasury Par Yield Curve Rates 2026](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value=2026)
2. [Federal Reserve — H.15 Selected Interest Rates](https://www.federalreserve.gov/releases/h15/)
3. [ts2.tech — VIX closes at 14.81 while three-month volatility carries a 23% premium (9/18)](https://ts2.tech/en/vix-closes-at-14-81-while-three-month-volatility-carries-a-23-premium/)
4. [Yahoo Finance — Stock market news, Sep 14, 2026](https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-14-132800512.html)
5. [TradingEconomics — Crude oil](https://tradingeconomics.com/commodity/crude-oil)
6. [CNBC Select — The price of gold today, Sept. 14, 2026](https://www.cnbc.com/select/the-price-of-gold-today-sept-14-2026/)
7. [150currency.com — Gold price, United States](https://www.150currency.com/gold-price/united_states/)
8. [Money Today — USD/KRW (9/14)](https://www.mt.co.kr/economy/2026/09/14/2026091415301093386)
9. [Money Today — USD/KRW close (9/18)](https://www.mt.co.kr/economy/2026/09/18/2026091815365178159)
10. [TradingEconomics — DXY](https://tradingeconomics.com/dxy:cur)
11. [TheStreet — Stock market today, Sept 14, 2026](https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-14-2026)
12. [TheStreet — Stock market today, Sept 18, 2026](https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-sept-18-2026)
13. [Herald Economy — Won nears the 1,400 line](https://biz.heraldcorp.com/article/10878279)
14. [Federal Reserve — FOMC statement (9/16)](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm)
15. [Federal Reserve — FOMC press conference transcript (9/16)](https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260916.pdf)
16. [Federal Reserve — Board members](https://www.federalreserve.gov/aboutthefed/bios/board/default.htm)
17. [Bloomberg — Fed's Warsh heeds own advice with record short press conference (9/16)](https://www.bloomberg.com/news/articles/2026-09-16/fed-s-warsh-heeds-own-advice-with-record-short-press-conference)
18. [CNBC — Fed rate decision, September 2026](https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html)
19. [US Senate — Roll Call Vote #234, 119th Congress 2nd Session (9/15)](https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00234.htm)
20. [CoinDesk — Crypto Clarity Act flames out in failed US Senate vote (9/15)](https://www.coindesk.com/policy/2026/09/15/crypto-clarity-act-flames-out-in-failed-u-s-senate-vote)
21. [House Financial Services Committee — H.R. 8957 markup result](https://financialservices.house.gov/news/documentsingle.aspx?DocumentID=411238)
22. [CNBC — Saudi Arabia shut down East-West crude oil pipeline (9/11)](https://www.cnbc.com/2026/09/11/saudi-arabia-shut-down-east-west-crude-oil-pipeline.html)
23. [BNN Bloomberg — Oil prices climb as attacks, pipeline outage deepen Saudi supply concerns (9/15)](https://www.bnnbloomberg.ca/markets/oil/2026/09/15/oil-prices-climb-as-attacks-pipeline-outage-deepen-saudi-supply-concerns/)
24. [OrbitRemit — ECB rate decision, September 2026](https://blog.orbitremit.com/ecb-rate-decision-september-2026/)
25. [FXStreet — EUR/JPY breaks below 174.00 after BOJ's policy decision](https://www.fxstreet.com/news/eur-jpy-breaks-below-17400-after-bojs-policy-decision-202509190356)
26. [Bloomberg — US said to delay excess-capacity tariffs until after Xi summit (9/17)](https://www.bloomberg.com/news/articles/2026-09-17/us-said-to-delay-excess-capacity-tariffs-until-after-xi-summit)
27. [CoinDesk — Live updates: bitcoin climbs over $80,000 (9/18)](https://www.coindesk.com/tech/2026/09/18/live-updates-hype-leads-altcoin-rally-as-bitcoin-recovers-toward-usd78-000)
28. Crypto.com Exchange MCP — BTC_USD / ETH_USD / SOL_USD / HYPE_USD daily candles (queried 2026-08-03 to 09-21)
29. [Farside Investors — Bitcoin ETF flows](https://farside.co.uk/btc/)
30. [Farside Investors — Ethereum ETF flows](https://farside.co.uk/eth/)
31. [Farside Investors — Solana ETF flows](https://farside.co.uk/sol/)
32. [The Block — Bitcoin ETFs eke out positive week with $433 million Friday inflow (9/19)](https://www.theblock.co/news/markets/2026-09-19-bitcoin-etfs-eke-out-positive-week-with-433-million-friday-inflow-as-ether-funds-snap-four-week-inflow-streak-415871)
33. [247wallst — Bitcoin ETFs now own 6.29% of every bitcoin (9/19)](https://247wallst.com/investing/cryptocurrency/2026/09/19/bitcoin-etfs-now-own-6-29-of-every-bitcoin-what-happens-when-they-hit-10/)
34. [KuCoin — BlackRock Ethereum ETFs add $1.57 billion, holdings reach 3.56 million ETH (9/17)](https://www.kucoin.com/news/flash/blackrock-ethereum-etfs-add-1-57-billion-holdings-reach-3-56-million-eth)
35. [Coinpedia — XRP ETF inflows beat the trend as bitcoin, ethereum ETFs lose $520M (9/16)](https://coinpedia.org/news/xrp-etf-inflows-beat-the-trend-as-bitcoin-ethereum-etfs-lose-520m/)
36. [Newhedge — Bitcoin MVRV](https://newhedge.io/bitcoin/mvrv)
37. [Newhedge — Bitcoin funding rate](https://newhedge.io/bitcoin/funding-rate)
38. [CoinGlass — BTC / ETH open interest](https://www.coinglass.com/open-interest/BTC)
39. [mempool.space — Hashrate and difficulty adjustment](https://mempool.space/)
40. [PANews — daily liquidation tallies citing CoinGlass (9/14, 16, 17, 19, 20)](https://panews.io/)
41. [CoinDesk — Crypto bulls take a $570 million liquidation hit as Clarity Act fails (9/16)](https://www.coindesk.com/markets/2026/09/16/crypto-bulls-take-a-usd570-million-liquidation-hit-as-clarity-act-fails)
42. [The Daily Hodl — $547,000,000 in bitcoin and crypto liquidated as BTC crosses $81,000 (9/18)](https://dailyhodl.com/2026/09/18/547000000-in-bitcoin-and-crypto-liquidated-as-btc-price-crosses-81000/)
43. [alternative.me — Crypto Fear & Greed Index](https://alternative.me/crypto/fear-and-greed-index/)
44. [CoinMarketCap — Global metrics / historical snapshot 20260920](https://coinmarketcap.com/historical/20260920/)
45. [Coingabbar — Market snapshot, 2026-09-14](https://www.coingabbar.com/en/what-happened-in-crypto-market-today-clarity-act-fed-meeting)
46. [DefiLlama — Chains](https://defillama.com/chains)
47. [DefiLlama — Fees by chain](https://defillama.com/fees/chains)
48. [DefiLlama — Chain: NEAR](https://defillama.com/chain/near)
49. [L2Beat — Scaling summary](https://l2beat.com/scaling/summary)
50. [L2Beat — FAQ (TVS definition: canonically bridged + externally bridged + natively minted)](https://l2beat.com/faq)
51. [L2Beat — Total value secured](https://l2beat.com/layer2s/tvs)
52. [L2Beat — Official notice on the TVL→TVS rename (2025-01)](https://x.com/l2beat/status/1877363015860817958)
53. [DefiLlama Docs — Data definitions (chain TVL, protocol TVL, double counting)](https://docs.llama.fi/analysts/data-definitions)
54. [DefiLlama-Adapters Discussion #434 — Methodology for calculating chain TVL](https://github.com/DefiLlama/DefiLlama-Adapters/discussions/434)
55. [Cryptometer — Hyperliquid launches manual borrowing with HYPE and BTC collateral (9/18)](https://www.cryptometer.io/news/hyperliquid-launches-manual-borrowing-with-hype-and-btc-collateral/)
56. [Crypto Briefing — Hyperliquid sees $269M borrowed on first day of manual borrowing (9/18)](https://cryptobriefing.com/hyperliquid-sees-269m-borrowed-on-first-day-of-manual-borrowing-feature/)
57. [Crypto Times — Hyperliquid price surges 11% as HYPE hits new all-time high above $90 (9/18)](https://www.cryptotimes.io/2026/09/18/hyperliquid-price-surges-11-as-hype-hits-new-all-time-high-above-90/)
58. [growthepie](https://growthepie.xyz/)
59. [Chainspect — Chain TPS (ethereum / solana / tron / bsc / base / polygon / avalanche / arbitrum)](https://chainspect.app/)
60. [Blockchair — Ethereum / Tron](https://blockchair.com/ethereum)
61. [DefiLlama — Home (total TVL)](https://defillama.com/)
62. [DefiLlama — Protocols](https://defillama.com/protocols)
63. [DefiLlama — DEXs](https://defillama.com/dexs)
64. [DefiLlama — Perps](https://defillama.com/perps)
65. [DefiLlama — Fees](https://defillama.com/fees)
66. [DefiLlama — Revenue](https://defillama.com/revenue)
67. [DefiLlama — Stablecoins](https://defillama.com/stablecoins)
68. [DefiLlama — Protocol: Pendle](https://defillama.com/protocol/pendle)
69. [crypto.news — NFT sales fall 15% to $37.5M as Ethereum leads (9/19, citing CryptoSlam)](https://crypto.news/nft-sales-fall-15-to-37-5m-as-ethereum-leads/)
70. [CoinGecko NFT — CryptoPunks / BAYC / Pudgy Penguins](https://www.coingecko.com/en/nft/cryptopunks)
71. [NFTPriceFloor](https://nftpricefloor.com/)
72. [rwa.xyz — Tokenized treasuries](https://rwa.xyz/treasuries)
73. [DefiLlama — RWA](https://defillama.com/rwa)
74. [American Banker — SEC clears path for tokenized stock trading (9/17)](https://www.americanbanker.com/news/sec-clears-path-for-tokenized-stock-trading)
75. [CFTC — Press Release 9198-26 (Staff Letter 26-25, 9/17)](https://www.cftc.gov/PressRoom/PressReleases/9198-26)
76. [Hong Kong Policy Address 2026, Chapter 3 (9/16)](https://www.policyaddress.gov.hk/2026/en/chapter3.html)
77. [The Cryptonomist — Singapore stablecoin regulation (9/1, MAS consultation)](https://en.cryptonomist.ch/2026/09/01/singapore-stablecoin-regulation/)
78. [Herald Economy — Digital Asset Basic Act to be tabled in the September regular session](https://biz.heraldcorp.com/article/10868915)
79. [Dailian — Phase two of corporate real-name accounts](https://www.dailian.co.kr/news/view/1670133/)
80. [CryptoQuant Quicktake — Exchange BTC net inflows (September 2026)](https://cryptoquant.com/insights/quicktake)
81. [DefiLlama — Fees by chain: Robinhood Chain](https://defillama.com/fees/chain/robinhood-chain)
82. [CoinGecko Categories — AI / meme / gaming / DePIN / SocialFi / restaking / decentralized perpetuals / data availability](https://www.coingecko.com/en/categories)
83. [CoinGecko — individual coin pages (bittensor, render, venice-token, worldcoin, artificial-superintelligence-alliance, elizaos, dogecoin, pepe, shiba-inu, gala, immutable-x, ronin, iotex, akash-network, helium, pump-fun, antfun, eigencloud, ether-fi, renzo, hyperliquid, dydx-chain, gmx, celestia, avail)](https://www.coingecko.com/en/coins/)
84. [CNBC — King Charles hosts AI safety summit with Nvidia, OpenAI, Anthropic (9/17)](https://www.cnbc.com/2026/09/17/king-charles-nvidia-openai-anthropic-ai.html)
85. [Decrypt — AI token rally coverage (9/17)](https://decrypt.co/378504)
86. [Coinbase Markets — IOTX trading suspension notice (effective 9/23)](https://x.com/CoinbaseMarkets)
87. [Bithumb — GALA delisting notice (9/19)](https://feed.bithumb.com/)
88. [Roninchain Blog — Nomgar Clash launch (9/18)](https://blog.roninchain.com/)
89. [Cointelegraph — Grayscale's Zcash ETF files for 3-for-1 forward share split](https://cointelegraph.com/news/grayscales-zcash-etf-files-for-3-for-1-forward-share-split)
90. [CoinGecko — Crypto gainers and losers (7 days)](https://www.coingecko.com/en/crypto-gainers-losers)
91. [DefiLlama — Protocol: Spark / Derive / dYdX](https://defillama.com/protocol/derive)
92. [Coingabbar — Rain token unlock coverage](https://www.coingabbar.com/)
93. [CoinGecko — NEAR Protocol](https://www.coingecko.com/en/coins/near-protocol)
94. [CoinGecko — Derive](https://www.coingecko.com/en/coins/derive)
95. [CoinGecko — Render](https://www.coingecko.com/en/coins/render)
96. [DefiLlama — NEAR Intents (TVL, DEX volume, quarterly P&L, methodology)](https://defillama.com/protocol/near-intents)
97. [LeoDex — What is NEAR Intents? The cross-chain swap protocol explained](https://leodex.io/learn/near-intents/what-is-near-intents)
98. [NEAR — NEAR Intents official page](https://www.near.org/intents)
99. [Bybit Wiki — NEAR Intents: intent-based blockchain transactions](https://www.bybit.com/en/wiki/article/near-intents-intent-based-blockchain-transactions/)
100. [DefiLlama — Derive](https://defillama.com/protocol/derive)
101. [DefiLlama — Render Network BME](https://defillama.com/protocol/render-network-bme)
102. [DefiLlama — Chain: SUI / Aptos / Avalanche / Sei](https://defillama.com/chain/sui)
103. [DefiLlama — Protocol: GMX / dYdX / Hyperliquid](https://defillama.com/protocol/hyperliquid)
104. [StakingRewards — NEAR Protocol](https://www.stakingrewards.com/asset/near-protocol)
105. [TechCrunch — NEAR Protocol raises $21.6M from a16z and launches its MainNet (May 2020)](https://techcrunch.com/?p=1983280)
106. [BusinessWire — NEAR Protocol $21.6M round (2020-05-04)](https://www.businesswire.com/news/home/20200504005546/en/)
107. [CoinDesk — NEAR Protocol raises $350M (2022-04-06)](https://www.coindesk.com/business/2022/04/06/near-protocol-raises-350m)
108. [The Block — NEAR Protocol raises $350 million led by Tiger Global](https://www.theblock.co/post/140751)
109. [Bloomberg — NEAR Protocol $350M round (2022-04-06)](https://www.bloomberg.com/news/articles/2022-04-06/crypto-investing-near-protocol-raises-350-million-for-blockchain)
110. [crypto.news — NEAR crosses $70 million in confidential TVL, unlocking first incentive drop (9/17)](https://crypto.news/near-crosses-70-million-in-confidential-tvl-unlocking-first-incentive-drop/)
111. [The Block — Derive co-founder proposes 50% DRV token supply increase (2025-09-13)](https://www.theblock.co/news/ecosystems/2025-09-13-derive-co-founder-proposes-50-drv-token-supply-increase-diluting-holders-by-33-370527)
112. [KuCoin — Derive proposes V3 deployment and Derive Chain shutdown (9/14)](https://www.kucoin.com/news/flash/derive-proposes-v3-deployment-and-derive-chain-shutdown)
113. [CoinDesk — Decentralized rendering engine raises $30M as metaverse graphics go big (2021-12-21)](https://www.coindesk.com/business/2021/12/21/decentralized-rendering-engine-raises-30m-in-rndr-token-sale-as-metaverse-graphics-go-big)
114. [The Block — Render Network raises $30 million in token round](https://www.theblock.co/post/128266)
115. [Render Network Knowledge Base (BME structure, RNP-023)](https://know.rendernetwork.com/)
116. [DefiLlama — Unlocks](https://defillama.com/unlocks)
117. [DefiLlama — Unlocks calendar](https://defillama.com/unlocks/calendar)
118. [Deep Blue Alpha — Crypto September 2026: every event, deadline and catalyst](https://paragraph.com/@deepbluealpha/crypto-september-2026-every-event-deadline-and-catalyst-that-could-move-markets)
119. [Coingabbar — Crypto calendar September 2026](https://www.coingabbar.com/en/crypto-currency-news/crypto-calendar-september-2026-key-events-list)
120. [Newsquawk — Economic calendar, 21–25 September 2026](https://www.newsquawk.com/headlines/newsquawk-economic-calendar---21st-25th-september-2026)
121. [FXStreet — Forecasting the upcoming week: US PCE data, PMIs and Fedspeak (9/19)](https://www.fxstreet.com/analysis/forecasting-the-upcoming-week-us-pce-data-pmis-and-fedspeak-should-set-the-tone-202509191756)
122. [govtschemes.org — Government shutdown October 2026 (budget signing timeline)](https://govtschemes.org/government-shutdown-october-2026/)
123. [TRM Labs — 2026's biggest hack to date: attackers drained $319 million in bitcoin from Liquid Network](https://www.trmlabs.com/resources/blog/2026s-biggest-hack-to-date-attackers-drained-usd-319-million-in-bitcoin-from-liquid-network-then-returned-85-of-funds)
124. [Bloomberg — Bitcoin network says $320 million stolen in latest crypto hack (9/7)](https://www.bloomberg.com/news/articles/2026-09-07/bitcoin-network-says-320-million-stolen-in-latest-crypto-hack)
125. [rekt.news — Liquid Network REKT](https://rekt.news/liquid-network-rekt)
126. [CoinDesk — Crypto tech provider Haruko hit by cyberattack affecting 15 clients (9/18)](https://www.coindesk.com/business/2026/09/18/crypto-tech-provider-haruko-hit-by-cyberattack-affecting-15-clients-some-funds-lost)
127. [DefiLlama — Hacks tracker](https://defillama.com/hacks)

---

### Data Notes

- Unless otherwise marked, price and market data are as of 09:00 KST on September 21, 2026, and WoW changes are computed against the close at the same hour on September 14, 2026.
- DefiLlama does not publish a single seven-day change for aggregate DeFi TVL, so the figure used (+4.7%) was back-solved by TVL-weighting the individual seven-day changes of the top ten chains; the derivation is stated in the body.
- No official monthly tally of September 2026 crypto hack losses has been published by SlowMist, PeckShield, CertiK or any other firm, as the month has not closed. The approximately $330M cited in the body is a reference figure summing individual incidents registered in the DefiLlama Hacks tracker (Liquid Network $320M plus 16 other incidents totaling roughly $10.7M).
- Daily transaction counts by chain vary by a factor of four to six across sources depending on methodology (pure transactions versus inclusion of internal calls and token transfers). The body uses Chainspect's measured TPS conversion while noting the divergence against Blockchair.
- Some CoinGecko figures may differ at the decimal level depending on query timing within a given minute.

---

*Disclaimer: This report is for informational purposes only and is not investment advice. Nexus One is not a registered financial advisor; all investment decisions and responsibility rest with the investor. Data is as of the time of writing and may differ from real time.*
