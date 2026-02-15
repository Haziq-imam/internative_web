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
                        Trading signal apps involve substantial risk of loss. Approximately 70-90% of subscribers lose money despite using quality services. Even verified providers achieve 55-70% win rates and experience extended losing streaks and drawdowns. Mobile notification delivery doesn't guarantee profitable execution—success depends on disciplined risk management, adequate capital, and realistic expectations. App performance claims require third-party verification. Never risk more than 1-2% of capital per signal regardless of app claims. Trade only with capital you can afford to lose completely.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
