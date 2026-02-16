import React from 'react';
import { Clock, TrendingDown, Lightbulb } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const PainPoints = () => {
    const problems = [
        {
            icon: Clock,
            problem: "No Time to Day Trade",
            desc: "The Problem: You have a full-time job. You can't watch the screen all day. Day trading signals expire in minutes. By the time you see the alert, the opportunity is gone.",
            solution: "Swing signals have WIDE entry windows (hours or even days). Check your phone twice a day. Enter when it fits YOUR schedule. No screen-watching required."
        },
        {
            icon: TrendingDown,
            problem: "Inconsistent Results",
            desc: "The Problem: You win 3 trades, then lose 2 big ones and you're back to zero. No clear system. Chasing tips from Twitter and Reddit. Profits disappear as fast as they come.",
            solution: "Every swing signal follows a proven 3-target exit system. Lock in 40% at TP1, 40% at TP2, trail 20%. Consistent process = consistent results."
        },
        {
            icon: Lightbulb, // Assuming Lightbulb for the third item based on the original emoji and common sense, as the instruction provided a partial third item with TrendingDown again.
            problem: "Overwhelmed by Choices",
            desc: "The Problem: Stocks? Options? Crypto? Futures? Which asset class? Which timeframe? Analysis paralysis keeps you on the sidelines while opportunities pass.",
            solution: "We deliver the BEST swing setups across ALL asset classes daily. Diversified opportunities. You pick what fits your risk tolerance and account size."
        }
    ];

    return (
        <Section className="py-20 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Most Traders Struggle with Swing Trading <span className="text-text-muted">(And How We Solve It)</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((item, i) => (
                        <GlassCard key={i} className={`p-8 rounded-[2rem] bg-background/50 h-full flex flex-col ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:w-3/4 md:mx-auto lg:w-full' : ''}`}>
                            <div className="text-4xl mb-6 text-primary"><item.icon className="w-12 h-12" /></div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.problem}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                            <div className="pt-6 border-t border-white/5 bg-primary/5 -mx-8 -mb-8 p-8 mt-auto">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    </div>
                                    <p className="text-sm font-medium text-white"><span className="font-bold text-primary flex items-center gap-1.5"><Lightbulb className="w-4 h-4" /> Our Solution:</span> {item.solution}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default PainPoints;
