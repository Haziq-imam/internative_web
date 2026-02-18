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
            question: 'Are 0DTE options more risky than regular options?',
            answer: 'Yes, significantly. 0DTE options have zero time buffer—if the stock doesn\'t move immediately, you lose. Regular options (weeks/months out) give time for thesis to play out. With 0DTE, you need to be right about direction AND timing within hours. Most 0DTE options expire worthless.'
        },
        {
            question: 'What time of day is best for 0DTE trading?',
            answer: 'Most experienced traders avoid the first 30 minutes (9:30-10:00 AM) due to volatility and wide spreads. The 10:00 AM - 2:00 PM window offers clearer trends. Avoid trading after 3:00 PM unless very experienced—theta decay accelerates exponentially in final hour, and liquidity can dry up.'
        },
        {
            question: 'Can I hold 0DTE options overnight?',
            answer: 'No. 0DTE means "zero days to expiration"—they expire at 4:00 PM ET market close. You cannot hold them overnight. If you don\'t sell before 4:00 PM, they either expire worthless (OTM) or auto-exercise (ITM), potentially creating unwanted stock positions.'
        },
        {
            question: 'What stocks are best for 0DTE trading?',
            answer: 'Highly liquid indices (SPY, QQQ, IWM) are ideal due to tight spreads and predictable movement. Individual stocks work if they have catalysts (earnings, news) or high volume. Avoid low-volume stocks—wide bid-ask spreads will destroy your edge even if directionally correct.'
        },
        {
            question: 'How much should I risk on 0DTE trades?',
            answer: 'Never more than 0.5-1% of account per trade. If you have $10,000, risk $50-$100 maximum per 0DTE position. Many traders blow up accounts risking 5-10% per trade, hitting 3-4 losers in a row. 0DTE should be small speculative positions, not core strategy.'
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
                            Get Professional 0DTE Signals
                        </h3>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            Our 0DTE signals include optimal entry timing, intraday targets, and rapid exit alerts. Designed for traders who can monitor positions actively during market hours.
                        </p>
                        <Link
                            to="/signals/options-signals"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                        >
                            View 0DTE Signals
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
