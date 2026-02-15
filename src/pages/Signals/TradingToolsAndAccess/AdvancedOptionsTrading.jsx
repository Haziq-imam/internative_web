import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/OptionsSignals/Hero';
import FinalCTA from '../../../components/OptionsSignals/FinalCTA';

const AdvancedOptionsTrading = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Advanced Options Trading | InterNative Traders</title>
                <meta name="description" content="Master complex options strategies, Greeks, and institutional-grade risk management." />
            </Helmet>
            <Hero />
            <FinalCTA />
        </div>
    );
};

export default AdvancedOptionsTrading;
