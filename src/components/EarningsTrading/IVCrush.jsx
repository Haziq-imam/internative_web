import React from 'react';
import { Activity, TrendingDown, Zap, AlertCircle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const IVCrush = () => {
    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Understanding <GradientText>IV Crush</GradientText>: The Core Dynamic
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Implied volatility crush is the 30-70% collapse in option values after earnings announcements. Understanding this phenomenon separates profitable earnings traders from the 75-85% who lose money.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* What is IV Crush */}
                    <GlassCard className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                                <TrendingDown className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white mb-2">What Is IV Crush?</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Implied volatility represents the market's expectation of future price movement. Before earnings, uncertainty drives IV to elevated levels—options become expensive as markets price in potential large moves. Once results release, uncertainty resolves and IV typically collapses 30-70% within hours, regardless of actual price movement.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                            <h4 className="text-sm font-black text-red-400 uppercase tracking-wider mb-3">The Buyer's Trap</h4>
                            <p className="text-text-secondary text-xs leading-relaxed mb-3">
                                Option buyers need massive price movements to profit—the stock must move MORE than implied volatility suggested just to overcome IV crush. A stock moving 8% seems substantial, but if it was priced for 12% and IV drops 60%, option holders lose money despite being directionally correct.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-black/20 p-3 rounded-lg">
                                    <div className="text-[10px] text-text-muted font-bold uppercase mb-1">Before Earnings</div>
                                    <div className="text-white font-black">Call: $4.50</div>
                                    <div className="text-xs text-text-muted">IV: 85%</div>
                                </div>
                                <div className="bg-black/20 p-3 rounded-lg">
                                    <div className="text-[10px] text-text-muted font-bold uppercase mb-1">After +8% Move</div>
                                    <div className="text-red-400 font-black">Call: $3.20</div>
                                    <div className="text-xs text-text-muted">IV: 35% (-59%)</div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Expected Move Calculation */}
                    <GlassCard className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <Activity className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white mb-2">Calculating Expected Move</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Expected move uses at-the-money straddle prices to estimate the market's implied post-earnings price range. This represents one standard deviation—approximately 68% probability the stock stays within this range.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                                <h4 className="text-sm font-black text-primary uppercase tracking-wider mb-3">Formula</h4>
                                <div className="bg-black/20 p-4 rounded-lg font-mono text-sm text-white mb-3">
                                    Expected Move ≈ ATM Straddle Price
                                </div>
                                <p className="text-text-secondary text-xs leading-relaxed">
                                    For a stock at $100, if the ATM $100 call and $100 put together cost $8, the expected move is approximately ±$8 or ±8%. The market implies 68% probability the stock closes between $92-$108 after earnings.
                                </p>
                            </div>

                            <div className="p-4 bg-white/5 rounded-xl">
                                <h4 className="text-sm font-black text-white uppercase tracking-wider mb-3">Statistical Edge</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-text-secondary">Actual moves fall short of implied:</span>
                                        <span className="text-success font-black">65-75% of time</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-text-secondary">Volatility sellers profit when:</span>
                                        <span className="text-primary font-black">Move &lt; Expected</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-text-secondary">Volatility buyers need:</span>
                                        <span className="text-yellow-400 font-black">Move &gt; Expected by 30%+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* IV Rank & Percentile */}
                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">IV Rank & IV Percentile Metrics</h3>
                    <GlassCard className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-black text-white">IV Rank</h4>
                                </div>
                                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                    Compares current IV to the past year's range. IV Rank = (Current IV - 52-week low) / (52-week high - 52-week low).
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                                        <span className="text-sm text-white font-bold">IV Rank 70+</span>
                                        <span className="text-xs text-success font-black">SELL OPTIONS</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-lg">
                                        <span className="text-sm text-white font-bold">IV Rank 30-70</span>
                                        <span className="text-xs text-text-muted font-black">NEUTRAL</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                        <span className="text-sm text-white font-bold">IV Rank &lt;30</span>
                                        <span className="text-xs text-yellow-400 font-black">BUY OPTIONS</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <Activity className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h4 className="text-lg font-black text-white">Historical vs. Implied</h4>
                                </div>
                                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                    Compare expected moves against historical moves from the past 8-12 earnings periods to identify overpriced or underpriced volatility.
                                </p>
                                <div className="space-y-2">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs text-text-muted">Implied Move:</span>
                                            <span className="text-sm text-white font-bold">8.2%</span>
                                        </div>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs text-text-muted">Historical Average:</span>
                                            <span className="text-sm text-white font-bold">6.1%</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                            <span className="text-xs text-text-muted">Difference:</span>
                                            <span className="text-sm text-success font-black">+34% Overpriced</span>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-success/10 border border-success/20 rounded-lg text-center">
                                        <span className="text-xs text-success font-black">✓ VOLATILITY SELL OPPORTUNITY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Key Insight */}
                <div className="max-w-4xl mx-auto">
                    <GlassCard className="p-6 bg-primary/5 border-primary/20">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <AlertCircle className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-2">The Mathematical Reality</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Markets consistently overestimate post-earnings volatility approximately 65-75% of the time. This creates a statistical edge for volatility sellers who collect overpriced premium and profit from IV crush. However, the 25-35% of times when moves exceed expectations can create substantial losses, which is why defined-risk structures (spreads) and conservative position sizing (1% maximum) are mandatory, not optional.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default IVCrush;
