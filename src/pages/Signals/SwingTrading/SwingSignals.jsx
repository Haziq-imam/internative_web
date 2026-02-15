import React from 'react';
import { Helmet } from 'react-helmet-async';

// Extracted Components
import Hero from '../../../components/SwingSignals/Hero';
import PainPoints from '../../../components/SwingSignals/PainPoints';
import SignalBreakdown from '../../../components/SwingSignals/SignalBreakdown';
import SignalTabs from '../../../components/SwingSignals/SignalTabs';
import ComparisonTable from '../../../components/SwingSignals/ComparisonTable';
import HowItWorks from '../../../components/SwingSignals/HowItWorks';
import PerformanceDashboard from '../../../components/SwingSignals/PerformanceDashboard';
import AnalystProfiles from '../../../components/SwingSignals/AnalystProfiles';
import Pricing from '../../../components/SwingSignals/Pricing';
import FAQ from '../../../components/SwingSignals/FAQ';
import RiskDisclosure from '../../../components/SwingSignals/RiskDisclosure';
import FinalCTA from '../../../components/SwingSignals/FinalCTA';

const SwingSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Swing Trading Signals - 79% Win Rate | InterNative Traders</title>
                <meta name="description" content="Get professional swing trading signals for stocks and options. Hold 3-21 days. 79% win rate. Perfect for busy traders. Try free 7 days." />
            </Helmet>

            <Hero />
            <PainPoints />
            <SignalBreakdown />
            <SignalTabs />
            <ComparisonTable />
            <HowItWorks />
            <PerformanceDashboard />
            <AnalystProfiles />
            <Pricing />
            <FAQ />
            <RiskDisclosure />
            <FinalCTA />
        </div>
    );
};

export default SwingSignals;
