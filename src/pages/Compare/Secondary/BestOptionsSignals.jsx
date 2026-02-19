import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/BestOptionsSignals/Hero';
import ComparisonTable from '../../../components/BestOptionsSignals/ComparisonTable';
import FAQ from '../../../components/BestOptionsSignals/FAQ';

const BestOptionsSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Best Options Trading Signals 2026: Top Providers Compared | InterNative Traders</title>
                <meta name="description" content="Unbiased comparison of the best options trading signal providers. Real performance data, win rates, pricing, and features compared." />
            </Helmet>
            <Hero />
            <ComparisonTable />
            <FAQ />
        </div>
    );
};

export default BestOptionsSignals;
