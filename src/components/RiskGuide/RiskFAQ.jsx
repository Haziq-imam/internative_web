import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import Accordion from '../ui/Accordion';

const RiskFAQ = () => {
    const faqItems = [
        {
            title: "What is an acceptable drawdown when following trading signals?",
            content: "Acceptable maximum drawdown varies by strategy and personal tolerance but professional algo traders aim to keep maximum drawdown below 15-20% of account equity. Conservative signal followers targeting long-term sustainability should accept 15-25% maximum drawdowns as normal, planning risk management accommodating these inevitable periods. Aggressive traders pursuing higher returns through riskier signals might tolerate 25-35% drawdowns, though psychological stress and recovery difficulty escalate substantially. Drawdowns exceeding 40-50% become catastrophic requiring 67-100% gains recovering, making continuation extremely difficult. Most signal followers experiencing 40%+ drawdowns abandon trading entirely rather than implementing proper risk management preventing recurrence."
        },
        {
            title: "How do I calculate position size for 1% risk?",
            content: "Calculate position size using formula: (Account Value × Risk Percentage) ÷ Stop-Loss Distance = Position Size. On $10,000 account risking 1% ($100), if signal recommends $50 stock with stop-loss at $48 (creating $2 stop distance), maximum position size equals $100 ÷ $2 = 50 shares. For options, if signal recommends call option at $3.50 entry with $2.50 stop-loss ($1.00 stop distance per contract), maximum position equals $100 ÷ $100 (per contract stop distance) = 1 contract maximum. Many beginners calculate position sizes based on available capital rather than acceptable risk, using entire account buying power creating catastrophic leverage. Always calculate from risk tolerance backward to position size, not from capital availability forward."
        },
        {
            title: "Should I risk more on high-confidence signals?",
            content: "No—maintain consistent 1-2% position sizing across all signals regardless of perceived confidence or setup quality. The temptation to risk 3-5% on \"can't miss\" setups proves one of the fastest paths to account destruction as even highest-probability setups fail 20-40% of the time. Consistent risk per trade keeps drawdowns manageable and returns more stable. If certain signals genuinely offer superior probability, express confidence through position allocation (taking the signal when others might skip) rather than position size increases. Professional traders maintain rigid position sizing discipline recognizing perceived confidence often proves illusory—what feels certain before entry frequently becomes painful loss after."
        },
        {
            title: "How many consecutive losses should I expect?",
            content: "Even quality 65% win rate signals experience 8-12 consecutive losses periodically through statistical clustering, requiring mental and capital preparation. If you've tested your trading strategy, you should know the expected drawdowns. If your current drawdown falls within your backtesting range, it's a normal part of the process. Most signal providers publish maximum consecutive loss statistics in verified track records—review these before subscribing understanding worst-case scenarios you'll encounter. Beginners typically underestimate losing streak frequency and duration, expecting 2-3 maximum losses before winners resume. Reality involves periods where 7-9 of 10 signals lose creating severe emotional and capital stress without proper preparation."
        },
        {
            title: "What should I do during a 20% drawdown?",
            content: "During 20% drawdowns, reduce size, follow only A-setups, and stage return to normal once a small equity cushion is rebuilt. Immediately reduce position sizing 30-50% (from 2% to 1-1.3% risk per trade), follow only highest-conviction signals skipping marginal setups, implement stricter daily loss limits (2-3% versus normal 4-5%), and avoid new strategies or experimentation. If your drawdown is far beyond what your system suggested, it's a warning sign. Something may be wrong with your execution, risk sizing, or even your strategy itself. Review recent trades identifying execution errors or market condition changes explaining underperformance. Many drawdowns result from normal statistical clustering requiring patience, but some signal fundamental problems demanding strategy changes."
        },
        {
            title: "How long do typical drawdowns last?",
            content: "Drawdown duration varies dramatically by strategy and market conditions. Conservative theta-selling strategies experience 4-12 week drawdowns during volatility spikes before recovering. Directional swing trading faces 8-16 week drawdowns during trend reversals or choppy markets. High-frequency or leveraged approaches suffer 2-6 week intense drawdowns or immediate account destruction. Even The Medallion Fund, the world's best-performing fund, was on the brink of collapse in 2007 despite its steady gains and high Sharpe Ratio, demonstrating even sophisticated strategies face extended difficult periods. Plan for drawdowns lasting 2-4 months minimum, maintaining sufficient capital and psychological resilience weathering extended underperformance before abandoning otherwise sound strategies prematurely."
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Risk Management <GradientText>FAQ</GradientText></h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">Common questions about preserving capital when signal trading.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Accordion items={faqItems} />
                </div>
            </div>
        </Section>
    );
};

export default RiskFAQ;
