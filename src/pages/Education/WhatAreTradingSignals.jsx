import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/EducationHub/Hero';
import FinalCTA from '../../../components/EducationHub/FinalCTA';

const WhatAreTradingSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>What Are Trading Signals? | InterNative Traders</title>
                <meta name="description" content="A beginner's guide to understanding how trading signals work and how to use them effectively." />
            </Helmet>
            <Hero />
            <FinalCTA />
        </div>
    );
};

export default WhatAreTradingSignals;
