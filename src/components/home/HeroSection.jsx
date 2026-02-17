import React from 'react';
import { ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background Effects */}
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Main Spotlight */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />

                {/* Secondary Colorful Orbs */}
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow delay-1000" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] bg-[size:40px_40px]" />

                {/* Radial Overlay to fade edges */}
                <div className="absolute inset-0 bg-background/80 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0F0B1F_100%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/5 shadow-glass backdrop-blur-sm animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                            <span className="text-sm font-medium text-text-secondary">Live Signals Active</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-white animate-slide-up">
                            Professional <br />
                            <span className="text-transparent bg-clip-text bg-brand-gradient">Trading Signals</span> <br />
                            That Actually Work
                        </h1>

                        <p className="text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up bg-opacity-0" style={{ animationDelay: '0.1s' }}>
                            Get precise entry points, exit signals, and stop-loss alerts sent directly to your phone. Join 10,000+ traders making smarter decisions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <Link to="/pricing" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all duration-300 shadow-neon hover:shadow-neon-hover flex items-center justify-center gap-2 group">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link to="/#performance" className="w-full sm:w-auto px-8 py-4 bg-surface border border-white/10 hover:border-primary/50 text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2">
                                See Live Performance
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-text-muted animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-accent-green" />
                                <span>10,000+ Active Traders</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-accent-green" />
                                <span>78% Average Win Rate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-accent-green" />
                                <span>iOS & Android App</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="flex-1 relative w-full max-w-[300px] md:max-w-[340px] lg:max-w-[380px] animate-float mx-auto lg:mr-0 lg:h-[650px] flex items-center">
                        <div className="relative z-10 bg-surface border border-white/10 rounded-[2.5rem] p-3 shadow-2xl backdrop-blur-xl w-full">
                            {/* Glow behind phone */}
                            <div className="absolute inset-0 bg-brand-gradient opacity-20 blur-3xl -z-10 rounded-full" />

                            {/* Mockup Content - Simulating App Interface */}
                            <div className="bg-[#060410] rounded-[1.5rem] overflow-hidden border border-primary/20 relative aspect-[10/18] max-h-[600px] mx-auto shadow-2xl">
                                {/* Status Bar */}
                                <div className="h-10 bg-white/[0.02] flex items-center justify-between px-6 z-20 relative">
                                    <span className="text-[10px] font-bold text-text-muted">9:41</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-primary/20" />
                                        <div className="w-3 h-3 rounded-full bg-primary/40" />
                                    </div>
                                </div>

                                {/* Floating "New Signal" Notification - Top */}
                                <div className="absolute top-14 left-3 right-3 z-30 animate-slide-down">
                                    <div className="bg-[#0F0924]/90 backdrop-blur-xl border border-primary/30 p-3 rounded-xl shadow-neon">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/40">
                                                <Smartphone className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start">
                                                    <h5 className="text-white font-bold text-[10px] uppercase tracking-wider truncate">InterNative Utils</h5>
                                                    <span className="text-[8px] text-text-muted font-bold">Now</span>
                                                </div>
                                                <p className="text-[11px] text-text-main truncate font-bold mt-0.5">NVDA Call Signal Alert</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[9px] bg-accent-green/20 text-accent-green px-1.5 py-0.5 rounded font-bold border border-accent-green/30">Entry: $890</span>
                                                    <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-bold border border-primary/30">Target: $910</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* App Header */}
                                <div className="p-5 pb-2 pt-32">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-white font-display font-black text-lg">Active Signals</h3>
                                            <p className="text-accent-green text-[9px] flex items-center gap-1.5 font-black uppercase tracking-[0.2em]">
                                                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                                Market Open
                                            </p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Smartphone className="w-4 h-4 text-primary shadow-neon" />
                                        </div>
                                    </div>

                                    {/* Signal Card 1 */}
                                    <div className="bg-white/[0.03] border border-primary/20 rounded-2xl p-4 mb-3 shadow-lg group hover:border-primary/50 transition-all duration-300">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-[10px] border border-secondary/20 shadow-neon-pink">
                                                    NFLX
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white text-xs">Netflix Put</h4>
                                                    <span className="text-[9px] text-text-muted font-bold">5m ago</span>
                                                </div>
                                            </div>
                                            <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-[8px] font-black border border-primary/30 shadow-neon">
                                                ACTIVE
                                            </span>
                                        </div>
                                        <div className="space-y-2 mb-3">
                                            <div className="flex justify-between text-[10px]">
                                                <span className="text-text-muted font-bold">Entry</span>
                                                <span className="text-white font-black tracking-wider">$480.50</span>
                                            </div>
                                            <div className="flex justify-between text-[10px]">
                                                <span className="text-text-muted font-bold">Target</span>
                                                <span className="text-accent-green font-black tracking-wider">$475.00</span>
                                            </div>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-[60%] h-full bg-brand-gradient-vibrant shadow-neon" />
                                        </div>
                                    </div>

                                    {/* Signal Card 2 */}
                                    <div className="bg-surface border border-white/5 rounded-xl p-3 shadow-lg opacity-60">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded bg-[#F7931A]/10 flex items-center justify-center text-[#F7931A] font-bold text-[10px] border border-[#F7931A]/20">
                                                    BTC
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white text-sm">Bitcoin Long</h4>
                                                    <span className="text-[10px] text-text-muted">Crypto • 25m ago</span>
                                                </div>
                                            </div>
                                            <span className="bg-accent-green/10 text-accent-green px-1.5 py-0.5 rounded text-[10px] font-bold border border-accent-green/20">
                                                +12.5%
                                            </span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-text-secondary">Entry</span>
                                                <span className="text-white font-mono">$64,250</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Background decorative elements for the phone */}
                        <div className="absolute top-10 -right-10 w-24 h-24 bg-accent-cyan/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
                        <div className="absolute bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
