import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { AlertTriangle } from 'lucide-react';

const WhoShouldNotTrade = () => {
    const profiles = [
        {
            title: 'People Trading With Needed Money',
            description: 'Using rent, mortgage, or living expense funds faces catastrophic life consequences from inevitable trading losses. Even quality signals lose 30-45% of trades creating 15-30% account drawdowns during difficult periods.',
            warning: 'Trade only with genuine risk capital whose total loss wouldn\'t impact lifestyle or financial security.'
        },
        {
            title: 'Those Expecting Guaranteed Profits',
            description: 'Believing trading signals provide easy money or get-rich-quick results faces devastating disappointment. Reality involves frequent losses, emotional stress, months of learning, and significant capital at risk.',
            warning: 'If expecting 90%+ win rates or doubling accounts monthly, expectations are detached from reality—these unrealistic hopes guarantee disappointment.'
        },
        {
            title: 'Emotionally Reactive People',
            description: 'Those who panic during losses or become overconfident during wins cannot maintain necessary discipline. If checking balances obsessively, losing sleep over positions, or experiencing extreme emotional swings from trading results.',
            warning: 'Your psychological profile proves incompatible with trading regardless of signal usage. Successful trading demands emotional stability.'
        },
        {
            title: 'People Unwilling To Learn',
            description: 'Expecting signals to provide mindless passive income without effort fails universally. Successful signal usage requires understanding position sizing, risk management, market basics, order types, and strategy fundamentals.',
            warning: 'Unwillingness to invest 10-20 hours monthly learning these concepts virtually guarantees failure as execution errors sabotage otherwise quality signals.'
        },
        {
            title: 'Those Lacking Minimum Capital',
            description: 'Accounts below $1,000 cannot follow signals safely due to position sizing constraints. This forces excessive percentage risks on individual trades or requires skipping majority of signals due to minimum position requirements.',
            warning: 'Build capital through employment or lower-risk methods before attempting trading—starting undercapitalized accelerates failure.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6">
                            <AlertTriangle className="text-red-500" size={20} />
                            <span className="text-red-500 font-black text-sm uppercase tracking-wider">Critical Warning</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
                            Who Should <GradientText>NOT</GradientText> Use Trading Signals
                        </h2>
                        <p className="text-xl text-text-secondary font-medium max-w-3xl mx-auto">
                            Trading signals are completely inappropriate for these profiles who will almost certainly lose money regardless of signal quality or effort.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {profiles.map((profile, index) => (
                            <div key={index} className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                                        <AlertTriangle className="text-red-500" size={20} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white flex-1">{profile.title}</h3>
                                </div>
                                <p className="text-text-secondary font-medium mb-4 leading-relaxed ml-14">
                                    {profile.description}
                                </p>
                                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 ml-14">
                                    <p className="text-sm font-black text-red-500 uppercase tracking-wider mb-2">⚠️ Warning:</p>
                                    <p className="text-text-secondary font-medium">{profile.warning}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                        <h3 className="text-2xl font-black text-white mb-4">Be Honest With Yourself</h3>
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                            If you recognize yourself in any of these profiles, trading signals (and trading in general) are not appropriate for you right now. There's no shame in this—most people shouldn't trade. Focus on building capital, developing emotional stability, and learning fundamentals before risking money in markets.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhoShouldNotTrade;
