import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { BookOpen, Video, Mic, BarChart3, Users, ClipboardCheck } from 'lucide-react';

const LearningFormats = () => {
    const formats = [
        {
            title: "Written Guides",
            icon: BookOpen,
            description: "Comprehensive articles (1,500-3,000 words) with step-by-step instructions and screenshots.",
            features: ["Downloadable PDFs", "Reference Checklists", "Real Trade Charts"]
        },
        {
            title: "Video Courses",
            icon: Video,
            description: "HD video lessons (10-45 mins) featuring screen recordings of actual trades and analyst commentary.",
            features: ["Chart Analysis Breakdowns", "Closed Captions", "Lifetime Access"]
        },
        {
            title: "Podcast Episodes",
            icon: Mic,
            description: "Audio lessons for on-the-go learning, including interviews with pro traders and market analysis.",
            features: ["Spotify & Apple Podcasts", "Strategy Deep-dives", "Expert Interviews"]
        },
        {
            title: "Interactive Examples",
            icon: BarChart3,
            description: "Live chart annotations and click-through trade examples with before/after comparisons.",
            features: ["Knowledge Quizzes", "Practice Scenarios", "Real-time Annotations"]
        },
        {
            title: "Live Webinars",
            icon: Users,
            description: "Monthly live sessions with analysts for Q&A and real-time market structure discussion.",
            features: ["24/7 Replays", "Direct Analyst Interaction", "Market Strategy Updates"]
        },
        {
            title: "Worksheets & Tools",
            icon: ClipboardCheck,
            description: "Practical templates, position sizing calculators, and risk assessment worksheets.",
            features: ["Trade Journal Templates", "Pre-trade Checklists", "Excel Sizing Tools"]
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        Learn Your Way— <br />
                        <GradientText>Multiple Formats for Every Style</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium">
                        Whether you prefer deep-dive reading, visual learning, or interactive practice, we provide the tools to match your learning preference.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {formats.map((format, i) => (
                        <GlassCard key={i} className="p-10 rounded-[2.5rem] border-white/5 bg-white/[0.01]" hoverEffect>
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                                <format.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{format.title}</h3>
                            <p className="text-sm font-medium text-text-secondary mb-8 leading-relaxed">
                                {format.description}
                            </p>
                            <div className="space-y-3">
                                {format.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default LearningFormats;
