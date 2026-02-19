import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, CheckCircle2, XCircle, BarChart3, Target, PieChart } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Section from '../../components/ui/Section';
import GradientText from '../../components/ui/GradientText';

const PerformancePage = () => {
    const mainStats = [
        { label: "Total Signals Sent", value: "187", icon: <BarChart3 className="text-primary" /> },
        { label: "Winning Trades", value: "146", icon: <CheckCircle2 className="text-emerald-500" /> },
        { label: "Losing Trades", value: "41", icon: <XCircle className="text-red-500" /> },
        { label: "Win Rate", value: "78.1%", icon: <Target className="text-secondary" /> }
    ];

    const detailedStats = [
        { label: "Average Gain (Winners)", value: "+23.4%", color: "text-emerald-500" },
        { label: "Average Loss (Losers)", value: "-8.2%", color: "text-red-500" },
        { label: "Best Single Trade", value: "+247%", color: "text-primary", sub: "NVDA Call Option" }
    ];

    const categoryStats = [
        {
            category: "Options Signals",
            winRate: "76%",
            avgReturn: "+31%",
            total: "89",
            icon: <PieChart className="text-primary" />
        },
        {
            category: "Stock Signals",
            winRate: "81%",
            avgReturn: "+18%",
            total: "64",
            icon: <BarChart3 className="text-emerald-500" />
        },
        {
            category: "Crypto Signals",
            winRate: "74%",
            avgReturn: "+26%",
            total: "34",
            icon: <TrendingUp className="text-secondary" />
        }
    ];

    return (
        <div className="min-h-screen bg-[#030014] text-white">
            <Helmet>
                <title>Performance Track Record | InterNative Traders</title>
                <meta name="description" content="View our verified trading performance track record. Monthly win rates, typical returns, and historical data for options, stocks, and crypto signals." />
            </Helmet>

            <Section className="pt-32 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        Verified <GradientText>Performance</GradientText>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-16">
                        Transparency you can trust. We track every signal we send. Here's our performance across all signal types from the last 30 days.
                    </p>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {mainStats.map((stat, idx) => (
                            <GlassCard key={idx} className="p-8 text-center" hoverEffect>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">{stat.label}</div>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Detailed Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {detailedStats.map((stat, idx) => (
                            <div key={idx} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                                <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
                                <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
                                {stat.sub && <div className="text-sm text-text-secondary">{stat.sub}</div>}
                            </div>
                        ))}
                    </div>

                    {/* Category Breakdown */}
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-black mb-12 text-left">Breakdown by Asset Class</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {categoryStats.map((cat, idx) => (
                                <GlassCard key={idx} className="p-8 text-left h-full border-t-4 border-t-primary" hoverEffect>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                            <span className="text-text-secondary font-medium">Win Rate</span>
                                            <span className="text-emerald-500 font-black">{cat.winRate}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                            <span className="text-text-secondary font-medium">Avg Return</span>
                                            <span className="text-primary font-black">{cat.avgReturn}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                            <span className="text-text-secondary font-medium">Total Signals</span>
                                            <span className="text-white font-black">{cat.total}</span>
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Verification Note */}
                    <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto text-sm text-text-secondary leading-relaxed">
                        <strong className="text-white block mb-2 uppercase tracking-widest text-xs">Verification Note:</strong>
                        All performance data is independently verified and updated daily. Past performance is not indicative of future results. Individual results may vary based on execution, position sizing, and risk management. We prioritize transparency and list both winning and losing trades in our complete history.
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default PerformancePage;
