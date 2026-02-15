import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { TrendingUp, Award, CheckCircle2, BarChart2, Zap, Layout } from 'lucide-react';

const IntermediateAdvanced = () => {
    const sections = [
        {
            title: "Ready to Level Up? Intermediate Trader Path",
            badge: "Intermediate Path",
            icon: TrendingUp,
            modules: [
                {
                    title: "Technical Analysis Mastery",
                    items: [
                        "Advanced patterns (flags, head & shoulders)",
                        "Multi-timeframe analysis refinement",
                        "Indicator combinations (RSI + MACD + Volume)",
                        "Fibonacci retracements and extensions"
                    ]
                },
                {
                    title: "Options Strategies",
                    items: [
                        "Vertical spreads (call/put spreads)",
                        "Covered calls and cash-secured puts",
                        "Protective puts (insurance strategies)",
                        "Butterfly and iron condor basics"
                    ]
                },
                {
                    title: "Swing Trading Deep Dive",
                    items: [
                        "Identifying high-probability swing setups",
                        "Entry timing for pullbacks vs breakouts",
                        "Hold duration optimization",
                        "Scaling in and out of positions"
                    ]
                }
            ]
        },
        {
            title: "Master-Level Education for Serious Traders",
            badge: "Advanced Mastery",
            icon: Award,
            modules: [
                {
                    title: "Advanced Options Mastery",
                    items: [
                        "Greeks mastery (Delta, Gamma, Theta, Vega)",
                        "Volatility trading (IV crush, earnings plays)",
                        "Options flow analysis (unusual activity)",
                        "Lotto options and 0DTE deep dive"
                    ]
                },
                {
                    title: "Futures & Macro Trading",
                    items: [
                        "E-mini index futures (/ES, /NQ)",
                        "Commodity futures (oil, gold, grains)",
                        "Leverage and margin management",
                        "Professional risk of ruin calculations"
                    ]
                },
                {
                    title: "System Building & Psychology",
                    items: [
                        "Creating your own custom trading system",
                        "Backtesting and forward testing strategies",
                        "Advanced emotional control techniques",
                        "Position sizing for professional portfolios"
                    ]
                }
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="space-y-32">
                    {sections.map((section, idx) => (
                        <div key={idx} className="relative">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                    <section.icon size={14} />
                                    {section.badge}
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                                    {section.title}
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {section.modules.map((module, mIdx) => (
                                    <GlassCard key={mIdx} className="p-8 md:p-10 rounded-[2.5rem] border-white/10 bg-[#0A051A]/80 shadow-2xl" hoverEffect>
                                        <h4 className="text-xl font-black text-white mb-6 tracking-tight flex items-center gap-3">
                                            <div className="w-1.5 h-6 bg-primary rounded-full shadow-neon" />
                                            {module.title}
                                        </h4>
                                        <div className="space-y-4">
                                            {module.items.map((item, iIdx) => (
                                                <div key={iIdx} className="flex gap-4 items-start group">
                                                    <div className="w-5 h-5 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-500/20 transition-colors">
                                                        <CheckCircle2 size={12} className="text-green-500" />
                                                    </div>
                                                    <span className="text-sm font-semibold text-text-secondary group-hover:text-white transition-colors">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default IntermediateAdvanced;
