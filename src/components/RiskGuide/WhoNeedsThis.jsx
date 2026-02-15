import React from 'react';
import { UserPlus, Wallet, Zap, Brain, ShieldAlert } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const WhoNeedsThis = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">Who Needs This <GradientText>Risk Guide Most</GradientText></h2>
                    <p className="text-lg text-text-secondary font-medium leading-relaxed mb-12 text-center">
                        This risk guide proves essential for specific trader profiles facing highest failure probability without disciplined risk management implementation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <GlassCard className="p-8 border-white/5" hoverEffect>
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                                <UserPlus size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">New Signal Followers</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Followers in their first 6-12 months lack experience weathering drawdowns and instinctively violate risk rules during losses. The emotional shock of the first 20-30% drawdown triggers panic selling, stop-loss modification, or position size increases attempting recovery. Understanding drawdowns as inevitable before experiencing them dramatically improves survival probability.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border-white/5" hoverEffect>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                                <Wallet size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Smaller Accounts</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Traders with limited capital ($3,000-$10,000) face higher failure risk as smaller accounts provide less cushion absorbing normal losing streaks. These traders must implement stricter 1% maximum sizing and lower portfolio heat limits (8-10% maximum) preventing rapid capital destruction during inevitable difficult periods.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border-white/5" hoverEffect>
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Aggressive Strategy Traders</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Traders attracted to high-risk signals (lotto options, 0DTE, leveraged futures) require extreme risk discipline as strategy volatility amplifies normal drawdown periods. Conservative 0.5-1% sizing and 5-7% portfolio heat limits prove necessary with high-volatility instruments creating 30-50% position swings.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border-white/5" hoverEffect>
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Emotional Decision Makers</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Those who panic during losses or become overconfident during wins need mechanical risk rules removing decision-making during emotional extremes. Predetermined position sizing, stop-losses, and loss limits create guardrails preventing self-destructive behavior when emotions override logic.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhoNeedsThis;
