import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import GradientText from '../../components/ui/GradientText';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Privacy Policy | InterNative Traders</title>
                <meta name="description" content="Privacy policy for InterNative Traders. Learn how we protect your data." />
            </Helmet>

            <Section className="pt-48 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                                Privacy <br /><GradientText className="from-blue-400 to-cyan-400">Policy.</GradientText>
                            </h1>
                            <p className="text-xl text-text-secondary font-medium italic">Last Updated: February 2026</p>
                        </div>

                        <GlassCard className="p-8 md:p-16 space-y-12 rounded-[3rem] border-white/5 bg-white/[0.01]">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">Data Collection</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    We collect only the necessary information to provide our services, including your email address for account access and payment processing details via our secure partners (Stripe/PayPal).
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">Cookie Usage</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    We use session cookies to keep you logged in and analyze traffic to improve our platform experience. We do not sell your personal data to third parties.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">Security Measures</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Your data is encrypted using institutional-grade protocols. We prioritize the security of our members' information and use industry-standard practices to prevent unauthorized access.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tight">Third-Party Services</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Our platform integrates with secure third-party providers for Discord automation and payment. These partners have their own privacy policies which we recommend you review.
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default PrivacyPolicy;
