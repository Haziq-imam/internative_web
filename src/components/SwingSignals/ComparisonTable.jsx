import React from 'react';
import { Clock, TrendingUp, Shield, Target, Search, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const ComparisonTable = () => {
    const features = [
        { f: "Time Required", d: "6+ hours/day", s: "15-30 min/day", b: "5 min/month" },
        { f: "Stress Level", d: "Extreme", s: "Low-Moderate", b: "Minimal" },
        { f: "Account Minimum", d: "$25,000 (PDT)", s: "$1,000-5,000", b: "$100+" },
        { f: "Typical Returns", d: "2-10% per trade", s: "10-80% per trade", b: "8-12% per year" },
        { f: "Hold Time", d: "Minutes-hours", s: "3-21 days", b: "Months-years" },
        { f: "Work/Life Balance", d: "Poor (consumes life)", s: "Excellent", b: "Excellent" }
    ];

    const benefitCards = [
        { t: "Time Efficiency", d: "Check positions twice daily vs. 50 times/day. Trade around your job, family, and life.", icon: Clock },
        { t: "Better Risk-Reward", d: "Capture 10-40% moves over weeks vs. scalping 1% intraday. Wider stops = fewer stop-outs.", icon: TrendingUp },
        { t: "No PDT Rule", d: "Don't need $25k. Swing trades held overnight don't count toward pattern day trader limits.", icon: Shield },
        { t: "Lower Stress", d: "Not watching every tick. Entry windows are hours/days, not seconds. Sleep at night.", icon: Target },
        { t: "Dual Verification", d: "Time to analyze both charts AND catalysts (earnings, news). Better informed decisions.", icon: Search },
        { t: "Compound Growth", d: "2-4 swings/month at 15% average can lead to life-changing annual returns.", icon: Zap },
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">The Sweet Spot Between Day Trading and Buy-And-Hold</h2>
                </div>

                <div className="overflow-x-auto pb-8">
                    <table className="w-full min-w-[800px] border-collapse bg-[#0A051A]/50 rounded-2xl overflow-hidden shadow-2xl">
                        <thead>
                            <tr className="text-xs font-black uppercase tracking-widest text-text-muted border-b border-white/10 bg-white/5">
                                <th className="p-6 text-left">Feature</th>
                                <th className="p-6 text-center">Day Trading</th>
                                <th className="p-6 text-center text-primary bg-primary/5 border-b-2 border-primary">SWING TRADING</th>
                                <th className="p-6 text-center">Buy & Hold</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-text-secondary">
                            {features.map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                                    <td className="p-6 font-bold text-white">{row.f}</td>
                                    <td className="p-6 text-center">{row.d}</td>
                                    <td className="p-6 text-center font-bold text-white bg-primary/5">{row.s}</td>
                                    <td className="p-6 text-center">{row.b}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {benefitCards.map((item, i) => (
                        <GlassCard key={i} className="p-6 flex gap-4 items-start" hoverEffect>
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-2">{item.t}</h4>
                                <p className="text-xs text-text-secondary leading-relaxed">{item.d}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ComparisonTable;
