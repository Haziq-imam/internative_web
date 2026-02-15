import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const FinalCTA = () => {
    return (
        <Section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-gradient opacity-10" />
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">Stop Guessing. Start Profiting.</h2>
                <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">Join 2,500+ traders receiving professional stock signals institutional-grade data and expert human analysis.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <Button size="lg" className="w-full sm:w-auto px-16 py-6 text-xl shadow-neon rounded-full">Start 7-Day Free Trial Now</Button>
                    <div className="flex flex-col items-start text-left">
                        <div className="text-white font-bold">Risk-Free Trial</div>
                        <div className="text-text-muted text-sm">No credit card required for first 24 hours.</div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">✓ 81% Win Rate</div>
                    <div className="flex items-center gap-2">✓ Cancel Anytime</div>
                    <div className="flex items-center gap-2">✓ Real-Time Alerts</div>
                    <div className="flex items-center gap-2">✓ Live Analyst Support</div>
                </div>
            </div>
        </Section>
    );
};

export default FinalCTA;
