import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bitcoin, Zap, Activity, Globe } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Stats from '../../components/ui/Stats';
import CheckList from '../../components/ui/CheckList';

const CryptoSignals = () => {
    return (
        <>
            <Helmet>
                <title>Crypto Trading Signals | InterNative</title>
                <meta name="description" content="24/7 Crypto signals for Bitcoin, Ethereum, and Altcoins. Spot optimal entries and ride the volatility." />
            </Helmet>

            {/* Hero */}
            <Section className="relative pt-48 pb-32 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl" />
                <div className="text-center max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        24/7 Global Asset Alert
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[1.1] tracking-tighter font-display">
                        Crypto Never Sleeps. <br />
                        <span className="text-gradient">Neither Do We.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
                        Get real-time insights for Bitcoin, Ethereum, and high-alpha altcoins. Spot entries, precision leverage calls, and institutional HODL strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="px-14 py-5 text-xl shadow-neon">Start Crypto Trial</Button>
                        <Button size="lg" variant="outline" className="px-14 py-5 text-xl">Verified Track Record</Button>
                    </div>
                </div>
            </Section>

            {/* Benefits Grid */}
            <Section className="bg-background-secondary/30 py-32 border-y border-white/5">
                <div className="grid md:grid-cols-3 gap-10">
                    <GlassCard className="p-10 rounded-[2.5rem]" hoverEffect>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/5 shadow-neon">
                            <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Global Alpha</h3>
                        <p className="text-text-secondary text-lg leading-relaxed font-medium">
                            Our team monitors global macro events and on-chain liquidity to predict major market shifts before they trigger.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-10 rounded-[3rem] border-primary/40 bg-primary/5 shadow-neon relative" hoverEffect>
                        <div className="absolute top-6 right-8">
                            <div className="px-3 py-1 rounded-full bg-primary text-[8px] font-black uppercase tracking-widest text-white tracking-widest">High Alpha</div>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-10 border border-primary/30">
                            <Bitcoin className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Altcoin Gems</h3>
                        <p className="text-text-secondary text-lg leading-relaxed font-medium">
                            We identify low-cap projects with exponential potential before they hit major retail exchanges.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-10 rounded-[2.5rem]" hoverEffect>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/5 shadow-neon">
                            <Activity className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Leverage Plays</h3>
                        <p className="text-text-secondary text-lg leading-relaxed font-medium">
                            Precision entries for high-probability futures trading with strict institutional risk management guidelines.
                        </p>
                    </GlassCard>
                </div>
            </Section>

            {/* Live Feed Teaser */}
            <Section className="py-32 lg:py-48 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Verified Performance
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight font-display">Recent <br /><span className="text-gradient">Winners.</span></h2>
                        <div className="space-y-6">
                            {[
                                { pair: "BTC/USDT", type: "Long", entry: "$64,200", exit: "$68,500", gain: "+420%" },
                                { pair: "SOL/USDT", type: "Long", entry: "$124", exit: "$156", gain: "+185%" },
                                { pair: "ETH/USDT", type: "Short", entry: "$3,450", exit: "$3,100", gain: "+95%" },
                            ].map((signal, i) => (
                                <GlassCard key={i} className="flex justify-between items-center p-6 rounded-3xl group hover:bg-white/10 transition-all duration-300">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary font-black shadow-neon group-hover:scale-110 transition-transform">
                                            <Bitcoin size={28} />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-white">{signal.pair}</div>
                                            <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1">{signal.type} | Entry: {signal.entry}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-success drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">{signal.gain}</div>
                                        <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-1">Leverage {signal.type === 'Short' ? '5x' : '10x'}</div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    <GlassCard className="p-12 md:p-16 rounded-[4rem] border-white/10 bg-background-secondary/40 backdrop-blur-2xl">
                        <h2 className="text-4xl font-black text-white mb-10 tracking-tight">The Crypto Edge.</h2>
                        <p className="text-xl text-text-secondary mb-12 font-medium leading-relaxed">
                            Volatility is opportunity. Our proprietary algorithms thrive in high-velocity markets, delivering institutional-grade signals 24/7.
                        </p>
                        <CheckList items={[
                            "Highest volatility asset class alpha",
                            "24/7 algorithmic market monitoring",
                            "Institutional flow & Liquidity tracking",
                            "Macro-economic trend integration"
                        ]} className="mb-12 space-y-6 text-lg text-white/90 font-semibold" />
                        <Button className="w-full py-6 text-2xl shadow-neon">Unlock Crypto Signals</Button>
                    </GlassCard>
                </div>
            </Section>
        </>
    );
};

export default CryptoSignals;
