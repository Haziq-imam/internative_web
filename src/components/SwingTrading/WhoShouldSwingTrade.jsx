import React from 'react';
import { CheckCircle2, XCircle, User, Clock, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const WhoShouldSwingTrade = () => {
    const idealTraders = [
        {
            title: "Part-Time Traders with Full-Time Jobs",
            description: "Swing trading requires only 30-60 minutes daily—15-30 minutes before market open and 15-30 minutes before close. Compatible with employment unlike day trading's constant monitoring.",
            requirements: [
                "Can review positions twice daily (morning/evening)",
                "Comfortable holding overnight and through weekends",
                "Don't need constant action to feel productive",
                "Can resist checking positions constantly from work"
            ]
        },
        {
            title: "Traders with $5K-$10K+ Capital",
            description: "Minimum realistic capital is $5,000-$10,000, though $15,000-$25,000 provides better flexibility. Unlike day trading's $25,000 PDT requirement, swing trading works with smaller accounts.",
            requirements: [
                "Minimum $5,000, preferably $10,000+",
                "Can diversify across 3-5 positions simultaneously",
                "Position sizes meaningful after 1-2% risk calculation",
                "Avoid Pattern Day Trader restrictions (<4 trades/5 days)"
            ]
        },
        {
            title: "Disciplined Traders Following Plans",
            description: "Success requires writing specific entry criteria, stop-loss placement, position sizing formulas, and profit targets before trading begins, then executing without emotional deviation.",
            requirements: [
                "Maintain documented trading plans",
                "Follow predefined rules without impulsive changes",
                "Track all trades in detailed journal",
                "Review performance weekly to identify patterns"
            ]
        },
        {
            title: "Patient Traders Waiting for Setups",
            description: "Quality opportunities emerge only 2-3 times weekly across a 20-30 stock watchlist. Traders needing constant action force marginal trades, degrading performance.",
            requirements: [
                "Comfortable waiting days for high-probability setups",
                "Don't force trades during slow periods",
                "Spend 80% of time observing, 20% executing",
                "Quality over quantity mindset (8-12 monthly trades)"
            ]
        },
        {
            title: "Risk-Tolerant (Not Reckless) Traders",
            description: "Positions fluctuate 3-8% intraday as normal volatility. Traders selling during these swings exit prematurely. However, excessive risk tolerance (holding past stops) proves equally destructive.",
            requirements: [
                "Handle overnight and weekend gap risk psychologically",
                "Don't panic during normal 3-8% position swings",
                "Honor stop-losses despite discomfort",
                "Balance risk acceptance with strict loss limitation"
            ]
        }
    ];

    const avoidTraders = [
        {
            title: "Traders Requiring Constant Action",
            reason: "Positions often consolidate for days before moving. Inability to tolerate waiting leads to premature exits or forcing additional low-quality trades.",
            alternative: "Day trading or scalping may suit you better than swing trading's measured pace."
        },
        {
            title: "Extremely Risk-Averse Traders",
            reason: "Stocks can gap 5-15% overnight on news. Traders who panic during normal swings or lose sleep worrying about positions lack the psychological profile for swing trading.",
            alternative: "Longer-term trend following or investing provides better stress management."
        },
        {
            title: "Beginners (<3-6 Months Chart Reading)",
            reason: "Cannot reliably distinguish strong pullbacks from reversals, leading to premature entries/exits. Pattern recognition requires watching hundreds of setups develop.",
            alternative: "Paper trade 2-3 months minimum. Start with longer-term investing before active swing trading."
        },
        {
            title: "Emotional / Impulsive Traders",
            reason: "Swing trading requires holding through volatility, resisting urges to exit when fear peaks. Traders who check constantly, move stops, or revenge trade lack necessary control.",
            alternative: "Master discipline through less stressful strategies or avoid active trading entirely."
        },
        {
            title: "Undercapitalized Accounts (<$5,000)",
            reason: "A $3,000 account risking 2% per trade risks only $60. With 5% stops, position size equals $1,200. Even winning trades produce minimal dollar gains after commissions.",
            alternative: "Build capital to $5,000-$10,000 minimum through consistent smaller strategies first."
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Who Should <GradientText>Swing Trade?</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Swing trading suits traders comfortable with overnight risk who can check positions twice daily but cannot monitor markets constantly. Honest self-assessment prevents costly mistakes.
                    </p>
                </div>

                {/* Ideal Traders */}
                <div className="mb-16">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">✓ Ideal Swing Trading Candidates</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {idealTraders.map((trader, index) => (
                            <GlassCard key={index} className="p-6 border-success/20">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-success" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-white mb-2">{trader.title}</h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">{trader.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-4">
                                    {trader.requirements.map((req, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-success/50 mt-1.5 shrink-0" />
                                            <p className="text-text-secondary text-xs">{req}</p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Should NOT Trade */}
                <div className="mb-12">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">✗ Who Should NOT Swing Trade</h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {avoidTraders.map((trader, index) => (
                            <GlassCard key={index} className="p-6 bg-red-500/5 border-red-500/20">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                                        <XCircle className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-white mb-2">{trader.title}</h4>
                                    </div>
                                </div>

                                <div className="space-y-3 pl-13">
                                    <div>
                                        <h5 className="text-xs font-black text-red-400 uppercase tracking-wider mb-1">Why Avoid</h5>
                                        <p className="text-text-secondary text-sm leading-relaxed">{trader.reason}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-black text-success uppercase tracking-wider mb-1">Better Alternative</h5>
                                        <p className="text-text-secondary text-sm leading-relaxed">{trader.alternative}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Swing vs Day Trading */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">Swing Trading vs. Day Trading</h3>
                    <GlassCard className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-black text-white">Swing Trading</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Holding Period</div>
                                        <div className="text-sm text-white font-bold">2 days to 6 weeks</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Time Commitment</div>
                                        <div className="text-sm text-white font-bold">30-60 min/day</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Capital Required</div>
                                        <div className="text-sm text-white font-bold">$5K-$10K minimum</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Profit Target</div>
                                        <div className="text-sm text-white font-bold">5-20% per trade</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                    </div>
                                    <h4 className="text-lg font-black text-white">Day Trading</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Holding Period</div>
                                        <div className="text-sm text-white font-bold">Minutes to hours</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Time Commitment</div>
                                        <div className="text-sm text-white font-bold">6+ hours/day</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Capital Required</div>
                                        <div className="text-sm text-white font-bold">$25K minimum (PDT)</div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <div className="text-xs text-text-muted mb-1">Profit Target</div>
                                        <div className="text-sm text-white font-bold">0.5-3% per trade</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default WhoShouldSwingTrade;
