import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import Accordion from '../ui/Accordion';

const AdvancedFAQ = () => {
    const faqItems = [
        {
            title: "What is Level 3 options trading approval?",
            content: "Level 3 permits executing multi-leg strategies with defined risk (spreads, condors, butterflies). Brokers grant this after evaluating experience (12+ months), net worth ($25k+), and liquid assets ($10k-$25k), often requiring knowledge tests. It does not permit naked option selling, which requires Level 4-5 and $100k-$250k+ capital."
        },
        {
            title: "Can advanced options strategies guarantee consistent income?",
            content: "No. Professional traders achieve 55-75% monthly win rates but still face losing months and 15-30% drawdowns. Targeted annual returns are 25-50% with disciplined execution. Marketing claims of 'guaranteed monthly income' are deceptive—treat these as probability-based approaches, not steady paychecks."
        },
        {
            title: "How much capital do I need for advanced options trading?",
            content: "Minimum realistic capital is $25,000-$50,000. This allows proper position sizing (5-8 concurrent positions) while meeting margin requirements. Accounts below $25k force concentration, violating diversification principles and increasing the risk of margin calls during normal drawdowns."
        },
        {
            title: "What's the difference between iron condor and iron butterfly?",
            content: "Iron Condors use four different strikes with out-of-the-money shorts, creating a wide profitable range but lower max profit (65-75% win rate). Iron Butterflies use the same at-the-money strike for both shorts, offering larger credit but a narrower profitable range (55-65% win rate)."
        },
        {
            title: "Should I start with debit spreads or credit spreads?",
            content: "Start with credit spreads (bull put, bear call) as they are more forgiving. They profit from theta decay and stationary prices, achieving 60-75% win rates. Debit spreads require directional accuracy and only achieve 40-55% win rates. Receiving money upfront also provides a psychological advantage."
        },
        {
            title: "How do I manage iron condor adjustments?",
            content: "Adjustments are challenging. Common techniques include rolling the tested side, adding contracts to the untested side (inverting), or simply taking a full loss at 2x credit received. High-level traders often debate these; many find that taking a quick loss is better than 'hope-trading' a deteriorating position."
        },
        {
            title: "What are the Greeks and why do they matter?",
            content: "Greeks quantify position sensitivity. Delta measures price move impact, Theta measures daily decay, and Vega measures volatility sensitivity. Advanced traders monitor these continuously. Without Greek awareness, you are 'flying blind' and virtually guaranteed to lose through mismanaged exposures."
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Advanced Options <GradientText>FAQ</GradientText></h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">Clear answers for complex trading questions.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Accordion items={faqItems} />
                </div>
            </div>
        </Section>
    );
};

export default AdvancedFAQ;
