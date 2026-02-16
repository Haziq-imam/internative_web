import React from 'react';
import { Activity, DollarSign, TrendingUp, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const BestStocksSwing = () => {
    const criteria = [
        {
            icon: Activity,
            title: "High Liquidity Requirements",
            description: "Ideal swing trading candidates require minimum 500,000-1,000,000 shares daily volume, ensuring tight bid-ask spreads and ability to enter/exit positions without significant slippage.",
            requirements: [
                "Daily volume: 500K-1M+ shares minimum",
                "Bid-ask spreads under $0.02-$0.05",
                "Multiple buyers and sellers at each price level",
                "Avoid low-volume stocks creating execution problems"
            ]
        },
        {
            icon: Zap,
            title: "Moderate Volatility (Beta 1.2-2.0)",
            description: "Average True Range (ATR) measures daily volatility. Stocks with ATR of $1-$5 (for $50-$200 stocks) offer sufficient movement for swing profits without excessive unpredictability.",
            requirements: [
                "Beta 1.2-2.0 relative to broader market",
                "ATR $1-$5 for stocks priced $50-$200",
                "Too little volatility ($0.25 ATR) limits profit potential",
                "Excessive volatility ($10 ATR) creates unmanageable risk"
            ]
        },
        {
            icon: TrendingUp,
            title: "Clear Technical Patterns",
            description: "Stocks that respect technical levels—support, resistance, moving averages—provide predictable swing opportunities. Erratic price action without pattern adherence reduces success rates.",
            requirements: [
                "Consistent respect for moving average support/resistance",
                "Clear chart patterns: triangles, flags, channels",
                "Predictable pullback depths (30-50% retracements)",
                "Volume patterns confirming price movements"
            ]
        },
        {
            icon: DollarSign,
            title: "Market Cap & Sector Selection",
            description: "Large-caps ($10B+) combine liquidity with volatility. Mid-caps ($2-10B) offer larger percentage moves. Growth sectors (tech, consumer discretionary, healthcare) provide better opportunities than defensive sectors.",
            requirements: [
                "Large-caps: AAPL, MSFT, NVDA, TSLA, META (tight spreads)",
                "Mid-caps: PLTR, COIN, NET, CRWD (stronger trends)",
                "Growth-oriented sectors over utilities/staples",
                "Follow sector rotation to areas showing momentum"
            ]
        }
    ];

    const topStocks = [
        { ticker: "NVDA", sector: "Technology", avgMove: "$8-15", beta: "1.8", liquidity: "Excellent", pattern: "Strong Trends" },
        { ticker: "TSLA", sector: "Automotive", avgMove: "$12-25", beta: "2.1", liquidity: "Excellent", pattern: "High Volatility" },
        { ticker: "META", sector: "Technology", avgMove: "$6-12", beta: "1.5", liquidity: "Excellent", pattern: "Clear Patterns" },
        { ticker: "AAPL", sector: "Technology", avgMove: "$3-6", beta: "1.2", liquidity: "Excellent", pattern: "Steady Trends" },
        { ticker: "MSFT", sector: "Technology", avgMove: "$4-8", beta: "1.1", liquidity: "Excellent", pattern: "Reliable Support" },
        { ticker: "AMZN", sector: "E-Commerce", avgMove: "$5-10", beta: "1.4", liquidity: "Excellent", pattern: "Strong Momentum" },
        { ticker: "AMD", sector: "Technology", avgMove: "$5-10", beta: "1.9", liquidity: "Excellent", pattern: "Volatile Swings" },
        { ticker: "CRWD", sector: "Cybersecurity", avgMove: "$8-15", beta: "1.6", liquidity: "Good", pattern: "Growth Trends" }
    ];

    const sectorAnalysis = [
        {
            sector: "Technology",
            characteristics: "Strong trends, high volatility, excellent liquidity",
            bestFor: "All swing strategies—trend following, breakouts, pullbacks",
            examples: "NVDA, META, AAPL, MSFT, AMD"
        },
        {
            sector: "Consumer Discretionary",
            characteristics: "Sensitive to economic cycles, clear seasonal patterns",
            bestFor: "Trend following during economic expansion, range trading in uncertainty",
            examples: "AMZN, TSLA, NKE, SBUX"
        },
        {
            sector: "Healthcare/Biotech",
            characteristics: "Catalyst-driven, FDA approvals create explosive moves",
            bestFor: "Catalyst trading, volatility plays around binary events",
            examples: "MRNA, REGN, VRTX, BIIB"
        },
        {
            sector: "Financials",
            characteristics: "Interest rate sensitive, strong trends during rate cycles",
            bestFor: "Trend following during Fed policy changes, range trading otherwise",
            examples: "JPM, BAC, GS, MS"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Best Stocks for <GradientText>Swing Trading</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Ideal swing trading candidates combine high liquidity, moderate volatility, and clear technical patterns. These characteristics maximize profit potential while managing execution risk.
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

                {/* Top Stocks Table */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Popular Swing Trading Stocks</h3>
                    <GlassCard className="overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Ticker</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Sector</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Avg Daily Move</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Beta</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Liquidity</th>
                                        <th className="text-left p-4 text-sm font-black text-white uppercase tracking-wider">Pattern Quality</th>
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
                                            <td className="p-4 text-yellow-400 font-bold text-sm">{stock.beta}</td>
                                            <td className="p-4 text-success font-bold text-sm">{stock.liquidity}</td>
                                            <td className="p-4 text-white text-sm">{stock.pattern}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>

                {/* Sector Analysis */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Sector Selection Matters</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {sectorAnalysis.map((sector, index) => (
                            <GlassCard key={index} className="p-5">
                                <h4 className="text-lg font-black text-white mb-2">{sector.sector}</h4>
                                <p className="text-text-secondary text-sm mb-3 leading-relaxed">{sector.characteristics}</p>
                                <div className="space-y-2">
                                    <div className="p-2 bg-success/10 border border-success/20 rounded-lg">
                                        <div className="text-[10px] text-success font-black uppercase mb-1">Best For</div>
                                        <div className="text-xs text-white">{sector.bestFor}</div>
                                    </div>
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        <div className="text-[10px] text-text-muted font-black uppercase mb-1">Examples</div>
                                        <div className="text-xs text-white font-bold">{sector.examples}</div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default BestStocksSwing;
