import React from 'react';
import { Target } from 'lucide-react';
import GlassCard from '../../ui/GlassCard';

const ProbabilityMatrixVisual = () => {
    return (
        <>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
            <GlassCard className="p-8 rounded-[2.5rem] border-primary/30 shadow-neon overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1 font-mono">PROB_MATRIX_v4</h3>
                        <p className="text-xs text-primary">Greeks-Based Forecasting</p>
                    </div>
                    <Target className="text-primary w-5 h-5 animate-pulse" />
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                    {[
                        72, 65, 42, 12,
                        88, 74, 35, 8,
                        94, 82, 48, 15,
                        98, 91, 52, 22
                    ].map((val, i) => (
                        <div
                            key={i}
                            className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-black ${val > 80 ? 'bg-primary/40 text-white' :
                                    val > 60 ? 'bg-primary/20 text-text-secondary' :
                                        'bg-white/5 text-text-muted'
                                }`}
                        >
                            {val}%
                        </div>
                    ))}
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-[10px] font-bold text-text-muted uppercase">Delta Projection</span>
                        <span className="text-sm font-black text-success">+0.64</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-[10px] font-bold text-text-muted uppercase">Theta Decay</span>
                        <span className="text-sm font-black text-red-400">-12.42</span>
                    </div>
                </div>
            </GlassCard>
        </>
    );
};

export default ProbabilityMatrixVisual;
