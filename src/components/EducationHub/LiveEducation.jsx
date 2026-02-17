import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import Button from '../ui/Button';
import { Video, Monitor, Play, Calendar, Users, ArrowRight, Shield } from 'lucide-react';

const LiveEducation = () => {
    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                        Learn Directly From Our <br />
                        <GradientText>Professional Traders</GradientText>
                    </h2>
                    <p className="text-lg text-text-secondary font-medium">
                        Static guides are just the beginning. Get real-time insights and watch live execution with our interactive education formats.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Monthly Live Webinars */}
                    <GlassCard className="p-10 md:p-12 rounded-[3rem] border-white/5 bg-white/[0.01] flex flex-col h-full" hoverEffect>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                <Video size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-white">Monthly Live Webinars</h3>
                        </div>
                        <p className="text-sm font-bold text-text-muted mb-8 uppercase tracking-widest">Included - All Members</p>

                        <div className="space-y-6 mb-12 flex-grow">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                                <div className="flex justify-between items-center text-xs font-black text-white uppercase tracking-widest">
                                    <span className="text-text-muted">Schedule:</span>
                                    <span>Last Wed of Month, 8PM ET</span>
                                </div>
                                <div className="flex justify-between items-center text-xs font-black text-white uppercase tracking-widest">
                                    <span className="text-text-muted">Duration:</span>
                                    <span>90 Minutes</span>
                                </div>
                                <div className="flex justify-between items-center text-xs font-black text-white uppercase tracking-widest">
                                    <span className="text-text-muted">Format:</span>
                                    <span>Presentation + Live Q&A</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">Recent & Upcoming Topics:</h4>
                                {[
                                    { title: "High-Probability Swing Setups", date: "Dec 2025" },
                                    { title: "0DTE Options: Strategy & Risk", date: "Nov 2025" },
                                    { title: "Trading Psychology Bootcamp", date: "Oct 2025" }
                                ].map((topic, i) => (
                                    <div key={i} className="flex items-center justify-between text-sm font-semibold text-white group cursor-default">
                                        <div className="flex items-center gap-3">
                                            <Play size={10} className="text-primary" />
                                            {topic.title}
                                        </div>
                                        <span className="text-text-muted text-xs">{topic.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link to="/pricing">
                            <Button variant="outline" className="w-full group py-4 text-xs font-black uppercase tracking-widest">
                                View Webinar Schedule
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </GlassCard>

                    {/* Weekly Live Trading Room */}
                    <GlassCard className="p-10 md:p-12 rounded-[3rem] border-primary/20 bg-primary/5 flex flex-col h-full relative overflow-hidden" hoverEffect>
                        <div className="absolute top-0 right-0 p-4">
                            <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-neon">Ultimate Only</div>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                <Monitor size={28} />
                            </div>
                            <h3 className="text-2xl font-black text-white">Weekly Live Trading Room</h3>
                        </div>
                        <p className="text-sm font-bold text-primary mb-8 uppercase tracking-widest flex items-center gap-2">
                            <Shield size={14} />
                            Exclusive Access
                        </p>

                        <div className="space-y-6 mb-12 flex-grow">
                            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                                <div className="flex justify-between items-center text-xs font-black text-white uppercase tracking-widest">
                                    <span className="text-text-muted">Schedule:</span>
                                    <span>Tue & Thu, 10AM-12PM ET</span>
                                </div>
                                <div className="flex justify-between items-center text-xs font-black text-white uppercase tracking-widest">
                                    <span className="text-text-muted">Environment:</span>
                                    <span>Real-time Markets</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">What Happens:</h4>
                                {[
                                    "Analysts scan markets live on stream",
                                    "Execution of signals with live commentary",
                                    "Real-time management of open positions",
                                    "Instant Q&A during market hours"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm font-semibold text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 shadow-neon" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link to="/pricing">
                            <Button className="w-full group py-4 text-xs font-black uppercase tracking-widest shadow-neon">
                                Upgrade to Ultimate
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default LiveEducation;
