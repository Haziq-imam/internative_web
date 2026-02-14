import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, DollarSign, Clock } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const ProblemSection = () => {
    const problems = [
        {
            icon: Clock,
            title: "Tired of Missing Opportunities?",
            text: "Markets move fast. By the time you analyze charts, research fundamentals, and calculate entry points, the opportunity is gone.",
            color: "text-warning"
        },
        {
            icon: DollarSign,
            title: "Paying $200-$400/Month?",
            text: "Premium signal services charge professional prices but deliver the same updates you could get for free on Twitter.",
            color: "text-danger"
        },
        {
            icon: AlertCircle,
            title: "No Risk Management?",
            text: "Most signal providers just give you a ticker. They don't tell you where to set your stop-loss or when to take profits.",
            color: "text-primary-glow"
        }
    ];

    return (
        <Section className="bg-background relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
                    Trading <span className="text-gradient">Doesn't Have to Be</span><br />
                    Complicated.
                </h2>
                <p className="text-lg text-text-secondary font-medium">
                    We solved the three biggest hurdles every retail trader faces.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                {problems.map((item, idx) => (
                    <GlassCard
                        key={idx}
                        className="p-10 group"
                        hoverEffect
                    >
                        <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                            <item.icon size={32} className="text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 font-display tracking-tight">{item.title}</h3>
                        <p className="text-text-secondary leading-relaxed text-lg">
                            {item.text}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};

export default ProblemSection;
