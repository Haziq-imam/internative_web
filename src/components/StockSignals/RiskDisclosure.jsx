import React from 'react';
import Section from '../ui/Section';

const RiskDisclosure = () => {
    return (
        <Section className="py-12 border-t border-white/5 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-xs text-text-muted leading-relaxed opacity-70">
                    <h5 className="font-bold text-white mb-2 uppercase tracking-widest">Risk Disclosure</h5>
                    <p className="mb-4">
                        Stock trading involves substantial risk of loss and is not appropriate for all investors. Stock prices can be volatile, and you can lose a significant portion of your investment.
                        Past performance is not indicative of future results. The high degree of leverage that is often obtainable in trading can work against you as well as for you.
                    </p>
                    <p className="mb-4">
                        <strong>Key Risks:</strong>
                        <br />
                        • Price Volatility: Stock prices fluctuate based on company performance, market conditions, and external events.
                        <br />
                        • Company-Specific Risk: Negative earnings, management changes, or competitive threats can cause sharp declines.
                        <br />
                        • Market Risk: Broader economic factors like interest rates and inflation affect all stocks.
                    </p>
                    <p>
                        InterNative Traders is not a registered investment advisor or broker-dealer. All content is for educational purposes only and should not be construed as financial advice.
                        Trade only with capital you can afford to lose completely. Consult with qualified financial professionals before making trading decisions.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
