import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/StockSignals/Hero';
import SignalTypes from '../../../components/StockSignals/SignalTypes';
import Pricing from '../../../components/StockSignals/Pricing';
import FinalCTA from '../../../components/StockSignals/FinalCTA';

const DayTradingStocks = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Day Trading Stock Signals | InterNative Traders</title>
                <meta name="description" content="Intraday stock trading signals for high volatility moves." />
            </Helmet>
            <Hero title="Day Trading Stocks" sub="Intraday volatility plays for consistent daily gains." />
            <SignalTypes />
            <Pricing />
            <FinalCTA />
        </div>
    );
};

export default DayTradingStocks;
