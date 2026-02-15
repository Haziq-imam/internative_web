import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import GlassCard from '../ui/GlassCard';

const RiskSummary = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        Risk Guide <GradientText>Summary</GradientText>
                    </h2>
                    <GlassCard className="p-10 border-white/5 space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Trading signals provide structured trade recommendations but success depends entirely on risk management discipline, not signal quality alone. Even quality providers achieving 65-70% win rates create inevitable losing streaks requiring position sizing, stop-losses, and drawdown management preventing account destruction. Approximately 70-90% of signal followers lose money not because signals fail, but because they violate basic risk principles during difficult periods.
                        </p>
                        <p>
                            The fundamental position sizing rule limits individual trade risk to 1-2% of total capital regardless of signal confidence or recent results. This conservative approach ensures 10 consecutive losses (inevitable periodically even with quality signals) create only 10-20% drawdowns versus catastrophic 40-65% drawdowns from 5-10% per-trade risk. Mathematical reality of recovery requirements—50% drawdown needs 100% gain reaching breakeven—makes prevention through conservative sizing dramatically easier than recovery from excessive risk-taking.
                        </p>
                        <p>
                            Drawdowns prove inevitable requiring acceptance and preparation rather than surprise. Good maximum drawdowns stay below 15-25% for sustainable trading, though most beginners experience 30-50% before implementing proper risk management. Recovery from drawdowns demands reducing position sizes 30-50%, following only highest-probability signals, and staged return to normal sizing only after partial equity recovery demonstrates strategy normalization.
                        </p>
                        <p>
                            Stop-loss orders and loss limits create mandatory circuit breakers preventing emotional decision-making. Individual trade stops define maximum per-position losses, daily limits (3-5% account value) halt trading after difficult sessions, and weekly/monthly limits (7-10% and 15-20%) force extended breaks during severe drawdowns. These mechanical rules remove discretion during emotional extremes when traders most likely violate discipline through revenge trading or excessive risk-taking.
                        </p>
                        <p>
                            Portfolio heat and correlation risk require monitoring total exposure across concurrent positions. Maximum portfolio heat should not exceed 10-15% regardless of individual position counts, with correlated positions requiring reduced per-trade sizing (0.25-0.5% versus 1-2% normal) accounting for synchronized movements amplifying effective risk beyond simple summation.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default RiskSummary;
