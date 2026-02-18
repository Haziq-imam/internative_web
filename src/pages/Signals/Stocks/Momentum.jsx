import React from 'react';
import { Helmet } from 'react-helmet-async';
import MomentumHero from '../../../components/MomentumTrading/MomentumHero';
import MomentumStrategies from '../../../components/MomentumTrading/MomentumStrategies';
import MomentumIndicators from '../../../components/MomentumTrading/MomentumIndicators';
import MomentumScanning from '../../../components/MomentumTrading/MomentumScanning';
import BestStocksMomentum from '../../../components/MomentumTrading/BestStocksMomentum';
import MomentumRisk from '../../../components/MomentumTrading/MomentumRisk';
import WhoShouldTradeMomentum from '../../../components/MomentumTrading/WhoShouldTradeMomentum';
import MomentumFAQ from '../../../components/MomentumTrading/MomentumFAQ';
import MomentumCTA from '../../../components/MomentumTrading/MomentumCTA';

const MomentumStockSignals = () => {
    return (
        <>
            <Helmet>
                <title>Momentum Stock Signals: Trend Following & Breakout Trading | InterNative Traders</title>
                <meta name="description" content="Capture high-velocity market moves with professional momentum trading signals. Master breakout strategies, gap-and-go setups, and relative strength trading with disciplined risk management." />
            </Helmet>
            <MomentumHero />
            <MomentumStrategies />
            <MomentumIndicators />
            <MomentumScanning />
            <BestStocksMomentum />
            <MomentumRisk />
            <WhoShouldTradeMomentum />
            <MomentumFAQ />
            <MomentumCTA />
        </>
    );
};

export default MomentumStockSignals;
