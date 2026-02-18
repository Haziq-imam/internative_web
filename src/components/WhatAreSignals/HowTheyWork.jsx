import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Search, Bell, Play, TrendingUp } from 'lucide-react';

const HowTheyWork = () => {
    const steps = [
        {
            icon: Search,
            number: '1',
            title: 'Professional Analysis',
            description: 'Our team of experienced traders analyzes thousands of stocks, options, and crypto assets daily using technical analysis, fundamental catalysts, and market trends. They identify high-probability setups with favorable risk-reward ratios.'
        },
        {
            icon: Bell,
            number: '2',
            title: 'You Receive Alert',
            description: 'When a quality setup is identified, you receive an instant push notification to your phone, desktop, or email with complete trade details: what to buy, entry price, targets, and stop-loss. Alerts arrive in real-time—typically within 1-2 seconds of signal generation.'
        },
        {
            icon: Play,
            number: '3',
            title: 'You Execute',
            description: 'Open your broker app (Robinhood, TD Ameritrade, E*TRADE, etc.) and place the trade using the exact specifications from the alert. Set your stop-loss immediately to protect capital. No guesswork—just follow the plan provided.'
        },
        {
            icon: TrendingUp,
            number: '4',
            title: 'Manage & Exit',
            description: 'As the trade progresses, you\'ll receive updates when profit targets are hit ("TP1 reached—take 50% profit") or if the setup invalidates ("Exit signal—stop-loss triggered"). Follow the exit plan to lock in gains or cut losses quickly.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        How Trading Signals <GradientText>Actually Work</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        From professional analysis to your executed trade—here's the complete process in 4 simple steps.
                    </p>

                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.04] transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <step.icon className="text-primary" size={28} />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                                <span className="text-white font-black text-sm">{step.number}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{step.title}</h3>
                                            <p className="text-lg text-text-secondary font-medium leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center py-4">
                                        <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                        <h3 className="text-2xl font-black text-white mb-4">The Bottom Line</h3>
                        <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto">
                            Trading signals remove the hardest parts of trading (finding setups, timing entries, knowing when to exit) and give you a proven plan to execute. You don't need to be an expert—you just need to follow the instructions.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HowTheyWork;
