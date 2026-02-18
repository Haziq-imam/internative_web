import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Shield, TrendingUp, Zap } from 'lucide-react';

const Strategies = () => {
    const strategies = [
        {
            icon: TrendingUp,
            title: 'Buying Calls (Bullish)',
            when: 'You believe stock will go UP significantly',
            howItWorks: 'Buy call options at strike price below expected target. Profit when stock rises above strike + premium paid.',
            risk: 'Max loss = premium paid. Can lose 100% if stock doesn\'t move enough.',
            reward: 'Unlimited upside. 100-500%+ gains possible with big moves.',
            example: 'Buy AAPL $180 call for $5. If AAPL hits $200, call worth ~$20 (300% gain).'
        },
        {
            icon: TrendingUp,
            title: 'Buying Puts (Bearish)',
            when: 'You believe stock will go DOWN significantly',
            howItWorks: 'Buy put options at strike price above current price. Profit when stock falls below strike - premium paid.',
            risk: 'Max loss = premium paid. Can lose 100% if stock doesn\'t drop enough.',
            reward: 'Large gains possible. 100-400%+ returns on significant drops.',
            example: 'Buy TSLA $250 put for $6. If TSLA drops to $220, put worth ~$30 (400% gain).'
        },
        {
            icon: Shield,
            title: 'Protective Puts (Insurance)',
            when: 'You own stock and want downside protection',
            howItWorks: 'Buy puts on stock you own. If stock crashes, puts gain value offsetting stock losses.',
            risk: 'Cost of premium (like insurance premium). Reduces overall gains.',
            reward: 'Limits downside losses. Peace of mind during volatile markets.',
            example: 'Own 100 NVDA shares at $500. Buy $480 put for $8. Max loss now $28/share instead of unlimited.'
        },
        {
            icon: Zap,
            title: 'Spreads (Advanced)',
            when: 'You want defined risk and lower cost',
            howItWorks: 'Buy one option, sell another at different strike. Limits both risk and reward.',
            risk: 'Limited to difference between strikes minus premium.',
            reward: 'Limited but defined. Lower cost than buying calls/puts outright.',
            example: 'Buy SPY $460 call for $5, sell $470 call for $2. Net cost $3, max gain $7 (133% return).'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        Common <GradientText>Options Strategies</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Start with simple strategies (buying calls/puts), then progress to advanced techniques as you gain experience.
                    </p>

                    <div className="space-y-8">
                        {strategies.map((strategy, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <strategy.icon className="text-primary" size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{strategy.title}</h3>
                                        <p className="text-primary font-bold mb-6">{strategy.when}</p>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">How It Works:</p>
                                                <p className="text-text-secondary font-medium text-sm">{strategy.howItWorks}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Example:</p>
                                                <p className="text-text-secondary font-medium text-sm">{strategy.example}</p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-4">
                                                <p className="text-sm font-black text-red-500 uppercase tracking-wider mb-2">Risk:</p>
                                                <p className="text-text-secondary font-medium text-sm">{strategy.risk}</p>
                                            </div>
                                            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4">
                                                <p className="text-sm font-black text-emerald-500 uppercase tracking-wider mb-2">Reward:</p>
                                                <p className="text-text-secondary font-medium text-sm">{strategy.reward}</p>
                                            </div>
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

export default Strategies;
