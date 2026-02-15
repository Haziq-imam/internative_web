import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const KeyTakeaways = () => {
    const takeaways = [
        "60-80% of trading signal apps deliver poor results through unverified performance or fraud.",
        "Quality apps require verified third-party tracking (Myfxbook) showing complete histories.",
        "Realistic win rates: 55-70% maximum for legitimate providers; 90% claims are scams.",
        "Essential features: real-time push, tracking, position management, education, support.",
        "Red flags: unrealistic claims, pressure tactics, poor functionality, billing issues.",
        "Subscribe to ONE app initially, mastering execution before adding services.",
        "Minimum capital: $2,000-$5,000 for safe position sizing on most apps.",
        "Apps suit part-time traders, beginners seeking structure, and idea generation.",
        "Success requires disciplined risk management (1-2% per trade) regardless of signal quality."
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
