import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/LottoOptions/Hero';
import Definition from '../../../components/LottoOptions/Definition';
import WhenToUse from '../../../components/LottoOptions/WhenToUse';
import FAQ from '../../../components/LottoOptions/FAQ';

const WhatIsLottoOptions = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>What Is Lotto Options Trading? | High-Reward Setups | InterNative Traders</title>
                <meta name="description" content="Explore the world of lotto options. Learn how these low-cost, high-reward trades work and when to incorporate them into your strategy." />
            </Helmet>
            <Hero />
            <Definition />
            <WhenToUse />
            <FAQ />
        </div>
    );
};

export default WhatIsLottoOptions;
