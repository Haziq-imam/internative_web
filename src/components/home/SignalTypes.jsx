import React, { useState } from 'react';
import { ArrowRight, BarChart2, TrendingUp, Bitcoin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignalTypes = () => {
    const [activeTab, setActiveTab] = useState('options');

    const tabs = [
        { id: 'options', label: 'Options Signals', icon: BarChart2 },
        { id: 'stocks', label: 'Stock Signals', icon: TrendingUp },
        { id: 'swing', label: 'Swing Signals', icon: Clock },
    ];

    const content = {
        options: {
            title: "Master the Options Market",
            description: "High-leverage call and put alerts on SPY, QQQ, and top growth stocks. Designed for traders looking for explosive moves and 0DTE opportunities.",
            features: [
                "Strike price and expiration clearly stated",
                "Scalp, Day Trade, and Lotto strategies",
                "Precise stop-loss to limit downside",
                "82% historical win rate"
            ],
            cta: "View Options Signals",
            link: "/signals/options-trading-signals",
            color: "from-primary to-secondary",
            badge: "High Leverage"
        },
        stocks: {
            title: "Precision Picks for Equity Traders",
            description: "Institutional-grade stock picks for momentum breakouts and earnings plays. Zero expiration pressure, pure price action.",
            features: [
                "Exact entry price or zone",
                "Stop-loss below key support levels",
                "Fundamental and technical catalysts",
                "81% success rate on stock alerts"
            ],
            cta: "View Stock Signals",
            link: "/signals/stock-trading-signals",
            color: "from-violet-500 to-fuchsia-600",
            badge: "Consistent Gains"
        },
        swing: {
            title: "The Professional's Sweet Spot",
            description: "Multi-day positions designed for busy professionals. Hold 3-21 days and capture the meat of major market moves without watching screens 24/7.",
            features: [
                "3-21 Day average hold time",
                "79% win rate on swing positions",
                "Perfect for part-time traders",
                "Multi-asset: Stocks, Options, Crypto"
            ],
            cta: "View Swing Trading Signals",
            link: "/signals/swing-trading-signals",
            color: "from-emerald-500 to-teal-600",
            badge: "Time Efficient"
        }
    };

    const activeContent = content[activeTab];

    return (
        <section id="signals" className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        The Complete Trading Toolkit
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Specialized signals for every type of trader. All in your pocket.
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-white text-background shadow-lg scale-105'
                                : 'bg-surface border border-white/10 text-text-secondary hover:text-white hover:border-white/30'
                                }`}
                        >
                            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary' : ''}`} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-surface border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
                        {/* Background Gradient matching active tab */}
                        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${activeContent.color} opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 transition-colors duration-700`} />

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-8">
                                <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-white mb-2 uppercase tracking-wide">
                                    {activeContent.badge}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    {activeContent.title}
                                </h3>
                                <p className="text-text-secondary text-lg leading-relaxed">
                                    {activeContent.description}
                                </p>

                                <ul className="space-y-4">
                                    {activeContent.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-text-muted">
                                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeContent.color}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Link
                                        to={activeContent.link}
                                        className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group"
                                    >
                                        {activeContent.cta}
                                        <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    </Link>
                                </div>
                            </div>

                            {/* Dynamic Visual for Tab */}
                            <div className="flex-1 w-full max-w-sm">
                                <div className="aspect-square rounded-2xl bg-background border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />

                                    {/* Abstract representation of a chart/signal */}
                                    <div className="h-full flex flex-col justify-between relative z-10">
                                        <div className="flex justify-between items-center">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeContent.color} flex items-center justify-center text-white shadow-lg`}>
                                                {activeTab === 'options' && <BarChart2 />}
                                                {activeTab === 'stocks' && <TrendingUp />}
                                                {activeTab === 'swing' && <Clock />}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-text-muted">Profit Potential</div>
                                                <div className="text-xl font-bold text-accent-green">+25-150%</div>
                                            </div>
                                        </div>

                                        {/* Chart Line Animation Placeholder */}
                                        <div className="relative h-32 w-full mt-8">
                                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                                <path
                                                    d="M0,100 Q50,100 80,60 T150,50 T250,20"
                                                    fill="none"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="4"
                                                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#550B77" stopOpacity="0" />
                                                        <stop offset="100%" stopColor="#C026D3" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignalTypes;
