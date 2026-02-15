import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/StockSignals/Hero';
import SignalTypes from '../../../components/StockSignals/SignalTypes';
import Pricing from '../../../components/StockSignals/Pricing';
import FinalCTA from '../../../components/StockSignals/FinalCTA';

const SwingTradingStocks = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Swing Trading Stock Signals | InterNative Traders</title>
                <meta name="description" content="Multi-day momentum stock signals for traders with a 2-5 day horizon." />
            </Helmet>
            <Hero />
            <SignalTypes />
            <Pricing />
            <FinalCTA />
        </div>
    );
};

export default SwingTradingStocks;
