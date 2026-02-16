import React from 'react';
import { Shield, AlertCircle, Clock, TrendingDown } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const RiskManagement = () => {
    const riskPrinciples = [
        {
            icon: Shield,
            title: "Conservative Position Sizing",
            description: "Gap trades demand more conservative parameters than standard trading due to elevated volatility and rapid price movements.",
            rules: [
                "Risk 1-1.5% maximum per gap trade (vs 2-3% for regular trades)",
                "Account for execution slippage during volatile opens",
                "Limit total gap exposure to 5-8% across all positions",
                "Never risk more than 2% even on 'high-conviction' setups"
            ],
            color: "primary"
        },
        {
            icon: Clock,
            title: "Time-Based Stops",
            description: "Gap trades show their hand quickly. Positions failing to progress toward profit targets within the first hour frequently chop sideways or reverse.",
            rules: [
                "Exit all gap positions by 11:00 AM-12:00 PM ET if no progress",
                "Gap-and-go trades: 30-90 minute maximum hold time",
                "Fade trades: 60-minute confirmation window before entry",
                "No overnight holds unless transitioning to swing trade"
            ],
            color: "blue-400"
        },
        {
            icon: TrendingDown,
            title: "Strict Stop-Loss Placement",
            description: "Gaps failing to behave as expected often extend further, creating substantial losses. Stop-losses must be strict and honored without exception.",
            rules: [
                "Fade gap ups: stops 1-3% above pre-market highs",
                "Fade gap downs: stops below pre-market lows",
                "Gap-and-go: stops just beyond entry (tight control)",
                "Never average down or 'give it more room' on losing gaps"
            ],
            color: "red-400"
        },
        {
            icon: AlertCircle,
            title: "Volume Confirmation Required",
            description: "Gaps without institutional support fill much more frequently (80-90% vs 60-70%). Always verify volume before trading.",
            rules: [
                "Require minimum 50,000-100,000 pre-market shares for mid-caps",
                "Require 200,000+ shares for large-caps",
                "Pre-market volume should be 2-3x average for gap-and-go",
                "Skip gaps appearing random without volume support"
            ],
            color: "yellow-400"
        }
    ];

    const commonMistakes = [
        {
            mistake: "Entering Too Early",
            consequence: "Getting run over by chaotic opening volatility",
            solution: "Wait 15-30 minutes for clear directional signals before committing capital"
        },
        {
            mistake: "Ignoring Volume Confirmation",
            consequence: "Trading gaps without institutional support that reverse quickly",
            solution: "Always check pre-market volume against average daily volume"
        },
        {
            mistake: "Holding Losing Trades",
            consequence: "Small losses become large ones as gaps extend against position",
            solution: "Exit at small loss if gap hasn't moved toward target within 60 minutes"
        },
        {
            mistake: "Oversizing Positions",
            consequence: "5-10% account losses in minutes on 'sure thing' gaps that fail",
            solution: "Maintain 1-1.5% risk regardless of catalyst strength or confidence"
        },
        {
            mistake: "Wrong Strategy for Gap Type",
            consequence: "Fading breakaway gaps or following exhaustion gaps creates consistent losses",
            solution: "Classify gap type before trading: fade common/exhaustion, follow breakaway/continuation"
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Risk Management: <GradientText>Protect Your Capital</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Approximately 70-80% of retail gap traders lose money. The difference between winners and losers isn't strategy—it's disciplined risk management and avoiding common mistakes.
                    </p>
                </div>

                {/* Risk Principles */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {riskPrinciples.map((principle, index) => {
                        const Icon = principle.icon;
                        return (
                            <GlassCard key={index} className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-${principle.color}/20 flex items-center justify-center shrink-0`}>
                                        <Icon className={`w-6 h-6 text-${principle.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white mb-2">{principle.title}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">{principle.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-4 pl-16">
                                    {principle.rules.map((rule, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-${principle.color}/50 mt-1.5 shrink-0`} />
                                            <p className="text-text-secondary text-xs leading-relaxed">{rule}</p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* Common Mistakes */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Common Gap Trading Mistakes to Avoid</h3>
                    <div className="space-y-4">
                        {commonMistakes.map((item, index) => (
                            <GlassCard key={index} className="p-5 bg-red-500/5 border-red-500/20">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="text-sm font-black text-red-400 uppercase tracking-wider mb-1">Mistake</h4>
                                        <p className="text-white font-bold text-sm">{item.mistake}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-red-400 uppercase tracking-wider mb-1">Consequence</h4>
                                        <p className="text-text-secondary text-xs">{item.consequence}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-success uppercase tracking-wider mb-1">Solution</h4>
                                        <p className="text-text-secondary text-xs">{item.solution}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Key Stat */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <GlassCard className="p-8 bg-gradient-to-r from-red-500/10 to-transparent border-red-500/20 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-5xl font-black text-red-400 mb-4">70-80%</div>
                            <p className="text-white font-bold text-xl mb-3">of retail gap traders lose money</p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                The failures aren't due to bad strategies—they're caused by poor timing, inadequate risk management, and trading wrong gap types with incompatible approaches. Our alerts eliminate these errors by providing classified gap types, appropriate strategies, and strict risk parameters for every setup.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default RiskManagement;
