import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Rocket, Clock, Target, Shield, ArrowUpRight, Zap } from 'lucide-react';
import Section from '../../components/ui/Section';
import GlassCard from '../../components/ui/GlassCard';
import GradientText from '../../components/ui/GradientText';
import Button from '../../components/ui/Button';

const DayTradingSignals = () => {
    const features = [
        {
            icon: <Clock className="text-primary" />,
            title: "Intraday Focus",
            desc: "Signals designed for fast-paced, intraday market movements."
        },
        {
            icon: <Target className="text-emerald-500" />,
            title: "Precise Targets",
            desc: "Clear entry, stop-loss, and multi-tier profit targets."
        },
        {
            icon: <Shield className="text-secondary" />,
            title: "Risk Control",
            desc: "Advanced risk management for every single trade alert."
        }
    ];

    return (
        <div className="min-h-screen bg-[#030014] text-white">
            <Helmet>
                <title>Day Trading Signals | Precision Intraday Alerts | InterNative Traders</title>
                <meta name="description" content="Get high-probability intraday trading signals for stocks and options. Our day trading alerts provide precise entry, target, and stop-loss levels for fast-moving markets." />
            </Helmet>

            <Section className="pt-32 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        Day Trading <GradientText>Signals.</GradientText>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                        Precision intraday alerts for active traders. Capture quick market moves with expert analysis and real-time notifications.
                    </p>

                    <div className="flex justify-center gap-4 mb-20">
                        <Button size="lg" className="shadow-neon">Start Free Trial</Button>
                        <Button variant="outline" size="lg">View Track Record</Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <GlassCard key={i} className="p-8" hoverEffect>
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 text-primary">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{f.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <GlassCard className="p-10 md:p-16 border-primary/20">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-black mb-6">Built for <GradientText>Speed.</GradientText></h2>
                                    <p className="text-text-secondary text-lg leading-relaxed mb-8">
                                        Day trading requires split-second decisions. Our infrastructure ensures signals reach your mobile device in under 2 seconds, giving you the edge the pro's have.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Instant Push Notifications",
                                            "Entry & Exit Zone Updates",
                                            "Dynamic Stop-Loss Adjustments",
                                            "Real-time Volume Analysis"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white font-bold">
                                                <Target size={18} className="text-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
                                    <div className="relative z-10 p-8 rounded-3xl bg-background border border-white/10 shadow-2xl">
                                        <div className="flex items-center justify-between mb-8">
                                            <span className="text-xs font-black uppercase tracking-widest text-text-muted">Live Active Signal</span>
                                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                Active
                                            </span>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-baseline">
                                                <h4 className="text-3xl font-black">TSLA</h4>
                                                <span className="text-emerald-500 font-black">+14.2%</span>
                                            </div>
                                            <div className="text-sm text-text-secondary">Type: Day Trade Call Option</div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-[70%]" />
                                            </div>
                                            <div className="flex justify-between text-[10px] font-bold text-text-muted">
                                                <span>ENTRY $240.50</span>
                                                <span>TARGET $255.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default DayTradingSignals;
