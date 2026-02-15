import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const PerformanceDashboard = () => {
    const stats = [
        { label: "Win Rate", value: "79.4%", sub: "Last 90 Days" },
        { label: "Avg Winner", value: "+24.8%", sub: "Total Returns" },
        { label: "Hold Time", value: "9.2", sub: "Days Average" },
        { label: "Largest Win", value: "+127%", sub: "AMD Call Option" },
    ];

    const detailedStats = [
        { type: "Stock Swings", win: "82%", avgW: "+19.3%", avgL: "-6.1%", hold: "8.4 Days" },
        { type: "Options Swings", win: "77%", avgW: "+89.7%", avgL: "-32.4%", hold: "9.7 Days" },
        { type: "Crypto Swings", win: "75%", avgW: "+38.9%", avgL: "-11.2%", hold: "12.6 Days" },
        { type: "Futures Swings", win: "67%", avgW: "+$3,240", avgL: "-$1,180", hold: "5.8 Days" },
    ];

    const recentWins = [
        { t: "AMD $140 Call (15 Days)", p: "+156%" },
        { t: "AAPL $185 Call (12 Days)", p: "+127%" },
        { t: "Solana SOL Crypto (14 Days)", p: "+67.3%" },
        { t: "NVDA Stock Breakout (14 Days)", p: "+28.4%" },
        { t: "SPY $465 Put (8 Days)", p: "+94%" }
    ];

    return (
        <Section className="py-24 relative bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Swing Signals Performance</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <GlassCard key={i} className="p-6 text-center">
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
                            <div className="text-[10px] text-primary mt-1 font-bold uppercase">{stat.sub}</div>
                        </GlassCard>
                    ))}
                </div>

                <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-3xl mb-12">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="p-6 text-[10px] font-black uppercase text-text-muted">Asset Type</th>
                                <th className="p-6 text-[10px] font-black uppercase text-text-muted text-center">Win Rate</th>
                                <th className="p-6 text-[10px] font-black uppercase text-text-muted text-center">Avg Win</th>
                                <th className="p-6 text-[10px] font-black uppercase text-text-muted text-center">Avg Loss</th>
                                <th className="p-6 text-[10px] font-black uppercase text-text-muted text-right">Hold Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm font-medium">
                            {detailedStats.map((row, i) => (
                                <tr key={i} className="hover:bg-white/5">
                                    <td className="p-6 text-white font-bold">{row.type}</td>
                                    <td className="p-6 text-center text-primary font-black">{row.win}</td>
                                    <td className="p-6 text-center text-success font-bold">{row.avgW}</td>
                                    <td className="p-6 text-center text-red-500 font-bold">{row.avgL}</td>
                                    <td className="p-6 text-right text-text-secondary">{row.hold}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard className="p-8">
                        <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Top 5 Recent Wins</h4>
                        <div className="space-y-4">
                            {recentWins.map((w, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                    <span className="text-sm font-bold text-white">{w.t}</span>
                                    <span className="text-lg font-black text-success">{w.p}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                    <GlassCard className="p-8 border-primary/20 bg-primary/5">
                        <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">December 2025 Summary</h4>
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="text-5xl font-black text-white mb-2">+$14,280</div>
                                <div className="text-xs text-text-muted font-bold uppercase tracking-widest">Avg Portfolio Gain ($50k test)</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-black/20 text-center border border-white/5">
                                    <div className="text-xl font-black text-success">89%</div>
                                    <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Stock Win Rate</div>
                                </div>
                                <div className="p-4 rounded-xl bg-black/20 text-center border border-white/5">
                                    <div className="text-xl font-black text-success">71%</div>
                                    <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Options Win Rate</div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" className="shadow-neon">View Full Swing Track Record →</Button>
                </div>
            </div>
        </Section>
    );
};

export default PerformanceDashboard;
