import React from 'react';
import { CheckCircle2, Bell, Zap, BarChart3, DollarSign, Target, Shield, TrendingUp, Clock } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const SignalBreakdown = () => {
    const features = [
        { t: "Entry Flexibility", d: "Entry ZONE, not single price (you have flexibility). 1-3 day entry window (no rush, no FOMO). Morning, lunch, or closing - your schedule works." },
        { t: "Hold Duration Guidance", d: "Expected 3-21 day hold (typically 7-14 days). Target-based exits. Earnings dates checked (avoid during holds)." },
        { t: "Position Sizing", d: "Percentage of portfolio recommended (5-15%). Dollar amount examples and number of shares/contracts suggested." },
        { t: "Multi-Target Exit Plan", d: "TP1 (40%) to lock in early profit, TP2 (40%) to capture bulk of move, TP3 (20%) to let winners run. Removes emotion." },
        { t: "Stop-Loss Protection", d: "Hard stop price OR mental stop (your choice). Placed below key technical levels. Sized for swing volatility." },
        { t: "Technical AND Fundamental", d: "Chart patterns (flags, triangles, breakouts) PLUS fundamental catalysts (earnings, news, upgrades). Dual confirmation." },
        { t: "Real-Time Management", d: "Entry confirmation alerts, target hit notifications, stop-loss adjustments, and news-based early exit recommendations." }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Complete Swing Trading Signals</h2>
                    <p className="text-text-secondary text-lg">Each swing signal is a complete trade plan designed for 3-21 day holds. Clear entry windows, realistic profit targets, protective stop-losses, and position management guidance - everything you need to execute and walk away with confidence.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Interactive Signal Card */}
                    <GlassCard className="p-0 overflow-hidden border-primary/20 shadow-neon">
                        {/* Header */}
                        <div className="p-6 bg-[#0F0924] border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white text-xl font-black shadow-lg shadow-primary/20">
                                    NVDA
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg leading-none flex items-center gap-2"><Bell className="w-5 h-5 text-primary" /> NEW SWING SIGNAL - NVIDIA (NVDA)</h4>
                                    <div className="text-primary text-xs font-black uppercase tracking-wider mt-1">Stock Swing Trade - Momentum Continuation</div>
                                </div>
                            </div>
                        </div>

                        {/* Signal Body */}
                        <div className="p-6 space-y-6 bg-background/50 backdrop-blur-md text-sm">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Risk:</span> <span className="text-white font-bold flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Medium Risk / High Reward</span></div>
                                <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Win Prob:</span> <span className="text-success font-bold">74%</span></div>
                                <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Hold Duration:</span> <span className="text-white font-bold">7-14 Days</span></div>
                                <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Asset Class:</span> <span className="text-white font-bold">Stocks (Large-Cap)</span></div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><BarChart3 className="w-4 h-4" /> SETUP</h5>
                                    <p className="text-text-secondary">Signal: BUY STOCK (Long Position - Swing Hold)<br />Entry Strategy: Accumulate on pullback to support zone</p>
                                </div>
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> ENTRY</h5>
                                    <p className="text-text-secondary">
                                        Entry Zone: <span className="text-white font-bold">$520 - $528</span> (optimal accumulation range)<br />
                                        Ideal Entry: $524 (mid-zone on volume confirmation)<br />
                                        Entry Window: NEXT 2 TRADING DAYS (no rush, wait for zone)<br />
                                        Max Position Size: 10% of portfolio
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><Target className="w-4 h-4" /> PROFIT TARGETS</h5>
                                    <ul className="text-text-secondary space-y-1">
                                        <li>TP1 (40%): <span className="text-success font-bold">$565</span> (+7.8% gain) - SELL 40% OF SHARES</li>
                                        <li>TP2 (40%): <span className="text-success font-bold">$610</span> (+16.4% gain) - SELL 40% OF SHARES</li>
                                        <li>TP3 (20%): <span className="text-success font-bold">$675</span> (+28.8% gain) - TRAIL REMAINING 20%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><Shield className="w-4 h-4" /> RISK MANAGEMENT</h5>
                                    <p className="text-text-secondary">Stop Loss: <span className="text-red-500 font-bold">$498</span> (-5.0% from mid-entry)<br />Risk-to-Reward: 1:3.2 (excellent)<br />Trailing Stop: Activate after TP2, trail -8%</p>
                                </div>
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><TrendingUp className="w-4 h-4" /> TECHNICAL ANALYSIS</h5>
                                    <p className="text-text-secondary text-xs leading-relaxed">NVDA breaking above $518 resistance on daily chart with strong volume (3.2x average). RSI at 64 momentum building. Fibonacci retracement shows $520-528 is 38.2% pullback zone (textbook swing entry).</p>
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg text-center text-[10px] font-bold text-text-muted flex items-center justify-center gap-1.5"><Clock className="w-3 h-3" /> TIMELINE: Entry Window Next 2 days | Expected Hold 7-14 days</div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Features List */}
                    <div>
                        <h3 className="text-2xl font-black text-white mb-8">What Every Swing Signal Includes:</h3>
                        <div className="space-y-6">
                            {features.map((feat, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{feat.t}</h4>
                                        <p className="text-text-secondary text-sm">{feat.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SignalBreakdown;
