import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { AlertTriangle, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
                        <AlertTriangle className="text-orange-500" size={20} />
                        <span className="text-orange-500 font-black text-sm uppercase tracking-wider">Required Reading for Beginners</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Trading Signals For <GradientText>Beginners</GradientText>
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                        Before you risk a single dollar following trading signals, read this complete guide. We'll cover what beginners need to know, common mistakes that blow up accounts, and how to start safely.
                    </p>

                    {/* Key Stats */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="text-4xl font-black text-white mb-2">70-90%</div>
                            <p className="text-text-secondary font-medium">Of beginners lose money in their first year</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="text-4xl font-black text-white mb-2">2-5%</div>
                            <p className="text-text-secondary font-medium">Max risk per trade (the golden rule)</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="text-4xl font-black text-white mb-2">$500+</div>
                            <p className="text-text-secondary font-medium">Minimum recommended starting capital</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
