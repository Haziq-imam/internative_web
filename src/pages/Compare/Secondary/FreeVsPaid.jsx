import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/FreeVsPaid/Hero';
import Comparison from '../../../components/FreeVsPaid/Comparison';
import FAQ from '../../../components/FreeVsPaid/FAQ';

const FreeVsPaid = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Free vs Paid Trading Signals: Is It Worth Paying? | InterNative Traders</title>
                <meta name="description" content="Compare free vs paid trading signals. Learn the real differences in quality, speed, support, and ROI. Is paying for signals worth it?" />
            </Helmet>
            <Hero />
            <Comparison />
            <FAQ />
        </div>
    );
};

export default FreeVsPaid;
