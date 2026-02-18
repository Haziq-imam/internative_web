import React, { useState } from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'How much money do I need to start following trading signals?',
            answer: 'Minimum realistic capital is $1,000-$3,000, allowing proper 1-2% risk management across multiple signals while accommodating minimum position sizes. Accounts below $1,000 force excessive concentration or skipping many signals. For comfortable signal following with adequate diversification, $5,000-$10,000 provides better flexibility. However, start with minimum amounts during learning phase—losing $1,000 while learning proves less catastrophic than losing $10,000.'
        },
        {
            question: 'Can I really make money following trading signals as a beginner?',
            answer: 'Possible but approximately 70-90% of beginners following signals still lose money due to emotional mistakes, poor risk management, unrealistic expectations, or inadequate capital. The 10-30% achieving profitability typically follow signals for 6-12+ months developing discipline, execute signals exactly as received, maintain strict 1-2% risk management, and start with realistic expectations. Even successful followers rarely achieve more than 15-40% annual returns during learning phase.'
        },
        {
            question: 'What\'s the difference between free and paid trading signals?',
            answer: 'Free signals typically offer delayed delivery (after markets moved), minimal analysis, no support, unverified track records, and inconsistent quality. Paid signals ($50-$200+ monthly) usually provide real-time delivery, detailed analysis, responsive support, verified performance tracking, and consistent quality. However, paid doesn\'t guarantee better results—research provider track records regardless of price. Many profitable traders started with quality free signals before upgrading.'
        },
        {
            question: 'How do I know if a signal service is legitimate or a scam?',
            answer: 'Legitimate services show verified track records through third-party platforms (Myfxbook, TradingView, broker statements) with complete trade histories including losses, realistic 55-70% win rates (not impossible 85-95% claims), transparency about risks, responsive support, and reasonable pricing ($50-$200/month). Warning signs: guaranteed profit promises, 90%+ win rate claims without proof, pressure tactics, stock photo testimonials, anonymous providers, or requests for trading account access.'
        },
        {
            question: 'Should I paper trade signals first before using real money?',
            answer: 'Absolutely yes—paper trading for 1-2 months minimum before risking real capital dramatically improves success probability. Paper trading allows developing execution skills, emotional familiarity with wins/losses without financial consequences, performance tracking, and confidence building. Most beginners skip this wanting immediate excitement, substantially increasing failure probability. The month "wasted" on paper trading prevents thousands in real losses later.'
        },
        {
            question: 'How many trading signals should I follow simultaneously?',
            answer: 'Beginners should follow 1-3 signals maximum simultaneously during first 3-6 months, increasing to 3-5 only after demonstrating consistent profitable execution. Following too many creates overwhelming execution demands, prevents learning, increases errors, and exceeds safe portfolio risk limits (5-10% max across all positions). Quality over quantity—executing 2-3 signals properly generates better results than poorly executing 10 signals.'
        },
        {
            question: 'What happens if I can\'t execute signals during market hours?',
            answer: 'Part-time traders with full-time employment should choose swing trading signals with wider entry zones allowing evening execution, use services offering automated execution, set limit orders before work at recommended prices, or focus on end-of-day signals. Day trading signals requiring rapid intraday entries prove inappropriate for employed beginners. Choose signal types matching your schedule—forcing incompatible styles guarantees poor execution.'
        },
        {
            question: 'How long before I can expect profits following signals?',
            answer: 'Realistic expectations involve 6-12 months minimum before potential consistent profitability, with many successful traders requiring 12-24 months. First 3-6 months typically involve small losses or breakeven while learning. Months 6-12 see improving results as competence develops. Beyond 12 months, consistently profitable execution becomes possible for disciplined traders, though 70-90% never reach this stage. Treat first year as paid education—if preserving 70-80% of starting capital while learning, you\'ve succeeded beyond most beginners.'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white">
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
