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
                            name: "Sarah J. - Lead Equity Analyst",
                            exp: "15 Years Experience",
                            focus: "Tech & Disruptive Growth",
                            track: "92% Accuracy on Sector Rotation",
                            quote: "I focus on the intersection of technical breakouts and fundamental shifts. That's where the real wealth is made."
                        },
                        {
                            name: "Michael R. - Momentum Specialist",
                            exp: "12 Years Experience",
                            focus: "Small Cap Breakouts & Gaps",
                            track: "$4.2M+ Personal Trading Profit",
                            quote: "Market psychology is my edge. I find where the most emotion is trapped and trade the release of that energy."
                        },
                        {
                            name: "David T. - Value & Dividend Strategist",
                            exp: "20 Years Experience",
                            focus: "Large Cap Compounders",
                            track: "8.4% Avg Monthly Return (Portfolios)",
                            quote: "Wealth is built through consistency. I find high-conviction dividend growth plays with technical support."
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
