import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/ZeroDTE/Hero';
import WhatIs0DTE from '../../../components/ZeroDTE/WhatIs0DTE';
import FAQ from '../../../components/ZeroDTE/FAQ';

const ZeroDTEOptionsExplained = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>0DTE Options Explained | Daily Expiry Trading | InterNative Traders</title>
                <meta name="description" content="Master the fast-paced world of 0DTE options. Learn the mechanics, risks, and strategies for same-day expiration trading on major indices." />
            </Helmet>
            <Hero />
            <WhatIs0DTE />
            <FAQ />
        </div>
    );
};

export default ZeroDTEOptionsExplained;
