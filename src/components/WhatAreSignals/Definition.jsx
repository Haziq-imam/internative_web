import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import GlassCard from '../ui/GlassCard';

const Definition = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        The <GradientText>Simple Definition</GradientText>
                    </h2>

                    <GlassCard className="p-8 md:p-12 mb-12">
                        <p className="text-xl text-text-secondary font-medium leading-relaxed mb-6">
                            A <span className="text-white font-black">trading signal</span> is a notification that tells you:
                        </p>
                        <ul className="space-y-4 text-lg text-text-secondary font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-black text-2xl">→</span>
                                <span><span className="text-white font-bold">What</span> to buy or sell (ticker symbol, asset)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-black text-2xl">→</span>
                                <span><span className="text-white font-bold">When</span> to enter (entry price or price range)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-black text-2xl">→</span>
                                <span><span className="text-white font-bold">Where</span> to exit for profit (target prices)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-black text-2xl">→</span>
                                <span><span className="text-white font-bold">Where</span> to cut losses (stop-loss price)</span>
                            </li>
                        </ul>
                    </GlassCard>

                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                        <h3 className="text-2xl font-black text-white mb-4">Think of it like GPS for trading:</h3>
                        <p className="text-lg text-text-secondary font-medium leading-relaxed">
                            Just as GPS tells you "turn left in 500 feet," a trading signal tells you "buy NVDA at $485, sell at $510, stop at $475." You don't need to be a professional trader to follow directions—you just need to execute the plan.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Definition;
