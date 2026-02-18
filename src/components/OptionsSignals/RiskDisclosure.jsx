import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import CheckList from '../ui/CheckList';

const RiskDisclosure = () => {
    return (
        <Section className="py-24 bg-background-secondary/30 border-y border-white/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <GlassCard className="p-8 md:p-12 border-red-500/20 bg-red-500/5">
                    <div className="flex items-center gap-4 mb-8 text-red-400">
                        <AlertTriangle size={32} />
                        <h2 className="text-2xl font-black uppercase tracking-widest">Important: Understand the Risks</h2>
                    </div>
                    <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
                        <p>
                            <span className="text-white font-bold">Options trading involves substantial risk and is not appropriate for all investors.</span> Options can expire worthless, meaning you can lose 100% of your invested capital on individual trades. Leverage magnifies both gains and losses.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 py-6 border-y border-white/5">
                            <div>
                                <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Key Risks</h4>
                                <ul className="space-y-2">
                                    <li className="flex gap-2"><span className="text-red-400">•</span> <span><strong>Total Loss Potential:</strong> Options can go to zero; you can lose your entire investment in a single trade</span></li>
                                    <li className="flex gap-2"><span className="text-red-400">•</span> <span><strong>Time Decay:</strong> Options lose value as expiration approaches (theta decay)</span></li>
                                    <li className="flex gap-2"><span className="text-red-400">•</span> <span><strong>Volatility Risk:</strong> Implied volatility can collapse, reducing option value even if directional bet is correct</span></li>
                                    <li className="flex gap-2"><span className="text-red-400">•</span> <span><strong>Liquidity Risk:</strong> Some options have wide bid-ask spreads making entry/exit more expensive</span></li>
                                    <li className="flex gap-2"><span className="text-red-400">•</span> <span><strong>Execution Risk:</strong> Fast-moving markets may prevent fills at desired prices</span></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Risk Management Guidelines</h4>
                                <CheckList items={[
                                    "Never risk more than 2-5% of your account on a single options trade",
                                    "Always use stop-losses as specified in our signals",
                                    "Diversify across multiple signals rather than going all-in on one",
                                    "Start small while learning our signal patterns",
                                    "Only trade with capital you can afford to lose"
                                ]} />
                            </div>
                        </div>

                        <p className="text-xs">
                            <strong>Not Financial Advice:</strong> InterNative Traders provides educational signals and analysis. We are not registered investment advisors. Our signals are educational tools, not personal financial advice. Always conduct your own research and consult with a licensed financial advisor before making investment decisions.
                        </p>
                        <p className="text-[10px] text-text-muted italic">
                            <strong>Past Performance Disclaimer:</strong> Past performance is not indicative of future results. Historical win rates and returns do not guarantee similar future outcomes. Market conditions change, and what worked previously may not work in the future.
                        </p>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
