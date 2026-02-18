import React from 'react';
import { Layers, Globe, Shield, TrendingUp, Bell, CheckCircle2, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const WhyOurSignalsWin = () => {
    const advantages = [
        {
            icon: Layers,
            title: "Multi-Factor Stock Selection",
            desc: "We don't just look at charts. We require technical setup confirmation, fundamental catalysts, volume verification, and a minimum 1:2 risk-to-reward ratio.",
            result: "Only 3-5 signals daily from 2,500+ stocks."
        },
        {
            icon: Globe,
            title: "Complete Fundamental Context",
            desc: "Every signal explains WHY the stock is moving: earnings performance, revenue growth, analyst upgrades, and industry trends.",
            result: "You understand the story, not just the chart."
        },
        {
            icon: Shield,
            title: "Precise Risk Management",
            desc: "Stop-losses placed strategically below key support. Maximum 6-8% loss per trade. Position sizing matched to risk.",
            result: "Losses stay small and manageable."
        },
        {
            icon: TrendingUp,
            title: "Scaling Exit Strategy",
            desc: "Take profits in stages: 40% at T1, 40% at T2, and trail 20% for extended runs. Removes emotion from exits.",
            result: "Capture quick gains AND monster moves."
        },
        {
            icon: Bell,
            title: "Real-Time Trade Management",
            desc: "Markets change, our guidance adapts. Stop-loss adjustments, early exit warnings, and volatility-based position modifications.",
            result: "Dynamic guidance, not static alerts."
        },
        {
            icon: CheckCircle2,
            title: "Verified Track Record",
            desc: "Entry/exit prices publicly logged. Wins AND losses clearly shown. Monthly performance reports published.",
            result: "Trust built on proven, documented success."
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">The InterNative Stock Signals Advantage</h2>
                    <p className="text-text-secondary text-lg">Six reasons why our members consistently outperform the market.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((adv, i) => (
                        <GlassCard key={i} className="p-8 hoverEffect flex flex-col h-full">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                                <adv.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">{adv.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow border-b border-white/5 pb-6">{adv.desc}</p>

                            <div className="flex items-start gap-2 text-xs font-bold text-white mt-auto">
                                <ArrowRight className="w-4 h-4 text-success shrink-0" />
                                <span className="text-text-muted uppercase tracking-wider">Result:</span> {adv.result}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default WhyOurSignalsWin;
