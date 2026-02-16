import React from 'react';
import { TrendingUp, CheckCircle, ArrowRight, Target } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <div className="relative pt-48 pb-20 overflow-hidden bg-background">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-neon">
                            Live Trading Room
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                            Options Trading Signals That Turn <span className="text-gradient">Small Accounts</span> Into Big Wins
                        </h1>
                        <p className="text-xl text-text-secondary mb-8 font-medium leading-relaxed max-w-xl">
                            Get instant alerts for high-probability call and put options on S&P 500, Nasdaq, Dow Jones, and Russell 2000. 10x-50x return potential delivered straight to your phone.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-md">
                            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-text-secondary">
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> 82% Win Rate (Last 90 Days)</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> +247% Best Single Trade</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> 4-6 Daily Alerts Sent</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary w-4 h-4" /> 30-Sec Delivery Priority</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="px-8 py-4 text-lg shadow-neon group">
                                Get Options Signals Now
                                <span className="text-xs font-normal ml-2 opacity-80">(Try Free 7 Days)</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                                View Performance Report
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Mockup Visual */}
                    <div className="relative">
                        <div className="relative z-10 bg-black border border-white/10 rounded-[3rem] p-4 shadow-2xl max-w-sm mx-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
                            <div className="bg-background-secondary rounded-[2.5rem] overflow-hidden relative">
                                {/* Mock Notification Header */}
                                <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white"><TrendingUp size={16} /></div>
                                        <div>
                                            <div className="text-xs text-text-muted">InterNative Alerts</div>
                                            <div className="text-sm font-bold text-white">New Trade Signal</div>
                                        </div>
                                    </div>
                                    <div className="text-xs text-text-muted">Now</div>
                                </div>
                                {/* Signals List */}
                                <div className="p-6 space-y-4">
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="font-bold text-white flex items-center gap-2">NVDA Call <span className="text-[10px] bg-green-500 text-black px-1.5 py-0.5 rounded font-black">Lotto</span></div>
                                            <div className="text-green-400 font-bold">+185%</div>
                                        </div>
                                        <div className="text-sm text-text-secondary mb-2">Strike: $480 | Exp: 24 Jan</div>
                                        <div className="w-full bg-white/10 rounded-full h-1.5 mb-1">
                                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                        <div className="text-[10px] text-text-muted text-right flex items-center justify-end gap-1">Target 2 Hit <Target className="w-3 h-3 text-primary" /></div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 opacity-60">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="font-bold text-white">SPY Put</div>
                                            <div className="text-white font-bold">Entry</div>
                                        </div>
                                        <div className="text-sm text-text-secondary">Strike: $472 | Exp: 0DTE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
