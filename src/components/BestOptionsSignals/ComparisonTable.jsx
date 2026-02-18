import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { CheckCircle2, XCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonTable = () => {
    const providers = [
        {
            name: 'InterNative Traders',
            rank: 1,
            winRate: '78%',
            avgReturn: '+156%',
            speed: '< 30 sec',
            price: '$97/mo',
            signals: '15-25/week',
            support: '24/7 Discord',
            features: ['0DTE', 'Lotto', 'Swing', 'Real-time alerts', 'Mobile app'],
            isRecommended: true
        },
        {
            name: 'OptionsPlay',
            rank: 2,
            winRate: '72%',
            avgReturn: '+124%',
            speed: '1-2 min',
            price: '$149/mo',
            signals: '10-15/week',
            support: 'Email only',
            features: ['Swing only', 'Web dashboard', 'Limited support']
        },
        {
            name: 'Benzinga Pro',
            rank: 3,
            winRate: '68%',
            avgReturn: '+98%',
            speed: '2-5 min',
            price: '$299/mo',
            signals: '20-30/week',
            support: 'Business hours',
            features: ['News-driven', 'Expensive', 'Delayed alerts']
        },
        {
            name: 'Trade Ideas',
            rank: 4,
            winRate: '65%',
            avgReturn: '+87%',
            speed: '3-10 min',
            price: '$228/mo',
            signals: '50+/week',
            support: 'Email',
            features: ['Too many signals', 'Overwhelming', 'Stocks focus']
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">
                        Top 4 <GradientText>Options Signal Providers</GradientText>
                    </h2>

                    <div className="space-y-6">
                        {providers.map((provider, index) => (
                            <div
                                key={index}
                                className={`bg-white/[0.02] border rounded-3xl p-8 ${provider.isRecommended ? 'border-primary/50 bg-primary/5' : 'border-white/10'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-4xl font-black text-primary">#{provider.rank}</span>
                                            <h3 className="text-2xl font-black text-white">{provider.name}</h3>
                                            {provider.isRecommended && (
                                                <span className="bg-primary/20 border border-primary/30 text-primary px-4 py-1 rounded-full text-sm font-black">
                                                    RECOMMENDED
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={i < provider.rank ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}
                                                    size={16}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-black text-white mb-1">{provider.price}</p>
                                        <p className="text-sm text-text-secondary font-medium">per month</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-4 gap-6 mb-6">
                                    <div>
                                        <p className="text-sm text-text-muted font-black uppercase mb-2">Win Rate</p>
                                        <p className="text-2xl font-black text-emerald-500">{provider.winRate}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted font-black uppercase mb-2">Avg Return</p>
                                        <p className="text-2xl font-black text-primary">{provider.avgReturn}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted font-black uppercase mb-2">Alert Speed</p>
                                        <p className="text-2xl font-black text-white">{provider.speed}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted font-black uppercase mb-2">Signals/Week</p>
                                        <p className="text-2xl font-black text-white">{provider.signals}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm text-text-muted font-black uppercase mb-3">Features</p>
                                    <div className="flex flex-wrap gap-2">
                                        {provider.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full text-sm text-text-secondary font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {provider.isRecommended && (
                                    <Link
                                        to="/pricing"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-black px-8 py-4 rounded-2xl transition-all"
                                    >
                                        Start Free Trial
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8 text-center">
                        <h4 className="text-2xl font-black text-white mb-4">Why InterNative Traders Wins</h4>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div>
                                <CheckCircle2 className="text-emerald-500 mx-auto mb-3" size={28} />
                                <p className="text-text-secondary font-medium">Fastest alerts (under 30 seconds)</p>
                            </div>
                            <div>
                                <CheckCircle2 className="text-emerald-500 mx-auto mb-3" size={28} />
                                <p className="text-text-secondary font-medium">Best win rate (78% vs 65-72%)</p>
                            </div>
                            <div>
                                <CheckCircle2 className="text-emerald-500 mx-auto mb-3" size={28} />
                                <p className="text-text-secondary font-medium">Most affordable ($97 vs $149-$299)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ComparisonTable;
