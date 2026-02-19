import React from 'react';
import { Helmet } from 'react-helmet-async';
import Pricing from '../../components/sections/Pricing';
import TrustBadges from '../../components/sections/TrustBadges';
import FinalCTA from '../../components/sections/FinalCTA';
import GlassCard from '../../components/ui/GlassCard';
import { Shield, Award, TrendingUp, Users } from 'lucide-react';

const PricingPage = () => {
    const guarantees = [
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: "7-Day Money Back",
            description: "Not satisfied? Get a full refund within 7 days, no questions asked."
        },
        {
            icon: <Award className="w-8 h-8 text-primary" />,
            title: "82% Win Rate",
            description: "Proven track record with consistent profitable signals."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-primary" />,
            title: "Real-Time Alerts",
            description: "Instant notifications so you never miss a profitable opportunity."
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "24/7 Support",
            description: "Our expert team is always here to help you succeed."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Pricing | InterNative Traders</title>
                <meta name="description" content="Choose the perfect trading signal plan for your needs. Professional-grade signals with proven results." />
            </Helmet>

            <div className="min-h-screen bg-background">
                <h1 className="sr-only">Pricing Plans</h1>
                <Pricing />

                {/* Guarantee Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                    Why Choose <span className="text-gradient">InterNative?</span>
                                </h2>
                                <p className="text-xl text-text-secondary">
                                    Join thousands of traders who trust our proven signals
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {guarantees.map((item, idx) => (
                                    <GlassCard key={idx} className="p-6 text-center" hoverEffect>
                                        <div className="flex justify-center mb-4">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-text-secondary">
                                            {item.description}
                                        </p>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <TrustBadges />
                <FinalCTA />
            </div>
        </>
    );
};

export default PricingPage;
