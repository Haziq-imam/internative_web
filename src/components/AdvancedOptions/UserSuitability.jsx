import React from 'react';
import { UserCheck, UserX, Clock, Brain, Wallet, AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';

const UserSuitability = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Who Should Use */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="p-3 rounded-full bg-success/20 text-success">
                                <UserCheck size={28} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white">Who <GradientText>Should Attempt</GradientText> This</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Clock className="text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 text-white text-lg">Experienced Traders</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Those with 12-24+ months of *profitable* basic options trading. Competence with covered calls and protective puts is a prerequisite before complexity.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Wallet className="text-secondary shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 text-white text-lg">Well-Capitalized Accounts</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">$25,000-$100,000+ accounts are mandatory to meet margin requirements and allow proper diversification without triggering margin calls.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Brain className="text-success shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 text-white text-lg">Mathematically Sophisticated</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Traders comfortable with probability calculations and Greeks (Delta, Theta, Vega) quantifying exposure. No intuitive sense exists without math.</p>
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
                            <h2 className="text-3xl md:text-4xl font-black text-white">Who <GradientText>Should NOT Attempt</GradientText></h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <AlertTriangle className="text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 text-white text-lg">Option Beginners</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Under 12 months of experience. Rushing into advanced strategies prematurely leads immediately to the catastrophic 98%+ failure rate.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Wallet className="text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 text-white text-lg">Small Accounts</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Under $25,000 capital. Inability to meet margin requirements or diversify across positions exposes you to total ruin from single adverse moves.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <Clock className="text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold mb-2 text-white text-lg">Impatient Profit Seekers</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">Those expecting advanced strategies to provide massive returns over basic ones. They only provide refined risk-reward profiles, not easy money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default UserSuitability;
