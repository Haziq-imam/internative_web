import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison = () => {
    const features = [
        { feature: 'Real-time alerts', free: false, paid: true },
        { feature: 'Professional analysis', free: false, paid: true },
        { feature: 'Entry/exit/stop-loss', free: false, paid: true },
        { feature: 'Mobile app', free: false, paid: true },
        { feature: 'Customer support', free: false, paid: true },
        { feature: 'Performance tracking', free: false, paid: true },
        { feature: 'Win rate above 70%', free: false, paid: true },
        { feature: 'Delayed signals (hours)', free: true, paid: false },
        { feature: 'Generic advice', free: true, paid: false },
        { feature: 'No accountability', free: true, paid: false }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">
                        What You Actually <GradientText>Get</GradientText>
                    </h2>

                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden mb-12">
                        <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 bg-white/[0.02]">
                            <div className="text-white font-black">Feature</div>
                            <div className="text-center text-emerald-500 font-black">Free Signals</div>
                            <div className="text-center text-primary font-black">Paid Signals</div>
                        </div>
                        {features.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 last:border-0">
                                <div className="text-text-secondary font-medium">{item.feature}</div>
                                <div className="flex justify-center">
                                    {item.free ? (
                                        <CheckCircle2 className="text-emerald-500" size={24} />
                                    ) : (
                                        <XCircle className="text-gray-600" size={24} />
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    {item.paid ? (
                                        <CheckCircle2 className="text-emerald-500" size={24} />
                                    ) : (
                                        <XCircle className="text-gray-600" size={24} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
                        <h3 className="text-2xl font-black text-white mb-4 text-center">The Truth About Free Signals</h3>
                        <p className="text-lg text-text-secondary font-medium text-center max-w-3xl mx-auto mb-6">
                            Free signals are marketing tools. Providers send delayed, low-quality signals to attract users to their paid tiers. By the time you receive a free signal, the opportunity is gone. One winning paid signal can pay for a month's subscription.
                        </p>
                        <div className="text-center">
                            <p className="text-white font-black text-xl">
                                $97/month ÷ 4 weeks = $24/week
                            </p>
                            <p className="text-text-secondary font-medium mt-2">
                                One 100% winner covers 4 weeks of subscription
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Comparison;
