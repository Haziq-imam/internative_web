import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../../components/ui/Section';
import { Waves, Activity, Zap, ArrowRight, BarChart3, Lock } from 'lucide-react';
import OptionsHero from '../../../components/OptionsSecondary/OptionsHero';
import OptionsFAQ from '../../../components/OptionsSecondary/OptionsFAQ';
import OptionsCTA from '../../../components/OptionsSecondary/OptionsCTA';
import FlowFeedVisual from '../../../components/OptionsSecondary/visuals/FlowFeedVisual';

const OptionsFlowSignals = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            q: "What is the difference between a 'Sweep' and a 'Block' trade?",
            a: "A 'Sweep' is an order that is broken up and executed across multiple exchanges simultaneously to get filled as quickly as possible—this often signals high urgency. A 'Block' is a large, privately negotiated trade executed off-exchange or as a single print, often signaling a large institution adjusting a significant position."
        },
        {
            q: "How fast do I need to act on flow signals?",
            a: "Flow signals move fast. For 'Aggressive Sweeps', we recommend execution within 5-10 minutes. For 'Golden Sweeps' (very large, high-conviction trades), the window can be slightly longer, but speed is generally a significant factor in capturing the same move as the whales."
        },
        {
            q: "Do flow signals guarantee a price move?",
            a: "No. While flow shows where big money is betting, it doesn't guarantee a result. Whales can be wrong, or they could be hedging another position. We filter flow to identify 'unhedged' or 'speculative' bets, which have a much higher correlation with upcoming price action."
        },
        {
            q: "What tickers does your flow tracking cover?",
            a: "We track the entire options market, but our alerts focus on high-impact names: SPY, QQQ, NVDA, TSLA, AAPL, AMZN, and emerging momentum stocks that show unusual institutional interest."
        }
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <Helmet>
                <title>Options Flow Signals | InterNative Traders</title>
                <meta name="description" content="Follow smart money with real-time options flow signals. Identify large institutional bets and repeat buy orders on top tickers." />
            </Helmet>

            <OptionsHero
                badge="Smart money tracking"
                badgeIcon={Waves}
                title="Options"
                gradientTitle="Flow Signals"
                description="Real-time institutional order tracking. We monitor millions of dollars in premium flow to identify where the 'whale' money is moving before the price action starts."
                stats={[
                    { label: 'Prem Filter', value: '$100K+' },
                    { label: 'Alert Speed', value: '<30s' },
                    { label: 'Real-Time', value: '100%' }
                ]}
                ctaText="Access Live Flow Feed"
                visual={FlowFeedVisual}
            />

            {/* What Are Flow Signals Section */}
            <Section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What Are Options Flow Signals?</h2>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Options flow signals are real-time alerts identifying large institutional options trades that indicate where hedge funds and sophisticated market participants are positioning.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                These signals track unusual activity including block trades and sweep orders that exceed normal volume patterns, suggesting informed positioning rather than retail trading.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Real-time sweep and block tracking',
                                    'Multi-exchange order identification',
                                    'Institutional premium size analysis',
                                    'Repeat aggressive buying detection'
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
                                { label: 'Order Types', value: 'Sweeps/Blocks', icon: Zap },
                                { label: 'Data Source', value: 'OPRA Real-time', icon: Activity },
                                { label: 'Filter Level', value: '$100k+ Premium', icon: BarChart3 },
                                { label: 'Market Edge', value: 'Institutional', icon: Lock }
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

            {/* Identification & Strategy */}
            <Section className="py-24 bg-surface/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How We Filter Flow</h2>
                        <p className="text-text-secondary">Separating random noise from high-conviction signals.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Aggressive Sweeps",
                                desc: "Orders executed across all exchanges simultaneously, often hitting the 'Ask' price, signaling extreme urgency to get filled.",
                                icon: Zap
                            },
                            {
                                title: "Golden Sweeps",
                                desc: "Large premium orders (usually $1M+) that represent a high percentage of the underlying stock's daily options volume.",
                                icon: BarChart3
                            },
                            {
                                title: "Repeat Buying",
                                desc: "Multiple orders coming in for the same strike and expiration within a short timeframe, confirming strong directional bias.",
                                icon: Activity
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
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
            />

            <OptionsCTA
                title="FOLLOW THE SMART MONEY"
                description="Stop guessing and start tracking institutional flow. Get real-time whale alerts with InterNative Traders."
                buttonText="Try Free 7 Days"
                buttonLink="/pricing"
            />
        </div>
    );
};

export default OptionsFlowSignals;
