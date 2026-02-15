import React from 'react';
import { Star, Quote } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const SocialProof = () => {
    const testimonials = [
        {
            user: "Jason T.",
            role: "Full-Time Trader",
            text: "The consistency of the index signals is mind-blowing. I've been with 4 other services, but nothing matches the transparency and win rate here.",
            profit: "+$12,400 Last Month"
        },
        {
            user: "Elena R.",
            role: "Part-Time Swing Trader",
            text: "As a busy professional, the swing signals are a lifesaver. I spend 10 mins a day executing and the results have been incredible.",
            profit: "86% Win Rate"
        },
        {
            user: "Marcus D.",
            role: "Lotto Specialist",
            text: "If you want to catch those 300%+ moves on NVDA and TSLA, this is the place. The flow analysis is top-tier institutional level.",
            profit: "Best Trade: +412%"
        }
    ];

    return (
        <Section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Trusted by Thousands of <br /><span className="text-gradient">Options Traders</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((test, i) => (
                        <GlassCard key={i} className={`p-8 rounded-[2.5rem] flex flex-col ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:w-3/4 md:mx-auto lg:w-full' : ''}`} hoverEffect>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary" fill="currentColor" />)}
                            </div>
                            <Quote className="text-primary/20 mb-4" size={40} />
                            <p className="text-text-secondary italic mb-6 leading-relaxed">"{test.text}"</p>
                            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-end">
                                <div>
                                    <div className="font-bold text-white">{test.user}</div>
                                    <div className="text-xs text-text-muted">{test.role}</div>
                                </div>
                                <div className="text-primary font-black text-xs uppercase tracking-widest">{test.profit}</div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SocialProof;
