import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Zap, TrendingUp, AlertTriangle } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
                        <AlertTriangle className="text-orange-500" size={20} />
                        <span className="text-orange-500 font-black text-sm uppercase tracking-wider">High Risk / High Reward</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        What Is <GradientText>Lotto Options</GradientText>?
                    </h1>
                    <p className="text-xl text-text-secondary font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                        "Lotto" or "lottery" options are short-dated, out-of-the-money options (0-3 DTE) with potential for 100-500%+ returns in hours or days. High risk, massive reward plays for experienced traders.
                    </p>

                    {/* Key Stats */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                                <Zap className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">0-3 DTE</h3>
                            <p className="text-text-secondary font-medium">Days to expiration (same-day to 3 days)</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 mx-auto">
                                <TrendingUp className="text-emerald-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">100-500%+</h3>
                            <p className="text-text-secondary font-medium">Potential returns in hours/days</p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 mx-auto">
                                <AlertTriangle className="text-red-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">High Risk</h3>
                            <p className="text-text-secondary font-medium">Can lose 100% if stock doesn't move</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
