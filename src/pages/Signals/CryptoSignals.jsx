import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/CryptoSignals/Hero';
import CryptoFeatures from '../../components/CryptoSignals/CryptoFeatures';
import FAQ from '../../components/SwingSignals/FAQ';
import FinalCTA from '../../components/SwingSignals/FinalCTA';

const CryptoSignals = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white">
            <Helmet>
                <title>Crypto Trading Signals | Bitcoin & Altcoin Swing Alerts | InterNative Traders</title>
                <meta name="description" content="Professional crypto swing trading signals for Bitcoin, Ethereum, and top altcoins. Capture volatility with 24/7 alerts, risk management, and 74% win rate." />
            </Helmet>

            <Hero />
            <CryptoFeatures />
            <FAQ />
            <FinalCTA />
        </div>
    );
};

export default CryptoSignals;
