import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/StockSignals/Hero';
import SignalTypes from '../../../components/StockSignals/SignalTypes';
import Pricing from '../../../components/StockSignals/Pricing';
import FinalCTA from '../../../components/StockSignals/FinalCTA';

const GapUpGapDownStocks = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Gap Up / Gap Down Stocks | InterNative Traders</title>
                <meta name="description" content="Opening bell stock signals focusing on major overnight gaps and morning fades." />
            </Helmet>
            <Hero />
            <SignalTypes />
            <Pricing />
            <FinalCTA />
        </div>
    );
};

export default GapUpGapDownStocks;
