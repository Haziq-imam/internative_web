import React from 'react';
import { ShieldAlert, TrendingDown, Target, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const SurvivalGuide = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">Understanding and Surviving <GradientText>Drawdowns</GradientText></h2>
                    <div className="space-y-8 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Drawdowns prove inevitable when following signals—accepting this reality and preparing for recovery represents critical psychological shift most beginners never make. Your biggest drawdown is most likely yet to come, meaning however large past drawdowns felt, statistically larger ones await in future requiring preparation rather than surprise.
                        </p>
                        <p>
                            Recovery from drawdowns requires disproportionate gains versus initial losses. A 10% drawdown needs an 11.1% gain to recover, while a 50% drawdown needs a 100% gain for you to hit breakeven. This exponential recovery requirement explains why preserving capital means protecting your future opportunities—large drawdowns create mathematical holes requiring exceptional performance escaping.
                        </p>
                        <p>
                            Typical signal-following drawdowns vary by strategy and execution quality. Conservative theta-selling strategies (iron condors, credit spreads) targeting 60-70% monthly premiums experience 10-20% drawdowns during difficult markets. Directional strategies (swing trading, momentum trading) face 20-35% drawdowns during trend reversals or whipsaw periods. Aggressive leveraged or high-frequency approaches suffer 30-50%+ drawdowns before either recovering or destroying accounts entirely.
                        </p>
                        <p>
                            Drawdown duration proves equally important as depth. Shallow 12% drawdown lasting 3 months proves psychologically easier than 12% drawdown persisting 9 months. Most traders underestimate their risk tolerance. What looks tolerable in backtesting is not as straightforward when dealing with real money and real losses. Paper trading never replicates the psychological stress of watching real capital decline over extended periods.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SurvivalGuide;
