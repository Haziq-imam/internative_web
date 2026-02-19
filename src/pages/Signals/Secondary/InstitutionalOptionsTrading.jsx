import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../../components/ui/Section';
import { Building2, Landmark, BarChart3, ArrowRight } from 'lucide-react';
import OptionsHero from '../../../components/OptionsSecondary/OptionsHero';
import OptionsFAQ from '../../../components/OptionsSecondary/OptionsFAQ';
import OptionsCTA from '../../../components/OptionsSecondary/OptionsCTA';
import WhaleWatchVisual from '../../../components/OptionsSecondary/visuals/WhaleWatchVisual';

const InstitutionalOptionsTrading = () => {

    const faqs = [
        {
            q: "How do institutions use options differently than retail traders?",
            a: "Institutions often use options as insurance (hedging) for their massive stock portfolios or to generate income through complex spread strategies. While retail traders often focus on direction, institutions focus on probability, volatility, and risk-adjusted returns."
        },
        {
            q: "What is institutional 'Smart Money'?",
            a: "Smart money refers to the capital managed by hedge funds, investment banks, and pension funds. Because they have access to superior research, data, and execution tools, their trades often precede significant market moves."
        },
        {
            q: "How can I spot an institutional trade in real-time?",
            a: "Look for 'Block Trades' and large 'Sweeps' that involve millions of dollars in premium. These trades are often too large for retail players to execute and represent high-conviction institutional positioning."
        },
        {
            q: "Do institutions ever trade 'Lottos'?",
            a: "Rarely. Institutions generally prefer longer-dated options (30-90 days) or LEAPS (1-2 years) to manage their long-term exposure. However, some high-frequency hedge funds do participate in 0DTE markets for tactical positioning."
        }
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <Helmet>
                <title>Institutional Options Trading | InterNative Traders</title>
                <meta name="description" content="Trade alongside the world's largest banks and hedge funds. Learn how institutions structure complex options positions and how you can ride their wave." />
            </Helmet>

            <OptionsHero
                badge="Elite hedge fund moves"
                badgeIcon={Building2}
                title="Institutional"
                gradientTitle="Options Trading"
                description="Trade alongside the world's largest banks and hedge funds. Learn how institutions structure complex options positions and how you can ride their wave."
                stats={[
                    { label: 'Funds Tracked', value: '500+' },
                    { label: 'Dark Pool', value: 'Live' },
                    { label: 'Conviction', value: 'Gold' }
                ]}
                ctaText="Follow the Smart Money"
                visual={WhaleWatchVisual}
            />

            {/* Core Differences Section */}
            <Section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 italic tracking-tighter">RETAIL VS. INSTITUTIONAL</h2>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Institutional options trading involves large-scale positions that move markets. Unlike retail traders who might buy 10 contracts, institutions trade in blocks of thousands, often representing millions of dollars in premium.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Their goal is often risk management rather than pure speculation. By understanding their positioning, we can identify key support and resistance levels built by the biggest players in the game.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Multi-million dollar premium block trades',
                                    'Complex multi-leg hedging strategies',
                                    'Direct exchange floor execution',
                                    'Dark pool and cross-order identification'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Min. Premium', value: '$100k+', icon: Landmark },
                                { label: 'Hold Period', value: '30-90 Days', icon: BarChart3 },
                                { label: 'Strategy', value: 'Hedging/Yield', icon: BarChart3 },
                                { label: 'Win Chance', value: 'Professional', icon: BarChart3 }
                            ].map((stat, i) => (
                                <div key={i} className="bg-surface border border-white/5 p-6 rounded-2xl">
                                    <stat.icon className="w-6 h-6 text-primary mb-4" />
                                    <div className="text-xs text-text-secondary uppercase font-bold tracking-widest mb-1">{stat.label}</div>
                                    <div className="text-xl font-black text-white">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Institutional Strategies */}
            <Section className="py-24 bg-surface/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Big Money Playbook</h2>
                        <p className="text-text-secondary">The primary ways institutions deploy capital in options.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Protective Puts",
                                desc: "Buying massive amounts of puts to protect multi-billion dollar stock portfolios against market crashes.",
                                icon: Landmark
                            },
                            {
                                title: "Override/Yield",
                                desc: "Selling calls against existing shares (Covered Calls) to generate extra income on large equity holdings.",
                                icon: BarChart3
                            },
                            {
                                title: "Speculative LEAPS",
                                desc: "Buying long-term calls (1-2 years out) to gain leveraged exposure to a company's recovery or growth.",
                                icon: Building2
                            }
                        ].map((strategy, i) => (
                            <div key={i} className="bg-background border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all group">
                                <strategy.icon className="w-10 h-10 text-primary mb-6 animate-pulse" />
                                <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{strategy.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <OptionsFAQ
                faqs={faqs}
            />

            <OptionsCTA
                title="WANT TO TRADE LIKE THE 1%?"
                description="Get real-time insights into institutional positioning and follow the smart money with InterNative Traders."
                buttonText="Upgrade to Ultimate"
                buttonLink="/pricing"
            />
        </div>
    );
};

export default InstitutionalOptionsTrading;
