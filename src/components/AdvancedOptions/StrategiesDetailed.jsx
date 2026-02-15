import React from 'react';
import { Target, RotateCcw, Calendar, Disc, TrendingUp, AlertCircle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const StrategiesDetailed = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Advanced Strategies <GradientText>Explained</GradientText></h2>
                    <p className="text-xl text-text-secondary font-medium">Detailed mechanics and realistic expectations for institutional-grade positions.</p>
                </div>

                <div className="space-y-24 max-w-5xl mx-auto">
                    {/* Vertical Spreads */}
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                            <Target className="text-primary" /> Vertical Spreads
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-lg text-text-secondary font-medium leading-relaxed">
                            <div className="space-y-6">
                                <p>Vertical spreads combine buying one option and selling another of the same type with different strike prices. These are foundational building blocks for more complex positions.</p>
                                <p><strong className="text-white">Bull Call Spread:</strong> On $100 stock, buying $100 call for $5.00 while selling $110 call for $2.00 creates $3.00 net debit. Max profit = strike width minus debit ($10 - $3 = $700). Max loss = debit ($300).</p>
                            </div>
                            <div className="space-y-6">
                                <p><strong className="text-white">Credit Spreads:</strong> Selling $95 put for $3.00 while buying $90 put for $1.00 creates $2.00 net credit. Max profit = credit received ($200). Max risk = width minus credit ($300).</p>
                                <p>Realistic expectations involve 60-75% win rates for credit spreads, but only 40-55% for directional debit spreads. Professional traders target 25-45% annual returns.</p>
                            </div>
                        </div>
                    </div>

                    {/* Iron Condors & Butterflies */}
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                            <RotateCcw className="text-secondary" /> Iron Condors and Iron Butterflies
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-lg text-text-secondary font-medium leading-relaxed">
                            <div className="space-y-6">
                                <p>Iron condors combine a bull put spread and bear call spread, profiting when the underlying remains within a defined range. It capitalizes on theta decay and stationary markets.</p>
                                <p><strong className="text-white">Example:</strong> Sell $380 put/Buy $375 put AND Sell $420 call/Buy $425 call. Collecting $2.50 credit. Max profit is the credit ($250) if the stock stays between breakevens.</p>
                            </div>
                            <div className="space-y-6">
                                <p><strong className="text-white">Iron Butterfly:</strong> Moves short strikes to the same at-the-money level for larger credit but a narrower profitable range.</p>
                                <p>Realistic win rates are 65-75%. However, winners earn $200-$400 while losers cost $400-$600, requiring disciplined management (cutting at 2-2.5x credit). Professional target: 20-40% annually.</p>
                            </div>
                        </div>
                    </div>

                    {/* Calendars & Diagonals */}
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                            <Calendar className="text-purple-500" /> Calendar and Diagonal Spreads
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-lg text-text-secondary font-medium leading-relaxed">
                            <div className="space-y-6">
                                <p>Calendars buy longer-dated options while selling near-term options of the same strike, profiting from time decay differential (front month decays faster).</p>
                                <p><strong className="text-white">Example:</strong> Sell 30-day $100 call for $4.00, buy 60-day $100 call for $6.00. Position profits if stock stays near $100 as the short call expires worthless while the long call keeps value.</p>
                            </div>
                            <div className="space-y-6">
                                <p><strong className="text-white">Diagonal Spreads:</strong> Modify calendars using different strikes, creating directional bias while maintaining time decay benefits. Significant vega (volatility) exposure—increases benefit, decreases harm.</p>
                            </div>
                        </div>
                    </div>

                    {/* Butterflies & Condor Spreads */}
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                            <Disc className="text-blue-500" /> Butterfly and Condor Spreads
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-lg text-text-secondary font-medium leading-relaxed">
                            <div className="space-y-6">
                                <p>Butterfly spreads use a 1-2-1 ratio (buy 1, sell 2, buy 1) creating limited risk/reward profiting when underlying finishes exactly at the middle strike.</p>
                                <p><strong className="text-white">Example:</strong> Buy $95 call, sell two $100 calls, buy $105 call. Max profit is rare as underlying seldom finishes exactly at optimal levels. Win rates: 45-60%.</p>
                            </div>
                            <div className="space-y-6">
                                <p><strong className="text-white">Condor Spreads:</strong> Widen middle strikes for a broader profitable range but lower max profit. Used during consolidation periods or before catalysts expecting minimal movement.</p>
                            </div>
                        </div>
                    </div>

                    {/* Ratio Spreads */}
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent" />
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                            <TrendingUp className="text-orange-500" /> Ratio Spreads and Backspreads
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-lg text-text-secondary font-medium leading-relaxed">
                            <div className="space-y-6">
                                <p>Ratio spreads use unbalanced legs (e.g. 2:1 ratio). These create asymmetric payoffs with limited profit potential but UNLIMITED risk on the ratio side—extremely dangerous.</p>
                                <p><strong className="text-white">Example:</strong> Buy one $100 call, sell two $110 calls. Profits at $110. Above $120, naked short calls create unlimited risk.</p>
                            </div>
                            <div className="space-y-6">
                                <p><strong className="text-white">Backspreads:</strong> Reverse the ratio (sell fewer, buy more). Sell one $100 call, buy two $110 calls for unlimited profit potential with limited risk.</p>
                                <p>Requires deep understanding of dynamics and massive capital to cover potential naked components. Retail traders frequently lose through mismanaged unlimited risk.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default StrategiesDetailed;
