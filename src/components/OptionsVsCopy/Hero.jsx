import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Users, Bot, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        <GradientText>Options Signals</GradientText> vs Copy Trading
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 max-w-3xl mx-auto">
                        Understanding the key differences between receiving trading signals and automatically copying trades. Which approach fits your trading style?
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Users className="text-primary mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Signals</h3>
                            <p className="text-text-secondary font-medium">You control execution</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Bot className="text-purple-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Copy Trading</h3>
                            <p className="text-text-secondary font-medium">Automated mirroring</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <TrendingUp className="text-emerald-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Best Choice?</h3>
                            <p className="text-text-secondary font-medium">Depends on your goals</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
