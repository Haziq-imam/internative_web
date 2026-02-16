import React from 'react';
import { Search, Filter, Layers, Clock } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const MomentumScanning = () => {
    const filters = [
        {
            category: "Price & Liquidity",
            criteria: [
                { label: "Price", value: "$10.00+", desc: "Avoid penny stocks" },
                { label: "Volume (Current)", value: "> 200k", desc: "Before 10:00 AM" },
                { label: "Volume (Rel)", value: "> 2.0x", desc: "Double avg volume" },
                { label: "Avg Volume", value: "> 1M", desc: "Daily liquidity" }
            ]
        },
        {
            category: "Momentum Strength",
            criteria: [
                { label: "Performance", value: "+4% to +15%", desc: "Wait for the move" },
                { label: "RSI (14)", value: "> 60", desc: "Entering strength zone" },
                { label: "High/Low", value: "Near HOD", desc: "Within 5% of High" },
                { label: "News", value: "Required", desc: "Catalyst confirmation" }
            ]
        }
    ];

    const platforms = [
        {
            name: "Trade Ideas",
            type: "AI Scanner",
            desc: "Best for real-time gap and momentum alerts. 'Holly' AI visualizes setups.",
            cost: "$$$"
        },
        {
            name: "ThinkorSwim",
            type: "Broker Platform",
            desc: "Powerful free scanning for TD Ameritrade clients. Custom thinkScript scans.",
            cost: "Free"
        },
        {
            name: "Finviz Elite",
            type: "Web Screener",
            desc: "Excellent visual charts for end-of-day or pre-market scanning.",
            cost: "$$"
        },
        {
            name: "TC2000",
            type: "Charting Software",
            desc: "Fastest manual chart flipping with built-in scanning capabilities.",
            cost: "$$"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Finding <GradientText>Momentum</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        You can't trade what you can't find. Professional traders use specific scanner criteria to filter thousands of stocks down to the 3-5 best opportunities each morning.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Filter Criteria */}
                    <GlassCard className="p-8 border-blue-500/20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                                <Filter className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-black text-white">Scanner Criteria</h3>
                        </div>

                        <div className="space-y-8">
                            {filters.map((filter, index) => (
                                <div key={index}>
                                    <h4 className="text-sm font-black text-blue-300 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">{filter.category}</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {filter.criteria.map((crit, i) => (
                                            <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                                <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{crit.label}</div>
                                                <div className="text-lg font-black text-white mb-1">{crit.value}</div>
                                                <div className="text-xs text-text-secondary">{crit.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Platforms & Timing */}
                    <div className="space-y-6">
                        <GlassCard className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
                                    <Layers className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-black text-white">Top Scanners</h3>
                            </div>
                            <div className="space-y-4">
                                {platforms.map((plat, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors group">
                                        <div>
                                            <div className="font-bold text-white group-hover:text-purple-400 transition-colors">{plat.name}</div>
                                            <div className="text-xs text-text-secondary">{plat.desc}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-bold text-text-muted bg-white/5 px-2 py-1 rounded border border-white/10">{plat.type}</div>
                                            <div className="text-[10px] text-purple-300 mt-1">{plat.cost}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard className="p-6 bg-blue-900/10 border-blue-500/20">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black text-white mb-2">Best Scan Times (EST)</h4>
                                    <ul className="space-y-2 text-sm text-text-secondary">
                                        <li><span className="text-blue-300 font-bold">8:30 - 9:15 AM:</span> Pre-market Gappers & News</li>
                                        <li><span className="text-blue-300 font-bold">9:45 - 10:15 AM:</span> Trend Confirmation / Breakouts</li>
                                        <li><span className="text-blue-300 font-bold">3:30 - 4:00 PM:</span> Close Momentum / Swing Entries</li>
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MomentumScanning;
