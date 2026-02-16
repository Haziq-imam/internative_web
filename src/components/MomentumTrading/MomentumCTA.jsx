import React from 'react';
import { Target, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const MomentumCTA = () => {
    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Ready to Catch the <GradientText>Next Move?</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary mb-8">
                        Join traders capturing high-velocity breakouts daily. Get real-time alerts on stocks moving NOW.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <Button size="lg" className="shadow-neon bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
                            Start 14-Day Free Trial
                        </Button>
                        <Button size="lg" variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                            View Performance Log
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <GlassCard className="p-6">
                            <Target className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Precision Entries</h3>
                            <p className="text-sm text-text-secondary">Stop chasing. Get alerts at the breakout point, not the top.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Risk Defined</h3>
                            <p className="text-sm text-text-secondary">Every alert includes exact Stop Loss and Profit Targets.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Real-Time Speed</h3>
                            <p className="text-sm text-text-secondary">Market-moving news and relative strength delivered instantly.</p>
                        </GlassCard>
                    </div>
                </div>

                {/* Risk Disclosure */}
                <div className="max-w-4xl mx-auto mt-16 p-6 border border-red-500/10 bg-red-900/5 rounded-xl">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="text-sm font-black text-red-400 uppercase tracking-wider mb-2">Risk Disclosure</h4>
                            <p className="text-xs text-red-200/60 leading-relaxed">
                                Momentum trading is highly speculative and involves substantial risk of loss. Past performance is not indicative of future results. It is possible to lose more than your initial investment if using leverage. 70-90% of retail traders lose money attempting to trade momentum. Unlike investing, this strategy requires active management, discipline, and strict adherence to stop losses. Do not trade with capital you cannot afford to lose.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MomentumCTA;
