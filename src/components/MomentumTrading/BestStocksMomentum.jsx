import React from 'react';
import { TrendingUp, Zap, Radio, Globe } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const BestStocksMomentum = () => {
    const characteristics = [
        {
            icon: Zap,
            title: "High Liquidity & Volume",
            description: "Stocks must trade 1-5 million+ shares daily to allow easy entry/exit without slippage.",
            list: ["<1 Million Vol = Avoid", ">5 Million = Ideal", "Tight Spreads (<$0.02)", "Institutional Participation"]
        },
        {
            icon: TrendingUp,
            title: "Sufficient Volatility",
            description: "Needs enough price movement (ATR $1-$3+) to generate worthwhile intraday or swing profits.",
            list: ["Daily Range > 3-5%", "ATR > $1.00", "High Beta (>1.5)", "Explosive Potential"]
        },
        {
            icon: Globe,
            title: "Sector Leadership",
            description: "Stocks in leading sectors (e.g., AI, Semis, Biotech) benefit from group momentum tailwinds.",
            list: ["Tech/Semiconductors", "Biotech (Catalysts)", "Growth Cyclicals", "Avoid Utilities/Defensive"]
        },
        {
            icon: Radio,
            title: "Clear Catalysts",
            description: "News events create specific supply/demand imbalances that drive sustained momentum.",
            list: ["Earnings Beats", "FDA Approvals", "Contract Wins", "Analyst Upgrades"]
        }
    ];

    const topStocks = [
        { ticker: "NVDA", sector: "Semiconductors", type: "Mega Cap Leader", volatility: "High" },
        { ticker: "TSLA", sector: "EV/Auto", type: "cult Stock", volatility: "Very High" },
        { ticker: "AMD", sector: "Semiconductors", type: "Tech Runner", volatility: "High" },
        { ticker: "META", sector: "Social Media", type: "Recovery Play", volatility: "Medium-High" },
        { ticker: "PLTR", sector: "Software/AI", type: "Growth Fav", volatility: "High" },
        { ticker: "COIN", sector: "Crypto", type: "Sector Proxy", volatility: "Extreme" },
        { ticker: "MARA", sector: "Crypto Mining", type: "High Beta", volatility: "Extreme" },
        { ticker: "DKNG", sector: "Consumer", type: "Growth", volatility: "High" },
    ];

    return (
        <Section className="py-24 bg-background-primary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Best <GradientText>Momentum Stocks</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Not all stocks are suitable for momentum trading. Focus on high-liquidity, high-volatility names that attract institutional volume and respect technical levels.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {characteristics.map((char, index) => {
                        const Icon = char.icon;
                        return (
                            <GlassCard key={index} className="p-6 border-blue-500/10 hover:border-blue-500/30 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white mb-2">{char.title}</h3>
                                        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                                            {char.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {char.list.map((item, i) => (
                                                <span key={i} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-bold text-text-muted">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                <div className="max-w-5xl mx-auto">
                    <GlassCard className="p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <h3 className="text-2xl font-black text-white mb-8 text-center">Momentum Watchlist Favorites</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {topStocks.map((stock, index) => (
                                <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-lg font-black text-white group-hover:text-blue-400 transition-colors">{stock.ticker}</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${stock.volatility === "Extreme" ? "bg-red-500/20 text-red-400 border-red-500/30" :
                                                stock.volatility === "Very High" ? "bg-orange-500/20 text-orange-400 border-orange-500/30" :
                                                    "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                            }`}>
                                            {stock.volatility}
                                        </span>
                                    </div>
                                    <div className="text-xs text-text-secondary mb-1">{stock.sector}</div>
                                    <div className="text-[10px] text-text-muted uppercase tracking-wider">{stock.type}</div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default BestStocksMomentum;
