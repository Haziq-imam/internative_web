import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';

const OptionsCTA = ({
    title = "READY TO START TRADING?",
    description = "Join thousands of traders using our institutional-grade signals to navigate the options market with confidence.",
    buttonText = "Get Started Now",
    buttonLink = "/pricing"
}) => {
    return (
        <Section className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-primary/10 border border-primary/20 p-12 rounded-[2.5rem] text-center">
                    <h2 className="text-3xl font-black mb-6 uppercase">{title}</h2>
                    <p className="text-text-secondary mb-10 max-w-xl mx-auto">
                        {description}
                    </p>
                    <a href={buttonLink} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform">
                        {buttonText}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default OptionsCTA;
