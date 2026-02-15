import React from 'react';
import { Bell, History, BarChart3, ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const AppOverview = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">
                        What Is A <GradientText>Trading Signals App?</GradientText>
                    </h2>
                    <div className="space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Trading signals apps are mobile applications delivering actionable trade recommendations through push notifications, in-app alerts, or integrated messaging platforms like Telegram and Discord. These apps transform signal services from desktop-only experiences into mobile-accessible platforms, allowing traders to receive and potentially execute signals during commutes, lunch breaks, or any time away from trading computers.
                        </p>
                        <p>
                            Quality trading signal apps provide several core functions beyond simple notification delivery. Real-time push notifications alert users immediately when new signals generate, preventing missed entries from delayed email checks or website visits. In-app signal history displays past recommendations with entry/exit prices and profit/loss tracking, enabling performance verification before subscribing or continuing services.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <GlassCard className="p-8 border-primary/20 bg-primary/5">
                        <Bell className="text-primary w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Real-Time Alerts</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Immediate push notifications prevent missed entries and delayed execution.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-secondary/20 bg-secondary/5">
                        <History className="text-secondary w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Signal History</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Transparent tracking of entry/exit prices and profit/loss history.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-success/20 bg-success/5">
                        <BarChart3 className="text-success w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Analytics</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Calculation of win rates, average gains, and maximum drawdowns.</p>
                    </GlassCard>
                    <GlassCard className="p-8 border-purple-500/20 bg-purple-500/5">
                        <ShieldCheck className="text-purple-500 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Verification</h3>
                        <p className="text-text-muted text-sm leading-relaxed">Independent confirmation of performance versus marketing claims.</p>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default AppOverview;
