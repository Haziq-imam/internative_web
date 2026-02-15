import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const ComparisonTable = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">How InterNative Beats the Market</h2>
                    <p className="text-text-secondary text-lg">A simple comparison of why our signals outperform traditional trading.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            t: "Traditional Alerts",
                            points: ["Vague entry prices", "No clear stop-loss", "Delayed notifications", "Unverified results", "Single asset focus"],
                            type: "competitor"
                        },
                        {
                            t: "InterNative Signals",
                            points: ["Precise entry zones", "3 profit targets + stop", "Sub-second delivery", "81% verified win rate", "Multi-market experts"],
                            type: "premium"
                        },
                        {
                            t: "Self Trading",
                            points: ["Emotional decisions", "Analysis paralysis", "Inconsistent results", "Time consuming", "High stress levels"],
                            type: "competitor"
                        }
                    ].map((col, i) => (
                        <GlassCard key={i} className={`p-8 rounded-[2rem] flex flex-col ${col.type === 'premium' ? 'border-primary bg-primary/5 shadow-neon scale-105 z-10' : 'bg-[#0A051A]/50 opacity-60'}`}>
                            {col.type === 'premium' && (
                                <div className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full self-center mb-6">Recommended</div>
                            )}
                            <h3 className="text-2xl font-black text-white mb-8 text-center">{col.t}</h3>
                            <div className="space-y-4 flex-1">
                                {col.points.map((p, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${col.type === 'premium' ? 'bg-primary text-white' : 'bg-white/10 text-text-muted'}`}>
                                            {col.type === 'premium' ? '✓' : '×'}
                                        </div>
                                        <span className={col.type === 'premium' ? 'text-white font-bold' : 'text-text-muted'}>{p}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ComparisonTable;
