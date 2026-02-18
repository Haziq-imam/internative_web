import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/LottoOptions/Hero';
import Definition from '../../components/LottoOptions/Definition';
import WhenToUse from '../../components/LottoOptions/WhenToUse';
import FAQ from '../../components/LottoOptions/FAQ';

const WhatIsLottoOptions = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>What Is Lotto Options? High-Risk Trading Explained | InterNative Traders</title>
                <meta name="description" content="Learn what lotto options are, how they work, when to use them, and why they're high-risk/high-reward. Complete guide to 0-3 DTE options trading." />
            </Helmet>
            <Hero />
            <Definition />
            <WhenToUse />
            <FAQ />
        </div>
    );
};

export default WhatIsLottoOptions;
