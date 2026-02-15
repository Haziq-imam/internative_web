import React from 'react';
import { Helmet } from 'react-helmet-async';

// Modular Components
import Hero from '../../../components/OptionsSignals/Hero';
import PainPoints from '../../../components/OptionsSignals/PainPoints';
import SignalBreakdown from '../../../components/OptionsSignals/SignalBreakdown';
import SignalTabs from '../../../components/OptionsSignals/SignalTabs';
import MarketsWeCover from '../../../components/OptionsSignals/MarketsWeCover';
import HowItWorks from '../../../components/OptionsSignals/HowItWorks';
import Advantages from '../../../components/OptionsSignals/Advantages';
import PerformanceDashboard from '../../../components/OptionsSignals/PerformanceDashboard';
import AnalystProfiles from '../../../components/OptionsSignals/AnalystProfiles';
import Pricing from '../../../components/OptionsSignals/Pricing';
import FAQ from '../../../components/OptionsSignals/FAQ';
import RiskDisclosure from '../../../components/OptionsSignals/RiskDisclosure';
import SocialProof from '../../../components/OptionsSignals/SocialProof';
import FinalCTA from '../../../components/OptionsSignals/FinalCTA';

const OptionsTradingSignals = () => {
    return (
        <>
            <Helmet>
                <title>Options Trading Signals | InterNative Traders</title>
                <meta name="description" content="Get professional options trading signals with precise entry/exit points. Calls, puts, lottos, swings on SPY, QQQ, NVDA, TSLA. 82% win rate. Try free 7 days." />
            </Helmet>

            <Hero />
            <PainPoints />
            <SignalBreakdown />
            <SignalTabs />
            <MarketsWeCover />
            <HowItWorks />
            <Advantages />
            <PerformanceDashboard />
            <AnalystProfiles />
            <Pricing />
            <FAQ />
            <RiskDisclosure />
            <SocialProof />
            <FinalCTA />
        </>
    );
};

export default OptionsTradingSignals;
