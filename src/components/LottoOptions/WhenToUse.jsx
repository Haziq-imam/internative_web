import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { CheckCircle2, XCircle } from 'lucide-react';

const WhenToUse = () => {
    const idealConditions = [
        'Major catalyst expected (earnings, Fed decision, economic data)',
        'Stock showing extreme technical setup (breakout, breakdown)',
        'High implied volatility (IV rank above 50%)',
        'You have 5-10% of portfolio allocated to high-risk plays',
        'You can monitor position actively during market hours',
        'You\'re emotionally prepared to lose 100% of premium'
    ];

    const avoidConditions = [
        'No clear catalyst or reason for big move',
        'Low volatility, sideways-trading stocks',
        'You need this money or can\'t afford to lose it',
        'You\'re a beginner with <6 months options experience',
        'You can\'t monitor the position (at work, busy)',
        'You\'re on a losing streak or emotionally compromised'
    ];

    const examples = [
        {
            title: 'NVDA Earnings Play',
            setup: 'NVDA trading at $495 day before earnings. Buy $510 calls (0DTE) for $1.50.',
            outcome: 'NVDA beats earnings, opens at $520. Calls worth $10.00 at open (567% gain).',
            lesson: 'Catalyst-driven lotto with clear binary event. High risk but defined opportunity.'
        },
        {
            title: 'SPY Fed Decision',
            setup: 'SPY at $468 before 2PM Fed announcement. Buy $470 calls (0DTE) for $0.80.',
            outcome: 'Fed signals rate cuts. SPY spikes to $475. Calls worth $5.00 (525% gain).',
            lesson: 'Macro event creating volatility spike. Perfect lotto setup with immediate resolution.'
        },
        {
            title: 'TSLA Momentum Breakout',
            setup: 'TSLA breaking $420 resistance with volume. Buy $430 calls (1DTE) for $2.00.',
            outcome: 'TSLA continues to $438. Calls worth $8.00 (300% gain).',
            lesson: 'Technical setup with momentum. Not event-driven but clear directional bias.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white">
                        When To Use <GradientText>Lotto Options</GradientText>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Ideal Conditions */}
                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8">
                            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                <CheckCircle2 className="text-emerald-500" size={28} />
                                Ideal Conditions
                            </h3>
                            <ul className="space-y-4">
                                {idealConditions.map((condition, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-text-secondary font-medium">{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Avoid When */}
                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
                            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                <XCircle className="text-red-500" size={28} />
                                Avoid When
                            </h3>
                            <ul className="space-y-4">
                                {avoidConditions.map((condition, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-text-secondary font-medium">{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
                        Real Lotto Examples
                    </h3>

                    <div className="space-y-6">
                        {examples.map((example, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                                <h4 className="text-xl font-black text-white mb-4">{example.title}</h4>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Setup:</p>
                                        <p className="text-text-secondary font-medium text-sm">{example.setup}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Outcome:</p>
                                        <p className="text-emerald-500 font-bold text-sm">{example.outcome}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Lesson:</p>
                                        <p className="text-text-secondary font-medium text-sm">{example.lesson}</p>
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

export default WhenToUse;
