import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, TrendingUp, Zap, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const LottoOptions = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white">
            <Helmet>
                <title>Lotto Options Trading Signals | InterNative Traders</title>
                <meta name="description" content="High-reward lotto options setups. Learn our strategy for trading small positions for massive gains on high-volatility events." />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,49,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 animate-fade-in">
                        <Zap className="w-4 h-4" />
                        <span>High-Reward Setups</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        Lotto <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Options Signals</span>
                    </h1>
                    <p className="text-text-secondary text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        Master the art of high-asymmetry trading. Our Lotto signals focus on high-reward, low-risk position sizing for explosive market moves.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/pricing">
                            <Button size="lg" variant="glow" className="h-14 px-10 text-lg">Join Now</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Strategy Explanation */}
            <section className="py-24 px-6 bg-[#0A051A]/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Lotto <span className="text-primary">Strategy</span></h2>
                            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                                Lotto options are low-cost, high-reward trades typically taken near expiration or ahead of major catalysts. While these trades have a lower win rate, the payouts can range from 300% to 1,000%+.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Risk Management", desc: "Never allocate more than 1% of your portfolio to a single lotto trade." },
                                    { title: "Catalyst Driven", desc: "We target earnings, FOMC, and major technical breakouts." },
                                    { title: "Precise Timing", desc: "Entry alerts sent exactly when technical convergence occurs." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-text-muted">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 rounded-full"></div>
                            <div className="relative bg-[#0F0821] border border-white/5 p-8 rounded-3xl shadow-2xl">
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                                    <AlertTriangle className="w-8 h-8 text-yellow-500" />
                                    <h3 className="text-xl font-bold">Risk Warning</h3>
                                </div>
                                <p className="text-text-secondary mb-6 italic">
                                    "Lotto trading is speculative. Only trade with capital you are willing to lose entirely."
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl text-center">
                                        <div className="text-sm text-text-muted mb-1">Max Allocation</div>
                                        <div className="text-xl font-bold text-white">0.5 - 1.0%</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl text-center">
                                        <div className="text-sm text-text-muted mb-1">Target ROI</div>
                                        <div className="text-xl font-bold text-primary">300%+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 via-[#0A051A] to-purple-500/10 p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Trade with an Edge?</h2>
                    <p className="text-text-secondary text-lg mb-10">
                        Join 5,000+ traders receiving our real-time lotto signals and setups.
                    </p>
                    <Link to="/pricing">
                        <Button size="lg" variant="glow" className="h-14 px-12">Join InterNative Today</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LottoOptions;
