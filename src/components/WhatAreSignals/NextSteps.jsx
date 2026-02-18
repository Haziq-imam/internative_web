import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const NextSteps = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
                        Ready to <GradientText>Get Started</GradientText>?
                    </h2>
                    <p className="text-xl text-text-secondary font-medium mb-12 max-w-2xl mx-auto">
                        Now that you understand what trading signals are, here's how to begin using them effectively.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <Link to="/trading-tools-access/trading-signals-for-beginners" className="group">
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                    <BookOpen className="text-primary" size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3">Trading Signals For Beginners</h3>
                                <p className="text-text-secondary font-medium mb-4">
                                    Complete guide on how to start using signals safely, common mistakes to avoid, and realistic expectations.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-primary font-black text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Read Guide <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>

                        <Link to="/trading-education/how-to-use-trading-signals" className="group">
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                    <TrendingUp className="text-primary" size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3">How To Use Trading Signals</h3>
                                <p className="text-text-secondary font-medium mb-4">
                                    Step-by-step execution guide: from receiving alerts to managing exits and tracking performance.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-primary font-black text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Learn Execution <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-3xl p-10">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                            Or Start Receiving Signals Today
                        </h3>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            Get instant access to professional trading signals for stocks, options, and crypto. Try free for 7 days.
                        </p>
                        <Link
                            to="/signals/options-signals"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                        >
                            Start Free Trial
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default NextSteps;
