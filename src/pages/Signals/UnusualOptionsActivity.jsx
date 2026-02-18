import React from 'react';
import { Helmet } from 'react-helmet-async';

const UnusualOptionsActivity = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Unusual Options Activity | InterNative Traders</title>
                <meta name="description" content="Detect market moves before they happen with unusual options activity. Track large sweeps, block trades, and aggressive positioning from institutions." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Unusual Options Activity</h1>
            <p className="text-lg text-gray-300">How to identify and trade smart money activity in the options market.</p>
        </div>
    );
};

export default UnusualOptionsActivity;
