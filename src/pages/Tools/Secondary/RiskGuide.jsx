import React from 'react';
import { Helmet } from 'react-helmet-async';

// Extracted Components
import Hero from '../../../components/RiskGuide/Hero';
import CoreUnderstanding from '../../../components/RiskGuide/CoreUnderstanding';
import PositionSizing from '../../../components/RiskGuide/PositionSizing';
import SurvivalGuide from '../../../components/RiskGuide/SurvivalGuide';
import ImplementationControls from '../../../components/RiskGuide/ImplementationControls';
import RiskAdjustment from '../../../components/RiskGuide/RiskAdjustment';
import WhoNeedsThis from '../../../components/RiskGuide/WhoNeedsThis';
import RiskFAQ from '../../../components/RiskGuide/RiskFAQ';
import RiskSummary from '../../../components/RiskGuide/RiskSummary';
import KeyTakeaways from '../../../components/RiskGuide/KeyTakeaways';
import NextSteps from '../../../components/RiskGuide/NextSteps';
import RiskDisclosure from '../../../components/RiskGuide/RiskDisclosure';

const TradingSignalsRiskGuide = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white selection:bg-primary/30">
            <Helmet>
                <title>Trading Signals Risk Guide | InterNative Traders</title>
                <meta name="description" content="Complete guide to managing losses and drawdowns when following trading signals. Master position sizing, stop-losses, and portfolio heat." />
            </Helmet>

            <Hero />
            <CoreUnderstanding />
            <PositionSizing />
            <SurvivalGuide />
            <ImplementationControls />
            <RiskAdjustment />
            <WhoNeedsThis />
            <RiskFAQ />
            <RiskSummary />
            <KeyTakeaways />
            <NextSteps />
            <RiskDisclosure />
        </div>
    );
};

export default TradingSignalsRiskGuide;
