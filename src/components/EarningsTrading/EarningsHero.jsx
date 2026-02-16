import React from 'react';
import { TrendingUp, TrendingDown, Zap, CheckCircle2, BarChart3 } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

import { Link } from 'react-router-dom';

const EarningsHero = () => {
    return (
        <Section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -ml-40 -mb-40" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            Earnings Trading Strategy: <GradientText>Master Quarterly Reports</GradientText> for Explosive Profits
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            Profit from the 5-30% price moves surrounding quarterly earnings announcements. Our expert analysts identify high-probability setups using IV dynamics, historical patterns, and statistical edges—delivering precise strategies for volatility selling, directional plays, and post-earnings drift.
                        </p>

                        <div className="flex flex-col gap-3 mb-8">
                            {[
                                "65-75% Win Rate on Volatility Selling Strategies",
                                "IV Crush Analysis for Every Earnings Play",
                                "Pre-Earnings Momentum & Post-Earnings Drift",
                                "Defined-Risk Spreads with Maximum Loss Protection"
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-bold text-white justify-center lg:justify-start">
                                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                                    <span>{stat}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link to="/pricing">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base shadow-neon">Get Earnings Signals - Try Free 7 Days</Button>
                            </Link>
                            <Link to="/products/stock-signals">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">View Earnings Calendar</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual - Earnings Mockup */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                        <GlassCard className="relative p-6 rounded-[2.5rem] border-white/10 bg-[#0A051A]/90 backdrop-blur-xl shadow-2xl">
                            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                <h3 className="text-lg font-black text-white">This Week's Earnings</h3>
                                <span className="text-primary font-black text-xs uppercase tracking-wider">High Probability</span>
                            </div>

                            <div className="space-y-4">
                                {/* Volatility Sell Setup */}
                                <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 relative overflow-hidden">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm">
                                                NVDA
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm">NVIDIA Corp</div>
                                                <div className="text-[10px] text-primary font-black uppercase tracking-wider">Volatility Sell Setup</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-text-muted font-bold">Wed After Close</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="px-3 py-1.5 rounded-lg bg-black/20 text-center">
                                            <div className="text-[9px] text-text-muted font-bold uppercase">IV Rank</div>
                                            <div className="text-xs font-black text-primary">78</div>
                                        </div>
                                        <div className="px-3 py-1.5 rounded-lg bg-black/20 text-center">
                                            <div className="text-[9px] text-text-muted font-bold uppercase">Expected</div>
                                            <div className="text-xs font-black text-white">±8.2%</div>
                                        </div>
                                        <div className="px-3 py-1.5 rounded-lg bg-black/20 text-center">
                                            <div className="text-[9px] text-text-muted font-bold uppercase">Historical</div>
                                            <div className="text-xs font-black text-success">±6.1%</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Directional Play */}
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                                                <TrendingUp className="w-6 h-6 text-success" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-sm">META</div>
                                                <div className="text-xs text-text-muted">Pre-Earnings Momentum</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-success font-black">+4.2%</div>
                                            <div className="text-xs text-text-muted">This Week</div>
                                        </div>
                                    </div>
                                </div>

                                {/* PEAD Opportunity */}
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                                <BarChart3 className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-sm">TSLA</div>
                                                <div className="text-xs text-text-muted">Post-Earnings Drift</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-blue-400 font-black text-sm">Entry Signal</div>
                                            <div className="text-xs text-text-muted">After +12% gap</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <div className="bg-white/5 p-3 rounded-xl text-center">
                                        <div className="text-primary font-black text-2xl">23</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase">Earnings This Week</div>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-xl text-center">
                                        <div className="text-success font-black text-2xl">71%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase">Win Rate (Q4)</div>
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

export default EarningsHero;
