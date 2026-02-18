import React, { useState } from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Do I need to be an experienced trader to use signals?',
            answer: 'No. Signals are designed to be beginner-friendly—they tell you exactly what to do. However, you should understand basic trading concepts (how to place orders, what stop-losses are) and start with small position sizes while learning.'
        },
        {
            question: 'How much money do I need to start?',
            answer: 'For stock signals, $500-$1,000 minimum. For options signals, $1,000-$2,000 is recommended since options require buying full contracts. The key is proper position sizing—never risk more than 2-5% of your account on a single trade.'
        },
        {
            question: 'Can I use signals with any broker?',
            answer: 'Yes. Signals work with any broker (Robinhood, TD Ameritrade, E*TRADE, Webull, etc.). We just tell you what to buy—you execute in your own account wherever you trade.'
        },
        {
            question: 'How fast do I need to act on signals?',
            answer: 'It depends on the signal type. Day trade signals require quick execution (within 5-15 minutes). Swing trade signals give you more time (30-60 minutes or even hours). We always specify urgency level in the alert.'
        },
        {
            question: 'What if I miss a signal?',
            answer: 'Don\'t chase it. If you miss the entry window, skip that signal and wait for the next one. Chasing entries after the move has started is a common mistake that leads to poor risk-reward ratios.'
        },
        {
            question: 'Do you guarantee profits?',
            answer: 'No. No one can guarantee profits in trading. We provide high-probability setups with favorable risk-reward ratios, but losses are part of trading. Our focus is on long-term consistency, not winning every single trade.'
        },
        {
            question: 'How many signals do you send per day?',
            answer: 'Typically 4-8 signals per day across stocks, options, and crypto. Quality over quantity—we only send signals that meet our strict criteria. You\'re not required to take every signal; choose the ones that fit your risk tolerance and schedule.'
        },
        {
            question: 'Can I paper trade signals first?',
            answer: 'Absolutely, and we recommend it. Most brokers offer paper trading (simulated trading with fake money). Practice executing signals for 2-4 weeks before using real capital to build confidence and understand the process.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white">
                        Frequently Asked <GradientText>Questions</GradientText>
                    </h2>

                    <div className="space-y-4">
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
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
