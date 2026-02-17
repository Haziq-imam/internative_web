import React from 'react';
import { TrendingUp, Clock, Target, CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

import { Link } from 'react-router-dom';

const SwingHero = () => {
    return (
        <Section className="pt-32 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                            Master <GradientText>Swing Trading</GradientText> Stocks
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                            Capture multi-day price moves with professional technical setups. Hold positions 2 days to 6 weeks while working full-time—no constant monitoring required.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-primary mb-1">45-55%</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Win Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-success mb-1">2-6</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Week Holds</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">5-20%</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Per Trade</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/pricing">
                                <Button size="lg" className="shadow-neon">
                                    Get Swing Trading Signals
                                </Button>
                            </Link>
                            <Link to="/signals/stock-trading-signals">
                                <Button size="lg" variant="outline">
                                    View Sample Setups
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Visual - Trading Setup Mockup */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                        <GlassCard className="relative p-6 rounded-[2.5rem] border-primary/30 shadow-neon overflow-hidden">
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">This Week's Setups</h3>
                                <p className="text-xs text-text-secondary">Multi-day position opportunities</p>
                            </div>

                            {/* Active Setups */}
                            <div className="space-y-4">
                                {/* Setup 1 - Trend Following */}
                                <div className="p-4 bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 rounded-xl">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <div className="text-xl font-black text-white">NVDA</div>
                                            <div className="text-xs text-text-muted">Pullback to 50-Day MA</div>
                                        </div>
                                        <div className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full">
                                            <span className="text-xs font-black text-primary">TREND FOLLOW</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-xs">
                                        <div>
                                            <div className="text-text-muted mb-1">Entry</div>
                                            <div className="text-white font-bold">$875.50</div>
                                        </div>
                                        <div>
                                            <div className="text-text-muted mb-1">Target</div>
                                            <div className="text-success font-bold">$925</div>
                                        </div>
                                        <div>
                                            <div className="text-text-muted mb-1">Stop</div>
                                            <div className="text-red-400 font-bold">$850</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Setup 2 - Breakout */}
                                <div className="p-4 bg-gradient-to-r from-yellow-500/20 to-transparent border border-yellow-500/30 rounded-xl">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <div className="text-xl font-black text-white">META</div>
                                            <div className="text-xs text-text-muted">Ascending Triangle Break</div>
                                        </div>
                                        <div className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full">
                                            <span className="text-xs font-black text-yellow-400">BREAKOUT</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-xs">
                                        <div>
                                            <div className="text-text-muted mb-1">Entry</div>
                                            <div className="text-white font-bold">$512</div>
                                        </div>
                                        <div>
                                            <div className="text-text-muted mb-1">Target</div>
                                            <div className="text-success font-bold">$545</div>
                                        </div>
                                        <div>
                                            <div className="text-text-muted mb-1">Stop</div>
                                            <div className="text-red-400 font-bold">$502</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Setup 3 - Catalyst */}
                                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-transparent border border-blue-500/30 rounded-xl">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <div className="text-xl font-black text-white">AAPL</div>
                                            <div className="text-xs text-text-muted">Pre-Earnings Momentum</div>
                                        </div>
                                        <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full">
                                            <span className="text-xs font-black text-blue-400">CATALYST</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-xs">
                                        <div>
                                            <div className="text-text-muted mb-1">Entry</div>
                                            <div className="text-white font-bold">$185.20</div>
                                        </div>
                                        <div>
                                            <div className="text-text-muted mb-1">Target</div>
                                            <div className="text-success font-bold">$195</div>
                                        </div>
                                        <div>
                                            <div className="text-text-muted mb-1">Stop</div>
                                            <div className="text-red-400 font-bold">$180</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Footer */}
                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success" />
                                    <span className="text-text-secondary">8 Active Positions</span>
                                </div>
                                <div className="text-text-muted">Updated 2 hours ago</div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SwingHero;
