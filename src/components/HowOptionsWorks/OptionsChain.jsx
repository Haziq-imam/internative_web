import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Target, Calendar, DollarSign } from 'lucide-react';

const OptionsChain = () => {
    const components = [
        {
            icon: Target,
            title: 'Strike Price',
            definition: 'The price at which you can buy (call) or sell (put) the stock if you exercise the option.',
            example: 'AAPL $185 call means you can buy AAPL at $185 per share.',
            howToChoose: 'Choose strikes based on your outlook: In-The-Money (ITM) = higher cost, higher probability. Out-of-The-Money (OTM) = lower cost, lower probability but higher % gains if right.'
        },
        {
            icon: Calendar,
            title: 'Expiration Date',
            definition: 'The last day the option is valid. After this date, the option expires worthless if not exercised or sold.',
            example: 'Options expiring 2/16/2026 become worthless after market close on that Friday.',
            howToChoose: 'Longer expirations = more time for stock to move, but more expensive. Shorter expirations = cheaper but require quick moves. Beginners: start with 2-6 weeks out.'
        },
        {
            icon: DollarSign,
            title: 'Premium (Price)',
            definition: 'The cost to buy the option contract. This is what you pay upfront and your maximum risk.',
            example: 'Option premium of $3.50 means you pay $350 per contract (options control 100 shares).',
            howToChoose: 'Premium reflects probability and time. Expensive options = market expects big move. Cheap options = low probability or little time left.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        Understanding the <GradientText>Options Chain</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Every option has three critical components you must understand before trading.
                    </p>

                    <div className="space-y-8">
                        {components.map((component, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <component.icon className="text-primary" size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{component.title}</h3>

                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Definition:</p>
                                                <p className="text-text-secondary font-medium">{component.definition}</p>
                                            </div>

                                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                                                <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Example:</p>
                                                <p className="text-primary font-bold">{component.example}</p>
                                            </div>

                                            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
                                                <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">How To Choose:</p>
                                                <p className="text-text-secondary font-medium">{component.howToChoose}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8">
                        <h4 className="text-2xl font-black text-white mb-4 text-center">Important: Contract Multiplier</h4>
                        <p className="text-lg text-text-secondary font-medium text-center max-w-3xl mx-auto">
                            <span className="text-white font-black">Each option contract controls 100 shares.</span> So if you see a premium of $3.50, you actually pay $350 ($3.50 × 100). If the option goes to $7.00, you can sell for $700—a $350 profit (100% gain). Always multiply the displayed price by 100 to get your actual cost.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default OptionsChain;
