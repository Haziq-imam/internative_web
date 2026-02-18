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
            question: 'Are free signals ever worth using?',
            answer: 'Only for learning signal format and understanding how they work. Never for actual trading. Free signals are intentionally delayed or low-quality to drive paid conversions.'
        },
        {
            question: 'How much should I pay for signals?',
            answer: '$50-$150/month is reasonable for quality signals. Anything above $200/month should have exceptional win rates (75%+) and transparent performance tracking. Avoid services charging $300+/month without proven results.'
        },
        {
            question: 'Can I try before I pay?',
            answer: 'Yes. Reputable providers offer 7-14 day free trials with full access to real signals. Avoid services that only show "past performance" without letting you test live signals.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        <GradientText>FAQ</GradientText>
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
                            Try Professional Signals Free
                        </h3>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            7-day free trial with full access to all signals. No credit card required. See the difference professional signals make.
                        </p>
                        <Link
                            to="/pricing"
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

export default FAQ;
