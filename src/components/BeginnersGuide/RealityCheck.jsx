import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { AlertCircle } from 'lucide-react';

const RealityCheck = () => {
    const stats = [
        {
            stat: '70-90%',
            label: 'Of retail traders lose money',
            detail: 'Regardless of using signals or trading independently'
        },
        {
            stat: '40%',
            label: 'Quit after only 1 month',
            detail: 'Unable to handle the emotional pressure'
        },
        {
            stat: '97%',
            label: 'Lose money within 1 year',
            detail: 'When accounting for transaction costs'
        },
        {
            stat: '1.6%',
            label: 'Achieve consistent profitability',
            detail: 'After 3+ years of trading experience'
        }
    ];

    const reasons = [
        {
            title: 'Emotional Decision-Making',
            description: 'Beginners panic during losing streaks, abandoning signals prematurely or doubling position sizes attempting recovery. Most quit after 3-5 consecutive losses despite this being statistically normal.'
        },
        {
            title: 'Unrealistic Expectations',
            description: 'Attracted by promises of "90% win rates" or "guaranteed profits," beginners discover reality involves frequent losses and account drawdowns. When results don\'t match impossible expectations, they quit.'
        },
        {
            title: 'Signal Modification',
            description: 'Beginners modify entry prices (chasing), move stop-losses further away, or hold past profit targets. These changes destroy the signal\'s statistical edge, creating losses even when original signals would profit.'
        },
        {
            title: 'Inadequate Capital',
            description: 'Starting with $500-$2,000 means $10-$40 risk per trade at 2%. But options require $200-$500 minimum positions, creating 10-25% account risk—catastrophic leverage inviting rapid destruction.'
        },
        {
            title: 'Subscription Costs',
            description: 'On a $3,000 account, a $100/month subscription equals 40% annual cost. You need 40%+ returns just to break even after fees—an extremely high bar most beginners never clear.'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-6">
                            <AlertCircle className="text-orange-500" size={20} />
                            <span className="text-orange-500 font-black text-sm uppercase tracking-wider">Sobering Truth</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
                            The Reality: <GradientText>Most Beginners Lose Money</GradientText>
                        </h2>
                        <p className="text-xl text-text-secondary font-medium max-w-3xl mx-auto">
                            Using signals doesn't guarantee profitability—it provides structured learning while potentially reducing catastrophic mistakes. Here's what the data shows.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        {stats.map((item, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 text-center">
                                <div className="text-4xl font-black text-primary mb-2">{item.stat}</div>
                                <div className="text-white font-bold mb-2">{item.label}</div>
                                <div className="text-sm text-text-secondary font-medium">{item.detail}</div>
                            </div>
                        ))}
                    </div>

                    {/* Reasons */}
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
                        Why Beginners Fail (Even With Good Signals)
                    </h3>
                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                                <h4 className="text-xl font-black text-white mb-3">{reason.title}</h4>
                                <p className="text-text-secondary font-medium leading-relaxed">{reason.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                            <span className="text-white font-black">Important:</span> These statistics aren't meant to discourage you—they're meant to set realistic expectations. The 10-30% who succeed do so by avoiding these mistakes, maintaining discipline, and treating trading as a skill to develop over months/years, not a get-rich-quick scheme.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default RealityCheck;
