import React from 'react';
import GlassCard from '../../ui/GlassCard';

const SwingLogicVisual = () => {
    return (
        <>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
            <GlassCard className="p-8 rounded-[2.5rem] border-primary/30 shadow-neon overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                    <div className="h-2 w-24 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 animate-pulse" />
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-success" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-black border border-primary/30">1</div>
                        <div>
                            <div className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Entry Signal</div>
                            <div className="text-sm font-bold text-white">Bullish VWAP Reclaim</div>
                        </div>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent ml-6" />
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-black border border-purple-500/30">2</div>
                        <div>
                            <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-1">Confirmation</div>
                            <div className="text-sm font-bold text-white">Positive Delta Divergence</div>
                        </div>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent ml-6" />
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-black border border-blue-500/30">3</div>
                        <div>
                            <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-1">Execution</div>
                            <div className="text-sm font-bold text-white">Out-of-the-Money Spread</div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </>
    );
};

export default SwingLogicVisual;
