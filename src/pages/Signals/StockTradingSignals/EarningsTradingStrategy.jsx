import React from 'react';
import { Helmet } from 'react-helmet-async';
import EarningsHero from '../../../components/EarningsTrading/EarningsHero';
import EarningsStrategies from '../../../components/EarningsTrading/EarningsStrategies';
import IVCrush from '../../../components/EarningsTrading/IVCrush';
import BestStocksEarnings from '../../../components/EarningsTrading/BestStocksEarnings';
import EarningsRisk from '../../../components/EarningsTrading/EarningsRisk';
import WhoShouldTradeEarnings from '../../../components/EarningsTrading/WhoShouldTradeEarnings';
import EarningsFAQ from '../../../components/EarningsTrading/EarningsFAQ';
import EarningsCTA from '../../../components/EarningsTrading/EarningsCTA';

const EarningsTradingStrategy = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Earnings Trading Strategy | InterNative Traders</title>
                <meta name="description" content="Master earnings trading with expert analysis of quarterly reports. Get IV crush analysis, volatility selling strategies, and post-earnings drift plays with 65-75% win rates." />
            </Helmet>
            <EarningsHero />
            <EarningsStrategies />
            <IVCrush />
            <BestStocksEarnings />
            <EarningsRisk />
            <WhoShouldTradeEarnings />
            <EarningsFAQ />
            <EarningsCTA />
        </div>
    );
};

export default EarningsTradingStrategy;
