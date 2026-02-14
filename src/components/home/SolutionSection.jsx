import React from 'react';
import { Bell, TrendingUp, Wallet, CheckCircle2 } from 'lucide-react';

const SolutionSection = () => {
    const features = [
        {
            icon: Bell,
            title: "Real-Time Alerts",
            description: "Push notifications sent instantly to your phone.",
            points: [
                "Entry and exit points clearly marked",
                "Stop-loss levels to protect your capital",
                "Multiple profit targets for scaling out"
            ]
        },
        {
            icon: TrendingUp,
            title: "Expert Analysis",
            description: "Signals crafted by professional traders, not bots.",
            points: [
                "Technical and fundamental analysis combined",
                "Clear reasoning behind every trade",
                "Risk-to-reward ratios calculated"
            ]
        },
        {
            icon: Wallet,
            title: "Multi-Asset Coverage",
            description: "Options, stocks, and crypto on one platform.",
            points: [
                "Lotto signals for high-risk, high-reward plays",
                "Swing trading signals for medium-term holds",
                "Day trading alerts for quick moves"
            ]
        }
    ];

    return (
        <section className="py-24 bg-background-secondary border-t border-white/5 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                        One App. Every Signal. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-gold">Maximum Profit Potential.</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        InterNative Traders delivers professional-grade trading signals across options, stocks, and crypto all in one mobile-first platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-background border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-neon/10">
                            <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-text-secondary mb-8 h-12">
                                {feature.description}
                            </p>

                            <ul className="space-y-4">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
