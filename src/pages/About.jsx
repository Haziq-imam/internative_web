import React from 'react';
import Section from '../components/ui/Section';
import GlassCard from '../components/ui/GlassCard';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | InterNative</title>
                <meta name="description" content="Learn about InterNative and our mission to democratize professional trading intelligence." />
            </Helmet>
            <Section className="bg-background relative pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl opacity-50" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Our Mission
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-8 text-white leading-[1.1] tracking-tighter font-display">
                            The New Standard in <br />
                            <span className="text-gradient">Trading Intelligence.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
                            Democratizing access to institutional-grade tools and institutional alpha for retail traders worldwide.
                        </p>
                    </div>

                    <GlassCard className="p-12 md:p-24 leading-relaxed text-xl text-text-secondary space-y-10 rounded-[4rem] border-white/10 bg-background-secondary/40 backdrop-blur-3xl">
                        <p className="font-medium">
                            InterNative was founded with a singular, uncompromising mission: <span className="text-white font-black">to level the playing field.</span> we believe that every trader, regardless of capital size, deserves access to the same quality of data, analysis, and execution speed that Tier-1 Wall Street desks rely on.
                        </p>
                        <p className="font-medium">
                            Our collective consists of veteran volatility traders, quantitative data scientists, and former institutional analysts who have spent decades navigating the complexities of global financial markets. We combine human intuition with proprietary algorithms to identify high-probability opportunities in real-time.
                        </p>
                        <p className="font-medium">
                            Whether you're trading short-dated options, swing trading equities, or navigating the 24/7 crypto markets, our goal is to provide the <span className="text-primary font-black">tactical edge</span> needed for consistent performance. We don't just provide signals; we build professional traders.
                        </p>

                        <div className="pt-10 flex flex-col md:flex-row gap-12 border-t border-white/5">
                            <div>
                                <div className="text-4xl font-black text-white mb-2 font-display">5,000+</div>
                                <div className="text-xs font-black text-white/40 uppercase tracking-widest">Active Traders</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white mb-2 font-display">$500M+</div>
                                <div className="text-xs font-black text-white/40 uppercase tracking-widest">Trade Volume Notional</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white mb-2 font-display">99.9%</div>
                                <div className="text-xs font-black text-white/40 uppercase tracking-widest">Alert Uptime</div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Section>
        </>
    );
};

export default About;
