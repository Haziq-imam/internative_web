import React, { useState } from 'react';
import { ArrowRight, Dices, BarChart3, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const SignalTabs = () => {
    const [activeTab, setActiveTab] = useState('lotto');

    const recentWins = {
        lotto: [
            { ticker: "NVDA", type: "Call", move: "+347%", time: "8 hours" },
            { ticker: "SPY", type: "Put", move: "+182%", time: "2 hours" },
            { ticker: "TSLA", type: "Call", move: "+224%", time: "1 day" }
        ],
        swing: [
            { ticker: "AAPL", type: "Call", move: "+127%", time: "12 days" },
            { ticker: "QQQ", type: "Put", move: "+94%", time: "8 days" },
            { ticker: "AMD", type: "Call", move: "+156%", time: "15 days" }
        ],
        index: [
            { ticker: "SPY", type: "Call", move: "+112%", time: "3 days" },
            { ticker: "QQQ", type: "Put", move: "+89%", time: "2 days" },
            { ticker: "IWM", type: "Call", move: "+67%", time: "6 days" }
        ]
    };

    const tabContent = {
        lotto: {
            badge: "High Risk · Massive Reward",
            title: "Lotto Signals",
            icon: Dices,
            desc: "Short-dated options (0-3 DTE) on high-volatility stocks. Calculated gambles with potential for 100%-500%+ returns in hours.",
            stats: { winRate: "64%", avgWinner: "+156%", freq: "2-3 / week" }
        },
        swing: {
            badge: "Medium Term · Consistent",
            title: "Swing Options",
            icon: BarChart3,
            desc: "Options with 2-6 weeks until expiration. Designed to capture multi-day trends. Perfect for traders who can't watch the screen all day.",
            stats: { winRate: "79%", avgWinner: "+87%", freq: "3-4 / week" }
        },
        index: {
            badge: "Macro Trends · High Liquidity",
            title: "Index Options",
            icon: TrendingUp,
            desc: "Trade the major indices (SPX, SPY, QQQ). Highly liquid, lower individual stock risk, excellent for directional market plays.",
            stats: { winRate: "76%", avgWinner: "+68%", freq: "4-5 / week" }
        }
    };

    return (
        <Section className="py-24 bg-background-secondary/30 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-6">Three Signal Types for <span className="text-gradient">Every Style</span></h2>
                </div>

                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {['lotto', 'swing', 'index'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === tab
                                ? 'bg-primary text-black shadow-neon'
                                : 'bg-white/5 text-text-secondary hover:bg-white/10'
                                }`}
                        >
                            {tab} Signals
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <GlassCard className="p-8 md:p-12 rounded-3xl">
                        <div className="grid md:grid-cols-2 gap-12 animate-fadeIn">
                            <div>
                                <div className="text-sm font-black text-primary uppercase tracking-widest mb-2">{tabContent[activeTab].badge}</div>
                                <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-2">
                                    {React.createElement(tabContent[activeTab].icon, { className: "w-8 h-8 text-primary" })}
                                    {tabContent[activeTab].title}
                                </h3>
                                <p className="text-text-secondary mb-6 text-lg">
                                    {tabContent[activeTab].desc}
                                </p>
                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-text-muted">Win Rate</span>
                                        <span className="text-white font-bold">{tabContent[activeTab].stats.winRate}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-text-muted">Avg Winner</span>
                                        <span className="text-green-400 font-bold">{tabContent[activeTab].stats.avgWinner}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-text-muted">Frequency</span>
                                        <span className="text-white font-bold">{tabContent[activeTab].stats.freq}</span>
                                    </div>
                                </div>
                                <Button className="w-full group">Get {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Signals <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-white mb-4">Recent {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Wins</h4>
                                {recentWins[activeTab].map((win, idx) => (
                                    <div key={idx} className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
                                        <div>
                                            <div className="font-bold text-white">{win.ticker} {win.type}</div>
                                            <div className="text-xs text-text-muted">{win.time} hold</div>
                                        </div>
                                        <div className="text-xl font-bold text-primary">{win.move}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default SignalTabs;
