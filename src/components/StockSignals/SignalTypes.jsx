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
                            title: "Swing Trade Signals",
                            icon: Activity,
                            desc: "Multi-day positions held for 3-30 days to capture intermediate trends. Lower stress than day trading, higher returns than buy-and-hold.",
                            rating: "79% Win Rate",
                            features: ["Traders with full-time jobs", "Building wealth gradually", "Anyone under $25k account"],
                            color: "text-primary",
                            link: "/signals/swing-trading-stocks",
                            stats: { win: "79%", avg: "+18.3%" }
                        },
                        {
                            title: "Day Trade Signals",
                            icon: Zap,
                            desc: "Intraday momentum & breakout plays. Positions opened and closed within the same trading day.",
                            rating: "68% Win Rate",
                            features: ["Active market hours traders", "PDT status ($25k+ account)", "Quick 2-8% intraday moves"],
                            color: "text-secondary",
                            link: "/signals/day-trading-stocks",
                            stats: { win: "68%", avg: "+4.9%" }
                        },
                        {
                            title: "Growth Stock Signals",
                            icon: TrendingUp,
                            desc: "High-growth companies for longer-term gains. Held for weeks to months to capture major trend moves.",
                            rating: "71% Win Rate",
                            features: ["Investors seeking larger size", "Comfortable with 4-12 week holds", "Targeting 30-100%+ returns"],
                            color: "text-success",
                            link: "/signals/stock-trading-signals",
                            stats: { win: "71%", avg: "+34.6%" }
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
