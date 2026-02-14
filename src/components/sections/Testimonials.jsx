import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import { Card, CardContent } from '../ui/Card';
import { homepageContent } from '../../data/homepageContent';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const { testimonials } = homepageContent;

    return (
        <Section className="bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

            <div className="text-center max-w-4xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    Wall of Love
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    {testimonials.headline}
                </h2>
                <p className="text-xl text-text-secondary font-medium">{testimonials.subheadline}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.items.map((item, idx) => (
                    <GlassCard key={idx} className="p-10 flex flex-col rounded-[2.5rem]" hoverEffect>
                        <div className="flex gap-1 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="text-primary fill-current" />
                            ))}
                        </div>

                        <p className="text-white/80 text-lg mb-10 italic leading-relaxed font-medium">"{item.quote}"</p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary text-xl">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg tracking-tight">{item.name}</h4>
                                <span className="text-xs font-black text-primary uppercase tracking-widest">Verified Trader</span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="mt-20 text-center">
                <button className="text-primary font-black uppercase tracking-[0.2em] text-xs hover:text-white transition-colors">
                    {testimonials.cta}
                </button>
            </div>
        </Section>
    );
};

export default Testimonials;
