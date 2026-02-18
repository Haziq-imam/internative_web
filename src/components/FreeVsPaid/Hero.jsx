import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { DollarSign, Gift, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        <GradientText>Free vs Paid</GradientText> Trading Signals
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 max-w-3xl mx-auto">
                        Understanding the real differences between free and paid signal services. Is paying for signals worth it?
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Gift className="text-emerald-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Free Signals</h3>
                            <p className="text-text-secondary font-medium">Low quality, delayed</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <DollarSign className="text-primary mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Paid Signals</h3>
                            <p className="text-text-secondary font-medium">Professional, real-time</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <TrendingUp className="text-purple-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">ROI</h3>
                            <p className="text-text-secondary font-medium">Paid signals pay for themselves</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
