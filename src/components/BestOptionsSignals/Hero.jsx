import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Trophy, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Best <GradientText>Options Trading Signals</GradientText> 2026
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 max-w-3xl mx-auto">
                        We tested 15+ options signal providers. Here's our unbiased comparison of accuracy, speed, pricing, and real performance.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Trophy className="text-primary mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">78% Win Rate</h3>
                            <p className="text-text-secondary font-medium">InterNative Traders average</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <TrendingUp className="text-emerald-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">15+ Tested</h3>
                            <p className="text-text-secondary font-medium">Signal providers compared</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Shield className="text-purple-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Real Data</h3>
                            <p className="text-text-secondary font-medium">90-day performance tracking</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
