import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart2, Hash, Layers } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import CheckList from '../../components/ui/CheckList';

const StockSignals = ({ type }) => {
    const getContent = () => {
        switch (type) {
            case 'day-trading':
                return {
                    title: "Intraday Mastery",
                    highlight: "Day Trading.",
                    description: "Elite intraday signals for high-volume stocks. Capturing institutional moves before the retail crowd reacts.",
                    helmetTitle: "Day Trading Stock Signals | InterNative",
                    helmetDesc: "Get real-time intraday stock signals. High-win rate alerts for active day traders.",
                    badge: "Intraday Alpha"
                };
            case 'momentum':
                return {
                    title: "Ride the",
                    highlight: "Momentum.",
                    description: "Identifying strong trend continuations and explosive breakouts using proprietary volume-profile models.",
                    helmetTitle: "Momentum Stock Signals | InterNative",
                    helmetDesc: "Explosive breakout signals for momentum traders. Capture the strongest trends in the equity markets.",
                    badge: "Growth Velocity"
                };
            case 'swing':
                return {
                    title: "Capturing the",
                    highlight: "Swing.",
                    description: "Multi-day positions designed to capture the meat of the move. Patience meets institutional precision.",
                    helmetTitle: "Swing Trading Stock Signals | InterNative",
                    helmetDesc: "Professional swing trading alerts for stocks. Multi-day targets with defined risk-reward ratios.",
                    badge: "Swing Precision"
                };
            case 'earnings':
                return {
                    title: "Mastering",
                    highlight: "Earnings.",
                    description: "Volatility-based strategies for quarterly reports. Trade the reaction, not the coin flip.",
                    helmetTitle: "Earnings Trading Strategy | InterNative",
                    helmetDesc: "Expert strategies for trading earnings releases. Data-driven signals for high-volatility events.",
                    badge: "Earnings Alpha"
                };
            case 'gap':
                return {
                    title: "Trading the",
                    highlight: "Gap.",
                    description: "Strategic entries on morning gap-ups and gap-downs. Capturing the overnight institutional sentiment.",
                    helmetTitle: "Gap Up / Gap Down Stock Signals | InterNative",
                    helmetDesc: "Strategic signals for trading market gaps. Capture institutional flow from the opening bell.",
                    badge: "Market Open Edge"
                };
            default:
                return {
                    title: "Stocks for",
                    highlight: "Every Strategy.",
                    description: "Whether you're day trading volatility or building a retirement portfolio, our equity analysts have you covered with institutional-grade data.",
                    helmetTitle: "Stock Trading Signals | InterNative",
                    helmetDesc: "Professional stock picks for swing trading and long-term growth. Beat the S&P 500 with our expert analysis.",
                    badge: "Equity Markets"
                };
        }
    };

    const content = getContent();

    return (
        <>
            <Helmet>
                <title>{content.helmetTitle}</title>
                <meta name="description" content={content.helmetDesc} />
            </Helmet>

            <Section className="pt-48 pb-32 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            {content.badge}
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter font-display">
                            {content.title} <br />
                            <span className="text-gradient">{content.highlight}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary mb-12 font-medium leading-relaxed max-w-xl">
                            {content.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button size="lg" className="px-12 py-5 text-xl shadow-neon">Get Stock Alerts</Button>
                            <Button size="lg" variant="outline" className="px-12 py-5 text-xl">Historical Results</Button>
                        </div>
                    </div>
                    <GlassCard className="p-10 bg-background-secondary/40 backdrop-blur-2xl rounded-[3rem] border-white/5 shadow-neon">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-2xl font-black text-white tracking-tight">Recent Alpha</h3>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Live Updates</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {[
                                { ticker: "AMD", type: "Breakout", gain: "+12.4%", color: "primary" },
                                { ticker: "PLTR", type: "Swing", gain: "+24.8%", color: "secondary" },
                                { ticker: "COIN", type: "Momentum", gain: "+18.2%", color: "accent-indigo" },
                            ].map((trade, i) => (
                                <div key={i} className="flex justify-between items-center p-6 rounded-3xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all duration-300">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary font-black text-xl border border-white/10 group-hover:scale-110 transition-transform">
                                            {trade.ticker[0]}
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-white">{trade.ticker}</div>
                                            <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1">{trade.type}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-success drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">{trade.gain}</div>
                                        <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-1 text-nowrap">Closed Trade</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </Section>

            <Section className="bg-background-secondary/30 py-32 border-y border-white/5">
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { icon: Hash, title: "Day Trading", desc: "Precision intraday moves on high-volume tickers with institutional order flow." },
                        { icon: Layers, title: "Swing Trading", desc: "Capturing multi-day breakout moves based on proprietary technical models." },
                        { icon: BarChart2, title: "Long Term", desc: "Fundamental deep dives for concentrated portfolio alpha and wealth building." }
                    ].map((item, i) => (
                        <GlassCard key={i} className="p-10 text-center rounded-[2.5rem]" hoverEffect>
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 mx-auto border border-primary/20">
                                <item.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-text-secondary text-lg leading-relaxed font-medium">{item.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default StockSignals;
