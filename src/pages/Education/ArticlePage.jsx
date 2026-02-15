import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, BookOpen, AlertCircle } from 'lucide-react';
import { educationContent } from '../../data/educationContent';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import FinalCTA from '../../components/sections/FinalCTA';

import { Helmet } from 'react-helmet-async';

const ArticlePage = () => {
    const { slug } = useParams();

    // Find course by slug
    const course = educationContent.hub.library.courses.find(c => c.slug === slug) ||
        educationContent.hub.comparisons?.find(c => c.slug === slug) ||
        educationContent.hub.tools?.find(c => c.slug === slug);

    const title = course ? course.title : (slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Article');
    const description = course ? course.description : "Institutional-grade strategies for professional traders.";

    return (
        <>
            <Helmet>
                <title>{`${title} | InterNative Traders`}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Section className="bg-background relative pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            {course?.level || "Education Module"}
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.05] font-display">
                            {title}
                        </h1>
                        <p className="text-xl md:text-3xl text-text-secondary font-medium leading-relaxed mb-12 max-w-4xl">
                            {description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2 space-y-12">
                            <GlassCard className="p-10 md:p-16 rounded-[3rem] border-white/5 bg-background-secondary/20 relative">
                                <div className="prose prose-invert max-w-none">
                                    <div className="flex items-center gap-4 mb-10 text-primary">
                                        <BookOpen size={32} />
                                        <h2 className="text-3xl font-black text-white m-0 tracking-tight">Executive Summary</h2>
                                    </div>
                                    <p className="text-xl text-text-secondary leading-loose mb-8">
                                        This module explores the advanced mechanics of {title.toLowerCase()}, providing a deep dive into institutional workflows and risk mitigation protocols used by top-tier traders.
                                    </p>
                                    <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-4 mb-10">
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Core Learning Objectives</h4>
                                        <ul className="grid md:grid-cols-2 gap-4 text-sm font-bold text-text-secondary list-none p-0">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Market Structure Mastery</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Risk-Neutral Execution</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Multi-Timeframe Analysis</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Real-time Alert Utilization</li>
                                        </ul>
                                    </div>
                                    <p className="text-lg text-text-muted leading-relaxed">
                                        Our analysis indicates that traders who master these specific protocols achieve significantly higher Sharpe ratios and lower drawdown profiles over multi-quarter periods. This curriculum is designed to bridge the gap between retail theory and professional execution.
                                    </p>
                                </div>
                            </GlassCard>

                            <GlassCard className="p-10 bg-primary/5 border-primary/20 rounded-[2.5rem] flex items-center gap-8">
                                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 flex-shrink-0">
                                    <AlertCircle size={32} strokeWidth={2.5} className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-white mb-2">Restricted Module</h4>
                                    <p className="text-text-secondary font-medium">Detailed tactical blueprints are reserved for active terminal subscribers. Upgrade to access full dataset.</p>
                                </div>
                            </GlassCard>
                        </div>

                        <div className="space-y-8">
                            <GlassCard className="p-8 rounded-[2rem] border-white/5">
                                <h4 className="text-xl font-black text-white mb-6 tracking-tight">Institutional Access</h4>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                        <span className="text-xs font-bold text-text-secondary uppercase">Level</span>
                                        <span className="text-xs font-black text-primary uppercase">{course?.level || "PRO"}</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                        <span className="text-xs font-bold text-text-secondary uppercase">Duration</span>
                                        <span className="text-xs font-black text-white uppercase">45 Mins</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                        <span className="text-xs font-bold text-text-secondary uppercase">Credits</span>
                                        <span className="text-xs font-black text-white uppercase">5.0</span>
                                    </div>
                                </div>
                                <Button className="w-full py-4 shadow-neon">Initialize Lesson</Button>
                            </GlassCard>

                            <div className="p-8 rounded-[2rem] bg-background-secondary/40 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
                                <h4 className="text-lg font-black text-white mb-2 relative z-10">Need Live Data?</h4>
                                <p className="text-sm text-text-secondary mb-6 relative z-10">Connect your terminal to our live signal feed for real-time application of these concepts.</p>
                                <Button variant="outline" size="sm" className="w-full relative z-10">Connect Terminal</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <FinalCTA />
        </>
    );
};

export default ArticlePage;
