import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import GlassCard from '../ui/GlassCard';

const WhatIs0DTE = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        What Is <GradientText>0DTE</GradientText>?
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-12 max-w-3xl mx-auto">
                        0DTE stands for "Zero Days To Expiration"—options contracts that expire at the end of the current trading day.
                    </p>

                    <GlassCard className="p-8 md:p-12 mb-12">
                        <h3 className="text-2xl font-black text-white mb-6 text-center">The Core Concept</h3>
                        <p className="text-lg text-text-secondary font-medium leading-relaxed mb-6">
                            When you buy a 0DTE option at 10:00 AM, you have approximately 6 hours until market close (4:00 PM ET) for the stock to move in your favor. If it doesn't, the option expires worthless and you lose 100% of your premium.
                        </p>
                        <p className="text-lg text-text-secondary font-medium leading-relaxed">
                            This extreme time constraint creates two effects: (1) options are very cheap ($0.05-$2.00 typically), and (2) small stock moves create massive percentage gains due to gamma acceleration.
                        </p>
                    </GlassCard>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8">
                            <h4 className="text-xl font-black text-white mb-4">Example: Winning 0DTE Trade</h4>
                            <div className="space-y-3 text-sm">
                                <p className="text-text-secondary font-medium"><span className="text-white font-black">10:00 AM:</span> SPY at $465. Buy $467 calls for $0.30 ($30/contract)</p>
                                <p className="text-text-secondary font-medium"><span className="text-white font-black">11:30 AM:</span> SPY rallies to $468 on Fed news</p>
                                <p className="text-text-secondary font-medium"><span className="text-white font-black">Result:</span> Calls now worth $1.50 ($150/contract)</p>
                                <p className="text-emerald-500 font-black text-lg">+400% profit in 90 minutes</p>
                            </div>
                        </div>

                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
                            <h4 className="text-xl font-black text-white mb-4">Example: Losing 0DTE Trade</h4>
                            <div className="space-y-3 text-sm">
                                <p className="text-text-secondary font-medium"><span className="text-white font-black">2:00 PM:</span> TSLA at $250. Buy $255 calls for $0.80 ($80/contract)</p>
                                <p className="text-text-secondary font-medium"><span className="text-white font-black">3:30 PM:</span> TSLA stays flat at $250</p>
                                <p className="text-text-secondary font-medium"><span className="text-white font-black">4:00 PM:</span> Options expire worthless</p>
                                <p className="text-red-500 font-black text-lg">-100% loss in 2 hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8 text-center">
                        <h4 className="text-2xl font-black text-white mb-4">Why 0DTE Is So Popular</h4>
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                            0DTE options have exploded in popularity because they offer lottery-ticket-like returns with small capital. A $50 position can turn into $500+ in hours. But this accessibility is deceptive—most traders lose money consistently on 0DTE because they underestimate the speed of time decay and overestimate their ability to time intraday moves.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhatIs0DTE;
