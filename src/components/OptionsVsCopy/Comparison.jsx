import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison = () => {
    const features = [
        {
            feature: 'Control over execution',
            signals: true,
            copyTrading: false
        },
        {
            feature: 'Learn trading skills',
            signals: true,
            copyTrading: false
        },
        {
            feature: 'Customize position size',
            signals: true,
            copyTrading: false
        },
        {
            feature: 'Works with any broker',
            signals: true,
            copyTrading: false
        },
        {
            feature: 'Fully automated',
            signals: false,
            copyTrading: true
        },
        {
            feature: 'No manual execution',
            signals: false,
            copyTrading: true
        },
        {
            feature: 'Requires broker integration',
            signals: false,
            copyTrading: true
        },
        {
            feature: 'Higher fees (20-30%)',
            signals: false,
            copyTrading: true
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">
                        Side-by-Side <GradientText>Comparison</GradientText>
                    </h2>

                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 bg-white/[0.02]">
                            <div className="text-white font-black">Feature</div>
                            <div className="text-center text-primary font-black">Trading Signals</div>
                            <div className="text-center text-purple-500 font-black">Copy Trading</div>
                        </div>
                        {features.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 last:border-0">
                                <div className="text-text-secondary font-medium">{item.feature}</div>
                                <div className="flex justify-center">
                                    {item.signals ? (
                                        <CheckCircle2 className="text-emerald-500" size={24} />
                                    ) : (
                                        <XCircle className="text-gray-600" size={24} />
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    {item.copyTrading ? (
                                        <CheckCircle2 className="text-emerald-500" size={24} />
                                    ) : (
                                        <XCircle className="text-gray-600" size={24} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                            <h3 className="text-2xl font-black text-white mb-4">Choose Signals If:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You want to learn trading</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You prefer control over trades</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You can monitor alerts during market hours</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You want lower fees</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-purple-500/5 border border-purple-500/20 rounded-3xl p-8">
                            <h3 className="text-2xl font-black text-white mb-4">Choose Copy Trading If:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You want 100% automation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You can't monitor markets</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You don't want to learn trading</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">You're okay with higher fees</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Comparison;
