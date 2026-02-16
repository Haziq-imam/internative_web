import React from 'react';
import { BarChart3, Smartphone, Briefcase, Target, Globe, Clock, Brain, Shield, BookOpen } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const HowItWorks = () => {
    const steps = [
        { step: "1", title: "Market Scan", icon: BarChart3, desc: "Our team scans 5,000+ assets for patterns (flags, golden crosses) and fundamental catalysts (earnings, upgrades)." },
        { step: "2", title: "Instant Alert", icon: Smartphone, desc: "Receive push notifications with a wide entry window. No rush - enter when it suits your schedule." },
        { step: "3", title: "Execute Easy", icon: Briefcase, desc: "Place your trade on any broker. Set limit orders, stop-losses, and profit targets. Done in minutes." },
        { step: "4", title: "Exit at Targets", icon: Target, desc: "We guide you through Stage 1, 2, and 3 exits to maximize profits and trail winners automatically." }
    ];

    const advantages = [
        { title: "Multi-Asset Diversification", icon: Globe, desc: "Best swings from ALL markets: Stocks, Options, Crypto, and Futures. Don't be limited to one asset class." },
        { title: "Part-Time Trader Design", icon: Clock, desc: "Wide entry windows (hours/days). Check positions 1-2x daily. Works around your job and family schedule." },
        { title: "Dual Analysis", icon: Brain, desc: "Every signal aligns professional technical patterns with fundamental catalysts for higher probability wins." },
        { title: "Three-Target System", icon: Target, desc: "Remove emotion. Take 40% at TP1, 40% at TP2, and trail final 20% for massive home runs." },
        { title: "Swing-Optimized Risk", icon: Shield, desc: "Stop-losses placed for multi-day volatility. Earnings date screening prevents mid-swing surprises." },
        { title: "Education Included", icon: BookOpen, desc: "Learn 'why' every trade works. Pattern identification is built into every alert you receive." }
    ];

    return (
        <>
            <Section className="py-24 bg-background-secondary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">From Expert Analysis to Your Portfolio</h2>
                        <p className="text-text-secondary text-lg">Four Steps to Stress-Free Trading</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block -translate-y-1/2" />
                        {steps.map((item, i) => (
                            <div key={i} className="relative z-10 text-center bg-background p-6 rounded-[2rem] border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl mx-auto mb-6 shadow-neon">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center justify-center gap-2"><item.icon className="w-5 h-5 text-primary" />{item.title}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">The InterNative Swing Advantage</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map((item, i) => (
                            <GlassCard key={i} className="p-8 h-full flex flex-col" hoverEffect>
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><item.icon className="w-5 h-5 text-primary" />{item.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed flex-grow">{item.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default HowItWorks;
