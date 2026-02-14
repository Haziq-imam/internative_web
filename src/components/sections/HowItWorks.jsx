import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Bell, TrendingUp, Smartphone } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';

const HowItWorks = () => {
    const steps = [
        {
            icon: UserPlus,
            title: "1. Join & Download",
            text: "Sign up for instant access and download our mobile app for iOS or Android."
        },
        {
            icon: Bell,
            title: "2. Get Real-Time Alerts",
            text: "Receive push notifications for new trade setups with exact entry/exit prices."
        },
        {
            icon: TrendingUp,
            title: "3. Execute & Profit",
            text: "Follow the trade plan. Enter when we enter, take profit when we take profit."
        },
        {
            icon: Smartphone,
            title: "4. Track Performance",
            text: "Monitor your portfolio growth and view our transparency reports in-app."
        }
    ];

    return (
        <Section className="bg-background relative overflow-hidden py-32 lg:py-48">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="text-center max-w-4xl mx-auto mb-24 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    The Process
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-tight font-display">
                    Simple Steps to <br />
                    <span className="text-gradient">Professional Trading.</span>
                </h2>
                <p className="text-xl text-text-secondary font-medium max-w-2xl mx-auto">
                    Transform your approach with our institutional-grade workflow. No complexity, just pure execution.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                {steps.map((step, idx) => (
                    <GlassCard key={idx} className="relative z-10 text-center p-10 rounded-[2.5rem]" hoverEffect>
                        <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-neon">
                            <step.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                        <p className="text-text-secondary text-lg leading-relaxed font-medium">
                            {step.text}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};

export default HowItWorks;
