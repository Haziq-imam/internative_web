import React from 'react';
import { Target, Activity } from 'lucide-react';
import GlassCard from '../../ui/GlassCard';

const WhaleWatchVisual = () => {
    return (
        <>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
            <GlassCard className="p-6 rounded-[2.5rem] border-primary/30 shadow-neon overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1 font-mono">WHALE_WATCHER_v9</h3>
                        <p className="text-xs text-primary">Large Institution Flow Hub</p>
                    </div>
                    <Target className="text-primary w-5 h-5 animate-pulse" />
                </div>

                <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-xs text-primary font-black uppercase mb-3">
                            <Activity className="w-3 h-3" />
                            Active Accumulation
                        </div>
                        <div className="space-y-3">
                            {[
                                { fund: 'Goldman Sachs', size: '$12.4M', type: 'BLOCK' },
                                { fund: 'Citadel Sec.', size: '$8.1M', type: 'SWEEP' },
                                { fund: 'J.P. Morgan', size: '$5.5M', type: 'BLOCK' },
                            ].map((whale, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] font-bold">
                                    <span className="text-white">{whale.fund}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-success">{whale.size}</span>
                                        <span className="text-text-muted font-mono">{whale.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-between">
                        <div>
                            <div className="text-[10px] text-text-muted uppercase font-black mb-1">Sentiment Index</div>
                            <div className="text-sm font-black text-white">Institutional Bullishness</div>
                        </div>
                        <div className="text-2xl font-black text-primary">84%</div>
                    </div>
                </div>
            </GlassCard>
        </>
    );
};

export default WhaleWatchVisual;
