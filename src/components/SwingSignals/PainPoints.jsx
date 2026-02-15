import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const PainPoints = () => {
    const problems = [
        {
            emoji: "⏰",
            problem: "Can't Day Trade - You Have a Life",
            desc: "The Problem: You have a full-time job. Kids. Responsibilities. You can't stare at screens from 9:30am to 4pm watching every tick. Day trading requires constant monitoring - one distraction and you miss your exit, turning a winner into a loser. You need a strategy that works around your life, not consumes it.",
            solution: "Swing trading signals hold positions for 3-21 days. You check your phone twice daily - morning and evening - not 50 times per hour. Our alerts include wide entry windows (hours, not minutes) so you can execute during lunch break. Perfect for professionals, parents, and anyone with actual responsibilities."
        },
        {
            emoji: "😰",
            problem: "Hold Too Long or Exit Too Soon",
            desc: "The Problem: You enter a great stock, it goes up 8%, you panic-sell thinking \"take profits before it reverses.\" Two weeks later it's up 40% without you. Or worse: you hold a loser hoping it recovers, turning a manageable -6% into a painful -25% loss. You lack a systematic exit plan.",
            solution: "Every swing signal includes three predetermined profit targets (take 40% at TP1, 40% at TP2, trail final 20%) AND a strict stop-loss level. You know BEFORE entering when you'll exit both wins and losses. Emotion removed, math applied, profits maximized."
        },
        {
            emoji: "🤯",
            problem: "Analysis Paralysis Kills Opportunity",
            desc: "The Problem: Should you trade stocks or options? Crypto or futures? Large-cap tech or small-cap growth? Breakout or pullback? By the time you finish researching, the setup is gone. Too many choices, not enough clarity, opportunity cost mounting.",
            solution: "We do the analysis across ALL markets. You get 2-4 handpicked swing setups daily - best opportunities from stocks, options, crypto, and futures. No scanning 5,000 tickers. No decision paralysis. Just the highest-probability swings ready to execute."
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
                            <div className="text-4xl mb-6">{item.emoji}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.problem}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                            <div className="pt-6 border-t border-white/5 bg-primary/5 -mx-8 -mb-8 p-8 mt-auto">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    </div>
                                    <p className="text-sm font-medium text-white"><span className="font-bold text-primary">💡 Our Solution:</span> {item.solution}</p>
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
