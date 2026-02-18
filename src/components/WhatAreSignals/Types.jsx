import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { TrendingUp, Zap, Bitcoin, BarChart3 } from 'lucide-react';

const Types = () => {
    const types = [
        {
            icon: TrendingUp,
            title: 'Stock Signals',
            description: 'Alerts for buying or shorting individual stocks (equities).',
            examples: ['Swing trades (hold 3-10 days)', 'Day trades (intraday only)', 'Growth stock momentum plays'],
            bestFor: 'Traders with standard brokerage accounts, no special approvals needed.'
        },
        {
            icon: Zap,
            title: 'Options Signals',
            description: 'Alerts for call and put options contracts with leveraged returns.',
            examples: ['Lotto options (0-3 DTE, high risk/reward)', 'Swing options (2-6 weeks expiration)', 'Index options (SPY, QQQ, IWM)'],
            bestFor: 'Traders approved for options trading, comfortable with leverage and time decay.'
        },
        {
            icon: Bitcoin,
            title: 'Crypto Signals',
            description: 'Alerts for cryptocurrency trades (Bitcoin, Ethereum, altcoins).',
            examples: ['Swing trades on BTC/ETH', 'Altcoin momentum plays', 'Crypto futures (leveraged)'],
            bestFor: 'Traders with crypto exchange accounts, comfortable with 24/7 markets and volatility.'
        },
        {
            icon: BarChart3,
            title: 'Futures Signals',
            description: 'Alerts for futures contracts (indices, commodities, currencies).',
            examples: ['E-mini S&P 500 (/ES)', 'Nasdaq futures (/NQ)', 'Gold, oil, and currency futures'],
            bestFor: 'Experienced traders with futures approval, understanding leverage and margin requirements.'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        Types of <GradientText>Trading Signals</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Signals cover multiple asset classes. Choose the types that match your account permissions, risk tolerance, and trading style.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {types.map((type, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                                    <type.icon className="text-primary" size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3">{type.title}</h3>
                                <p className="text-text-secondary font-medium mb-6 leading-relaxed">
                                    {type.description}
                                </p>
                                <div className="mb-6">
                                    <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-3">Examples:</p>
                                    <ul className="space-y-2">
                                        {type.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-2 text-text-secondary font-medium">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
                                    <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Best For:</p>
                                    <p className="text-text-secondary font-medium text-sm">{type.bestFor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Types;
