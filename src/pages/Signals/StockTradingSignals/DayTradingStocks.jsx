import React from 'react';
import { Helmet } from 'react-helmet-async';
import DayTradingHero from '../../../components/DayTrading/DayTradingHero';
import DayStrategies from '../../../components/DayTrading/DayStrategies';
import DayTradingRisk from '../../../components/DayTrading/DayTradingRisk';
import DayTradingTools from '../../../components/DayTrading/DayTradingTools';
import BestStocksDayTrading from '../../../components/DayTrading/BestStocksDayTrading';
import WhoShouldDayTrade from '../../../components/DayTrading/WhoShouldDayTrade';
import DayTradingFAQ from '../../../components/DayTrading/DayTradingFAQ';
import DayTradingCTA from '../../../components/DayTrading/DayTradingCTA';

const DayTradingStocks = () => {
    return (
        <>
            <Helmet>
                <title>Day Trading Stocks: Intraday Strategies & High-Speed Execution | InterNative Traders</title>
                <meta name="description" content="Master intraday stock trading with our comprehensive guide. Learn Momentum, Scalping, and Gap Trading strategies. Understand the risks ($25k PDT Rule) and tools needed for success." />
            </Helmet>
            <DayTradingHero />
            <DayStrategies />
            <DayTradingRisk />
            <DayTradingTools />
            <BestStocksDayTrading />
            <WhoShouldDayTrade />
            <DayTradingFAQ />
            <DayTradingCTA />
        </>
    );
};

export default DayTradingStocks;
