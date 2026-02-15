import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/StockSignals/Hero';
import SignalTypes from '../../../components/StockSignals/SignalTypes';
import Pricing from '../../../components/StockSignals/Pricing';
import FinalCTA from '../../../components/StockSignals/FinalCTA';

const MomentumStockSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Momentum Stock Signals | InterNative Traders</title>
                <meta name="description" content="High-velocity stock signals focused on momentum breakouts and volume spikes." />
            </Helmet>
            <Hero />
            <SignalTypes />
            <Pricing />
            <FinalCTA />
        </div>
    );
};

export default MomentumStockSignals;
