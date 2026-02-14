import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { ArrowRight, BarChart2, Hash, Bitcoin } from 'lucide-react';

const SignalTypes = () => {
    const types = [
        {
            icon: BarChart2,
            title: "Options Signals",
            description: "High-leverage plays on major indices and tech stocks (SPY, QQQ, NVDA, TSLA).",
            strategies: ["Scalps (10-30%)", "Day Trades (20-50%)", "Swings (50-200%+)"],
            color: "text-primary",
            link: "/signals/options"
        },
        {
            icon: Hash,
            title: "Stock Signals",
            description: "Equity trades for steady growth without expiration pressure.",
            strategies: ["Momentum Breakouts", "Earnings Plays", "Gap Ups/Down"],
            color: "text-success",
            link: "/signals/stocks"
        },
        {
            icon: Bitcoin,
            title: "Crypto Signals",
            description: "24/7 market coverage for Bitcoin, Ethereum, and top altcoins.",
            strategies: ["Trend Following", "Reversals", "Spot & Futures"],
            color: "text-warning",
            link: "/signals/crypto"
        }
    ];

    return (
        <Section id="signals" className="bg-background relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Global Asset Coverage
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
                        Not Just Options. <br />
                        <span className="text-gradient">Total Markets.</span>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium leading-relaxed">
                        Diversify your capital with institutional-grade alerts across all major asset classes. One subscription, unlimited profit potential.
                    </p>
                </div>
                <div className="flex justify-start lg:justify-end">
                    <Button size="lg" className="px-12 group text-xl shadow-neon">
                        Explore Signals
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                {types.map((type, idx) => (
                    <GlassCard key={idx} className="p-10 h-full flex flex-col rounded-[2.5rem]" hoverEffect>
                        <div className={`w-16 h-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center mb-10 border border-white/5`}>
                            <type.icon size={32} className="text-primary" />
                        </div>

                        <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{type.title}</h3>
                        <p className="text-text-secondary text-lg mb-10 flex-grow leading-relaxed">
                            {type.description}
                        </p>

                        <div className="space-y-4 mb-10">
                            {type.strategies.map((strategy, sIdx) => (
                                <div key={sIdx} className="flex items-center gap-4 text-white font-semibold">
                                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                                    {strategy}
                                </div>
                            ))}
                        </div>

                        <Button variant="secondary" className="w-full text-lg py-4">
                            Learn Strategy
                        </Button>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};

export default SignalTypes;
