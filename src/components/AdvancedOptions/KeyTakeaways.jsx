import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const KeyTakeaways = () => {
    const takeaways = [
        "80-95% of traders attempting advanced strategies lose money—even higher than basic trading failure rates.",
        "Advanced strategies require broker Level 3+ approval and $25,000-$100,000+ capital adequacy.",
        "Vertical spreads (credit versions) achieve 60-75% win rates and are foundational building blocks.",
        "Iron condors profit from range-bound markets but require disciplined loss-cutting at 2-2.5x credit.",
        "Calendars and diagonals introduce complex volatility sensitivity and difficult adjustment requirements.",
        "Ratio spreads create asymmetric payoffs but carry unlimited risk components that are extremely dangerous.",
        "Understanding Greeks (Delta, Gamma, Theta, Vega) is mandatory for advanced trading success.",
        "Realistic professional expectations: 25-50% annual returns with periodic 20-35% drawdowns.",
        "Inappropriate for traders with under 12 months experience or under $25,000 capital."
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <GlassCard className="p-12 border-primary/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <ShieldCheck className="w-64 h-64 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-12 text-white">Key <GradientText>Takeaways</GradientText></h2>
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
