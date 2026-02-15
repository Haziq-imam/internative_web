import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        { q: "How much time per day do I need to dedicate?", a: "15-30 minutes per day maximum. Morning routine (10 min): Check positions, review any new signals. Evening check (5 min): Quick position review. That's it. Unlike day trading, swing trading is designed for people with full-time jobs and busy lives." },
        { q: "I have a full-time job - can I still swing trade successfully?", a: "Absolutely - that's EXACTLY who swing trading is designed for. Our entry windows are hours or days (not minutes), so you can execute during lunch break, before work, or after dinner. You check positions 1-2x daily, not every 5 minutes." },
        { q: "What's the minimum account size for swing trading?", a: "Depends on asset class: Stock swings: $3k-5k minimum. Options swings: $2k-3k. Crypto swings: $1k-2k. Futures swings: $15k+. We recommend starting with stocks or options if you have smaller accounts." },
        { q: "Do swing trades trigger the Pattern Day Trader (PDT) rule?", a: "No! PDT rule only applies to trades opened and closed SAME DAY. Since swing trades hold overnight, they don't count toward your 3 day trades limit. You can swing trade with under $25k accounts - major advantage." },
        { q: "How do you avoid earnings announcements?", a: "We screen every signal for earnings dates. If a company reports during the hold, we either avoid it, recommend exiting before earnings, or size smaller. You'll never be blindsided." },
        { q: "What if I can't execute immediately when a signal is sent?", a: "You have HOURS or DAYS, not minutes. Our swing signals include entry windows like 'Next 2 trading days' or 'Entry zone valid for 48 hours.' This gives you total flexibility." },
        { q: "How do I know when to exit a swing trade?", a: "We tell you EXACTLY when. You'll receive alerts at each stage: TP1, TP2, and trailing stop updates for TP3. Follow our alerts = remove emotion from exits." },
        { q: "Do I need to watch my positions intraday?", a: "No! Swings have 'room to breathe' and daily volatility is expected. Check positions once in morning or once in evening. Intraday fluctuations don't matter unless stop-loss is hit (we'll alert you)." }
    ];

    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-10 text-center">Swing Trading Signals Questions Answered</h2>
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
