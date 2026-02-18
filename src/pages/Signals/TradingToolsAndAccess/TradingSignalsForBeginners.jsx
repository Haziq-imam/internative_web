import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/BeginnersGuide/Hero';
import RealityCheck from '../../../components/BeginnersGuide/RealityCheck';
import SafetySteps from '../../../components/BeginnersGuide/SafetySteps';
import CommonMistakes from '../../../components/BeginnersGuide/CommonMistakes';
import WhoShouldNotTrade from '../../../components/BeginnersGuide/WhoShouldNotTrade';
import FAQ from '../../../components/BeginnersGuide/FAQ';
import NextSteps from '../../../components/BeginnersGuide/NextSteps';

const TradingSignalsForBeginners = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Trading Signals For Beginners: Complete Safety Guide | InterNative Traders</title>
                <meta name="description" content="Before risking money on trading signals, read this complete beginner's guide. Learn realistic expectations, common mistakes, safety steps, and who shouldn't trade." />
            </Helmet>
            <Hero />
            <RealityCheck />
            <SafetySteps />
            <CommonMistakes />
            <WhoShouldNotTrade />
            <FAQ />
            <NextSteps />
        </div>
    );
};

export default TradingSignalsForBeginners;
