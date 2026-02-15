import React from 'react';
import { ArrowRight, ListChecks, AlertTriangle, ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const NextSteps = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        Your <GradientText>Next Steps</GradientText>
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                <ArrowRight size={24} />
                            </div>
                            <div className="text-lg text-text-secondary font-medium leading-relaxed">
                                <p>
                                    Immediately implement the 1-2% position sizing rule on all future signal trades before any other risk management changes. Calculate maximum position sizes for typical signals you follow ensuring compliance—if current sizing exceeds safe parameters, reduce immediately even if requiring skipping signals incompatible with smaller positions. This single change dramatically improves survival probability regardless of other risk management gaps.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
                                <ListChecks size={24} />
                            </div>
                            <div className="text-lg text-text-secondary font-medium leading-relaxed">
                                <p>
                                    Establish daily, weekly, and monthly loss limits creating mandatory trading halts when breached. Set daily limit at 3-4% of current account value, weekly at 8-10%, and monthly at 15-18%. Write these limits prominently where visible during trading, creating constant reminders. Many traders establish limits but fail implementing when reached—treating limits as suggestions rather than absolute rules. Commit to honoring limits without exception, accepting missed perceived opportunities during forced breaks as acceptable cost preventing catastrophic losses through emotional decision-making.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="text-lg text-text-secondary font-medium leading-relaxed">
                                <p>
                                    Review recent drawdowns identifying whether current underperformance falls within expected ranges for your strategy or signals fundamental problems. If following signals less than 6 months, insufficient data exists judging whether 15-20% drawdowns represent normal variance or execution errors. Traders following signals 12+ months can compare current drawdowns to historical ranges determining if recent periods exceed expected parameters. Drawdowns within historical ranges require patience and discipline, while those significantly exceeding past experience demand strategy reassessment or signal provider changes.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                                <AlertTriangle size={24} />
                            </div>
                            <div className="text-lg text-text-secondary font-medium leading-relaxed">
                                <p>
                                    For traders discovering risk management violations created current drawdowns, resist temptation increasing position sizes attempting quick recovery. Reduction remains the appropriate response regardless of desire for rapid account restoration. Many traders entering drawdowns through excessive risk compound mistakes by further increasing sizing hoping for lucky recovery trades—this virtually guarantees complete account destruction. Accept that recovery requires time and patience, not aggression and hope.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default NextSteps;
