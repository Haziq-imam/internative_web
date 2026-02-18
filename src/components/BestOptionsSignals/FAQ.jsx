import React, { useState } from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'What makes a good options signal provider?',
            answer: 'Three factors: (1) Win rate above 70%, (2) Fast alerts (under 1 minute), (3) Transparent performance tracking. Avoid providers that don\'t show real results or charge $200+/month without proven track records.'
        },
        {
            question: 'Are expensive signal services better?',
            answer: 'No. We found no correlation between price and performance. Some $299/month services had 65% win rates while InterNative Traders at $97/month maintains 78%. Focus on results, not price.'
        },
        {
            question: 'How did you test these providers?',
            answer: 'We subscribed to 15+ services for 90 days, tracked every signal, and calculated real win rates and average returns. Only providers with verifiable performance made this list.'
        },
        {
            question: 'Can I use multiple signal providers?',
            answer: 'Not recommended for beginners. Managing signals from 2-3 providers creates confusion and overtrading. Master one quality provider first, then consider diversifying after 6+ months of consistent profits.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
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
