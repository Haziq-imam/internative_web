import React from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';

const OptionsFAQ = ({ title = "FREQUENTLY ASKED QUESTIONS", faqs, openFaq, setOpenFaq }) => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-4xl font-bold mb-12 text-center tracking-tighter uppercase">{title}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="font-bold group-hover:text-primary transition-colors">{faq.q}</span>
                                {openFaq === i ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-text-secondary" />}
                            </button>
                            {openFaq === i && (
                                <div className="px-8 pb-8 text-text-secondary leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default OptionsFAQ;
