import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/HowOptionsWorks/Hero';
import BasicsExplained from '../../components/HowOptionsWorks/BasicsExplained';
import OptionsChain from '../../components/HowOptionsWorks/OptionsChain';
import Greeks from '../../components/HowOptionsWorks/Greeks';
import Strategies from '../../components/HowOptionsWorks/Strategies';
import FAQ from '../../components/HowOptionsWorks/FAQ';

const HowOptionsTradingWorks = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>How Options Trading Works: Complete Beginner's Guide | InterNative Traders</title>
                <meta name="description" content="Learn how options trading works. Understand calls vs puts, strike prices, expiration dates, the Greeks, and common strategies for beginners." />
            </Helmet>
            <Hero />
            <BasicsExplained />
            <OptionsChain />
            <Greeks />
            <Strategies />
            <FAQ />
        </div>
    );
};

export default HowOptionsTradingWorks;
