import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Bell, Users } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const About = () => {
    const features = [
        {
            icon: <TrendingUp className="w-12 h-12 text-primary" />,
            title: "Expert Analysts",
            description: "Get precise trading signals about the market."
        },
        {
            icon: <Bell className="w-12 h-12 text-primary" />,
            title: "Reliable Alerts",
            description: "Daily alerts for ups and downs directly on your phone."
        },
        {
            icon: <Users className="w-12 h-12 text-primary" />,
            title: "Client Satisfaction",
            description: "Exceptional support and guaranteed satisfaction."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-text-primary">
            <Helmet>
                <title>About Us - InterNative Traders</title>
                <meta name="description" content="Learn about InterNative Traders - your leading source for accurate and trustworthy trading signals." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            About <span className="text-gradient">Us</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            Your leading, reliable source for traders and investors of all experience levels
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <GlassCard className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                                Who is InterNative Traders?
                            </h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We are a leading, reliable source for traders and investors of all experience levels seeking accurate and trustworthy trading signals. We provide real-time trading signals for stocks listed on Nasdaq, S&P 500, Dow Jones, and Russell 2000.
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <GlassCard className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                                There are many trading apps in the market - What makes us different?
                            </h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    There is more to successful trading than just luck or instinct. We offer our clients up-to-date trading signals supported by in-depth research and analysis. We aim to give traders the information they need to capitalize on market insight and make profitable trading decisions without missing a beat!
                                </p>
                                <p>
                                    With our help, you can understand the markets and get instant notifications when price data reaches a certain threshold.
                                </p>
                                <p className="font-bold text-white">
                                    Result? You can confidently reach your goals by making wise, prudent financial decisions in the future.
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, idx) => (
                                <GlassCard key={idx} className="p-8 text-center" hoverEffect>
                                    <div className="flex justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-text-secondary">{feature.description}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stock Image Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <GlassCard className="overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
                                alt="Trading Analytics"
                                className="w-full h-[400px] object-cover"
                            />
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Ready to Start Trading Smarter?
                        </h2>
                        <p className="text-xl text-text-secondary mb-8">
                            Join thousands of traders who trust InterNative for accurate, real-time trading signals.
                        </p>
                        <Button size="lg" className="shadow-neon">
                            Get Started Today
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
