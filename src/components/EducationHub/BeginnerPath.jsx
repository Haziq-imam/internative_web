import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { Calendar, CheckCircle2, ChevronRight, BookOpen, Target, ShieldCheck, Zap } from 'lucide-react';

const BeginnerPath = () => {
    const weeks = [
        {
            title: "WEEK 1: Foundations",
            icon: BookOpen,
            days: [
                { label: "Day 1-2: What Are Trading Signals", sub: "Read guide + watch video. Understand signal components." },
                { label: "Day 3-4: Stock Trading Basics", sub: "Market orders vs limit orders. Long vs short basics." },
                { label: "Day 5-7: Reading Charts", sub: "Candlestick basics. Support, resistance, and trendlines." }
            ]
        },
        {
            title: "WEEK 2: Asset Classes",
            icon: Zap,
            days: [
                { label: "Day 8-9: Intro to Options", sub: "Calls and puts explained. Strike prices and expiration." },
                { label: "Day 10-11: Crypto Trading Intro", sub: "Bitcoin/Ethereum basics. How crypto markets differ." },
                { label: "Day 12-14: Swing vs Day Trading", sub: "Time commitments compared. Find your perfect style." }
            ]
        },
        {
            title: "WEEK 3: Risk Management",
            icon: ShieldCheck,
            days: [
                { label: "Day 15-16: Position Sizing", sub: "The 2% rule. Calculating exact size for every trade." },
                { label: "Day 17-18: Stop-Losses & Targets", sub: "Multi-target exit strategy. Mandatory stop-loss rules." },
                { label: "Day 19-21: Beginner Mistakes", sub: "Avoiding emotional traps and revenge trading psychology." }
            ]
        },
        {
            title: "WEEK 4: Execution",
            icon: Target,
            days: [
                { label: "Day 22-24: Signal Implementation", sub: "Our signal format instructions. Entry execution timing." },
                { label: "Day 25-27: First Paper Trades", sub: "Journal 3 test trades using our signals in simulator." },
                { label: "Day 28-30: Go Live Preparation", sub: "Finalize plan. Account funded. First live execution." }
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <Calendar className="w-4 h-4" />
                            Accelerated Onboarding
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Never Traded Before? <br />
                            <GradientText>Start Here—Your 30-Day Path</GradientText>
                        </h2>
                        <p className="text-lg text-text-secondary font-medium mb-10 leading-relaxed">
                            Following this structured 30-day curriculum will take you from zero knowledge to executing your first professional signal with proper risk management.
                        </p>
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                            <div className="flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-widest">
                                <CheckCircle2 className="text-primary" size={16} />
                                Step-by-step daily tasks
                            </div>
                            <div className="flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-widest">
                                <CheckCircle2 className="text-primary" size={16} />
                                Practical exercises included
                            </div>
                            <div className="flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-widest">
                                <CheckCircle2 className="text-primary" size={16} />
                                Graduate to real signals
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 space-y-8">
                        {weeks.map((week, i) => (
                            <GlassCard key={i} className="p-8 md:p-12 rounded-[2.5rem] border-white/5 bg-white/[0.01]" hoverEffect>
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                        <week.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">{week.title}</h3>
                                </div>

                                <div className="grid gap-6">
                                    {week.days.map((day, dIdx) => (
                                        <div key={dIdx} className="group cursor-default">
                                            <div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all">
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black text-text-muted mt-1 shrink-0 group-hover:text-primary transition-colors">
                                                    {dIdx + 1}
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-black text-white uppercase tracking-widest mb-1">{day.label}</h5>
                                                    <p className="text-xs font-medium text-text-secondary leading-relaxed">{day.sub}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default BeginnerPath;
