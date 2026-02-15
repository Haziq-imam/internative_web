import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        { q: "How many signals can I expect daily?", a: "On average, we send 3-5 high-conviction signals per day. We prioritize quality over quantity - if the market is choppy or high-risk, we may send fewer alerts to protect your capital." },
        { q: "What is the average hold time for trades?", a: "Our swing signals typically hold for 3-14 days. Growth picks can hold for months. Day scalps are usually closed within the same trading session. We specify the expected duration in every alert." },
        { q: "Do I need a large account to start?", a: "No. While we recommend a minimum of $2,000 for proper risk management, many of our members start with less using our growth stock picks or small-cap momentum alerts." },
        { q: "How are the alerts delivered?", a: "Alerts are sent instantly via Discord, Telegram, and our mobile app. You can also opt-in for SMS notifications for high-priority breakout alerts." },
        { q: "Is there a money-back guarantee?", a: "We offer a 7-day free trial so you can experience the service risk-free. After the trial, we don't offer refunds, but you can cancel your subscription at any time with no hidden fees." },
        { q: "Do you offer education for beginners?", a: "Yes. Every signal includes the reasoning behind the trade. We also have a library of educational resources, webinars, and a VIP community where you can ask our analysts questions directly." }
    ];

    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((item, i) => (
                            <div key={i} className={`bg-[#0A051A] border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/50 shadow-neon' : 'border-white/5 hover:border-white/10'}`}>
                                <button onClick={() => toggleAccordion(i)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                                    <span className="text-lg font-bold text-white pr-4">{item.q}</span>
                                    <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openIndex === i ? 'bg-primary text-white' : 'bg-white/5 text-text-muted'}`}>
                                        {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-text-secondary leading-relaxed text-sm font-medium">{item.a}</p>
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
