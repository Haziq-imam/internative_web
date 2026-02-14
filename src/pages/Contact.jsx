import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | InterNative</title>
                <meta name="description" content="Get in touch with the InterNative team for support or inquiries." />
            </Helmet>

            <Section className="bg-background relative pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl opacity-50" />

                <div className="text-center max-w-4xl mx-auto mb-24 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Get In Touch
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 font-display">
                        Contact <br /><span className="text-gradient">The Desk.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed">
                        Precision support for serious traders. Whether you're institutional or retail, we're here to assist.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
                    {/* Contact Info Cards */}
                    <div className="space-y-8 lg:col-span-1">
                        <GlassCard className="p-10 flex flex-col gap-6 rounded-[2.5rem]" hoverEffect>
                            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-neon">
                                <Mail size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Institutional Desk</h3>
                                <p className="text-text-secondary text-lg font-medium leading-relaxed mb-6">For general inquiries, partnerships, and high-capital account requests.</p>
                                <a href="mailto:support@internative.com" className="text-xl font-black text-primary hover:text-white transition-colors">
                                    support@internative.com
                                </a>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-10 flex flex-col gap-6 rounded-[2.5rem]" hoverEffect>
                            <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/5 shadow-neon">
                                <MessageSquare size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Live VIP Chat</h3>
                                <p className="text-text-secondary text-lg font-medium leading-relaxed mb-6">Real-time support available Monday-Friday, <br />9am — 5pm EST.</p>
                                <button className="text-xl font-black text-white hover:text-primary transition-colors underline decoration-primary underline-offset-8">
                                    Initialize Session
                                </button>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Contact Form */}
                    <GlassCard className="lg:col-span-2 p-12 md:p-16 rounded-[4rem] bg-background-secondary/40 backdrop-blur-3xl border-white/10 shadow-neon">
                        <h2 className="text-4xl font-black mb-12 text-white tracking-tight">Direct Transmission.</h2>
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Full Identity</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full h-16 px-8 rounded-3xl bg-white/5 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-white/10 text-lg font-medium transition-all"
                                        placeholder="John Wick"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Terminal Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full h-16 px-8 rounded-3xl bg-white/5 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-white/10 text-lg font-medium transition-all"
                                        placeholder="john@tws.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Subject Protocol</label>
                                <select
                                    id="subject"
                                    className="w-full h-16 px-8 rounded-3xl bg-white/5 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg font-medium appearance-none cursor-pointer"
                                >
                                    <option className="bg-background-secondary p-4">General Liquidity Inquiry</option>
                                    <option className="bg-background-secondary p-4">Tier-1 Technical Support</option>
                                    <option className="bg-background-secondary p-4">Account & Billing Protocols</option>
                                    <option className="bg-background-secondary p-4">Strategic Partnership Access</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Message Content</label>
                                <textarea
                                    id="message"
                                    rows={8}
                                    className="w-full p-8 rounded-3xl bg-white/5 border border-white/5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none placeholder:text-white/10 text-lg font-medium transition-all"
                                    placeholder="Briefly describe your requirements..."
                                />
                            </div>

                            <Button size="lg" className="w-full py-8 text-2xl shadow-neon rounded-3xl">
                                Dispatch Message
                            </Button>
                        </form>
                    </GlassCard>
                </div>
            </Section>
        </>
    );
};

export default Contact;
