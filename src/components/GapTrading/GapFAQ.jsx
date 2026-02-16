import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const GapFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            q: "What is gap up and gap down in stocks?",
            a: "Gap up occurs when a stock's opening price exceeds the previous day's closing price, creating an upward price void on charts. Gap down happens when opening price falls below the previous close. These gaps represent price ranges that never traded, typically caused by overnight news, earnings releases, analyst actions, or market developments. Gaps of 2-5% signal moderate events while 5-10%+ indicate major catalysts."
        },
        {
            q: "How often do gaps fill?",
            a: "Statistical analysis shows approximately 60-75% of all price gaps eventually fill, though timeframes vary dramatically. Common gaps under 2% fill 85-95% of the time within 1-3 days. Medium gaps of 3-6% fill 60-70% over 3-10 days. Large gaps exceeding 6-8% fill only 40-50%, often requiring weeks or months. Breakaway gaps starting new trends fill least frequently (30-40%), while exhaustion gaps ending trends fill most often (70-80%)."
        },
        {
            q: "What is the best strategy for trading gaps?",
            a: "No single strategy works universally—optimal approaches depend on gap characteristics. For common gaps under 2% without catalysts, fading the gap achieves 60-70% win rates. For breakaway gaps above 5% with strong catalysts and volume, gap-and-go works better at 45-55% win rates with larger gains. Opening range breakout combines both approaches. Match your strategy to the specific gap type rather than forcing one method always."
        },
        {
            q: "How do you scan for gap up/gap down stocks?",
            a: "Scan pre-market from 7:00-9:30 AM ET using platforms like ThinkorSwim or Trade Ideas. Set criteria: minimum gap size 2-3%, pre-market volume 50,000-100,000+ shares, price range $10-$100, average daily volume above 500,000. Run scans at 7:00 AM, 8:00 AM, and 9:00 AM. Investigate each candidate: check news for catalysts, compare pre-market volume to average, note key levels, and classify gap type."
        },
        {
            q: "Can you make money trading gaps?",
            a: "Yes, but approximately 70-80% of gap traders lose money due to poor strategy selection, timing errors, or inadequate risk management. Successful gap traders achieve 15-30% annual returns through disciplined execution and proper position sizing. Win rates vary: gap fading achieves 55-65%, gap-and-go runs 40-55%. Profitability requires maintaining 1.5-2.5:1 reward-risk ratios, quick exits on non-performing trades, and conservative 1-1.5% position sizing."
        },
        {
            q: "What causes stocks to gap up or down?",
            a: "Gaps result from significant overnight events creating supply-demand imbalances. Primary causes include: quarterly earnings reports differing from estimates, analyst upgrades/downgrades from major firms, FDA approvals or regulatory decisions, acquisition announcements, management changes or guidance revisions, sector-affecting news, and broad market movements. Catalyst strength correlates with gap persistence—major earnings beats produce sustainable gaps while minor analyst comments create gaps that quickly fill."
        },
        {
            q: "Should you buy stocks that gap up?",
            a: "Sometimes, but only with specific conditions. Buy gap ups when: gap exceeds 4-5% with strong catalyst (earnings beat, FDA approval), pre-market volume exceeds 100,000 shares showing institutional support, technical setup suggests continuation, and first 15-30 minutes shows continued buying. Avoid buying gap ups lacking catalysts, showing declining pre-market volume, gapping into major resistance, or occurring late in extended uptrends. Use conservative position sizing (1-1.5% risk) with stops below pre-market support."
        },
        {
            q: "What percentage is considered a significant gap?",
            a: "Gap significance depends on stock volatility and catalyst context. General guidelines: under 1% represents noise, 2-3% signals moderate events worth analyzing, 3-5% indicates substantial catalysts, 5-8% represents major developments, and above 10% suggests transformational news. Compare gaps to the stock's average true range (ATR)—a 3% gap on a stock with 1% ATR is significant, while 3% on a 5% ATR stock is routine. Also compare to historical gap behavior for that specific stock."
        },
        {
            q: "How long do gap fills take?",
            a: "Gap fill timeframes vary widely. Small gaps (1-3%) fill within 1-5 trading days, often same-day or next-day. Medium gaps (3-6%) require 3-10 days on average. Large gaps (6%+) take weeks to months if they fill at all. Gap type matters more than size: exhaustion gaps fill fastest (1-3 days), common gaps fill reliably within a week, continuation gaps may not fill until the trend ends (weeks to months), and breakaway gaps often never fill or take months."
        },
        {
            q: "What is gap and go trading strategy?",
            a: "Gap and go involves buying stocks gapping up or shorting stocks gapping down immediately at or shortly after market open, riding momentum in the gap direction. Works best on gaps exceeding 4-5% with clear catalysts, pre-market volume above 100,000 shares, and technical setups suggesting continuation. Entry occurs at market open or on breakouts above pre-market highs. Stop-losses sit just beyond entry. Profit targets range 5-10% with time stops forcing exits by 10:30-11:00 AM. Win rates run 40-55%."
        },
        {
            q: "Do gap downs usually recover?",
            a: "Gap downs recover (fill the gap) approximately 60-70% of the time eventually, though timeframes vary. Small gap downs under 2% recover 80-85% of the time, often same-day or within 2-3 days. Medium gap downs of 3-6% recover about 60-65% over 3-10 days. Large gap downs exceeding 6% recover only 40-50%, often requiring weeks or months. Recovery probability depends on gap cause—gap downs from temporary concerns recover faster than those from fundamental deterioration. Don't assume all gap downs will recover."
        },
        {
            q: "Should you hold gap positions overnight?",
            a: "Generally no, unless specifically position trading. The gap trading edge comes from intraday price action in the 30-90 minutes after market open when gaps resolve. Holding overnight introduces new overnight gap risk, eliminates the statistical edge, and ties up capital. Gap-and-go trades target quick 5-10% profits within 1-2 hours then exit. Gap fade trades target the gap fill by end of day. Exception: if a gap creates a breakaway setup starting a major trend, transitioning to a swing trade (holding 3-7 days) makes sense."
        },
        {
            q: "What are the risks of gap trading?",
            a: "Primary risks include: extreme opening volatility creating 2-5%+ position swings in minutes, execution slippage during volatile opens (fills 10-30 cents worse than expected), false breakouts where gaps reverse immediately, low win rates (40-60%) requiring comfort with frequent losses, overnight gap risk if holding positions, overtrading because gaps occur daily, and sector correlation where multiple gaps move together. These concentrated risks explain why gap position sizing must be conservative (1-1.5% vs 2-3% normal)."
        },
        {
            q: "How much money do you need for gap trading?",
            a: "Minimum realistic capital is $15,000-$20,000, though $25,000+ provides pattern day trader unrestricted access and better flexibility. With conservative gap sizing at 1-1.5% risk per trade, a $15,000 account risks $225 per trade. Using typical gap stop-losses of $0.50-$1.50 per share allows position sizes of 150-450 shares. Accounts of $25,000+ enable 2-3 diversified gap positions simultaneously without exceeding 5% total portfolio risk. Accounts under $10,000 struggle with positions too small for meaningful profits after commissions."
        },
        {
            q: "Should beginners start with gap trading?",
            a: "No, gap trading is unsuitable for traders with less than 6 months of profitable day trading or swing trading experience. The strategy combines multiple complexities: pre-market analysis, rapid decision-making during volatile opens, catalyst evaluation, pattern recognition, and emotional control during rapid price swings. Start with basic swing trading to develop chart reading and risk management, then progress to simple day trading. After 6-12 months of consistent profitability, consider adding gap trading. Paper trade gap strategies for 1-2 months before using real capital."
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

export default GapFAQ;
