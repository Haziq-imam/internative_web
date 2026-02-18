import React from 'react';
import { Helmet } from 'react-helmet-async';

// Extracted Components
import Hero from '../../components/StockSignals/Hero';
import PainPoints from '../../components/StockSignals/PainPoints';
import SignalBreakdown from '../../components/StockSignals/SignalBreakdown';
import SignalTypes from '../../components/StockSignals/SignalTypes';
import MarketsAndSectors from '../../components/StockSignals/MarketsAndSectors';
import HowItWorks from '../../components/StockSignals/HowItWorks';
import WhyOurSignalsWin from '../../components/StockSignals/WhyOurSignalsWin';
import PerformanceStats from '../../components/StockSignals/PerformanceStats';
import AnalystTeam from '../../components/StockSignals/AnalystTeam';
import Pricing from '../../components/StockSignals/Pricing';
import FAQ from '../../components/StockSignals/FAQ';
import RiskDisclosure from '../../components/StockSignals/RiskDisclosure';
import FinalCTA from '../../components/StockSignals/FinalCTA';

const StockSignals = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Stock Trading Signals | InterNative Traders</title>
                <meta name="description" content="Get professional stock trading signals with precise entry/exit points. Swing trades, day trades, growth stocks. 81% win rate. Real-time alerts. Try free 7 days." />
            </Helmet>

            <Hero />
            <PainPoints />
            <SignalBreakdown />
            <SignalTypes />
            <MarketsAndSectors />
            <HowItWorks />
            <WhyOurSignalsWin />
            <PerformanceStats />
            <AnalystTeam />
            <Pricing />
            <FAQ />
            <RiskDisclosure />
            <FinalCTA />
        </div>
    );
};

export default StockSignals;
