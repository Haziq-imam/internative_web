import React from 'react';
import { Shield, AlertCircle, Clock, Target, XCircle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const EarningsRisk = () => {
    const riskPrinciples = [
        {
            icon: Shield,
            title: "Drastically Smaller Position Sizing",
            description: "Earnings trades require 50-66% smaller position sizes than normal trades due to binary gap risk that can exceed stop-losses by 200-500%.",
            rules: [
                "Risk 0.5-1.5% per earnings trade (vs 2-3% normal)",
                "Account for overnight gaps bypassing all stop-losses",
                "Limit total earnings exposure to 5-10% of account",
                "Never risk more than 1% even on highest-conviction setups"
            ]
        },
        {
            icon: Target,
            title: "Defined-Risk Structures Mandatory",
            description: "Credit spreads and iron condors cap maximum losses regardless of gap size. Naked option selling creates unlimited risk when stocks gap 30-50% overnight.",
            rules: [
                "Use credit spreads or iron condors exclusively",
                "Maximum loss defined before entry (spread width - credit)",
                "Typical max loss: $400-500 per spread regardless of gap",
                "Naked positions can create $4,000+ losses on single contracts"
            ]
        },
        {
            icon: Clock,
            title: "Diversification Across Multiple Plays",
            description: "Never concentrate more than 5-10% of capital across all simultaneous earnings positions. Sector diversification prevents correlated failures.",
            rules: [
                "Spread capital across 5-8 different stocks weekly",
                "Limit to 2-3 maximum from any single sector",
                "Avoid correlated positions (all tech, all retail)",
                "If one thesis is wrong, don't let all positions fail together"
            ]
        },
        {
            icon: AlertCircle,
            title: "Close Losing Positions Before Earnings",
            description: "Positions showing 30-50% losses before announcements should be closed rather than held hoping earnings rescue bad trades.",
            rules: [
                "Don't convert calculated trades into desperate gambles",
                "Close at loss if position hasn't worked as expected",
                "Never 'double down' or average into losing earnings trades",
                "Accept small losses rather than risk catastrophic gaps"
            ]
        }
    ];

    const commonMistakes = [
        {
            mistake: "Buying Options Day Before Earnings",
            consequence: "Paying maximum IV premium—even 8% moves lose money when priced for 12%",
            solution: "Enter 5-10 days early for momentum, or wait until after earnings. Never buy at IV peak."
        },
        {
            mistake: "Ignoring Historical Move Patterns",
            consequence: "Betting on 20% gaps in stocks that historically move 3-5%",
            solution: "Research 8-12 prior earnings periods. Match expectations to historical behavior."
        },
        {
            mistake: "Holding Without Defined-Risk Protection",
            consequence: "Single 30-50% overnight gap eliminates months/years of profits",
            solution: "Always use spreads or size so small that 100% losses are survivable."
        },
        {
            mistake: "Failing to Monitor Conference Calls",
            consequence: "Missing secondary moves when guidance contradicts initial reactions",
            solution: "Plan to monitor and potentially adjust during calls, not just releases."
        },
        {
            mistake: "Overtrading Every Earnings",
            consequence: "Trading 15-20 weekly vs. 2-3 highest-probability setups",
            solution: "Develop strict criteria. Trade only setups meeting ALL conditions."
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Risk Management: <GradientText>Survive to Profit</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Approximately 75-85% of earnings traders lose money. The difference isn't strategy—it's disciplined risk management and avoiding the mistakes that destroy accounts.
                    </p>
                </div>

                {/* Risk Principles */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {riskPrinciples.map((principle, index) => {
                        const Icon = principle.icon;
                        return (
                            <GlassCard key={index} className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white mb-2">{principle.title}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">{principle.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-4 pl-16">
                                    {principle.rules.map((rule, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
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
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Common Earnings Trading Mistakes</h3>
                    <div className="space-y-4">
                        {commonMistakes.map((item, index) => (
                            <GlassCard key={index} className="p-5 bg-red-500/5 border-red-500/20">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                            <h4 className="text-sm font-black text-red-400 uppercase tracking-wider">Mistake</h4>
                                        </div>
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
                            <div className="text-5xl font-black text-red-400 mb-4">75-85%</div>
                            <p className="text-white font-bold text-xl mb-3">of earnings traders lose money</p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                The failures stem from misunderstanding IV crush, buying peak-IV options, oversizing positions, or trading without defined-risk protection. Our alerts eliminate these errors by providing IV analysis, appropriate strategies, and strict risk parameters for every earnings setup.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default EarningsRisk;
