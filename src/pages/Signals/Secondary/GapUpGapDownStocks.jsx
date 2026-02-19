import React from 'react';
import { Helmet } from 'react-helmet-async';
import GapHero from '../../../components/GapTrading/GapHero';
import GapTypes from '../../../components/GapTrading/GapTypes';
import TradingStrategies from '../../../components/GapTrading/TradingStrategies';
import BestStocks from '../../../components/GapTrading/BestStocks';
import RiskManagement from '../../../components/GapTrading/RiskManagement';
import WhoShouldTrade from '../../../components/GapTrading/WhoShouldTrade';
import GapFAQ from '../../../components/GapTrading/GapFAQ';
import GapCTA from '../../../components/GapTrading/GapCTA';

const GapUpGapDownStocks = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Gap Up / Gap Down Stocks | InterNative Traders</title>
                <meta name="description" content="Master gap trading with expert analysis of price discontinuities. Get pre-market alerts for 2%+ gaps with 60-75% fill rates, classified gap types, and precise entry/exit strategies." />
            </Helmet>
            <GapHero />
            <GapTypes />
            <TradingStrategies />
            <BestStocks />
            <RiskManagement />
            <WhoShouldTrade />
            <GapFAQ />
            <GapCTA />
        </div>
    );
};

export default GapUpGapDownStocks;
