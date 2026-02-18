import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Target, Shield, AppWindow, Zap, ArrowRight } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import GradientText from '../../components/ui/GradientText';
import { Link } from 'react-router-dom';

const TradingToolsAndAccess = () => {
    const tools = [
        {
            title: 'Trading Signals For Beginners',
            desc: 'Getting started',
            href: '/trading-tools-access/trading-signals-for-beginners',
            icon: BookOpen,
            color: 'text-blue-500'
        },
        {
            title: 'Advanced Options Trading',
            desc: 'Expert techniques',
            href: '/trading-tools-access/advanced-options-trading',
            icon: Target,
            color: 'text-purple-500'
        },
        {
            title: 'Trading Signals Risk Guide',
            desc: 'Capital protection',
            href: '/trading-tools-access/trading-signals-risk-guide',
            icon: Shield,
            color: 'text-emerald-500'
        },
        {
            title: 'Trading Signals App',
            desc: 'Portable alerts',
            href: '/trading-tools-access/trading-signals-app',
            icon: AppWindow,
            color: 'text-orange-500'
        },
        {
            title: 'Real-Time Trading Alerts',
            desc: 'Instant delivery',
            href: '/trading-tools-access/real-time-trading-alerts',
            icon: Zap,
            color: 'text-yellow-500'
        }
    ];

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Trading Tools & Access | InterNative Traders</title>
                <meta name="description" content="Master the markets with our comprehensive suite of trading tools, expert guides, and real-time alert systems." />
            </Helmet>

            <Section className="pt-32 pb-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            Trading <GradientText>Tools & Access</GradientText>
                        </h2>
                        <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto">
                            Everything you need to master the markets, from beginner basics to professional-grade tools and real-time alerts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, i) => (
                            <Link key={i} to={tool.href} className="group">
                                <GlassCard className="p-8 h-full border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-500 rounded-[2.5rem]" hoverEffect>
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 ${tool.color} group-hover:scale-110 transition-transform duration-500`}>
                                        <tool.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
                                        {tool.title}
                                    </h3>
                                    <p className="text-text-secondary font-medium mb-8">
                                        {tool.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-black text-text-muted uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                        Open Tool
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

export default TradingToolsAndAccess;
