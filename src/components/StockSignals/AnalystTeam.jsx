import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const AnalystTeam = () => {
    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Expert Analysts You Can Trust</h2>
                    <p className="text-text-secondary text-lg">Our team of senior traders spends thousands of hours analyzing charts and data so you don't have to.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Jennifer L. - Chief Stock Strategist",
                            exp: "18 Years Wall Street Experience",
                            focus: "Growth Stocks & Earnings",
                            track: "83% Win Rate (Swing Trades)",
                            quote: "I look for the perfect storm: accelerating earnings, technical breakouts, and institutional accumulation."
                        },
                        {
                            name: "Robert M. - Technical Analysis Lead",
                            exp: "14 Years Professional Trading",
                            focus: "Momentum & Chart Patterns",
                            track: "Identified 31/37 Sector Rotations",
                            quote: "Price pays. I ignore the noise and focus entirely on volume, momentum, and key structural levels."
                        },
                        {
                            name: "Amanda K. - Fundamental Research",
                            exp: "12 Years Investment Analysis",
                            focus: "Catalysts & Valuation",
                            track: "76% Accuracy on Earnings",
                            quote: "Great companies eventually make great stocks. My job is to find them before the rest of the market does."
                        }
                    ].map((member, i) => (
                        <GlassCard key={i} className="p-8 h-full flex flex-col items-center text-center hoverEffect">
                            <h3 className="text-xl font-black text-white mb-1">{member.name}</h3>
                            <div className="text-primary text-[10px] font-black uppercase tracking-widest mb-6">{member.exp}</div>
                            <div className="space-y-2 mb-8 flex-1">
                                <div className="text-sm font-bold text-white"><span className="text-text-muted">Focus:</span> {member.focus}</div>
                                <div className="text-sm font-bold text-success"><span className="text-text-muted">Track Record:</span> {member.track}</div>
                                <p className="text-text-secondary text-xs italic mt-4">"{member.quote}"</p>
                            </div>
                            <GlassCard className="p-4 bg-white/5 border-white/5 w-full">
                                <div className="text-[10px] text-text-muted font-bold uppercase tracking-tighter">Verified Analyst Score</div>
                                <div className="text-xl font-black text-white">4.9/5.0</div>
                            </GlassCard>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default AnalystTeam;
