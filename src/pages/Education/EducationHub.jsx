import React from 'react';
import { Helmet } from 'react-helmet-async';

// Modular Components
import Hero from '../../components/EducationHub/Hero';
import Benefits from '../../components/EducationHub/Benefits';
import Curriculum from '../../components/EducationHub/Curriculum';
import FeaturedGuides from '../../components/EducationHub/FeaturedGuides';
import LearningFormats from '../../components/EducationHub/LearningFormats';
import BeginnerPath from '../../components/EducationHub/BeginnerPath';
import IntermediateAdvanced from '../../components/EducationHub/IntermediateAdvanced';
import LiveEducation from '../../components/EducationHub/LiveEducation';
import Certification from '../../components/EducationHub/Certification';
import ResourceLibrary from '../../components/EducationHub/ResourceLibrary';
import FAQ from '../../components/EducationHub/FAQ';
import Community from '../../components/EducationHub/Community';
import FinalCTA from '../../components/EducationHub/FinalCTA';

const EducationHub = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Trading Education Hub - Learn Stocks, Options, Crypto & Futures | InterNative Traders</title>
                <meta name="description" content="Free trading education for members. Learn stocks, options, crypto, futures from beginner to advanced. 50+ guides, 100+ hours video. Start learning today." />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "EducationalOrganization",
                      "name": "InterNative Traders Education Hub",
                      "description": "Professional trading education for all skill levels.",
                      "url": "https://internativetraders.com/education"
                    }
                    `}
                </script>
            </Helmet>

            <Hero />
            <Benefits />
            <Curriculum />
            <FeaturedGuides />
            <LearningFormats />
            <BeginnerPath />
            <IntermediateAdvanced />
            <LiveEducation />
            <Certification />
            <ResourceLibrary />
            <FAQ />
            <Community />
            <FinalCTA />
        </div>
    );
};

export default EducationHub;
