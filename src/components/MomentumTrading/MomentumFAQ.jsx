import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const MomentumFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            q: "What is momentum trading?",
            a: "Momentum trading is a strategy that buys stocks accelerating in price on strong volume, following the principle that objects in motion stay in motion. Traders buy strength to sell higher, rather than buying dips."
        },
        {
            q: "How much capital do I need?",
            a: "For Pattern Day Trading (PDT) >4 intraday trades/week, you legally need $25k+. For swing momentum (holding overnight), start with $5k-$10k to manage risk properly. Accounts <$5k struggle with commissions and position sizing."
        },
        {
            q: "Day trading vs Swing trading?",
            a: "Momentum applies to both. Day trading captures intraday moves (mins to hours) avoiding overnight risk. Swing trading captures multi-day moves (2-10 days). Day trading requires full-time attention; swing trading allows part-time participation."
        },
        {
            q: "Best time to trade momentum?",
            a: "9:30 AM - 11:00 AM EST is the 'Golden Hour' with highest volume and volatility. A secondary window opens 3:00 PM - 4:00 PM. Midday (11-2) is often choppy and lower probability."
        },
        {
            q: "How do I find momentum stocks?",
            a: "Use scanners (Trade Ideas, Finviz) filtering for: Top% Gainers, Volume > 2x Avg, Relative Volume > 3.0, and specific chart patterns like Breakouts or Flags. Focus on stocks with news catalysts."
        },
        {
            q: "Is momentum trading risky?",
            a: "Yes. 70-90% of beginners lose money. Momentum can reverse instantly. Success requires strict 1-2% risk/trade limits, fast execution, and avoiding 'chasing' extended prices. It is one of the most volatile strategies."
        },
        {
            q: "Can I automate this?",
            a: "Partially. You can automate scanning (alerts), but fully automated execution is complex and risky for retail traders. Human discretion on news quality and market context is usually required."
        },
        {
            q: "Momentum vs Trend Following?",
            a: "Momentum is faster (days/weeks), capturing acceleration phases. Trend following is slower (weeks/months), capturing long-term drift. Momentum traders exit on stalling strength; trend followers exit on trend breaks."
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

export default MomentumFAQ;
