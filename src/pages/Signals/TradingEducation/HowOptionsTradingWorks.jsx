import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/HowOptionsWorks/Hero';
import BasicsExplained from '../../../components/HowOptionsWorks/BasicsExplained';
import OptionsChain from '../../../components/HowOptionsWorks/OptionsChain';
import Greeks from '../../../components/HowOptionsWorks/Greeks';
import Strategies from '../../../components/HowOptionsWorks/Strategies';
import FAQ from '../../../components/HowOptionsWorks/FAQ';

const HowOptionsTradingWorks = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>How Options Trading Works | Mechanics & Strategies | InterNative Traders</title>
                <meta name="description" content="Master the basics of options trading. Learn about calls, puts, the Greeks, and how to read an options chain with our expert-led guide." />
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
