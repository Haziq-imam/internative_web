import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const FAQ = () => {
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

                <div className="grid gap-4">
                    {faqs.map((faq, idx) => (
                        <GlassCard key={idx} className="p-8 rounded-2xl group transition-all" hoverEffect>
                            <h4 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">{faq.q}</h4>
                            <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
