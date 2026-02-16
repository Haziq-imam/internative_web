import React from 'react';
import { Shield, AlertTriangle, Scale, Target } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const MomentumRisk = () => {
    const riskRules = [
        {
            icon: Scale,
            title: "Position Sizing",
            rule: "Max 1-2% Account Risk",
            description: "If your account is $10k, never lose more than $100-$200 on a single momentum trade. Calculate shares based on stop distance, not buying power."
        },
        {
            icon: Shield,
            title: "Stop-Losses",
            rule: "Technical vs. Hard Stops",
            description: "Place stops below breakout levels or recent swing lows. Use hard stops for sudden reversals, not mental stops which often fail under emotion."
        },
        {
            icon: Target,
            title: "Profit Taking",
            rule: "Scale Out Strength",
            description: "Sell 1/2 or 1/3 when price hits initial target (1.5-2R). Move stop to breakeven on remainder. This locks gains while keeping exposure for runners."
        },
        {
            icon: AlertTriangle,
            title: "Daily Max Loss",
            rule: "Walk Away Limit",
            description: "Stop trading if down 3-5% of account in a day. Emotional 'revenge trading' usually follows big losses, compounding the damage."
        }
    ];

    const commonMistakes = [
        {
            title: "Chasing Parabolic Moves",
            desc: "Buying after a stock is already up 10-15% vertically. High risk of immediate pullback/reversal."
        },
        {
            title: "Ignoring Volume",
            desc: "Trading breakouts on weak volume often leads to 'fakeouts' that trap buyers."
        },
        {
            title: "Trading vs. Trend",
            desc: "Buying momentum in a bearish market or shorting strong stocks. The trend is your friend; don't fight it."
        },
        {
            title: "Over-Leverage",
            desc: "Using margin on high-volatility plays can wipe accounts on a single gap down."
        }
    ];

    return (
        <Section className="py-24 bg-background-primary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        <GradientText>Survival</GradientText> First
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Momentum trading is volatile. Without strict risk management, a few bad trades can erase weeks of profits. Protect your capital at all costs.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Rules Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {riskRules.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <GlassCard key={index} className="p-6 border-blue-500/10 hover:border-blue-500/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-1">{item.title}</h3>
                                    <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">{item.rule}</div>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </GlassCard>
                            );
                        })}
                    </div>

                    {/* Mistakes List */}
                    <GlassCard className="p-8 bg-red-500/5 border-red-500/10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white">Momentum Killers</h3>
                        </div>

                        <div className="space-y-6">
                            {commonMistakes.map((mistake, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black text-red-400">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{mistake.title}</h4>
                                        <p className="text-red-200/70 text-sm leading-relaxed">{mistake.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default MomentumRisk;
