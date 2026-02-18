import React from 'react';
import { Helmet } from 'react-helmet-async';

const OptionsRiskManagement = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Options Risk Management | InterNative Traders</title>
                <meta name="description" content="Protect your capital with professional options risk management. Learn position sizing, stop-loss strategies, and the 2% rule to ensure long-term trading survival." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Options Risk Management</h1>
            <p className="text-lg text-gray-300">Essential rules and techniques for preserving capital and managing drawdown in options trading.</p>
        </div>
    );
};

export default OptionsRiskManagement;
