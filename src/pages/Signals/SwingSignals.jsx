import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, TrendingUp, Clock, BarChart } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Stats from '../../components/ui/Stats';

const SwingSignals = () => {
    return (
        <>
            <Helmet>
                <title>Swing Trading Signals | InterNative</title>
                <meta name="description" content="Catch bigger moves with less screen time. Our swing trading signals are designed for working professionals." />
            </Helmet>

            {/* Hero */}
            <div className="relative pt-48 pb-32 bg-background overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Tactical Swing Alerts
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[1.1] tracking-tighter font-display">
                            Trade Smarter, <br />
                            <span className="text-gradient">Not Harder.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed font-medium max-w-2xl">
                            Capture major market trends with multi-day holds. Perfect for professionals who want institutional results without being glued to screens.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button size="lg" className="px-12 py-5 text-xl shadow-neon">Start Swing Trading</Button>
                            <Button size="lg" variant="outline" className="px-12 py-5 text-xl">Historical Alpha</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <Section className="py-16 border-y border-white/5 bg-background-secondary/30 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <Stats value="3-5" label="Days Avg. Hold" />
                    <Stats value="42" suffix="%" label="Avg. Return" />
                    <Stats value="82" suffix="%" label="Win Rate" />
                    <Stats value="15" label="Min/Day Screen Time" />
                </div>
            </Section>

            {/* Features */}
            <Section className="py-32 lg:py-48 bg-background relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid md:grid-cols-3 gap-10">
                    <GlassCard className="p-10 rounded-[2.5rem]" hoverEffect>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/5 shadow-neon">
                            <Calendar className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Stress-Free Timeline</h3>
                        <p className="text-text-secondary text-lg leading-relaxed font-medium">
                            Positions last days to weeks, eliminating the stress of intraday volatility and terminal-fatigue noise.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-10 rounded-[3rem] border-primary/40 bg-primary/5 shadow-neon relative" hoverEffect>
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-10 border border-primary/30">
                            <TrendingUp className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Trend Catching</h3>
                        <p className="text-text-secondary text-lg leading-relaxed font-medium">
                            We identify major trend reversals and continuations using proprietary institutional order flow models.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-10 rounded-[2.5rem]" hoverEffect>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/5 shadow-neon">
                            <Clock className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Set & Forget</h3>
                        <p className="text-text-secondary text-lg leading-relaxed font-medium">
                            Every signal includes precise institutional entry, stop-loss, and target levels. Enter and let logic play out.
                        </p>
                    </GlassCard>
                </div>
            </Section>

            {/* Recent Performance Table */}
            <Section className="bg-background-secondary/30 py-32 border-t border-white/5 overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Operational Transparency
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight font-display">Recent <br /><span className="text-gradient">Swing Plays.</span></h2>
                </div>

                <GlassCard className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden border-white/10 shadow-neon bg-background/40 backdrop-blur-3xl relative z-10 p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/5">
                                    <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest">Ticker</th>
                                    <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest">Entry Date</th>
                                    <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest">Exit Date</th>
                                    <th className="p-8 text-[10px] font-black text-white/40 uppercase tracking-widest text-right">Return</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { ticker: "NVDA", entry: "Jan 12", exit: "Jan 24", return: "+24.5%" },
                                    { ticker: "TSLA", entry: "Feb 02", exit: "Feb 08", return: "+18.2%" },
                                    { ticker: "AMD", entry: "Feb 15", exit: "Feb 28", return: "+32.1%" },
                                    { ticker: "AMZN", entry: "Mar 01", exit: "Mar 10", return: "+12.4%" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-all duration-300 group">
                                        <td className="p-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary font-black text-lg border border-white/5 group-hover:scale-110 transition-transform">
                                                    {row.ticker[0]}
                                                </div>
                                                <span className="text-2xl font-black text-white">{row.ticker}</span>
                                            </div>
                                        </td>
                                        <td className="p-8 text-lg font-medium text-text-secondary">{row.entry}</td>
                                        <td className="p-8 text-lg font-medium text-text-secondary">{row.exit}</td>
                                        <td className="p-8 text-right">
                                            <span className="text-3xl font-black text-success drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">{row.return}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </Section>
        </>
    );
};

export default SwingSignals;
