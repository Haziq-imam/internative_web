import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/HowToUseSignals/Hero';
import StepByStep from '../../../components/HowToUseSignals/StepByStep';
import FAQ from '../../../components/HowToUseSignals/FAQ';
import FinalCTA from '../../../components/EducationHub/FinalCTA';

const HowToUseSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>HowToUseSignals | InterNative Traders</title>
            </Helmet>
            <Hero />
            <StepByStep />
            <FAQ />
            <FinalCTA />
        </div>
    );
};

export default HowToUseSignals;
