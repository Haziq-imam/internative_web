import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import GlassCard from '../ui/GlassCard';

const AdvancedSummary = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        Guide <GradientText>Summary</GradientText>
                    </h2>
                    <GlassCard className="p-10 border-white/5 space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Advanced options trading encompasses sophisticated multi-leg strategies combining multiple option positions creating customized risk-reward profiles impossible to achieve through basic approaches. However, complexity introduces new failure modes with approximately 80-95% of traders attempting advanced strategies losing money through misunderstanding risk dynamics, inadequate capital, or poor execution.
                        </p>
                        <p>
                            Advanced strategies serve specific purposes: vertical spreads define risk while maintaining directional exposure, iron condors profit from range-bound markets and theta decay, calendar spreads capitalize on time decay differentials, and ratio strategies create asymmetric payoffs with unlimited risk components. Each strategy demands deep understanding of mechanics developed only through extensive experience.
                        </p>
                        <p>
                            Success requires meeting stringent prerequisites including 12-24+ months profitable basic experience, $25,000-$100,000+ trading capital, active monitoring, and mathematical sophistication understanding Greeks and probability. Traders lacking these face near-certain losses attempting strategies beyond their competence or capital capacity.
                        </p>
                        <p>
                            Professional advanced strategy traders target 25-50% annual returns with 20-35% maximum drawdowns—respectable but far from guaranteed monthly income. Win rates range from 75% for theta-focused strategies to 40% for directional debit spreads, requiring disciplined risk management preventing occasional large losses from destroying cumulative profits.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default AdvancedSummary;
