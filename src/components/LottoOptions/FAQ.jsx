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
            question: 'What\'s the difference between lotto options and regular options?',
            answer: 'Lotto options are short-dated (0-3 DTE) and out-of-the-money, making them cheap but requiring big, fast moves. Regular options have longer expirations (weeks/months) and can be ITM/ATM, giving more time for the trade to work. Lottos are high-risk/high-reward gambles; regular options are more strategic trades.'
        },
        {
            question: 'What percentage of lotto options expire worthless?',
            answer: 'Approximately 60-80% of lotto options expire worthless depending on market conditions and selection quality. Even with professional signals, expect 30-40% of lotto plays to lose 100%. The key is that winners (100-500%+) outweigh multiple small losses when properly sized.'
        },
        {
            question: 'How much should I risk on a single lotto option?',
            answer: 'Never more than 1-2% of your total account per lotto play. If you have $10,000, risk $100-$200 maximum per contract. Many traders allocate only 5-10% of their total portfolio to lotto plays combined. One bad day shouldn\'t destroy your account—position sizing is critical.'
        },
        {
            question: 'Can I hold lotto options overnight?',
            answer: 'Yes, but understand overnight risk. With 0DTE, you must close before market close or it expires. With 1-3DTE, you can hold overnight, but theta decay accelerates and gap risk (stock opens significantly up/down) can create instant 100% losses. Most experienced traders close lottos same-day to avoid overnight uncertainty.'
        },
        {
            question: 'Are lotto options gambling or trading?',
            answer: 'Honest answer: they\'re closer to gambling than strategic trading. You\'re making calculated bets on short-term volatility with low probability but high payoff. However, with proper catalyst analysis, technical setups, and risk management, you can tilt odds in your favor. Still, treat them as speculative plays, not core portfolio strategy.'
        },
        {
            question: 'What brokers allow lotto options trading?',
            answer: 'Most major brokers (Robinhood, TD Ameritrade, E*TRADE, Webull, Tastyworks) allow 0-3DTE options trading with Level 1-2 options approval. Some brokers restrict 0DTE specifically due to risk. Check your broker\'s options approval levels and ensure you\'re approved for buying calls/puts before attempting lotto trades.'
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
                            Get Professional Lotto Signals
                        </h3>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            Our analysts identify high-probability lotto setups with catalyst analysis, technical confirmation, and optimal entry/exit timing. 64% win rate, +156% average winner.
                        </p>
                        <Link
                            to="/signals/options-signals"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                        >
                            View Lotto Signals
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
