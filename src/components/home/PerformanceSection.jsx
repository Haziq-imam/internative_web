import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PerformanceSection = () => {
    return (
        <section className="py-24 bg-background relative" id="performance">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Transparency You Can Trust. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-primary">Results You Can Verify.</span>
                        </h2>
                        <p className="text-lg text-text-secondary">
                            We track every signal we send. Here's our recent performance across all signal types.
                        </p>
                    </div>
                    <Link to="/#performance" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                        View Full Track Record
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Dashboard Stats */}
                <div className="bg-surface border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 divide-x divide-white/5">
                        <div className="px-4">
                            <div className="text-text-muted text-sm mb-1 uppercase tracking-wider">Total Signals</div>
                            <div className="text-4xl font-bold text-white">187</div>
                            <div className="text-xs text-text-secondary mt-1">Last 30 Days</div>
                        </div>
                        <div className="px-4">
                            <div className="text-text-muted text-sm mb-1 uppercase tracking-wider">Win Rate</div>
                            <div className="text-4xl font-bold text-accent-green">78.1%</div>
                            <div className="text-xs text-text-secondary mt-1">Verified</div>
                        </div>
                        <div className="px-4">
                            <div className="text-text-muted text-sm mb-1 uppercase tracking-wider">Avg Gain</div>
                            <div className="text-4xl font-bold text-accent-green">+23.4%</div>
                            <div className="text-xs text-text-secondary mt-1">Per Winning Trade</div>
                        </div>
                        <div className="px-4">
                            <div className="text-text-muted text-sm mb-1 uppercase tracking-wider">Best Trade</div>
                            <div className="text-4xl font-bold text-accent-gold">+247%</div>
                            <div className="text-xs text-text-secondary mt-1">NVDA Call Option</div>
                        </div>
                    </div>

                    {/* Asset Breakdown */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Options Signals", winRate: "76%", return: "+31%", total: 89, color: "bg-purple-600" },
                            { title: "Stock Signals", winRate: "81%", return: "+18%", total: 64, color: "bg-violet-600" },
                            { title: "Crypto Signals", winRate: "74%", return: "+26%", total: 34, color: "bg-orange-500" }
                        ].map((asset, index) => (
                            <div key={index} className="bg-background rounded-2xl p-6 border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-3 h-3 rounded-full ${asset.color}`} />
                                    <h3 className="font-bold text-white content-center">{asset.title}</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Win Rate</span>
                                        <span className="text-white font-mono">{asset.winRate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Avg Return</span>
                                        <span className="text-accent-green font-mono">{asset.return}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Total Signals</span>
                                        <span className="text-white font-mono">{asset.total}</span>
                                    </div>
                                </div>
                                <div className="mt-4 w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                                    <div className={`h-full ${asset.color}`} style={{ width: asset.winRate }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-text-muted">
                        All performance data is independently verified and updated daily. Past performance does not guarantee future results.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceSection;
