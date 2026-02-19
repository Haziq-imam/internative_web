import React from 'react';
import { Helmet } from 'react-helmet-async';
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

const TradingEducationPage = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Trading Education Hub | InterNative Traders</title>
                <meta name="description" content="Professional trading education for all levels. Learn stocks, options, crypto, futures from beginner to advanced." />
            </Helmet>

            <Hero />
            <Benefits />
            <Curriculum />
            <FeaturedGuides id="featured-guides" />
            <LearningFormats />
            <BeginnerPath />
            <IntermediateAdvanced />
            <LiveEducation />
            <Certification />
            <ResourceLibrary />
            <FAQ />
            <Community id="community" />
            <FinalCTA />
        </div>
    );
};

export default TradingEducationPage;
