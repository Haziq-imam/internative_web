import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        { q: "How much capital do I need to start?", a: "You can start with as little as $1,000-$2,000. With proper position sizing (5-10% per signal), you can take 1-2 positions at a time. Many members start small and scale up as they gain confidence." },
        { q: "Do I need Pattern Day Trader (PDT) status?", a: "For day trading signals, yes (requires $25k+). However, most of our members use our Swing and Growth signals which do NOT require PDT status and work with any account size." },
        { q: "What brokers do you support?", a: "Our signals work with ANY US stock broker (Fidelity, Schwab, E*TRADE, Robinhood, Webull, etc.). We provide the ticker, entry, and exit details; you execute the trade on your preferred platform." },
        { q: "How quickly must I execute an alert?", a: "Swing trades: You typically have 30 minutes to several hours to enter. Day trades: Execute within 5-15 minutes. Growth signals: Often valid for 1-3 days. We always specify urgency in the alert." },
        { q: "What if the stock gaps up above the entry zone?", a: "Never chase. If a stock gaps beyond our entry zone, wait for a pullback or skip the trade. We will send a status update with a revised entry or cancellation if the setup is invalidated." },
        { q: "How do I know when to exit?", a: "Every signal includes 3 profit targets and a stop-loss. You'll receive real-time push notifications when targets are hit (e.g., 'Take 40% profit at Target 1'). We guide you through the entire trade lifecycle." },
        { q: "What happens during earnings announcements?", a: "We track earnings dates for all open positions. If earnings occur during a hold, we'll recommend exiting or reducing size to avoid binary risk. We strive to avoid holding through uncertain events." },
        { q: "Can I use these signals in an IRA/401k?", a: "Yes, Swing and Growth signals are perfect for retirement accounts since they don't involve short-term day trading restrictions. Always check with your custodian regarding active trading permissions." },
        { q: "Do you trade penny stocks?", a: "No. We focus on liquid stocks with adequate volume (typically >$10 price and >$5M daily volume). Penny stocks are too risky and illiquid for our professional risk management standards." }
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
