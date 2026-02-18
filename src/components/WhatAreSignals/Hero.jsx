import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { BookOpen, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        What Are <GradientText>Trading Signals</GradientText>?
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 leading-relaxed">
                        Trading signals are actionable trade recommendations delivered in real-time, telling you exactly what to buy, when to enter, where to set your stop-loss, and when to take profits. Think of them as a professional trader whispering in your ear: "Buy this now, sell at this price."
                    </p>

                    {/* Key Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <BookOpen className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Complete Plans</h3>
                            <p className="text-text-secondary font-medium">Entry, exit, and risk management included</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <TrendingUp className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Real-Time</h3>
                            <p className="text-text-secondary font-medium">Instant alerts to your phone or desktop</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <Shield className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Risk Defined</h3>
                            <p className="text-text-secondary font-medium">Clear stop-losses and position sizing</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
