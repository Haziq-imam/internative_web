import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/StockSignals/Hero';
import SignalTypes from '../../../components/StockSignals/SignalTypes';
import Pricing from '../../../components/StockSignals/Pricing';
import FinalCTA from '../../../components/StockSignals/FinalCTA';

const EarningsTradingStrategy = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Earnings Trading Strategy | InterNative Traders</title>
                <meta name="description" content="Specialized stock signals for quarterly earnings catalysts and post-earnings drift." />
            </Helmet>
            <Hero />
            <SignalTypes />
            <Pricing />
            <FinalCTA />
        </div>
    );
};

export default EarningsTradingStrategy;
