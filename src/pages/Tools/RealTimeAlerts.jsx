import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../../components/ui/Section';
import GradientText from '../../../components/ui/GradientText';

const RealTimeTradingAlerts = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white pt-32">
            <Helmet>
                <title>Real-Time Trading Alerts | InterNative Traders</title>
            </Helmet>
            <Section>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Real-Time Trading Alerts <br />
                        <GradientText>Coming Soon</GradientText>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                        We are currently preparing full documentation and expert insights for our instant delivery system. Stay tuned for institutional-grade trading content.
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-primary font-bold uppercase tracking-widest animate-pulse">
                        Analyzing Market Data...
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default RealTimeTradingAlerts;
