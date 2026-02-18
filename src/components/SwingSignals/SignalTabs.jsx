import React, { useState } from 'react';
import { BarChart2, Zap, ArrowRight, Bitcoin, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const SignalTabs = () => {
    const [activeTab, setActiveTab] = useState('stocks');

    const tabs = [
        { id: 'stocks', label: 'Stocks', icon: BarChart2 },
        { id: 'options', label: 'Options', icon: Zap },
        { id: 'crypto', label: 'Crypto', icon: Bitcoin },
        { id: 'futures', label: 'Futures', icon: TrendingUp },
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Swing Signals Across Four Asset Classes</h2>
                    <p className="text-text-secondary text-lg">Diversified Opportunities for Every Market Condition</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-neon scale-105'
                                : 'bg-white/5 border border-white/10 text-text-muted hover:text-white hover:border-white/30'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label} Swing Signals
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
                    {activeTab === 'stocks' && (
                        <GlassCard className="p-8 md:p-12 rounded-[2.5rem] border-white/10 bg-[#0A051A]/80">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">Consistent Gains</div>
                                    <h3 className="text-3xl font-black text-white">Stock Swing Signals</h3>
                                    <p className="text-text-secondary leading-relaxed font-medium">Holding individual stocks for 3-21 days to capture intermediate trends. Lower stress than day trading, higher returns than buy-and-hold. Perfect for part-time traders.</p>

                                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Ideal For:</h5>
                                            <ul className="space-y-2 text-sm text-text-muted font-medium">
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Traders with full-time jobs</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Building wealth gradually</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Anyone under $25k account</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Recent Wins:</h5>
                                            <ul className="space-y-2 text-sm font-bold">
                                                <li className="text-success">NVDA Breakout: +28.4%</li>
                                                <li className="text-success">TSLA Momentum: +23.8%</li>
                                                <li className="text-success">META Reversal: +19.2%</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Button className="w-full md:w-auto shadow-neon">Get Stock Swing Signals →</Button>
                                </div>
                                <div className="lg:w-80 space-y-4">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">81%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Win Rate</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">+19.3%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Average Winner</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                                        <div className="text-sm font-black text-white mb-1">Frequency</div>
                                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest">1-2 signals/week</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    )}
                    {activeTab === 'options' && (
                        <GlassCard className="p-8 md:p-12 rounded-[2.5rem] border-white/10 bg-[#0A051A]/80">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">Leveraged Alpha</div>
                                    <h3 className="text-3xl font-black text-white">Options Swing Signals</h3>
                                    <p className="text-text-secondary leading-relaxed font-medium">Buying call or put options with 2-6 weeks until expiration, held for 5-21 days. More time than lottos (less decay), more leverage than stocks, better returns.</p>

                                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Ideal For:</h5>
                                            <ul className="space-y-2 text-sm text-text-muted font-medium">
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Traders wanting leverage</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Seeking 50-150% returns</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Moderate risk tolerance</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Recent Wins:</h5>
                                            <ul className="space-y-2 text-sm font-bold">
                                                <li className="text-success">AAPL $185 Call: +127%</li>
                                                <li className="text-success">AMD $140 Call: +156%</li>
                                                <li className="text-success">SPY $465 Put: +94%</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Button className="w-full md:w-auto shadow-neon">Get Options Swing Signals →</Button>
                                </div>
                                <div className="lg:w-80 space-y-4">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">76%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Win Rate</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">+89.7%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Average Winner</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                                        <div className="text-sm font-black text-white mb-1">Hold Time</div>
                                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest">9.7 Days Average</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    )}
                    {activeTab === 'crypto' && (
                        <GlassCard className="p-8 md:p-12 rounded-[2.5rem] border-white/10 bg-[#0A051A]/80">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">24/7 Gains</div>
                                    <h3 className="text-3xl font-black text-white">Crypto Swing Signals</h3>
                                    <p className="text-text-secondary leading-relaxed font-medium">Holding Bitcoin, Ethereum, or altcoins for 5-21 days to capture crypto volatility. 24/7 markets mean weekend opportunities.</p>

                                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Ideal For:</h5>
                                            <ul className="space-y-2 text-sm text-text-muted font-medium">
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Crypto enthusiasts</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Weekend traders</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Seeking 20-80% returns</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Recent Wins:</h5>
                                            <ul className="space-y-2 text-sm font-bold">
                                                <li className="text-success">Solana (SOL): +67.3%</li>
                                                <li className="text-success">Cardano (ADA): +42.8%</li>
                                                <li className="text-success">Ethereum: +34.7%</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Button className="w-full md:w-auto shadow-neon">Get Crypto Swing Signals →</Button>
                                </div>
                                <div className="lg:w-80 space-y-4">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">74%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Win Rate</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">+38.9%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Average Winner</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                                        <div className="text-sm font-black text-white mb-1">Hold Time</div>
                                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest">12.6 Days Average</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    )}
                    {activeTab === 'futures' && (
                        <GlassCard className="p-8 md:p-12 rounded-[2.5rem] border-white/10 bg-[#0A051A]/80">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">Leveraged Pros</div>
                                    <h3 className="text-3xl font-black text-white">Futures Swing Signals</h3>
                                    <p className="text-text-secondary leading-relaxed font-medium">Holding futures contracts for 2-10 days to capture intermediate trends with built-in leverage. Indices, commodities, currencies.</p>

                                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Ideal For:</h5>
                                            <ul className="space-y-2 text-sm text-text-muted font-medium">
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> $15k+ account size</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Comfortable with leverage</li>
                                                <li className="flex items-center gap-2 lg:whitespace-nowrap"><ArrowRight className="w-3 h-3 text-primary" /> Macro trend followers</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-sm mb-3 underline decoration-primary underline-offset-4">Recent Wins:</h5>
                                            <ul className="space-y-2 text-sm font-bold">
                                                <li className="text-success">/GC Gold: +$8,400</li>
                                                <li className="text-success">/NQ Nasdaq: +$7,740</li>
                                                <li className="text-success">/CL Oil: +$5,600</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Button className="w-full md:w-auto shadow-neon">Get Futures Swing Signals →</Button>
                                </div>
                                <div className="lg:w-80 space-y-4">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">73%</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Win Rate</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="text-4xl font-black text-white mb-1">+$3,240</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Avg Winner</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                                        <div className="text-sm font-black text-white mb-1">Hold Time</div>
                                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest">5.8 Days Average</div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default SignalTabs;
