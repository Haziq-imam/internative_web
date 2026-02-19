import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../../components/ui/Section';
import { Search, AlertTriangle, TrendingUp, BarChart, ArrowRight, Eye, Target, Activity } from 'lucide-react';
import OptionsHero from '../../../components/OptionsSecondary/OptionsHero';
import OptionsFAQ from '../../../components/OptionsSecondary/OptionsFAQ';
import OptionsCTA from '../../../components/OptionsSecondary/OptionsCTA';
import RadarVisual from '../../../components/OptionsSecondary/visuals/RadarVisual';

const UnusualOptionsActivity = () => {

    const faqs = [
        {
            q: "What makes options activity 'unusual'?",
            a: "Activity is considered unusual when the trading volume of a specific contract significantly exceeds its daily average (often 5-10x) or exceeds its current Open Interest. This suggests that large players are making new, aggressive bets rather than just trading existing positions."
        },
        {
            q: "Does unusual volume always mean a big move is coming?",
            a: "Not necessarily. Sometimes UOA can be part of a complex hedge or a flat trade. However, when UOA is combined with aggressive 'Sweep' entry, multi-strike positioning, and high premium, the correlation with a future price move increases dramatically."
        },
        {
            q: "Is volume higher than Open Interest (Vol > OI) important?",
            a: "Yes, this is one of the strongest UOA signals. When volume exceeds the current Open Interest, it's mathematically certain that new positions are being opened. It shows fresh conviction from market participants."
        },
        {
            q: "How do I filter out the 'noise' in UOA?",
            a: "We filter for high-premium trades (typically $100k+), trades executed at the 'Ask' (aggressive buying), and 'Repeat' activity where the same contract is hit multiple times in a single session. This removes smaller retail trades and focus on institutional whale activity."
        }
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <Helmet>
                <title>Unusual Options Activity | InterNative Traders</title>
                <meta name="description" content="Detect market moves before they happen with unusual options activity. Track large sweeps, block trades, and aggressive positioning from institutions." />
            </Helmet>

            <OptionsHero
                badge="Whale alerts"
                badgeIcon={Search}
                title="Unusual"
                gradientTitle="Options Activity"
                description="Detect market anomalies before they hit the headlines. We scan for abnormal volume, massive premium spikes, and speculative bets that signal impending moves."
                stats={[
                    { label: 'Avg Vol', value: '3x+' },
                    { label: 'Conviction', value: '95%' },
                    { label: 'Detection', value: 'Live' }
                ]}
                ctaText="Start Hunting Whales"
                visual={RadarVisual}
            />

            {/* Definition Section */}
            <Section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What Is Unusual Options Activity (UOA)?</h2>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Unusual options activity occurs when trading volume or premium flow in specific options contracts significantly exceeds normal patterns, typically defined as volume surpassing 5 to 10 times the daily average.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                This abnormal activity often signals that institutional investors, hedge funds, or informed market participants are positioning ahead of anticipated price movements or major catalysts.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Volume exceeding daily averages by 500%+',
                                    'Daily volume surpassing existing Open Interest',
                                    'Massive premium concentration in single strikes',
                                    'Aggressive buying at the Ask price'
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
                                { label: 'Volume Spike', value: '5-10x Avg', icon: BarChart },
                                { label: 'Detection', value: 'Real-Time', icon: Eye },
                                { label: 'Metric', value: 'Vol > OI', icon: Activity },
                                { label: 'Signal Type', value: 'Institutional', icon: Target }
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

            {/* Identification Methods */}
            <Section className="py-24 bg-surface/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How to Identify UOA</h2>
                        <p className="text-text-secondary">The core data points that define a "smart money" trade.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Volume vs. Open Interest",
                                desc: "When the number of contracts traded today is higher than the number of total contracts currently held (Open Interest), it confirms NEW positions are being created."
                            },
                            {
                                title: "The 'Ask' Side",
                                desc: "If trades are hitting the Ask price, it shows the buyer is aggressive and willing to pay the premium immediately, rather than waiting for a better price."
                            },
                            {
                                title: "Premium Size",
                                desc: "We focus on 'Whale' activity where single trades exceed $100,000 in premium, indicating institutional strength rather than retail speculation."
                            }
                        ].map((strategy, i) => (
                            <div key={i} className="bg-background border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all group">
                                <div className="text-primary font-black text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
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

            {/* Warnings/Risk Section */}
            <Section className="py-24 bg-red-500/5 border-y border-red-500/10">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-6">A Note on UOA Risks</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                        Not all unusual activity is a winning signal. Institutions often use large options trades to hedge long stock positions (protecting against a move down) or to execute complex multi-leg strategies. Never follow UOA blindly without technical context and proper risk management.
                    </p>
                    <a href="/pricing" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        Get Started with Verified Signals <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </Section>

            <OptionsCTA
                title="READY TO HUNT WHALES?"
                description="Join the elite group of traders following institutional flow. Try our UOA signals free for 7 days."
                buttonText="Get Started Now"
                buttonLink="/pricing"
            />
        </div>
    );
};

export default UnusualOptionsActivity;
