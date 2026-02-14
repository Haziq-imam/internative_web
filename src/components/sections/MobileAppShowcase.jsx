import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { homepageContent } from '../../data/homepageContent';
import { Check, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileAppShowcase = () => {
    const { mobileApp } = homepageContent;

    return (
        <Section className="bg-background-secondary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="flex flex-col lg:flex-row items-center gap-20">
                {/* Content */}
                <div className="flex-1 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Stay Connected
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        {mobileApp.headline}
                    </h2>
                    <div className="space-y-6 mb-12">
                        {mobileApp.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                                    <Check className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-xl text-text-secondary font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <Button size="lg" className="px-12 py-4 text-xl shadow-neon">
                        {mobileApp.cta}
                    </Button>
                </div>

                {/* Visual - Floating Angle Phone */}
                <div className="flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end py-12">
                    <motion.div
                        initial={{ rotate: -5, y: 20 }}
                        whileInView={{ rotate: 12, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full transform scale-150 opacity-50" />
                        <div className="bg-gray-900 border-[12px] border-gray-800 rounded-[3.5rem] h-[640px] w-[320px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative z-10 drop-shadow-2xl">
                            <div className="rounded-[2.8rem] overflow-hidden w-full h-full bg-background relative border border-white/5">
                                {/* Fake app UI */}
                                <div className="p-8 pt-12">
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="h-10 w-10 bg-primary/20 rounded-xl border border-primary/30 flex items-center justify-center">
                                            <TrendingUp size={20} className="text-primary" />
                                        </div>
                                        <div className="h-8 w-24 bg-white/5 rounded-full border border-white/10" />
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { label: 'Long Call', ticker: 'NVDA $840', profit: '+124%' },
                                            { label: 'Put Option', ticker: 'SPY $510', profit: '+45%' },
                                            { label: 'Day Trade', ticker: 'TSLA $175', profit: '+62%' }
                                        ].map((item, i) => (
                                            <div key={i} className="p-5 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md">
                                                <div className="flex justify-between mb-3">
                                                    <div className="text-[10px] font-black text-primary uppercase tracking-widest">{item.label}</div>
                                                    <div className="text-[10px] text-white/40 font-bold">LIVE</div>
                                                </div>
                                                <div className="text-xl font-bold text-white mb-2">{item.ticker}</div>
                                                <div className="text-sm font-black text-success">{item.profit}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Bottom nav */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/10 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default MobileAppShowcase;
