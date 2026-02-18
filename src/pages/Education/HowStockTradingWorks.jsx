import React from 'react';
import { Helmet } from 'react-helmet-async';

const HowStockTradingWorks = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>How Stock Trading Works | InterNative Traders</title>
                <meta name="description" content="Learn the fundamentals of the stock market. Understand exchanges, brokers, bid/ask spreads, and how to execute your first trade with confidence." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">How Stock Trading Works</h1>
            <p className="text-lg text-gray-300">A comprehensive beginner's guide to the stock market ecosystem.</p>
        </div>
    );
};

export default HowStockTradingWorks;
