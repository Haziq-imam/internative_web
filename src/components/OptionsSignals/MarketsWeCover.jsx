import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const MarketsWeCover = () => {
    const markets = [
        {
            title: "S&P 500 (SPX/SPY)",
            desc: "The benchmark index with 500 largest US companies. Our most liquid and reliable signals.",
            coverage: ["SPY ETF options (weekly expirations)", "SPX index options (cash-settled)", "Sector-specific opportunities"],
            freq: "5-7/week"
        },
        {
            title: "Nasdaq 100 (QQQ)",
            desc: "Tech-heavy index for leveraged growth plays. High volatility = high profit potential.",
            coverage: ["QQQ ETF options (daily liquidity)", "Tech stock options (AAPL, NVDA, TSLA)", "TQQQ leveraged ETF options"],
            freq: "4-6/week"
        },
        {
            title: "Dow Jones (DIA)",
            desc: "Blue-chip industrial average for conservative options plays with steady movements.",
            coverage: ["DIA ETF options", "Dow component stocks (BA, CAT, GS)", "Sector rotation opportunities"],
            freq: "2-3/week"
        },
        {
            title: "Russell 2000 (IWM)",
            desc: "Small-cap index for explosive volatility and momentum trades.",
            coverage: ["IWM ETF options", "Small-cap breakout opportunities", "High beta individual stocks"],
            freq: "3-4/week"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Options Alerts Across All <br /><span className="text-gradient">Major US Indices</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {markets.map((m, i) => (
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
    );
};

export default MarketsWeCover;
