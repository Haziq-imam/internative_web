import React, { useState } from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'What\'s the difference between a platform and a signal provider?',
            answer: 'A platform is the technology (app, website, alerts system). A signal provider is the team analyzing markets and sending signals. InterNative Traders is both—we built our own platform AND provide professional signals.'
        },
        {
            question: 'Do I need a mobile app for trading signals?',
            answer: 'Highly recommended. Markets move fast—you need instant push notifications on your phone. Email-only or web-only platforms cause you to miss time-sensitive entries.'
        },
        {
            question: 'Are Discord/Telegram good for signals?',
            answer: 'They work but aren\'t ideal. No dedicated mobile apps, notifications get lost in chat spam, and performance tracking is manual. Purpose-built platforms like InterNative Traders are more reliable.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        <GradientText>FAQ</GradientText>
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
