import React from 'react';
import { TrendingDown, AlertTriangle, Activity } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const CoreUnderstanding = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">
                        Understanding <GradientText>Risk</GradientText>
                    </h2>
                    <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Risk in signal trading encompasses more than individual trade losses—it includes drawdowns (peak-to-trough account declines), correlation risk (multiple positions losing simultaneously), emotional decision-making during losing streaks, and inadequate capital creating unsustainable position sizing. Most signal followers focus obsessively on win rates while ignoring risk management, creating certain long-term failure regardless of signal quality.
                        </p>
                        <p>
                            The fundamental misconception destroying signal followers centers on expecting signals to eliminate risk. Quality signal providers achieving 60-70% win rates still lose 30-40% of trades—inevitable statistical reality requiring acceptance. Successful traders don't avoid losses—they limit them, implementing position sizing and stop-loss discipline preventing any single loss or losing streak from destroying accounts.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <GlassCard className="p-10 border-primary/20 bg-primary/5">
                        <div className="flex items-center gap-4 mb-6">
                            <TrendingDown className="text-primary w-10 h-10" />
                            <h3 className="text-2xl font-bold text-white">Drawdown</h3>
                        </div>
                        <p className="text-text-secondary leading-relaxed mb-6 font-medium">
                            Drawdown represents the decline from account equity peak to subsequent trough before new highs emerge. If your account grows from $10,000 to $12,000 through profitable signals then declines to $11,000, the drawdown is calculated from the peak ($12,000) to the trough ($11,000), creating 8.3% drawdown despite remaining above starting capital. Understanding this distinction proves critical—draw downs measure peak-to-trough declines, not returns versus initial deposits.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-10 border-secondary/20 bg-secondary/5">
                        <div className="flex items-center gap-4 mb-6">
                            <Activity className="text-secondary w-10 h-10" />
                            <h3 className="text-2xl font-bold text-white">Maximum Drawdown</h3>
                        </div>
                        <p className="text-text-secondary leading-relaxed mb-6 font-medium">
                            Maximum drawdown (MDD) represents the largest peak-to-trough decline over specified periods, quantifying worst-case scenarios signal followers must withstand. A good max drawdown is less than 25% for sustainable signal following, though most beginners experience 30-50% drawdowns before either implementing proper risk management or abandoning trading entirely after account destruction.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default CoreUnderstanding;
