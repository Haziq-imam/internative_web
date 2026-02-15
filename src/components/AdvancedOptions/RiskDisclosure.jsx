import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';

const RiskDisclosure = () => {
    return (
        <Section className="pb-24 pt-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto p-8 border-t border-white/5 opacity-80">
                    <div className="flex items-center gap-3 text-red-500 font-bold mb-6">
                        <AlertTriangle className="w-5 h-5" /> Risk Disclosure
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed italic">
                        Advanced options trading involves substantial risk of loss and is completely unsuitable for inexperienced traders or those with inadequate capital. Approximately 80-95% of traders attempting advanced strategies lose money. Multi-leg strategies introduce execution errors, assignment risks, and non-intuitive exposures to volatility and time decay. Position adjustments require sophisticated judgment developed through extensive experience. Commission costs on 4-6 leg strategies significantly erode profitability. Greeks (delta, gamma, theta, vega) must be continuously monitored—trading without Greek awareness virtually guarantees losses. This content is for educational purposes only and does not constitute financial advice. Never attempt advanced strategies without 12+ months profitable basic options experience and $25,000-$100,000+ capital.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
