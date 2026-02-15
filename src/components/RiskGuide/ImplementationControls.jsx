import React from 'react';
import { Scale, Zap, ShieldAlert, Target, Shield, Clock, AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const ImplementationControls = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Implementing <GradientText>Stop-Losses & Limits</GradientText></h2>
                    <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Stop-loss orders and daily/weekly loss limits create mandatory circuit breakers preventing emotional decision-making during difficult periods. These non-negotiable rules force discipline when emotions scream to violate plans.
                        </p>
                        <p>
                            Individual trade stop-losses define maximum acceptable loss per position. Stop-losses are your first line of defense against catastrophic drawdowns, requiring execution without hesitation or modification when triggered. Common stop-loss approaches include technical stops at levels invalidating trade thesis (below support for longs), volatility-based stops using ATR multiples adapting to changing conditions, and time-based stops exiting trades that haven't performed as expected within a predetermined timeframe.
                        </p>
                        <p>
                            Daily loss limits cap maximum acceptable losses within single trading sessions. Set maximum acceptable daily drawdown thresholds that automatically halt trading when breached, typically 3-5% of account value. On $10,000 account, 3% daily limit ($300) stops all trading after third losing signal if each risks 1% ($100). This prevents revenge trading and emotional position sizing attempting quick recovery through increased risk.
                        </p>
                        <p>
                            Weekly and monthly loss limits provide additional protection. Set weekly limits at 7-10% of capital and monthly limits at 15-20%, forcing breaks when reached regardless of perceived recovery opportunities. If you're trading without a tested system, you're setting yourself up for failure—these forced pauses during losses allow strategy reassessment determining whether drawdowns fall within normal ranges or signal fundamental problems.
                        </p>
                        <p>
                            Consecutive loss counters halt trading after specified sequential losses. Program algorithms to pause trading after a specified number of consecutive losing trades, allowing for strategy reassessment. Five consecutive losses trigger automatic 24-48 hour break regardless of daily loss limit status, preventing psychological deterioration from extended losing streaks.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-24">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Portfolio Heat and <GradientText>Correlation Risk</GradientText></h2>
                    <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed mb-12">
                        <p>
                            Portfolio heat measures total capital at risk across all concurrent positions, preventing excessive exposure through position accumulation. Many signal followers properly size individual trades at 1-2% risk but hold 10-15 concurrent positions creating 10-30% total portfolio risk—catastrophic concentration guaranteeing severe drawdowns when correlated markets crash simultaneously.
                        </p>
                        <p>
                            Maximum portfolio heat should not exceed 10-15% across all open positions combined. If following signals across 5 positions each risking 2%, total heat sits at 10%—approaching maximum acceptable exposure. Implement portfolio-level stop-losses that trigger when your total drawdown reaches a predetermined threshold (like 3-5%), forcing position closures preventing further losses.
                        </p>
                        <p>
                            Correlation risk amplifies portfolio heat when multiple positions move together. When trading correlated instruments (like several tech stocks or forex pairs that move together), your overall portfolio risk is higher than the sum of individual position risks. Five S&P 500 stock positions each risking 1% don't create 5% independent risk—they create 3-4% effective risk as positions correlate 0.7-0.85 moving largely together.
                        </p>
                        <p>
                            Managing correlation requires reducing per-position risk on correlated instruments. If your normal risk is 1% per trade, consider 0.25-0.5% for correlated positions, allowing more total positions while maintaining acceptable portfolio heat. Alternatively, implement sector or asset class limits—maximum 3% total risk in technology stocks, 2% in cryptocurrency, 3% in energy regardless of individual position counts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <GlassCard className="p-8 border-white/10" hoverEffect>
                            <div className="flex items-center gap-4 mb-6">
                                <Scale className="text-primary w-8 h-8" />
                                <h3 className="text-2xl font-black">Portfolio Heat Limit</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-bold">
                                    <span className="text-text-muted">Safe Range</span>
                                    <span className="text-success tracking-widest uppercase text-[10px]">Active Control</span>
                                </div>
                                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                                    <div className="h-full bg-primary rounded-full w-[15%]" />
                                </div>
                                <p className="text-xs text-text-muted italic">Recommended Max: 15% across all open trades.</p>
                            </div>
                        </GlassCard>
                        <GlassCard className="p-8 border-white/10" hoverEffect>
                            <div className="flex items-center gap-4 mb-6">
                                <Zap className="text-secondary w-8 h-8" />
                                <h3 className="text-2xl font-black">Correlation Offset</h3>
                            </div>
                            <p className="text-text-secondary text-sm font-medium">
                                Reduce individual risk to 0.5% when trading multiple tech or finance tickers to prevent synchronized losses.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ImplementationControls;
