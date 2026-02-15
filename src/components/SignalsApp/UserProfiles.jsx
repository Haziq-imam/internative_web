import React from 'react';
import { UserCheck, UserX, Clock, Brain, Wallet, AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const UserProfiles = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Who Should Use */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="p-3 rounded-full bg-success/20 text-success">
                                <UserCheck size={28} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black">Who <GradientText>Should Use</GradientText> Apps</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Clock className="text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2">Part-Time Traders</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Those with full-time jobs who need real-time notifications to execute during market gaps or breaks. Instant delivery is critical.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Brain className="text-secondary shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2">Beginners Seeking Structure</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">New traders looking for actionable recommendations paired with educational content to build competent independent skills.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Wallet className="text-success shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2">Idea Generators</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Experienced traders looking for supplementary idea filters to highlight setups deserving deeper personal analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Who Should NOT Use */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="p-3 rounded-full bg-red-500/20 text-red-500">
                                <UserX size={28} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black">Who Should <GradientText>NOT Use</GradientText> Apps</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <AlertTriangle className="text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2">Passive Income Expectations</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Success requires active position management and disciplined execution, not mindless "set it and forget it" following.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Wallet className="text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2">Under-Capitalized Profiles</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Accounts under $2,000 cannot safely follow most signals due to position sizing constraints and minimum capital requirements.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Brain className="text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2">Emotionally Reactive Individuals</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Constant connectivity can amplify panic or FOMO, leading to impulsive trading decisions during emotional extremes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default UserProfiles;
