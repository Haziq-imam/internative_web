import React from 'react';
import { Bell, TrendingUp, Shield, Target, CheckCircle2, AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const SwingCTA = () => {
    const features = [
        {
            icon: Bell,
            title: "Real-Time Swing Setups",
            description: "Receive high-probability swing trading setups as they develop—trend pullbacks, breakouts, and catalyst plays with complete entry/exit parameters."
        },
        {
            icon: TrendingUp,
            title: "Multi-Strategy Coverage",
            description: "Trend following, breakout trading, pullback entries, catalyst plays, and range trading—all strategies classified and explained for current market conditions."
        },
        {
            icon: Shield,
            title: "Complete Risk Management",
            description: "Every alert includes exact stop-loss placement, position sizing guidance (1-2% risk), and profit targets based on technical levels and reward-risk ratios."
        },
        {
            icon: Target,
            title: "Multi-Timeframe Analysis",
            description: "Setups verified across weekly, daily, and intraday timeframes ensuring alignment and highest-probability entries compatible with part-time schedules."
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Start Receiving <GradientText>Professional Swing Setups</GradientText>
                        </h2>
                        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                            Join traders receiving high-probability swing trading alerts with complete entry, exit, and risk management parameters. Compatible with full-time employment—check positions twice daily, no constant monitoring required.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <GlassCard key={index} className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black text-white mb-2">{feature.title}</h3>
                                            <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </div>

                    {/* CTA Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <GlassCard className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                            <div className="text-center">
                                <div className="text-4xl font-black text-white mb-2">7-Day Free Trial</div>
                                <p className="text-text-secondary mb-6">Experience professional swing trading alerts risk-free</p>
                                <Button size="lg" className="w-full shadow-neon mb-4">
                                    Start Free Trial
                                </Button>
                                <div className="space-y-2 text-left">
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>Full access to all swing trading alerts</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>Complete entry/exit parameters</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>Risk management guidance</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>Cancel anytime, no commitment</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-8 bg-gradient-to-br from-success/20 to-success/5 border-success/30">
                            <div className="text-center">
                                <div className="text-4xl font-black text-white mb-2">Premium Access</div>
                                <p className="text-text-secondary mb-6">Comprehensive swing trading coverage for serious traders</p>
                                <Button size="lg" variant="outline" className="w-full mb-4">
                                    View Pricing
                                </Button>
                                <div className="space-y-2 text-left">
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>All swing trading strategies covered</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>8-15 high-probability setups monthly</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>Multi-timeframe analysis on every alert</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                                        <span>Educational resources and strategy guides</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Risk Disclosure */}
                    <GlassCard className="p-6 bg-red-500/5 border-red-500/20">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                                <AlertTriangle className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-3">Risk Disclosure</h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                                    <span className="text-white font-bold">Swing trading stocks involves substantial risk of loss including the possibility of losing your entire trading capital.</span> Approximately 80-85% of swing traders lose money. Stocks can gap significantly overnight or over weekends due to earnings, news, or market events, creating losses exceeding planned stop-loss levels.
                                </p>
                                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                                    This content is for educational purposes only and does not constitute financial advice or trading recommendations. Past performance does not indicate future results. Trade only with capital you can afford to lose completely. Swing trading requires significant skill, discipline, and emotional control that most retail traders do not possess.
                                </p>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Our alerts provide technical analysis and setup identification based on historical patterns and probability. However, no trading system guarantees profits, and all trading involves risk. Individual results vary based on capital, risk management, execution timing, and psychological factors. Consult qualified financial professionals before making trading decisions.
                                </p>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Final Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-primary mb-2">8-15</div>
                            <div className="text-sm text-text-muted font-bold">Setups Monthly</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-success mb-2">45-55%</div>
                            <div className="text-sm text-text-muted font-bold">Target Win Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">2:1+</div>
                            <div className="text-sm text-text-muted font-bold">Reward-Risk</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SwingCTA;
