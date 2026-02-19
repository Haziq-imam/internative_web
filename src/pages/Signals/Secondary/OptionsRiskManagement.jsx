import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../../components/ui/Section';
import { ShieldCheck, Target, TrendingDown, Shield, AlertCircle, Bookmark } from 'lucide-react';
import OptionsHero from '../../../components/OptionsSecondary/OptionsHero';
import OptionsFAQ from '../../../components/OptionsSecondary/OptionsFAQ';
import OptionsCTA from '../../../components/OptionsSecondary/OptionsCTA';
import RiskOptimizerVisual from '../../../components/OptionsSecondary/visuals/RiskOptimizerVisual';

const OptionsRiskManagement = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            q: "What is the most important aspect of options risk management?",
            a: "Position sizing is the single most critical element. Even with a high win rate, a single oversized losing trade can wipe out weeks or months of profits. We recommend never risking more than 1-5% of your total account on any single trade."
        },
        {
            q: "How do I calculate proper position size?",
            a: "Determine your maximum dollar risk per trade (e.g., 2% of $10,000 = $200). Then, determine the distance to your stop-loss in dollars. Divide your max risk by the stop distance to find the number of contracts. If your max risk is $200 and your stop distance is $0.50 (50 points), your position size is 4 contracts."
        },
        {
            q: "Should I use hard stop-losses or mental stops?",
            a: "For most traders, hard stop-losses are better because they remove the emotional difficulty of cutting a loser. However, in illiquid options markets, hard stops can be triggered by wide bid-ask spreads. A hybrid approach—price alerts at your stop level followed by manual execution—is often preferred by professionals."
        },
        {
            q: "How do I manage risk with 0DTE options?",
            a: "0DTE requires extreme discipline. You should use smaller position sizes (1-2% max), implement strict time-based stops (e.g., exit if not profitable within 2 hours), and set an absolute daily loss limit for yourself to prevent 'revenge trading'."
        }
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <Helmet>
                <title>Options Risk Management | InterNative Traders</title>
                <meta name="description" content="Protect your capital with professional options risk management. Learn position sizing, stop-loss strategies, and the 2% rule to ensure long-term trading survival." />
            </Helmet>

            <OptionsHero
                badge="Capital protection"
                badgeIcon={ShieldCheck}
                title="Options"
                gradientTitle="Risk Management"
                description="Survival is the foundation of wealth. Learn how to protect your capital using position sizing, stop-loss discipline, and advanced hedging techniques."
                stats={[
                    { label: 'Risk/Trade', value: '1-5%' },
                    { label: 'Min R:R', value: '3:1' },
                    { label: 'Protection', value: 'Max' }
                ]}
                ctaText="Protect Your Capital"
                visual={RiskOptimizerVisual}
            />

            {/* Core Pillars */}
            <Section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Position Sizing",
                                desc: "The 1-5% Rule: Never allocate a chunk of capital large enough to cause emotional stress if the trade goes to zero.",
                                icon: Target
                            },
                            {
                                title: "Stop-Loss Discipline",
                                desc: "Predetermined exit points that preserve your remaining capital for the next opportunity.",
                                icon: Shield
                            },
                            {
                                title: "Risk-to-Reward",
                                desc: "Targeting trades where the potential gain is at least 2-3x the potential loss on entry.",
                                icon: TrendingDown
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="bg-surface border border-white/5 p-10 rounded-[2.5rem] hover:border-primary/50 transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Detailed Strategy Section */}
            <Section className="py-24 bg-surface/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8 tracking-tight uppercase">SYSTEMATIC PROTECTION</h2>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Effective risk management transforms options trading from gambling into a business of calculated speculation. Without it, even the best strategy will eventually lead to account destruction.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Portfolio Diversification", desc: "Avoiding concentration in single sectors or highly correlated tickers like SPY and QQQ." },
                                    { title: "Psychological Circuit Breakers", desc: "Setting mandatory breaks after three consecutive losses to prevent emotional decision-making." },
                                    { title: "Scenario Analysis", desc: "Testing how your position will respond to a 'Black Swan' event before you enter the trade." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary text-xs font-bold font-mono">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <div className="font-bold mb-1 text-white">{item.title}</div>
                                            <div className="text-sm text-text-secondary leading-relaxed">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
                            <div className="relative z-10 bg-background border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-auto text-[10px] font-mono text-white/20 tracking-widest uppercase">Risk Dashboard</div>
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                                            <span className="text-text-secondary">Position Risk</span>
                                            <span className="text-primary">2.4%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[35%] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-3">
                                            <span className="text-text-secondary">Max Drawdown Target</span>
                                            <span className="text-white">15.0%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-white/20 w-[60%] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-white/5">
                                            <div className="text-[10px] text-text-secondary uppercase font-black mb-1">Vol Alert</div>
                                            <div className="text-sm font-bold text-red-400">High IV Crush</div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5">
                                            <div className="text-[10px] text-text-secondary uppercase font-black mb-1">Theta Rate</div>
                                            <div className="text-sm font-bold">-$12.40/day</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <OptionsFAQ
                faqs={faqs}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
            />

            {/* Checklist Section */}
            <Section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="text-center mb-16">
                        <AlertCircle className="w-16 h-16 mx-auto mb-6 opacity-50" />
                        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">The 5-Point Survival Checklist</h2>
                        <p className="text-white/70 max-w-xl mx-auto italic">Before you click 'Buy', can you check all five boxes?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Is this position less than 5% of my total capital?",
                            "Do I have a hard or mental exit price determined?",
                            "Does my potential profit justify the potential loss?",
                            "Is my account already too concentrated in this sector?",
                            "Am I trading with money I can't afford to lose?"
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-black/10 border border-white/10 hover:bg-black/20 transition-colors">
                                <div className="w-6 h-6 rounded-md bg-white/20 flex-shrink-0 flex items-center justify-center">
                                    <Shield className="w-3 h-3 text-white" />
                                </div>
                                <span className="font-medium text-white/90 leading-tight">{text}</span>
                            </div>
                        ))}
                        <div className="flex items-center justify-center p-6 rounded-2xl border-2 border-white/20 border-dashed">
                            <Bookmark className="w-6 h-6 mr-2 opacity-50 text-white" />
                            <span className="text-white/50 text-xs font-bold uppercase tracking-widest italic">Always Trace Your Edge</span>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <a href="/pricing" className="inline-block bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                            Subscribe for Professional Oversight
                        </a>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
            </Section>

            <OptionsCTA
                title="READY TO TRADE SAFELY?"
                description="Join the elite group of traders following institutional flow with proper risk management. Try our signals free for 7 days."
                buttonText="Get Started Now"
                buttonLink="/pricing"
            />
        </div>
    );
};

export default OptionsRiskManagement;
