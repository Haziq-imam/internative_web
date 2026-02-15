import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';

const StrategyIntro = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        The Core of <GradientText>Advanced Strategies</GradientText>
                    </h2>
                    <div className="space-y-8 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Advanced options trading involves simultaneously buying and selling multiple option contracts—often with different strike prices, expiration dates, or both—creating positions with customized risk-reward characteristics impossible to achieve through simple call or put buying. These multi-leg strategies include spreads, iron condors, butterflies, calendars, diagonals, ratio spreads, and dozens of other combinations.
                        </p>
                        <p>
                            The fundamental distinction separating advanced from basic options trading centers on complexity and purpose. Basic strategies (buying calls/puts, covered calls, protective puts) express directional market views using single transactions or simple two-leg positions. Advanced strategies employ 3-4+ leg combinations pursuing specific objectives: profiting from theta decay while limiting directional risk, capitalizing on volatility changes independent of price direction, or creating asymmetric payoffs leveraging probability advantages.
                        </p>
                        <p>
                            Advanced strategies require broker approval for Level 3-5 options trading, granted only after demonstrating experience, knowledge, and financial adequacy. Brokers assess trading history (typically 100+ option trades minimum), net worth and liquid assets (often $25,000-$100,000+), investment objectives, and options knowledge through qualification tests. This gatekeeping aims to protect inexperienced traders from complex strategies they don't understand.
                        </p>
                        <p>
                            Capital requirements for advanced trading substantially exceed basic strategies. While buying calls or puts requires only premium paid ($200-$1,000 typical), multi-leg spreads demand margin requirements ranging from $2,000-$20,000 per position depending on strategy width and broker policies. Iron condors might require $5,000-$10,000 buying power per contract, limiting accessibility to well-capitalized traders.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default StrategyIntro;
