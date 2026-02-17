import React from 'react';
import Section from '../ui/Section';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const Pricing = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Start Your Journey Today</h2>
                    <p className="text-text-secondary text-lg">Choose the plan that fits your trading goals. All plans include 7-day free trial.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Monthly Plan */}
                    <GlassCard className="p-10 rounded-[2.5rem] flex flex-col items-center text-center">
                        <div className="text-xs font-black text-text-muted uppercase tracking-widest mb-4">Monthly Subscription</div>
                        <h3 className="text-3xl font-black text-white mb-2">DELUXE</h3>
                        <div className="text-5xl font-black text-white mb-8">$89.99<span className="text-lg text-text-muted font-medium">/mo</span></div>
                        <Link to="/pricing" className="w-full">
                            <Button variant="outline" className="w-full mb-10 py-4 text-base">Start 7-Day Free Trial</Button>
                        </Link>
                        <div className="space-y-4 w-full">
                            {[
                                "3-5 Stock signals per day",
                                "Target entry/exit zones",
                                "Stop-loss protection",
                                "Basic technical analysis",
                                "Mobile app access",
                                "Discord community access",
                            ].map((f, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] shrink-0">✓</div>
                                    {f}
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Yearly Plan */}
                    <GlassCard className="p-10 rounded-[2.5rem] flex flex-col items-center text-center border-primary shadow-neon relative overflow-hidden">
                        <div className="absolute top-6 right-6 px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Save $240/Year</div>
                        <div className="text-xs font-black text-primary uppercase tracking-widest mb-4">Yearly Access</div>
                        <h3 className="text-3xl font-black text-white mb-2">ULTIMATE</h3>
                        <div className="text-5xl font-black text-white mb-8">$699.99<span className="text-lg text-text-muted font-medium">/yr</span></div>
                        <Link to="/pricing" className="w-full">
                            <Button className="w-full mb-10 py-4 text-base shadow-neon">Start Free Trial & Save</Button>
                        </Link>
                        <div className="space-y-4 w-full">
                            {[
                                "Everything in DELUXE plan",
                                "Growth stock portfolio alerts",
                                "VIP analyst support channel",
                                "Weekend market prep reports",
                                "Proprietary indicator library",
                                "Priority sub-second alerts",
                            ].map((f, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-white font-bold">
                                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] shrink-0">✓</div>
                                    {f}
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
