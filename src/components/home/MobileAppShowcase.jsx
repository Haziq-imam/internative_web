import React from 'react';
import { Smartphone, Bell, Lock, BarChart } from 'lucide-react';

const MobileAppShowcase = () => {
    return (
        <section className="py-24 bg-background-secondary border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="flex-1 space-y-8 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                            Power. Precision. Performance. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-gold">All in Your Hand.</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-xl">
                            The InterNative Traders mobile app puts professional trading signals at your fingertips. Designed for speed, clarity, and ease of use.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Bell, title: "Instant Push Notifications", desc: "Never miss a setup. Alerts arrive in real-time." },
                                { icon: BarChart, title: "User-Friendly Dashboard", desc: "See active signals and performance at a glance." },
                                { icon: Lock, title: "Bank-Level Security", desc: "Your data is protected by 256-bit encryption." }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                                        <item.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-text-secondary text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-6 py-3 bg-white text-background rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                                {/* Apple Icon */}
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.6c0-2.5 2-3.7 2.1-3.8-.1-.3-2-6.9-6.3-7-2.2-.1-4 1.2-5.1 1.2-1.1 0-2.8-1.2-4.6-1.1-2.4 0-4.6 1.4-5.9 3.6-2.5 4.3-.6 10.7 1.8 14.2 1.2 1.7 2.6 3.6 4.5 3.5 1.8-.1 2.5-1.1 4.7-1.1 2.2 0 2.8 1.1 4.7 1.1 1.9 0 3.3-1.7 4.5-3.5 1.4-2 2-2.9 2-3-.1-.1-2.2-1.3-2.4-4.1zM12.9 3.5c1-1.2 1.6-2.8 1.5-4.3-1.4.1-3 1-4 2.1-1 1.2-1.7 2.7-1.5 4.2 1.5.1 3-1 4-2z" /></svg>
                                Download for iOS
                            </button>
                            <button className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-lg font-bold hover:bg-white/5 transition-colors flex items-center gap-2">
                                {/* Android/Play Store Icon */}
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,13.08L18.15,11.93L15.39,13.7L17.54,15.85L20.3,14.37C21.15,13.88 21.15,13.56 20.3,13.08M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L6.05,2.66L3.84,2.15L13.69,12L14.54,11.15Z" /></svg>
                                Download for Android
                            </button>
                        </div>
                    </div>

                    {/* Right Visual - Phone Mockup (using simple CSS shapes) */}
                    <div className="flex-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-background-tertiary relative">
                                {/* Simulated Screen Content */}
                                <div className="p-4 pt-12">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-white font-bold text-lg">Dashboard</span>
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">JP</div>
                                    </div>

                                    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-4 mb-6 shadow-neon/30">
                                        <div className="text-white/80 text-xs mb-1">Total Profit</div>
                                        <div className="text-white text-2xl font-bold">+$12,450.00</div>
                                        <div className="text-white/90 text-xs mt-1 bg-white/20 inline-block px-2 py-0.5 rounded">+15.4% this month</div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="text-text-secondary text-xs uppercase font-bold tracking-wider mb-2">Recent Signals</div>
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="bg-surface p-3 rounded-xl border border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${i === 1 ? 'bg-orange-500/20 text-orange-500' : i === 2 ? 'bg-blue-500/20 text-blue-500' : 'bg-purple-500/20 text-purple-500'}`}>
                                                        {i === 1 ? 'BTC' : i === 2 ? 'TSLA' : 'NVDA'}
                                                    </div>
                                                    <div>
                                                        <div className="text-white text-sm font-bold">{i === 1 ? 'Bitcoin Long' : i === 2 ? 'Tesla Call' : 'Nvidia Put'}</div>
                                                        <div className="text-text-muted text-[10px]">{i * 12}m ago</div>
                                                    </div>
                                                </div>
                                                <div className="text-accent-green text-xs font-bold bg-accent-green/10 px-2 py-1 rounded">+25%</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MobileAppShowcase;
