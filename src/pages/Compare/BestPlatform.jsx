import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/BestPlatform/Hero';
import PlatformComparison from '../../components/BestPlatform/PlatformComparison';
import FAQ from '../../components/BestPlatform/FAQ';

const BestPlatform = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Best Trading Signals Platform 2026: Features & Comparison | InterNative Traders</title>
                <meta name="description" content="Compare the best trading signal platforms by features, alerts, mobile apps, and value. Find the right platform for your trading needs." />
            </Helmet>
            <Hero />
            <PlatformComparison />
            <FAQ />
        </div>
    );
};

export default BestPlatform;
