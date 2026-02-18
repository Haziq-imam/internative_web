import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { TrendingUp, TrendingDown } from 'lucide-react';

const BasicsExplained = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        Calls vs Puts: <GradientText>The Basics</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Options come in two types: calls and puts. Understanding the difference is fundamental to options trading.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Call Options */}
                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <TrendingUp className="text-emerald-500" size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-white">Call Options</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Definition:</p>
                                    <p className="text-text-secondary font-medium">A call option gives you the RIGHT to BUY a stock at a specific price (strike price) before expiration.</p>
                                </div>

                                <div>
                                    <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">When To Use:</p>
                                    <p className="text-text-secondary font-medium">Buy calls when you believe the stock price will GO UP.</p>
                                </div>

                                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4">
                                    <p className="text-sm font-black text-emerald-500 uppercase tracking-wider mb-2">Example:</p>
                                    <p className="text-text-secondary font-medium mb-3">
                                        AAPL trading at $180. You buy a $185 call for $3.00 expiring in 2 weeks.
                                    </p>
                                    <ul className="space-y-2 text-sm text-text-secondary font-medium">
                                        <li>• If AAPL rises to $195, your call is worth ~$10 (233% profit)</li>
                                        <li>• If AAPL stays at $180, your call expires worthless (-100% loss)</li>
                                        <li>• Max loss: $300 (premium paid)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Put Options */}
                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <TrendingDown className="text-red-500" size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-white">Put Options</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">Definition:</p>
                                    <p className="text-text-secondary font-medium">A put option gives you the RIGHT to SELL a stock at a specific price (strike price) before expiration.</p>
                                </div>

                                <div>
                                    <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">When To Use:</p>
                                    <p className="text-text-secondary font-medium">Buy puts when you believe the stock price will GO DOWN.</p>
                                </div>

                                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4">
                                    <p className="text-sm font-black text-red-500 uppercase tracking-wider mb-2">Example:</p>
                                    <p className="text-text-secondary font-medium mb-3">
                                        TSLA trading at $250. You buy a $245 put for $4.00 expiring in 2 weeks.
                                    </p>
                                    <ul className="space-y-2 text-sm text-text-secondary font-medium">
                                        <li>• If TSLA drops to $220, your put is worth ~$25 (525% profit)</li>
                                        <li>• If TSLA stays at $250, your put expires worthless (-100% loss)</li>
                                        <li>• Max loss: $400 (premium paid)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                        <h4 className="text-2xl font-black text-white mb-4">Key Insight</h4>
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                            When you BUY options (calls or puts), your maximum loss is limited to the premium you paid. But your profit potential can be 100-500%+ if the stock moves in your favor. This is why options are powerful—but also why they can expire worthless if the stock doesn't move enough.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default BasicsExplained;
