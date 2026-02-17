import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { ChevronRight, Layers, Target, Shield, Award } from 'lucide-react';

const Curriculum = () => {
    const levels = [
        {
            id: "L1",
            title: "LEVEL 1: FOUNDATIONS",
            sub: "Beginners - Weeks 1-4",
            icon: Layers,
            topics: [
                "What Are Trading Signals",
                "How Stock Trading Works",
                "Introduction to Options",
                "Crypto Trading Basics",
                "Futures 101",
                "Reading Charts & Patterns",
                "Understanding Risk Management",
                "How to Use Trading Signals"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: "L2",
            title: "LEVEL 2: INTERMEDIATE",
            sub: "Weeks 5-12",
            icon: Target,
            topics: [
                "Technical Analysis Fundamentals",
                "Support & Resistance",
                "Candlestick Patterns",
                "Indicators (RSI, MACD, etc)",
                "Volume Analysis",
                "Entry/Exit Timing",
                "Position Sizing Strategies",
                "Swing vs Day Trading"
            ],
            color: "from-emerald-500 to-teal-500"
        },
        {
            id: "L3",
            title: "LEVEL 3: ADVANCED",
            sub: "Months 4-6",
            icon: Shield,
            topics: [
                "Advanced Options Strategies",
                "Options Greeks (Delta, Theta, etc)",
                "Lotto Options Explained",
                "0DTE Options Trading",
                "Futures Leverage Management",
                "Multi-Timeframe Analysis",
                "Advanced Risk Management",
                "Trading Psychology"
            ],
            color: "from-amber-500 to-orange-500"
        },
        {
            id: "L4",
            title: "LEVEL 4: MASTERY",
            sub: "Months 7-12",
            icon: Award,
            topics: [
                "Building Your Trading System",
                "Backtesting Strategies",
                "Portfolio Management",
                "Tax Optimization for Traders",
                "Scaling Your Trading Account",
                "Becoming Consistently Profitable",
                "Advanced Market Analysis",
                "Professional Trader Mindset"
            ],
            color: "from-fuchsia-500 to-pink-500"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        Complete Curriculum— <br />
                        <GradientText>Beginner to Expert Trader</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium">
                        Our structured learning path takes you from market basics to professional mastery. Each level builds upon the previous, ensuring a solid foundation for your trading career.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {levels.map((level, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all h-full">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${level.color} opacity-10 rounded-full blur-3xl`} />

                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                                        <level.icon size={24} />
                                    </div>
                                    <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">{level.id}</div>
                                </div>

                                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-widest">{level.title}</h4>
                                <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-8">{level.sub}</p>

                                <div className="space-y-4">
                                    {level.topics.map((topic, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group/item cursor-default">
                                            <div className="w-1 h-1 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors shrink-0" />
                                            <span className="text-[11px] font-bold text-text-muted group-hover/item:text-white transition-colors uppercase tracking-tight">{topic}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-6 border-t border-white/5">
                                    <Link to="/pricing">
                                        <button className="text-[10px] font-black text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                                            View Curriculum
                                            <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Curriculum;
