import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { PlayCircle, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        How To Use <GradientText>Trading Signals</GradientText>
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to receiving, executing, and managing trading signals from entry to exit. Learn the complete workflow for successful signal trading.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <PlayCircle className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Receive Alert</h3>
                            <p className="text-text-secondary font-medium">Get instant notifications via app/Discord/SMS</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 mx-auto">
                                <Target className="text-emerald-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Execute Entry</h3>
                            <p className="text-text-secondary font-medium">Enter position at recommended price</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                                <TrendingUp className="text-purple-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Manage Exit</h3>
                            <p className="text-text-secondary font-medium">Take profits at targets or cut losses at stops</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
