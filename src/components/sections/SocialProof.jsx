import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const SocialProof = () => {
    const brands = [
        { name: 'S&P 500', opacity: 1 },
        { name: 'NASDAQ', opacity: 1 },
        { name: 'DOW JONES', opacity: 1 },
        { name: 'RUSSELL 2000', opacity: 1 },
        { name: 'NYSE', opacity: 0.7 },
        { name: 'CBOE', opacity: 0.7 },
    ];

    return (
        <div className="py-16 border-y border-white/5 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <p className="text-center text-[10px] font-black text-white/40 mb-10 uppercase tracking-[0.3em]">
                    Institutional Flow Monitoring Across All Major Exchanges
                </p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    {brands.map((brand, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-black text-white/40 hover:text-primary transition-all cursor-default font-display tracking-tighter"
                        >
                            {brand.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
