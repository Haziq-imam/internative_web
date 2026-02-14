import React from 'react';
import { Lock, ShieldCheck, CreditCard, EyeOff, FileCheck } from 'lucide-react';

const TrustBadges = () => {
    const badges = [
        { icon: Lock, text: "256-Bit SSL Encryption", sub: "Bank-Level Security" },
        { icon: ShieldCheck, text: "Available on App Stores", sub: "Verified Application" },
        { icon: CreditCard, text: "Secure Payment", sub: "PCI-Compliant" },
        { icon: EyeOff, text: "Privacy Protected", sub: "No Data Sharing" },
        { icon: FileCheck, text: "No Hidden Fees", sub: "Cancel Anytime" },
    ];

    return (
        <section className="py-12 bg-background border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {badges.map((badge, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                            <badge.icon className="w-8 h-8 text-text-secondary" />
                            <div>
                                <div className="text-sm font-bold text-white">{badge.text}</div>
                                <div className="text-xs text-text-muted">{badge.sub}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-brand-gradient rounded-3xl p-8 md:p-16 text-center shadow-neon/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Ready to Trade Smarter?
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Join 10,000+ traders receiving professional signals for options, stocks, and crypto.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                                <span>Step 1: Start Free Trial</span>
                                <span>→</span>
                                <span>Step 2: Download App</span>
                                <span>→</span>
                                <span>Step 3: Profit</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                                Start Your 7-Day Free Trial Now
                            </button>
                            <p className="text-white/70 text-sm mt-4">
                                No credit card required • Full access • Cancel anytime
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
