import React from 'react';
import { UserCheck, UserX, BrainCircuit, Activity } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const WhoShouldDayTrade = () => {
    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Is Day Trading <GradientText>For You?</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        It is one of the hardest professions in the world. Success requires emotional steel, capital, and treating it as a business, not a casino.
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
                                <span className="text-text-secondary text-sm">Can trade 9:30 AM - 11:30 AM without distraction</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Well-capitalized (Over $25k for PDT is ideal)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Fast decision maker; does not hesitate</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Discipline to stop when daily loss limit is hit</span>
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
                                <span className="text-text-secondary text-sm">You have a full-time job blocking morning hours</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Prone to emotional "revenge trading" after losses</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Need monthly income immediately to pay bills</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                                <span className="text-text-secondary text-sm">Slow internet or using a mobile phone only</span>
                            </li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="max-w-4xl mx-auto">
                    <GlassCard className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                                <BrainCircuit className="w-8 h-8 text-purple-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-white mb-4">Trading Psychology</h3>
                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    <span className="text-purple-300 font-bold">The 90% Failure Rate</span> exists because of psychology, not strategy. Fear of missing out (FOMO) causes chasing tops. Fear of loss causes selling winners too early or holding losers too long.
                                    <br /><br />
                                    Successful day traders are professional losers. They lose often, but they lose small. They don't try to be right; they try to make money.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default WhoShouldDayTrade;
