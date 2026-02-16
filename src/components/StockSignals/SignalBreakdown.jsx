import React from 'react';
import { CheckCircle2, Bell, Zap, BarChart3, DollarSign, Target, Shield } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const SignalBreakdown = () => {
    const features = [
        { t: "Exact Entry Points", d: "No guessing. We provide precise entry zones and limit order prices so you know exactly where to buy." },
        { t: "Automated Profit Targets", d: "Every signal includes multiple take-profit levels. Sell 50% at target 1, and trail the rest for maximum gains." },
        { t: "Strict Stop-Loss Protection", d: "Capital preservation is our #1 priority. We provide clear stop-loss levels to exit if the trade goes against us." },
        { t: "Deep Technical Analysis", d: "Every trade is backed by professional chart analysis, including support/resistance, RSI, and volume profile." },
        { t: "Fundamental Catalysts", d: "We align technical setups with fundamental drivers like earnings, product launches, or sector rotation." },
        { t: "Real-Time Management", d: "We alert you when to move stops to breakeven, when to take partial profits, and when to exit early if conditions change." }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Complete Stock Signals From Research to Profit</h2>
                    <p className="text-text-secondary text-lg">Each signal is a fully researched trade idea delivered instantly. No missing pieces, no ambiguity. Just clear instructions to execute and profit.</p>
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
                                    <h4 className="text-white font-bold text-lg leading-none flex items-center gap-2"><Bell className="w-5 h-5 text-primary" /> NEW SIGNAL - NVIDIA (NVDA)</h4>
                                    <div className="text-primary text-xs font-black uppercase tracking-wider mt-1">Swing Trade - Momentum Breakout</div>
                                </div>
                            </div>
                        </div>

                        {/* Signal Body */}
                        <div className="p-6 space-y-6 bg-background/50 backdrop-blur-md text-sm">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Risk:</span> <span className="text-white font-bold flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Medium Risk / High Reward</span></div>
                                <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Win Prob:</span> <span className="text-success font-bold">74%</span></div>
                                <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Sector:</span> <span className="text-white font-bold">Technology - Semiconductors</span></div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><BarChart3 className="w-4 h-4" /> SETUP</h5>
                                    <p className="text-text-secondary">Signal: BUY (Long Position)<br />Entry Strategy: Breakout confirmation above resistance</p>
                                </div>
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> ENTRY</h5>
                                    <p className="text-text-secondary">
                                        Entry Zone: <span className="text-white font-bold">$520 - $528</span> (optimal accumulation range)<br />
                                        Ideal Entry: $524 (mid-zone on volume confirmation)<br />
                                        Max Position Size: 8% of portfolio<br />
                                        Stop Loss Zone: <span className="text-red-500 font-bold">$498</span> (-5.0% from mid-entry)
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><Target className="w-4 h-4" /> PROFIT TARGETS</h5>
                                    <ul className="text-text-secondary space-y-1">
                                        <li>TP1 (40%): <span className="text-success font-bold">$565</span> (+7.8% gain) - SELL 40% OF POSITION</li>
                                        <li>TP2 (40%): <span className="text-success font-bold">$610</span> (+16.4% gain) - SELL 40% OF POSITION</li>
                                        <li>TP3 (20%): <span className="text-success font-bold">$675</span> (+28.8% gain) - TRAIL REMAINING 20%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-primary font-black uppercase text-xs mb-2 flex items-center gap-1.5"><Shield className="w-4 h-4" /> NOTES</h5>
                                    <p className="text-text-secondary text-xs leading-relaxed italic">Moving stop to breakeven after TP1 is hit. Expecting 2-3 week hold time. NVDA has strong institutional buying support at $515 level.</p>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Features List */}
                    <div>
                        <h3 className="text-2xl font-black text-white mb-8">What Every Signal Includes:</h3>
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
