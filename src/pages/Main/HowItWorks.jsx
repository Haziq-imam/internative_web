    import React from 'react';
    import { Helmet } from 'react-helmet-async';
    import HowItWorks from '../../components/OptionsSignals/HowItWorks';
    import TrustBadges from '../../components/sections/TrustBadges';
    import FinalCTA from '../../components/sections/FinalCTA';
    import { motion } from 'framer-motion';
    import { Brain, CheckCircle2 } from 'lucide-react';

    const HowItWorksPage = () => {
        return (
            <div className="min-h-screen bg-background">
                <Helmet>
                    <title>How It Works | InterNative Traders</title>
                    <meta name="description" content="Learn how InterNative Traders delivers institutional-grade options and stock signals directly to your device. Simple 4-step process." />
                </Helmet>

                {/* Page Header */}
                <section className="relative pt-40 pb-20 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
                        >
                            How It <span className="text-gradient">Works</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-text-secondary max-w-2xl mx-auto"
                        >
                            We handle the complex analysis. You execute the simple trades.
                        </motion.p>
                    </div>
                </section>

                {/* Main Content using the existing component */}
                <HowItWorks />

                {/* Additional Process Detail Section */}
                <section className="py-20 bg-background-secondary/30 relative">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-24">
                            {/* Detail 1 */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1">
                                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                                        <div className="w-full h-full rounded-[20px] bg-background-secondary flex items-center justify-center border border-white/5 relative overflow-hidden group">
                                            {/* Abstract representation of analysis */}
                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30" />
                                            <div className="relative z-10 text-center p-6">
                                                <div className="text-6xl mb-4 text-primary"><Brain className="w-16 h-16 mx-auto" /></div>
                                                <div className="font-bold text-white">Institutional Scan</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">1. We Scan The Market</h3>
                                    <p className="text-text-secondary text-lg leading-relaxed">
                                        Using proprietary algorithms and institutional data feeds, we monitor over 5,000 tickers in real-time. We look for 'Smart Money' flow—large institutional orders that often precede major price moves.
                                    </p>
                                </div>
                            </div>

                            {/* Detail 2 */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">2. We Verify The Signal</h3>
                                    <p className="text-text-secondary text-lg leading-relaxed">
                                        Raw data isn't enough. Our team of expert analysts manually verifies every potential setup against technical indicators, Greek exposure (Delta/Gamma), and macro sentiment before it reaches you.
                                    </p>
                                </div>
                                <div>
                                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/20 p-1">
                                        <div className="w-full h-full rounded-[20px] bg-background-secondary flex items-center justify-center border border-white/5 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30" />
                                            <div className="relative z-10 text-center p-6">
                                                <div className="text-6xl mb-4 text-primary"><CheckCircle2 className="w-16 h-16 mx-auto" /></div>
                                                <div className="font-bold text-white">Manual Verification</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TrustBadges />
                <FinalCTA />
            </div>
        );
    };

    export default HowItWorksPage;
