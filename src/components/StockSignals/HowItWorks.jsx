import React from 'react';
import { Search, Bell, Briefcase, Target, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: "1. We Analyze the Market",
            desc: "Our analyst team uses advanced screening to monitor 2,500+ stocks daily.",
            points: ["Chart pattern recognition", "Volume & momentum analysis", "Fundamental catalyst review", "Institutional flow tracking"]
        },
        {
            icon: Bell,
            title: "2. You Receive Instant Alert",
            desc: "Push notification sent to your phone within seconds of trade identification.",
            points: ["Precise entry zone", "Risk & Win Probability", "Stop-loss & Profit Targets", "Trade reasoning included"]
        },
        {
            icon: Briefcase,
            title: "3. You Execute the Trade",
            desc: "Use your existing broker to enter the position in minutes.",
            points: ["Works with any broker", "Limit order guidance", "Position sizing advice", "Clear risk parameters"]
        },
        {
            icon: Target,
            title: "4. We Guide the Exit",
            desc: "Active trade management with real-time updates as the trade plays out.",
            points: ["Profit target alerts", "Trailing stop adjustments", "Early exit warnings", "News impact updates"]
        }
    ];

    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">From Market Scan to Portfolio Growth</h2>
                    <p className="text-text-secondary text-lg">A simple, repeatable process that removes the guesswork from stock trading.</p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 border-t border-dashed border-white/20" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10">
                            <GlassCard className="p-8 h-full flex flex-col items-center text-center hoverEffect group bg-[#0A051A]/80">
                                <div className="w-16 h-16 rounded-2xl bg-[#0F0924] border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <step.icon className="w-8 h-8 text-primary" />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center border border-[#0A051A]">
                                        {i + 1}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-text-secondary text-sm mb-6 min-h-[40px]">{step.desc}</p>

                                <div className="space-y-3 w-full text-left bg-white/5 p-4 rounded-xl">
                                    {step.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                                            <ArrowRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default HowItWorks;
