import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const PerformanceStats = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Proven Performance</h2>
                    <p className="text-text-secondary text-lg">Real results from real market conditions. Transparency is our core value.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Win Rate", value: "81.4%", sub: "Last 90 Days" },
                        { label: "Avg Gain", value: "+18.2%", sub: "Per Winner" },
                        { label: "Profit Factor", value: "3.24", sub: "Risk Adjusted" },
                        { label: "Accounts", value: "2,500+", sub: "Active Traders" },
                    ].map((stat, i) => (
                        <GlassCard key={i} className="p-6 text-center">
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
                            <div className="text-[10px] text-primary mt-1 font-bold uppercase">{stat.sub}</div>
                        </GlassCard>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <GlassCard className="p-8">
                        <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Recent Winners Pipeline</h4>
                        <div className="space-y-4 text-sm">
                            {[
                                { stock: "NVDA", gain: "+124.6%", type: "October Breakout" },
                                { stock: "TSLA", gain: "+38.4%", type: "Momentum Swing" },
                                { stock: "AAPL", gain: "+12.8%", type: "Support Bounce" },
                                { stock: "META", gain: "+24.2%", type: "Earnings Play" },
                                { stock: "AMD", gain: "+19.7%", type: "Sector Rotation" },
                            ].map((w, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-black text-white">{w.stock}</div>
                                        <div>
                                            <div className="font-bold text-white">{w.stock} Signal</div>
                                            <div className="text-[10px] text-text-muted">{w.type}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-success font-black text-lg">{w.gain}</div>
                                        <div className="text-[10px] text-text-muted">Return on Entry</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                    <GlassCard className="p-8 border-primary/20 bg-primary/5">
                        <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Portfolio Growth Simulation</h4>
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="text-5xl font-black text-white mb-2">+$18,420</div>
                                <div className="text-xs text-text-muted font-bold uppercase tracking-widest">Calculated Profit ($50k test account)</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-black/20 text-center">
                                <div className="text-sm font-bold text-text-secondary">Based on trading 5 signals per week with 8% max position size per trade.</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <div className="text-xl font-black text-white">4.2:1</div>
                                    <div className="text-[10px] text-text-muted font-bold uppercase">Avg Reward:Risk</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <div className="text-xl font-black text-white">12.4%</div>
                                    <div className="text-[10px] text-text-muted font-bold uppercase">Account Growth/Mo</div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                <div className="text-center">
                    <Button size="lg" className="shadow-neon">View Full Performance History →</Button>
                </div>
            </div>
        </Section>
    );
};

export default PerformanceStats;
