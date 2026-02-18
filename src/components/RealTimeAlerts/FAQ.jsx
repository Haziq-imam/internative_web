import React, { useState } from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Do I need the mobile app for alerts?',
            answer: 'Highly recommended. Push notifications are instant (under 30 seconds). Email and SMS have 1-5 minute delays. The mobile app gives you the fastest alerts and best entry prices.'
        },
        {
            question: 'Can I customize alert settings?',
            answer: 'Yes. Choose which signal types to receive (0DTE, lotto, swing), set quiet hours, customize notification sounds, and enable/disable SMS alerts. Full control in the app settings.'
        },
        {
            question: 'What if I miss an alert?',
            answer: 'All signals remain visible in the app for 24 hours. You can review missed signals, but entry prices may no longer be valid. Set up multiple alert channels (push + SMS) to avoid missing signals.'
        },
        {
            question: 'Are alerts free or paid?',
            answer: 'Real-time alerts are included with all paid subscriptions ($97/month). Free trial users get delayed alerts (15-30 minutes) to test the platform before upgrading.'
        }
    ];

    return (
        <Section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
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
                            Start Receiving Real-Time Alerts
                        </h3>
                        <p className="text-lg text-text-secondary font-medium mb-8 max-w-2xl mx-auto">
                            7-day free trial with full access to real-time alerts. Download the app, enable notifications, and start trading with professional signals.
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
