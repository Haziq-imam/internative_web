import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, X } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import CheckList from '../../components/ui/CheckList';

const Beginners = () => {
    return (
        <>
            <Helmet>
                <title>Trading for Beginners | InterNative</title>
                <meta name="description" content="Your first steps into professional trading. Avoid common mistakes and learn the right way to start." />
            </Helmet>

            {/* Hero */}
            <Section className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Stop Gambling. <br />
                        <span className="text-gradient">Start Trading.</span>
                    </h1>
                    <p className="text-xl text-text-secondary mb-12">
                        90% of traders fail because they treat the market like a casino. We're here to teach you the other 10%.
                    </p>
                </div>
            </Section>

            {/* Do's and Don'ts */}
            <Section className="bg-background-secondary">
                <div className="grid md:grid-cols-2 gap-12">
                    <GlassCard className="p-8 border-success/30">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-full bg-success/20"><Check className="text-success" /></div>
                            The Right Way
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Starts with a trading plan",
                                "Never risks more than 2% per trade",
                                "Uses stop losses religously",
                                "Journals every single trade",
                                "Focuses on process, not profits"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary">
                                    <Check size={16} className="text-success mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8 border-danger/30">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <div className="p-2 rounded-full bg-danger/20"><X className="text-danger" /></div>
                            The Wrong Way
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Chases 'hot' stocks from social media",
                                "Averages down on losing positions",
                                "Trades with money they can't lose",
                                "Revenge trades after a loss",
                                "Looks for a 'get rich quick' scheme"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary">
                                    <X size={16} className="text-danger mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </Section>

            {/* Roadmap */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Your Path to <span className="text-gradient">Profitability</span></h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {[
                        { step: "01", title: "Education First", text: "Don't place a trade until you understand the basics of price action and risk." },
                        { step: "02", title: "Paper Trading", text: "Practice with virtual money to test your strategy without financial risk." },
                        { step: "03", title: "Small Size", text: "Start live trading with minimal size to master your psychology." },
                        { step: "04", title: "Scale Up", text: "Only increase position size after proving consistency over 3 months." }
                    ].map((item, i) => (
                        <GlassCard key={i} className="flex gap-6 p-6 items-start">
                            <div className="text-4xl font-bold text-white/10">{item.step}</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-text-secondary">{item.text}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className="shadow-neon">Start Level 1 Course</Button>
                </div>
            </Section>
        </>
    );
};

export default Beginners;
