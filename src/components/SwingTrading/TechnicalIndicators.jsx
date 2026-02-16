import React from 'react';
import { Activity, TrendingUp, BarChart3, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const TechnicalIndicators = () => {
    const indicators = [
        {
            icon: TrendingUp,
            title: "Moving Averages",
            description: "Smooth price data revealing trend direction and providing dynamic support/resistance levels. The 20-day, 50-day, and 200-day SMAs form the foundation of swing trading analysis.",
            keyLevels: [
                {
                    level: "20-Day MA",
                    usage: "Initial pullback support in uptrends, quick trend changes"
                },
                {
                    level: "50-Day MA",
                    usage: "Deeper correction support, intermediate trend confirmation"
                },
                {
                    level: "200-Day MA",
                    usage: "Major trend divider, long-term support/resistance"
                }
            ],
            signals: [
                "Stock above all 3 MAs = confirmed uptrend",
                "Pullbacks to 20/50-day MA provide entry opportunities",
                "Golden cross (50-day > 200-day) confirms trend strength",
                "Price crossing above 20-day MA signals renewed momentum"
            ]
        },
        {
            icon: Activity,
            title: "RSI (Relative Strength Index)",
            description: "Measures momentum on 0-100 scale. During strong uptrends, RSI can remain above 70 for extended periods—this signals trend strength rather than imminent reversal.",
            keyLevels: [
                {
                    level: "RSI > 50",
                    usage: "Confirms upward momentum and trend strength"
                },
                {
                    level: "RSI 30-40",
                    usage: "Oversold in uptrend—excellent entry signals"
                },
                {
                    level: "RSI 65-70",
                    usage: "Overbought in downtrend—shorting opportunities"
                }
            ],
            signals: [
                "RSI consistently above 50 confirms upward momentum",
                "Pullbacks to 30-35 in uptrends provide entry signals",
                "Bullish divergence: price lower lows, RSI higher lows",
                "Multi-timeframe RSI alignment improves signal reliability"
            ]
        },
        {
            icon: BarChart3,
            title: "MACD (Moving Average Convergence Divergence)",
            description: "Tracks momentum through relationship between 12-day and 26-day EMAs. The MACD line, signal line, and histogram provide entry and exit timing signals.",
            keyLevels: [
                {
                    level: "Zero Line Cross",
                    usage: "MACD above zero confirms uptrend strength"
                },
                {
                    level: "Bullish Crossover",
                    usage: "MACD line crosses above signal line—buy signal"
                },
                {
                    level: "Histogram Growth",
                    usage: "Expanding bars show increasing momentum"
                }
            ],
            signals: [
                "MACD crossover during pullback to support = high probability",
                "Zero-line crossover validates uptrend strength",
                "Histogram expansion shows momentum before crossovers",
                "MACD below zero during uptrend warns of exhaustion"
            ]
        },
        {
            icon: Zap,
            title: "Volume Analysis",
            description: "Confirms price movements' legitimacy and strength. Breakouts on volume below average frequently fail—genuine breakouts show 2-3x average volume.",
            keyLevels: [
                {
                    level: "Breakout Volume",
                    usage: "2-3x 50-day average confirms institutional participation"
                },
                {
                    level: "Pullback Volume",
                    usage: "Decreasing volume shows weakening selling pressure"
                },
                {
                    level: "Volume Climax",
                    usage: "Unusually high volume signals accumulation/distribution"
                }
            ],
            signals: [
                "Breakouts require volume 50-100%+ above average",
                "Declining volume during pullbacks = healthy correction",
                "Rising prices on declining volume warns of reversal",
                "Volume precedes price—watch for unusual activity"
            ]
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Essential <GradientText>Technical Indicators</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Four core indicators that form the foundation of swing trading analysis. Successful traders combine 2-3 complementary indicators rather than relying on any single signal.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {indicators.map((indicator, index) => {
                        const Icon = indicator.icon;
                        return (
                            <GlassCard key={index} className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white mb-2">{indicator.title}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">{indicator.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mt-6">
                                    <div>
                                        <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">Key Levels</h4>
                                        <div className="space-y-2">
                                            {indicator.keyLevels.map((level, i) => (
                                                <div key={i} className="p-3 bg-white/5 rounded-lg">
                                                    <div className="text-xs font-black text-primary mb-1">{level.level}</div>
                                                    <div className="text-xs text-text-secondary">{level.usage}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">Trading Signals</h4>
                                        <div className="space-y-2">
                                            {indicator.signals.map((signal, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-success/50 mt-1.5 shrink-0" />
                                                    <p className="text-text-secondary text-xs">{signal}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* Multi-Timeframe Analysis */}
                <div className="mt-12 max-w-5xl mx-auto">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Multi-Timeframe Analysis</h3>
                    <GlassCard className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-black text-primary">W</span>
                                </div>
                                <h4 className="text-lg font-black text-white mb-2">Weekly Charts</h4>
                                <p className="text-text-secondary text-sm">Overall trend direction and major support/resistance levels</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-xl bg-success/20 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-black text-success">D</span>
                                </div>
                                <h4 className="text-lg font-black text-white mb-2">Daily Charts</h4>
                                <p className="text-text-secondary text-sm">Specific entry/exit timing and pattern identification</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-xl bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-black text-yellow-400">4H</span>
                                </div>
                                <h4 className="text-lg font-black text-white mb-2">4-Hour Charts</h4>
                                <p className="text-text-secondary text-sm">Refined entry pricing within the trading day</p>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl text-center">
                            <p className="text-sm text-text-secondary">
                                <span className="text-white font-bold">Alignment across all three timeframes produces highest-probability setups.</span> Weekly determines trade direction, daily identifies patterns, intraday times exact entries.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default TechnicalIndicators;
