import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What are trading signals?",
            answer: "Trading signals are indicators or suggestions for entering or exiting a trade at a specific time and price. Our expert analysts provide real-time signals based on comprehensive market analysis to help you make informed trading decisions."
        },
        {
            question: "How do I receive trading signals?",
            answer: "Once you subscribe to our service, you'll receive instant push notifications directly to your mobile device. Signals are delivered in real-time, ensuring you never miss a profitable opportunity."
        },
        {
            question: "What markets do you cover?",
            answer: "We provide trading signals for stocks listed on major indices including Nasdaq, S&P 500, Dow Jones, and Russell 2000. We also offer options trading signals, swing trading signals, and more."
        },
        {
            question: "Are the signals suitable for beginners?",
            answer: "Absolutely! Our signals are designed for traders of all experience levels. Each signal comes with clear entry and exit points, making it easy for beginners to follow. We also provide educational resources to help you understand the markets better."
        },
        {
            question: "What is your success rate?",
            answer: "Our signals have achieved an 82% win rate over the last 90 days. However, past performance doesn't guarantee future results. We recommend proper risk management and never investing more than you can afford to lose."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time. There are no long-term commitments or cancellation fees. Simply manage your subscription through your account settings."
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes! We offer a 7-day free trial so you can experience our trading signals risk-free. You'll get full access to all features during the trial period."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, and PayPal. All transactions are secured with industry-standard encryption to protect your financial information."
        },
        {
            question: "How is my data protected?",
            answer: "We take data security seriously. All your personal and financial information is encrypted using cutting-edge security measures. We never share your data with third parties without your explicit consent."
        },
        {
            question: "What if I have questions or need support?",
            answer: "Our customer support team is available 24/7 to assist you. You can reach us via email at internativetraders@gmail.com or through our live chat feature. We typically respond within a few hours."
        },
        {
            question: "What's the difference between Deluxe and Ultimate plans?",
            answer: "The Deluxe plan is billed monthly at $59.99 and includes all core features. The Ultimate plan is billed annually at $599.99, saving you $120 per year compared to monthly billing. Both plans include the same features and signal quality."
        },
        {
            question: "Can I use the signals for options trading?",
            answer: "Yes! We specialize in options trading signals, including lotto options, 0DTE options, weekly options, and more. Each signal includes specific strike prices, expiration dates, and profit targets."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-text-primary">
            <Helmet>
                <title>FAQ - InterNative Traders</title>
                <meta name="description" content="Frequently asked questions about InterNative Traders trading signals service." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            Find answers to common questions about our trading signals service
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <GlassCard key={index} className="overflow-hidden">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-white pr-4">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-5 pt-2 text-text-secondary leading-relaxed border-t border-white/5">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <GlassCard className="p-8 md:p-12 text-center">
                            <h2 className="text-3xl font-black text-white mb-4">
                                Still Have Questions?
                            </h2>
                            <p className="text-text-secondary mb-6">
                                Our support team is here to help. Contact us anytime.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-neon"
                            >
                                Contact Support
                            </a>
                        </GlassCard>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
