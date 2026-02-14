import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import { homepageContent } from '../../data/homepageContent';

const HeroSection = () => {
    const { hero } = homepageContent;

    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-40 bg-background">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0,transparent_70%)] pointer-events-none" />
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Top Rated Alerts Provider
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]"
                        >
                            Make every trade <br />
                            <span className="text-gradient">count.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            {hero.subheadline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16"
                        >
                            <Button size="lg" className="w-full sm:w-auto text-xl px-12 group">
                                {hero.primaryCTA}
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-xl px-12">
                                {hero.secondaryCTA}
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60"
                        >
                            {hero.trustBar.slice(0, 3).map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-bold text-white uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Visual - Professional Phone Mockup */}
                    <div className="flex-1 w-full max-w-xl relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <div className="relative mx-auto border-gray-800 bg-gray-900 border-[12px] rounded-[3.5rem] h-[640px] w-[320px] shadow-[0_0_100px_rgba(139,92,246,0.3)] group drop-shadow-2xl">
                                <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[4rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[15px] top-[142px] rounded-r-lg"></div>

                                <div className="rounded-[2.8rem] overflow-hidden w-full h-full bg-background-secondary relative border border-white/5">
                                    {/* Mock notification drawer */}
                                    <div className="mt-14 px-5 space-y-6">
                                        <div className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Recent Alerts</div>

                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1 }}
                                            className="bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-xl"
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-success" />
                                                    <span className="text-[10px] font-black text-white/80 uppercase">Entry Confirmed</span>
                                                </div>
                                                <span className="text-[10px] text-white/40">Now</span>
                                            </div>
                                            <div className="text-lg font-bold text-white">NVDA $840 Calls</div>
                                            <div className="text-[10px] text-text-secondary mt-1">Institutional buy flow detected</div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1.2 }}
                                            className="bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10 opacity-60 scale-95 origin-top"
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span className="text-[10px] font-black text-white/80 uppercase">Target Reached</span>
                                                </div>
                                                <span className="text-[10px] text-white/40">12m ago</span>
                                            </div>
                                            <div className="text-lg font-bold text-white">SPY $510 Puts</div>
                                            <div className="text-xs font-bold text-success mt-1">+124.5% Profit</div>
                                        </motion.div>

                                        <div className="flex flex-col items-center justify-center pt-20">
                                            <div className="w-16 h-1 w-max-full bg-white/10 rounded-full mb-8" />
                                            <div className="text-white/20 text-center font-bold italic">
                                                InterNative Professional
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Animated background blobs */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/10 rounded-full -z-10"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
