import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "Is the education library really free for all members?",
            a: "Yes! Every InterNative Traders member (Deluxe or Ultimate) gets full access to our entire education library—all guides, videos, webinars, and resources. No upsells, no paywalls. The only exception is the live trading room (Ultimate members only)."
        },
        {
            q: "I'm a complete beginner—where should I start?",
            a: "Start with our 30-Day Beginner Path. Begin with 'What Are Trading Signals' and 'How To Use Trading Signals,' then follow the day-by-day curriculum. It's designed specifically for people who've never traded before."
        },
        {
            q: "Do I need to complete education before taking signals?",
            a: "No, but we recommend at least completing the beginner modules first (Week 1-2 of 30-Day Path). Understanding basics like entry/exit, stop-losses, and position sizing will help you execute signals properly and avoid costly mistakes."
        },
        {
            q: "How long does it take to complete all education?",
            a: "Beginner curriculum: 30 days if following our daily schedule. Intermediate: 2-3 months part-time. Advanced: 3-6 months. Full mastery: 12 months of learning + practicing. But you can start taking signals after just 1-2 weeks of basics."
        },
        {
            q: "Are certifications recognized outside InterNative?",
            a: "Our certifications demonstrate competency but are not regulatory licenses (Series 7, 65, etc.). They show you've completed structured trading education and maintain a profitable track record—valuable for trading-related industry roles."
        },
        {
            q: "Can I learn without taking your signals?",
            a: "Yes, our education stands alone as comprehensive trading education. However, learning is MUCH faster when you apply concepts immediately using our signals. Theory + practice = mastery."
        },
        {
            q: "What if I don't understand something?",
            a: "Multiple support options: (1) Rewatch video lessons, (2) Ask in community Discord, (3) Attend monthly live webinars for Q&A, (4) Ultimate members can ask during live trading room, (5) Email support@internativetraders.com."
        },
        {
            q: "Do you teach how to create my own signals eventually?",
            a: "Yes! The advanced and mastery levels teach you to identify setups yourself, backtest strategies, and build trading systems. Goal is to make you independent—though many profitable traders continue using our signals for additional opportunities."
        }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <HelpCircle className="w-4 h-4" />
                            Knowledge Base
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Education <br />
                            <GradientText>Questions Answered</GradientText>
                        </h2>
                        <p className="text-lg text-text-secondary font-medium">
                            Everything you need to know about our learning curriculum and resources.
                        </p>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, i) => (
                            <GlassCard
                                key={i}
                                className={`p-6 rounded-3xl border-white/5 transition-all duration-300 ${openIndex === i ? 'bg-white/5' : 'bg-white/[0.01]'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    className="w-full flex items-center justify-between gap-4 text-left"
                                >
                                    <span className="text-lg font-black text-white tracking-tight">{faq.q}</span>
                                    <div className={`p-2 rounded-full border border-white/10 shrink-0 transition-colors ${openIndex === i ? 'bg-primary border-primary text-white' : 'text-text-muted'}`}>
                                        {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>
                                {openIndex === i && (
                                    <div className="mt-6 pt-6 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
                                        <p className="text-text-secondary font-medium leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
