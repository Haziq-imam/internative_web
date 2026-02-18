import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const NextSteps = () => {
    const keyTakeaways = [
        '70-90% of beginners lose money—signals are educational tools, not guaranteed profit systems',
        'Start with paper trading for 1-2 months before risking real capital',
        'Minimum $1,000-$3,000 capital needed for safe position sizing',
        'Never risk more than 1-2% per trade, 5-10% total portfolio risk',
        'Honor stop-losses and profit targets without modification',
        'Expect 6-12 months minimum before potential consistent profitability',
        'Choose beginner-appropriate services with education focus and verified track records',
        'Track performance meticulously to identify execution errors vs signal quality issues'
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        Key <GradientText>Takeaways</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-12 max-w-3xl mx-auto">
                        Remember these critical points before starting your trading signals journey:
                    </p>

                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 mb-12">
                        <ul className="space-y-4">
                            {keyTakeaways.map((takeaway, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <span className="text-text-secondary font-medium">{takeaway}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
                        Ready to Continue Learning?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <Link to="/trading-education/what-are-trading-signals" className="group">
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                    <BookOpen className="text-primary" size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-3 text-center">What Are Trading Signals?</h4>
                                <p className="text-text-secondary font-medium mb-4 text-center">
                                    Deep dive into signal components, types, and how they actually work.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-primary font-black text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Read Guide <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>

                        <Link to="/trading-education/how-to-use-trading-signals" className="group">
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="text-primary" size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-3 text-center">How To Use Trading Signals</h4>
                                <p className="text-text-secondary font-medium mb-4 text-center">
                                    Step-by-step execution guide from receiving alerts to managing exits.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-primary font-black text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Learn Execution <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-3xl p-10 text-center">
                        <h4 className="text-2xl md:text-3xl font-black text-white mb-4">
                            Ready to Start With Professional Signals?
                        </h4>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            Get instant access to professional trading signals for stocks, options, and crypto. Start with paper trading, then go live when ready.
                        </p>
                        <Link
                            to="/signals/options-signals"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                        >
                            View Our Signals
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default NextSteps;
