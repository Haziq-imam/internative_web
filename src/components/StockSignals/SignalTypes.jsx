import React from 'react';
import { Target, Activity, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

import { Link } from 'react-router-dom';

const SignalTypes = () => {
    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Three Tiers of Stock Trading Signals</h2>
                    <p className="text-text-secondary text-lg">Strategies tailored for every account size and risk tolerance.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Swing Trade Alerts",
                            icon: Activity,
                            desc: "Multi-day positions holding for 3-14 days. Designed to capture 10-25% moves in high-momentum stocks.",
                            rating: "84% Win Rate",
                            features: ["Low monitoring required", "Perfect for small accounts", "NYSE & NASDAQ focuses"],
                            color: "text-primary",
                            link: "/signals/swing-trading-stocks"
                        },
                        {
                            title: "Day Trade Scalps",
                            icon: Zap,
                            desc: "In-and-out trades held for minutes to hours. High frequency alerts for active traders during market hours.",
                            rating: "76% Win Rate",
                            features: ["High frequency alerts", "Precise entry/exit windows", "Momentum & Gap focus"],
                            color: "text-secondary",
                            link: "/signals/day-trading-stocks"
                        },
                        {
                            title: "Momentum Signals",
                            icon: TrendingUp,
                            desc: "High-velocity breakout trades focusing on massive winners in emerging sectors and news catalysts.",
                            rating: "312% Avg Annual Return",
                            features: ["Trend following strategy", "Focus on 10X potential", "Breakout & Gap setups"],
                            color: "text-success",
                            link: "/signals/momentum-stock-signals"
                        }
                    ].map((tier, i) => (
                        <GlassCard key={i} className="p-8 flex flex-col items-center text-center hoverEffect group">
                            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 ${tier.color} group-hover:scale-110 transition-transform`}>
                                <tier.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">{tier.title}</h3>
                            <div className={`text-sm font-black uppercase tracking-widest mb-4 ${tier.color}`}>{tier.rating}</div>
                            <p className="text-text-secondary text-sm leading-relaxed mb-8">{tier.desc}</p>
                            <ul className="space-y-3 mb-8 w-full flex-grow">
                                {tier.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs font-bold text-text-muted justify-center">
                                        <ArrowRight className="w-3 h-3 text-primary" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link to={tier.link} className="w-full mt-auto">
                                <Button variant="outline" className="w-full group-hover:bg-white/10 hover:border-white/30">Learn More →</Button>
                            </Link>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SignalTypes;
