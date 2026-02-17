import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -ml-40 -mb-40" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            Stock Trading Signals That Build <GradientText>Wealth</GradientText> One Smart Trade at a Time
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            Get real-time alerts for high-probability stock trades across all market caps and sectors. Our expert analysts identify breakouts, momentum plays, and value opportunities on NYSE, NASDAQ, and major exchanges delivered instantly to your phone with precise entry points, stop-loss levels, and profit targets.
                        </p>

                        <div className="flex flex-col gap-3 mb-8">
                            {[
                                "81% Win Rate on Stock Signals (Last 90 Days)",
                                "+124% Best Single Trade (NVDA - October 2025)",
                                "3-5 Daily Alerts Sent to Your Phone",
                                "Covers 2,500+ Stocks Across All Sectors"
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-bold text-white justify-center lg:justify-start">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                                    <span>{stat}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link to="/pricing">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base shadow-neon">Get Stock Signals Now - Try Free 7 Days</Button>
                            </Link>
                            <Link to="/#performance">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">View December Stock Performance</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual - Mockup */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                        <GlassCard className="relative p-6 rounded-[2.5rem] border-white/10 bg-[#0A051A]/90 backdrop-blur-xl shadow-2xl">
                            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                <h3 className="text-lg font-black text-white">Active Positions</h3>
                                <span className="text-success font-black">+18.4% This Month</span>
                            </div>

                            <div className="space-y-4">
                                {/* Mock Notification */}
                                <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 relative overflow-hidden">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black">TSLA</div>
                                            <div>
                                                <div className="font-bold text-white text-sm">Tesla Inc.</div>
                                                <div className="text-[10px] text-primary font-black uppercase tracking-wider">Breakout Alert</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-text-muted font-bold">Now</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div className="px-3 py-1.5 rounded-lg bg-black/20 text-center">
                                            <div className="text-[9px] text-text-muted font-bold uppercase">Entry</div>
                                            <div className="text-xs font-black text-white">$405 - $410</div>
                                        </div>
                                        <div className="px-3 py-1.5 rounded-lg bg-black/20 text-center">
                                            <div className="text-[9px] text-text-muted font-bold uppercase">Target</div>
                                            <div className="text-xs font-black text-success">$450</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center">
                                    <div>
                                        <div className="text-white font-bold">NVDA</div>
                                        <div className="text-xs text-text-muted">Swing Long</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-success font-black text-lg">+12.4%</div>
                                        <div className="text-xs text-text-muted">Open P&L</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
