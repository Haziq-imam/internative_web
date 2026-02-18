import React from 'react';
import { Star, Quote } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const SocialProof = () => {
    const testimonials = [
        {
            user: "Marcus T.",
            role: "Options Day Trader",
            text: "I've been trading options for 3 years and tried multiple signal services. InterNative is the only one that consistently delivers actionable, profitable setups. The NVDA call lotto in December made me $4,200 from a $900 investment. That's real money.",
            profit: "Verified Member"
        },
        {
            user: "Jessica P.",
            role: "Swing Trader",
            text: "The swing options signals are perfect for my schedule. I'm a full-time engineer, so I can't day trade. I check alerts twice a day, follow the entries/exits exactly as specified, and I'm up 67% in 4 months. No stress, just follow the plan.",
            profit: "Up 67%"
        },
        {
            user: "David K.",
            role: "Learning Trader",
            text: "What separates InterNative from other services is the COMPLETE trade plan. Entry range, three targets, stop-loss, AND the reasoning. I'm not just blindly following I'm learning options strategy while making money.",
            profit: "Member"
        },
        {
            user: "Angela R.",
            role: "Risk-Conscious Trader",
            text: "I was burning money on weekly options until I found these signals. The risk management alone is worth the subscription. Their stop-losses saved me from three major losers last month that could have wiped out my gains.",
            profit: "Saved Capital"
        },
        {
            user: "Tyler M.",
            role: "Verified Member",
            text: "82% win rate isn't marketing BS I've tracked every signal for 3 months and it's legit. Yes, you'll have losers, but the winners more than make up for it. November was my best month ever: +$11,400 profit.",
            profit: "+$11,400 Profit"
        }
    ];

    return (
        <Section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Trusted by Thousands of <br /><span className="text-gradient">Options Traders</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((test, i) => (
                        <GlassCard key={i} className="p-8 rounded-[2.5rem] flex flex-col h-full" hoverEffect>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary" fill="currentColor" />)}
                            </div>
                            <Quote className="text-primary/20 mb-4" size={40} />
                            <p className="text-text-secondary italic mb-6 leading-relaxed">"{test.text}"</p>
                            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-end">
                                <div>
                                    <div className="font-bold text-white">{test.user}</div>
                                    <div className="text-xs text-text-muted">{test.role}</div>
                                </div>
                                <div className="text-primary font-black text-xs uppercase tracking-widest">{test.profit}</div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SocialProof;
