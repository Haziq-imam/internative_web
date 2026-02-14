import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const Advantages = () => {
    const advantages = [
        {
            title: "Multi-Factor Analysis 🧠",
            desc: "We combine technical indicators, dark pool activity, IV surfaces, and fundamental catalysts for high-probability setups."
        },
        {
            title: "Real-Time Delivery ⚡",
            desc: "Options move fast. Our mobile-first architecture delivers alerts in 1-2 seconds, ensuring you get the same entry prices."
        },
        {
            title: "Complete Trade Plans 📋",
            desc: "No ambiguity. Exact strike, expiration, entry range, 3 profit targets, and stop-loss with detailed reasoning."
        },
        {
            title: "Risk Management First 🛡️",
            desc: "We protect capital aggressively with specified stop-losses, position sizing, and no averaging down on losers."
        },
        {
            title: "Verified Track Record ✅",
            desc: "Full transparency with every win and loss logged publicly. Trust built on proven results, not marketing hype."
        },
        {
            title: "Educational Value 📚",
            desc: "Learn while you trade. Every signal explains the 'why' with Greeks breakdowns to build your own skills."
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">The InterNative Advantage: <br /><span className="text-gradient">Built Different</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {advantages.map((adv, i) => (
                        <GlassCard key={i} className="p-8 rounded-3xl" hoverEffect>
                            <h3 className="text-xl font-bold text-white mb-4">{adv.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{adv.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Advantages;
