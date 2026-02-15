import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layers, Zap, TrendingUp, BarChart2, Shield, Calendar, Clock, DollarSign, Target, Activity, Search, AlertCircle, Smartphone, Lock, Award, PieChart, CheckCircle2, XCircle, Plus, Minus } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import GradientText from '../../components/ui/GradientText';
import CheckList from '../../components/ui/CheckList';

const StockSignals = () => {
    const [openIndex, setOpenIndex] = React.useState(0);
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Stock Trading Signals | InterNative Traders</title>
                <meta name="description" content="Get professional stock trading signals with precise entry/exit points. Swing trades, day trades, growth stocks. 81% win rate. Real-time alerts. Try free 7 days." />
            </Helmet>

            {/* HERO SECTION */}
            <Section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -ml-40 -mb-40" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                                Stock Trading Signals That Build <GradientText>Wealth</GradientText> One Smart Trade at a Time
                            </h1>
                            <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                                Get real-time alerts for high-probability stock trades across all market caps and sectors. Our expert analysts identify breakouts, momentum plays, and value opportunities on NYSE, NASDAQ, and major exchanges delivered instantly to your phone with precise entry points, stop-loss levels, and profit targets.
                            </p>

                            <div className="flex flex-col gap-3 mb-8">
                                {[
                                    "81% Win Rate on Stock Signals (Last 90 Days)",
                                    "+124% Best Single Trade (NVDA - October 2025)",
                                    "3-5 Daily Alerts Sent to Your Phone",
                                    "Covers 2,500+ Stocks Across All Sectors"
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-white justify-center lg:justify-start">
                                        <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                                        <span>{stat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base shadow-neon">Get Stock Signals Now - Try Free 7 Days</Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">View December Stock Performance</Button>
                            </div>
                        </div>

                        {/* Hero Visual - Mockup */}
                        <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative">
                            <GlassCard className="relative p-6 rounded-[2.5rem] border-white/10 bg-[#0A051A]/90 backdrop-blur-xl shadow-2xl">
                                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                    <h3 className="text-lg font-black text-white">Active Positions</h3>
                                    <span className="text-success font-black">+18.4% This Month</span>
                                </div>

                                <div className="space-y-4">
                                    {/* Mock Notification */}
                                    <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black">TSLA</div>
                                                <div>
                                                    <div className="font-bold text-white text-sm">Tesla Inc.</div>
                                                    <div className="text-[10px] text-primary font-black uppercase tracking-wider">Breakout Alert</div>
                                                </div>
                                            </div>
                                            <span className="text-[10px] text-text-muted font-bold">Now</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <div className="px-3 py-1.5 rounded-lg bg-black/20 text-center">
                                                <div className="text-[9px] text-text-muted font-bold uppercase">Entry</div>
                                                <div className="text-xs font-black text-white">$405 - $410</div>
                                            </div>
                                            <div className="px-3 py-1.5 rounded-lg bg-black/20 text-center">
                                                <div className="text-[9px] text-text-muted font-bold uppercase">Target</div>
                                                <div className="text-xs font-black text-success">$450</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center">
                                        <div>
                                            <div className="text-white font-bold">NVDA</div>
                                            <div className="text-xs text-text-muted">Swing Long</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-success font-black text-lg">+12.4%</div>
                                            <div className="text-xs text-text-muted">Open P&L</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </Section>

            {/* PROBLEM/PAIN POINTS SECTION */}
            <Section className="py-20 bg-background-secondary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Most Stock Traders Struggle <span className="text-text-muted">(And How We Solve It)</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                emoji: "🤯",
                                problem: "Information Paralysis",
                                desc: "The Problem: There are 5,000+ publicly traded stocks. Scanning charts, reading earnings reports, tracking sector rotation, monitoring news flow it's overwhelming. By the time you research a stock thoroughly, you've missed the entry.",
                                solution: "Our Solution: We monitor the entire market 24/7. Our analysts filter through thousands of stocks to identify only the highest-probability setups. You get 3-5 handpicked opportunities daily no information overload, just actionable trades."
                            },
                            {
                                emoji: "😰",
                                problem: "Emotional Trading",
                                desc: "The Problem: You buy at the top out of FOMO. You sell at the bottom in panic. You hold losers too long hoping they'll recover. Emotions sabotage even the best stock picks.",
                                solution: "Our Solution: Every signal comes with predetermined exit points both stop-loss and profit targets. You know exactly when to exit before entering the trade. Remove emotion, follow the plan, protect your capital."
                            },
                            {
                                emoji: "📉",
                                problem: "Poor Risk Management",
                                desc: "The Problem: One 40% loss wipes out four 10% winners. You risk too much on \"sure things\" that turn into disasters. Position sizing is guesswork. Your portfolio bleeds slowly.",
                                solution: "Our Solution: Every alert includes calculated stop-loss levels and position size recommendations based on your account. We cap losses at 6-8% max per trade while letting winners run to 20-50%+ gains. Math that actually works."
                            }
                        ].map((item, i) => (
                            <GlassCard key={i} className={`p-8 rounded-[2rem] bg-background/50 h-full flex flex-col ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:w-3/4 md:mx-auto lg:w-full' : ''}`}>
                                <div className="text-4xl mb-6">{item.emoji}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.problem}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                                <div className="pt-6 border-t border-white/5 bg-primary/5 -mx-8 -mb-8 p-8 mt-auto">
                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        </div>
                                        <p className="text-sm font-medium text-white"><span className="font-bold text-primary">💡 Our Solution:</span> {item.solution.replace("Our Solution: ", "")}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* WHAT YOU GET SECTION */}
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
                                        <h4 className="text-white font-bold text-lg leading-none">🔔 NEW SIGNAL - NVIDIA (NVDA)</h4>
                                        <div className="text-primary text-xs font-black uppercase tracking-wider mt-1">Swing Trade - Momentum Breakout</div>
                                    </div>
                                </div>
                            </div>

                            {/* Signal Body */}
                            <div className="p-6 space-y-6 bg-background/50 backdrop-blur-md text-sm">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Risk:</span> <span className="text-white font-bold">⚡ Medium Risk / High Reward</span></div>
                                    <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Win Prob:</span> <span className="text-success font-bold">74%</span></div>
                                    <div className="bg-white/5 p-3 rounded-lg"><span className="text-text-muted">Sector:</span> <span className="text-white font-bold">Technology - Semiconductors</span></div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h5 className="text-primary font-black uppercase text-xs mb-2">📊 SETUP</h5>
                                        <p className="text-text-secondary">Signal: BUY (Long Position)<br />Entry Strategy: Breakout confirmation above resistance</p>
                                    </div>
                                    <div>
                                        <h5 className="text-primary font-black uppercase text-xs mb-2">💰 ENTRY</h5>
                                        <p className="text-text-secondary">
                                            Entry Zone: <span className="text-white font-bold">$520 - $528</span> (optimal accumulation range)<br />
                                            Ideal Entry: $524 (mid-zone on volume confirmation)<br />
                                            Max Position Size: 8% of portfolio<br />
                                            Stop Loss Zone: <span className="text-red-500 font-bold">$498</span> (-5.0% from mid-entry)
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-primary font-black uppercase text-xs mb-2">🎯 PROFIT TARGETS</h5>
                                        <ul className="text-text-secondary space-y-1">
                                            <li>TP1 (40%): <span className="text-success font-bold">$565</span> (+7.8% gain) - SELL 40% OF POSITION</li>
                                            <li>TP2 (40%): <span className="text-success font-bold">$610</span> (+16.4% gain) - SELL 40% OF POSITION</li>
                                            <li>TP3 (20%): <span className="text-success font-bold">$675</span> (+28.8% gain) - TRAIL REMAINING 20%</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-primary font-black uppercase text-xs mb-2">🛡️ RISK MANAGEMENT</h5>
                                        <p className="text-text-secondary">Risk Amount: $26 per share (5% stop)<br />Risk-to-Reward: 1:3.2 (excellent)<br />Trailing Stop: Activate at TP2, trail -8%</p>
                                    </div>
                                    <div>
                                        <h5 className="text-primary font-black uppercase text-xs mb-2">📈 TECHNICAL ANALYSIS</h5>
                                        <p className="text-text-secondary">NVDA breaking above 52-week consolidation at $518 with massive volume surge (3x average). RSI at 64 strong but not overbought. MACD bullish crossover confirmed.</p>
                                    </div>
                                    <div>
                                        <h5 className="text-primary font-black uppercase text-xs mb-2">📰 FUNDAMENTAL CATALYST</h5>
                                        <ul className="text-text-secondary list-disc pl-4 space-y-1">
                                            <li>Q4 earnings beat by 18% (announced 12/15)</li>
                                            <li>Data center revenue up 112% YoY</li>
                                            <li>Analyst upgrades from 12 major firms</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-lg text-center text-xs font-bold text-text-muted">
                                        ⏰ VALID: Next 3 trading days or until breakout fails
                                    </div>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Features List */}
                        <div>
                            <h3 className="text-2xl font-black text-white mb-8">What Every Stock Signal Includes:</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Stock Details", d: "Ticker symbol, company name, sector, industry, market cap, and exchange listing." },
                                    { t: "Entry Strategy", d: "Precise entry price zone, ideal conditions (volume), multiple entry opportunities, position sizing." },
                                    { t: "Exit Strategy", d: "3 profit targets with percentages, hard stop-loss price, trailing stop activation, time-based exit." },
                                    { t: "Risk Metrics", d: "Max loss per share, risk-to-reward ratio, win probability, position size recommendations." },
                                    { t: "Technical Analysis", d: "Key chart patterns, support/resistance levels, indicator readings (RSI, MACD), trend strength." },
                                    { t: "Fundamental Catalyst", d: "Earnings reports, revenue growth, news events, analyst upgrades, sector rotation context." },
                                    { t: "Real-Time Management", d: "Entry confirmation alerts, target hit notifications, stop-loss adjustments, early exit warnings." }
                                ].map((feat, i) => (
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

            {/* TYPES OF STOCK SIGNALS */}
            <Section className="py-24 bg-background-secondary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Three Distinct Signal Types for Every Market Condition</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "SWING TRADE SIGNALS 📊",
                                sub: "Multi-Day to Multi-Week Position Trades",
                                desc: "Stock positions held for 3-30 days, designed to capture intermediate trend moves. Less stressful than day trading, more active than buy-and-hold investing.",
                                ideal: ["Traders who can't monitor markets all day", "Those building consistent monthly gains", "Anyone seeking 10%-40% returns"],
                                chars: ["Hold time: 5-21 days average", "Entry on pullbacks or breakouts", "Multiple scaling exit points"],
                                wins: ["NVDA Breakout: +28.4%", "MSFT Support Bounce: +16.7%", "TSLA Momentum: +23.8%"],
                                perf: ["Win Rate: 79%", "Avg Winner: +18.3%", "Freq: 2-3 signals/week"],
                                best: "Busy professionals who check positions 1-2x daily",
                                cta: "Get Swing Signals →"
                            },
                            {
                                title: "DAY TRADE SIGNALS ⚡",
                                sub: "Intraday Momentum & Breakout Plays",
                                desc: "Positions opened and closed within the same trading day. Fast-paced, leveraging intraday volatility and momentum on high-volume stocks.",
                                ideal: ["Active traders with time during market hours", "Pattern Day Trader status (25k+ account)", "Traders seeking quick 2%-8% moves"],
                                chars: ["Hold time: 30m to 6h", "Entry on momentum surges", "Tight stop-losses (2-3% max)"],
                                wins: ["TSLA News Spike: +6.2%", "AAPL Breakout: +4.8%", "AMD Momentum: +5.7%"],
                                perf: ["Win Rate: 68%", "Avg Winner: +4.9%", "Freq: 1-2 signals/day"],
                                best: "Active traders who can monitor positions real-time",
                                cta: "Get Day Trade Signals →"
                            },
                            {
                                title: "GROWTH STOCK SIGNALS 🚀",
                                sub: "High-Growth Companies for Longer-Term Gains",
                                desc: "Stocks of companies with exceptional revenue/earnings growth potential. Held for weeks to months to capture major trend moves.",
                                ideal: ["Investors seeking larger position sizing", "Those comfortable with 4-12 week holds", "Anyone targeting 30%-100%+ returns"],
                                chars: ["Hold time: 3-12 weeks", "Fundamental story + technical setup", "Bigger profit targets (30-100%+)"],
                                wins: ["AI Sector Play (NVDA): +67%", "Cloud Software (CRM): +42%", "EV Technology (RIVN): +54%"],
                                perf: ["Win Rate: 71%", "Avg Winner: +34.6%", "Freq: 1-2 signals/week"],
                                best: "Patient traders seeking home-run opportunities",
                                cta: "Get Growth Signals →"
                            }
                        ].map((type, i) => (
                            <GlassCard key={i} className={`p-8 rounded-[2rem] hover:border-primary/50 transition-all duration-300 group h-full flex flex-col ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:w-3/4 md:mx-auto lg:w-full' : ''}`}>
                                <h3 className="text-2xl font-black text-white mb-1">{type.title}</h3>
                                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4 opacity-80">{type.sub}</div>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-medium">{type.desc}</p>

                                <div className="space-y-6 text-sm flex-grow">
                                    <div>
                                        <span className="font-bold text-white block mb-2">Ideal For:</span>
                                        <ul className="list-disc pl-4 text-text-muted space-y-1 text-xs">
                                            {type.ideal.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl">
                                        <span className="font-bold text-white block mb-2 text-xs uppercase">Recent Wins</span>
                                        <ul className="space-y-1">
                                            {type.wins.map((w, idx) => <li key={idx} className="text-success text-xs font-bold">{w}</li>)}
                                        </ul>
                                    </div>
                                    <div className="border-t border-white/5 pt-4">
                                        <ul className="space-y-1">
                                            {type.perf.map((p, idx) => <li key={idx} className="text-white text-xs font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />{p}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8 pt-4 border-t border-white/5 text-center">
                                    <Button variant="ghost" className="text-primary hover:text-white w-full">{type.cta}</Button>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* MARKETS & SECTORS */}
            <Section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Comprehensive Stock Coverage Across All Major Markets</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            { t: "Large-Cap Stocks ($10B+)", d: "The blue-chip companies that drive market indexes. S&P 500 components, Mega-cap tech, Financial giants.", f: "Freq: 4-6/week", v: "Volatility: Moderate" },
                            { t: "Mid-Cap Stocks ($2B-$10B)", d: "The sweet spot for growth with manageable risk. Emerging leaders, regional banks, growth tech.", f: "Freq: 2-4/week", v: "Volatility: Higher" },
                            { t: "Small-Cap Stocks ($300M-$2B)", d: "High-growth potential with higher risk/reward. Russell 2000 components, biotech, innovators.", f: "Freq: 1-2/week", v: "Volatility: Highest" },
                        ].map((m, i) => (
                            <GlassCard key={i} className="p-6 h-full flex flex-col">
                                <h3 className="text-lg font-black text-white mb-2">{m.t}</h3>
                                <p className="text-text-secondary text-sm mb-4 flex-grow">{m.d}</p>
                                <div className="text-xs font-bold text-text-muted space-y-1">
                                    <div>{m.f}</div>
                                    <div>{m.v}</div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-8 text-center">Sector Coverage</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: "💻", name: "Technology", ex: "NVDA, MSFT, CRM" },
                            { icon: "🏥", name: "Healthcare", ex: "JNJ, ABBV, MRNA" },
                            { icon: "💰", name: "Financial", ex: "JPM, BAC, GS" },
                            { icon: "🛍️", name: "Consumer", ex: "AMZN, TSLA, NKE" },
                            { icon: "⚡", name: "Energy", ex: "XOM, NEE, ENPH" },
                            { icon: "🏭", name: "Industrial", ex: "BA, CAT, UPS" },
                            { icon: "📱", name: "Communication", ex: "META, GOOGL, DIS" },
                            { icon: "⚒️", name: "Materials", ex: "FCX, NUE, LIN" },
                        ].map((s, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="text-2xl mb-2">{s.icon}</div>
                                <div className="font-bold text-white mb-1">{s.name}</div>
                                <div className="text-xs text-text-muted text-nowrap overflow-hidden text-ellipsis">{s.ex}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* HOW IT WORKS */}
            <Section className="py-24 bg-background-secondary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">From Market Scan to Portfolio Growth in 4 Steps</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "STEP 1", title: "We Analyze the Entire Market 📊", desc: "Our analyst team uses advanced screening to monitor 2,500+ stocks daily. We look for chart patterns, volume analysis, momentum indicators, fundamental alignment, and upcoming catalysts." },
                            { step: "STEP 2", title: "You Receive Instant Alert 📱", desc: "Push notification sent to your phone within seconds including ticker, signal type, risk level, entry/exit details, and analysis. Delivered via App, Email, or SMS." },
                            { step: "STEP 3", title: "You Execute the Trade 💼", desc: "Use your existing broker (Robinhood, Fidelity, etc.) to enter the position. Place limit order within our zone, set stop-loss immediately, and mark profit targets." },
                            { step: "STEP 4", title: "We Guide You Through Exits 🎯", desc: "Active trade management with real-time updates. We send alerts for taking profits at TP1/TP2/TP3, trailing stop adjustments, and risk management triggers." }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center">
                                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-black rounded-full mb-4">{item.step}</div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* WHY OUR STOCK SIGNALS WIN */}
            <Section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">The InterNative Stock Signals Advantage</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "1. Multi-Factor Stock Selection 🧠", desc: "We don't just look at charts. We require technical setup confirmation, fundamental catalyst, volume verification, and sector strength. Result: Only 3-5 high-quality signals daily." },
                            { title: "2. Complete Fundamental Context 📰", desc: "Every signal explains WHY the stock is moving: earnings performance, revenue growth, analyst upgrades, and industry trends. You understand the story, not just the chart." },
                            { title: "3. Precise Risk Management 🛡️", desc: "Stop-losses placed strategically below key support levels (not randomly). Maximum 6-8% loss per trade. Position sizing matched to risk. Losses stay small and manageable." },
                            { title: "4. Scaling Exit Strategy 📊", desc: "Take profits in stages: 40% at TP1 (locking early gains), 40% at TP2 (securing bulk), 20% trailing (capturing monster runs). Removes emotion from exits." },
                            { title: "5. Real-Time Trade Management ⚡", desc: "Markets change – our guidance adapts. Stop-loss adjustments, early exit warnings, target extensions, and news-based updates. Dynamic guidance, not static alerts." },
                            { title: "6. Verified Track Record ✅", desc: "Full transparency on every signal. Entry/exit prices publicly logged. Wins AND losses clearly shown. Monthly performance reports. No cherry-picking." }
                        ].map((item, i) => (
                            <GlassCard key={i} className="p-8 h-full flex flex-col" hoverEffect>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed flex-grow">{item.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* PERFORMANCE SECTION */}
            <Section className="py-24 relative bg-background-secondary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Stock Signals Performance: Real Trades, Real Results</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { label: "Win Rate", value: "81.3%", sub: "Total Signals: 64" },
                            { label: "Winning Trades", value: "52", sub: "Losing Trades: 12" },
                            { label: "Avg Winner", value: "+18.7%", sub: "Avg Loser: -6.4%" },
                            { label: "Largest Win", value: "+124.2%", sub: "NVDA (8 Weeks)" },
                        ].map((stat, i) => (
                            <GlassCard key={i} className="p-6 text-center">
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-sm font-bold text-text-muted uppercase tracking-wide">{stat.label}</div>
                                <div className="text-xs text-primary mt-1 font-medium">{stat.sub}</div>
                            </GlassCard>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <GlassCard className="p-6 h-full">
                            <h4 className="font-bold text-white mb-4">Breakdown by Signal Type</h4>
                            <table className="w-full text-sm">
                                <thead className="text-text-muted text-xs uppercase font-bold text-left">
                                    <tr><th className="pb-2">Type</th><th className="pb-2">Win %</th><th className="pb-2">Avg Win</th><th className="pb-2">Avg Loss</th></tr>
                                </thead>
                                <tbody className="text-text-secondary">
                                    <tr><td className="py-2 font-medium text-white">Swing Trades</td><td>85%</td><td className="text-success">+19.3%</td><td className="text-red-400">-6.8%</td></tr>
                                    <tr><td className="py-2 font-medium text-white">Day Trades</td><td>72%</td><td className="text-success">+5.2%</td><td className="text-red-400">-2.9%</td></tr>
                                    <tr><td className="py-2 font-medium text-white">Growth Plays</td><td>75%</td><td className="text-success">+41.7%</td><td className="text-red-400">-11.2%</td></tr>
                                </tbody>
                            </table>
                        </GlassCard>
                        <GlassCard className="p-6 h-full">
                            <h4 className="font-bold text-white mb-4">Breakdown by Market Cap</h4>
                            <table className="w-full text-sm">
                                <thead className="text-text-muted text-xs uppercase font-bold text-left">
                                    <tr><th className="pb-2">Cap</th><th className="pb-2">Signals</th><th className="pb-2">Win %</th><th className="pb-2">Avg Return</th></tr>
                                </thead>
                                <tbody className="text-text-secondary">
                                    <tr><td className="py-2 font-medium text-white">Large-Cap</td><td>38</td><td>84%</td><td className="text-success">+14.6%</td></tr>
                                    <tr><td className="py-2 font-medium text-white">Mid-Cap</td><td>18</td><td>78%</td><td className="text-success">+24.3%</td></tr>
                                    <tr><td className="py-2 font-medium text-white">Small-Cap</td><td>8</td><td>75%</td><td className="text-success">+32.8%</td></tr>
                                </tbody>
                            </table>
                        </GlassCard>
                    </div>

                    {/* Top 10 Wins */}
                    <GlassCard className="p-6">
                        <h4 className="font-bold text-white mb-4 text-center">Top 10 Winning Trades (Q4 2025)</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                            <ul className="space-y-2">
                                {[
                                    "NVDA Growth Play: +124.2% in 8 weeks",
                                    "TSLA Breakout: +67.8% in 4 weeks",
                                    "META Reversal: +54.3% in 6 weeks",
                                    "AMD Earnings: +48.9% in 3 weeks",
                                    "MSFT Momentum: +39.6% in 5 weeks"
                                ].map((w, i) => <li key={i} className="flex justify-between"><span>{w.split(':')[0]}</span><span className="font-bold text-success">{w.split(':')[1]}</span></li>)}
                            </ul>
                            <ul className="space-y-2">
                                {[
                                    "AAPL Support Bounce: +28.4% in 2 weeks",
                                    "GOOGL Sector Rotation: +26.7% in 4 weeks",
                                    "CRM Cloud Rally: +24.8% in 7 weeks",
                                    "JPM Financial Surge: +19.3% in 3 weeks",
                                    "DIS Streaming Growth: +18.6% in 5 weeks"
                                ].map((w, i) => <li key={i} className="flex justify-between"><span>{w.split(':')[0]}</span><span className="font-bold text-success">{w.split(':')[1]}</span></li>)}
                            </ul>
                        </div>
                    </GlassCard>
                    <div className="mt-8 text-center">
                        <Button size="lg" className="shadow-neon">View Full Stock Track Record →</Button>
                        <p className="text-xs text-text-muted mt-4 max-w-2xl mx-auto">
                            Results represent actual fills from analyst accounts. Individual results vary based on execution, position sizing, and broker fills. Past performance does not guarantee future results. Stock trading involves risk of loss.
                        </p>
                    </div>
                </div>
            </Section>

            {/* ANALYST TEAM */}
            <Section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Meet the Stock Market Experts Behind Your Signals</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Jennifer L. - Chief Stock Strategist", exp: "18 Years Wall Street Experience", dw: "Former equity research analyst at Merrill Lynch covering technology and growth sectors. CFA charterholder. Managed $400M equity portfolio at hedge fund.", areas: ["Growth stock identification", "Earnings analysis", "Sector rotation"], track: "83% win rate on swing trade recommendations since 2019" },
                            { name: "Robert M. - Technical Analysis Lead", exp: "14 Years Professional Trading", dw: "Institutional trader specializing in momentum strategies and chart pattern recognition. CMT (Chartered Market Technician) certified. Trained 200+ professional traders.", areas: ["Price action mastery", "Volume profile analysis", "Breakout identification"], track: "Identified 31 of 37 major sector rotations in 2025" },
                            { name: "Amanda K. - Fundamental Research Director", exp: "12 Years Investment Analysis", dw: "Previously fundamental analyst at Fidelity Investments researching healthcare and consumer sectors. MBA from Wharton. Published industry research in major financial journals.", areas: ["Company financial analysis", "Earnings modeling", "Industry trend identification"], track: "76% accuracy on earnings-based signals over 5 years" }
                        ].map((member, i) => (
                            <GlassCard key={i} className={`p-8 h-full flex flex-col ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:w-3/4 md:mx-auto lg:w-full' : ''}`}>
                                <h3 className="text-lg font-black text-white">{member.name}</h3>
                                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{member.exp}</div>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-medium bg-white/5 p-4 rounded-xl flex-grow">{member.dw}</p>
                                <div className="space-y-2 mb-6">
                                    <span className="text-xs font-bold text-white uppercase block">Expertise:</span>
                                    {member.areas.map((a, idx) => <div key={idx} className="bg-primary/5 px-2 py-1 rounded text-xs text-primary">{a}</div>)}
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <span className="text-xs font-bold text-text-muted block mb-1">Track Record:</span>
                                    <p className="text-sm font-bold text-success">{member.track}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* PRICING FOR STOCK SIGNALS */}
            <Section className="py-24 bg-background-secondary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Professional Stock Alerts at a Fraction of the Cost</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <GlassCard className="p-10 rounded-[2.5rem] flex flex-col">
                            <h3 className="text-2xl font-black text-white mb-2">DELUXE</h3>
                            <p className="text-text-muted text-sm mb-4">Best For: Individual stock traders building consistent returns</p>
                            <div className="text-4xl font-black text-white mb-6">$59.99<span className="text-lg text-text-muted font-medium">/month</span></div>
                            <Button variant="outline" className="w-full mb-8">Start Free 7-Day Trial</Button>
                            <div className="space-y-3 flex-1 text-sm">
                                {["All stock signals (Swing, Day, Growth)", "3-5 signals per day", "Real-time push notifications", "Complete entry/exit details", "Technical + fundamental analysis", "Stop-loss and profit targets", "Performance tracking dashboard", "Standard delivery (1-2 second alerts)", "Mobile app access", "Email support", "Cancel anytime"].map((f, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                                        <span className="text-text-secondary font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard className="p-10 rounded-[2.5rem] flex flex-col border-primary shadow-neon relative overflow-hidden">
                            <div className="absolute top-5 right-5 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">Most Popular</div>
                            <h3 className="text-2xl font-black text-white mb-2">ULTIMATE</h3>
                            <p className="text-primary/80 text-sm mb-4">Best For: Serious stock traders maximizing edge and education</p>
                            <div className="text-4xl font-black text-white mb-2">$599.99<span className="text-lg text-text-muted font-medium">/year</span></div>
                            <p className="text-success font-bold text-sm mb-6">Savings: $120/year vs monthly plan</p>
                            <Button className="w-full mb-8 shadow-neon">Start Free 7-Day Trial</Button>
                            <div className="space-y-3 flex-1 text-sm">
                                <p className="font-bold text-white mb-2">Everything in Deluxe, PLUS:</p>
                                {["Priority delivery (30 seconds early access)", "Exclusive growth stock picks", "Monthly stock market webinar with analysts", "Earnings calendar integration", "Sector rotation reports (weekly)", "Stock education library (video courses)", "VIP Discord channel (direct analyst access)", "Advanced fundamental analysis in signals", "Portfolio tracking tools", "Priority support (live chat)", "SMS alerts (optional)"].map((f, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</div>
                                        <span className="text-white font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>

                    <div className="text-center mt-12 max-w-2xl mx-auto space-y-2">
                        <p className="text-white font-bold">Value Proposition:</p>
                        <p className="text-text-secondary text-sm">One 20% winning trade pays for 3+ months of Deluxe</p>
                        <p className="text-text-secondary text-sm">One 50% growth play pays for a full year of Ultimate</p>
                        <p className="text-text-secondary text-sm">One 124% winner (like our NVDA signal) pays for 2+ years</p>
                        <div className="mt-8 p-4 bg-white/5 rounded-xl inline-block border border-white/5">
                            <span className="text-xl">🔒</span> <span className="text-white font-bold ml-2">30-Day Money-Back Guarantee:</span> <span className="text-text-secondary text-sm">Not satisfied? Full refund within 30 days. No questions asked.</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ & RISK */}
            <Section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    {/* FAQ */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-black text-white mb-10 text-center">Stock Signals Questions Answered</h2>
                        <div className="space-y-4">
                            {[
                                { q: "How much capital do I need to trade stock signals?", a: "You can start with as little as $1,000-$2,000. With proper position sizing (5-10% per signal), you can take 1-2 positions at a time. As your account grows, you can add more positions. Many members start small and scale up as they gain confidence." },
                                { q: "What brokers work with your stock signals?", a: "Any US stock broker works. Popular choices include Fidelity, Charles Schwab, TD Ameritrade, E*TRADE, Interactive Brokers, Robinhood, and Webull. We provide the ticker, entry, and exit details you execute wherever you trade. No broker integration required." },
                                { q: "Do I need Pattern Day Trader (PDT) status to use day trade signals?", a: "For day trade signals, yes PDT rules require $25,000 minimum account balance if you execute 4+ day trades per week. If you have under $25k, focus on our swing trade and growth signals which don't trigger PDT restrictions. Most members use swing signals primarily." },
                                { q: "How quickly must I execute after receiving an alert?", a: "Swing trades: You typically have 30 minutes to several hours to enter within our price zone. Day trades: Execute within 5-15 minutes for optimal entry. Growth signals: Often valid for 1-3 days. We always specify urgency in the alert. Ultimate members get 30-second early access for better fills." },
                                { q: "What if the stock gaps up before I can enter?", a: "If the stock gaps beyond our entry zone at market open, we send a status update: either a revised entry zone, recommendation to wait for pullback, or cancellation if the setup is invalidated. Never chase better to miss a trade than enter at the wrong price." },
                                { q: "How many signals should I take per week?", a: "This depends on your account size and time availability. With a $5,000 account, you might take 1-2 swing trades at a time. With $25,000+, you could handle 3-5 concurrent positions. Quality over quantity it's better to execute 2 signals perfectly than 5 poorly." },
                                { q: "Do you provide signals for penny stocks?", a: "No. We focus on liquid stocks with adequate daily volume (typically $5M+ volume) and prices above $10. Penny stocks are too risky and illiquid for our risk management standards. We signal small-caps occasionally, but only those with institutional participation and adequate liquidity." },
                                { q: "What sectors do you focus on most?", a: "We follow where opportunity is. Technology and healthcare tend to generate the most signals due to higher volatility and growth potential. However, we signal across all sectors based on where setups meet our criteria. Sector rotation is part of our edge." },
                                { q: "How do I know when to exit a stock position?", a: "Every signal includes 3 profit targets (TP1, TP2, TP3) with specific exit percentages. You'll receive push notifications when each target is hit: \"Take 40% profit at TP1,\" \"Take another 40% at TP2,\" \"Trail final 20% with stop.\" We also alert you if stop-loss is triggered. Follow our exit plan to remove emotion." },
                                { q: "Can I hold positions longer than your recommended duration?", a: "Our signals are designed for specific timeframes (swing = days/weeks, growth = weeks/months). If a position is working and hitting targets, you can hold longer, but we recommend following our trailing stop guidance. Extended holds beyond our signals are your decision and risk." },
                                { q: "What happens if a stock reports earnings while I'm in a position?", a: "We track earnings dates for all signaled stocks. If earnings occur during the expected hold period, we mention this in the signal and may recommend exiting before earnings (to avoid gap risk) or sizing smaller. We'll send alerts as earnings approach." },
                                { q: "Are stock signals suitable for retirement accounts (IRA, 401k)?", a: "Swing and growth signals can work well in retirement accounts if your custodian allows active trading. Day trade signals are better suited for taxable brokerage accounts. Check with your specific retirement account provider regarding trading frequency limitations." },
                                { q: "Do you provide tax guidance on my stock trades?", a: "No. We provide trading signals, not tax advice. Consult with a tax professional regarding capital gains treatment, wash sale rules, and other tax implications of your trading activity." }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`bg-surface border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/50 shadow-lg' : 'border-white/5 hover:border-white/10'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="text-lg font-bold text-white pr-4">{item.q}</span>
                                        <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openIndex === i ? 'bg-primary text-white' : 'bg-white/5 text-text-secondary'}`}>
                                            {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-text-secondary leading-relaxed text-sm">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Risk Disclosure */}
                    <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/5 text-xs text-text-muted leading-relaxed text-justify">
                        <h5 className="text-white font-bold uppercase mb-4 text-sm text-center">Understand the Risks Before Trading Stocks</h5>
                        <p className="mb-4 font-medium text-text-secondary">Stock trading involves substantial risk of loss and is not appropriate for all investors. Stock prices can be volatile, and you can lose a significant portion of your investment.</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <span className="font-bold text-white underline block mb-1">Key Risks:</span>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Price Volatility: Stock prices fluctuate based on company performance, market conditions, and external events</li>
                                    <li>Company-Specific Risk: Negative earnings, management changes, or competitive threats can cause sharp declines</li>
                                    <li>Market Risk: Broad market downturns can affect even fundamentally strong stocks</li>
                                    <li>Liquidity Risk: Small-cap stocks may have wide bid-ask spreads or difficulty exiting positions</li>
                                    <li>Gap Risk: Stocks can gap up or down on news, leaving you unable to execute at desired prices</li>
                                    <li>Sector Risk: Industry-wide issues can impact all stocks in a sector simultaneously</li>
                                </ul>
                            </div>
                            <div>
                                <span className="font-bold text-white underline block mb-1">Risk Management Guidelines:</span>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Never risk more than 5-10% of your account on a single stock trade</li>
                                    <li>Always use stop-losses as specified in our signals</li>
                                    <li>Diversify across multiple positions and sectors</li>
                                    <li>Start with swing trades (more forgiving than day trades)</li>
                                    <li>Only trade with capital you can afford to lose</li>
                                    <li>Keep position sizes appropriate to your experience level</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mb-2"><span className="font-bold text-white">Not Financial Advice:</span> InterNative Traders provides educational stock signals and analysis. We are not registered investment advisors or brokers. Our signals are educational tools, not personalized financial advice. Always conduct your own due diligence and consult with a licensed financial advisor before making investment decisions.</p>
                        <p><span className="font-bold text-white">Past Performance Disclaimer:</span> Past performance is not indicative of future results. Historical win rates and returns do not guarantee similar future outcomes. Market conditions change continuously. What worked previously may not work in the future.</p>
                    </div>
                </div>
            </Section>

            {/* SOCIAL PROOF - STOCK TRADERS */}
            <Section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Stock Traders Trust Our Signals</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Daniel H.", role: "Swing Trader", quote: "I've been trading stocks for 10 years tried everything from expensive courses to $300/month newsletters. InterNative's stock signals are the real deal. The NVDA growth signal in October made me $14,600. That's more than I made in 6 months last year." },
                            { name: "Karen M.", role: "Part-Time Trader", quote: "As a full-time teacher, I can't day trade. The swing signals are perfect I check my phone twice a day, follow the entry/exit plan exactly as written, and I'm up 34% in 5 months. Finally a service that actually works for busy people." },
                            { name: "James T.", role: "Learning Trader", quote: "The fundamental analysis included with each signal has taught me more about investing than any course I've taken. I'm not just following blindly I'm learning WHY these setups work. My win rate improved from 52% to 74% in three months." },
                            { name: "Nicole R.", role: "Risk-Conscious Trader", quote: "The stop-losses saved my account. I used to hold losers hoping they'd recover big mistake. Now I follow their risk management religiously. My losses are tiny (6-8%) while my winners run 20-40%. The math finally works." },
                            { name: "Marcus P.", role: "Verified Member", quote: "81% win rate isn't hype I've tracked every signal for 4 months and it's legit. December alone I made $8,900 profit on stock signals. The scaling exit strategy (taking profits in stages) is genius. I used to sell too early or too late; now I nail it consistently." }
                        ].map((t, i) => (
                            <GlassCard key={i} className={`p-8 h-full flex flex-col ${i === 4 ? 'md:col-span-2 lg:col-span-1 md:w-3/4 md:mx-auto lg:w-full' : ''}`}>
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-4 h-4 rounded-full bg-gold" />)}
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6 italic flex-grow">"{t.quote}"</p>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-xs text-primary font-bold uppercase tracking-widest">{t.role}</div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* COMPARISON */}
            <Section className="py-24 bg-background-secondary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Not Sure Which Signal Type Is Right for You?</h2>
                    </div>

                    <div className="overflow-x-auto pb-4">
                        <table className="w-full min-w-[800px] border-collapse bg-[#0A051A]/50 rounded-2xl overflow-hidden block md:table">
                            <thead>
                                <tr className="text-xs font-black uppercase tracking-widest text-text-muted border-b border-white/10 bg-white/5">
                                    <th className="p-4 text-left">Feature</th>
                                    <th className="p-4 text-center text-primary border-b-2 border-primary">Stock Signals</th>
                                    <th className="p-4 text-center">Options Signals</th>
                                    <th className="p-4 text-center">Crypto Signals</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-medium text-text-secondary">
                                {[
                                    { f: "Win Rate", s: "81%", o: "82%", c: "74%" },
                                    { f: "Typical Returns", s: "15-40%", o: "50-200%", c: "20-80%" },
                                    { f: "Hold Time", s: "5-30 days", o: "0-45 days", c: "1-21 days" },
                                    { f: "Risk Level", s: "Low-Medium", o: "Medium-High", c: "Medium-High" },
                                    { f: "Capital Needed", s: "$1,000+", o: "$500+", c: "$500+" },
                                    { f: "Learning Curve", s: "Beginner-friendly", o: "Intermediate", c: "Beginner-friendly" },
                                    { f: "Market Hours", s: "9:30am-4pm ET", o: "9:30am-4pm ET", c: "24/7" },
                                    { f: "Volatility", s: "Moderate", o: "High", c: "Very High" },
                                    { f: "Perfect For", s: "Steady growth", o: "Leveraged gains", c: "24/7 opportunities" }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                                        <td className="p-4 font-bold text-white">{row.f}</td>
                                        <td className="p-4 text-center font-bold text-white bg-primary/5">{row.s}</td>
                                        <td className="p-4 text-center">{row.o}</td>
                                        <td className="p-4 text-center">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
                        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-center">
                            <h4 className="font-bold text-white mb-2">Start with Stock Signals if:</h4>
                            <p className="text-xs text-text-secondary">You're new to trading, have limited capital, prefer lower stress</p>
                        </div>
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 text-center">
                            <h4 className="font-bold text-white mb-2">Add Options Signals if:</h4>
                            <p className="text-xs text-text-secondary">You want leverage, can tolerate higher risk, have options trading experience</p>
                        </div>
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 text-center">
                            <h4 className="font-bold text-white mb-2">Include Crypto Signals if:</h4>
                            <p className="text-xs text-text-secondary">You want 24/7 market access, enjoy volatility, seek diversification</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FINAL CTA SECTION */}
            <Section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">Start Building Your Stock Portfolio with Expert Signals</h2>
                    <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">Join thousands of traders receiving profitable stock alerts with complete trade plans. No risk try free for 7 days.</p>

                    <div className="flex items-center justify-center gap-2 mb-10 text-sm font-bold text-white">
                        <span>1. Start Free Trial →</span>
                        <span>2. Get Your First Stock Signal →</span>
                        <span>3. Execute & Profit</span>
                    </div>

                    <Button size="lg" className="px-16 py-6 text-xl shadow-neon rounded-full">Get 7-Day Free Trial - No Credit Card Required</Button>

                    <div className="flex flex-wrap justify-center gap-6 mt-10 text-xs font-bold text-text-muted uppercase tracking-widest">
                        <div className="flex items-center gap-2">✓ No credit card to start trial</div>
                        <div className="flex items-center gap-2">✓ Cancel anytime, no contracts</div>
                        <div className="flex items-center gap-2">✓ 30-day money-back guarantee</div>
                        <div className="flex items-center gap-2">✓ Instant access to all signal types</div>
                        <div className="flex items-center gap-2">✓ 10,000+ active trader community</div>
                    </div>

                    <div className="flex justify-center gap-4 mt-12 opacity-50 hover:opacity-100 transition-opacity">
                        <span className="cursor-pointer hover:text-primary transition-colors text-sm font-bold border-b border-transparent hover:border-primary">Download iOS App</span>
                        <span className="text-white/20">|</span>
                        <span className="cursor-pointer hover:text-primary transition-colors text-sm font-bold border-b border-transparent hover:border-primary">Download Android App</span>
                    </div>
                </div>
            </Section>

        </div>
    );
};

export default StockSignals;
