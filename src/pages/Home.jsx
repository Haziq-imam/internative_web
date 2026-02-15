import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SocialProof from '../components/home/SocialProof';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import HowItWorks from '../components/home/HowItWorks';
import SignalTypes from '../components/home/SignalTypes';
import BenefitsSection from '../components/home/BenefitsSection';
import MobileAppShowcase from '../components/home/MobileAppShowcase';
import PricingSection from '../components/home/PricingSection';
import Testimonials from '../components/home/Testimonials';
import PerformanceSection from '../components/home/PerformanceSection';
import FAQSection from '../components/home/FAQSection';
import ComparisonTable from '../components/home/ComparisonTable';
import TrustBadges from '../components/home/TrustBadges';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary/30">
            <HeroSection />
            <SocialProof />
            <ProblemSection />
            <SolutionSection />
            <HowItWorks />
            <SignalTypes />
            <BenefitsSection />
            <MobileAppShowcase />
            <PricingSection />
            <Testimonials />
            <PerformanceSection />
            <FAQSection />
            <ComparisonTable />
            <TrustBadges />
        </div>
    );
};

export default Home;
