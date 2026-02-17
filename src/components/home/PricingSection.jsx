import React from 'react';
import { Check, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    const plans = [
        {
            name: "Deluxe Plan",
            price: "$59.99",
            period: "/month",
            description: "Best for individual traders seeking consistent signal flow.",
            features: [
                "Real-time options, stocks & crypto signals",
                "Push notifications on every trade",
                "Entry/exit points + stop-loss levels",
                "Expert analysis with each signal",
                "Performance tracking dashboard",
                "Multiple profit targets (TP1, TP2, TP3)",
                "Full mobile app access"
            ],
            cta: "Start Free 7-Day Trial",
            popular: false,
            color: "border-white/10"
        },
        {
            name: "Ultimate Plan",
            price: "$50",
            period: "/month",
            billing: "Billed $599.99 yearly",
            save: "Save $120/year",
            description: "For serious traders maximizing annual savings & speed.",
            features: [
                "Everything in Deluxe, PLUS:",
                "Priority signal delivery (30s faster)",
                "Exclusive swing trading setups",
                "Monthly performance webinars",
                "Direct analyst Q&A sessions",
                "Premium risk management guides",
                "Early access to new features"
            ],
            cta: "Start Free 7-Day Trial",
            popular: true,
            color: "border-primary shadow-neon/20"
        }
    ];

    return (
        <section className="py-24 bg-background relative" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Premium Signals. <br />
                        <span className="text-transparent bg-clip-text bg-brand-gradient">Affordable Pricing.</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Get professional-grade trading signals for a fraction of what competitors charge.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-accent-green text-sm font-bold">
                        <Shield className="w-4 h-4" />
                        30-Day Money-Back Guarantee
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative bg-surface rounded-3xl p-8 border ${plan.color} ${plan.popular ? 'scale-105 shadow-2xl z-10' : 'hover:border-primary/30'} transition-all duration-300`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
                                    <Star className="w-4 h-4 fill-current" /> Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                                    <span className="text-text-secondary">{plan.period}</span>
                                </div>
                                {plan.billing && (
                                    <p className="text-sm text-text-secondary">{plan.billing}</p>
                                )}
                                {plan.save && (
                                    <p className="text-sm text-accent-green font-bold mt-1">{plan.save}</p>
                                )}
                                <p className="text-text-muted mt-4">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-primary' : 'text-text-muted'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/pricing"
                                className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${plan.popular
                                    ? 'bg-brand-gradient text-white hover:shadow-neon shadow-lg'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                            <p className="text-center text-xs text-text-muted mt-3">No credit card required</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-text-secondary">
                        Compare to: Market Rebellion ($200/mo), Benzinga Pro ($457/mo), Trade Ideas ($167/mo)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
