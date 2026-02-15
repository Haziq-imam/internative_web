import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const KeyTakeaways = () => {
    const takeaways = [
        "Even 65-70% win rate signals experience 8-12 consecutive losses periodically.",
        "Risk maximum 1-2% per trade regardless of signal confidence.",
        "Maximum drawdown below 15-25% represents sustainable signal following.",
        "Reduce position sizes 30-50% during significant drawdowns (15%+ from peaks).",
        "Implement daily loss limits (3-5%) and weekly limits (7-10%).",
        "Portfolio heat maximum 10-15% across all positions.",
        "Drawdowns typically last 4-16 weeks—plan capital for 2-4 month periods.",
        "70-90% of signal followers lose money through risk violations, not signal quality.",
        "Stop-losses and loss limits are mandatory—remove discretion during emotional extremes.",
        "Smaller accounts (<$10,000) require stricter 1% sizing and 8-10% heat limits."
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <GlassCard className="p-12 border-primary/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <ShieldCheck className="w-64 h-64 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-12">Key <GradientText>Takeaways</GradientText></h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {takeaways.map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-1" />
                                <p className="text-text-secondary font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default KeyTakeaways;
