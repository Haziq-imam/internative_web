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
                        Start Receiving Profitable <br /><span className="text-gradient">Options Signals Today</span>
                    </h2>

                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                        Join thousands of traders receiving expert options alerts with complete entry/exit plans. No risk try free for 7 days.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <div className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                            1. Start Free Trial <span className="text-primary mx-2">→</span> 2. Receive Your First Signal <span className="text-primary mx-2">→</span> 3. Follow & Profit
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Link to="/pricing">
                                <Button size="lg" className="px-12 h-16 text-xl shadow-neon">Get 7-Day Free Trial - No Credit Card Required</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 text-xs text-text-muted">
                        <div className="flex items-center justify-center gap-2"><Shield size={14} className="text-primary" /> No credit card to start trial</div>
                        <div className="flex items-center justify-center gap-2"><Shield size={14} className="text-primary" /> Cancel anytime, no contracts</div>
                        <div className="flex items-center justify-center gap-2"><Shield size={14} className="text-primary" /> 30-day money-back guarantee</div>
                        <div className="flex items-center justify-center gap-2"><Shield size={14} className="text-primary" /> Instant access to all signal types</div>
                        <div className="flex items-center justify-center gap-2"><Shield size={14} className="text-primary" /> 10,000+ active members</div>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default FinalCTA;
