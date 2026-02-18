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
            question: 'How fast do I need to act when I receive a signal?',
            answer: 'Depends on signal type. Day trading/lotto signals: act within 5-15 minutes. Swing signals: 1-4 hours is usually fine. Signals specify entry windows—if you miss it, skip the trade. Never chase entries significantly above recommended prices.'
        },
        {
            question: 'What if I can\'t execute during market hours?',
            answer: 'Focus on swing trading signals with wider entry zones allowing evening execution via limit orders. Avoid day trading and 0DTE signals requiring active monitoring. Many services offer both—choose signal types matching your schedule.'
        },
        {
            question: 'Should I take every signal or be selective?',
            answer: 'Start selective (1-3 signals/week) while learning. As competence grows, increase to 3-5 simultaneously. Never take signals you don\'t understand or can\'t monitor properly. Quality execution on fewer signals beats poor execution on many.'
        },
        {
            question: 'What if the signal hits stop-loss immediately?',
            answer: 'Exit immediately, no questions. Fast stop-outs happen—it\'s normal. Even quality signals lose 30-45% of trades. The key is keeping losses small (1-2% per trade) so winners can outweigh losers. Never hold hoping for reversals.'
        },
        {
            question: 'Can I modify the entry/exit prices from the signal?',
            answer: 'Not recommended for beginners. Signals are backtested with specific entry/exit levels. Modifying them usually reduces performance. Once experienced (6+ months), you can make minor adjustments based on market conditions, but start by following signals exactly.'
        },
        {
            question: 'How do I know if a signal service is working for me?',
            answer: 'Track results for minimum 30-50 trades (2-3 months). Calculate win rate and average gain vs loss. If following signals exactly and still losing after 50 trades, either execution has issues or service quality is poor. Most beginners blame service when execution is the problem.'
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
                            Ready to Start Using Professional Signals?
                        </h3>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            Get instant access to professional trading signals for stocks, options, and crypto. Complete entry/exit plans, risk management, and real-time updates.
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

export default FAQ;
