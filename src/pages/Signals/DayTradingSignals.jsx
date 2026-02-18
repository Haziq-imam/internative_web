import React from 'react';
import { Helmet } from 'react-helmet-async';

const DayTradingSignals = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Day Trading Signals | InterNative Traders</title>
                <meta name="description" content="Get high-probability intraday trading signals for stocks and options. Our day trading alerts provide precise entry, target, and stop-loss levels for fast-moving markets." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Day Trading Signals</h1>
            <p className="text-lg text-gray-300">Intraday trade recommendations for active traders.</p>
        </div>
    );
};

export default DayTradingSignals;
