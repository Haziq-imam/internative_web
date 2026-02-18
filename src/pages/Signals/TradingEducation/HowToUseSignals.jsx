import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/HowToUseSignals/Hero';
import StepByStep from '../../../components/HowToUseSignals/StepByStep';
import FAQ from '../../../components/HowToUseSignals/FAQ';

const HowToUseSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>How To Use Trading Signals: Complete Execution Guide | InterNative Traders</title>
                <meta name="description" content="Learn the complete step-by-step process for using trading signals from receiving alerts to managing exits. Master signal execution and improve your results." />
            </Helmet>
            <Hero />
            <StepByStep />
            <FAQ />
        </div>
    );
};

export default HowToUseSignals;
