import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const PerformanceDashboard = () => {
    const mainStats = [
        { label: "Win Rate", value: "82.0%", color: "text-primary" },
        { label: "Total Signals", value: "89", color: "text-white" },
        { label: "Avg Winner", value: "+94.3%", color: "text-green-400" },
        { label: "Avg Loser", value: "-38.2%", color: "text-red-400" }
    ];

    const typeBreakdown = [
        { type: "Lotto Options", count: 28, win: "64%", avg: "+187%" },
        { type: "Swing Options", count: 37, win: "86%", avg: "+76%" },
        { type: "Index Options", count: 24, win: "83%", avg: "+72%" }
    ];

    const topTrades = [
        { t: "NVDA $500 Call (1DTE)", r: "+347%", d: "8 hours" },
        { t: "SPY $467 Put (3DTE)", r: "+224%", d: "2 days" },
        { t: "TSLA $425 Call (2DTE)", r: "+198%", d: "6 hours" },
        { t: "QQQ $410 Call (7DTE)", r: "+167%", d: "3 days" },
        { t: "AAPL $190 Call (14DTE)", r: "+142%", d: "5 days" },
        { t: "AMD $145 Put (5DTE)", r: "+129%", d: "2 days" },
        { t: "META $390 Call (21DTE)", r: "+118%", d: "9 days" },
        { t: "MSFT $380 Call (10DTE)", r: "+107%", d: "4 days" },
        { t: "IWM $217 Put (7DTE)", r: "+94%", d: "3 days" },
        { t: "GOOGL $145 Call (28DTE)", r: "+87%", d: "11 days" }
    ];

    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Real Results. <span className="text-gradient">Full Transparency.</span></h2>
                    <p className="text-text-secondary">Last 90 Days Performance: October - December 2025</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {mainStats.map((stat, i) => (
                        <GlassCard key={i} className="p-6 text-center">
                            <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">{stat.label}</div>
                            <div className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</div>
                        </GlassCard>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Breakdown Table */}
                    <GlassCard className="lg:col-span-1 p-8 rounded-3xl">
                        <h3 className="text-xl font-bold text-white mb-6">Performance by Type</h3>
                        <div className="space-y-4">
                            {typeBreakdown.map((row, i) => (
                                <div key={i} className="flex flex-col gap-2 pb-4 border-b border-white/5 last:border-0">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-white">{row.type}</span>
                                        <span className="text-xs text-text-muted">{row.count} Signals</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Win Rate: <span className="text-primary">{row.win}</span></span>
                                        <span className="text-text-secondary">Avg: <span className="text-green-400">{row.avg}</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Top 10 Trades */}
                    <GlassCard className="lg:col-span-2 p-8 rounded-3xl overflow-hidden">
                        <h3 className="text-xl font-bold text-white mb-6">Top 10 Winning Trades (Dec 2025)</h3>
                        <div className="overflow-x-auto -mx-8 px-8">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-text-muted">
                                        <th className="pb-4">Ticker & Setup</th>
                                        <th className="pb-4">Result</th>
                                        <th className="pb-4 hidden sm:table-cell">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {topTrades.map((trade, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0 group">
                                            <td className="py-4 font-medium text-white group-hover:text-primary transition-colors">{trade.t}</td>
                                            <td className="py-4 font-bold text-green-400">{trade.r}</td>
                                            <td className="py-4 text-text-muted hidden sm:table-cell">{trade.d}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default PerformanceDashboard;
