import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/OptionsVsCopy/Hero';
import Comparison from '../../components/OptionsVsCopy/Comparison';
import FAQ from '../../components/OptionsVsCopy/FAQ';

const OptionsVsCopy = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Options Signals vs Copy Trading: Which Is Better? | InterNative Traders</title>
                <meta name="description" content="Compare trading signals vs copy trading. Learn the key differences, pros and cons, and which approach fits your trading style." />
            </Helmet>
            <Hero />
            <Comparison />
            <FAQ />
        </div>
    );
};

export default OptionsVsCopy;
