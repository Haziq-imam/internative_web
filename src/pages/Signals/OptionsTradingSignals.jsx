import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Zap, Target, Shield, Clock, AlertTriangle, CheckCircle, BarChart2, Lock, ArrowRight, ChevronDown, ChevronUp, Star, Quote } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import CheckList from '../../components/ui/CheckList';
import Stats from '../../components/ui/Stats';

const OptionsTradingSignals = () => {
    const [activeTab, setActiveTab] = useState('lotto');

    return (
        <>
            <Helmet>
                <title>Options Trading Signals - 82% Win Rate | InterNative Traders</title>
                <meta name="description" content="Get professional options trading signals with precise entry/exit points. Calls, puts, lottos, swings on SPY, QQQ, NVDA, TSLA. 82% win rate. Try free 7 days." />
            </Helmet>

            {/* HERO SECTION */}
            <div className="relative pt-48 pb-20 overflow-hidden bg-background">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-neon">
                                Live Trading Room
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                                Options Trading Signals That Turn <span className="text-gradient">Small Accounts</span> Into Big Wins
                            </h1>
                            <p className="text-xl text-text-secondary mb-8 font-medium leading-relaxed max-w-xl">
                                Get instant alerts for high-probability call and put options on S&P 500, Nasdaq, Dow Jones, and Russell 2000. 10x-50x return potential delivered straight to your phone.
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-md">
                                <div className="grid grid-cols-2 gap-4 text-sm font-medium text-text-secondary">
                                    <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> 82% Win Rate (Last 90 Days)</div>
                                    <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> +247% Best Single Trade</div>
                                    <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> 4-6 Daily Alerts Sent</div>
                                    <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> 30-Sec Delivery Priority</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="px-8 py-4 text-lg shadow-neon group">
                                    Get Options Signals Now
                                    <span className="text-xs font-normal ml-2 opacity-80">(Try Free 7 Days)</span>
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                                    View Performance Report
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Mockup Visual */}
                        <div className="relative">
                            <div className="relative z-10 bg-black border border-white/10 rounded-[3rem] p-4 shadow-2xl max-w-sm mx-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
                                <div className="bg-background-secondary rounded-[2.5rem] overflow-hidden relative">
                                    {/* Mock Notification Header */}
                                    <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white"><TrendingUp size={16} /></div>
                                            <div>
                                                <div className="text-xs text-text-muted">InterNative Alerts</div>
                                                <div className="text-sm font-bold text-white">New Trade Signal</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-text-muted">Now</div>
                                    </div>
                                    {/* Signals List */}
                                    <div className="p-6 space-y-4">
                                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="font-bold text-white flex items-center gap-2">NVDA Call <span className="text-[10px] bg-green-500 text-black px-1.5 py-0.5 rounded font-black">Lotto</span></div>
                                                <div className="text-green-400 font-bold">+185%</div>
                                            </div>
                                            <div className="text-sm text-text-secondary mb-2">Strike: $480 | Exp: 24 Jan</div>
                                            <div className="w-full bg-white/10 rounded-full h-1.5 mb-1">
                                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                            <div className="text-[10px] text-text-muted text-right">Target 2 Hit 🎯</div>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 opacity-60">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="font-bold text-white">SPY Put</div>
                                                <div className="text-white font-bold">Entry</div>
                                            </div>
                                            <div className="text-sm text-text-secondary">Strike: $472 | Exp: 0DTE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAIN POINTS SECTION */}
            <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Why Options Traders Lose Money <br /><span className="text-gradient">(And How We Fix It)</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🤯",
                                title: "Information Overload",
                                problem: "Scanning hundreds of charts, checking unusual activity, analyzing Greeks... by the time you find a setup, it's moved.",
                                solution: "We do the heavy lifting. Our analysts monitor 5,000+ stocks 24/7, alerting you only to the highest-probability setups."
                            },
                            {
                                icon: "⏰",
                                title: "Poor Timing = Dead Options",
                                problem: "Bought too early? Decay kills you. Too late? You overpaid. Options timing is everything.",
                                solution: "Every alert includes optimal entry windows and real-time adjustments. We tell you exactly when to enter."
                            },
                            {
                                icon: "📉",
                                title: "No Risk Management",
                                problem: "One bad trade wipes out five winners. Without clear stops, your account bleeds.",
                                solution: "Every signal includes calculated stop-loss levels and position sizing. We protect your capital first, profits second."
                            }
                        ].map((item, idx) => (
                            <GlassCard key={idx} className="p-8 rounded-3xl h-full flex flex-col" hoverEffect>
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 mb-4 flex-1">
                                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">The Problem</span>
                                    <p className="text-sm text-text-secondary">{item.problem}</p>
                                </div>
                                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 flex-1">
                                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider block mb-2">Our Solution</span>
                                    <p className="text-sm text-text-secondary">{item.solution}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* WHAT YOU GET (SIGNAL BREAKDOWN) */}
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

            {/* TYPES OF SIGNALS (TABS) */}
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
                            {activeTab === 'lotto' && (
                                <div className="grid md:grid-cols-2 gap-12 animate-fadeIn">
                                    <div>
                                        <div className="text-sm font-black text-primary uppercase tracking-widest mb-2">High Risk · Massive Reward</div>
                                        <h3 className="text-3xl font-black text-white mb-6">Lotto Signals 🎰</h3>
                                        <p className="text-text-secondary mb-6 text-lg">
                                            Short-dated options (0-3 DTE) on high-volatility stocks. Calculated gambles with potential for 100%-500%+ returns in hours.
                                        </p>
                                        <div className="space-y-3 mb-8">
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Win Rate</span>
                                                <span className="text-white font-bold">64%</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Avg Winner</span>
                                                <span className="text-green-400 font-bold">+156%</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Frequency</span>
                                                <span className="text-white font-bold">2-3 / week</span>
                                            </div>
                                        </div>
                                        <Button className="w-full group">Get Lotto Signals <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white mb-4">Recent Lotto Wins</h4>
                                        {[
                                            { ticker: "NVDA", type: "Call", move: "+347%", time: "8 hours" },
                                            { ticker: "SPY", type: "Put", move: "+182%", time: "2 hours" },
                                            { ticker: "TSLA", type: "Call", move: "+224%", time: "1 day" }
                                        ].map((win, idx) => (
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
                            )}

                            {activeTab === 'swing' && (
                                <div className="grid md:grid-cols-2 gap-12 animate-fadeIn">
                                    <div>
                                        <div className="text-sm font-black text-primary uppercase tracking-widest mb-2">Medium Term · Consistent</div>
                                        <h3 className="text-3xl font-black text-white mb-6">Swing Options 📊</h3>
                                        <p className="text-text-secondary mb-6 text-lg">
                                            Options with 2-6 weeks until expiration. Designed to capture multi-day trends. Perfect for traders who can't watch the screen all day.
                                        </p>
                                        <div className="space-y-3 mb-8">
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Win Rate</span>
                                                <span className="text-white font-bold">79%</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Avg Winner</span>
                                                <span className="text-green-400 font-bold">+87%</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Frequency</span>
                                                <span className="text-white font-bold">3-4 / week</span>
                                            </div>
                                        </div>
                                        <Button className="w-full group">Get Swing Signals <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white mb-4">Recent Swing Wins</h4>
                                        {[
                                            { ticker: "AAPL", type: "Call", move: "+127%", time: "12 days" },
                                            { ticker: "QQQ", type: "Put", move: "+94%", time: "8 days" },
                                            { ticker: "AMD", type: "Call", move: "+156%", time: "15 days" }
                                        ].map((win, idx) => (
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
                            )}

                            {activeTab === 'index' && (
                                <div className="grid md:grid-cols-2 gap-12 animate-fadeIn">
                                    <div>
                                        <div className="text-sm font-black text-primary uppercase tracking-widest mb-2">Macro Trends · High Liquidity</div>
                                        <h3 className="text-3xl font-black text-white mb-6">Index Options 📈</h3>
                                        <p className="text-text-secondary mb-6 text-lg">
                                            Trade the major indices (SPX, SPY, QQQ). Highly liquid, lower individual stock risk, excellent for directional market plays.
                                        </p>
                                        <div className="space-y-3 mb-8">
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Win Rate</span>
                                                <span className="text-white font-bold">76%</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Avg Winner</span>
                                                <span className="text-green-400 font-bold">+68%</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-text-muted">Frequency</span>
                                                <span className="text-white font-bold">4-5 / week</span>
                                            </div>
                                        </div>
                                        <Button className="w-full group">Get Index Signals <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-white mb-4">Recent Index Wins</h4>
                                        {[
                                            { ticker: "SPY", type: "Call", move: "+112%", time: "3 days" },
                                            { ticker: "QQQ", type: "Put", move: "+89%", time: "2 days" },
                                            { ticker: "IWM", type: "Call", move: "+67%", time: "6 days" }
                                        ].map((win, idx) => (
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
                            )}
                        </GlassCard>
                    </div>
                </div>
            </Section>

            {/* MARKETS WE COVER */}
            <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Options Alerts Across All <br /><span className="text-gradient">Major US Indices</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "S&P 500 (SPX/SPY)",
                                desc: "The benchmark index with 500 largest US companies. Our most liquid and reliable signals.",
                                coverage: ["SPY ETF options (weekly expirations)", "SPX index options (cash-settled)", "Sector-specific opportunities"],
                                freq: "5-7/week",
                                color: "primary"
                            },
                            {
                                title: "Nasdaq 100 (QQQ)",
                                desc: "Tech-heavy index for leveraged growth plays. High volatility = high profit potential.",
                                coverage: ["QQQ ETF options (daily liquidity)", "Tech stock options (AAPL, NVDA, TSLA)", "TQQQ leveraged ETF options"],
                                freq: "4-6/week",
                                color: "blue-500"
                            },
                            {
                                title: "Dow Jones (DIA)",
                                desc: "Blue-chip industrial average for conservative options plays with steady movements.",
                                coverage: ["DIA ETF options", "Dow component stocks (BA, CAT, GS)", "Sector rotation opportunities"],
                                freq: "2-3/week",
                                color: "green-500"
                            },
                            {
                                title: "Russell 2000 (IWM)",
                                desc: "Small-cap index for explosive volatility and momentum trades.",
                                coverage: ["IWM ETF options", "Small-cap breakout opportunities", "High beta individual stocks"],
                                freq: "3-4/week",
                                color: "purple-500"
                            }
                        ].map((m, i) => (
                            <GlassCard key={i} className="p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all group" hoverEffect>
                                <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-primary">{m.title}</h3>
                                <p className="text-sm text-text-secondary mb-6 leading-relaxed">{m.desc}</p>
                                <div className="space-y-2 mb-6">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">Coverage</div>
                                    {m.coverage.map((c, ci) => (
                                        <div key={ci} className="flex items-center gap-2 text-xs text-text-secondary">
                                            <div className="w-1 h-1 rounded-full bg-primary/50" /> {c}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-primary">
                                    <span>Signal Frequency</span>
                                    <span>{m.freq}</span>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* HOW OPTIONS SIGNALS WORK */}
            <Section className="py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">From Alert to Profit in <br /><span className="text-gradient">4 Simple Steps</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />

                        {[
                            {
                                step: "1",
                                title: "We Analyze ⚙️",
                                desc: "Expert analysts scan 5,000+ stocks and options chains using technicals, unusual activity, and Greeks analysis."
                            },
                            {
                                step: "2",
                                title: "You Receive Alert 📱",
                                desc: "Instant push notifications with ticker, strike, expiration, entry range, 3 targets, and stop-loss."
                            },
                            {
                                step: "3",
                                title: "You Execute 💼",
                                desc: "Open your broker app, find the exact strike, and enter your limit order within our specified range."
                            },
                            {
                                step: "4",
                                title: "We Guide You to Exit 🎯",
                                desc: "Receive real-time alerts when profit targets are hit or if the setup is invalidated to protect capital."
                            }
                        ].map((s, i) => (
                            <div key={i} className="relative group text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-2xl font-black text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-neon">
                                    {s.step}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* WHY OUR OPTIONS SIGNALS WIN */}
            <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">The InterNative Advantage: <br /><span className="text-gradient">Built Different</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Multi-Factor Analysis 🧠",
                                desc: "We combine technical indicators, dark pool activity, IV surfaces, and fundamental catalysts for high-probability setups."
                            },
                            {
                                title: "Real-Time Delivery ⚡",
                                desc: "Options move fast. Our mobile-first architecture delivers alerts in 1-2 seconds, ensuring you get the same entry prices."
                            },
                            {
                                title: "Complete Trade Plans 📋",
                                desc: "No ambiguity. Exact strike, expiration, entry range, 3 profit targets, and stop-loss with detailed reasoning."
                            },
                            {
                                title: "Risk Management First 🛡️",
                                desc: "We protect capital aggressively with specified stop-losses, position sizing, and no averaging down on losers."
                            },
                            {
                                title: "Verified Track Record ✅",
                                desc: "Full transparency with every win and loss logged publicly. Trust built on proven results, not marketing hype."
                            },
                            {
                                title: "Educational Value 📚",
                                desc: "Learn while you trade. Every signal explains the 'why' with Greeks breakdowns to build your own skills."
                            }
                        ].map((adv, i) => (
                            <GlassCard key={i} className="p-8 rounded-3xl" hoverEffect>
                                <h3 className="text-xl font-bold text-white mb-4">{adv.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">{adv.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>
            {/* PERFORMANCE SECTION */}
            <Section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Real Results. <span className="text-gradient">Full Transparency.</span></h2>
                        <p className="text-text-secondary">Last 90 Days Performance: October - December 2025</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { label: "Win Rate", value: "82.0%", color: "text-primary" },
                            { label: "Total Signals", value: "89", color: "text-white" },
                            { label: "Avg Winner", value: "+94.3%", color: "text-green-400" },
                            { label: "Avg Loser", value: "-38.2%", color: "text-red-400" }
                        ].map((stat, i) => (
                            <GlassCard key={i} className="p-6 text-center">
                                <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">{stat.label}</div>
                                <div className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</div>
                            </GlassCard>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        {/* Breakdown Table */}
                        <GlassCard className="lg:col-span-1 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-white mb-6">Performance by Type</h3>
                            <div className="space-y-4">
                                {[
                                    { type: "Lotto Options", count: 28, win: "64%", avg: "+187%" },
                                    { type: "Swing Options", count: 37, win: "86%", avg: "+76%" },
                                    { type: "Index Options", count: 24, win: "83%", avg: "+72%" }
                                ].map((row, i) => (
                                    <div key={i} className="flex flex-col gap-2 pb-4 border-b border-white/5 last:border-0">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-white">{row.type}</span>
                                            <span className="text-xs text-text-muted">{row.count} Signals</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-text-secondary">Win Rate: <span className="text-primary">{row.win}</span></span>
                                            <span className="text-text-secondary">Avg: <span className="text-green-400">{row.avg}</span></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Top 10 Trades */}
                        <GlassCard className="lg:col-span-2 p-8 rounded-3xl overflow-hidden">
                            <h3 className="text-xl font-bold text-white mb-6">Top 10 Winning Trades (Dec 2025)</h3>
                            <div className="overflow-x-auto -mx-8 px-8">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-text-muted">
                                            <th className="pb-4">Ticker & Setup</th>
                                            <th className="pb-4">Result</th>
                                            <th className="pb-4 hidden sm:table-cell">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {[
                                            { t: "NVDA $500 Call (1DTE)", r: "+347%", d: "8 hours" },
                                            { t: "SPY $467 Put (3DTE)", r: "+224%", d: "2 days" },
                                            { t: "TSLA $425 Call (2DTE)", r: "+198%", d: "6 hours" },
                                            { t: "QQQ $410 Call (7DTE)", r: "+167%", d: "3 days" },
                                            { t: "AAPL $190 Call (14DTE)", r: "+142%", d: "5 days" }
                                        ].map((trade, i) => (
                                            <tr key={i} className="border-b border-white/5 last:border-0 group">
                                                <td className="py-4 font-medium text-white group-hover:text-primary transition-colors">{trade.t}</td>
                                                <td className="py-4 font-bold text-green-400">{trade.r}</td>
                                                <td className="py-4 text-text-muted hidden sm:table-cell">{trade.d}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-8">
                                <Button variant="outline" className="w-full group">
                                    View Full Verified Track Record
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </GlassCard>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <p className="text-[10px] text-text-muted leading-relaxed uppercase tracking-widest">
                            <span className="text-primary font-black mr-2">Disclaimer:</span>
                            Results shown are actual fills from our analysts' accounts. Individual results may vary based on execution timing, broker fills, and position sizing. Options trading involves substantial risk. Past performance does not guarantee future results.
                        </p>
                    </div>
                </div>
            </Section>

            {/* WHO ARE OUR ANALYSTS? */}
            <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Meet the Team Behind <br /><span className="text-gradient">Your Options Alerts</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "David M.",
                                role: "Lead Options Strategist",
                                exp: "15 Years Experience",
                                bio: "Former institutional options trader at major Wall Street firm. Specialized in volatility arbitrage and gamma scalping.",
                                expertise: ["Complex Strategies", "Volatility Analysis", "Index Specialist"],
                                stats: "78% Career Win Rate"
                            },
                            {
                                name: "Sarah K.",
                                role: "Technical Analysis Expert",
                                exp: "12 Years Experience",
                                bio: "Technical analyst focusing on breakout identification. CMT (Chartered Market Technician) certified.",
                                expertise: ["Chart Patterns", "Volume Profile", "Momentum Strategy"],
                                stats: "Identified 23/28 Index Moves in '25"
                            },
                            {
                                name: "Michael R.",
                                role: "Options Flow Specialist",
                                exp: "10 Years Experience",
                                bio: "Previously traded proprietary desk focusing on unusual activity and dark pool flow. Brings institutional insights.",
                                expertise: ["Flow Interpretation", "Dark Pool Activity", "Smart Money Tracking"],
                                stats: "85% Accuracy on Flow Signals"
                            }
                        ].map((analyst, i) => (
                            <GlassCard key={i} className="p-8 rounded-[2.5rem] flex flex-col h-full bg-background" hoverEffect>
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-2xl mb-6">
                                    {analyst.name.split(' ')[0][0]}{analyst.name.split(' ')[1][0]}
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white mb-1">{analyst.name}</h3>
                                    <div className="text-primary text-xs font-black uppercase tracking-widest mb-1">{analyst.role}</div>
                                    <div className="text-text-muted text-xs">{analyst.exp}</div>
                                </div>
                                <p className="text-sm text-text-secondary mb-8 leading-relaxed flex-grow">{analyst.bio}</p>
                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {analyst.expertise.map((e, ei) => (
                                            <span key={ei} className="px-2 py-1 bg-white/5 rounded text-[10px] text-text-muted font-bold uppercase tracking-widest">{e}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest bg-primary/10 p-3 rounded-xl">
                                        <CheckCircle size={14} />
                                        {analyst.stats}
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>


            {/* PRICING FOR OPTIONS SIGNALS */}
            <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Professional Options Alerts for <br /><span className="text-gradient">Less Than One Winning Trade</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                        {/* Deluxe Plan */}
                        <GlassCard className="p-8 md:p-12 rounded-[2.5rem] bg-background border-white/5 relative" hoverEffect>
                            <h3 className="text-2xl font-black text-white mb-2">DELUXE</h3>
                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-5xl font-black text-white">$59.99</span>
                                <span className="text-text-muted mb-2 font-bold lowercase">/month</span>
                            </div>
                            <p className="text-text-secondary text-sm mb-8">Best For: Individual traders seeking consistent options flow.</p>
                            <Button variant="outline" className="w-full mb-8 h-14 text-lg font-bold" size="lg">Start Free 7-Day Trial</Button>
                            <div className="space-y-4">
                                {[
                                    "All options signals (Lottos, Swings, Index)",
                                    "4-6 signals per day",
                                    "Real-time push notifications",
                                    "Complete entry/exit details",
                                    "Stop-loss and profit targets",
                                    "Trade analysis and reasoning",
                                    "Performance tracking dashboard",
                                    "Standard delivery (1-2 second alerts)",
                                    "Mobile app access (iOS/Android)",
                                    "Email support",
                                    "Cancel anytime"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 text-sm text-text-secondary">
                                        <CheckCircle size={18} className="text-primary shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Ultimate Plan */}
                        <GlassCard className="p-8 md:p-12 rounded-[2.5rem] bg-primary/5 border-primary/30 shadow-neon relative overflow-hidden" hoverEffect>
                            <div className="absolute top-0 right-0 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">Most Popular</div>
                            <h3 className="text-2xl font-black text-white mb-2">ULTIMATE</h3>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-5xl font-black text-white">$599.99</span>
                                <span className="text-text-muted mb-2 font-bold lowercase">/year</span>
                            </div>
                            <div className="text-primary font-black text-xs uppercase tracking-widest mb-6">Savings: $120/year vs monthly</div>
                            <p className="text-text-secondary text-sm mb-8">Best For: Serious options traders maximizing edge.</p>
                            <Button className="w-full mb-8 h-14 text-lg font-bold shadow-neon" size="lg">Start Free 7-Day Trial</Button>
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-primary uppercase tracking-widest">Everything in Deluxe, PLUS:</div>
                                {[
                                    "Priority delivery (30s early access)",
                                    "Exclusive swing options (not in Deluxe)",
                                    "Monthly live webinar with analysts",
                                    "Options education library",
                                    "Greeks masterclass (recorded course)",
                                    "VIP Discord channel (Direct Q&A)",
                                    "Advanced Greeks analysis in signals",
                                    "Risk calculator tool access",
                                    "Priority support (live chat)",
                                    "Early access to new signal types"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 text-sm text-white">
                                        <Zap size={18} className="text-primary shrink-0" fill="currentColor" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                        <GlassCard className="p-8 rounded-3xl bg-background border-white/5">
                            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Value Comparison</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm p-4 bg-white/5 rounded-2xl">
                                    <span className="text-text-secondary">One 100% winner pays for</span>
                                    <span className="text-primary font-black">1.7 months</span>
                                </div>
                                <div className="flex justify-between items-center text-sm p-4 bg-white/5 rounded-2xl">
                                    <span className="text-text-secondary">One 200% winner pays for</span>
                                    <span className="text-primary font-black">4 months</span>
                                </div>
                                <div className="flex justify-between items-center text-sm p-4 bg-primary/10 border border-primary/20 rounded-2xl">
                                    <span className="text-white font-bold">NVDA 347% Winner pays for</span>
                                    <span className="text-primary font-black">7 months</span>
                                </div>
                            </div>
                        </GlassCard>
                        <div className="text-center md:text-left p-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                                <Lock size={32} />
                            </div>
                            <h4 className="text-2xl font-black text-white mb-4">30-Day Money-Back Guarantee</h4>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Not satisfied with the quality of our signals? Send us a message within 30 days for a full refund. No questions asked.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ - OPTIONS SIGNALS */}
            <Section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Options Signals Questions Answered</h2>
                    </div>

                    <div className="grid gap-4">
                        {[
                            {
                                q: "Do I need a lot of money to trade options signals?",
                                a: "No. You can start with as little as $500-1,000. Our position sizing recommendations scale to your account size. Most signals involve contracts under $5.00."
                            },
                            {
                                q: "What brokers can I use with your signals?",
                                a: "Any broker that offers options. Popular choices: Robinhood, ThinkOrSwim, E*TRADE, Webull, IBKR, and Fidelity. Our signals are broker-agnostic."
                            },
                            {
                                q: "How fast do I need to execute?",
                                a: "For lottos (0-3DTE), within 5-15 mins. For swings (14-45DTE), you have 30-60 mins. Ultimate members get 30s early access for better fills."
                            },
                            {
                                q: "What's the difference between lotto, swing, and index signals?",
                                a: "Lottos are high-risk 0-3 day plays (100-500% potential). Swings are 2-6 week holds (50-150% targets). Index signals trade SPY/QQQ with high consistency."
                            },
                            {
                                q: "Do you send too many signals?",
                                a: "We average 4-6 quality signals per day. Quality over quantity is our philosophy. You're never required to take every trade."
                            },
                            {
                                q: "What if I can't watch my phone all day?",
                                a: "Swing options are perfect for you - designed for 1-2 checks a day. We also send EOD summary alerts for all active positions."
                            },
                            {
                                q: "How do I know when to exit a trade?",
                                a: "Every signal has 3 profit targets. You'll receive push notifications when each target is hit, telling you exactly how much to sell."
                            },
                            {
                                q: "Are options signals suitable for beginners?",
                                a: "Yes, but we recommend starting with swing options, using small position sizes (2-5%), and utilizing our educational Greeks breakdowns."
                            },
                            {
                                q: "Do you guarantee profits?",
                                a: "No service can guarantee profits. We focus on high-probability setups (82% win rate), but risk management is critical."
                            }
                        ].map((faq, idx) => (
                            <GlassCard key={idx} className="p-8 rounded-2xl group transition-all" hoverEffect>
                                <h4 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">{faq.q}</h4>
                                <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>


            {/* RISK DISCLOSURE */}
            <Section className="py-24 bg-background-secondary/30 border-y border-white/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <GlassCard className="p-8 md:p-12 border-red-500/20 bg-red-500/5">
                        <div className="flex items-center gap-4 mb-8 text-red-400">
                            <AlertTriangle size={32} />
                            <h2 className="text-2xl font-black uppercase tracking-widest">Risk Disclosure & Disclaimer</h2>
                        </div>
                        <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
                            <p>
                                <span className="text-white font-bold">High Risk Investment:</span> Options trading involves significant risk and is not suitable for all investors. The high degree of leverage that is often obtainable in options trading can work against you as well as for you. The use of leverage can lead to large losses as well as gains.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8 py-6 border-y border-white/5">
                                <div>
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Trading Rules</h4>
                                    <CheckList items={[
                                        "Never trade money you can't afford to lose",
                                        "Follow position sizing guidelines (2-5%)",
                                        "Always use the provided stop-loss",
                                        "Past performance ≠ future results"
                                    ]} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Our Responsibility</h4>
                                    <p className="text-xs">InterNative Traders provides educational signals and analysis. We are not registered financial advisors. All trade decisions are ultimately the responsibility of the individual trader.</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-text-muted italic">
                                InterNative Traders and its analysts shall not be liable for any losses or damages resulting from the use of our signals. By using our service, you acknowledge and accept these risks in full.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </Section>

            {/* SOCIAL PROOF - OPTIONS TRADERS */}
            <Section className="py-24 bg-background overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Trusted by Thousands of <br /><span className="text-gradient">Options Traders</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                user: "Jason T.",
                                role: "Full-Time Trader",
                                text: "The consistency of the index signals is mind-blowing. I've been with 4 other services, but nothing matches the transparency and win rate here.",
                                profit: "+$12,400 Last Month"
                            },
                            {
                                user: "Elena R.",
                                role: "Part-Time Swing Trader",
                                text: "As a busy professional, the swing signals are a lifesaver. I spend 10 mins a day executing and the results have been incredible.",
                                profit: "86% Win Rate"
                            },
                            {
                                user: "Marcus D.",
                                role: "Lotto Specialist",
                                text: "If you want to catch those 300%+ moves on NVDA and TSLA, this is the place. The flow analysis is top-tier institutional level.",
                                profit: "Best Trade: +412%"
                            }
                        ].map((test, i) => (
                            <GlassCard key={i} className="p-8 rounded-[2.5rem]" hoverEffect>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary" fill="currentColor" />)}
                                </div>
                                <Quote className="text-primary/20 mb-4" size={40} />
                                <p className="text-text-secondary italic mb-6 leading-relaxed">"{test.text}"</p>
                                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-end">
                                    <div>
                                        <div className="font-bold text-white">{test.user}</div>
                                        <div className="text-xs text-text-muted">{test.role}</div>
                                    </div>
                                    <div className="text-primary font-black text-xs uppercase tracking-widest">{test.profit}</div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FINAL CTA SECTION */}
            <Section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5" />
                <div className="container mx-auto px-4">
                    <GlassCard className="max-w-5xl mx-auto p-8 md:p-16 rounded-[3rem] border-primary/20 bg-primary/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                            Ready to Trade with <br /><span className="text-gradient">Institutional Edge?</span>
                        </h2>

                        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                            Join 5,000+ traders receiving the industry's most accurate options alerts. Start your 7-day free trial now.
                        </p>

                        <div className="flex flex-col items-center gap-8">
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <Button size="lg" className="px-12 h-16 text-xl shadow-neon">Start Free 7-Day Trial</Button>
                                <Button variant="outline" size="lg" className="px-12 h-16 text-xl">View Sample Signals</Button>
                            </div>

                            <div className="grid grid-cols-3 gap-8 w-full max-w-2xl pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-2xl font-black text-white">82%</div>
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest">Win Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-white">5k+</div>
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest">Traders</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-white">24/7</div>
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest">Support</div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-12 text-sm text-text-muted flex items-center justify-center gap-2">
                            <Shield size={14} className="text-primary" />
                            No credit card required for trial • Cancel anytime • 30-day money-back guarantee
                        </p>
                    </GlassCard>
                </div>
            </Section>

        </>
    );
};

export default OptionsTradingSignals;
