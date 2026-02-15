import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/EducationHub/Hero';
import FinalCTA from '../../../components/EducationHub/FinalCTA';

const WhatIsLottoOptions = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>WhatIsLottoOptions | InterNative Traders</title>
            </Helmet>
            <Hero />
            <FinalCTA />
        </div>
    );
};

export default WhatIsLottoOptions;
