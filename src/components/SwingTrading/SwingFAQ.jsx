import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const SwingFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            q: "What is swing trading in stocks?",
            a: "Swing trading is a medium-term strategy where traders hold stock positions for 2 days to 6 weeks, seeking to profit from price swings within larger trends. Unlike day traders who close all positions before market close, swing traders hold overnight and through weekends, accepting gap risk for larger profit potential. The approach focuses on capturing intermediate price moves using technical analysis—chart patterns, support/resistance, and momentum indicators—to time entries and exits. Swing traders check positions twice daily rather than monitoring constantly, making this strategy compatible with full-time employment while offering more active participation than long-term investing."
        },
        {
            q: "How profitable is swing trading stocks?",
            a: "Swing trading can be profitable for disciplined traders, but 80-85% of swing traders lose money or quit. Successful traders typically achieve 45-55% win rates, meaning nearly half their trades lose money. Profitability comes from maintaining reward-to-risk ratios of 2:1 or better—average winners significantly exceed average losers. A trader winning 50% of trades with 2.5:1 reward-risk generates consistent profits despite losing more trades than they win. However, most beginners fail because they exit winners too early, hold losers too long, use inadequate position sizing, or lack patience for high-probability setups. Realistic annual returns for successful swing traders range 15-40% after developing consistent skill over 6-18 months."
        },
        {
            q: "What is the best strategy for swing trading stocks?",
            a: "No single strategy is universally best because different approaches work in different market conditions. Trend following works best in strong trending markets, entering pullbacks to support during uptrends. Breakout trading suits consolidating markets preparing for directional moves. Range trading profits during sideways markets with clear support and resistance. The most successful traders adapt their approach to current market conditions rather than forcing one strategy always. However, for beginners, trend-following with pullback entries offers the highest probability: identify established uptrends, wait for pullbacks to moving average support, enter on signs of resumption with stops below recent lows. This provides clear rules and statistical edges."
        },
        {
            q: "How much money do you need to start swing trading?",
            a: "Minimum realistic capital for swing trading is $5,000-$10,000, though $15,000-$25,000 provides better flexibility. Unlike day trading requiring $25,000 under Pattern Day Trader rules, swing trading avoids these restrictions by making fewer than 4 round-trip trades per 5-day period. With $5,000 risking 2% per trade ($100), and using 5% stops, position sizes equal $2,000. While small, this allows 2-3 simultaneous diversified positions. Accounts under $3,000 struggle generating meaningful dollar profits even when percentage gains are good. Larger accounts enable better diversification, risk management, and psychological comfort with position volatility. Starting with $10,000+ is recommended for sustainable swing trading."
        },
        {
            q: "Can you swing trade with a full-time job?",
            a: "Yes, swing trading is one of the few active trading strategies compatible with full-time employment. The multi-day holding period doesn't require constant monitoring during market hours. Traders typically spend 15-30 minutes before market open reviewing positions, news, and overall market conditions, then 15-30 minutes before close checking positions and planning next-day actions. Setting price alerts on positions allows monitoring without constant chart watching. Placing bracket orders (stop-loss and profit target orders simultaneously) automates risk management. The challenge is avoiding checking positions constantly from work, which can lead to emotional overtrading. Discipline to check only twice daily improves rather than hurts performance."
        },
        {
            q: "What are the best indicators for swing trading?",
            a: "The most effective indicators for swing trading combine trend identification with momentum timing. Moving averages (20-day, 50-day, 200-day) identify trend direction and provide support/resistance. RSI (14-period) shows momentum strength and generates entry signals on pullbacks when RSI bounces from 30-40. MACD confirms trend changes through crossovers and zero-line signals. Volume verifies breakouts and confirms pullback strength. No single indicator works alone—successful traders combine 2-3 complementary indicators. A common combination: 20/50-day moving averages for trend, RSI for entry timing, MACD for confirmation, and volume for validation. Multi-timeframe analysis using these indicators on both daily and weekly charts improves signal reliability significantly."
        },
        {
            q: "What are the best stocks to swing trade?",
            a: "Best stocks for swing trading combine high liquidity (500,000-1,000,000+ daily volume), moderate volatility (beta 1.2-2.0), and clear technical patterns. Large-cap technology leaders (AAPL, MSFT, NVDA, TSLA, META) offer tight spreads, institutional participation, and sufficient daily movement ($3-$15 ranges). Mid-cap growth stocks in technology, biotech, and consumer discretionary sectors provide larger percentage moves than large-caps while maintaining adequate liquidity. Stocks with scheduled catalysts—earnings in 2-4 weeks, product launches, FDA decisions—often develop pre-event trends worth trading. Avoid low-volume stocks under 300,000 daily shares, extremely low-priced stocks under $5, and highly volatile penny stocks with unpredictable behavior."
        },
        {
            q: "How many trades should I make per week swing trading?",
            a: "Quality trumps quantity in swing trading. Successful swing traders typically make 2-5 new position entries per week, totaling 8-20 trades monthly. This allows focus on high-probability setups meeting strict criteria rather than forcing marginal trades. Some weeks produce no qualified setups—patience to wait prevents bad trades. Other weeks offer 6-8 excellent opportunities. Traders making 30-40 trades monthly often force positions that don't meet criteria, reducing win rates and returns. Track entry criteria compliance: if you're making more than 5 entries weekly, audit whether all meet your documented trading plan standards or if you're lowering standards to stay active. Less is often more in swing trading."
        },
        {
            q: "What is considered a good win rate for swing trading?",
            a: "Realistic swing trading win rates range 45-55% for experienced traders using proper strategies and risk management. Win rates above 60% are achievable but typically involve smaller reward-to-risk ratios that may not generate superior returns. The critical metric isn't win percentage alone but the combination of win rate and average win-to-loss ratio. A 45% win rate with 2.5:1 reward-risk generates better returns than a 60% win rate with 1:1 reward-risk. New traders often achieve 30-40% win rates initially while learning. Professional traders sometimes accept 40-45% win rates when targeting large reward-to-risk setups (3:1 or better). Focus on improving both win rate AND reward-risk simultaneously rather than obsessing over win percentage alone."
        },
        {
            q: "How long should you hold a swing trade?",
            a: "Hold durations depend on the specific setup and how the trade develops, not predetermined timeframes. Trend-following trades might hold 1-4 weeks capturing major moves. Breakout trades often complete in 5-15 days. Catalyst trades held for pre-event momentum typically last 1-3 weeks before the event. The key is exiting when the technical thesis is invalidated: stop-loss hit, profit target reached, or momentum signals weakening—rather than arbitrary calendar periods. Time-based exits apply when trades fail to progress: if a position hasn't moved favorably within 7-10 days, consider exiting to free capital for active setups. Let winners run until technical signals suggest exits; cut losers quickly when stops trigger."
        },
        {
            q: "Should swing traders use stop-loss orders?",
            a: "Yes, stop-loss orders are absolutely essential for swing trading success and account survival. Stops limit maximum losses on individual trades, preventing single catastrophic losses from destroying accounts. Professional swing traders place stops immediately upon entry, not as later considerations. Stop placement uses technical levels: below recent swing lows for longs, below breakout levels for breakout trades, or 1.5-2x ATR below entry. Percentage stops (5-8% for stable stocks, 8-12% for volatile ones) work when clear technical levels don't exist. Mental stops—planning to exit if price hits a level but not placing actual orders—fail because emotions override discipline during losses. Always use actual stop-loss orders placed with your broker."
        },
        {
            q: "What is better: swing trading or day trading?",
            a: "Neither is inherently better—each suits different personalities, schedules, and capital levels. Swing trading works better for part-time traders with full-time jobs, smaller accounts ($5,000-$25,000), and those preferring patience over rapid decisions. Day trading suits full-time traders with $25,000+ capital who thrive on constant action and can monitor markets 6+ hours daily. Swing trading offers larger profit per trade but fewer trades; day trading offers more frequent smaller gains. Success rates are similarly low (10-20% profitable) for both. Choose based on your available time, capital, risk tolerance, and psychological preferences rather than assumed superiority of either approach. Many successful traders eventually do both depending on market conditions."
        },
        {
            q: "Can you live off swing trading?",
            a: "Living off swing trading full-time is possible but requires substantial capital, consistent profitability over 1-2 years, and realistic expectations. To generate $60,000 annual income, assuming 20% annual returns, requires $300,000 trading capital. Most swing traders cannot achieve consistent 20% returns—10-15% is more realistic for skilled traders, requiring $400,000-$600,000 capital for meaningful income. Additionally, swing trading income varies monthly: some months generate substantial gains, others show losses or breakeven. Financial security requires 6-12 months of living expenses saved separately from trading capital. Most successful swing traders maintain other income sources (employment, investing, businesses) rather than depending solely on trading for survival. Build proven track record before attempting full-time trading."
        },
        {
            q: "What are common swing trading mistakes?",
            a: "The most common mistakes include: entering without defined exits, letting emotions override trading plans, chasing stocks after major moves, ignoring overall market trend, using inadequate position sizing, holding losing trades past stops hoping for recovery, taking profits too early from fear, overtrading during slow periods, failing to adapt position sizes to volatility, and trading correlated positions creating concentrated risk. Another frequent error is using the same dollar position size for all trades regardless of stop-loss distance, creating wildly inconsistent risk per trade. Successful traders document all trades, identify recurring mistakes through journal review, and systematically address weaknesses through rule modifications and discipline improvements rather than random changes after each trade."
        },
        {
            q: "Should swing traders hold through earnings?",
            a: "Generally no, especially for newer traders. Earnings create binary outcomes—stocks can gap 10-25% in either direction overnight regardless of technical setup strength. This binary risk makes holding through earnings closer to gambling than calculated risk-taking. Professional approaches: exit positions entirely 1-2 days before earnings, taking whatever profit or loss exists; reduce position size by 50-75% before earnings, holding only a small remainder for potential big moves; or avoid entering trades on stocks with earnings within the planned holding period. Some advanced traders specifically trade earnings using defined-risk strategies (options spreads), but stock swing traders generally exit before earnings to avoid unpredictable gaps destroying otherwise good trades."
        },
        {
            q: "What timeframes should swing traders analyze?",
            a: "Swing traders should analyze three timeframes for complete context: weekly charts for overall trend direction and major support/resistance, daily charts for specific entry/exit timing and pattern identification, and 4-hour or 1-hour charts for refined entry pricing within the day. The weekly chart determines trade direction—only take long trades in weekly uptrends. The daily chart identifies specific patterns: pullbacks, breakouts, consolidations. The intraday chart times exact entries during the trading day. This multi-timeframe approach prevents traders from taking long positions in downtrending stocks or short positions in uptrending stocks. Alignment across all three timeframes produces highest-probability setups, though requiring patience for everything to align simultaneously."
        },
        {
            q: "How do taxes affect swing trading profits?",
            a: "Swing trading generates primarily short-term capital gains (positions held under 1 year) taxed at ordinary income rates up to 37% federally plus state taxes. A trader earning $50,000 from swing trading might pay $12,000-$18,500 in federal taxes (24-37% bracket) plus state taxes, reducing net gains to $31,500-$38,000. This contrasts with long-term capital gains (positions held over 1 year) taxed at preferential rates of 0-20%. Frequent trading creates dozens or hundreds of taxable events annually, requiring detailed record-keeping and potentially higher accounting costs. Traders can offset gains with losses (tax-loss harvesting), but wash-sale rules prohibit deducting losses if you repurchase the same security within 30 days. Consult tax professionals for optimization strategies specific to your situation."
        },
        {
            q: "Can beginners succeed at swing trading?",
            a: "Beginners can eventually succeed at swing trading but should expect 6-18 months of learning before consistent profitability. Success requires developing pattern recognition through watching hundreds of setups, understanding which technical signals actually matter versus noise, building emotional control to follow trading plans during stress, and experiencing enough losses to respect risk management. Most beginners fail by starting with real money too early, using inadequate capital, lacking documented trading plans, or quitting after initial losses. The path to success: paper trade for 2-3 months minimum, start with very small position sizes when transitioning to real money, maintain detailed trading journals, focus on 1-2 simple strategies rather than learning everything, and expect gradual skill development rather than immediate profits."
        },
        {
            q: "What software or platforms are best for swing trading?",
            a: "For scanning and research, ThinkorSwim (free with TD Ameritrade), Finviz Elite ($40/month), or Trade Ideas ($75-$200/month) provide robust capabilities. For charting and analysis, ThinkorSwim, TradingView ($12.95-$59.95/month), or eSignal suit swing traders. For execution, major brokers like TD Ameritrade, E*TRADE, Interactive Brokers, or Fidelity offer reliable platforms with mobile access for position monitoring. Free options include ThinkorSwim and free TradingView charts. Premium options like Trade Ideas offer AI-powered scanning but aren't necessary for beginners. Start with free tools; upgrade to premium platforms only after demonstrating consistent profitability with basic tools. Expensive software doesn't create success—discipline and skill do."
        },
        {
            q: "What is the difference between swing trading and position trading?",
            a: "The primary difference is holding period and timeframe analysis. Swing trading holds 2 days to 6 weeks using daily and weekly charts, targeting 5-20% moves during intermediate trend swings. Position trading holds 6 weeks to 12 months using weekly and monthly charts, targeting 30-100%+ moves during major trends or fundamental revaluations. Swing traders make 8-20 trades monthly; position traders make 3-8 trades annually. Swing trading relies primarily on technical analysis with fundamental screening. Position trading emphasizes fundamental analysis—company growth, industry trends, economic cycles—with technical analysis for entry/exit timing. Position trading suits patient investors wanting more active involvement than buy-and-hold but less frequent trading than swing trading. Both require discipline but different psychological approaches to holding periods."
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

export default SwingFAQ;
