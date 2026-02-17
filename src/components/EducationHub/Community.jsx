import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import Button from '../ui/Button';
import { MessageCircle, Users, Heart, Share2, ArrowRight, MessageSquare } from 'lucide-react';

const Community = () => {
    const features = [
        {
            title: "Discord Community",
            icon: MessageSquare,
            desc: "Join our active Discord with dedicated channels for beginners, trade ideas, wins/losses, and study groups.",
            link: "Join Discord Community"
        },
        {
            title: "Study Groups",
            icon: Users,
            desc: "Weekly study sessions and accountability partners to help you review material and stay on track with your goals.",
            link: "Find a Study Group"
        },
        {
            title: "Success Stories",
            icon: Heart,
            desc: "Monthly spotlights on members who achieved major milestones. Learn technical and psychological lessons from their journey.",
            link: "Read Member Stories"
        }
    ];

    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        Learn Together— <br />
                        <GradientText>Join Thousands of Traders</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium">
                        Trading can be lonely, but learning doesn't have to be. Join our vibrant community of traders committed to mutual growth and professional excellence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, i) => (
                        <GlassCard key={i} className="p-10 rounded-[3rem] border-white/5 bg-white/[0.01]" hoverEffect>
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-sm font-medium text-text-secondary mb-10 leading-relaxed">
                                {feature.desc}
                            </p>
                            <Link to="/pricing">
                                <button className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 group/btn hover:text-primary transition-colors">
                                    {feature.link}
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </GlassCard>
                    ))}
                </div>

                <GlassCard className="p-8 md:p-12 rounded-[2.5rem] border-primary/20 bg-primary/5 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Ready to Start Learning?</h4>
                            <p className="text-text-secondary font-semibold">Join the most active trading community on the web.</p>
                        </div>
                        <Link to="/pricing">
                            <Button size="lg" className="px-12 py-6 text-sm font-black uppercase tracking-widest shadow-neon group">
                                <MessageSquare className="mr-2 w-5 h-5" />
                                Launch Discord Hub
                            </Button>
                        </Link>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default Community;
