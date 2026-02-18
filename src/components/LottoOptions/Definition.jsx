import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import GlassCard from '../ui/GlassCard';

const Definition = () => {
    const characteristics = [
        {
            title: '0-3 Days to Expiration',
            description: 'Lotto options expire within 0-3 days (0DTE = same day, 1DTE = tomorrow, 2-3DTE = this week). Extreme time decay creates cheap entry prices but requires immediate stock movement.'
        },
        {
            title: 'Out-of-The-Money (OTM) Strikes',
            description: 'Strike prices are above (calls) or below (puts) current stock price. Stock must move significantly for options to become profitable. This is why they\'re cheap—low probability of success.'
        },
        {
            title: 'Low Entry Cost',
            description: 'Typical lotto options cost $0.10-$5.00 per contract ($10-$500 total). This low cost allows small accounts to participate, but also means total loss is common if stock doesn\'t move enough.'
        },
        {
            title: 'High Implied Volatility',
            description: 'Lotto options target stocks with expected big moves (earnings, Fed announcements, breaking news). High IV means market expects volatility—creating opportunity for explosive gains.'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        What Makes Them <GradientText>"Lotto" Options</GradientText>?
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-12 max-w-3xl mx-auto">
                        The term "lotto" comes from the lottery-like risk/reward profile: small cost, low probability, but massive potential payoff if you win.
                    </p>

                    <GlassCard className="p-8 md:p-12 mb-12">
                        <h3 className="text-2xl font-black text-white mb-6 text-center">The Simple Explanation</h3>
                        <p className="text-lg text-text-secondary font-medium leading-relaxed text-center max-w-3xl mx-auto">
                            Imagine buying a $2 lottery ticket with a chance to win $1,000. That's essentially a lotto option: you pay a small premium ($50-$200) for a contract that could be worth $500-$2,000+ if the stock makes a big move in the next 0-3 days. But just like lottery tickets, most expire worthless.
                        </p>
                    </GlassCard>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
                        Four Key Characteristics
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {characteristics.map((char, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                                <h4 className="text-xl font-black text-white mb-3">{char.title}</h4>
                                <p className="text-text-secondary font-medium leading-relaxed">{char.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
                        <h4 className="text-2xl font-black text-white mb-4 text-center">⚠️ Critical Warning</h4>
                        <p className="text-lg text-text-secondary font-medium text-center max-w-3xl mx-auto">
                            <span className="text-white font-black">Lotto options are NOT for beginners.</span> They require experience with options mechanics, strong risk management, and emotional discipline to accept frequent 100% losses. Only allocate 5-10% of your options portfolio to lotto plays—never your entire account.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Definition;
