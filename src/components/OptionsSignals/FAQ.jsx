import React from 'react';
import Section from '../ui/Section';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(0);
    const faqs = [
        {
            q: "Do I need a lot of money to trade options signals?",
            a: "No. You can start with as little as $500-1,000. Our position sizing recommendations scale to your account size. Most signals involve contracts under $5.00."
        },
        {
            q: "What brokers can I use with your signals?",
            a: "Any broker that offers options. Popular choices: Robinhood, ThinkOrSwim, E*TRADE, Webull, IBKR, and Fidelity. Our signals are broker-agnostic."
        },
        {
            q: "How fast do I need to execute?",
            a: "For lottos (0-3DTE), within 5-15 mins. For swings (14-45DTE), you have 30-60 mins. Ultimate members get 30s early access for better fills."
        },
        {
            q: "What's the difference between lotto, swing, and index signals?",
            a: "Lottos are high-risk 0-3 day plays (100-500% potential). Swings are 2-6 week holds (50-150% targets). Index signals trade SPY/QQQ with high consistency."
        },
        {
            q: "Do you send too many signals?",
            a: "We average 4-6 quality signals per day. Quality over quantity is our philosophy. You're never required to take every trade."
        },
        {
            q: "What if I can't watch my phone all day?",
            a: "Swing options are perfect for you - designed for 1-2 checks a day. We also send EOD summary alerts for all active positions."
        },
        {
            q: "How do I know when to exit a trade?",
            a: "Every signal has 3 profit targets. You'll receive push notifications when each target is hit, telling you exactly how much to sell."
        },
        {
            q: "Are options signals suitable for beginners?",
            a: "Yes, but we recommend starting with swing options, using small position sizes (2-5%), and utilizing our educational Greeks breakdowns."
        },
        {
            q: "Do you guarantee profits?",
            a: "No service can guarantee profits. We focus on high-probability setups (82% win rate), but risk management is critical."
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
