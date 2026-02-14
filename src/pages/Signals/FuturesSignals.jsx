import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FinalCTA from '../../components/sections/FinalCTA';

const FuturesSignals = () => {
    return (
        <>
            <Helmet>
                <title>Futures Trading Signals | InterNative</title>
                <meta name="description" content="Trade futures contracts with professional signals." />
            </Helmet>

            {/* Hero */}
            <Section className="relative pt-48 pb-32 overflow-hidden bg-background">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl opacity-50" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        High Velocity Markets
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[1.1] tracking-tighter font-display">
                        Futures Trading <br />
                        <span className="text-gradient">Accelerated.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                        Dominate /ES, /NQ, and /CL with institutional-grade order flow signals. High leverage, precise timing, absolute transparency.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="px-16 py-6 text-2xl shadow-neon">Get Futures Access</Button>
                        <Button size="lg" variant="outline" className="px-16 py-6 text-2xl">View Track Record</Button>
                    </div>
                </div>
            </Section>

            {/* Features Board */}
            <Section className="py-16 bg-background-secondary/30 relative border-y border-white/5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="text-center">
                        <div className="text-4xl font-black text-white mb-2 font-display tracking-tight">$ES_F</div>
                        <div className="text-xs font-black text-primary uppercase tracking-[0.2em]">S&P 500 E-Mini</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-white mb-2 font-display tracking-tight">$NQ_F</div>
                        <div className="text-xs font-black text-primary uppercase tracking-[0.2em]">Nasdaq-100</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-white mb-2 font-display tracking-tight">$CL_F</div>
                        <div className="text-xs font-black text-primary uppercase tracking-[0.2em]">Crude Oil</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-white mb-2 font-display tracking-tight">$GC_F</div>
                        <div className="text-xs font-black text-primary uppercase tracking-[0.2em]">Gold Comex</div>
                    </div>
                </div>
            </Section>

            <Section className="py-32 lg:py-48 bg-background relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Institutional Edge
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight font-display">Why Trade <br /><span className="text-gradient">Futures?</span></h2>
                        <p className="text-xl text-text-secondary mb-12 font-medium leading-relaxed">
                            Futures offer unparalleled leverage and 23/5 market access. Our systems are specifically tuned to catch the intraday "Big Boy" rotations.
                        </p>
                    </div>

                    <GlassCard className="p-10 md:p-16 rounded-[4rem] border-white/10 bg-background-secondary/40 backdrop-blur-2xl">
                        <CheckList items={[
                            "Massive buying power efficiency",
                            "Tax advantages (60/40 rule)",
                            "Deep institutional liquidity",
                            "Around the clock trading"
                        ]} className="space-y-8 text-xl text-white/90 font-black" />
                    </GlassCard>
                </div>
            </Section>

            <FinalCTA />
        </>
    );
};

export default FuturesSignals;
