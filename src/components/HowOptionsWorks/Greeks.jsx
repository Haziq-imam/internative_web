import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';

const Greeks = () => {
    const greeks = [
        {
            name: 'Delta (Δ)',
            definition: 'Measures how much the option price changes for every $1 move in the stock.',
            example: 'Delta of 0.50 means if stock goes up $1, option goes up $0.50.',
            practical: 'Higher delta = option moves more with stock. Calls have positive delta (0 to 1), puts have negative delta (0 to -1).'
        },
        {
            name: 'Theta (Θ)',
            definition: 'Measures how much value the option loses each day due to time decay.',
            example: 'Theta of -0.05 means option loses $5/day in value ($0.05 × 100 shares).',
            practical: 'Time is your enemy when buying options. Theta accelerates as expiration approaches. This is why 0DTE options decay so fast.'
        },
        {
            name: 'Gamma (Γ)',
            definition: 'Measures how fast delta changes as the stock price moves.',
            example: 'High gamma means delta can quickly go from 0.30 to 0.70 with small stock moves.',
            practical: 'High gamma = explosive gains (or losses). Lotto options have high gamma near expiration—small moves create huge % swings.'
        },
        {
            name: 'Vega (V)',
            definition: 'Measures how much the option price changes when implied volatility (IV) changes.',
            example: 'Vega of 0.10 means if IV increases 1%, option gains $10 in value.',
            practical: 'Buy options before volatility spikes (earnings, Fed meetings). Sell after IV crush when volatility drops.'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        The <GradientText>Greeks</GradientText> Explained
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        The "Greeks" are metrics that show how options prices change. You don't need to master them as a beginner, but understanding basics helps you avoid costly mistakes.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {greeks.map((greek, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                                <h3 className="text-2xl font-black text-white mb-4">{greek.name}</h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">What It Measures:</p>
                                        <p className="text-text-secondary font-medium">{greek.definition}</p>
                                    </div>

                                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Example:</p>
                                        <p className="text-primary font-bold text-sm">{greek.example}</p>
                                    </div>

                                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Practical Use:</p>
                                        <p className="text-text-secondary font-medium text-sm">{greek.practical}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                        <h4 className="text-2xl font-black text-white mb-4">Don't Overthink It</h4>
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                            As a beginner, focus on Delta (how much option moves with stock) and Theta (time decay). Our signals include all Greeks analysis—you just need to understand the basics to make informed decisions.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Greeks;
