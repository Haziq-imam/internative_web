import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const PainPoints = () => {
    const points = [
        {
            icon: "🤯",
            title: "Information Overload",
            problem: "Scanning hundreds of charts, checking unusual activity, analyzing Greeks... by the time you find a setup, it's moved.",
            solution: "We do the heavy lifting. Our analysts monitor 5,000+ stocks 24/7, alerting you only to the highest-probability setups."
        },
        {
            icon: "⏰",
            title: "Poor Timing = Dead Options",
            problem: "Bought too early? Decay kills you. Too late? You overpaid. Options timing is everything.",
            solution: "Every alert includes optimal entry windows and real-time adjustments. We tell you exactly when to enter."
        },
        {
            icon: "📉",
            title: "No Risk Management",
            problem: "One bad trade wipes out five winners. Without clear stops, your account bleeds.",
            solution: "Every signal includes calculated stop-loss levels and position sizing. We protect your capital first, profits second."
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Why Options Traders Lose Money <br /><span className="text-gradient">(And How We Fix It)</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((item, idx) => (
                        <GlassCard key={idx} className="p-8 rounded-3xl h-full flex flex-col" hoverEffect>
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 mb-4 flex-1">
                                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">The Problem</span>
                                <p className="text-sm text-text-secondary">{item.problem}</p>
                            </div>
                            <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 flex-1">
                                <span className="text-xs font-bold text-green-400 uppercase tracking-wider block mb-2">Our Solution</span>
                                <p className="text-sm text-text-secondary">{item.solution}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default PainPoints;
