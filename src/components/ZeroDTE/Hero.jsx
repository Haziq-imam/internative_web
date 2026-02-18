import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Clock, Zap, AlertTriangle } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-8">
                        <Clock className="text-red-500" size={20} />
                        <span className="text-red-500 font-black text-sm uppercase tracking-wider">Same-Day Expiration</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        <GradientText>0DTE Options</GradientText> Explained
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                        0DTE (Zero Days To Expiration) options expire the same trading day. The most extreme form of options trading with massive intraday profit potential but equally extreme risk.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <Clock className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Hours Left</h3>
                            <p className="text-text-secondary font-medium">Options expire at market close today</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 mx-auto">
                                <Zap className="text-emerald-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">200-1000%+</h3>
                            <p className="text-text-secondary font-medium">Potential intraday returns</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 mx-auto">
                                <AlertTriangle className="text-red-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Extreme Risk</h3>
                            <p className="text-text-secondary font-medium">Most expire worthless by 4PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
