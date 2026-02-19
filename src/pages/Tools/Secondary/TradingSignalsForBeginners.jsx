import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/EducationHub/Hero';
import FinalCTA from '../../../components/EducationHub/FinalCTA';

const TradingSignalsForBeginners = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Trading Signals For Beginners | InterNative Traders</title>
                <meta name="description" content="The complete roadmap for starting your trading journey with expert-led signals." />
            </Helmet>
            <Hero />
            <FinalCTA />
        </div>
    );
};

export default TradingSignalsForBeginners;
