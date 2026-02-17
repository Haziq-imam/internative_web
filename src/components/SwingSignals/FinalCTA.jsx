import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const FinalCTA = () => {
    return (
        <Section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-gradient opacity-10" />
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">Start Swing Trading Like a Pro</h2>
                <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">Join thousands of part-time traders capturing multi-day gains. 15-30 minutes daily, 79% win rate. No risk try free for 7 days.</p>

                <div className="flex items-center justify-center gap-4 mb-10 text-sm font-bold text-white flex-wrap">
                    <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">1. Start Free Trial</span>
                    <ArrowRight className="text-primary hidden sm:block" />
                    <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">2. Get Your First Signal</span>
                    <ArrowRight className="text-primary hidden sm:block" />
                    <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">3. Profit Part-Time</span>
                </div>

                <Link to="/pricing">
                    <Button size="lg" className="px-16 py-6 text-xl shadow-neon rounded-full mb-12">Get 7-Day Free Trial - No Credit Card Required</Button>
                </Link>

                <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">
                    <span>✓ Cancel Anytime</span>
                    <span>✓ 30-Day Money Back</span>
                    <span>✓ Works around your job</span>
                    <span>✓ No PDT Rule Required</span>
                </div>
            </div>
        </Section>
    );
};

export default FinalCTA;
