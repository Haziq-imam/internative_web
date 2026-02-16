import React from 'react';
import { TrendingUp, Zap, Target, BarChart3, Calendar } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const SwingStrategies = () => {
    const strategies = [
        {
            icon: TrendingUp,
            title: "Trend Following Swing Trading",
            winRate: "45-55%",
            gradient: "from-primary/20 to-primary/5",
            borderColor: "border-primary/30",
            badgeColor: "bg-primary/20 text-primary border-primary/50",
            description: "Captures intermediate moves within established directional trends by buying stocks showing consistent upward momentum or shorting stocks in persistent downtrends. Pullbacks within these trends provide optimal entry opportunities.",
            setup: [
                "Stock trading above 20-day, 50-day, and 200-day moving averages",
                "Moving averages aligned: 20-day > 50-day > 200-day",
                "Pullback to 20-day or 50-day MA support",
                "RSI bouncing from 30-40 range during pullback"
            ],
            execution: [
                "Enter on first sign of renewed strength after pullback",
                "Bullish candle, MACD crossover, or RSI bounce from oversold",
                "Stop-loss 3-5% below pullback low or MA support",
                "Profit targets: previous resistance, new highs, or 2.5:1 reward-risk"
            ]
        },
        {
            icon: Zap,
            title: "Breakout Swing Trading",
            winRate: "40-50%",
            gradient: "from-yellow-500/20 to-yellow-500/5",
            borderColor: "border-yellow-500/30",
            badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
            description: "Captures stocks moving beyond established resistance levels or chart patterns on increased volume, signaling the start of new trends or acceleration of existing ones. Volume confirmation is critical.",
            setup: [
                "Horizontal resistance, ascending triangle, or flat base pattern",
                "Volume spike 50-100%+ above 50-day average on breakout",
                "Stock closes above resistance, not just intraday spike",
                "Fundamental catalyst or sector strength supporting move"
            ],
            execution: [
                "Enter on breakout or wait for first pullback to breakout level",
                "Stop-loss just below breakout price ($49-$49.50 on $50 break)",
                "Position size 1-1.5% risk (conservative for higher failure rate)",
                "Profit target: pattern height projected upward or 1.5-2x risk"
            ]
        },
        {
            icon: Target,
            title: "Pullback and Retracement Trading",
            winRate: "50-60%",
            gradient: "from-success/20 to-success/5",
            borderColor: "border-success/30",
            badgeColor: "bg-success/20 text-success border-success/50",
            description: "Enters established trends during temporary price retracements, buying the dip in uptrends or shorting the bounce in downtrends. Healthy trends correct 30-50% before resuming primary direction.",
            setup: [
                "Established uptrend confirmed on weekly and daily charts",
                "Pullback to 20-day or 50-day MA, or Fibonacci 38.2-61.8% levels",
                "Decreasing volume during pullback (selling pressure weakening)",
                "Bullish candlestick patterns at support (hammer, morning star)"
            ],
            execution: [
                "Enter when pullback shows signs of ending and resumption beginning",
                "RSI bouncing from 30-40, MACD declining selling pressure",
                "Stop-loss below pullback low, typically 3-7% depending on volatility",
                "Targets: prior high or technical projections of trend leg completion"
            ]
        },
        {
            icon: Calendar,
            title: "News and Earnings Catalyst Trading",
            winRate: "40-55%",
            gradient: "from-blue-500/20 to-blue-500/5",
            borderColor: "border-blue-500/30",
            badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/50",
            description: "Positions ahead of scheduled events—earnings reports, FDA approvals, product launches—anticipating price moves when news releases. Captures pre-event momentum, exiting before actual announcement.",
            setup: [
                "Scheduled catalyst 1-3 weeks away (earnings, FDA decision, launch)",
                "Fundamental analysis suggests positive outcome likely",
                "Technical breakout or accumulation pattern confirming positioning",
                "Analyst estimates being raised or insider buying activity"
            ],
            execution: [
                "Enter 1-3 weeks before event on technical confirmation",
                "Exit 50-100% of position 1-2 days before actual event",
                "Position size 1% or less risk (elevated binary risk)",
                "Stop-loss below technical support, accept gap-through risk"
            ]
        },
        {
            icon: BarChart3,
            title: "Range-Bound Swing Trading",
            winRate: "55-65%",
            gradient: "from-purple-500/20 to-purple-500/5",
            borderColor: "border-purple-500/30",
            badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/50",
            description: "Profits from stocks oscillating between defined support and resistance levels without clear directional trends. Buy near support, sell near resistance, capturing oscillations in sideways markets.",
            setup: [
                "Price touching both support and resistance 2-3+ times each",
                "Range width minimum 8-10% between support and resistance",
                "Decreasing volume during consolidation, spikes at boundaries",
                "RSI or Stochastics showing oversold (<30) at support"
            ],
            execution: [
                "Buy as price bounces from support with oscillator confirmation",
                "Sell near resistance when RSI reaches overbought (>70)",
                "Stop-loss just below support for longs, above resistance for shorts",
                "Exit if range breaks—decreasing width or extended time signals breakout"
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Proven <GradientText>Swing Trading Strategies</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Five battle-tested approaches for different market conditions. Successful swing traders adapt their strategy to current market environments rather than forcing one approach continuously.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {strategies.map((strategy, index) => {
                        const Icon = strategy.icon;
                        return (
                            <GlassCard key={index} className={`p-6 bg-gradient-to-br ${strategy.gradient} ${strategy.borderColor}`}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-black text-white">{strategy.title}</h3>
                                        </div>
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full border ${strategy.badgeColor}`}>
                                            <span className="text-xs font-black">{strategy.winRate} Win Rate</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                    {strategy.description}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">Setup Requirements</h4>
                                        <div className="space-y-2">
                                            {strategy.setup.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 shrink-0" />
                                                    <p className="text-text-secondary text-xs">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">Execution Plan</h4>
                                        <div className="space-y-2">
                                            {strategy.execution.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 shrink-0" />
                                                    <p className="text-text-secondary text-xs">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* Key Insight */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <GlassCard className="p-6 bg-primary/5 border-primary/20">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-2">Strategy Selection Matters</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    No single strategy works in all market conditions. Trend following excels in strong trending markets, breakout trading suits consolidating markets preparing for directional moves, and range trading profits during sideways periods. The most successful swing traders identify current market conditions and apply the appropriate strategy rather than forcing one approach always. Our alerts classify each setup by strategy type, helping you match opportunities to current market environments.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default SwingStrategies;
