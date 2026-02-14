import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Monthly",
            price: isYearly ? 199 : 249,
            period: "/month",
            description: "Perfect for traders who want to test the waters.",
            features: [
                "Real-time Options Signals",
                "Stock & Crypto Alerts",
                "Entry, Stop Loss & Take Profit",
                "Live Trading Room Access",
                "Daily Market Analysis",
                "Email & Push Notifications"
            ],
            popular: false
        },
        {
            name: "Yearly",
            price: isYearly ? 149 : 199,
            period: "/month",
            billing: "Billed $1788 yearly",
            description: "Best value for committed traders. Save 40%.",
            features: [
                "All Monthly Features",
                "Priority Support",
                "Exclusive Webinars",
                "Advanced Strategy Guide",
                "1-on-1 Portfolio Review",
                "Risk Management Calculator"
            ],
            popular: true
        }
    ];

    return (
        <Section id="pricing" className="bg-background-secondary py-32 lg:py-48 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="text-center max-w-4xl mx-auto mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    Flexible Plans
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
                    Professional Edge, <br />
                    <span className="text-gradient">Accessible Pricing.</span>
                </h2>
                <p className="text-xl text-text-secondary mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                    No hidden fees. Professional-grade signals designed to pay for themselves. Join our elite community today.
                </p>

                <div className="flex items-center justify-center gap-6 mb-8">
                    <span className={`text-sm font-black tracking-widest uppercase ${!isYearly ? 'text-white' : 'text-text-secondary uppercase'}`}>Monthly</span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-16 h-8 rounded-full bg-white/5 border border-white/10 relative transition-all duration-300 hover:bg-white/10 focus:outline-none"
                    >
                        <div className={`absolute top-1 w-6 h-6 rounded-full bg-primary shadow-neon transition-all duration-500 ease-out ${isYearly ? 'left-9' : 'left-1'}`} />
                    </button>
                    <span className={`text-sm font-black tracking-widest uppercase ${isYearly ? 'text-white' : 'text-text-secondary uppercase'}`}>
                        Yearly <span className="text-success text-[10px] ml-1">(-40%)</span>
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 md:px-0">
                {plans.map((plan, idx) => (
                    <GlassCard
                        key={idx}
                        className={`relative p-10 md:p-14 rounded-[3rem] transition-all duration-500 ${plan.popular ? 'border-primary/40 bg-primary/5 shadow-neon' : 'bg-background/40'}`}
                        hoverEffect
                    >
                        {plan.popular && (
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                                <div className="px-6 py-2 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest text-white shadow-neon">
                                    Best Value
                                </div>
                            </div>
                        )}

                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{plan.name}</h3>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-6xl font-black text-white tracking-tighter">${plan.price}</span>
                            <span className="text-text-secondary text-lg font-bold uppercase tracking-widest">{plan.period}</span>
                        </div>
                        <p className="text-text-secondary font-medium text-lg leading-relaxed mb-10">{plan.description}</p>

                        <div className="space-y-6 mb-12">
                            {plan.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span className="text-white/80 font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            className={`w-full text-xl py-6 ${plan.popular ? 'shadow-neon' : ''}`}
                            variant={plan.popular ? 'primary' : 'secondary'}
                        >
                            Get Started Now
                        </Button>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};

export default Pricing;
