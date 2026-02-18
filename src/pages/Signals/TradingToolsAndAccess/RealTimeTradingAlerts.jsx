import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Bell, Smartphone, Clock } from 'lucide-react';
import Section from '../../../components/ui/Section';
import GradientText from '../../../components/ui/GradientText';
import GlassCard from '../../../components/ui/GlassCard';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const RealTimeTradingAlerts = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white pt-32">
            <Helmet>
                <title>Real-Time Trading Alerts | Instant Market Notifications | InterNative Traders</title>
                <meta name="description" content="Never miss a trade with our real-time trading alerts. Delivered instantly via SMS, Email, and Push Notification. Low latency implementation for stock and options signals." />
            </Helmet>

            <Section>
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8 animate-fade-in">
                        <Zap className="w-4 h-4" /> Instant Delivery System
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Real-Time <br />
                        <GradientText>Trading Alerts</GradientText>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                        Speed matters. Our low-latency alert infrastructure ensures you receive trade signals the second our analysts pull the trigger. No delays, no missed entries.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                        <GlassCard className="p-8 text-left">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Push Notifications</h3>
                            <p className="text-text-secondary">Instant app notifications sent directly to your lock screen. One tap to view the full trade setup.</p>
                        </GlassCard>
                        <GlassCard className="p-8 text-left">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                                <Bell size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">SMS Alerts</h3>
                            <p className="text-text-secondary">Reliable text message alerts for when you don't have data or app access. Simple entry and exit instructions.</p>
                        </GlassCard>
                        <GlassCard className="p-8 text-left">
                            <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center text-success mb-6">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Email Digest</h3>
                            <p className="text-text-secondary">Detailed trade analysis delivered to your inbox for review. Perfect for swing trade planning.</p>
                        </GlassCard>
                    </div>

                    <div className="p-10 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-6">Ready to Catch the Next Move?</h2>
                        <p className="text-text-secondary mb-8">Join thousands of traders receiving daily real-time alerts.</p>
                        <Link to="/pricing">
                            <Button size="lg" className="shadow-neon px-12">Get Access Now</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default RealTimeTradingAlerts;
