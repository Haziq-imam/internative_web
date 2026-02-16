import React from 'react';
import { Play, Rewind, TrendingUp, DollarSign, Target, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const EarningsStrategies = () => {
    const strategies = [
        {
            icon: DollarSign,
            title: "Volatility Selling",
            subtitle: "Credit Spreads & Iron Condors",
            winRate: "65-75%",
            description: "Profit from implied volatility collapse after earnings announcements without requiring directional accuracy. Sell overpriced options when IV peaks, collecting premium as IV crushes 30-70% post-announcement.",
            setup: [
                "IV Rank above 50, preferably 70+",
                "Implied move exceeds historical by 15-30%",
                "Enter 3-7 days before earnings",
                "Sell strikes outside expected move"
            ],
            execution: [
                "Structure: Iron condors or credit spreads",
                "Entry: 3-7 days pre-earnings at IV peak",
                "Position Size: 1% risk maximum",
                "Exit: Next day after IV crush occurs"
            ],
            color: "primary",
            gradient: "from-primary/20 to-transparent"
        },
        {
            icon: Zap,
            title: "Volatility Buying",
            subtitle: "Long Straddles & Strangles",
            winRate: "30-45%",
            description: "Purchase options betting stocks will move more than implied volatility suggests. Direction-agnostic strategy profiting from large moves in either direction, requiring exceptional magnitude to overcome IV crush.",
            setup: [
                "Historical moves exceed implied by 25-50%+",
                "Biotech FDA decisions or unpredictable sectors",
                "Backtesting shows consistent underestimation",
                "Management credibility issues create uncertainty"
            ],
            execution: [
                "Structure: ATM straddles or OTM strangles",
                "Entry: 1-3 days before earnings (minimize IV premium)",
                "Position Size: 0.5-1% risk (total loss common)",
                "Exit: Immediately post-announcement or hold for large moves"
            ],
            color: "yellow-400",
            gradient: "from-yellow-500/20 to-transparent"
        },
        {
            icon: Play,
            title: "Pre-Earnings Momentum",
            subtitle: "Capture Anticipatory Moves",
            winRate: "50-65%",
            description: "Capture price movements in the 5-20 days before earnings as traders position ahead of announcements. Exit 1-2 days before actual reports, avoiding binary event risk entirely while profiting from anticipation.",
            setup: [
                "Stocks trending above moving averages",
                "Analyst estimates being raised",
                "Sector momentum supporting direction",
                "Technical breakouts or support breaks"
            ],
            execution: [
                "Entry: 10-20 days before earnings on pullbacks",
                "Position Size: 1-2% risk",
                "Exit: 80-100% of position 1-2 days before earnings",
                "Never hold through announcement (defeats purpose)"
            ],
            color: "success",
            gradient: "from-success/20 to-transparent"
        },
        {
            icon: TrendingUp,
            title: "Post-Earnings Drift (PEAD)",
            subtitle: "Ride Continuation Patterns",
            winRate: "55-70%",
            description: "Exploit the tendency for stocks to continue moving in the direction of their initial earnings reaction for weeks afterward. Enter 1-3 days post-announcement, hold 30-60 days to capture institutional repositioning.",
            setup: [
                "Earnings surprise exceeding 5% above/below estimates",
                "Price gaps of at least 4-6%",
                "Confirmation of trend in 2-3 days following gap",
                "Strong guidance combined with earnings beat"
            ],
            execution: [
                "Entry: 1-3 days after earnings once volatility settles",
                "Position Size: 2-3% risk (lower binary risk)",
                "Hold: 30-60 days to capture drift",
                "Exit: On reversal signals or subsequent earnings"
            ],
            color: "blue-400",
            gradient: "from-blue-500/20 to-transparent"
        },
        {
            icon: Target,
            title: "Directional Earnings Plays",
            subtitle: "Fundamental + Technical Conviction",
            winRate: "40-55%",
            description: "Take clear bullish or bearish positions based on fundamental analysis, technical setups, or quantitative signals. Requires predicting both direction and magnitude correctly, using spreads to define risk.",
            setup: [
                "Fundamental catalyst (revenue trends, industry conditions)",
                "Technical confirmation (breakouts for longs, breakdowns for shorts)",
                "Analyst estimate reliability analysis",
                "Management track record evaluation"
            ],
            execution: [
                "Structure: Bull call spreads (bullish) or bear put spreads (bearish)",
                "Entry: 5-10 days before earnings",
                "Position Size: 1-1.5% risk",
                "Exit: Immediately post-announcement or at profit targets"
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
                        <GradientText>Five Proven Strategies</GradientText> for Earnings Trading Success
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Each strategy serves different market conditions and risk profiles. Our alerts specify which approach to use for every earnings setup, providing complete execution plans with entry, exit, and risk parameters.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-12">
                    {strategies.slice(0, 4).map((strategy, index) => {
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
                                        <h4 className="text-xs font-black text-white uppercase tracking-wider mb-3">Setup Requirements:</h4>
                                        <div className="space-y-2">
                                            {strategy.setup.map((item, i) => (
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

                {/* Directional Plays - Full Width */}
                <div className="max-w-4xl mx-auto">
                    {strategies.slice(4).map((strategy, index) => {
                        const Icon = strategy.icon;
                        return (
                            <GlassCard key={index} className="p-6">
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

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-xs font-black text-white uppercase tracking-wider mb-3">Setup Requirements:</h4>
                                        <div className="space-y-2">
                                            {strategy.setup.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-${strategy.color}/50 mt-1.5 shrink-0`} />
                                                    <p className="text-text-secondary text-xs">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
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

export default EarningsStrategies;
