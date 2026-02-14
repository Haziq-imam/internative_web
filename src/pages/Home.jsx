import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import SocialProof from '../components/Home/SocialProof';
import ProblemSection from '../components/Home/ProblemSection';
import SolutionSection from '../components/Home/SolutionSection';
import HowItWorks from '../components/Home/HowItWorks';
import SignalTypes from '../components/Home/SignalTypes';
import BenefitsSection from '../components/Home/BenefitsSection';
import MobileAppShowcase from '../components/Home/MobileAppShowcase';
import PricingSection from '../components/Home/PricingSection';
import Testimonials from '../components/Home/Testimonials';
import PerformanceSection from '../components/Home/PerformanceSection';
import FAQSection from '../components/Home/FAQSection';
import ComparisonTable from '../components/Home/ComparisonTable';
import TrustBadges from '../components/Home/TrustBadges';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary/30">
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
