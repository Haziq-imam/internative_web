import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const DayTradingFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            q: "How much money do I need to start?",
            a: "Legally, $25,000 for margin accounts (Pattern Day Trader rule). Recommendations suggest $30k-$50k to have a buffer. Cash accounts avoid the $25k rule but must wait for funds to settle (T+1)."
        },
        {
            q: "Can I make a living day trading?",
            a: "Yes, but it's extremely difficult. Only 5-10% succeed long-term. Full-time traders typically have 18+ months experience and treat it as a business, not a hobby. Don't quit your job until you are consistently profitable for 6+ months."
        },
        {
            q: "What is the best time to trade?",
            a: "The 'Golden Hour' is 9:30 AM - 10:30 AM EST when volume and volatility are highest. A secondary window exists 3:00 PM - 4:00 PM EST. Lunch hours (12-1 PM) are typically choppy and dangerous."
        },
        {
            q: "Do I need special software?",
            a: "Yes. While you can learn on free apps, professionals use Direct Market Access (DMA) platforms like DAS Trader or Lightspeed for speed, along with paid scanners like Trade Ideas to find stocks."
        },
        {
            q: "What is the '90-90-90 Rule'?",
            a: "It states that 90% of new day traders lose 90% of their money within 90 days. It highlights the extreme risk and difficulty of this profession without proper training and risk management."
        },
        {
            q: "Should I start with Paper Trading?",
            a: "Absolutely. Trade in a simulator for 3-6 months until you are profitable. If you can't make money with fake money (no emotion), you definitely won't make it with real money (high emotion)."
        },
        {
            q: "What are the best stocks to day trade?",
            a: "High volume (liquidity) and high volatility (range) stocks. Large caps like TSLA, NVDA, AAPL are popular. Small-cap 'gappers' (stocks up 20-50% on news) are also favorites but riskier."
        },
        {
            q: "Day Trading vs Swing Trading?",
            a: "Day trading closes all positions by 4:00 PM (no overnight risk). Swing trading holds overnight to capture multi-day moves (exposing you to overnight news gaps)."
        },
        {
            q: "What tax implications should I know?",
            a: "Profits are taxed as Short-Term Capital Gains (ordinary income rates of 10-37%). Wash Sale rules can disallow losses if you re-buy the same stock within 30 days, complicating taxes for active traders."
        },
        {
            q: "Can I trade with a full-time job?",
            a: "It is very difficult as the best hours are during the workday. Swing trading is generally better suited for those with 9-5 jobs."
        }
    ];

    return (
        <Section className="py-24 bg-background-primary border-t border-white/5">
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

export default DayTradingFAQ;
