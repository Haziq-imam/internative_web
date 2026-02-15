import React from 'react';
import { Helmet } from 'react-helmet-async';

// Extracted Components
import Hero from '../../../components/AdvancedOptions/Hero';
import StrategyIntro from '../../../components/AdvancedOptions/StrategyIntro';
import FailureAnalysis from '../../../components/AdvancedOptions/FailureAnalysis';
import StrategiesDetailed from '../../../components/AdvancedOptions/StrategiesDetailed';
import UserSuitability from '../../../components/AdvancedOptions/UserSuitability';
import AdvancedFAQ from '../../../components/AdvancedOptions/AdvancedFAQ';
import AdvancedSummary from '../../../components/AdvancedOptions/AdvancedSummary';
import KeyTakeaways from '../../../components/AdvancedOptions/KeyTakeaways';
import NextSteps from '../../../components/AdvancedOptions/NextSteps';
import RiskDisclosure from '../../../components/AdvancedOptions/RiskDisclosure';

const AdvancedOptionsTrading = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white selection:bg-primary/30">
            <Helmet>
                <title>Advanced Options Trading Guide | Multi-Leg Strategies | InterNative Traders</title>
                <meta name="description" content="Master multi-leg options strategies. Complete guide to vertical spreads, iron condors, butterflies, and complex risk management for advanced traders." />
            </Helmet>

            <Hero />
            <StrategyIntro />
            <FailureAnalysis />
            <StrategiesDetailed />
            <UserSuitability />
            <AdvancedFAQ />
            <AdvancedSummary />
            <KeyTakeaways />
            <NextSteps />
            <RiskDisclosure />
        </div>
    );
};

export default AdvancedOptionsTrading;
