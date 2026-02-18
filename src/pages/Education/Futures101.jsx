import React from 'react';
import { Helmet } from 'react-helmet-async';

const Futures101 = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Futures 101: A Beginner's Guide | InterNative Traders</title>
                <meta name="description" content="Master the basics of futures trading. Learn about margin, leverage, contract specs for /ES and /NQ, and how to effectively hedge or speculate using futures." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Futures 101</h1>
            <p className="text-lg text-gray-300">Your introduction to the leverage and opportunities in the futures market.</p>
        </div>
    );
};

export default Futures101;
