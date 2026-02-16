import React from 'react';
import { Bell, TrendingUp, Shield, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

import { Link } from 'react-router-dom';

const GapCTA = () => {
    const features = [
        {
            icon: Bell,
            title: "Pre-Market Gap Alerts",
            description: "Receive notifications 7:00-9:30 AM ET for all 2%+ gaps with volume confirmation"
        },
        {
            icon: TrendingUp,
            title: "Gap Type Classification",
            description: "Every alert identifies gap type (common, breakaway, continuation, exhaustion)"
        },
        {
            icon: Shield,
            title: "Strategy Recommendations",
            description: "Clear guidance on whether to fade or follow each gap with entry/exit levels"
        },
        {
            icon: Zap,
            title: "Real-Time Updates",
            description: "Live management alerts when to take profits, move stops, or exit early"
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <GlassCard className="p-8 md:p-12 border-primary/20 shadow-neon">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                                Start Trading Gaps <GradientText>Like a Professional</GradientText>
                            </h2>
                            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                                Join thousands of traders who've eliminated guesswork from gap trading. Get expert gap analysis, classified setups, and precise entry/exit levels delivered to your phone every morning.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                                            <p className="text-text-secondary text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/pricing">
                                <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base shadow-neon">
                                    Start 7-Day Free Trial
                                </Button>
                            </Link>
                            <Link to="/pricing">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">
                                    View Pricing Plans
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-text-muted text-sm">
                                No credit card required • Cancel anytime • 60-75% statistical edge on gap fills
                            </p>
                        </div>
                    </GlassCard>

                    {/* Risk Disclosure */}
                    <div className="mt-8 max-w-4xl mx-auto">
                        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                            <h4 className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">Risk Disclosure</h4>
                            <p className="text-text-secondary text-xs leading-relaxed">
                                Gap trading involves substantial risk of loss including the possibility of losing your entire position value in minutes. Approximately 70-80% of gap traders lose money. Extreme volatility during market opens creates rapid price swings of 2-5%+ that can trigger stop-losses or create significant slippage. Not all gaps fill—25-40% never return to prior closing levels. This content is for educational purposes only and does not constitute financial advice. Gap trading requires significant day trading experience, pre-market access, and disciplined risk management. Trade only with capital you can afford to lose completely.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default GapCTA;
