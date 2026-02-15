import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { Award, CheckCircle2, Shield, Star, BookOpen, Target, Search } from 'lucide-react';

const Certification = () => {
    const levels = [
        {
            title: "Level 1: Certified Signal Trader",
            subtitle: "Foundation Mastery",
            icon: Target,
            reqs: [
                "Complete beginner curriculum (30 days)",
                "Pass written exam (80% required)",
                "Execute 10 paper trades successfully"
            ],
            benefits: "Demonstrates basic execution competency",
            color: "text-blue-500"
        },
        {
            title: "Level 2: Advanced Trader Certification",
            subtitle: "Tactical Proficiency",
            icon: Search,
            reqs: [
                "Complete intermediate curriculum",
                "Pass advanced exam (85% required)",
                "3-month track record (60%+ win rate)"
            ],
            benefits: "Access to advanced-only Discord channel",
            color: "text-primary"
        },
        {
            title: "Level 3: Master Trader Certification",
            subtitle: "Strategic Excellence",
            icon: Award,
            reqs: [
                "Complete all curriculum modules",
                "Pass mastery exam (90% required)",
                "6-month verified track record (65%+ win rate)",
                "Submit trading plan for review"
            ],
            benefits: "Featured in success stories & mentorship",
            color: "text-amber-500"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        Earn Your <br />
                        <GradientText>InterNative Trading Certification</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium">
                        Validate your skills and demonstrate your commitment to professional trading standards with our tiered certification program.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {levels.map((level, i) => (
                        <GlassCard key={i} className="p-10 rounded-[3rem] border-white/5 bg-white/[0.01] flex flex-col h-full" hoverEffect>
                            <div className="flex items-center gap-6 mb-10">
                                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 ${level.color}`}>
                                    <level.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white leading-tight">{level.title}</h3>
                                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 ${level.color}`}>{level.subtitle}</p>
                                </div>
                            </div>

                            <div className="space-y-6 mb-12 flex-grow">
                                <h4 className="text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-white/5 pb-2">Requirements:</h4>
                                <ul className="space-y-4">
                                    {level.reqs.map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-sm font-semibold text-text-secondary">
                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Key Benefit:</h4>
                                <p className="text-xs font-bold text-white">{level.benefits}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Certification;
