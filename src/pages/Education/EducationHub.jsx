import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, TrendingUp, Shield, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';

const LevelCard = ({ level, title, desc, icon: Icon, link, color }) => (
    <GlassCard className="p-8 h-full flex flex-col" hoverEffect>
        <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${color}`}>
            <Icon size={24} />
        </div>
        <div className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">{level}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-text-secondary mb-8 flex-grow">{desc}</p>
        <Link to={link}>
            <Button variant="outline" className="w-full group">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
        </Link>
    </GlassCard>
);

const EducationHub = () => {
    return (
        <>
            <Helmet>
                <title>Trading Education Hub | InterNative</title>
                <meta name="description" content="Master the markets with our comprehensive trading curriculum. From beginner basics to advanced options strategies." />
            </Helmet>

            {/* Hero */}
            <div className="relative pt-48 pb-32 overflow-hidden bg-background">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl opacity-50" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        InterNative Academy
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                        Trading Education <br />
                        <span className="text-gradient">That Works.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                        Stop gambling. Start trading. Our structured curriculum takes you from novice to institutional-grade trader with proprietary systems.
                    </p>
                </div>
            </div>

            {/* Levels Grid */}
            <Section className="bg-background-secondary/30 relative z-20 -mt-24 pt-0">
                <div className="grid md:grid-cols-3 gap-10">
                    <LevelCard
                        level="Level 1"
                        title="The Foundation"
                        desc="Understanding market structure, candlesticks, and risk management. Essential for every trader."
                        icon={BookOpen}
                        link="/beginners"
                        color="text-primary"
                    />
                    <LevelCard
                        level="Level 2"
                        title="Technical Analysis"
                        desc="Mastering chart patterns, indicators, and price action to identify high-probability setups."
                        icon={TrendingUp}
                        link="/education/technical-analysis"
                        color="text-primary"
                    />
                    <LevelCard
                        level="Level 3"
                        title="Advanced Options"
                        desc="Complex strategies including spreads, iron condors, and Greeks management for consistent income."
                        icon={Shield}
                        link="/advanced-options"
                        color="text-primary"
                    />
                </div>
            </Section>

            {/* Featured Resources */}
            <Section className="py-32 lg:py-48 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            Premium Content
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                            Featured <br />
                            <span className="text-gradient">Masterclasses.</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="px-10 py-4 text-lg">View Library</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <GlassCard className="group cursor-pointer overflow-hidden p-0 rounded-[3rem]" hoverEffect>
                        <div className="h-64 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors relative">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform relative z-10" />
                        </div>
                        <div className="p-10">
                            <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                                <span>Core</span>
                                <span className="w-1 h-1 bg-primary/40 rounded-full" />
                                <span>45 Min</span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">Risk Management 101</h3>
                            <p className="text-text-secondary text-lg leading-relaxed font-medium">How to calculate position size and never blow up your account.</p>
                        </div>
                    </GlassCard>

                    <GlassCard className="group cursor-pointer overflow-hidden p-0 rounded-[3rem]" hoverEffect>
                        <div className="h-64 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors relative">
                            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform relative z-10" />
                        </div>
                        <div className="p-10">
                            <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                                <span>Advanced</span>
                                <span className="w-1 h-1 bg-primary/40 rounded-full" />
                                <span>60 Min</span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">Mastering 0DTE Options</h3>
                            <p className="text-text-secondary text-lg leading-relaxed font-medium">The specific rules we use to trade same-day expiration contracts.</p>
                        </div>
                    </GlassCard>
                </div>
            </Section>
        </>
    );
};

export default EducationHub;
