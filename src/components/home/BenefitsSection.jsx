import React from 'react';
import { TrendingUp, PieChart, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Profitable Opportunities",
            description: "Capture more winning trades with setups that have favorable risk-to-reward ratios.",
            stat: "78% Win Rate",
            link: "/performance",
            cta: "View Verified Results"
        },
        {
            icon: PieChart,
            title: "Portfolio Optimization",
            description: "Mix lotto plays, swing trades, and day trades to create a balanced strategy.",
            stat: "Dyamic Mix",
            link: "/signals/swing",
            cta: "Explore Strategies"
        },
        {
            icon: Brain,
            title: "Informed Decisions",
            description: "Every signal includes the reasoning behind the trade. Learn while you earn.",
            stat: "Expert Analysis",
            link: "/education",
            cta: "Read Signal Breakdown"
        },
        {
            icon: Shield,
            title: "Risk Management",
            description: "We prioritize preservation of capital with defined stop-losses and position sizing.",
            stat: "Capital Protection",
            link: "/risk-disclosure",
            cta: "Learn Methodology"
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Why Choose <br className="md:hidden" /> InterNative Traders?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="group relative bg-surface border border-white/5 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <benefit.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                            <p className="text-text-secondary text-sm mb-6 h-12">{benefit.description}</p>

                            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                <span className="text-xs font-bold text-accent-green uppercase tracking-wider">{benefit.stat}</span>
                            </div>

                            <div className="mt-4">
                                <Link to={benefit.link} className="text-sm font-medium text-white group-hover:text-primary inline-flex items-center gap-1 transition-colors">
                                    {benefit.cta} →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
