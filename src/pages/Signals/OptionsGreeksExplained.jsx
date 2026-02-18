import React from 'react';
import { Helmet } from 'react-helmet-async';

const OptionsGreeksExplained = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Options Greeks Explained | InterNative Traders</title>
                <meta name="description" content="Understand Delta, Gamma, Theta, Vega, and Rho. Learn how the Greeks impact option pricing and how to use them to manage risk and optimize strategies." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Options Greeks Explained</h1>
            <p className="text-lg text-gray-300">Master the mathematics behind option pricing and behavior.</p>
        </div>
    );
};

export default OptionsGreeksExplained;
