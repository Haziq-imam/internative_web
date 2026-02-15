import React from 'react';
import { ArrowRight, ListChecks, ShieldCheck, Microscope, AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
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
                                <h4 className="text-white font-bold mb-2">Master Basic Strategies First</h4>
                                <p>
                                    Defer advanced strategies until demonstrating 12+ months consistent profitability with basic options approaches. Focus on mastering covered calls, protective puts, and simple call/put buying developing execution discipline and Greeks understanding first.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
                                <Microscope size={24} />
                            </div>
                            <div className="text-lg text-text-secondary font-medium leading-relaxed">
                                <h4 className="text-white font-bold mb-2">Begin Advanced Education</h4>
                                <p>
                                    Paper trade iron condors and vertical spreads for 2-3 months before risking capital. Document every simulated trade tracking Greeks evolution, adjustment decisions, and profit/loss outcomes building pattern recognition.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="text-lg text-text-secondary font-medium leading-relaxed">
                                <h4 className="text-white font-bold mb-2">Transition to Real Capital Gradually</h4>
                                <p>
                                    Start with smallest position sizes (1-2 contracts) using credit spreads. Scale gradually over 6-12 months only after demonstrating consistent profitability. Rushing growth invites catastrophic losses from overconfidence.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                                <AlertTriangle size={24} />
                            </div>
                            <div className="text-lg text-text-secondary font-medium leading-relaxed">
                                <h4 className="text-white font-bold mb-2">Consider Simpler Alternatives</h4>
                                <p>
                                    For traders finding advanced strategies incompatible with capital constraints or complexity tolerance, alternatives exist. Master basic strategies which, when executed properly, generate respectable returns without complexity. Success comes from matching strategies to personal capabilities rather than forcing participation in Compatible advanced approaches.
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
