import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PieChart, TrendingUp, AlertTriangle } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';

const AdvancedOptions = () => {
    return (
        <>
            <Helmet>
                <title>Advanced Options Strategies | InterNative</title>
                <meta name="description" content="Institutional strategies for experienced traders. Spreads, Iron Condors, and Greeks management." />
            </Helmet>

            {/* Hero */}
            <Section className="pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warning/10 border border-warning/20 text-warning text-xs font-bold uppercase tracking-wider mb-6">
                            Level 3: Expert Only
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Master the <br />
                            <span className="text-gradient">Greeks</span>
                        </h1>
                        <p className="text-xl text-text-secondary mb-8">
                            Move beyond simple directional plays. Learn to profit from volatility crush, theta decay, and complex multi-leg structures.
                        </p>
                        <Button size="lg" variant="outline">View Curriculum</Button>
                    </div>
                    <GlassCard className="p-8 bg-background-secondary/50 border-warning/30">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="text-warning" size={20} />
                            Who Should Attempt This?
                        </h3>
                        <p className="text-text-secondary mb-6">
                            This curriculum is exclusively for traders who have mastered Level 1 & 2. You must have a solid understanding of risk management and account for margin requirements.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">2+</div>
                                <div className="text-xs text-text-secondary">Years Experience</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">$25k+</div>
                                <div className="text-xs text-text-secondary">Account Size</div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Section>

            {/* Strategies */}
            <Section className="bg-background-secondary">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Advanced <span className="text-gradient">Strategies</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Iron Condors", desc: "Non-directional strategy profiting from range-bound markets and theta decay." },
                        { title: "Credit Spreads", desc: "High-probability income generation with defined risk." },
                        { title: "Straddles & Strangles", desc: "Profiting from massive volatility events like earnings or Fed announcements." }
                    ].map((strat, i) => (
                        <GlassCard key={i} className="p-8 group hover:border-primary/50 transition-colors">
                            <PieChart className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-white mb-4">{strat.title}</h3>
                            <p className="text-text-secondary">{strat.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default AdvancedOptions;
