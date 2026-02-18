import React from 'react';
import { Helmet } from 'react-helmet-async';

const OptionsFlowSignals = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Options Flow Signals | InterNative Traders</title>
                <meta name="description" content="Follow smart money with real-time options flow signals. Identify large institutional bets and repeat buy orders on top tickers." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Options Flow Signals</h1>
            <p className="text-lg text-gray-300">Real-time alerts based on institutional options flow and whale activity.</p>
        </div>
    );
};

export default OptionsFlowSignals;
