import React from 'react';
import { TrendingUp, Zap, Clock, Activity } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

import { Link } from 'react-router-dom';

const MomentumHero = () => {
    return (
        <Section className="pt-32 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <Zap className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-sm font-bold text-blue-300">High-Velocity Trade Alerts</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                            Ride the <GradientText className="from-blue-400 via-purple-400 to-pink-400">Momentum</GradientText>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                            Capture accelerating price moves with trend-following signals. Buy strength, sell weakness, and enter high-velocity trades backed by volume and institutional flow.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">45-55%</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Win Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-1">3-10%</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Intraday Target</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-pink-400 mb-1">2:1+</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Reward-Risk</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/pricing">
                                <Button size="lg" className="shadow-neon bg-gradient-to-r from-blue-600 to-purple-600 border-none">
                                    Get Momentum Signals
                                </Button>
                            </Link>
                            <Link to="/products/stock-signals">
                                <Button size="lg" variant="outline">
                                    View Recent Winners
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Visual - Momentum Scanner Mockup */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                        <GlassCard className="relative p-6 rounded-[2.5rem] border-blue-500/30 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] overflow-hidden">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1">Live Momentum Scanner</h3>
                                    <p className="text-xs text-blue-300">Real-time relative strength alerts</p>
                                </div>
                                <div className="animate-pulse">
                                    <div className="w-3 h-3 bg-red-500 rounded-full box-shadow-glow" />
                                </div>
                            </div>

                            {/* Active Signals */}
                            <div className="space-y-4">
                                {/* Signal 1 - Breakout */}
                                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl relative overflow-hidden group">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xl font-black text-white">NVDA</div>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">BREAKOUT</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-black text-success">+4.2%</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end text-xs">
                                        <div>
                                            <div className="text-text-muted mb-1">Vol: <span className="text-white">2.1x Avg</span></div>
                                            <div className="text-text-muted">RSI: <span className="text-white">72 (High Mom)</span></div>
                                        </div>
                                        <div className="flex items-center gap-1 text-blue-300">
                                            <Activity className="w-3 h-3" />
                                            <span>Surging</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Signal 2 - Gap & Go */}
                                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xl font-black text-white">TSLA</div>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">GAP & GO</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-black text-success">+6.8%</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end text-xs">
                                        <div>
                                            <div className="text-text-muted mb-1">Gap: <span className="text-white">+5.2%</span></div>
                                            <div className="text-text-muted">News: <span className="text-white">Delivery Beat</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Signal 3 - Catalyst */}
                                <div className="p-4 bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 rounded-xl relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500" />
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xl font-black text-white">AMD</div>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">CATALYST</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-black text-success">+3.5%</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end text-xs">
                                        <div>
                                            <div className="text-text-muted mb-1">Vol: <span className="text-white">3.5x Avg</span></div>
                                            <div className="text-text-muted">Sector: <span className="text-white">Semis Leading</span></div>
                                        </div>
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

export default MomentumHero;
