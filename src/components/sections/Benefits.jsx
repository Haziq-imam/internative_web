import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import { homepageContent } from '../../data/homepageContent';
import { ShieldCheck, TrendingUp, BookOpen, Users } from 'lucide-react';

const Benefits = () => {
    const { benefits } = homepageContent;
    const icons = [ShieldCheck, TrendingUp, BookOpen, Users];

    return (
        <Section className="bg-background relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                    {benefits.headline}
                </h2>
                <p className="text-lg text-text-secondary font-medium">
                    The tools and support you need to trade with confidence.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.cards.map((card, idx) => {
                    const Icon = icons[idx] || ShieldCheck;
                    return (
                        <GlassCard key={idx} className="p-8 group rounded-3xl" hoverEffect>
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-primary shadow-neon border border-white/5 group-hover:scale-110 transition-transform duration-500">
                                <Icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed font-medium">
                                {card.description}
                            </p>
                        </GlassCard>
                    );
                })}
            </div>
        </Section>
    );
};

export default Benefits;
