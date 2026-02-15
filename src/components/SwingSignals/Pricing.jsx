import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const Pricing = () => {
    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Professional Swing Signals</h2>
                    <p className="text-text-secondary text-lg">Part-Time Trading, Full-Time Results</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <GlassCard className="p-10 rounded-[2.5rem] flex flex-col">
                        <h3 className="text-2xl font-black text-white mb-2">DELUXE</h3>
                        <div className="text-4xl font-black text-white mb-6">$59.99<span className="text-lg text-text-muted font-medium">/month</span></div>
                        <Button variant="outline" className="w-full mb-8">Start Free 7-Day Trial</Button>
                        <div className="space-y-4 flex-1 text-sm">
                            {[
                                "All swing signals (Stocks, Options, Crypto, Futures)",
                                "2-4 signals per day (quality over quantity)",
                                "3-21 day hold guidance",
                                "Wide entry windows (hours/days)",
                                "Technical + fundamental analysis",
                                "Three-target exit system",
                                "Standard delivery (1-2 second alerts)",
                                "Mobile app (iOS/Android)",
                                "Cancel anytime"
                            ].map((f, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                                    <p className="text-text-secondary font-medium">{f}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard className="p-10 rounded-[2.5rem] flex flex-col border-primary shadow-neon relative overflow-hidden">
                        <div className="absolute top-5 right-5 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Most Popular</div>
                        <h3 className="text-2xl font-black text-white mb-2">ULTIMATE</h3>
                        <div className="text-4xl font-black text-white mb-2">$599.99<span className="text-lg text-text-muted font-medium">/year</span></div>
                        <p className="text-success font-bold text-sm mb-6">Savings: $120/year vs monthly</p>
                        <Button className="w-full mb-8 shadow-neon">Start Free 7-Day Trial</Button>
                        <div className="space-y-4 flex-1 text-sm">
                            <p className="font-bold text-white mb-2">Everything in Deluxe, PLUS:</p>
                            {[
                                "Priority delivery (30 seconds early)",
                                "Exclusive longer-term swings (14-30 days)",
                                "Monthly swing trading webinars",
                                "Swing pattern library (Education)",
                                "VIP Discord channel (Analyst Q&A)",
                                "Weekend prep reports",
                                "Earnings calendar integration",
                                "SMS alerts (optional)"
                            ].map((f, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                                    <p className="text-white font-medium">{f}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;
