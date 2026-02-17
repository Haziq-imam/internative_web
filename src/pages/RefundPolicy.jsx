import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/ui/Section';
import GlassCard from '../components/ui/GlassCard';
import GradientText from '../components/ui/GradientText';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Refund Policy | InterNative Traders</title>
                <meta name="description" content="Refund policy for InterNative Traders subscriptions." />
            </Helmet>

            <Section className="pt-48 pb-32 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                                Refund <br /><GradientText className="from-fuchsia-400 to-pink-400">Policy.</GradientText>
                            </h1>
                            <p className="text-xl text-text-secondary font-medium italic">Last Updated: February 2026</p>
                        </div>

                        <GlassCard className="p-8 md:p-16 space-y-12 rounded-[3rem] border-white/5 bg-white/[0.01]">
                            <div className="space-y-6 text-center">
                                <h2 className="text-3xl font-black text-white tracking-tight">7-Day Free Trial</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    We offer a 100% free 7-day trial for all new members. This allows you to test our signals and education without any financial commitment.
                                </p>
                            </div>

                            <div className="space-y-6 pt-12 border-t border-white/5">
                                <h2 className="text-3xl font-black text-white tracking-tight">No-Refund Policy</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Due to the digital nature of our proprietary trading signals and educational content, which is delivered instantly upon subscription, <span className="text-white font-bold">we do not offer refunds</span> on monthly or annual subscriptions once the billing cycle has processed.
                                </p>
                            </div>

                            <div className="space-y-6 pt-12 border-t border-white/5">
                                <h2 className="text-3xl font-black text-white tracking-tight">Cancellation</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    You may cancel your subscription at any time to prevent future billing. Upon cancellation, you will maintain access to our signals and education until the end of your current paid billing period.
                                </p>
                            </div>

                            <div className="space-y-6 pt-12 border-t border-white/5">
                                <h2 className="text-3xl font-black text-white tracking-tight">Exceptions</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    In rare cases of documented technical errors or billing discrepancies on our part, we may consider a partial credit or refund at our sole discretion.
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default RefundPolicy;
