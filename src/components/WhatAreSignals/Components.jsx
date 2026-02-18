import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ArrowDownCircle, Target, Shield } from 'lucide-react';

const Components = () => {
    const components = [
        {
            icon: ArrowDownCircle,
            title: 'Entry Point',
            description: 'The price or price range where you should buy (for long positions) or sell (for short positions).',
            example: '"Buy TSLA between $245-$248"',
            why: 'Ensures you enter at favorable prices, not chasing after the move has already happened.'
        },
        {
            icon: Target,
            title: 'Profit Targets',
            description: 'Specific price levels where you should take profits. Usually multiple targets to scale out gradually.',
            example: '"TP1: $265 (sell 50%), TP2: $280 (sell 30%), TP3: $295 (sell remaining 20%)"',
            why: 'Locks in gains systematically rather than hoping for unlimited upside and watching profits evaporate.'
        },
        {
            icon: Shield,
            title: 'Stop-Loss',
            description: 'The price where you exit the trade to prevent further losses if the trade goes against you.',
            example: '"Stop-loss: $238 (exit if price drops below this level)"',
            why: 'Protects your capital. The difference between profitable traders and blown-up accounts is disciplined stop-losses.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        The Three <GradientText>Essential Components</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Every quality trading signal includes these three critical pieces of information. Without all three, it's not a complete signal—it's just a stock tip.
                    </p>

                    <div className="space-y-8">
                        {components.map((component, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <component.icon className="text-primary" size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{component.title}</h3>
                                        <p className="text-lg text-text-secondary font-medium mb-4 leading-relaxed">
                                            {component.description}
                                        </p>
                                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 mb-4">
                                            <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Example:</p>
                                            <p className="text-primary font-bold text-lg">{component.example}</p>
                                        </div>
                                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
                                            <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Why It Matters:</p>
                                            <p className="text-text-secondary font-medium">{component.why}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Components;
