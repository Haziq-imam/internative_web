import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const SignalBreakdown = () => {
    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10" />
                        <GlassCard className="p-0 overflow-hidden rounded-3xl border-primary/20 shadow-neon">
                            <div className="bg-primary p-4 flex justify-between items-center">
                                <span className="font-black text-black uppercase tracking-widest text-sm flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" /> New Signal
                                </span>
                                <span className="text-black font-bold text-xs">Just Now</span>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-3xl font-black text-white">TSLA CALL OPTION</h3>
                                        <div className="flex gap-2 mt-2">
                                            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">Day Trade Lotto</span>
                                            <span className="px-2 py-1 rounded bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">High Risk</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-text-muted">Win Prob</div>
                                        <div className="text-xl font-bold text-green-400">68%</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-3 rounded-lg">
                                        <div className="text-xs text-text-muted">Setup</div>
                                        <div className="text-white font-bold">Buy To Open</div>
                                        <div className="text-white text-sm">Strike: $420</div>
                                        <div className="text-white text-sm">Exp: 24 Jan (3 DTE)</div>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-lg">
                                        <div className="text-xs text-text-muted">Entry Zone</div>
                                        <div className="text-primary font-bold text-lg">$3.20 - $3.50</div>
                                        <div className="text-text-secondary text-xs">Risk: $350/contract</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">TP1 (50%)</span>
                                        <span className="text-green-400 font-bold">$5.80 (+66%)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">TP2 (30%)</span>
                                        <span className="text-green-400 font-bold">$8.40 (+140%)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">TP3 (Runners)</span>
                                        <span className="text-green-400 font-bold">$12.00 (+243%)</span>
                                    </div>
                                    <div className="w-full h-px bg-white/10 my-2" />
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Stop Loss</span>
                                        <span className="text-red-400 font-bold">$2.10 (-40%)</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-4 rounded-xl text-sm italic text-text-muted border-l-2 border-primary">
                                    "TSLA breaking above $405 resistance with strong volume. Expecting 8-12% move to $440 zone."
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Complete Signals From <br /><span className="text-gradient">Entry to Exit.</span></h2>
                    <p className="text-xl text-text-secondary mb-8">Each signal is a complete trading plan. No guesswork, no ambiguity. Just clear instructions to execute with confidence.</p>

                    <div className="space-y-4">
                        {[
                            { title: "Entry Strategy", desc: "Optimal timing windows, price ranges, and position sizing." },
                            { title: "Exit Plan", desc: "Three clear profit targets and trailing stop instructions." },
                            { title: "Risk Metrics", desc: "Win probability, risk-to-reward ratio, and max loss defined." },
                            { title: "Trade Analysis", desc: "The 'Why' behind every trade including Greeks & volatility." },
                            { title: "Real-Time Updates", desc: "Live notifications for target hits, stops, and adjustments." }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                                    <CheckCircle size={14} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{feature.title}</h4>
                                    <p className="text-text-secondary text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SignalBreakdown;
