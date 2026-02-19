import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const OptionsHero = ({
    badge,
    badgeIcon: BadgeIcon,
    title,
    gradientTitle,
    description,
    stats,
    ctaText,
    ctaLink = "/pricing",
    visual: Visual
}) => {
    return (
        <Section className="relative pt-48 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-purple-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {badge && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-neon mb-6">
                                {BadgeIcon && <BadgeIcon className="w-4 h-4 text-primary" />}
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{badge}</span>
                            </div>
                        )}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tighter uppercase">
                            {title} {gradientTitle && <GradientText>{gradientTitle}</GradientText>}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl font-medium">
                            {description}
                        </p>

                        {/* Key Stats */}
                        {stats && stats.length > 0 && (
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`text-2xl md:text-4xl font-black mb-1 ${index === 0 ? 'text-primary' : index === 1 ? 'text-purple-400' : 'text-blue-400'
                                            }`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-text-muted font-bold uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to={ctaLink}>
                                <Button size="lg" className="shadow-neon px-8">
                                    {ctaText}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Visual */}
                    {Visual && (
                        <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                            <Visual />
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default OptionsHero;
