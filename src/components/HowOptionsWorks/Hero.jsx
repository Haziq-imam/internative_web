import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        How <GradientText>Options Trading</GradientText> Works
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                        Options give you the right (but not obligation) to buy or sell stocks at specific prices before expiration. Learn the fundamentals of calls, puts, strikes, and how to use options effectively.
                    </p>

                    {/* Key Concepts */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 mx-auto">
                                <TrendingUp className="text-emerald-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Call Options</h3>
                            <p className="text-text-secondary font-medium">Profit when stock prices go UP</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 mx-auto">
                                <TrendingDown className="text-red-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Put Options</h3>
                            <p className="text-text-secondary font-medium">Profit when stock prices go DOWN</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <DollarSign className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Leverage</h3>
                            <p className="text-text-secondary font-medium">Control $10,000 of stock with $200</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
