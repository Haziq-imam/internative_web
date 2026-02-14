import React from 'react';
import Section from '../ui/Section';
import Accordion from '../ui/Accordion';

const FAQ = () => {
    const faqs = [
        {
            title: "How do I receive the signals?",
            content: "Signals are sent instantly via our mobile app (iOS and Android) as push notifications. You'll also receive an email backup and access to our private Telegram channel."
        },
        {
            title: "How much capital do I need to start?",
            content: "We recommend starting with at least $500-$1,000. This allows you to effectively manage risk and follow our position sizing guidelines."
        },
        {
            title: "What is your average win rate?",
            content: "Our historical win rate across all signal types (Options, Stocks, Crypto) is approximately 78-82%. All performance is tracked and verified."
        },
        {
            title: "Can I cancel my subscription?",
            content: "Yes, you can cancel anytime from your account dashboard. There are no contracts or hidden fees. You'll retain access until the end of your billing cycle."
        },
        {
            title: "Do you offer refunds?",
            content: "We offer a 7-day money-back guarantee for new subscribers if you are not satisfied with the service."
        }
    ];

    return (
        <Section className="bg-background-secondary relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />

            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Common Questions
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
                        Frequently Asked <br />
                        <span className="text-gradient">Questions.</span>
                    </h2>
                    <p className="text-xl text-text-secondary mb-12 font-medium leading-relaxed">
                        Everything you need to know about InterNative Traders. Can't find the answer you're looking for? Contact our VIP support team.
                    </p>
                </div>

                <div className="w-full">
                    <Accordion items={faqs} />
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
