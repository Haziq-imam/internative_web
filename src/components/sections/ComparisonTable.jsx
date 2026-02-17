import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { homepageContent } from '../../data/homepageContent';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
    const { comparison } = homepageContent;

    const features = [
        { name: "Win Rate", internative: "78% Avg", others: "Unknown or <50%" },
        { name: "Signals Delivered via App", internative: true, others: false },
        { name: "Entry & Exit Prices", internative: true, others: "Often Vague" },
        { name: "Stop-Loss Alerts", internative: true, others: false },
        { name: "Education Included", internative: true, others: "Upsell" },
        { name: "Price", internative: "$59.99/mo", others: "$100-$300/mo" },
    ];

    return (
        <Section className="bg-background-secondary py-32 lg:py-48 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="text-center max-w-4xl mx-auto mb-24 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    Competitive Edge
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight font-display">
                    {comparison.headline}
                </h2>
            </div>

            <GlassCard className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden border-white/10 shadow-neon bg-background/40 backdrop-blur-3xl relative z-10 p-0">
                <div className="grid grid-cols-3 bg-white/5 border-b border-white/5 p-8 md:p-12 text-xl font-black text-white tracking-widest uppercase">
                    <div className="text-white/40 text-sm md:text-lg">Capabilities</div>
                    <div className="text-center text-primary text-sm md:text-2xl drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">InterNative</div>
                    <div className="text-center text-white/20 text-sm md:text-lg">Competitors</div>
                </div>

                <div className="divide-y divide-white/5">
                    {features.map((feature, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-8 md:p-12 items-center hover:bg-white/5 transition-all duration-300 group">
                            <div className="text-lg md:text-2xl font-black text-white tracking-tight group-hover:text-primary transition-colors">{feature.name}</div>

                            <div className="text-center flex justify-center text-xl font-black text-white">
                                {feature.internative === true ? (
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-neon">
                                        <Check className="w-6 h-6 text-primary" />
                                    </div>
                                ) : (
                                    <span className="text-primary">{feature.internative}</span>
                                )}
                            </div>

                            <div className="text-center flex justify-center text-lg font-bold text-white/30">
                                {feature.others === false ? (
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center opacity-40">
                                        <X className="w-6 h-6 text-white" />
                                    </div>
                                ) : (
                                    <span>{feature.others}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>

            <div className="mt-24 text-center">
                <Link to="/pricing">
                    <Button size="lg" className="px-16 py-6 text-2xl shadow-neon">{comparison.cta}</Button>
                </Link>
            </div>
        </Section>
    );
};

export default ComparisonTable;
