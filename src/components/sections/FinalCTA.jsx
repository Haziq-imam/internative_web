import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Section from '../ui/Section';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

const FinalCTA = () => {
    return (
        <Section className="bg-background relative overflow-hidden py-32 lg:py-48">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <GlassCard className="relative z-10 p-12 md:p-24 text-center rounded-[4rem] overflow-hidden border-white/10 shadow-neon bg-background-secondary/80 backdrop-blur-3xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient" />

                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                        Limited Availability
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black mb-10 text-white leading-[1.1] tracking-tighter font-display">
                        Ready to Join the <br />
                        <span className="text-gradient">Professional 1%?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-secondary mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                        Stop guessing. Start following the data. Join InterNative today and transform your trading forever.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        <Link to="/pricing" className="w-full sm:w-auto">
                            <Button size="lg" className="px-16 py-6 text-2xl shadow-neon w-full">
                                Get Access Now
                            </Button>
                        </Link>
                        <Link to="/#performance" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="px-16 py-6 text-2xl border-white/10 hover:bg-white/5 w-full">
                                View Performance
                            </Button>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <div className="flex -space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} className="text-primary fill-current" />
                            ))}
                        </div>
                        <span className="text-sm font-black text-white/40 uppercase tracking-[0.2em]">Rated 4.9/5 by 5,000+ Active Traders</span>
                    </div>
                </div>
            </GlassCard>
        </Section>
    );
};

export default FinalCTA;
