import React from 'react';
import { CheckCircle2, XCircle, DollarSign, TrendingUp, Clock, Brain } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const WhoShouldTrade = () => {
    const idealTraders = [
        {
            icon: Clock,
            title: "Active Morning Traders",
            description: "Can monitor markets during 9:00-11:00 AM ET window when gaps resolve. Gap trading demands attention to pre-market action (7:00-9:30 AM) and intense focus during opening 90 minutes.",
            requirements: [
                "Available 7:00-11:00 AM ET daily",
                "Can execute quickly when setups trigger",
                "Comfortable with fast-paced decision making"
            ]
        },
        {
            icon: Brain,
            title: "Experienced Traders",
            description: "6-12 months of profitable day trading or swing trading success. Gap trading combines intraday execution speed with swing trading patience while adding pre-market research complexity.",
            requirements: [
                "Proven track record of profitable trading",
                "Strong pattern recognition skills",
                "Emotional control during volatility"
            ]
        },
        {
            icon: DollarSign,
            title: "Well-Capitalized Accounts",
            description: "$15,000-$25,000+ accounts allow proper position sizing and diversification. Conservative gap sizing (1-1.5% risk) on smaller accounts creates positions too small for meaningful profits.",
            requirements: [
                "Minimum $15,000 trading capital",
                "Ability to hold 2-3 positions simultaneously",
                "Sufficient capital after commissions/slippage"
            ]
        },
        {
            icon: TrendingUp,
            title: "Risk-Tolerant Traders",
            description: "Comfortable with 40-60% win rates. Success depends on ensuring average winners exceed average losers by 1.5-2.5x, not on being right most of the time.",
            requirements: [
                "Accept frequent losses as part of strategy",
                "Focus on risk-reward over win rate",
                "Emotional comfort with volatility"
            ]
        }
    ];

    const notSuitable = [
        {
            profile: "Part-Time Traders",
            reason: "Unable to monitor markets 9:00-11:00 AM ET",
            alternative: "Consider swing trading or after-hours research strategies"
        },
        {
            profile: "Beginners (<6 months)",
            reason: "Lack pattern recognition and execution discipline",
            alternative: "Master basic day/swing trading first, then graduate to gaps"
        },
        {
            profile: "No Pre-Market Access",
            reason: "Missing critical information about gap strength/weakness",
            alternative: "Verify broker supports 7:00 AM-9:30 AM trading before starting"
        },
        {
            profile: "Conservative Investors",
            reason: "Gap volatility (2-5% swings in minutes) creates psychological stress",
            alternative: "Focus on stable, longer-term investment strategies"
        },
        {
            profile: "Accounts Under $10,000",
            reason: "Position sizes too small for meaningful profits after costs",
            alternative: "Build capital to $15,000-$20,000 through other strategies first"
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Is Gap Trading <GradientText>Right for You?</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Gap trading isn't for everyone. Success requires specific skills, capital levels, and time availability. Here's an honest assessment of who thrives and who struggles.
                    </p>
                </div>

                {/* Ideal Traders */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-success" />
                        </div>
                        <h3 className="text-2xl font-black text-white">Ideal Gap Trading Candidates</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {idealTraders.map((trader, index) => {
                            const Icon = trader.icon;
                            return (
                                <GlassCard key={index} className="p-6 border-success/20">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-success" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-white mb-2">{trader.title}</h4>
                                            <p className="text-text-secondary text-sm leading-relaxed">{trader.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mt-4 pl-16">
                                        {trader.requirements.map((req, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                                                <p className="text-text-secondary text-xs">{req}</p>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            );
                        })}
                    </div>
                </div>

                {/* Not Suitable */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                            <XCircle className="w-6 h-6 text-red-400" />
                        </div>
                        <h3 className="text-2xl font-black text-white">Who Should NOT Trade Gaps</h3>
                    </div>

                    <div className="space-y-4">
                        {notSuitable.map((item, index) => (
                            <GlassCard key={index} className="p-5 bg-red-500/5 border-red-500/20">
                                <div className="grid md:grid-cols-3 gap-4 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                            <h4 className="text-white font-bold text-sm">{item.profile}</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-text-secondary text-xs"><span className="text-red-400 font-bold">Why:</span> {item.reason}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-secondary text-xs"><span className="text-success font-bold">Alternative:</span> {item.alternative}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Self-Assessment */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <GlassCard className="p-8 bg-primary/5 border-primary/20">
                        <h3 className="text-xl font-black text-white mb-4 text-center">Quick Self-Assessment</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h4 className="text-success font-black uppercase tracking-wider mb-3 text-xs">You're Ready If:</h4>
                                <div className="space-y-2">
                                    {[
                                        "You have 6+ months profitable trading experience",
                                        "You can trade actively 9:00-11:00 AM ET daily",
                                        "Your account is $15,000+ with proper risk capital",
                                        "You're comfortable with 40-60% win rates",
                                        "You have pre-market trading access"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                                            <p className="text-text-secondary text-xs">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-red-400 font-black uppercase tracking-wider mb-3 text-xs">Wait If:</h4>
                                <div className="space-y-2">
                                    {[
                                        "You're new to trading (< 6 months)",
                                        "You can't monitor markets in the morning",
                                        "Your account is under $10,000",
                                        "You need high win rates for confidence",
                                        "Gap volatility creates emotional stress"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                            <p className="text-text-secondary text-xs">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default WhoShouldTrade;
