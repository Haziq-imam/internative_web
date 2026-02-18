import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Zap, Bell, Smartphone } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        <GradientText>Real-Time</GradientText> Trading Alerts
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 max-w-3xl mx-auto">
                        Get instant push notifications the moment signals are sent. Speed is everything in options trading—delays cost you money.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Zap className="text-primary mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">{'<30 Seconds'}</h3>
                            <p className="text-text-secondary font-medium">From signal to your phone</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Bell className="text-emerald-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Push + SMS</h3>
                            <p className="text-text-secondary font-medium">Multiple alert channels</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <Smartphone className="text-purple-500 mx-auto mb-3" size={32} />
                            <h3 className="text-2xl font-black text-white mb-2">Mobile First</h3>
                            <p className="text-text-secondary font-medium">Trade from anywhere</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
