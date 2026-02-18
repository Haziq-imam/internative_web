import React from 'react';
import { Helmet } from 'react-helmet-async';

const CryptoTradingBasics = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Crypto Trading Basics | InterNative Traders</title>
                <meta name="description" content="Enter the world of digital assets. Learn how to trade Bitcoin, Ethereum, and altcoins. Understand exchanges, wallets, and how to follow crypto signals safely." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Crypto Trading Basics</h1>
            <p className="text-lg text-gray-300">Your foundational guide to navigating the cryptocurrency markets.</p>
        </div>
    );
};

export default CryptoTradingBasics;
