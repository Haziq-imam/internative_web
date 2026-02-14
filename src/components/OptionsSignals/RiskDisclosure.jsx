import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import CheckList from '../ui/CheckList';

const RiskDisclosure = () => {
    return (
        <Section className="py-24 bg-background-secondary/30 border-y border-white/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <GlassCard className="p-8 md:p-12 border-red-500/20 bg-red-500/5">
                    <div className="flex items-center gap-4 mb-8 text-red-400">
                        <AlertTriangle size={32} />
                        <h2 className="text-2xl font-black uppercase tracking-widest">Risk Disclosure & Disclaimer</h2>
                    </div>
                    <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
                        <p>
                            <span className="text-white font-bold">High Risk Investment:</span> Options trading involves significant risk and is not suitable for all investors. The high degree of leverage that is often obtainable in options trading can work against you as well as for you. The use of leverage can lead to large losses as well as gains.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8 py-6 border-y border-white/5">
                            <div>
                                <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Trading Rules</h4>
                                <CheckList items={[
                                    "Never trade money you can't afford to lose",
                                    "Follow position sizing guidelines (2-5%)",
                                    "Always use the provided stop-loss",
                                    "Past performance ≠ future results"
                                ]} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Our Responsibility</h4>
                                <p className="text-xs">InterNative Traders provides educational signals and analysis. We are not registered financial advisors. All trade decisions are ultimately the responsibility of the individual trader.</p>
                            </div>
                        </div>
                        <p className="text-[10px] text-text-muted italic">
                            InterNative Traders and its analysts shall not be liable for any losses or damages resulting from the use of our signals. By using our service, you acknowledge and accept these risks in full.
                        </p>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default RiskDisclosure;
