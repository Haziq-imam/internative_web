import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../../components/ui/Section';
import { TrendingUp, Clock, Target, Shield, ArrowRight } from 'lucide-react';
import OptionsHero from '../../../components/OptionsSecondary/OptionsHero';
import OptionsFAQ from '../../../components/OptionsSecondary/OptionsFAQ';
import OptionsCTA from '../../../components/OptionsSecondary/OptionsCTA';
import SwingLogicVisual from '../../../components/OptionsSecondary/visuals/SwingLogicVisual';

const OptionsSwingTrading = () => {

    const faqs = [
        {
            q: "How much capital do I need for options swing trading?",
            a: "While you can start with as little as $2,000, we recommend $5,000 to $10,000 for proper diversification. Swing trading often involves holding multiple positions simultaneously, and having enough capital allows you to size each trade at 3-5% of your account, protecting you from individual trade volatility."
        },
        {
            q: "What is the typical holding period?",
            a: "Options swing trades are generally held for 3 to 21 days. The goal is to capture short-to-intermediate term trends or technical breakouts without the pressure of intraday execution or the multi-month commitment of position investing."
        },
        {
            q: "Which tickers are best for swing trading?",
            a: "Highly liquid large-cap stocks and ETFs are best. We primarily focus on SPY, QQQ, NVDA, TSLA, AAPL, and MSFT. These names offer tight bid-ask spreads and clear technical patterns that are reliable for multi-day moves."
        },
        {
            q: "Do I need to monitor the market all day?",
            a: "No. Unlike day trading, swing trading is perfect for people with full-time jobs. You only need to check your positions 1-2 times per day—typically once in the morning and once near the market close—to manage entries, exits, or stop-loss adjustments."
        }
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <Helmet>
                <title>Options Swing Trading | InterNative Traders</title>
                <meta name="description" content="Master options swing trading strategies. Learn how to hold positions for multi-day gains using institutional flow and technical analysis." />
            </Helmet>

            <OptionsHero
                badge="Strategic weekly plays"
                badgeIcon={TrendingUp}
                title="Options"
                gradientTitle="Swing Trading"
                description="Capture high-probability multi-day trends. Master the art of holding positions for intermediate gains using institutional flow and advanced technical analysis."
                stats={[
                    { label: 'Win Rate', value: '78%' },
                    { label: 'Hold Time', value: '3-21D' },
                    { label: 'Avg R:R', value: '2.5:1' }
                ]}
                ctaText="Join Swing Trading Room"
                visual={SwingLogicVisual}
            />

            {/* Definition Section */}
            <Section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What Is Options Swing Trading?</h2>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Options swing trading is a strategy that holds options positions for multiple days to several weeks, aiming to capture price movements from short to intermediate-term trends, technical patterns, and catalysts.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Swing traders typically hold options for 3 to 21 days, positioning to profit from price swings that develop over this extended timeframe without the pressure of intraday execution.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Multi-day to multi-week hold times',
                                    'Focus on technical breakouts and trend reversals',
                                    'Lower stress than intraday day trading',
                                    'Strategic institutional flow tracking'
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
                                { label: 'Hold Time', value: '3-21 Days', icon: Clock },
                                { label: 'Min. Capital', value: '$2,000+', icon: Target },
                                { label: 'Profit Target', value: '50-150%', icon: TrendingUp },
                                { label: 'Risk Level', value: 'Moderate', icon: Shield }
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

            {/* Mechanics & Strategies */}
            <Section className="py-24 bg-surface/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Core Strategies</h2>
                        <p className="text-text-secondary">How we target high-probability swing opportunities.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Technical Breakouts",
                                desc: "Identifying stocks consolidating within a range and entering when they break above key resistance levels with high volume."
                            },
                            {
                                title: "Institutional Flow",
                                desc: "Following 'Smart Money' trades where institutions are positioning millions of dollars in premium for mid-term moves."
                            },
                            {
                                title: "Catalyst Momentum",
                                desc: "Positioning ahead of or immediately following major news events, earnings run-ups, or sector rotations."
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

            <OptionsCTA
                title="READY TO START SWING TRADING?"
                description="Get our professional swing signals delivered instantly to your device. Try Ultimate free for 7 days."
                buttonText="Get Started Now"
                buttonLink="/pricing"
            />
        </div>
    );
};

export default OptionsSwingTrading;
