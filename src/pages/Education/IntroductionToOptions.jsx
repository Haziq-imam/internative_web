import React from 'react';
import { Helmet } from 'react-helmet-async';

const IntroductionToOptions = () => {
    return (
        <div className="container mx-auto px-4 py-20 text-white min-h-screen">
            <Helmet>
                <title>Introduction to Options Trading | InterNative Traders</title>
                <meta name="description" content="New to options? Start here. Learn what options are, how they differ from stocks, and the basic mechanics of buying calls and puts for profit and protection." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-8">Introduction to Options</h1>
            <p className="text-lg text-gray-300">The essential first step for anyone looking to enter the world of options trading.</p>
        </div>
    );
};

export default IntroductionToOptions;
