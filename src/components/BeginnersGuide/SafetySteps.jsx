import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { FileText, DollarSign, BookOpen, Shield, BarChart3 } from 'lucide-react';

const SafetySteps = () => {
    const steps = [
        {
            icon: FileText,
            step: '1',
            title: 'Start With Paper Trading (1-2 Months)',
            description: 'Follow signals in simulated accounts risking no real money. Most brokers (TD Ameritrade, E*TRADE, Webull) offer paper trading.',
            details: [
                'Follow signals exactly as received',
                'Track every trade in a detailed journal',
                'Execute 20-40 signals minimum before going live',
                'Test your discipline without financial consequences'
            ]
        },
        {
            icon: DollarSign,
            step: '2',
            title: 'Start With Minimum Capital ($500-$1,000)',
            description: 'Once paper trading shows consistent execution, transition to real money with minimum viable capital.',
            details: [
                'Risk only 1% maximum per trade ($5-$10 per signal)',
                'Follow only 1-2 signals simultaneously',
                'Skip signals requiring $300-$500 minimum positions',
                'Expect 3-6 months learning phase before scaling capital'
            ]
        },
        {
            icon: BookOpen,
            step: '3',
            title: 'Choose Beginner-Appropriate Services',
            description: 'Not all signal services suit beginners. Look for these characteristics:',
            details: [
                'Educational focus with explanations (not blind instructions)',
                'Conservative risk management (1-2% max per trade)',
                'Responsive customer support for beginner questions',
                'Transparent track records (55-70% win rates, not 85-95%)'
            ]
        },
        {
            icon: Shield,
            step: '4',
            title: 'Follow Risk Management Rules Religiously',
            description: 'Risk management separates profitable traders from the 70-90% who lose money.',
            details: [
                'Never risk more than 1-2% per trade',
                'Never have more than 5-10% total account risk',
                'Honor stop-losses without exception',
                'Set daily loss limits (3-5% max) and stop trading when hit'
            ]
        },
        {
            icon: BarChart3,
            step: '5',
            title: 'Track Performance Meticulously',
            description: 'Detailed tracking reveals whether signals work or if execution errors sabotage results.',
            details: [
                'Document every signal in a trading journal',
                'Calculate actual win rates monthly',
                'Review performance quarterly to identify patterns',
                'Compare your execution to provider\'s claimed performance'
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        How To Start <GradientText>Safely</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Following this structured pathway dramatically improves beginner survival rates. Skip steps at your own risk.
                    </p>

                    <div className="space-y-8">
                        {steps.map((item, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10">
                                <div className="flex items-start gap-6">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <item.icon className="text-primary" size={28} />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                            <span className="text-white font-black text-sm">{item.step}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{item.title}</h3>
                                        <p className="text-lg text-text-secondary font-medium mb-6 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {item.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span className="text-text-secondary font-medium">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
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

export default SafetySteps;
