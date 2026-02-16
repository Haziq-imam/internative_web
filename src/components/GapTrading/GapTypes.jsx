import React from 'react';
import { Activity, TrendingUp, Zap, AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const GapTypes = () => {
    const gapTypes = [
        {
            icon: Activity,
            title: "Common Gaps",
            subtitle: "85-95% Fill Rate",
            description: "Routine price discontinuities under 1-2% driven by low-volume overnight trading. These gaps appear frequently and fill within 1-3 trading days, making them the most reliable for fade strategies.",
            characteristics: [
                "Size: Under 1-2%",
                "Volume: Normal or below average",
                "Fill Time: 1-3 days typically",
                "Strategy: Fade the gap"
            ],
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: TrendingUp,
            title: "Breakaway Gaps",
            subtitle: "30-40% Fill Rate",
            description: "Mark the beginning of new major trends, occurring when stocks decisively break out of consolidation on heavy volume (2-4x average). These gaps create new support/resistance levels.",
            characteristics: [
                "Size: 3-8%+ with strong catalyst",
                "Volume: 2-4x average daily volume",
                "Fill Time: Weeks to months (if ever)",
                "Strategy: Follow the gap direction"
            ],
            color: "text-success",
            bgColor: "bg-success/10",
            borderColor: "border-success/20"
        },
        {
            icon: Zap,
            title: "Continuation Gaps",
            subtitle: "40-50% Fill Rate",
            description: "Appear mid-trend during strong directional moves, confirming momentum will persist. Show steady or increasing volume and occur within existing price channels rather than at extremes.",
            characteristics: [
                "Size: 3-6% mid-trend",
                "Volume: Steady or increasing",
                "Fill Time: Not until trend exhausts",
                "Strategy: Add to existing positions"
            ],
            color: "text-primary",
            bgColor: "bg-primary/10",
            borderColor: "border-primary/20"
        },
        {
            icon: AlertTriangle,
            title: "Exhaustion Gaps",
            subtitle: "70-80% Fill Rate",
            description: "Appear near trend ends with extreme characteristics: 5-15%+ size, volume climaxes at 3-5x+ average, parabolic price action. Represent final explosive moves before reversals.",
            characteristics: [
                "Size: 5-15%+ parabolic spike",
                "Volume: 3-5x+ average (climax)",
                "Fill Time: Days to weeks",
                "Strategy: Cautiously fade after confirmation"
            ],
            color: "text-red-400",
            bgColor: "bg-red-500/10",
            borderColor: "border-red-500/20"
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Four Types of Price Gaps: <GradientText>Know Which to Trade</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Not all gaps are created equal. Understanding gap classification determines whether you fade or follow, separating profitable traders from those who lose consistently.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {gapTypes.map((gap, index) => {
                        const Icon = gap.icon;
                        return (
                            <GlassCard key={index} className={`p-6 border ${gap.borderColor} hover:border-opacity-50 transition-all duration-300`}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-14 h-14 rounded-xl ${gap.bgColor} flex items-center justify-center shrink-0`}>
                                        <Icon className={`w-7 h-7 ${gap.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-black text-white mb-1">{gap.title}</h3>
                                        <p className={`text-sm font-bold ${gap.color}`}>{gap.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                    {gap.description}
                                </p>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-3">Key Characteristics:</h4>
                                    {gap.characteristics.map((char, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${gap.bgColor} mt-1.5 shrink-0`} />
                                            <p className="text-text-secondary text-xs">{char}</p>
                                        </div>
                                    ))}
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
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-2">Critical Trading Principle</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    The #1 mistake gap traders make is applying the wrong strategy to the wrong gap type. <span className="text-white font-bold">Fading breakaway gaps or following exhaustion gaps</span> creates consistent losses. Our alerts identify gap type and provide the appropriate strategy for each setup, eliminating guesswork.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default GapTypes;
