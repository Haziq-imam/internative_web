import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import Accordion from '../ui/Accordion';

const AppFAQ = () => {
    const faqItems = [
        {
            title: "Are trading signal apps worth the subscription cost?",
            content: "Quality signal apps justify subscription costs ($50-$150/month typical) for traders with adequate capital ($5,000-$10,000+), disciplined risk management, and realistic expectations. However, approximately 70-90% of subscribers still lose money through poor execution, inadequate capital, or emotional decision-making rather than signal quality. For beginners with under $3,000 capital, costs often represent wasted money."
        },
        {
            title: "How do I know if signal app performance claims are real?",
            content: "Verify through third-party tracking platforms like Myfxbook, TradingView, or direct broker statement integration. Legitimate providers achieve 55-70% win rates—80-90% claims are usually deceptive. Request complete trade histories showing entries/exits for winners and losers, and check maximum drawdown disclosures for transparency."
        },
        {
            title: "Can I make money following signals from free apps?",
            content: "Difficult, as free apps often offer inferior quality, delayed notifications, or limited signals. Most free apps serve as marketing funnels for expensive tiers or broker referrals. High user volume on free signals also creates crowded trades and slippage. Profitable traders typically use quality paid services with verified track records."
        },
        {
            title: "What's better: Telegram signal groups or dedicated apps?",
            content: "Dedicated apps offer superior notification reliability and integrated tracking/management tools. Telegram messages can get lost in busy chats or missed. Ideally, use a dedicated app for primary signal delivery and participate in supplementary community groups for market discussion and learning."
        },
        {
            title: "How many signal apps should I subscribe to?",
            content: "Start with only ONE quality app for the first 6-12 months. Mastering execution and understanding strategy fundamentals takes time. Multiple subscriptions lead to overwhelming volume, conflicting signals, and poor execution everywhere. Only add complementary services (like adding options to a stocks focus) after demonstrating consistent profitability."
        }
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Trading Signal Apps <GradientText>FAQ</GradientText></h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">Common questions about mobile signal platforms.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Accordion items={faqItems} />
                </div>
            </div>
        </Section>
    );
};

export default AppFAQ;
