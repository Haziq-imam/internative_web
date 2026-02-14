import React from 'react';
import Section from '../ui/Section';

const HowItWorks = () => {
    const steps = [
        {
            step: "1",
            title: "We Analyze ⚙️",
            desc: "Expert analysts scan 5,000+ stocks and options chains using technicals, unusual activity, and Greeks analysis."
        },
        {
            step: "2",
            title: "You Receive Alert 📱",
            desc: "Instant push notifications with ticker, strike, expiration, entry range, 3 targets, and stop-loss."
        },
        {
            step: "3",
            title: "You Execute 💼",
            desc: "Open your broker app, find the exact strike, and enter your limit order within our specified range."
        },
        {
            step: "4",
            title: "We Guide You to Exit 🎯",
            desc: "Receive real-time alerts when profit targets are hit or if the setup is invalidated to protect capital."
        }
    ];

    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">From Alert to Profit in <br /><span className="text-gradient">4 Simple Steps</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />

                    {steps.map((s, i) => (
                        <div key={i} className="relative group text-center lg:text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-2xl font-black text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-neon">
                                {s.step}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default HowItWorks;
