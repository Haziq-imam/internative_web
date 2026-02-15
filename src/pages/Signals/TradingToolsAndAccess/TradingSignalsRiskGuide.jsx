import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import Section from '../../../components/ui/Section';
import GlassCard from '../../../components/ui/GlassCard';
import Button from '../../../components/ui/Button';

const RiskGuide = () => {
    return (
        <>
            <Helmet>
                <title>Trading Risk Guide | InterNative Traders</title>
                <meta name="description" content="Master the art of capital preservation. Position sizing, stop losses, and emotional control." />
            </Helmet>

            {/* Hero */}
            <Section className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Protect Your <br />
                        <span className="text-gradient">Capital First.</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-12">
                        Professional trading isn't about how much you make, it's about how much you keep. Master our 3-pillar risk strategy.
                    </p>
                </div>
            </Section>

            {/* Risk Pillars */}
            <Section className="bg-background-secondary">
                <div className="grid md:grid-cols-3 gap-8">
                    <GlassCard className="p-8 border-primary/20">
                        <ShieldCheck className="text-primary w-12 h-12 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Position Sizing</h3>
                        <p className="text-text-secondary">Never risk more than 1-2% of your total account on any single trade. Survival is the first step to success.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-primary/20">
                        <ShieldAlert className="text-primary w-12 h-12 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Stop Losses</h3>
                        <p className="text-text-secondary">Every trade needs an exit plan. We teach you where to set stops to avoid being stopped out by market noise.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-primary/20">
                        <Shield className="text-primary w-12 h-12 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Portfolio Heat</h3>
                        <p className="text-text-secondary">Manage your total exposure across all open trades to prevent catastrophic drawdowns during market corrections.</p>
                    </GlassCard>
                </div>
            </Section>
        </>
    );
};

export default RiskGuide;
