import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Best <GradientText>Trading Signals Platform</GradientText> 2026
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 max-w-3xl mx-auto">
                        Comparing the top trading signal platforms by features, reliability, user experience, and value. Find the platform that fits your trading style.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Zap className="text-primary mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Real-Time</h3>
                            <p className="text-text-secondary font-medium">Instant push notifications</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Shield className="text-emerald-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Verified</h3>
                            <p className="text-text-secondary font-medium">Transparent performance</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <TrendingUp className="text-purple-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Multi-Asset</h3>
                            <p className="text-text-secondary font-medium">Stocks, options, crypto</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
