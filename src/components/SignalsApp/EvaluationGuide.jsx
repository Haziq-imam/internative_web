import React from 'react';
import { Search, TestTube, Signal, BookOpen } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const EvaluationGuide = () => {
    return (
        <Section className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-12">How To <GradientText>Evaluate Apps</GradientText> Correctlly</h2>
                    <div className="space-y-12">
                        <div className="flex gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Search size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Research Provider Background</h3>
                                <p className="text-lg text-text-secondary font-medium leading-relaxed">
                                    Investigate history, reputation, and transparency. Search for keywords like "scam" or "results" in forums like Reddit. Verify company registration and physical addresses. Legitimate operations provide full transparency about who operates the service versus anonymous entities.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                <TestTube size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Start With Free Trials</h3>
                                <p className="text-lg text-text-secondary font-medium leading-relaxed">
                                    Utilize free trials or free tiers to test quality without commitment. Track free signals in paper trading accounts for 2-4 weeks. Document entry/exit prices and verify if you could have realistically executed at those prices given slippage or liquidity.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center text-success shrink-0">
                                <Signal size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Test Notification Reliability</h3>
                                <p className="text-lg text-text-secondary font-medium leading-relaxed">
                                    Evaluate speed and reliability. Signals arriving 5-15 minutes late render entries impossible. Test across different scenarios (WiFi, cellular, poor signal areas) to ensure critical alerts reach you regardless of your connectivity environment.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-8 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Assess Educational Value</h3>
                                <p className="text-lg text-text-secondary font-medium leading-relaxed">
                                    Quality apps teach competence rather than creating dependency. Review strategy guides, market analysis videos, and risk management tutorials. Test customer support responsiveness with technical or clarification questions to see if they prioritize your success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default EvaluationGuide;
