import React from 'react';
import { Play, Rewind, BarChart3, Clock } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const TradingStrategies = () => {
    const strategies = [
        {
            icon: Play,
            title: "Gap and Go",
            subtitle: "Momentum Following",
            winRate: "40-55%",
            description: "Buy stocks gapping up or short stocks gapping down immediately at or shortly after market open, riding momentum in the gap direction rather than betting on reversal.",
            whenToUse: [
                "Gaps exceeding 4-5% with clear positive catalysts",
                "Pre-market volume above 100,000 shares",
                "Technical setups suggesting continuation probability",
                "Pre-market consolidation near highs/lows"
            ],
            execution: [
                "Entry: Breakout above pre-market high (conservative) or first 1-min candle high (aggressive)",
                "Stop-Loss: Just below pre-market support levels",
                "Position Size: 2-3% risk",
                "Exit: 5-8% profit targets or 10:30 AM time stop"
            ],
            color: "success",
            gradient: "from-success/20 to-transparent"
        },
        {
            icon: Rewind,
            title: "Fade the Gap",
            subtitle: "Mean Reversion",
            winRate: "55-65%",
            description: "Bet against initial gap direction, expecting price to revert toward the previous closing price and fill the gap. Exploits the 60-75% statistical tendency for gaps to fill.",
            whenToUse: [
                "Gaps without strong fundamental catalysts",
                "Gaps of 2-4% (large enough for profit, not extreme)",
                "Limited pre-market volume (under 2x average)",
                "Gaps occurring against the prevailing trend"
            ],
            execution: [
                "Entry: Wait 15-45 minutes for momentum exhaustion confirmation",
                "Stop-Loss: 1-3% above pre-market highs (gap ups) or below lows (gap downs)",
                "Position Size: 1-1.5% risk (conservative)",
                "Exit: Previous day's closing price (gap fill)"
            ],
            color: "primary",
            gradient: "from-primary/20 to-transparent"
        },
        {
            icon: BarChart3,
            title: "Opening Range Breakout",
            subtitle: "Hybrid Approach",
            winRate: "55-65%",
            description: "Define the first 15-30 minutes as the opening range, then trade breakouts from this range. Combines gap trading with range breakout strategies.",
            whenToUse: [
                "After initial gap volatility settles",
                "When gap direction is unclear",
                "Stocks with defined opening range consolidation",
                "Volume confirmation on breakout"
            ],
            execution: [
                "Entry: Breakout above/below opening range with 30-50% volume increase",
                "Stop-Loss: Just inside the opening range",
                "Position Size: 2-3% risk",
                "Exit: 1.5-2x opening range width or trailing stops"
            ],
            color: "blue-400",
            gradient: "from-blue-500/20 to-transparent"
        },
        {
            icon: Clock,
            title: "Gap Fill Trading",
            subtitle: "Specific Target Focus",
            winRate: "60-70%",
            description: "Specifically target the space created by gaps, entering positions with the explicit goal of profiting when price returns to fill the gap.",
            whenToUse: [
                "Small gaps (1-3%) with high fill probability",
                "Medium gaps (3-6%) with patience for 3-10 day holds",
                "Clear technical levels at gap fill zone",
                "No strong catalyst supporting gap direction"
            ],
            execution: [
                "Entry: After first signs of exhaustion (volume declining, failed new highs)",
                "Stop-Loss: Above gap high (for gap ups) or below gap low (for gap downs)",
                "Position Size: 1-2% risk, adjusted by gap size",
                "Exit: 50% at half-fill, 50% at complete fill with trailing stops"
            ],
            color: "purple-400",
            gradient: "from-purple-500/20 to-transparent"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        <GradientText>Four Proven Strategies</GradientText> for Gap Trading Success
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Each strategy serves different gap types and market conditions. Our alerts specify which approach to use for every setup, removing guesswork from your trading decisions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {strategies.map((strategy, index) => {
                        const Icon = strategy.icon;
                        return (
                            <GlassCard key={index} className="p-6 hover:border-white/20 transition-all duration-300">
                                <div className={`p-4 rounded-2xl bg-gradient-to-r ${strategy.gradient} border border-${strategy.color}/20 mb-4`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-${strategy.color}/20 flex items-center justify-center shrink-0`}>
                                            <Icon className={`w-6 h-6 text-${strategy.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-black text-white mb-1">{strategy.title}</h3>
                                            <p className="text-sm text-text-muted mb-2">{strategy.subtitle}</p>
                                            <div className={`inline-block px-3 py-1 rounded-full bg-${strategy.color}/20 text-${strategy.color} text-xs font-black`}>
                                                {strategy.winRate} Win Rate
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                                    {strategy.description}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-black text-white uppercase tracking-wider mb-3">When to Use:</h4>
                                        <div className="space-y-2">
                                            {strategy.whenToUse.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-${strategy.color}/50 mt-1.5 shrink-0`} />
                                                    <p className="text-text-secondary text-xs">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-white/5">
                                        <h4 className="text-xs font-black text-white uppercase tracking-wider mb-3">Execution Plan:</h4>
                                        <div className="space-y-2">
                                            {strategy.execution.map((item, i) => (
                                                <div key={i} className="text-text-secondary text-xs leading-relaxed">
                                                    <span className="text-white font-bold">{item.split(':')[0]}:</span>
                                                    {item.split(':')[1]}
                                                </div>
                                            ))}
                                        </div>
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

export default TradingStrategies;
