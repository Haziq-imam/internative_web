import React from 'react';
import { Helmet } from 'react-helmet-async';
import SwingHero from '../../../components/SwingTrading/SwingHero';
import SwingStrategies from '../../../components/SwingTrading/SwingStrategies';
import TechnicalIndicators from '../../../components/SwingTrading/TechnicalIndicators';
import BestStocksSwing from '../../../components/SwingTrading/BestStocksSwing';
import SwingRisk from '../../../components/SwingTrading/SwingRisk';
import WhoShouldSwingTrade from '../../../components/SwingTrading/WhoShouldSwingTrade';
import SwingFAQ from '../../../components/SwingTrading/SwingFAQ';
import SwingCTA from '../../../components/SwingTrading/SwingCTA';

const SwingTradingStocks = () => {
    return (
        <>
            <Helmet>
                <title>Swing Trading Stocks: Complete Guide to Multi-Day Position Strategies | InterNative Traders</title>
                <meta name="description" content="Master swing trading stocks with proven strategies for 2-day to 6-week positions. Learn trend following, breakouts, pullback trading, technical indicators, risk management, and best stocks for swing trading. Compatible with full-time employment." />
            </Helmet>
            <SwingHero />
            <SwingStrategies />
            <TechnicalIndicators />
            <BestStocksSwing />
            <SwingRisk />
            <WhoShouldSwingTrade />
            <SwingFAQ />
            <SwingCTA />
        </>
    );
};

export default SwingTradingStocks;
