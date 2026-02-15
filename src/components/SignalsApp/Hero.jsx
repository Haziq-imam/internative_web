import React from 'react';
import { Smartphone } from 'lucide-react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';

const Hero = () => {
    return (
        <Section className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 animate-fade-in">
                        <Smartphone className="w-4 h-4" /> Professional Mobile Trading Guide
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
                        Complete Guide to Mobile <br />
                        <GradientText>Signal Platforms</GradientText>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed font-medium mb-12">
                        Trading signals apps deliver real-time trade recommendations directly to mobile devices, enabling traders to receive, review, and execute signals anywhere. Learn how to identify quality platforms and avoid the scams.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
