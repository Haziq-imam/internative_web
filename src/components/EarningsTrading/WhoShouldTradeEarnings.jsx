import React from 'react';
import { CheckCircle2, XCircle, User, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const WhoShouldTradeEarnings = () => {
    const idealTraders = [
        {
            title: "Experienced Options Traders",
            description: "Minimum 6-12 months of profitable options trading experience, understanding Greeks, IV dynamics, and spread structures before attempting earnings strategies.",
            requirements: [
                "Profitable track record with vertical spreads",
                "Understanding of implied volatility and IV crush",
                "Comfortable with multi-leg option strategies",
                "Experience managing positions through volatility"
            ]
        },
        {
            title: "Risk-Tolerant Traders",
            description: "Comfortable with concentrated position volatility and binary outcomes. Earnings positions regularly fluctuate 30-70% in value before announcements.",
            requirements: [
                "Psychological comfort with frequent losses (25-40%)",
                "Can set positions and wait without constant monitoring",
                "Don't panic during 30-70% pre-earnings swings",
                "Trust analysis rather than reacting to every price tick"
            ]
        },
        {
            title: "Active Traders with Market Access",
            description: "Can monitor positions frequently and have pre-market/after-hours access. Many earnings release outside regular hours requiring extended trading capability.",
            requirements: [
                "Ability to monitor breaking news and analyst updates",
                "Pre-market access (7:00-9:30 AM ET)",
                "After-hours access (4:00-8:00 PM ET)",
                "Can respond to conference call developments"
            ]
        },
        {
            title: "Well-Capitalized Accounts",
            description: "$15,000-$25,000+ accounts allow proper position sizing and diversification. Conservative earnings sizing (0.5-1.5% per trade) requires adequate capital for meaningful profits.",
            requirements: [
                "Minimum $15,000, preferably $25,000+",
                "Can diversify across 5-8 earnings plays simultaneously",
                "Positions large enough for meaningful profits after commissions",
                "Pattern day trader status for unrestricted access"
            ]
        },
        {
            title: "Analytical Traders",
            description: "Enjoy researching companies, analyzing historical data, and developing statistical edges. Success requires backtesting historical reactions and comparing implied vs. actual moves.",
            requirements: [
                "Comfortable with data analysis and backtesting",
                "Understand statistical probability and edge",
                "Can filter for high-probability setups systematically",
                "Track performance metrics to refine approach"
            ]
        }
    ];

    const avoidTraders = [
        {
            title: "Beginners (<6 Months Experience)",
            reason: "Earnings trading combines IV dynamics, binary risk, complex spreads, and overnight gaps—too many simultaneous challenges for new traders.",
            alternative: "Master basic swing trading and simple options strategies first. Practice safer strategies for 6-12 months before earnings."
        },
        {
            title: "Conservative Traders",
            reason: "Even well-executed earnings strategies face 25-40% losing trade percentages. Traders needing high win rates and stable returns struggle psychologically.",
            alternative: "Focus on high-probability swing trading or covered call strategies with 70%+ win rates."
        },
        {
            title: "Stock-Only Traders",
            reason: "Most profitable earnings approaches require Level 3 options approval for selling spreads. Stock-only faces unlimited overnight risk without defined-risk protection.",
            alternative: "Get options approval and practice spreads on non-earnings trades before attempting earnings."
        },
        {
            title: "Emotional Traders",
            reason: "Holding positions through binary events while watching after-hours moves requires exceptional emotional control most traders lack.",
            alternative: "Develop discipline through less stressful strategies. If you've revenge-traded or moved stops to avoid losses, master psychology first."
        },
        {
            title: "Undercapitalized Accounts (<$10K)",
            reason: "Conservative sizing (1% per trade) on $5,000 means $50 risk per trade. Profits too small after commissions, cannot diversify properly.",
            alternative: "Build capital to $15,000-$25,000 minimum through consistent smaller strategies before active earnings trading."
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Who Should <GradientText>Trade Earnings?</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Earnings trading suits experienced traders comfortable with elevated risk and binary outcomes. Honest self-assessment prevents costly mistakes.
                    </p>
                </div>

                {/* Ideal Traders */}
                <div className="mb-16">
                    <h3 className="text-2xl font-black text-white mb-8 text-center">✓ Ideal Earnings Trading Candidates</h3>
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
                    <h3 className="text-2xl font-black text-white mb-8 text-center">✗ Who Should NOT Trade Earnings</h3>
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

                {/* Self-Assessment */}
                <div className="max-w-4xl mx-auto">
                    <GlassCard className="p-8 bg-primary/5 border-primary/20">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                <User className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white mb-2">Quick Self-Assessment</h3>
                                <p className="text-text-secondary">Answer honestly to determine if earnings trading suits your profile:</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Have you traded options profitably for 6+ months?",
                                "Do you understand implied volatility and IV crush?",
                                "Are you comfortable with 25-40% losing trade rates?",
                                "Can you size positions at 0.5-1.5% risk per trade?",
                                "Do you have Level 3 options approval for spreads?",
                                "Is your account $15,000+ minimum?",
                                "Can you monitor pre-market and after-hours?",
                                "Are you comfortable holding through binary events?",
                                "Can you accept frequent losses without revenge trading?",
                                "Do you enjoy data analysis and backtesting?"
                            ].map((question, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                                    <div className="w-5 h-5 rounded border-2 border-primary/50 shrink-0 mt-0.5" />
                                    <p className="text-sm text-text-secondary">{question}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-white/5 rounded-xl text-center">
                            <p className="text-sm text-text-secondary">
                                <span className="text-white font-bold">If you answered "yes" to 8+ questions:</span> You're likely ready for earnings trading.
                                <br />
                                <span className="text-white font-bold">If you answered "yes" to 5-7 questions:</span> Consider paper trading first.
                                <br />
                                <span className="text-white font-bold">If you answered "yes" to 5 questions:</span> Master foundational skills before attempting earnings.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default WhoShouldTradeEarnings;
