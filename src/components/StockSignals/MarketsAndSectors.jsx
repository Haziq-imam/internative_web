import React from 'react';
import { TrendingUp, Activity, BarChart2, Globe, Server, HeartPulse, DollarSign, ShoppingBag, Zap, Factory, Smartphone, Box } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const MarketsAndSectors = () => {
    const marketCaps = [
        {
            title: "Large-Cap Stocks",
            subtitle: "$10B+ Valuation",
            desc: "The blue-chip companies that drive market indexes.",
            coverage: ["S&P 500 components", "Mega-cap tech (Magnificent 7)", "Financial giants", "Healthcare leaders"],
            stats: { freq: "4-6/week", vol: "Moderate (8-15%)" },
            color: "text-primary"
        },
        {
            title: "Mid-Cap Stocks",
            subtitle: "$2B - $10B Valuation",
            desc: "The sweet spot for growth with manageable risk.",
            coverage: ["Emerging sector leaders", "Regional banks", "Growth tech companies", "Consumer discretionary"],
            stats: { freq: "2-4/week", vol: "Higher (12-25%)" },
            color: "text-secondary"
        },
        {
            title: "Small-Cap Stocks",
            subtitle: "$300M - $2B Valuation",
            desc: "High-growth potential with higher risk/reward.",
            coverage: ["Russell 2000 components", "Biotech innovators", "Technology disruptors", "Sector rotation plays"],
            stats: { freq: "1-2/week", vol: "Highest (20-50%)" },
            color: "text-success"
        }
    ];

    const sectors = [
        { name: "Technology", icon: Server, examples: "NVDA, MSFT, CRM, PLTR" },
        { name: "Healthcare", icon: HeartPulse, examples: "JNJ, ABBV, MRNA, ISRG" },
        { name: "Financial", icon: DollarSign, examples: "JPM, BAC, GS, V" },
        { name: "Consumer", icon: ShoppingBag, examples: "AMZN, TSLA, NKE, SBUX" },
        { name: "Energy", icon: Zap, examples: "XOM, CVX, NEE, ENPH" },
        { name: "Industrial", icon: Factory, examples: "BA, CAT, UPS, LMT" },
        { name: "Communication", icon: Smartphone, examples: "META, GOOGL, NFLX" },
        { name: "Materials", icon: Box, examples: "FCX, NUE, LIN, APD" }
    ];

    return (
        <Section className="py-24 bg-background border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Comprehensive Market Coverage</h2>
                    <p className="text-text-secondary text-lg">We monitor every corner of the market to find opportunities, from stable blue-chips to explosive small-caps.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {marketCaps.map((cap, i) => (
                        <GlassCard key={i} className="p-8 hoverEffect">
                            <h3 className={`text-2xl font-black ${cap.color} mb-1`}>{cap.title}</h3>
                            <div className="text-sm font-bold text-white mb-4 opacity-80">{cap.subtitle}</div>
                            <p className="text-text-secondary text-sm mb-6">{cap.desc}</p>

                            <div className="space-y-4 mb-8">
                                <div className="text-xs font-black text-text-muted uppercase tracking-widest">Coverage Includes:</div>
                                <ul className="space-y-2">
                                    {cap.coverage.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-white font-medium">
                                            <div className={`w-1.5 h-1.5 rounded-full ${cap.color === 'text-primary' ? 'bg-primary' : cap.color === 'text-secondary' ? 'bg-secondary' : 'bg-success'}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                <div>
                                    <div className="text-[10px] text-text-muted font-bold uppercase">Frequency</div>
                                    <div className="text-white font-bold">{cap.stats.freq}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-text-muted font-bold uppercase">Volatility</div>
                                    <div className="text-white font-bold">{cap.stats.vol}</div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {sectors.map((sector, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <sector.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="font-bold text-white">{sector.name}</div>
                            </div>
                            <div className="text-xs text-text-muted pl-14">{sector.examples}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default MarketsAndSectors;
