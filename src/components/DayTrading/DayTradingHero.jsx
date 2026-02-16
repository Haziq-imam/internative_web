import React from 'react';
import { Clock, Zap, Activity } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const DayTradingHero = () => {
    return (
        <Section className="pt-32 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-purple-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <Clock className="w-4 h-4 text-orange-400 mr-2" />
                            <span className="text-sm font-bold text-orange-300">Market Open to Close Only</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                            Master <GradientText className="from-orange-400 via-pink-500 to-purple-500">Day Trading</GradientText>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                            Capitalize on intraday volatility. Buy and sell within the same session, avoiding all overnight risk. Speed, discipline, and adequate capital are your tools.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">9:30-4:00</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Trading Hours</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-pink-400 mb-1">$25k+</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Capital Req (PDT)</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-1">50-60%</div>
                                <div className="text-xs md:text-sm text-text-muted font-bold">Target Win Rate</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="shadow-neon bg-gradient-to-r from-orange-600 to-pink-600 border-none">
                                Start Day Trading
                            </Button>
                            <Button size="lg" variant="outline">
                                View Requirements
                            </Button>
                        </div>
                    </div>

                    {/* Right Visual - Intraday Chart Mockup */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                        <GlassCard className="relative p-6 rounded-[2.5rem] border-orange-500/30 shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)] overflow-hidden">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1">Intraday Action</h3>
                                    <p className="text-xs text-orange-300">TSLA • 1 Min Chart</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded">+2.4% Today</div>
                                </div>
                            </div>

                            {/* Chart Area Visualization */}
                            <div className="relative h-48 w-full bg-gradient-to-t from-orange-500/5 to-transparent rounded-xl border border-white/5 mb-4 overflow-hidden">
                                {/* SVG Trendline */}
                                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                    <path d="M0,150 C20,140 40,160 60,130 C80,100 100,110 120,90 C140,70 160,85 180,60 C200,35 220,50 240,40 C260,30 280,20 300,30 L300,200 L0,200 Z" fill="url(#gradient)" opacity="0.2" />
                                    <path d="M0,150 C20,140 40,160 60,130 C80,100 100,110 120,90 C140,70 160,85 180,60 C200,35 220,50 240,40 C260,30 280,20 300,30" stroke="#F97316" strokeWidth="2" fill="none" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#F97316" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Trade Markers */}
                                <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-green-500 rounded-full box-shadow-glow" />
                                <div className="absolute top-[55%] left-[20%] text-[10px] text-green-400 font-bold ml-3">Buy</div>

                                <div className="absolute top-[20%] left-[80%] w-2 h-2 bg-red-500 rounded-full box-shadow-glow" />
                                <div className="absolute top-[15%] left-[80%] text-[10px] text-red-400 font-bold ml-3">Sell</div>
                            </div>

                            {/* P&L Stats */}
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="p-2 bg-white/5 rounded-lg">
                                    <div className="text-[10px] text-text-muted">Realized P&L</div>
                                    <div className="text-sm font-black text-green-400">+$420.50</div>
                                </div>
                                <div className="p-2 bg-white/5 rounded-lg">
                                    <div className="text-[10px] text-text-muted">Trades</div>
                                    <div className="text-sm font-black text-white">4</div>
                                </div>
                                <div className="p-2 bg-white/5 rounded-lg">
                                    <div className="text-[10px] text-text-muted">Open Risk</div>
                                    <div className="text-sm font-black text-text-secondary">$0.00</div>
                                </div>
                            </div>

                        </GlassCard>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default DayTradingHero;
