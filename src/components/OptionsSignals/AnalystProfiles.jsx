import React from 'react';
import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const AnalystProfiles = () => {
    const analysts = [
        {
            name: "David M.",
            role: "Lead Options Strategist",
            exp: "15 Years Experience",
            bio: "Former institutional options trader at major Wall Street firm. Specialized in volatility arbitrage and gamma scalping.",
            expertise: ["Complex Strategies", "Volatility Analysis", "Index Specialist"],
            stats: "78% Career Win Rate"
        },
        {
            name: "Sarah K.",
            role: "Technical Analysis Expert",
            exp: "12 Years Experience",
            bio: "Technical analyst focusing on breakout identification. CMT (Chartered Market Technician) certified.",
            expertise: ["Chart Patterns", "Volume Profile", "Momentum Strategy"],
            stats: "Identified 23/28 Index Moves in '25"
        },
        {
            name: "Michael R.",
            role: "Options Flow Specialist",
            exp: "10 Years Experience",
            bio: "Previously traded proprietary desk focusing on unusual activity and dark pool flow. Brings institutional insights.",
            expertise: ["Flow Interpretation", "Dark Pool Activity", "Smart Money Tracking"],
            stats: "85% Accuracy on Flow Signals"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Meet the Team Behind <br /><span className="text-gradient">Your Options Alerts</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {analysts.map((analyst, i) => (
                        <GlassCard key={i} className="p-8 rounded-[2.5rem] flex flex-col h-full bg-background" hoverEffect>
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-2xl mb-6">
                                {analyst.name.split(' ')[0][0]}{analyst.name.split(' ')[1][0]}
                            </div>
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-1">{analyst.name}</h3>
                                <div className="text-primary text-xs font-black uppercase tracking-widest mb-1">{analyst.role}</div>
                                <div className="text-text-muted text-xs">{analyst.exp}</div>
                            </div>
                            <p className="text-sm text-text-secondary mb-8 leading-relaxed flex-grow">{analyst.bio}</p>
                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {analyst.expertise.map((e, ei) => (
                                        <span key={ei} className="px-2 py-1 bg-white/5 rounded text-[10px] text-text-muted font-bold uppercase tracking-widest">{e}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest bg-primary/10 p-3 rounded-xl">
                                    <CheckCircle size={14} />
                                    {analyst.stats}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default AnalystProfiles;
