import React from 'react';
import Section from '../ui/Section';

const RiskDisclosure = () => {
    return (
        <Section className="py-24 bg-background-secondary border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/5 text-[10px] text-text-muted leading-relaxed text-justify">
                    <h5 className="text-white font-bold uppercase mb-4 text-center text-sm">Understand Swing Trading Risks</h5>
                    <p className="mb-4">Swing trading involves substantial risk and is not appropriate for all investors. While less stressful than day trading, swing trades still carry significant risks including overnight & weekend gaps, market corrections, and opportunity cost. Position sizing is critical: allocate max 10-15% of portfolio per swing and hold max 2-4 concurrent swings. ALWAYS use stop-losses. We provide educational signals, not financial advice. Past performance does not guarantee future results.</p>
                </div>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
