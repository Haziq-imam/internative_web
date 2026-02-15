import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import Button from '../ui/Button';
import { Star, Flame, AlertTriangle, Clock, PlayCircle, ArrowRight } from 'lucide-react';

const FeaturedGuides = () => {
    const guides = [
        {
            title: "What Are Trading Signals",
            badge: "Most Popular",
            badgeIcon: Star,
            badgeColor: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
            description: "Definition of trading signals and how they work. How professional traders use signals and debunking common misconceptions.",
            for: "Complete beginners new to trading signals",
            time: "15-minute read + 10-minute video",
            link: "/education/what-are-trading-signals",
            points: ["Definition & Mechanics", "Types of Signals", "Quality Evaluation"]
        },
        {
            title: "How Options Trading Works",
            badge: "Essential",
            badgeIcon: Star,
            badgeColor: "bg-primary/10 text-primary border-primary/20",
            description: "What options contracts are (calls vs puts). How options pricing works, strike prices, and risks vs rewards explained.",
            for: "Traders wanting to understand options basics",
            time: "25-minute read + 20-minute video",
            link: "/education/how-options-trading-works",
            points: ["Calls vs Puts", "Pricing & Expiration", "Leverage Mechanics"]
        },
        {
            title: "What Is Lotto Options",
            badge: "High Risk/Reward",
            badgeIcon: Flame,
            badgeColor: "bg-orange-500/10 text-orange-500 border-orange-500/20",
            description: "Definition of 'lotto' or 'lottery' options. 0-3 DTE strategies and when to use them for explosive returns.",
            for: "Intermediate traders seeking leveraged gains",
            time: "20-minute read + 15-minute video",
            link: "/education/what-is-lotto-options",
            points: ["Short-dated Strategies", "Sizing High-Risk Plays", "Real Trade Examples"]
        },
        {
            title: "0DTE Options Explained",
            badge: "Advanced",
            badgeIcon: AlertTriangle,
            badgeColor: "bg-red-500/10 text-red-500 border-red-500/20",
            description: "Zero Days to Expiration (0DTE) strategies. Extreme risk and reward explained with professional execution protocols.",
            for: "Advanced options traders only",
            time: "30-minute read + 25-minute video",
            link: "/education/0dte-options-explained",
            points: ["Intraday Mechanics", "SPX/SPY Opportunities", "Professional Protocols"]
        },
        {
            title: "How To Use Trading Signals",
            badge: "Start Here",
            badgeIcon: Star,
            badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
            description: "Step-by-step signal execution process. How to read our signal format, entry timing, and position sizing strategies.",
            for: "New InterNative members",
            time: "20-minute read + 30-minute walkthrough video",
            link: "/education/how-to-use-trading-signals",
            points: ["Execution Workflow", "Scaling Out Targets", "Broker Integration"]
        }
    ];

    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        Start With These <br />
                        <GradientText>Essential Guides</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium">
                        Not sure where to begin? These five pillars represent the core methodology of InterNative Traders. Master these, and you're ahead of 90% of retail traders.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((guide, i) => (
                        <GlassCard key={i} className="flex flex-col h-full rounded-[3rem] p-10 border-white/5 bg-white/[0.01]" hoverEffect>
                            <div className="mb-8 flex justify-between items-start">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${guide.badgeColor}`}>
                                    <guide.badgeIcon size={12} />
                                    {guide.badge}
                                </div>
                            </div>

                            <h3 className="text-3xl font-black text-white mb-6 tracking-tight leading-tight">
                                {guide.title}
                            </h3>

                            <div className="space-y-4 mb-8">
                                {guide.points.map((p, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">{p}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm font-medium text-text-secondary mb-10 leading-relaxed flex-grow">
                                {guide.description}
                            </p>

                            <div className="space-y-6 pt-6 border-t border-white/5 mt-auto">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-text-muted uppercase tracking-widest">
                                        <Clock size={12} className="text-primary" />
                                        {guide.time}
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                                        <Star size={12} />
                                        For: {guide.for}
                                    </div>
                                </div>
                                <Button className="w-full group py-4 text-xs font-black uppercase tracking-widest">
                                    Start Learning
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FeaturedGuides;
