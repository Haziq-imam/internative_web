import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../../components/ui/Section';
import { Calculator, Timer, Zap, BarChart, Info } from 'lucide-react';
import OptionsHero from '../../../components/OptionsSecondary/OptionsHero';
import OptionsFAQ from '../../../components/OptionsSecondary/OptionsFAQ';
import OptionsCTA from '../../../components/OptionsSecondary/OptionsCTA';
import ProbabilityMatrixVisual from '../../../components/OptionsSecondary/visuals/ProbabilityMatrixVisual';

const OptionsGreeksExplained = () => {

    const faqs = [
        {
            q: "Which Greek is the most important for beginners?",
            a: "Delta is generally considered the most important Greek to master first. It tells you how much your option's price will move for every $1 move in the underlying stock. It also serves as a rough estimate of the probability that the option will expire in-the-money."
        },
        {
            q: "How does Theta change as expiration approaches?",
            a: "Theta decay is not linear; it accelerates as the option gets closer to expiration, especially for at-the-money (ATM) options. This is why 'Lotto' trades (0-3 days to expiry) lose value so rapidly if the stock stays flat."
        },
        {
            q: "What is the relationship between Gamma and Delta?",
            a: "Gamma is the 'acceleration' of Delta. It measures how much Delta itself will change as the stock price moves. High Gamma means your Delta will increase rapidly as the trade goes in your favor, but it also means risk increases just as fast if it turns against you."
        },
        {
            q: "Does Vega matter for short-dated options?",
            a: "Vega matters much less for options with only a few days to live compared to those with months to go. However, during high-impact events like earnings, Vega becomes critical even for short-dated options due to the 'volatility crush' that occurs after the announcement."
        }
    ];

    const greeks = [
        {
            name: "Delta",
            symbol: "Δ",
            label: "Price Sensitivity",
            desc: "Measures change in option price per $1 move in the stock. Values range from 0 to 1 for calls and -1 to 0 for puts.",
            icon: BarChart
        },
        {
            name: "Gamma",
            symbol: "Γ",
            label: "Acceleration",
            desc: "Measures the rate of change in Delta. Highest for at-the-money options near expiration.",
            icon: Zap
        },
        {
            name: "Theta",
            symbol: "Θ",
            label: "Time Decay",
            desc: "Measures the daily price reduction as time passes. Always negative for long options.",
            icon: Timer
        },
        {
            name: "Vega",
            symbol: "ν",
            label: "Volatility",
            desc: "Measures sensitivity to changes in Implied Volatility (IV). Increasing IV raises option prices.",
            icon: Info
        }
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <Helmet>
                <title>Options Greeks Explained | InterNative Traders</title>
                <meta name="description" content="Understand Delta, Gamma, Theta, Vega, and Rho. Learn how the Greeks impact option pricing and how to use them to manage risk and optimize strategies." />
            </Helmet>

            <OptionsHero
                badge="Delta, Theta, Gamma"
                badgeIcon={Calculator}
                title="Options"
                gradientTitle="Greeks Explained"
                description="The bridge between price action and probability. Learn how Delta, Gamma, Theta, and Vega translate market forces into concrete numbers."
                stats={[
                    { label: 'ATM Delta', value: 'Δ .50' },
                    { label: 'Time Decay', value: 'Θ -0.15' },
                    { label: 'Accell', value: 'Γ .05' }
                ]}
                ctaText="Learn Mechanics"
                visual={ProbabilityMatrixVisual}
            />

            {/* Greeks Grid */}
            <Section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {greeks.map((greek, i) => (
                            <div key={i} className="bg-surface border border-white/5 p-8 rounded-3xl hover:border-primary/50 transition-all group">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <greek.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-4xl font-black text-white/10 group-hover:text-primary/20 transition-colors uppercase tracking-widest">{greek.symbol}</span>
                                </div>
                                <h3 className="text-2xl font-black mb-1">{greek.name}</h3>
                                <div className="text-xs text-primary font-bold uppercase tracking-widest mb-4">{greek.label}</div>
                                <p className="text-text-secondary text-sm leading-relaxed">{greek.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Strategic Usage Section */}
            <Section className="py-24 bg-surface/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8 tracking-tight">WHY GREEKS MATTER</h2>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Options Greeks provide traders with quantitative tools to understand risk exposure, predict price behavior, and make informed decisions about position management.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-8">
                                By mastering the Greeks, you transform from a reactive trader into a proactive strategist who knows exactly how their portfolio will respond to changing market conditions.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Risk Quantificaton", desc: "Know exactly how many dollars you'll gain or lose per price move." },
                                    { title: "Timing Optimization", desc: "Choose the right expiration date based on your expected move speed." },
                                    { title: "Strategy Selection", desc: "Identify which strategy benefits most from current volatility levels." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <div className="font-bold mb-1">{item.title}</div>
                                            <div className="text-sm text-text-secondary">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-background border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Common Greek Scenarios</h3>
                                <div className="space-y-6">
                                    <div className="p-5 rounded-2xl bg-surface border border-white/5">
                                        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                                            <Timer className="w-3 h-3" />
                                            Theta Warning
                                        </div>
                                        <div className="text-sm font-medium mb-1">Holding OTM calls through the weekend.</div>
                                        <div className="text-xs text-text-secondary line-through">Theta decay eats 15-20% of premium.</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-surface border border-white/5">
                                        <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest mb-2">
                                            <Zap className="w-3 h-3" />
                                            Gamma Boost
                                        </div>
                                        <div className="text-sm font-medium mb-1">Price moves into the money at expiry.</div>
                                        <div className="text-xs text-text-secondary italic">Delta explodes from 0.40 to 1.00 rapidly.</div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-surface border border-white/5">
                                        <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                                            <BarChart className="w-3 h-3" />
                                            Vega Crush
                                        </div>
                                        <div className="text-sm font-medium mb-1">Buying calls pre-earnings.</div>
                                        <div className="text-xs text-text-secondary italic">Price moves up, but IV drops 30%—net loss.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <OptionsFAQ
                faqs={faqs}
            />

            <OptionsCTA
                title="READY TO APPLY THE GREEKS?"
                description="Our signals are built on advanced Greek modeling to ensure optimal risk-to-reward. Stop guessing and start trading with data."
                buttonText="Join Ultimate Plan"
                buttonLink="/pricing"
            />
        </div>
    );
};

export default OptionsGreeksExplained;
