import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How quickly do I receive signals?",
            answer: "Signals are sent instantly via push notification to your mobile device. Most members receive alerts within 1-2 seconds of our analysts identifying the trade opportunity."
        },
        {
            question: "Do I need trading experience?",
            answer: "No. Our signals are designed for traders at all levels. Each alert includes complete details (entry, stop-loss, profit targets) and a explanation. Beginners can follow exactly, while pros can use it as a base."
        },
        {
            question: "What markets do you cover?",
            answer: "We provide signals for Options (SPX, NDX, Stocks), Stocks (Day & Swing trades), and Cryptocurrencies (BTC, ETH, Altcoins)."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes, absolutely. There are no contracts or cancellation fees. You can cancel your subscription at any time from your dashboard."
        },
        {
            question: "How is this different from Telegram groups?",
            answer: "We provide a professional app, verified track record, 24/7 support, and complete risk management plans. No spam, just high-quality signals."
        },
        {
            question: "Is there a free trial?",
            answer: "Yes! We offer a 7-day free trial on our monthly plan. You get full access to all signals. No commitment required."
        }
    ];

    return (
        <section className="py-24 bg-background-secondary border-y border-white/5 relative" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Your Questions Answered
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-surface border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary/50 shadow-lg' : 'border-white/5 hover:border-white/10'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-white/5 text-text-secondary'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-text-secondary leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
