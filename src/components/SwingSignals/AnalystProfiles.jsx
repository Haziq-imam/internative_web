import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const AnalystProfiles = () => {
    const analysts = [
        { name: "Jennifer L. - Lead Swing Strategist", exp: "12 Years Multi-Asset Experience", dw: "Former equity analyst managing personal $2M+ portfolio exclusively through swing strategies. Specializes in flags, channels, and multi-day breakouts.", track: "81% win rate on stock swings since 2019" },
        { name: "Marcus T. - Options Swing Specialist", exp: "10 Years Options Focused", dw: "Specializing in 30-45 DTE contracts held for 7-14 days. Avoids lottos and focuses on theta decay edge with high-probability direction.", track: "+89% average winner across options signals" },
        { name: "Elena R. - Crypto & Futures Analyst", exp: "8 Years Multi-Market Swing", dw: "Elena covers 24/7 markets. Expert in Bitcoin trend swings and leveraged futures (/ES, /GC) for professional traders with work/life balance.", track: "74% crypto win rate | 73% futures win rate" }
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Meet the Swing Specialists</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {analysts.map((member, i) => (
                        <GlassCard key={i} className="p-8 h-full flex flex-col" hoverEffect>
                            <h3 className="text-lg font-black text-white mb-1">{member.name}</h3>
                            <div className="text-primary text-[10px] font-black uppercase tracking-widest mb-6">{member.exp}</div>
                            <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-grow italic">"{member.dw}"</p>
                            <div className="pt-6 border-t border-white/5">
                                <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">Track Record</div>
                                <div className="text-success font-black">{member.track}</div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default AnalystProfiles;
