import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import GradientText from '../ui/GradientText';

const FinalCTA = () => {
    const list = [
        "50+ educational guides (beginner to advanced)",
        "100+ hours of video content",
        "Monthly live webinars with pro traders",
        "Downloadable resources & templates",
        "Certification program available",
        "All included FREE with membership"
    ];

    return (
        <Section className="py-32 bg-[#030014] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-20" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                        Start Your Trading Education Today— <br />
                        <GradientText>100% Free With Membership</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
                        Access our complete trading curriculum, live webinars, and expert resources. Start learning the right way, while trading our signals.
                    </p>

                    <div className="flex flex-col items-center gap-12">
                        {/* 3-Step Process Visual */}
                        <div className="grid md:grid-cols-3 gap-8 w-full mb-8">
                            {[
                                { step: "", title: "Join InterNative", desc: "Start your free 7-day trial" },
                                { step: "", title: "Full Library Access", desc: "Unlock 100+ hours of content" },
                                { step: "", title: "Learn While Trading", desc: "Apply knowledge in real-time" }
                            ].map((item, i) => (
                                <div key={i} className="relative group px-4">
                                    <div className="text-8xl font-black text-white/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-primary/5 transition-colors pointer-events-none select-none">
                                        {item.step}
                                    </div>
                                    <div className="relative z-10 pt-4">
                                        <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="flex flex-col items-center gap-8">
                            <Button size="lg" className="px-16 py-8 text-xl font-black uppercase tracking-widest shadow-neon group">
                                Start Free 7-Day Trial
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 text-left">
                                {list.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                                        <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.1em]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FinalCTA;
