import React from 'react';
import { Target, Clock, Shield, AlertCircle, Smartphone, Lock } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const FeaturesGrid = () => {
    const features = [
        { title: "Precision Entries", desc: "No more guessing at entry. We provide clear price ranges and limit orders to ensure you get the best fill possible.", icon: Target },
        { title: "Time-Sensitive Alerts", desc: "Our sub-second notification system ensures you receive signals the moment our analysts execute, not minutes later.", icon: Clock },
        { title: "Risk Management", desc: "Capital preservation is our first rule. Every signal includes a hard stop-loss and position sizing guidance.", icon: Shield },
        { title: "Expert Analysis", desc: "Every trade is backed by professional analysts with decades of collective market experience across all sectors.", icon: AlertCircle },
        { title: "Mobile Optimized", desc: "Receive alerts via Discord, Telegram, or SMS. One-click links take you directly to your brokerage app.", icon: Smartphone },
        { title: "Institutional Edge", desc: "We track dark pool orders and institutional flow to give you the same edge as the biggest banks on Wall Street.", icon: Lock }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Built for Success</h2>
                    <p className="text-text-secondary text-lg">Professional tools and insights to give you an unfair advantage in the stock market.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, i) => (
                        <GlassCard key={i} className="p-8 h-full flex flex-col items-start hoverEffect">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FeaturesGrid;
