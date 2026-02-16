import React from 'react';
import { BarChart3, DollarSign, Activity, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const BestStocks = () => {
    const criteria = [
        {
            icon: Activity,
            title: "Liquidity Requirements",
            description: "Average daily volume should exceed 500,000-1,000,000 shares minimum, ensuring tight bid-ask spreads and clean execution without significant slippage.",
            specs: [
                "Mid-caps: 500K-1M+ daily volume",
                "Large-caps: 1M+ daily volume",
                "During gaps: 2-5x baseline volume",
                "Tight spreads for profit preservation"
            ]
        },
        {
            icon: DollarSign,
            title: "Optimal Price Range",
            description: "Stocks priced $10-$100 offer optimal characteristics—high enough for meaningful dollar gaps while remaining affordable for proper position sizing.",
            specs: [
                "Sweet spot: $30-$100 per share",
                "Minimum: $10 (avoid sub-$5 stocks)",
                "Maximum: $200 (capital efficiency)",
                "Generates $0.50-$5 gaps on 2-5% moves"
            ]
        },
        {
            icon: BarChart3,
            title: "Volatility Characteristics",
            description: "Beta of 1.3-2.5 strikes the balance—stocks move significantly more than the broad market without becoming completely unpredictable.",
            specs: [
                "Beta: 1.3-2.5 (manageable volatility)",
                "ATR: $1-$5 for $30-$100 stocks",
                "Too little: ATR under $0.50",
                "Too much: ATR $10+ (unmanageable)"
            ]
        },
        {
            icon: Zap,
            title: "Sector & Catalyst Focus",
            description: "Technology, biotech, consumer discretionary, and growth sectors produce more frequent and larger gaps than utilities or consumer staples.",
            specs: [
                "Best: Tech, biotech, growth sectors",
                "Market cap: $2-20B (mid-caps ideal)",
                "Regular catalysts: earnings, FDA dates",
                "Avoid: Utilities, staples (rare gaps)"
            ]
        }
    ];

    const topSectors = [
        { sector: "Technology", frequency: "High", avgGap: "3-6%", fillRate: "60-70%" },
        { sector: "Biotechnology", frequency: "Very High", avgGap: "5-12%", fillRate: "50-65%" },
        { sector: "Consumer Discretionary", frequency: "Medium-High", avgGap: "2-5%", fillRate: "65-75%" },
        { sector: "Energy", frequency: "Medium", avgGap: "3-7%", fillRate: "55-70%" },
        { sector: "Financial Services", frequency: "Medium", avgGap: "2-4%", fillRate: "70-80%" }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Best Stocks for <GradientText>Gap Trading</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Ideal gap trading candidates combine specific liquidity, volatility, and technical characteristics. Not all stocks gap predictably—focus on these criteria for consistent opportunities.
                    </p>
                </div>

                {/* Criteria Grid */}
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
                                    {item.specs.map((spec, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                                            <p className="text-text-secondary text-xs">{spec}</p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* Sector Analysis */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Top Sectors for Gap Trading</h3>
                    <GlassCard className="overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Sector</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Gap Frequency</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Avg Gap Size</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Fill Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topSectors.map((item, index) => (
                                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4 text-white font-bold">{item.sector}</td>
                                            <td className="p-4 text-text-secondary text-sm">{item.frequency}</td>
                                            <td className="p-4 text-primary font-bold text-sm">{item.avgGap}</td>
                                            <td className="p-4 text-success font-bold text-sm">{item.fillRate}</td>
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
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-2">Build Your Gap Trading Watchlist</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Maintain a database of 20-30 stocks that meet these criteria and have shown historically consistent gap behavior. Backtesting individual stocks reveals whether they tend to fill gaps quickly (ideal for fade strategies) or hold them (better for following strong gaps). Our alerts focus exclusively on stocks meeting these professional standards, eliminating the need for manual screening.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default BestStocks;
