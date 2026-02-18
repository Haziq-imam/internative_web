import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/WhatAreSignals/Hero';
import Definition from '../../components/WhatAreSignals/Definition';
import Components from '../../components/WhatAreSignals/Components';
import Types from '../../components/WhatAreSignals/Types';
import HowTheyWork from '../../components/WhatAreSignals/HowTheyWork';
import BenefitsRisks from '../../components/WhatAreSignals/BenefitsRisks';
import FAQ from '../../components/WhatAreSignals/FAQ';
import NextSteps from '../../components/WhatAreSignals/NextSteps';

const WhatAreTradingSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>What Are Trading Signals? Complete Beginner's Guide | InterNative Traders</title>
                <meta name="description" content="Learn what trading signals are, how they work, and how to use them effectively. Complete guide covering entry points, profit targets, stop-losses, and signal types." />
            </Helmet>
            <Hero />
            <Definition />
            <Components />
            <Types />
            <HowTheyWork />
            <BenefitsRisks />
            <FAQ />
            <NextSteps />
        </div>
    );
};

export default WhatAreTradingSignals;
