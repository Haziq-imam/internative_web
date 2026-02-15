import React from 'react';
import { AlertTriangle, TrendingUp, ShieldAlert, CreditCard, MonitorOff } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const ScamRedFlags = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Red Flags of <GradientText>Scam Apps</GradientText></h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto font-medium">
                        The mobile app ecosystem contains numerous fraudulent services. Recognizing these warning signs prevents wasting money on illegitimate operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5" hoverEffect>
                        <TrendingUp className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Unrealistic Claims</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Guaranteed 85-95% win rates are mathematically unsustainable. Professional traders achieve 55-70% max.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5" hoverEffect>
                        <ShieldAlert className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Pressure Tactics</h3>
                        <p className="text-text-muted text-sm leading-relaxed">"Limited time" offers and manufactured scarcity (e.g., "10 spots left") target emotional decision-making.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5" hoverEffect>
                        <MonitorOff className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Poor Functionality</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Frequent crashes, bugs, or delayed notifications indicate amateur operations unable to deliver reliable service.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5" hoverEffect>
                        <CreditCard className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Billing Issues</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Unclear cancellation processes or hidden auto-renewal clauses. Refusal to process refunds during trials.</p>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default ScamRedFlags;
