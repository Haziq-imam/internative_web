import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, ShieldCheck, Zap, BarChart3, ArrowRight } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import GradientText from '../../components/ui/GradientText';
import { Link } from 'react-router-dom';

const CompareTradingSignals = () => {
    const comparisons = [
        {
            title: 'Best Options Trading Signals',
            desc: 'Top-rated picks',
            href: '/compare/best-options-trading-signals',
            icon: Scale
        },
        {
            title: 'Best Trading Signals Platform',
            desc: 'Tool comparison',
            href: '/compare/best-trading-signals-platform',
            icon: ShieldCheck
        },
        {
            title: 'Options Trading Signals vs Copy Trading',
            desc: 'Strategy choice',
            href: '/compare/options-trading-signals-vs-copy-trading',
            icon: BarChart3
        },
        {
            title: 'Free vs Paid Trading Signals',
            desc: 'Value analysis',
            href: '/compare/free-vs-paid-trading-signals',
            icon: Zap
        }
    ];

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Compare Trading Signals | InterNative Traders</title>
                <meta name="description" content="Compare different trading signal services and platforms to find the best fit for your trading style and goals." />
            </Helmet>

            <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            Compare <GradientText>Trading Signals</GradientText>
                        </h2>
                        <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto">
                            We help you make informed decisions by comparing the most popular trading signal strategies and platforms.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {comparisons.map((item, i) => (
                            <Link key={i} to={item.href} className="group">
                                <GlassCard className="p-8 h-full border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-500 rounded-[2.5rem]" hoverEffect>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-secondary font-medium mb-8">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-black text-text-muted uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                        Read Comparison
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default CompareTradingSignals;
