import React from 'react';
import { TrendingDown, Target, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';

const RiskAdjustment = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 text-center">Adjusting Risk During <GradientText>Drawdowns</GradientText></h2>
                    <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Risk management must adapt to account performance—maintaining identical position sizing during 25% drawdowns as during equity peaks proves psychologically and mathematically suboptimal. Scaling risk to current conditions improves recovery probability and reduces emotional stress.
                        </p>
                        <p>
                            Reduce position sizes 30-50% during significant drawdowns (15%+ from peaks). If normally risking 2% per trade, reduce to 1-1.3% until account recovers to within 10% of previous highs. This prevents drawdown acceleration through bad timing—if your strategy currently underperforms, smaller positions limit additional damage until performance normalizes.
                        </p>
                        <p>
                            Trade more selectively during drawdowns, following only highest-probability signals rather than attempting every recommendation. Reduced size, only A-setups, and a staged return to normal once a small equity cushion is rebuilt characterizes professional drawdown management. Skip marginal B and C-rated signals, deploying capital exclusively on clearest setups offering best risk-reward profiles.
                        </p>
                        <p>
                            Recovery milestones dictate position size increases. After recovering 25% of drawdown, increase sizing 10-20% toward normal levels. After recovering 50% of drawdown, return to 75-85% normal sizing. Only after establishing new equity highs return to full position sizing—premature aggression during partial recoveries risks re-entering drawdown immediately.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-[3rem] border border-primary/20">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                                <TrendingDown className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Reduce Size</h4>
                            <p className="text-text-secondary text-sm">Cut position risk by 30-50% after a 15% peak-to-trough decline.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mx-auto mb-6">
                                <Target className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Selectivity</h4>
                            <p className="text-text-secondary text-sm">Follow only "A-setups" during drawdowns. Skip marginal signals.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center text-success mx-auto mb-6">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-4">Stage Return</h4>
                            <p className="text-text-secondary text-sm">Incrementally return to normal size only after partial recovery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default RiskAdjustment;
