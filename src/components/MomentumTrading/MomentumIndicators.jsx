import React from 'react';
import { Activity, Gauge, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const MomentumIndicators = () => {
    const indicators = [
        {
            icon: Activity,
            title: "RSI (Relative Strength Index)",
            level: "Intermediate",
            description: "Measures the speed and change of price movements. In momentum trading, RSI above 50 signals strength, and sustained levels above 70 indicate powerful trends, not necessarily reversals.",
            keyLevels: [
                {
                    label: "50 Level",
                    value: "Bull/Bear Line",
                    desc: "Above 50 = Bullish momentum. Below 50 = Bearish."
                },
                {
                    label: "70 Level",
                    value: "Strong Trend",
                    desc: "Sustained >70 confirms strong uptrend, unlike mean reversion."
                },
                {
                    label: "Divergence",
                    value: "Warning Sign",
                    desc: "Price higher highs + RSI lower highs = Weakening momentum."
                }
            ]
        },
        {
            icon: TrendingUp,
            title: "MACD (Moving Average Convergence Divergence)",
            level: "Advanced",
            description: "Trend-following momentum indicator showing the relationship between two moving averages. Crossovers and histogram expansion signal acceleration.",
            keyLevels: [
                {
                    label: "Zero Line",
                    value: "Trend Conf.",
                    desc: "MACD > 0 confirms uptrend establishment."
                },
                {
                    label: "Crossover",
                    value: "Entry/Exit",
                    desc: "MACD line crosses Signal line = Momentum shift."
                },
                {
                    label: "Histogram",
                    value: "Acceleration",
                    desc: "Bars growing larger = Momentum accelerating."
                }
            ]
        },
        {
            icon: Gauge,
            title: "ADX (Average Directional Index)",
            level: "Expert",
            description: "Quantifies trend strength regardless of direction. Essential for filtering whether a stock is actually trending or just choppy.",
            keyLevels: [
                {
                    label: "Below 20",
                    value: "Non-Trending",
                    desc: "Market is choppy/sideways. Avoid momentum strategies."
                },
                {
                    label: "Above 25",
                    value: "Trending",
                    desc: "Strong trend exists. Ideal for momentum entries."
                },
                {
                    label: "Above 40",
                    value: "Extreme Trend",
                    desc: "Very strong trend. Watch for exhaustion/climax."
                }
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background-primary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Essential <GradientText>Momentum Indicators</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Quantify the strength of price movement. These tools help distinguish genuine high-velocity trends from temporary spikes that are likely to fail.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {indicators.map((indicator, index) => {
                        const Icon = indicator.icon;
                        return (
                            <GlassCard key={index} className="p-8 relative group hover:border-blue-500/30 transition-all duration-300">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Icon className="w-24 h-24 text-white" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                            <Icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-white">{indicator.title}</h3>
                                            <span className="text-xs uppercase tracking-wider font-bold text-blue-400">{indicator.level}</span>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary text-sm leading-relaxed mb-8 h-20">
                                        {indicator.description}
                                    </p>

                                    <div className="space-y-4">
                                        {indicator.keyLevels.map((level, i) => (
                                            <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/20 transition-colors">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-xs font-black text-white uppercase tracking-wider">{level.label}</span>
                                                    <span className="text-xs font-bold text-blue-400">{level.value}</span>
                                                </div>
                                                <div className="text-xs text-text-secondary">
                                                    {level.desc}
                                                </div>
                                            </div>
                                        ))}
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

export default MomentumIndicators;
