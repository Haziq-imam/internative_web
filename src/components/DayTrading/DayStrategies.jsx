import React from 'react';
import { Clock, Zap, Target, ArrowRightLeft, TrendingUp, BarChart } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const DayStrategies = () => {
    const strategies = [
        {
            icon: Zap,
            title: "Momentum Trading",
            subtitle: "Follow The Trend",
            colorClass: "text-blue-400",
            bgClass: "bg-blue-500/10 border-blue-500/20",
            description: "Buy stocks accelerating in price on strong volume. 'Buy high, sell higher' within minutes as momentum peaks.",
            setup: ["3-5% Intraday Move", "Volume > 2x Avg", "Relative Volume Surge", "News Catalyst"],
            execution: ["Enter on 1-min/5-min breakouts", "Stop below recent low candle", "Exit when volume/price stalls"]
        },
        {
            icon: BarChart,
            title: "Gap & Go",
            subtitle: "Morning Volatility",
            colorClass: "text-purple-400",
            bgClass: "bg-purple-500/10 border-purple-500/20",
            description: "Stocks gapping up/down overnight often continue in that direction. Capitalize on the opening bell volatility.",
            setup: ["Gap > 4%", "High Pre-market Volume", "Clear Fundamental Catalyst", "Holds opening range"],
            execution: ["Enter on break of opening 5-min high", "Stop at opening low", "Target gap extension"]
        },
        {
            icon: Clock,
            title: "Scalping",
            subtitle: "High Frequency",
            colorClass: "text-yellow-400",
            bgClass: "bg-yellow-500/10 border-yellow-500/20",
            description: "Profiting from small price changes ($0.05-$0.20) dozens of times a day. Speed is everything.",
            setup: ["Tight Spreads", "High Liquidity", "Level 2 Imbalances", "1-min Chart Patterns"],
            execution: ["Instant execution (Hotkeys)", "Seconds to Minutes holding", "High Share Size"]
        },
        {
            icon: ArrowRightLeft,
            title: "Reversal Trading",
            subtitle: "Counter-Trend",
            colorClass: "text-red-400",
            bgClass: "bg-red-500/10 border-red-500/20",
            description: "Identifying overextended moves (overbought/sold) and betting on a snap-back to the mean.",
            setup: ["RSI > 70 or < 30", "Parabolic Price Move", "Volume Exhaustion Spike", "Reversal Candle (Hammer/Star)"],
            execution: ["Short highs/Buy lows", "Tight stops above/below wick", "Quick profits on pullback"]
        },
        {
            icon: Target,
            title: "Breakout Trading",
            subtitle: "Pattern Breaks",
            colorClass: "text-green-400",
            bgClass: "bg-green-500/10 border-green-500/20",
            description: "Entering when price clears a defined resistance level or chart pattern on heavy volume.",
            setup: ["Consolidation Pattern", "Clear Resistance Level", "Volume Surge on Break", "Sector Confirmation"],
            execution: ["Buy the break or retest", "Stop below breakout level", "Target pattern height"]
        },
        {
            icon: TrendingUp,
            title: "Range Trading",
            subtitle: "Mean Reversion",
            colorClass: "text-orange-400",
            bgClass: "bg-orange-500/10 border-orange-500/20",
            description: "Buying support and selling resistance in sideways markets. Best for low volatility periods.",
            setup: ["Defined Support/Resistance", "Sideways Channel", "Lower Volume", "Oscillator Verification"],
            execution: ["Buy Support / Sell Resistance", "Stop just outside range", "Profit target at midpoint"]
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Intraday <GradientText>Strategies</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Successful day traders specialize in 1-3 specific setups. Whether capturing momentum or scalping pennies, consistency comes from mastering a single approach.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {strategies.map((strategy, index) => {
                        const Icon = strategy.icon;
                        return (
                            <GlassCard key={index} className={`p-6 ${strategy.bgClass} flex flex-col h-full hover:scale-[1.02] transition-transform duration-300`}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10`}>
                                        <Icon className={`w-6 h-6 ${strategy.colorClass}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white">{strategy.title}</h3>
                                        <div className={`text-xs font-bold ${strategy.colorClass} uppercase tracking-wider`}>{strategy.subtitle}</div>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                                    {strategy.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    <div className="bg-black/20 p-3 rounded-lg">
                                        <div className="text-[10px] font-bold text-text-muted uppercase mb-2">Setup Criteria</div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {strategy.setup.map((item, i) => (
                                                <div key={i} className="flex items-center gap-1.5">
                                                    <div className={`w-1 h-1 rounded-full ${strategy.colorClass.replace('text-', 'bg-')}`} />
                                                    <span className="text-[10px] text-text-secondary">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="border-t border-white/5 pt-3">
                                        <div className="text-[10px] font-bold text-text-muted uppercase mb-1">Execution</div>
                                        <p className="text-xs text-white/80">{strategy.execution.join(', ')}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default DayStrategies;
