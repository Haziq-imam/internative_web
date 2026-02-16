import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const EarningsFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            q: "What is earnings trading?",
            a: "Earnings trading involves positioning in stocks or options before, during, or after quarterly earnings announcements to profit from resulting price volatility and movements. Companies report financial results four times yearly, creating predictable periods of elevated volatility as markets react to revenue figures, earnings per share, guidance, and management commentary. Traders use various strategies including selling volatility to profit from post-announcement IV collapse, buying volatility betting on large moves, capturing pre-earnings momentum, or riding post-earnings drift. The fundamental challenge is binary uncertainty—outcomes cannot be predicted reliably, requiring statistical approaches rather than confident directional predictions."
        },
        {
            q: "How profitable is earnings trading?",
            a: "Earnings trading profitability varies dramatically by strategy and skill level, with approximately 75-85% of earnings traders losing money over time. Successful volatility sellers achieve 65-75% win rates but face occasional large losses when stocks gap beyond sold strike prices. Directional players run 40-55% win rates, requiring 2:1+ reward-risk ratios for profitability. Pre-earnings momentum traders achieve 50-65% win rates with disciplined entries and exits. Overall, skilled traders can generate 15-35% annual returns from earnings strategies, but most beginners lose 20-50% of dedicated earnings trading capital in their first 6-12 months due to misunderstanding IV dynamics, oversizing positions, or buying peak-IV options."
        },
        {
            q: "What is the best strategy for trading earnings?",
            a: "No single strategy is universally best because optimal approaches depend on market conditions and individual stocks. Volatility selling (credit spreads, iron condors) works best on stocks where implied moves exceed historical moves by 15-30%+, offering statistical edges through IV crush. Long volatility (straddles, strangles) suits stocks habitually underestimating moves, particularly in biotech or unpredictable sectors. Pre-earnings momentum avoids binary risk entirely, capturing anticipatory moves before announcements. For beginners, credit spreads on high-IV stocks offer the most forgiving learning curve—defined risk, statistical edge from IV crush, and no requirement for directional accuracy. As skills develop, combining multiple strategies across different stocks provides diversified exposure."
        },
        {
            q: "When should you enter earnings trades?",
            a: "Entry timing depends entirely on strategy type. Volatility sellers enter 3-7 days before earnings when IV peaks but hasn't reached absolute highs, providing optimal premium collection without excess time to expiration. Volatility buyers enter 1-3 days before earnings, minimizing IV premium paid while maintaining exposure to announcement moves. Pre-earnings momentum traders enter 10-20 days early, riding technical setups and positioning ahead of the event, then exiting 1-2 days before announcements to avoid binary risk. Post-earnings drift players enter the day after announcements or 2-3 days later once initial volatility settles. Never enter the day of earnings unless specifically trading that day's volatility—IV is maximum and unfavorable for buyers."
        },
        {
            q: "What is IV crush in earnings trading?",
            a: "IV crush refers to the rapid collapse of implied volatility immediately following earnings announcements, causing dramatic option value decreases even when stocks move substantially. Before earnings, uncertainty about results drives IV to elevated levels—options become expensive as markets price in potential large moves. Once results release, uncertainty resolves and IV typically drops 30-70% within hours regardless of actual price movement. This means option buyers need the stock to move significantly MORE than expected just to break even, as declining IV erodes option value faster than favorable price movement builds it. IV crush is why buying options the day before earnings is mathematically disadvantageous despite seemingly offering maximum exposure to moves."
        },
        {
            q: "How do you calculate expected move for earnings?",
            a: "Expected move calculates the market's consensus prediction of post-earnings price range using at-the-money straddle prices. The simplest formula: Expected Move ≈ ATM Straddle Price. For a stock at $100, if the ATM $100 call and $100 put expiring after earnings together cost $8, the expected move is approximately ±$8 or ±8%. This represents roughly one standard deviation—the market implies 68% probability the stock closes within $92-$108 after earnings. More precise calculations adjust for weekly vs. monthly options and days to expiration, but straddle price provides a reliable approximation. Comparing expected moves to historical average moves from past 8-12 earnings identifies whether current options overprice or underprice anticipated volatility."
        },
        {
            q: "Should you buy or sell options before earnings?",
            a: "Statistically, selling options before earnings (through credit spreads or iron condors) offers better mathematical expectation than buying. Studies show actual moves fall short of implied moves approximately 65-75% of the time, meaning markets consistently overestimate post-earnings volatility. Sellers collect this overpriced premium, profiting from IV crush even when directionally wrong, provided moves stay within expected ranges. Buying options before earnings fights statistical headwinds—you're paying peak IV prices and need exceptional moves to overcome IV crush. However, certain stocks habitually exceed implied moves, creating selective buying opportunities. The key: only buy when historical data shows consistent pattern of moves exceeding expectations by 30-50%+, and size positions for likely total losses."
        },
        {
            q: "What is the difference between selling before vs. after earnings?",
            a: "Selling options before earnings (as volatility seller) versus selling after earnings (as volatility buyer who closes) represent entirely different strategies. Selling before earnings involves collecting inflated IV premium 3-7 days pre-announcement, holding through the event, and closing next day after IV crush captures profit. This requires defined-risk structures (spreads) due to overnight gap risk. Selling after earnings happens when option buyers who entered 1-3 days before announcements close their positions post-announcement to capture profits or cut losses. Buyers who successfully predicted large moves sell afterward to realize gains. The timing difference reflects opposing strategic approaches—sellers profit from overestimated volatility collapsing; buyers profit from underestimated volatility expanding into actual large moves."
        },
        {
            q: "Can you make money trading earnings consistently?",
            a: "Yes, but only 15-25% of earnings traders achieve long-term consistency, and it requires substantial skill, discipline, and capital. Consistent profitability demands: strict position sizing (0.5-1.5% per trade), statistical approach selecting only highest-probability setups rather than trading every earnings, understanding IV dynamics thoroughly, using defined-risk structures exclusively, maintaining detailed performance tracking to identify profitable vs. unprofitable patterns, and psychological control to execute plans without emotional deviation. Most traders fail because they overtrade low-quality setups, missize positions, misunderstand IV crush, or lack discipline to follow statistical edges through inevitable losing periods. Realistic expectations: skilled earnings traders generate 15-35% annual returns, not 100%+ as promoters claim."
        },
        {
            q: "What are the risks of earnings trading?",
            a: "Primary risks include overnight gap risk where stocks move 15-30%+ beyond stop-losses, making planned exits impossible; IV crush destroying option buyer value even with correct directional predictions; binary outcome unpredictability where thorough analysis still fails because market reactions don't align with logical expectations; concentrated position risk from brief high-volatility windows; and correlation risk when multiple earnings trades in similar sectors move against you simultaneously. Defined-risk strategies (spreads) mitigate but don't eliminate these risks—maximum losses still occur. Additional risks: conference call secondary moves reversing initial reactions, pre-market/after-hours execution challenges with wide spreads, and psychological stress of holding through binary events. These concentrated risks explain why earnings position sizing must be 33-50% smaller than normal trades."
        },
        {
            q: "How do earnings affect stock prices?",
            a: "Earnings affect stock prices through the relationship between actual results versus analyst expectations and market sentiment. Stocks don't simply rise on 'good' earnings or fall on 'bad' ones—they move based on how results compare to consensus estimates and how guidance frames future expectations. A company beating earnings by 10% might fall if guidance disappoints or if the beat was expected. Another might miss estimates by 5% but rally if results weren't as bad as feared or if guidance improves. The magnitude of price moves correlates with surprise magnitude: results matching estimates cause 2-5% moves, 10% earnings surprises create 6-12% moves, and extreme surprises (30%+ beats/misses) generate 15-30% moves. Sector trends amplify or dampen individual reactions."
        },
        {
            q: "What is post-earnings announcement drift (PEAD)?",
            a: "Post-earnings announcement drift is the tendency for stocks to continue moving in the direction of their initial earnings reaction for weeks or months afterward. Academic research demonstrates that stocks gapping up 10%+ on strong earnings frequently continue rising 3-8% over the subsequent 30-60 days as institutional money gradually repositions based on new information. Similarly, earnings disappointments often continue declining as selling pressure persists. PEAD occurs because earnings surprises take time to be fully priced into stocks—immediate reactions capture headlines, but deeper analysis and repositioning occurs over weeks. The phenomenon works most reliably in small-cap and mid-cap stocks where price discovery is slower. Traders exploit PEAD by entering 1-3 days after earnings once initial volatility settles, holding 30-60 days to capture drift."
        },
        {
            q: "Should you hold stocks through earnings?",
            a: "Generally no, unless you're specifically implementing an earnings trading strategy with appropriate risk management. Holding stock positions through earnings exposes you to overnight gaps that can exceed 10-20% in either direction based on results you cannot reliably predict. Even fundamentally sound companies face 8-15% overnight drops on guidance disappointments or sector weakness. If holding for long-term investment reasons, earnings volatility represents unavoidable risk that averages out over time. However, if swing trading or position trading, the prudent approach: exit 80-100% of positions 1-2 days before earnings, avoiding binary event risk entirely. For earnings-specific trades, only hold through announcements when using defined-risk option spreads capping maximum losses regardless of gap magnitude."
        },
        {
            q: "What is an earnings straddle strategy?",
            a: "An earnings straddle involves simultaneously buying both a call and a put option at the same strike price (typically at-the-money) and same expiration date. This direction-neutral strategy profits if the stock moves significantly in either direction—up or down—by an amount exceeding the total premium paid. Straddles work when actual moves exceed expected moves (implied volatility underpriced reality). The challenge: IV crush after earnings announcements erodes option value rapidly, meaning the stock must move substantially beyond the expected move just to break even. For a $100 stock with an $8 straddle cost and 8% expected move, the stock must move beyond $92 or $108 for profits. Most straddle buyers lose because stocks move 4-7% (significant) but not enough to overcome the $8 premium paid during peak IV."
        },
        {
            q: "How far out should earnings options expire?",
            a: "Optimal expiration depends on strategy. For volatility sellers, use options expiring 3-10 days after earnings—close enough that time decay helps but far enough to avoid gamma risk and allow IV crush to occur. Weekly options expiring the Friday after earnings work well. For volatility buyers (straddles/strangles), prefer the nearest expiration after earnings—often the same weekly expiration volatility sellers use—minimizing premium paid for time value while maintaining full announcement exposure. For pre-earnings momentum plays, use options expiring 2-4 weeks out, allowing time for trends to develop without excessive theta decay. Avoid monthly options expiring 30+ days after earnings when trading short-term events—you pay for time you don't need and that decays against you."
        },
        {
            q: "What is an iron condor for earnings?",
            a: "An iron condor is a defined-risk, neutral options strategy involving four options: sell an out-of-the-money put, buy a further out-of-the-money put (creating a bull put spread), sell an out-of-the-money call, and buy a further out-of-the-money call (creating a bear call spread). For earnings, iron condors profit when stocks move less than expected, allowing sold options to expire worthless as IV crushes. Structure placement outside the expected move: if expected move is ±8% on a $100 stock, sell the $92 put and $108 call, buying protection at $87 put and $113 call. Maximum profit equals premium collected ($200-400 typical); maximum loss equals spread width minus credit ($300-500). Win rates run 65-75%, with profits accumulating from frequent small wins offset by occasional larger losses."
        },
        {
            q: "Can you trade earnings with a small account?",
            a: "Technically yes, but realistic profitability is challenging with accounts under $10,000-$15,000. Conservative earnings position sizing (0.5-1.5% per trade) on a $5,000 account means $25-75 risk per trade. Credit spreads might offer $50-150 max profit, but commissions on four-leg iron condors ($2-8 round-trip depending on broker) consume 15-30% of potential gains. Small accounts also cannot diversify across 5-8 earnings plays simultaneously, creating concentrated risk. Additionally, defined-risk strategies require 4-leg option approval many small accounts lack. If trading earnings with sub-$10K accounts, use single-leg strategies (vertical spreads), focus on 1-2 highest-conviction plays rather than diversification, and ensure commission structure supports small trades. Better approach: build capital to $15K+ before active earnings trading."
        },
        {
            q: "What are the best platforms for earnings trading?",
            a: "For scanning and research, Earnings Whisper ($30-100/month) provides earnings calendars, historical reactions, and whisper numbers. Barchart ($20-$40/month) and MarketChameleon ($60-90/month) offer implied vs. actual move comparisons and strategy backtests. For options execution and analysis, ThinkorSwim (free with TD Ameritrade) leads with comprehensive earnings tools, IV analysis, and strategy builders. Interactive Brokers provides excellent execution for active traders with low commissions. For charting, TradingView integrates well with earnings calendars. Free options: FinViz tracks earnings dates, ThinkorSwim's basic earnings tools, and Yahoo Finance calendars. Premium platforms aren't necessary for beginners—master free tools first, upgrade only after demonstrating consistent profitability."
        },
        {
            q: "Should beginners trade earnings?",
            a: "Absolutely not. Beginners should have 6-12 months of profitable options trading experience before attempting earnings strategies. The combination of IV dynamics, binary overnight gaps, complex spread structures, and concentrated risk creates too many simultaneous challenges for new traders. Even experienced stock traders need months understanding options Greeks, IV behavior, and spread mechanics before earnings trades. The learning curve is steep and mistakes are expensive—a single poorly sized earnings trade can lose 10-20% of account value overnight. Instead, beginners should master: stock swing trading for market understanding, covered calls and cash-secured puts for basic options mechanics, vertical spreads on non-earnings trades for spread experience, then transition to earnings trading after demonstrating consistent profitability across 100+ options trades."
        },
        {
            q: "Can you trade earnings in a retirement account?",
            a: "Yes, but with significant limitations depending on account type and broker. Traditional and Roth IRAs at most brokers permit options trading including defined-risk spreads (credit spreads, iron condors) ideal for earnings strategies. However, IRA accounts typically restrict naked option selling and margin usage, limiting strategies to cash-secured or defined-risk approaches. This actually benefits earnings traders by forcing proper risk management—defined-risk spreads are safer than naked positions anyway. 401(k) and other employer-sponsored accounts rarely permit options trading at all. Check your specific broker's IRA options levels: Level 2 (long calls/puts, covered calls) enables basic directional plays; Level 3 (spreads) unlocks volatility selling strategies. Tax advantages of IRAs benefit short-term earnings trading since frequent trades generate ordinary income in taxable accounts."
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((item, i) => (
                            <div key={i} className={`bg-[#0A051A] border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/50 shadow-neon' : 'border-white/5 hover:border-white/10'}`}>
                                <button onClick={() => toggleAccordion(i)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                                    <span className="text-lg font-bold text-white pr-4">{item.q}</span>
                                    <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openIndex === i ? 'bg-primary text-white' : 'bg-white/5 text-text-muted'}`}>
                                        {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-text-secondary leading-relaxed text-sm font-medium">{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default EarningsFAQ;
