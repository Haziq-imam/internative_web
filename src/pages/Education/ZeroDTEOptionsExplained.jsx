import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/ZeroDTE/Hero';
import WhatIs0DTE from '../../components/ZeroDTE/WhatIs0DTE';
import FAQ from '../../components/ZeroDTE/FAQ';

const ZeroDTEOptionsExplained = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>0DTE Options Explained: Same-Day Trading Guide | InterNative Traders</title>
                <meta name="description" content="Learn what 0DTE (Zero Days To Expiration) options are, how they work, risks, rewards, and best practices for same-day options trading." />
            </Helmet>
            <Hero />
            <WhatIs0DTE />
            <FAQ />
        </div>
    );
};

export default ZeroDTEOptionsExplained;
