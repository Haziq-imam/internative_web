import React from 'react';
import { BarChart2, TrendingUp, Target, ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const Benefits = () => {
    const benefits = [
        {
            title: "Learn FROM Real Signals",
            icon: BarChart2,
            items: [
                "Every lesson uses ACTUAL signals we've sent",
                "See real entry/exit examples with results",
                "Understand WHY trades worked or failed",
                "Case studies from our track record",
                "Not theoretical—100% practical"
            ],
            color: "text-blue-500"
        },
        {
            title: "Progress While Trading",
            icon: TrendingUp,
            items: [
                "Learn concepts, then apply immediately",
                "Take our signals while building your skills",
                "Each trade becomes a learning opportunity",
                "Education explains what you're executing",
                "Faster mastery through doing"
            ],
            color: "text-emerald-500"
        },
        {
            title: "No Useless Theory",
            icon: Target,
            items: [
                "Skip the academic textbook nonsense",
                "Focus only on what makes money",
                "Taught by traders with 10-18 years experience",
                "Real-world strategies, not classroom theory",
                "Actionable from day one"
            ],
            color: "text-amber-500"
        }
    ];

    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        Education Built By Traders, <br />
                        <GradientText>For Traders—Not Academics</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium">
                        Forget everything you thought you knew about trading courses. We've stripped away the fluff to give you the exact tactical blueprint you need to succeed in today's markets.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <GlassCard key={i} className="p-10 rounded-[2.5rem] border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 group" hoverEffect>
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/30 transition-colors`}>
                                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{benefit.title}</h3>
                            <ul className="space-y-4">
                                {benefit.items.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-text-secondary font-semibold text-sm leading-snug items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
