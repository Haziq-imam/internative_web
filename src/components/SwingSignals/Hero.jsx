import React from 'react';
import { CheckCircle2, Users } from 'lucide-react';
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Tactical Swing Alerts
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            Swing Trading Signals That Capture the <GradientText>Sweet Spot</GradientText>
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            Get expert swing trade alerts across stocks, options, crypto, and futures designed for traders with full-time jobs and busy lives. Our analysts identify high-probability multi-day setups with 3-21 day hold times delivered with precise entry zones, stop-loss protection, and multiple profit targets. Trade smart, not hard.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                            {[
                                "79% Win Rate on Swing Signals",
                                "+87% Average Winner",
                                "3-21 Day Hold Time",
                                "2-4 Signals Daily"
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3 py-2 px-4 rounded-xl bg-white/5 border border-white/5">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                                    <span className="text-sm font-bold text-white whitespace-nowrap">{stat}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link to="/pricing">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base shadow-neon">Get Swing Trading Signals - Try Free 7 Days</Button>
                            </Link>
                            <Link to="/#performance">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">View December Swing Performance</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative">
                        <div className="grid grid-cols-1 gap-4">
                            <GlassCard className="p-0 overflow-hidden border-white/10 bg-[#0A051A]/90 backdrop-blur-xl shadow-2xl relative">
                                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
                                    <div className="flex-1 p-6 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 text-center space-y-4">
                                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                                                <Users className="w-8 h-8 text-primary" />
                                            </div>
                                            <h4 className="font-bold text-white">Busy Professional</h4>
                                            <p className="text-xs text-text-muted">Checking phone during lunch break</p>
                                            <div className="px-3 py-1 bg-success/20 text-success text-[10px] font-black rounded-full inline-block">Profit: +$2,140</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-6 bg-primary/5">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xs">S</div>
                                                <div>
                                                    <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider">New Notification</div>
                                                    <div className="text-xs font-bold text-white">Swing Trading Alert</div>
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-[#0F0924] border border-primary/30 space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-black text-white">NVDA Swing Alert</span>
                                                    <span className="text-[10px] text-primary font-bold">Now</span>
                                                </div>
                                                <div className="text-[10px] text-text-secondary leading-relaxed">
                                                    Entry: $520-$528<br />
                                                    Hold: 7-14 Days<br />
                                                    Target: $610 (+16.4%)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
