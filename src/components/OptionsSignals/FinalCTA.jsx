import React from 'react';
import { Shield } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <Section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="container mx-auto px-4">
                <GlassCard className="max-w-5xl mx-auto p-8 md:p-16 rounded-[3rem] border-primary/20 bg-primary/5 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                        Ready to Trade with <br /><span className="text-gradient">Institutional Edge?</span>
                    </h2>

                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                        Join 5,000+ traders receiving the industry's most accurate options alerts. Start your 7-day free trial now.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link to="/pricing">
                                <Button size="lg" className="px-12 h-16 text-xl shadow-neon">Start Free 7-Day Trial</Button>
                            </Link>
                            <Link to="/signals/options-trading-signals">
                                <Button variant="outline" size="lg" className="px-12 h-16 text-xl">View Sample Signals</Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 w-full max-w-2xl pt-8 border-t border-white/10">
                            <div>
                                <div className="text-2xl font-black text-white">82%</div>
                                <div className="text-[10px] text-text-muted uppercase tracking-widest">Win Rate</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white">5k+</div>
                                <div className="text-[10px] text-text-muted uppercase tracking-widest">Traders</div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-white">24/7</div>
                                <div className="text-[10px] text-text-muted uppercase tracking-widest">Support</div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-12 text-sm text-text-muted flex items-center justify-center gap-2">
                        <Shield size={14} className="text-primary" />
                        No credit card required for trial • Cancel anytime • 30-day money-back guarantee
                    </p>
                </GlassCard>
            </div>
        </Section>
    );
};

export default FinalCTA;
