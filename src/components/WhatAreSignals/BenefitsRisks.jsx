import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const BenefitsRisks = () => {
    const benefits = [
        'Save time—no need to scan charts for hours daily',
        'Learn from professionals while you trade',
        'Clear entry/exit plans remove guesswork',
        'Risk management built into every signal',
        'Access to setups you might never find yourself',
        'Consistent strategy rather than emotional decisions'
    ];

    const risks = [
        'No signal service guarantees profits—losses are part of trading',
        'You must execute quickly (especially for day trades)',
        'Following blindly without understanding = dangerous',
        'Requires discipline to follow stop-losses',
        'Not all signals will be winners (expect 50-80% win rates)',
        'You still need proper risk management and position sizing'
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white">
                        Benefits <GradientText>&</GradientText> Risks
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Benefits */}
                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <CheckCircle2 className="text-emerald-500" size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-white">Benefits</h3>
                            </div>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-text-secondary font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Risks */}
                        <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                    <AlertTriangle className="text-orange-500" size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-white">Risks & Realities</h3>
                            </div>
                            <ul className="space-y-4">
                                {risks.map((risk, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <AlertTriangle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-text-secondary font-medium">{risk}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                            <span className="text-white font-black">The truth:</span> Trading signals are powerful tools, but they're not magic. They work best when combined with proper risk management, discipline, and a willingness to learn. Treat them as education + execution, not a get-rich-quick scheme.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default BenefitsRisks;
