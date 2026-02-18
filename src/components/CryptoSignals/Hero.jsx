import React from 'react';
import { Bitcoin, Activity } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -ml-40 -mb-40" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <Bitcoin className="w-4 h-4" /> 24/7 Market Action
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            Crypto Signals for <br />
                            <GradientText>Volatile Markets</GradientText>
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            Capture 20-80% returns with expert swing trading signals for Bitcoin, Ethereum, Solana, and top altcoins. We filter out the noise and deliver high-probability setups directly to your phone, 24/7.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                            {[
                                "74% Win Rate",
                                "Weekend Trading Opportunities",
                                "5-21 Day Hold Time",
                                "BTC, ETH & Altcoins"
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3 py-2 px-4 rounded-xl bg-white/5 border border-white/5">
                                    <Activity className="w-5 h-5 text-success shrink-0" />
                                    <span className="text-sm font-bold text-white whitespace-nowrap">{stat}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link to="/pricing">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base shadow-neon">Get Crypto Signals</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative">
                        <GlassCard className="p-0 overflow-hidden border-white/10 bg-[#0A051A]/90 backdrop-blur-xl shadow-2xl relative">
                            <div className="p-8 space-y-6">
                                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                    <div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider font-bold mb-1">Recent Signal</div>
                                        <div className="text-2xl font-black text-white">Solana (SOL)</div>
                                    </div>
                                    <div className="px-4 py-2 bg-success/10 text-success rounded-lg font-bold">
                                        +67.3% Gain
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-text-secondary">Entry Zone</span>
                                        <span className="text-white font-bold">$18.50 - $19.20</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-text-secondary">Exit Price</span>
                                        <span className="text-white font-bold">$31.40</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-text-secondary">Hold Time</span>
                                        <span className="text-white font-bold">14 Days</span>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-3 text-xs text-text-muted">
                                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                        Signal Status: <span className="text-success font-bold">Target Hit</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
