import React from 'react';
import { Monitor, Cpu, Search, Wifi } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const DayTradingTools = () => {
    const categories = [
        {
            icon: Monitor,
            title: "Trading Platforms",
            desc: "Execution Speed is Critical",
            items: [
                { name: "DAS Trader Pro", type: "Direct Access", cost: "$150/mo", note: "Gold standard for speed" },
                { name: "Thinkorswim", type: "Broker Platform", cost: "Free", note: "Good charts, slower fills" },
                { name: "Lightspeed", type: "Direct Access", cost: "$100/mo", note: "Low latency execution" }
            ]
        },
        {
            icon: Search,
            title: "Stock Scanners",
            desc: "Find Moves Before They Happen",
            items: [
                { name: "Trade Ideas", type: "AI Scanner", cost: "$100-200/mo", note: "Real-time momentum alerts" },
                { name: "Finviz Elite", type: "Web Screener", cost: "$30/mo", note: "Great pre-market visualizations" },
                { name: "Benzinga Pro", type: "News Feed", cost: "$100+/mo", note: "Fastest news squawk" }
            ]
        },
        {
            icon: Wifi,
            title: "Data Feeds",
            desc: "Level 2 & Time/Sales",
            items: [
                { name: "Level 2 Data", type: "Market Depth", cost: "$10-50/mo", note: "See hidden liquidity" },
                { name: "TotalView", type: "Full Book", cost: "$15/mo", note: "Complete order book visibility" },
                { name: "News Squawk", type: "Audio Feed", cost: "Var", note: "Listen to news as it breaks" }
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Professional <GradientText>Tools</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        You are competing against algorithms and institutions. Free phone apps are not enough. Speed, data, and precision are your edges.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <GlassCard key={index} className="p-8 border-blue-500/10 hover:border-blue-500/30 transition-colors h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white">{cat.title}</h3>
                                        <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">{cat.desc}</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-bold text-white">{item.name}</span>
                                                <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-text-muted">{item.type}</span>
                                            </div>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-xs text-text-secondary">{item.note}</span>
                                                <span className="text-xs font-mono text-blue-300">{item.cost}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default DayTradingTools;
