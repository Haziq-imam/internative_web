import React from 'react';
import { Clock, TrendingUp, Shield, BarChart } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const CryptoFeatures = () => {
    const features = [
        {
            icon: Clock,
            title: "24/7 Opportunities",
            description: "Crypto markets never sleep. We monitor price action around the clock so you don't miss weekend breakouts or overnight moves."
        },
        {
            icon: TrendingUp,
            title: "High Volatility Plays",
            description: "We capitalize on the explosive moves unique to crypto, targeting 20-50%+ gains that stock markets rarely offer in short timeframes."
        },
        {
            icon: Shield,
            title: "Risk-Managed Entries",
            description: "Every signal comes with precise invalidation levels and stop-losses to protect your capital from crypto's notorious drawdowns."
        },
        {
            icon: BarChart,
            title: "Major Liquid Assets",
            description: "We focus on high-volume assets like BTC, ETH, SOL, and ADA to ensure liquidity and avoid 'pump and dump' schemes."
        }
    ];

    return (
        <Section className="py-20 bg-background-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Trade Crypto With Us?</h2>
                    <p className="text-text-secondary text-lg">Navigate the Wild West of finance with institutional-grade analysis and disciplined execution.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <GlassCard key={idx} className="p-8 hover:bg-white/5 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-text-secondary leading-relaxed text-sm">{feature.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default CryptoFeatures;
