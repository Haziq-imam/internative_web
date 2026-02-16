import React from 'react';
import { Target, TrendingUp, DollarSign } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const BestStocksDayTrading = () => {
    const list = [
        { ticker: "NVDA", name: "NVIDIA", type: "Tech Momentum", atr: "$5.00+", note: "Best volatility & liquidity combo" },
        { ticker: "TSLA", name: "Tesla", type: "Growth Leader", atr: "$4.50+", note: "Cult following, huge daily range" },
        { ticker: "AAPL", name: "Apple", type: "Mega Cap", atr: "$2.00", note: "Tight spreads, safe for size" },
        { ticker: "AMZN", name: "Amazon", type: "E-Commerce", atr: "$2.50", note: "Clean technical moves" },
        { ticker: "AMD", name: "AMD", type: "Semi", atr: "$3.00", note: "Often follows NVDA with lag" },
        { ticker: "SPY", name: "S&P 500 ETF", type: "Inex", atr: "$3-4", note: "The market itself. Huge volume." },
        { ticker: "QQQ", name: "Nasdaq ETF", type: "Tech ETF", atr: "$4-5", note: "Tech-heavy volatility" },
        { ticker: "META", name: "Meta", type: "Social", atr: "$4.00", note: "Strong gap/news plays" },
    ];

    return (
        <Section className="py-24 bg-background-primary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Best Stocks To <GradientText>Day Trade</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Not every stock is tradable. You need liquidity to enter/exit instantly and volatility to make profit. Avoid low volume, wide spread stocks.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <GlassCard className="p-8">
                        <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm font-bold text-text-muted border-b border-white/10 pb-4">
                            <div>Stock Ticker</div>
                            <div>Daily Range (ATR)</div>
                            <div>Trader's Note</div>
                        </div>
                        <div className="space-y-4">
                            {list.map((stock, i) => (
                                <div key={i} className="grid md:grid-cols-3 gap-6 items-center p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center font-black text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                                            {stock.ticker}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{stock.name}</div>
                                            <div className="text-[10px] text-text-muted uppercase tracking-wider">{stock.type}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-green-400" />
                                        <span className="text-green-300 font-medium">{stock.atr}</span>
                                    </div>
                                    <div className="text-text-secondary text-xs italic">
                                        "{stock.note}"
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default BestStocksDayTrading;
