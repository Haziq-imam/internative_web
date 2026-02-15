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
                        Following trading signals involves substantial risk of loss regardless of signal quality or provider track record. Even professional signal providers achieving 65-70% win rates experience extended losing streaks and significant drawdowns. No signal service can guarantee profits or prevent losses. This content is for educational purposes only and does not constitute financial advice or trading recommendations. Never risk more than 1-2% of capital per individual trade. Consult qualified financial professionals before making trading decisions. Trade only with capital you can afford to lose completely.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
