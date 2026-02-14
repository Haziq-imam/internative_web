import React from 'react';
import Section from '../components/ui/Section';
import GlassCard from '../components/ui/GlassCard';
import { Helmet } from 'react-helmet-async';

const RiskDisclosure = () => {
    return (
        <>
            <Helmet>
                <title>Risk Disclosure | InterNative</title>
                <meta name="description" content="Important risk disclosure information regarding trading financial instruments." />
            </Helmet>
            <Section className="bg-background relative pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Legal Disclaimer
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-8 text-white leading-[1.1] tracking-tighter font-display">
                            Risk <br /><span className="text-gradient">Disclosure.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
                            Transparency is the foundation of institutional trust. Please review our mandatory risk protocols carefully.
                        </p>
                    </div>

                    <GlassCard className="p-12 md:p-24 leading-relaxed text-xl text-text-secondary space-y-12 rounded-[4rem] border-white/10 bg-background-secondary/40 backdrop-blur-3xl">
                        <div>
                            <p className="font-medium">
                                Trading in high-velocity financial instruments regarding <span className="text-white font-bold">Options, Stocks, Futures, and Cryptocurrencies</span> involves a significant degree of risk and is not suitable for all capital profiles. You could lose some or all of your initial investment; therefore, <span className="text-primary font-bold italic">you should never invest capital that you cannot afford to lose.</span>
                            </p>
                        </div>

                        <div className="pt-12 border-t border-white/5">
                            <h2 className="text-3xl font-black mb-6 text-white tracking-tight">Leverage Efficiency & Risk</h2>
                            <p className="font-medium">
                                The high degree of leverage that is often obtainable in professional trading can work against you as well as for you. Use of leverage can lead to accelerated losses as well as gains. InterNative signals utilize leverage strategically, but final execution risk remains with the operator.
                            </p>
                        </div>

                        <div className="pt-12 border-t border-white/5">
                            <h2 className="text-3xl font-black mb-6 text-white tracking-tight">Informational Context</h2>
                            <p className="font-medium">
                                The content provided by InterNative, including but not limited to algorithmic signals, technical analysis, and proprietary educational materials, is for <span className="text-white font-bold">informational and educational purposes only</span> and must not be construed as specific investment advice, financial planning, or fiduciary consultation.
                            </p>
                        </div>

                        <div className="pt-12 border-t border-white/5">
                            <h2 className="text-3xl font-black mb-6 text-white tracking-tight">Historical Performance</h2>
                            <p className="font-medium italic">
                                Past performance of any algorithmic system or signal methodology is not necessarily indicative of future performance. There is no guarantee that users will achieve identical ROI using the techniques or models presented in these materials.
                            </p>
                        </div>
                    </GlassCard>
                </div>
            </Section>
        </>
    );
};

export default RiskDisclosure;
