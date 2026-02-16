import React from 'react';
import { AlertCircle, AlertTriangle, TrendingDown, Lightbulb } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const PainPoints = () => {
    const problems = [
        {
            icon: AlertCircle,
            problem: "Information Paralysis",
            desc: "With over 5,000 stocks to track, analyzing charts, earnings, sectors, and news takes so long that most profitable entry opportunities are missed.",
            solution: "We monitor the entire market 24/7. Our analysts filter through thousands of stocks to identify only the highest-probability setups. You get 3-5 handpicked opportunities daily no information overload, just actionable trades."
        },
        {
            icon: AlertTriangle,
            problem: "Emotional Trading",
            desc: "The Problem: You buy at the top out of FOMO. You sell at the bottom in panic. You hold losers too long hoping they'll recover. Emotions sabotage even the best stock picks.",
            solution: "Every signal comes with predetermined exit points both stop-loss and profit targets. You know exactly when to exit before entering the trade. Remove emotion, follow the plan, protect your capital."
        },
        {
            icon: TrendingDown,
            problem: "Poor Risk Management",
            desc: "The Problem: One 40% loss wipes out four 10% winners. You risk too much on \"sure things\" that turn into disasters. Position sizing is guesswork. Your portfolio bleeds slowly.",
            solution: "Every alert includes calculated stop-loss levels and position size recommendations based on your account. We cap losses at 6-8% max per trade while letting winners run to 20-50%+ gains."
        }
    ];

    return (
        <Section className="py-20 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Most Stock Traders Struggle <span className="text-text-muted">(And How We Solve It)</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((item, i) => (
                        <GlassCard key={i} className={`p-8 rounded-[2rem] bg-background/50 h-full flex flex-col ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:w-3/4 md:mx-auto lg:w-full' : ''}`}>
                            <div className="text-4xl mb-6 text-primary"><item.icon className="w-12 h-12" /></div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.problem}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                            <div className="pt-6 border-t border-white/5 bg-primary/5 -mx-8 -mb-8 p-8 mt-auto min-h-[160px] flex flex-col justify-center">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    </div>
                                    <p className="text-sm font-medium text-white"><span className="font-bold text-primary flex items-center gap-1.5"><Lightbulb className="w-4 h-4" /> Our Solution:</span> {item.solution.replace("We monitor the entire market 24/7. ", "")}</p>
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
