import React from 'react';
import { Shield, AlertCircle, Target, XCircle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const SwingRisk = () => {
    const riskPrinciples = [
        {
            icon: Shield,
            title: "Position Sizing: The 1-2% Rule",
            description: "Risk 1-2% of total account capital per trade maximum. On a $50,000 account, 1.5% equals $750 maximum loss per trade. This mathematical approach ensures consistent risk across all trades.",
            rules: [
                "Conservative: 1% risk per trade",
                "Moderate: 1.5% risk per trade",
                "Maximum: 2% risk per trade (never exceed)",
                "Calculate: Position Size = (Account × Risk%) ÷ Stop Distance%"
            ]
        },
        {
            icon: Target,
            title: "Stop-Loss Placement",
            description: "Stop-losses protect capital from adverse moves. Technical stops use chart structure; percentage stops use fixed percentages; volatility stops use ATR multiples.",
            rules: [
                "Technical: Below recent swing lows or MA support",
                "Percentage: 5-8% for stable stocks, 8-12% for volatile",
                "Volatility: 1.5x or 2x the 14-day ATR below entry",
                "Always use actual orders, never mental stops"
            ]
        },
        {
            icon: AlertCircle,
            title: "Portfolio Heat Management",
            description: "Limit total capital at risk simultaneously. Even with 2% per-trade risk, 10 positions creates 20% portfolio risk. Correlated positions amplify risk if sector sells off.",
            rules: [
                "Total portfolio risk: 6-10% maximum across all positions",
                "Typical: 3-5 positions at 2% risk each",
                "Or: 5-10 positions at 1% risk each",
                "Avoid correlated positions in same sector"
            ]
        },
        {
            icon: XCircle,
            title: "Time-Based & Gap Risk",
            description: "Stocks can gap 5-10% overnight on news. If trade fails to move favorably within 5-10 days, consider exiting—dead capital could be deployed in active setups.",
            rules: [
                "Accept overnight gap risk as part of swing trading",
                "Never size positions so large one gap destroys account",
                "Reduce positions 25-50% before known events (earnings)",
                "Exit trades showing no progress after 7-10 days"
            ]
        }
    ];

    const commonMistakes = [
        {
            mistake: "Ignoring Broader Market Trend",
            consequence: "80% of stocks move with the market—perfect setups fail in bear markets",
            solution: "Check SPY/QQQ trend before entering. Trade longs in uptrending markets only."
        },
        {
            mistake: "Entering Without Defined Exits",
            consequence: "Indecision during trades leads to frozen decision-making and losses",
            solution: "Write exact stop-loss and profit target prices before entering each trade."
        },
        {
            mistake: "Overtrading / Forcing Setups",
            consequence: "Entering marginal setups reduces win rates and returns dramatically",
            solution: "Quality over quantity: 8-12 high-probability setups monthly outperforms 40 mediocre trades."
        },
        {
            mistake: "Chasing Stocks After Big Moves",
            consequence: "Buying after 15% rally provides poor entry—limited upside, significant downside",
            solution: "Wait for pullbacks within trends or early breakout entries. Patience beats chasing."
        },
        {
            mistake: "Holding Losing Positions Past Stops",
            consequence: "Small losses become large ones, destroying accounts over time",
            solution: "Exit immediately when stop-loss hit. Every trade has predefined maximum loss."
        },
        {
            mistake: "Using Same Dollar Size for All Positions",
            consequence: "Risk varies wildly—$10K with 3% stop risks $300, same with 8% stop risks $800",
            solution: "Calculate position size based on dollar risk and stop distance, not dollars available."
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Risk Management: <GradientText>Survival First</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Position sizing determines long-term survival more than winning percentage. The 2% rule protects against catastrophic drawdowns—losing 10 trades at 2% each equals 20% drawdown, recoverable with 25% gain.
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
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Common Swing Trading Mistakes</h3>
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
                            <div className="text-5xl font-black text-red-400 mb-4">80-85%</div>
                            <p className="text-white font-bold text-xl mb-3">of swing traders lose money</p>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Failures stem from poor discipline, inadequate capital, emotional decision-making, or forcing trades during unfavorable conditions. Success requires documented trading plans, strict risk management (1-2% per trade), and psychological control to hold through volatility while honoring stop-losses. Our alerts provide complete risk parameters for every setup, eliminating guesswork from position sizing and stop placement.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default SwingRisk;
