import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/EducationHub/Hero';
import FinalCTA from '../../../components/EducationHub/FinalCTA';

const ZeroDTEOptionsExplained = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>ZeroDTEOptionsExplained | InterNative Traders</title>
            </Helmet>
            <Hero />
            <FinalCTA />
        </div>
    );
};

export default ZeroDTEOptionsExplained;
