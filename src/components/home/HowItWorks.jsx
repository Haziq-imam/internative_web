import React from 'react';
import { Download, Target, Zap, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        {
            icon: Download,
            step: "Step 1",
            title: "Download & Sign Up",
            description: "Get the app on iOS or Android in 60 seconds. No complicated setup, no hidden fees."
        },
        {
            icon: Target,
            step: "Step 2",
            title: "Choose Your Signals",
            description: "Select what you want to trade: options, stocks, crypto, or all three. Customize your alerts."
        },
        {
            icon: Zap,
            step: "Step 3",
            title: "Get Instant Alerts",
            description: "When our analysts find a trade, you get a push notification with entry, stop-loss, and targets."
        },
        {
            icon: DollarSign,
            step: "Step 4",
            title: "Execute & Profit",
            description: "Follow the signal with your broker, manage the trade, and watch your portfolio grow."
        }
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Simple. Fast. <span className="text-transparent bg-clip-text bg-brand-gradient">Profitable.</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        From download to your first profit in four simple steps.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 border-t border-dashed border-white/20 -z-10" />

                    {steps.map((item, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 shadow-glass">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <item.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm border-4 border-background">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed px-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-primary/30 hover:border-primary transition-all duration-300 shadow-neon hover:shadow-neon-hover group">
                        Start Your 7-Day Free Trial
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
