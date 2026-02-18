import React from 'react';
import Section from '../ui/Section';

const RiskDisclosure = () => {
    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/5 text-[10px] text-text-muted leading-relaxed text-justify">
                    <h5 className="text-white font-bold uppercase mb-4 text-center text-sm">Swing Trading Risk Disclosure</h5>
                    <p className="mb-4">Swing trading involves substantial risk and is not appropriate for all investors. While less stressful than day trading, swing trades still carry significant risks that you must understand before trading.</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-6 text-left">
                        <div>
                            <strong className="text-white block mb-1">Overnight & Weekend Risk</strong>
                            <ul className="list-disc pl-4 space-y-1 mb-4">
                                <li>Positions held overnight can gap up/down on news.</li>
                                <li>Weekend gaps (market closed Fri 4pm, opens Mon 9:30am).</li>
                                <li>Earnings surprises during hold period (though we screen for this).</li>
                                <li>Geopolitical events can affect open positions while you sleep.</li>
                            </ul>

                            <strong className="text-white block mb-1">Asset-Specific Risks</strong>
                            <ul className="list-disc pl-4 space-y-1">
                                <li><strong>Stock Swings:</strong> Company-specific events, sector rotation.</li>
                                <li><strong>Options Swings:</strong> Theta decay (time value loss), volatility crush.</li>
                                <li><strong>Crypto Swings:</strong> Extreme volatility, 24/7 gap risk.</li>
                                <li><strong>Futures Swings:</strong> Leverage magnifies losses, margin calls possible.</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">Market & Opportunity Risk</strong>
                            <ul className="list-disc pl-4 space-y-1 mb-4">
                                <li>Broader market corrections can affect all long positions.</li>
                                <li>Capital tied up for 3-21 days may miss other opportunities.</li>
                                <li>Slower compounding than day trading (but less stressful).</li>
                            </ul>

                            <strong className="text-white block mb-1">Recommended Risk Management</strong>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Allocate max 10-15% of portfolio per swing.</li>
                                <li>Hold max 2-4 concurrent swings to ensure diversification.</li>
                                <li><strong>ALWAYS</strong> use stop-losses (wider than day trades, but mandatory).</li>
                                <li>Keep 40-50% cash reserve for new opportunities.</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-center italic opacity-70">
                        InterNative Traders provides educational swing trading signals. We are not financial advisors. Past performance does not guarantee future results.
                        Trade only with capital you can afford to lose completely.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
