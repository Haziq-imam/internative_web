import React from 'react';
import { Helmet } from 'react-helmet-async';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import TrustBadges from '../components/sections/TrustBadges';
import FinalCTA from '../components/sections/FinalCTA';

const PricingPage = () => {
    return (
        <>
            <Helmet>
                <title>Pricing Plans | InterNative</title>
                <meta name="description" content="Choose the perfect trading signal plan for your needs. Monthly and yearly options available." />
            </Helmet>

            <div className="pt-10">
                <h1 className="sr-only">Pricing Plans</h1>
                <Pricing />
                <TrustBadges />
                <FAQ />
                <FinalCTA />
            </div>
        </>
    );
};

export default PricingPage;
