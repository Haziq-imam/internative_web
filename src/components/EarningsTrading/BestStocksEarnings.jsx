import React from 'react';
import { Activity, DollarSign, TrendingUp, Target } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const BestStocksEarnings = () => {
    const criteria = [
        {
            icon: Activity,
            title: "High Options Liquidity",
            description: "Ideal earnings trading candidates require tight bid-ask spreads (under $0.10 for at-the-money options) and average daily options volume exceeding 5,000 contracts. This ensures efficient entry and exit without excessive slippage.",
            requirements: [
                "Bid-ask spreads under $0.10 for ATM options",
                "Average daily options volume 5,000+ contracts",
                "Multiple strike prices with active trading",
                "Avoid low-liquidity stocks creating execution problems"
            ]
        },
        {
            icon: DollarSign,
            title: "Volatility Selling Candidates",
            description: "For volatility selling strategies, prefer stocks with IV rank above 50 (current IV in top 50% of past year's range) and implied moves exceeding historical moves by 15-30%. These conditions suggest overpriced options ripe for premium collection.",
            requirements: [
                "IV Rank above 50, preferably 70+",
                "Implied moves exceed historical by 15-30%",
                "Technology stocks: NVDA, META, TSLA, AMD, AAPL",
                "Avoid stocks with pending binary catalysts beyond earnings"
            ]
        },
        {
            icon: TrendingUp,
            title: "Volatility Buying Candidates",
            description: "Volatility buyers seek stocks where historical moves consistently exceed implied moves, indicating markets habitually underestimate volatility. Biotech stocks awaiting major clinical trial results and small-cap growth stocks with unpredictable revenue often fit this profile.",
            requirements: [
                "Historical moves exceed implied by 25-50%+",
                "Biotech with FDA approvals or clinical trials",
                "Small-cap growth with unpredictable revenue",
                "Companies with new management lacking track records"
            ]
        },
        {
            icon: Target,
            title: "Pre-Earnings Momentum & PEAD",
            description: "For pre-earnings momentum and PEAD strategies, focus on small-cap and mid-cap stocks ($2-15 billion market cap) where price discovery takes longer and institutional positioning changes more gradually. Large-caps get priced efficiently too quickly.",
            requirements: [
                "Market cap: $2-15 billion (mid-caps ideal)",
                "Analyst coverage by 5-15 analysts (not 30+)",
                "Stocks with 5-20 days pre-earnings trends",
                "Post-earnings gaps of 4-6%+ for PEAD setups"
            ]
        }
    ];

    const marketCapAnalysis = [
        {
            category: "Mega-Caps ($500B+)",
            examples: "AAPL, MSFT, GOOGL",
            characteristics: "React quickly and efficiently, limiting PEAD opportunities but providing excellent liquidity for volatility strategies",
            bestFor: "Volatility selling (credit spreads, iron condors)",
            avoid: "Post-earnings drift plays"
        },
        {
            category: "Large-Caps ($50-500B)",
            examples: "NVDA, META, TSLA, NFLX",
            characteristics: "Balanced opportunities—sufficient liquidity while maintaining some inefficiencies",
            bestFor: "All strategies with proper filtering",
            avoid: "None if criteria met"
        },
        {
            category: "Mid-Caps ($2-50B)",
            examples: "CRWD, SNOW, DDOG, ZS",
            characteristics: "Offer balanced opportunities across all strategies—sufficient liquidity while maintaining inefficiencies for momentum and drift plays",
            bestFor: "Pre-earnings momentum, PEAD, volatility selling",
            avoid: "None—sweet spot for earnings trading"
        },
        {
            category: "Small-Caps (Under $2B)",
            examples: "Emerging biotech, growth stocks",
            characteristics: "Can produce explosive moves but often lack options liquidity for complex strategies",
            bestFor: "Directional stock plays, simple options",
            avoid: "Iron condors, multi-leg spreads"
        }
    ];

    const topStocks = [
        { ticker: "NVDA", sector: "Technology", avgMove: "6-10%", ivRank: "High", liquidity: "Excellent", bestStrategy: "Volatility Sell" },
        { ticker: "META", sector: "Technology", avgMove: "8-12%", ivRank: "High", liquidity: "Excellent", bestStrategy: "Volatility Sell" },
        { ticker: "TSLA", sector: "Automotive", avgMove: "10-15%", ivRank: "Very High", liquidity: "Excellent", bestStrategy: "Vol Sell / PEAD" },
        { ticker: "AMD", sector: "Technology", avgMove: "7-11%", ivRank: "High", liquidity: "Excellent", bestStrategy: "Volatility Sell" },
        { ticker: "AAPL", sector: "Technology", avgMove: "4-6%", ivRank: "Medium", liquidity: "Excellent", bestStrategy: "Pre-Momentum" },
        { ticker: "AMZN", sector: "E-Commerce", avgMove: "5-9%", ivRank: "Medium-High", liquidity: "Excellent", bestStrategy: "Volatility Sell" },
        { ticker: "NFLX", sector: "Streaming", avgMove: "8-14%", ivRank: "Very High", liquidity: "Excellent", bestStrategy: "Volatility Sell" },
        { ticker: "CRWD", sector: "Cybersecurity", avgMove: "9-15%", ivRank: "High", liquidity: "Good", bestStrategy: "PEAD" }
    ];

    return (
        <Section className="py-24 bg-background-secondary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Best Stocks for <GradientText>Earnings Trading</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Ideal earnings trading candidates vary by strategy but share certain characteristics. High options liquidity is mandatory—stocks with tight spreads and volume ensure efficient execution without excessive slippage.
                    </p>
                </div>

                {/* Selection Criteria */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {criteria.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <GlassCard key={index} className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-4 pl-16">
                                    {item.requirements.map((req, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                                            <p className="text-text-secondary text-xs">{req}</p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* Market Cap Analysis */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Market Capitalization Matters</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {marketCapAnalysis.map((cap, index) => (
                            <GlassCard key={index} className="p-5">
                                <div className="mb-3">
                                    <h4 className="text-lg font-black text-white mb-1">{cap.category}</h4>
                                    <p className="text-xs text-text-muted font-bold">{cap.examples}</p>
                                </div>
                                <p className="text-text-secondary text-sm mb-3 leading-relaxed">{cap.characteristics}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-2 bg-success/10 border border-success/20 rounded-lg">
                                        <div className="text-[10px] text-success font-black uppercase mb-1">Best For</div>
                                        <div className="text-xs text-white font-bold">{cap.bestFor}</div>
                                    </div>
                                    <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                                        <div className="text-[10px] text-red-400 font-black uppercase mb-1">Avoid</div>
                                        <div className="text-xs text-white font-bold">{cap.avoid}</div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Top Stocks Table */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Popular Earnings Trading Stocks</h3>
                    <GlassCard className="overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Ticker</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Sector</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Avg Move</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">IV Rank</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Liquidity</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Best Strategy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topStocks.map((stock, index) => (
                                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4">
                                                <span className="text-white font-black text-base">{stock.ticker}</span>
                                            </td>
                                            <td className="p-4 text-text-secondary text-sm">{stock.sector}</td>
                                            <td className="p-4 text-primary font-bold text-sm">{stock.avgMove}</td>
                                            <td className="p-4">
                                                <span className={`text-xs font-black ${stock.ivRank === 'Very High' ? 'text-red-400' :
                                                        stock.ivRank === 'High' ? 'text-yellow-400' :
                                                            'text-blue-400'
                                                    }`}>
                                                    {stock.ivRank}
                                                </span>
                                            </td>
                                            <td className="p-4 text-success font-bold text-sm">{stock.liquidity}</td>
                                            <td className="p-4 text-white font-bold text-sm">{stock.bestStrategy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>

                {/* Key Insight */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <GlassCard className="p-6 bg-primary/5 border-primary/20">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-2">Build Your Earnings Watchlist</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Maintain a database of 20-30 stocks that meet these criteria and have shown historically consistent earnings behavior. Backtesting individual stocks reveals whether they tend to move more or less than implied volatility suggests, which strategies work best, and typical post-earnings patterns. Our alerts focus exclusively on stocks meeting these professional standards, with complete historical analysis and strategy recommendations for every earnings setup.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default BestStocksEarnings;
