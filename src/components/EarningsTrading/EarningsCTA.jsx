import React from 'react';
import { Bell, TrendingUp, Shield, BarChart3 } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const EarningsCTA = () => {
    const features = [
        {
            icon: Bell,
            title: "Weekly Earnings Calendar",
            description: "Receive curated earnings setups 3-7 days before announcements with IV analysis and strategy recommendations"
        },
        {
            icon: TrendingUp,
            title: "Strategy Classification",
            description: "Every alert specifies which approach to use: volatility sell, directional play, pre-momentum, or PEAD"
        },
        {
            icon: Shield,
            title: "Defined-Risk Structures",
            description: "Complete spread specifications with entry prices, strike selection, and maximum loss calculations"
        },
        {
            icon: BarChart3,
            title: "IV Rank & Expected Move Analysis",
            description: "Historical vs. implied move comparisons identifying overpriced or underpriced volatility"
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
                                Trade Earnings <GradientText>With Statistical Edges</GradientText>
                            </h2>
                            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                                Join traders who've eliminated guesswork from earnings trading. Get expert IV analysis, classified setups, and precise spread structures for every earnings opportunity—delivered before markets price in the edge.
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
                            <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base shadow-neon">
                                Start 7-Day Free Trial
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-base">
                                View Pricing Plans
                            </Button>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-text-muted text-sm">
                                No credit card required • Cancel anytime • 65-75% win rate on volatility selling
                            </p>
                        </div>
                    </GlassCard>

                    {/* Risk Disclosure */}
                    <div className="mt-8 max-w-4xl mx-auto">
                        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                            <h4 className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">Risk Disclosure</h4>
                            <p className="text-text-secondary text-xs leading-relaxed">
                                Earnings trading involves substantial risk of loss including the possibility of losing your entire position value overnight. Approximately 75-85% of earnings traders lose money. Overnight gaps can exceed stop-losses by 200-500%, creating losses far beyond planned risk. IV crush destroys option buyer value even with correct directional predictions. Binary outcomes cannot be predicted reliably—thorough analysis frequently fails because market reactions don't align with logical expectations. This content is for educational purposes only and does not constitute financial advice. Earnings trading requires significant options experience (6-12 months minimum), Level 3 options approval, disciplined risk management, and capital of $15,000-$25,000+ for proper position sizing and diversification. Trade only with capital you can afford to lose completely. Past performance does not guarantee future results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default EarningsCTA;
