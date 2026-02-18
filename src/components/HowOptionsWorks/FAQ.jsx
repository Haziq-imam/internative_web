import React, { useState } from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Are options riskier than stocks?',
            answer: 'Yes and no. Options can expire worthless (100% loss), but your maximum loss is limited to premium paid. With stocks, you can lose everything if company goes bankrupt. Options offer defined risk but require the stock to move within a timeframe. Stocks have unlimited time but undefined risk.'
        },
        {
            question: 'How much money do I need to start trading options?',
            answer: '$1,000-$3,000 minimum for safe position sizing. Options require broker approval (usually Level 1 or 2). Start small—single contracts ($100-$500 each) until you understand mechanics. Many beginners blow up accounts by starting with $10,000+ before learning basics.'
        },
        {
            question: 'Can I lose more than I invest in options?',
            answer: 'When BUYING options (calls/puts), your max loss is the premium you paid. You cannot lose more. When SELLING options (advanced strategy), you can lose significantly more than premium collected. Beginners should only BUY options, never sell naked options.'
        },
        {
            question: 'What happens if I don\'t sell my option before expiration?',
            answer: 'If option is In-The-Money (ITM), your broker may auto-exercise it, buying/selling 100 shares at strike price (requires capital). If Out-of-The-Money (OTM), it expires worthless. Most traders sell options before expiration to avoid exercise complications. Set alerts for expiration dates.'
        },
        {
            question: 'Should I trade options or stocks as a beginner?',
            answer: 'Start with stocks to learn market basics, then add options once comfortable. Options require understanding time decay, volatility, and strike selection—concepts that don\'t exist with stocks. Many successful options traders spent 6-12 months trading stocks first building foundational knowledge.'
        },
        {
            question: 'What are the best options for beginners?',
            answer: 'Start with ATM (at-the-money) or slightly ITM calls/puts on liquid stocks (AAPL, MSFT, SPY, QQQ) with 2-6 weeks expiration. Avoid 0DTE, deep OTM strikes, and low-volume stocks. These "boring" options teach fundamentals without extreme volatility destroying your account during learning phase.'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white">
                        Frequently Asked <GradientText>Questions</GradientText>
                    </h2>

                    <div className="space-y-4 mb-12">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                                >
                                    <span className="text-lg font-black text-white pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                        size={24}
                                    />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="px-6 pb-5">
                                        <p className="text-text-secondary font-medium leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-3xl p-10 text-center">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                            Ready to Start Trading Options?
                        </h3>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            Get professional options signals with complete analysis, entry/exit plans, and risk management. Perfect for beginners learning options trading.
                        </p>
                        <Link
                            to="/signals/options-signals"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                        >
                            View Options Signals
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
