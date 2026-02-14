import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Stats from '../ui/Stats';
import GlassCard from '../ui/GlassCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', gain: 12 },
    { month: 'Feb', gain: 18 },
    { month: 'Mar', gain: 15 },
    { month: 'Apr', gain: 25 },
    { month: 'May', gain: 32 },
    { month: 'Jun', gain: 45 },
    { month: 'Jul', gain: 58 },
    { month: 'Aug', gain: 65 },
    { month: 'Sep', gain: 62 },
    { month: 'Oct', gain: 75 },
    { month: 'Nov', gain: 88 },
    { month: 'Dec', gain: 102 },
];

const Performance = () => {
    return (
        <Section id="performance" className="bg-background relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Live Tracking
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
                        Transparency is <br />
                        <span className="text-gradient">Our Currency.</span>
                    </h2>
                    <p className="text-xl text-text-secondary mb-12 font-medium leading-relaxed">
                        We track every trade, win or lose. Our dashboard provides real-time performance metrics verified by third-party ledgers.
                    </p>

                    <div className="grid grid-cols-2 gap-10 mb-12">
                        <Stats value="87" suffix="%" label="Win Rate" />
                        <Stats value="450" suffix="%" label="Avg. Return" />
                        <Stats value="1200" prefix="+" suffix="%" label="YTD Performance" />
                        <Stats value="24" suffix="/7" label="VIP Support" />
                    </div>
                </div>

                <GlassCard className="p-8 md:p-12 h-[480px] rounded-[3rem] bg-background-secondary/40 backdrop-blur-2xl border-white/5">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-bold text-white tracking-tight">Signal Performance (YTD)</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Live Verified</span>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="80%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                            <XAxis
                                dataKey="month"
                                stroke="#ffffff20"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tick={{ fill: '#ffffff40', fontWeight: 'bold' }}
                            />
                            <YAxis
                                stroke="#ffffff20"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                unit="%"
                                tick={{ fill: '#ffffff40', fontWeight: 'bold' }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#0F0A19',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                }}
                                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                                cursor={{ stroke: '#8B5CF6', strokeWidth: 2 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="gain"
                                stroke="#8B5CF6"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorGain)"
                                animationDuration={2000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </GlassCard>
            </div>
        </Section>
    );
};

export default Performance;
