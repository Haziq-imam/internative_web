import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { XCircle } from 'lucide-react';

const CommonMistakes = () => {
    const mistakes = [
        {
            title: 'Chasing Signals After Missing Entry Prices',
            problem: 'Beginners receive signals after price has moved 20-30% from recommended entry, entering late hoping to catch remaining gains.',
            consequence: 'Late entries destroy risk-reward ratios. Entry at $3.00 with target $5.00 and stop $2.00 (2.5:1 R:R) becomes entry at $4.00 creating $1.00 to target vs $2.00 to stop (0.5:1 R:R)—mathematical disaster.',
            solution: 'Skip missed signals entirely. Missing opportunities feels frustrating but prevents guaranteed losses. Quality services provide 10-20 signals weekly—missing individual opportunities costs nothing long-term.'
        },
        {
            title: 'Modifying Stop-Losses To Avoid Losses',
            problem: 'Beginners watching positions approach stops move them further away "giving trades more room," hoping for reversals.',
            consequence: 'Original 2% risk with $50 stop gets modified to $150 stop (6% risk). When reversal never materializes, single loss destroys weeks of profits.',
            solution: 'Treat stop-losses as non-negotiable exit orders. If uncomfortable with stop location, reduce position size or skip trade—never move stops.'
        },
        {
            title: 'Holding Past Profit Targets Hoping For Larger Gains',
            problem: 'Beginners watching positions reach targets hold hoping for larger gains, watching profits evaporate when reversals occur.',
            consequence: 'Signal achieving $200 profit at target gets held hoping for $400, reversing to $50 profit or even losses. Over dozens of trades, this pattern sabotages results.',
            solution: 'Take profits at recommended targets without debate. Providers spent months optimizing target locations through backtesting—trust their research.'
        },
        {
            title: 'Revenge Trading After Losses',
            problem: 'After 2-3 consecutive losses, beginners increase position sizes attempting quick recovery, violating risk rules when emotional control is most impaired.',
            consequence: 'Following three 2% losses (6% drawdown), beginners risk 5-10% on next trade. When that also loses, 15-20% total loss creates devastating psychological damage.',
            solution: 'Implement daily loss limits (3-5% max). Stop trading for remainder of day when hit, regardless of perceived opportunities. This prevents emotional decision-making.'
        },
        {
            title: 'Following Too Many Signal Services Simultaneously',
            problem: 'Beginners subscribe to 3-5 services hoping diversification improves results, creating overwhelming signal volume (30-50+ weekly) and conflicting recommendations.',
            consequence: 'Signal overload prevents learning. Beginners miss entries, confuse position details, or enter without understanding rationale.',
            solution: 'Choose single quality service matching your schedule and capital. Master execution over 3-6 months before considering additional services. Depth beats breadth.'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        Common <GradientText>Beginner Mistakes</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Understanding these mistakes before making them dramatically improves success probability. These errors destroy more accounts than poor signal quality.
                    </p>

                    <div className="space-y-8">
                        {mistakes.map((mistake, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                                        <XCircle className="text-red-500" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white flex-1">Mistake #{index + 1}: {mistake.title}</h3>
                                </div>

                                <div className="space-y-4 ml-16">
                                    <div>
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">The Problem:</p>
                                        <p className="text-text-secondary font-medium">{mistake.problem}</p>
                                    </div>
                                    <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-4">
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">The Consequence:</p>
                                        <p className="text-text-secondary font-medium">{mistake.consequence}</p>
                                    </div>
                                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4">
                                        <p className="text-sm font-black text-text-muted uppercase tracking-wider mb-2">The Solution:</p>
                                        <p className="text-text-secondary font-medium">{mistake.solution}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CommonMistakes;
