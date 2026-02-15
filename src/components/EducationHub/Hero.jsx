import React from 'react';
import { PlayCircle, GraduationCap, CheckCircle2, Users, Calendar, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const Hero = () => {
    const stats = [
        { label: "Educational Guides", value: "50+", sub: "Beginner to Advanced" },
        { label: "Video Library", value: "100+", sub: "Hours of Content" },
        { label: "Live Webinars", value: "Monthly", sub: "with Pro Traders" },
        { label: "Free Access", value: "All Members", sub: "Get Full Library" }
    ];

    return (
        <Section className="pt-32 pb-20 relative overflow-hidden bg-[#030014]">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <GraduationCap className="w-4 h-4" />
                            Academic Grade Trading Hub
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
                            Trading Education That <GradientText>Actually Works</GradientText>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto lg:mx-0 font-medium">
                            Learn trading the right way with our comprehensive education library. From understanding what trading signals are to mastering advanced options strategies, we teach you everything you need to know—with real examples from our actual signals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <Button size="lg" className="px-8 py-6 text-lg shadow-neon group">
                                Start Learning Free
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-6 text-lg group">
                                <PlayCircle className="mr-2 w-5 h-5 text-primary" />
                                Watch Intro Video
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-2xl">
                        <GlassCard className="p-2 bg-white/[0.02] border-white/5 rounded-[2.5rem] relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative bg-[#0A051A] rounded-[2.2rem] overflow-hidden border border-white/10">
                                {/* Visualizing an educational dashboard */}
                                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">Educational Dashboard</div>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                                            <PlayCircle size={40} className="text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-2 w-24 bg-white/10 rounded-full mb-3" />
                                            <div className="h-4 w-48 bg-white/20 rounded-full mb-3" />
                                            <div className="flex gap-2">
                                                <div className="h-1.5 flex-1 bg-primary rounded-full shadow-neon" />
                                                <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="aspect-video rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <PlayCircle size={20} className="text-white/20" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                                                <GraduationCap size={20} className="text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-text-muted font-bold uppercase">Certificate</div>
                                                <div className="text-xs text-white font-black">L1: Foundation</div>
                                            </div>
                                        </div>
                                        <div className="text-success flex items-center gap-1 text-[10px] font-black uppercase tracking-widest">
                                            <CheckCircle2 size={12} />
                                            Completed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                {/* Stats Banner */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-center lg:text-left group hover:bg-white/5 transition-colors">
                            <div className="text-primary mb-2 flex justify-center lg:justify-start">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-[10px] text-text-muted font-black uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                            <div className="text-[10px] text-primary/70 font-bold italic">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Hero;
