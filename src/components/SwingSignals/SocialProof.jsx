import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const SocialProof = () => {
    const testimonials = [
        {
            name: "Sarah M.",
            role: "Teacher & Part-Time Trader",
            quote: "I can't watch markets during the day. Swing trading with InterNative changed my life. I check my phone during lunch and after school. Made $18,400 in 5 months.",
            impact: "+$18,400 Profit"
        },
        {
            name: "Dr. Michael R.",
            role: "Surgeon & Swing Trader",
            quote: "The entry windows are a game-changer. I can't execute signals 'in 5 minutes.' Swing signals give me DAYS to enter. Up 34% in 4 months while working 60-hour weeks.",
            impact: "Up 34% Portfolio"
        },
        {
            name: "James K.",
            role: "Former Day Trader",
            quote: "Tried day trading and lost my sanity. Switched to swing trading—less stress, better returns. The three-target exit system is genius: take profits early, let winners run.",
            impact: "Stress-Free Trading"
        },
        {
            name: "Monica L.",
            role: "Single Mom",
            quote: "Needed income but couldn't day trade. Swing signals are perfect: 15 minutes in morning, quick check after bedtime. Made $6,200 last month on 3 stock swings.",
            impact: "+$6,200 Monthly"
        },
        {
            name: "Tyler P.",
            role: "Options Swing Trader",
            quote: "I don't gamble on lottos anymore. I buy 30-45 DTE options and hold 7-14 days. Recent AMD call swing: +156% in 15 days = $3,120 profit on $2k position.",
            impact: "+156% on AMD"
        },
        {
            name: "Rachel T.",
            role: "Verified Member",
            quote: "79% win rate verified over 3 months. What I love most: they SHOW the losers too. No BS. My average winner (+24%) crushes my average loser (-7%). Math works.",
            impact: "Verified 79% Win Rate"
        }
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Part-Time Traders, Full-Time Results</h2>
                    <p className="text-text-secondary text-lg">Join thousands of professionals trading around their jobs and families.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <GlassCard key={i} className="p-8 hoverEffect flex flex-col h-full bg-[#0A051A]/60">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 text-warning fill-warning" />
                                ))}
                            </div>
                            <p className="text-text-secondary text-sm italic mb-6 leading-relaxed flex-grow">"{t.quote}"</p>

                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-white text-sm">{t.name}</div>
                                    <div className="text-xs text-text-muted">{t.role}</div>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-[10px] font-black uppercase tracking-wider">
                                    {t.impact}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SocialProof;
