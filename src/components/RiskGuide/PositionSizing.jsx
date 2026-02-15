import React from 'react';
import { Info, Calculator, Percent, ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const PositionSizing = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">The <GradientText>1-2% Position Sizing</GradientText> Rule</h2>
                    <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Position sizing represents the single most important risk management principle separating profitable signal followers from the 70-90% who lose money. The fundamental rule: risk no more than 1-2% of total capital per trade, regardless of signal confidence, recent results, or conviction strength.
                        </p>
                        <p>
                            The mathematical justification for conservative sizing becomes clear examining losing streak impacts. Risking 10% per trade: 10 losses = 65% account drawdown (virtually impossible to recover from). Risking 5% per trade: 10 losses = 40% account drawdown (very difficult to recover from). Risking 2% per trade: 10 losses = 18% account drawdown (manageable). Risking 1% per trade: 10 losses = 9.6% account drawdown (easily recoverable). Even quality 65% win rate signals experience 10 consecutive losses periodically through statistical clustering—proper sizing ensures survival.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <GlassCard className="p-8 text-center border-white/10" hoverEffect>
                        <div className="text-4xl font-black text-white mb-2">10%</div>
                        <div className="text-text-muted text-sm font-bold uppercase tracking-widest mb-4">Risk per Trade</div>
                        <p className="text-red-500 font-bold">65% Drawdown</p>
                        <p className="text-xs text-text-muted mt-2">After 10 losses. Virtually impossible to recover.</p>
                    </GlassCard>
                    <GlassCard className="p-8 text-center border-white/10" hoverEffect>
                        <div className="text-4xl font-black text-white mb-2">5%</div>
                        <div className="text-text-muted text-sm font-bold uppercase tracking-widest mb-4">Risk per Trade</div>
                        <p className="text-orange-500 font-bold">40% Drawdown</p>
                        <p className="text-xs text-text-muted mt-2">Very difficult to recover from.</p>
                    </GlassCard>
                    <GlassCard className="p-8 text-center border-primary/30 bg-primary/5" hoverEffect>
                        <div className="text-4xl font-black text-primary mb-2">2%</div>
                        <div className="text-text-muted text-sm font-bold uppercase tracking-widest mb-4">Risk per Trade</div>
                        <p className="text-success font-bold">18% Drawdown</p>
                        <p className="text-xs text-text-muted mt-2">Manageable recovery path.</p>
                    </GlassCard>
                    <GlassCard className="p-8 text-center border-success/30 bg-success/5" hoverEffect>
                        <div className="text-4xl font-black text-success mb-2">1%</div>
                        <div className="text-text-muted text-sm font-bold uppercase tracking-widest mb-4">Risk per Trade</div>
                        <p className="text-success font-bold">9.6% Drawdown</p>
                        <p className="text-xs text-text-muted mt-2">Easily recoverable, professional level.</p>
                    </GlassCard>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Implementation requires calculating precise position sizes before entering trades. On $10,000 account risking 1% ($100 maximum loss), if signal recommends stop-loss $2.00 away from entry, maximum position size equals 50 shares ($100 risk ÷ $2.00 stop distance = 50 shares). If signal requires $500 minimum position but stop sits $5 away, this creates $2,500 potential loss (500 shares × $5 stop) equaling 25% account risk—skip the trade entirely rather than violating sizing discipline.
                        </p>
                        <p>
                            For smaller accounts (under $10,000), recommend staying closer to 1% risk per trade, as limited capital provides less cushion absorbing inevitable losing streaks. Larger accounts ($25,000-$100,000+) can potentially increase to 1.5-2% risk per trade, though many professional traders maintain 1% sizing regardless of capital recognizing psychological benefits of conservative approaches during difficult periods.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default PositionSizing;
