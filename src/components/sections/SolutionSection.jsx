import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Zap, Shield, Smartphone } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import CheckList from '../ui/CheckList';

const SolutionSection = () => {
    return (
        <Section id="features" className="bg-background-secondary py-32 lg:py-48 overflow-hidden relative">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        The InterNative Advantage
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-[1.1]">
                        Institutional <br />
                        <span className="text-gradient">Intelligence.</span>
                    </h2>
                    <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                        Precision-engineered trading alerts powered by proprietary algorithms and institutional-grade order flow analysis.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8">
                        <GlassCard className="p-8" hoverEffect>
                            <Crosshair className="w-12 h-12 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Precision Entry</h3>
                            <p className="text-text-secondary leading-relaxed">Exact entry, stop-loss, and take-profit levels for every trade.</p>
                        </GlassCard>
                        <GlassCard className="p-8" hoverEffect>
                            <Zap className="w-12 h-12 text-secondary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Instant Alerts</h3>
                            <p className="text-text-secondary leading-relaxed">Real-time push notifications so you never miss a move.</p>
                        </GlassCard>
                        <GlassCard className="p-8" hoverEffect>
                            <Shield className="w-12 h-12 text-success mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Risk Protection</h3>
                            <p className="text-text-secondary leading-relaxed">Position sizing and risk-reward ratios explicitly defined.</p>
                        </GlassCard>
                        <GlassCard className="p-8" hoverEffect>
                            <Smartphone className="w-12 h-12 text-accent-indigo mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Mobile Command</h3>
                            <p className="text-text-secondary leading-relaxed">Manage your trades from anywhere with our optimized app.</p>
                        </GlassCard>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <GlassCard className="relative z-10 border-white/10 p-8 md:p-16 rounded-[2.5rem] bg-background-secondary/80 backdrop-blur-2xl">
                        <h3 className="text-3xl font-black text-white mb-10 tracking-tight">The Toolkit</h3>
                        <CheckList
                            items={[
                                "Daily Options, Stock & Crypto Signals",
                                "Live Trading Room Access",
                                "Institutional Order Flow Analysis",
                                "Educational Masterclass Library",
                                "24/7 VIP Support Desk",
                                "Cross-Platform Mobile App"
                            ]}
                            className="space-y-6 mb-12 text-lg text-white/80"
                        />
                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                            <div className="text-sm font-bold text-text-muted uppercase tracking-widest mb-3">Historical Accuracy</div>
                            <div className="flex justify-between items-end">
                                <div className="text-5xl font-black text-white">+87.4%</div>
                                <div className="text-xs font-bold text-primary uppercase tracking-widest pb-1">Win Rate (30D)</div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default SolutionSection;
