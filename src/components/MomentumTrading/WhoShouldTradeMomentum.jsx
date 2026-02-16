import React from 'react';
import { UserCheck, UserX, Clock, LayoutGrid } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const WhoShouldTradeMomentum = () => {
    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Is Momentum <GradientText>Right For You?</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        This strategy demands speed, emotional discipline, and specific market conditions. It’s not for everyone—honesty here saves capital.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                    <GlassCard className="p-8 border-green-500/20 bg-green-500/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                                <UserCheck className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-black text-white">Ideal Candidate</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Active traders able to monitor markets during open/close hours</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Comfortable with high volatility (5-10% daily swings)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Disciplined risk takers who cut losers quickly without hesitation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Capital &gt; $25k for day trading (PDT) or &gt;$5k for swing setups</span>
                            </li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30">
                                <UserX className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white">Avoid If...</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">You have a full-time job preventing active market checks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Panic selling during normal volatility or holding losers hoping for a bounce</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">New trader (&lt; 6 months exp) lacking pattern recognition skills</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Undercapitalized (&lt;$5k) risking account blow-up from small mistakes</span>
                            </li>
                        </ul>
                    </GlassCard>
                </div>

                {/* Momentum vs Mean Reversion */}
                <div className="max-w-4xl mx-auto">
                    <GlassCard className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                <LayoutGrid className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-white mb-4">Momentum vs. Mean Reversion</h3>
                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    <span className="text-blue-300 font-bold">Momentum</span> works best in strong trending markets, buying high to sell higher (Win Rate: 45-55%, High Reward).
                                    <br /><br />
                                    <span className="text-purple-300 font-bold">Mean Reversion</span> works in choppy markets, buying low support and selling high resistance (Win Rate: 60-70%, Lower Reward).
                                    <br /><br />
                                    Adapt your strategy to market conditions. Don't force momentum trades in a sideways chop.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default WhoShouldTradeMomentum;
