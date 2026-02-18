import React from 'react';
import Section from '../ui/Section';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(0);
    const faqs = [
        {
            q: "Do I need a lot of money to trade options signals?",
            a: "No. You can start with as little as $500-1,000 in your options trading account. Our position sizing recommendations scale to your account size. Most of our signals involve contracts priced under $5.00, meaning you can participate with small capital."
        },
        {
            q: "What brokers can I use with your signals?",
            a: "Any broker that offers options trading. Popular choices include Robinhood, TD Ameritrade (ThinkOrSwim), E*TRADE, Schwab, Webull, Interactive Brokers, and Fidelity. Our signals are broker-agnostic we just tell you what to buy, you execute wherever you trade."
        },
        {
            q: "How fast do I need to execute after receiving a signal?",
            a: "For lotto signals (0-3DTE), speed matters execute within 5-15 minutes of alert. For swing options (14-45DTE), you typically have 30-60 minutes or even hours. We always specify urgency level in the alert. Ultimate members get 30-second early access for better fills."
        },
        {
            q: "What's the difference between lotto, swing, and index options signals?",
            a: "Lottos are high-risk, high-reward short-dated options (0-3 days) with 100%-500% potential. Swing options are medium-term (2-6 weeks) with 50%-150% targets and higher win rates. Index options trade major ETFs (SPY, QQQ, IWM) with moderate risk and solid consistency. All three are included in both plans."
        },
        {
            q: "Do you send too many signals? Will I be overwhelmed?",
            a: "We send 4-6 quality signals per day on average. Quality over quantity is our philosophy. You're never required to take every signal choose the ones that fit your risk tolerance, account size, and availability. Many members select only swing or only lotto signals based on preference."
        },
        {
            q: "What if I can't watch my phone all day?",
            a: "Swing options signals are perfect for you they're designed for traders who check positions 1-2 times per day. We also send end-of-day summary alerts with all active positions and any adjustments needed. Lotto signals require more active monitoring."
        },
        {
            q: "How do I know when to exit a trade?",
            a: "Every signal includes 3 profit targets (TP1, TP2, TP3) with specific exit percentages. You'll receive push notifications when each target is hit, telling you exactly how much to sell. We also send stop-loss alerts if the trade goes against you. No guesswork."
        },
        {
            q: "What if I miss a signal notification?",
            a: "All signals remain visible in your app dashboard. You can see active signals, entry status, current profit/loss, and remaining targets. However, for time-sensitive lottos, late entry usually means we recommend sitting it out rather than chasing."
        },
        {
            q: "Are options signals suitable for beginners?",
            a: "Yes and no. Our signals give you everything you need to execute, but options themselves are advanced instruments with risks. We recommend: (1) Understanding basic options concepts first (our app includes educational resources), (2) Starting with swing options (higher win rate, less stressful), (3) Using small position sizes initially (2-5% per trade), (4) Paper trading first if your broker offers it."
        },
        {
            q: "Do you guarantee profits?",
            a: "No. Options trading is risky and no service can guarantee profits. We focus on providing high-probability setups with favorable risk-to-reward ratios, but losses are part of trading. Our 82% win rate means 18% of signals lose. Proper risk management (following our stop-losses and position sizing) is critical."
        },
        {
            q: "Can I see your full track record before subscribing?",
            a: "Yes. Visit our Performance Page to see every signal we've sent, entry/exit prices, results, and monthly statistics. Everything is published transparently. We show wins AND losses. All data is verified by third-party auditor."
        },
        {
            q: "What happens after the 7-day free trial?",
            a: "You'll receive full access to all signals for 7 days. No credit card required to start. Before the trial ends, you'll be prompted to choose a paid plan. If you don't subscribe, access ends no charges, no hassle."
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Options Signals Questions Answered</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`bg-surface border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-primary/50 shadow-lg' : 'border-white/5 hover:border-white/10'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-white pr-4">{faq.q}</span>
                                <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openIndex === idx ? 'bg-primary text-white' : 'bg-white/5 text-text-secondary'}`}>
                                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-text-secondary leading-relaxed text-sm">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
