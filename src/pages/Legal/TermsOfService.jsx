import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import GradientText from '../../components/ui/GradientText';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Terms of Service | InterNative Traders</title>
                <meta name="description" content="Terms and conditions for using InterNative Traders signals and educational platform." />
            </Helmet>

            <Section className="pt-48 pb-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                                Terms of <br /><GradientText>Service.</GradientText>
                            </h1>
                            <p className="text-xl text-text-secondary font-medium italic">Last Updated: February 2026</p>
                        </div>

                        <GlassCard className="p-8 md:p-16 space-y-12 rounded-[3rem] border-white/5 bg-white/[0.01]">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">1. Acceptance of Terms</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    By accessing or using the InterNative Traders platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">2. No Financial Advice</h2>
                                <p className="text-lg text-text-secondary leading-relaxed font-bold italic">
                                    InterNative Traders is an educational platform. We provide trade signals and analysis for informational purposes ONLY. We are not registered financial advisors.
                                </p>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    All content provided is the opinion of our analysts and should not be considered personalized investment advice. You are responsible for your own trading decisions.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">3. Subscription & Billing</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Subscriptions are billed on a recurring basis. You may cancel at any time through your dashboard. No partial refunds are provided for used time within a billing cycle.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">4. Intellectual Property</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    All signals, guides, and educational materials are proprietary to InterNative Traders. Sharing, reselling, or redistributing our signals is strictly prohibited and can result in account termination without refund.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">5. Limitation of Liability</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    InterNative Traders shall not be liable for any financial losses or damages resulting from the use of our signals or educational content. Trading involves significant risk.
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default TermsOfService;
