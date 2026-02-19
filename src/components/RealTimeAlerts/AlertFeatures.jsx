import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Zap, Bell, Smartphone, CheckCircle2, Clock, TrendingUp, Shield } from 'lucide-react';

const AlertFeatures = () => {
    const features = [
        {
            icon: Zap,
            color: 'text-primary',
            title: 'Instant Delivery',
            description: 'Signals sent to your phone in under 30 seconds via push notifications and SMS.',
            stats: '< 30 sec delivery'
        },
        {
            icon: Bell,
            color: 'text-emerald-500',
            title: 'Multi-Channel Alerts',
            description: 'Receive alerts via mobile app push, SMS, Discord, and email. Never miss a signal.',
            stats: '4 alert channels'
        },
        {
            icon: Smartphone,
            color: 'text-purple-500',
            title: 'Mobile App',
            description: 'Dedicated iOS and Android apps with customizable alert sounds and vibration patterns.',
            stats: 'iOS + Android'
        },
        {
            icon: Clock,
            color: 'text-orange-500',
            title: 'Market Hours Tracking',
            description: 'Alerts only during market hours (9:30 AM - 4:00 PM ET). No spam after hours.',
            stats: 'Smart scheduling'
        },
        {
            icon: TrendingUp,
            color: 'text-blue-500',
            title: 'Entry Price Alerts',
            description: 'Get notified when price hits entry zones. Set custom price alerts for any signal.',
            stats: 'Price tracking'
        },
        {
            icon: Shield,
            color: 'text-red-500',
            title: 'Exit Alerts',
            description: 'Automatic notifications when signals hit targets or stop-losses. Never miss exits.',
            stats: 'Auto exit alerts'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">
                        Alert System <GradientText>Features</GradientText>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all">
                                    <Icon className={`${feature.color} mb-4`} size={40} />
                                    <h3 className="text-2xl font-black text-white mb-3">{feature.title}</h3>
                                    <p className="text-text-secondary font-medium mb-4 leading-relaxed">{feature.description}</p>
                                    <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full">
                                        <CheckCircle2 className="text-emerald-500" size={16} />
                                        <span className="text-sm font-black text-white">{feature.stats}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-3xl p-10 text-center">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                            Why Speed Matters in Options Trading
                        </h3>
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto mb-6">
                            Options prices move in seconds. A 2-minute delay can turn a 50% winner into a 10% loser. Our real-time alerts ensure you get the best entry prices—the same prices our team gets.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                                <p className="text-3xl font-black text-emerald-500 mb-2">0-30 sec</p>
                                <p className="text-text-secondary font-medium">InterNative Traders</p>
                            </div>
                            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                                <p className="text-3xl font-black text-orange-500 mb-2">1-5 min</p>
                                <p className="text-text-secondary font-medium">Most competitors</p>
                            </div>
                            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                                <p className="text-3xl font-black text-red-500 mb-2">10+ min</p>
                                <p className="text-text-secondary font-medium">Free signals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AlertFeatures;
