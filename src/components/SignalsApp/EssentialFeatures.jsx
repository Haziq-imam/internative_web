import React from 'react';
import { Zap, BarChart, Settings, Headphones, BookOpen, Target } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const EssentialFeatures = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Essential <GradientText>App Features</GradientText></h2>
                    <p className="text-xl text-text-secondary font-medium leading-relaxed">
                        Quality signal apps exhibit specific features distinguishing professional platforms from amateur or fraudulent operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Real-Time Push Notifications</h3>
                            </div>
                            <p className="text-text-secondary leading-relaxed font-medium">
                                Immediate push notification delivery represents the fundamental value proposition. Quality apps deliver signals within seconds of generation, allowing timely entries at recommended prices rather than chasing positions. Notification customization enables filtering segments like strategy type, risk level, or asset class.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                                    <BarChart size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Verified Performance Tracking</h3>
                            </div>
                            <p className="text-text-secondary leading-relaxed font-medium">
                                Transparent tracking separates legitimate apps from scams. Quality apps display complete trade histories showing all signals—winners and losers—with entry/exit prices, holding periods, and profit/loss calculations. Third-party verification through platforms like Myfxbook provides independent confirmation.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-success/10 text-success">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Position Management Tools</h3>
                            </div>
                            <p className="text-text-secondary leading-relaxed font-medium">
                                Integrated position tracking helps manage multiple concurrent signals. Quality apps display open positions with current P&L, entry prices, and proximity to profit targets or stop-losses. Automatic calculations account for position sizes and commissions providing accurate transparency.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Educational Content</h3>
                            </div>
                            <p className="text-text-secondary leading-relaxed font-medium">
                                Quality apps provide resources explaining signal rationale and strategy fundamentals. Video analysis accompanying signals teaches chart reading skills. Risk management tutorials teach position sizing and drawdown management preventing the execution errors that destroy most signal followers.
                            </p>
                        </div>
                    </div>
                </div>

                <GlassCard className="p-8 border-white/5 bg-white/[0.02] flex items-center justify-between gap-8 flex-col md:flex-row">
                    <div className="flex items-center gap-6">
                        <div className="p-4 rounded-full bg-blue-500/10 text-blue-500">
                            <Headphones size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Customer Support Access</h4>
                            <p className="text-text-secondary max-w-xl">Responsive support accessible directly through apps proves essential. Quality apps offer in-app messaging and live chat during market hours for time-sensitive questions.</p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default EssentialFeatures;
