import React from 'react';
import { AlertTriangle, TrendingDown, ClipboardCheck, Percent, Zap, RefreshCw, Scale } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const FailureAnalysis = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">
                        The Reality: <span className="text-red-500">80-95%</span> of Advanced <br />
                        <GradientText>Traders Lose Money</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium leading-relaxed">
                        Approaching advanced options trading requires understanding that failure rates exceed basic strategy trading despite greater sophistication. Complexity amplifies rather than reduces risk for most participants.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5 hoverEffect">
                        <TrendingDown className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Strategy Misunderstanding</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Traders fail recognizing that a $500 credit might risk $4,500 potential loss—a 9:1 risk-reward ratio requiring extreme win rates for profitability.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5 hoverEffect">
                        <ClipboardCheck className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Execution Errors</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Mistakenly buying instead of selling, or entering wrong strikes in a 4-leg trade, creates exactly the opposite position intended.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5 hoverEffect">
                        <Percent className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Commission Costs</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Multi-leg trades multiply fees. Executing 20 iron condors monthly creates substantial fixed costs that significantly erode returns.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5 hoverEffect">
                        <Zap className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Assignment Risk</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Early assignment on short options creates unexpected positions requiring massive capital ($20k-$100k+) or forcing liquidations.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5 hoverEffect">
                        <Scale className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Volatility Impact</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Positions like iron condors can lose from volatility expansion even if prices remain within the "profitable" range.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8 border-red-500/20 bg-red-500/5 hoverEffect">
                        <RefreshCw className="text-red-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Adjustment Complexity</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Failed adjustments convert manageable losses into catastrophic ones when trying to "fix" a position gone wrong.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default FailureAnalysis;
