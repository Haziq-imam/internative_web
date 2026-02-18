import React from 'react';
import { Helmet } from 'react-helmet-async';

// Extracted Components
import Hero from '../../components/SignalsApp/Hero';
import AppOverview from '../../components/SignalsApp/AppOverview';
import EssentialFeatures from '../../components/SignalsApp/EssentialFeatures';
import ScamRedFlags from '../../components/SignalsApp/ScamRedFlags';
import EvaluationGuide from '../../components/SignalsApp/EvaluationGuide';
import UserProfiles from '../../components/SignalsApp/UserProfiles';
import AppFAQ from '../../components/SignalsApp/AppFAQ';
import AppSummary from '../../components/SignalsApp/AppSummary';
import KeyTakeaways from '../../components/SignalsApp/KeyTakeaways';
import RiskDisclosure from '../../components/SignalsApp/RiskDisclosure';

const TradingSignalsApp = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white selection:bg-primary/30">
            <Helmet>
                <title>Trading Signals App | Mobile Platform Guide | InterNative Traders</title>
                <meta name="description" content="Complete guide to mobile trading signals platforms. Learn about essential features, verified tracking, and how to avoid signal app scams." />
            </Helmet>

            <Hero />
            <AppOverview />
            <EssentialFeatures />
            <ScamRedFlags />
            <EvaluationGuide />
            <UserProfiles />
            <AppFAQ />
            <AppSummary />
            <KeyTakeaways />
            <RiskDisclosure />
        </div>
    );
};

export default TradingSignalsApp;
