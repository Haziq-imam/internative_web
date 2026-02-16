import React from 'react';
import { TrendingUp, Zap, BarChart3, Radio } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const MomentumStrategies = () => {
    const strategies = [
        {
            icon: Zap,
            title: "Breakout Momentum Trading",
            subtitle: "Capture High-Velocity Moves",
            gradient: "from-blue-500/20 to-blue-500/5",
            borderColor: "border-blue-500/30",
            badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/50",
            description: "Captures stocks breaking above resistance levels or chart patterns on significantly increased volume (2-3x average). Focuses on stocks that have built energy during consolidation.",
            setup: [
                "Ascending triangle, flag, or flat top breakout pattern",
                "Volume surge 50-100%+ above 50-day average on break",
                "Valid breakouts hold above resistance, not just intraday spikes",
                "Sector strength confirming the individual move"
            ],
            execution: [
                "Enter on confirmed breakout or first pullback to breakout level",
                "Stop-loss just below breakout level (2-4% risk)",
                "Target 1.5-2x the height of the consolidation pattern",
                "Exit if price closes back inside the range on volume"
            ]
        },
        {
            icon: TrendingUp,
            title: "Gap and Go Trading",
            subtitle: "Exploit Overnight Price Action",
            gradient: "from-purple-500/20 to-purple-500/5",
            borderColor: "border-purple-500/30",
            badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/50",
            description: "Exploits stocks opening significantly higher/lower due to news, earnings, or market catalysts. Focuses on continuation of the gap direction rather than gap fills.",
            setup: [
                "Gap of 4-10%+ on high pre-market volume (>100k shares)",
                "Clear fundamental catalyst (Earnings, FDA, Contracts)",
                "Stock holds above gap level in first 15-30 mins",
                "Volume remains high after open, supporting continuation"
            ],
            execution: [
                "Enter 15-30 mins after open if gap holds",
                "Stop-loss below the gap or opening 5-min low",
                "Target gap extension (aggressive) or 50% gap size (conservative)",
                "Avoid if volume fades rapidly after open"
            ]
        },
        {
            icon: BarChart3,
            title: "Relative Strength Trading",
            subtitle: "Find Market Leaders",
            gradient: "from-pink-500/20 to-pink-500/5",
            borderColor: "border-pink-500/30",
            badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/50",
            description: "Identifies stocks outperforming the broader market (SPY/QQQ). These stocks show strength by rising on down market days or leading significantly during rallies.",
            setup: [
                "Stock makes new highs while market is flat or down",
                "RS Line (Stock/SPY ratio) making new highs",
                "Consistent outperformance over 1-4 week period",
                "Breakout from consolidation concurrent with RS new high"
            ],
            execution: [
                "Buy when market turns positive finding the leaders",
                "Stop-loss below recent swing low or moving average",
                "Hold as long as Relative Strength trend persists",
                "Ideal for swing trading multi-day momentum"
            ]
        },
        {
            icon: Radio,
            title: "News-Catalyst Momentum",
            subtitle: "Trade the News Impulse",
            gradient: "from-orange-500/20 to-orange-500/5",
            borderColor: "border-orange-500/30",
            badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/50",
            description: "Captures explosive moves triggered by specific events like earnings, FDA approvals, or analyst upgrades. Exploits the immediate supply-demand imbalance.",
            setup: [
                "Significant news catalyst confirmed (not rumors)",
                "Price spikes vertically on massive volume surge",
                "Wait for first consolidation/pullback after spike",
                "Volume sustains high levels after initial pop"
            ],
            execution: [
                "Enter on first pullback/flag pattern after news spike",
                "Never chase the initial vertical move",
                "Tight stops below consolidation low (binary risk)",
                "Position size conservative (1-2%) due to volatility"
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        High-Octane <GradientText>Momentum Strategies</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Four distinct approaches to capturing market velocity. Whether you trade opening gaps, technical breakouts, or relative strength leaders, these strategies focus on following the trend, not fighting it.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {strategies.map((strategy, index) => {
                        const Icon = strategy.icon;
                        return (
                            <GlassCard key={index} className={`p-6 bg-gradient-to-br ${strategy.gradient} ${strategy.borderColor} hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300`}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-xl font-black text-white">{strategy.title}</h3>
                                        </div>
                                        <div className="text-sm font-medium text-text-muted mb-2">{strategy.subtitle}</div>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                                    {strategy.description}
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <div className={`inline-block px-3 py-1 rounded text-xs font-black uppercase tracking-wider mb-3 ${strategy.badgeColor}`}>
                                            Setup Criteria
                                        </div>
                                        <div className="grid gap-2">
                                            {strategy.setup.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 shrink-0" />
                                                    <p className="text-text-secondary text-xs">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="inline-block px-3 py-1 rounded text-xs font-black uppercase tracking-wider mb-3 bg-white/5 text-white border border-white/10">
                                            Execution Rules
                                        </div>
                                        <div className="grid gap-2">
                                            {strategy.execution.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-success/50 mt-1.5 shrink-0" />
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
            </div>
        </Section>
    );
};

export default MomentumStrategies;
