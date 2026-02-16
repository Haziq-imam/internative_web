import React from 'react';
import { Target, Shield, AlertTriangle, Scale } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const DayTradingRisk = () => {
    const rules = [
        {
            icon: Scale,
            title: "Position Sizing",
            desc: "Risk 1-2% of Account Max",
            detail: "If you have $25k, max loss per trade is $250. Calculate share size so your stop loss = $250 loss."
        },
        {
            icon: Shield,
            title: "Stop-Losses",
            desc: "Hard Stops Required",
            detail: "Intraday moves happen in seconds. Hard stops prevent catastrophic losses when markets spike against you."
        },
        {
            icon: AlertTriangle,
            title: "Daily Max Loss",
            desc: "Walk Away Rule",
            detail: "Set a daily loss limit (e.g., 3-5% of account). If hit, stop trading immediately to prevent emotional spiral."
        },
        {
            icon: Target,
            title: "Win Rate Reality",
            desc: "50-60% target, not 90%",
            detail: "Profit comes from winners being 2x larger than losers, not from being right every time."
        }
    ];

    const sizingExample = {
        capital: "$50,000",
        riskPerTrade: "2% ($1,000)",
        entry: "$100.00",
        stop: "$98.50",
        riskPerShare: "$1.50",
        maxShares: "666 Shares",
        positionValue: "$66,600 (Margin Used)"
    };

    return (
        <Section className="py-24 bg-background-primary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        <GradientText>Survival</GradientText> Rules
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Day trading is risk management first, strategy second. One bad day without rules can wipe out months of progress.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                    {/* Rules Grid */}
                    <div className="grid gap-6">
                        {rules.map((rule, index) => {
                            const Icon = rule.icon;
                            return (
                                <GlassCard key={index} className="p-6 flex items-start gap-6 border-red-500/10 hover:border-red-500/30 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white mb-1">{rule.title}</h3>
                                        <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">{rule.desc}</div>
                                        <p className="text-text-secondary text-sm leading-relaxed">{rule.detail}</p>
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </div>

                    {/* Example Calculation Box */}
                    <GlassCard className="p-8 bg-blue-900/5 border-blue-500/20 shadow-lg">
                        <h3 className="text-2xl font-black text-white mb-6 text-center">Position Sizing Example</h3>
                        <div className="space-y-4 font-mono text-sm max-w-sm mx-auto">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-text-muted">Account Capital</span>
                                <span className="text-white font-bold">{sizingExample.capital}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-text-muted">Max Risk (2%)</span>
                                <span className="text-red-400 font-bold">{sizingExample.riskPerTrade}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-text-muted">Entry Price</span>
                                <span className="text-white">{sizingExample.entry}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-text-muted">Stop Loss</span>
                                <span className="text-white">{sizingExample.stop}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-text-muted">Risk Per Share</span>
                                <span className="text-orange-400">{sizingExample.riskPerShare}</span>
                            </div>
                            <div className="flex justify-between pt-4 text-lg">
                                <span className="text-blue-300 font-bold">Max Share Size</span>
                                <span className="text-white font-black">{sizingExample.maxShares}</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default DayTradingRisk;
