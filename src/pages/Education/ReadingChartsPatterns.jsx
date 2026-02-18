import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReadingChartsPatterns = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Reading Charts & Key Patterns | InterNative Traders</title>
                <meta name="description" content="Master the art of technical analysis. Learn to identify flags, pennants, support/resistance, and candlestick patterns to anticipate market turning points." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Reading Charts & Patterns</h1>
            <p className="text-lg text-gray-300">Your visual guide to price action and technical formations.</p>
        </div>
    );
};

export default ReadingChartsPatterns;
