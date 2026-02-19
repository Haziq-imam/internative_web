import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import GlassCard from '../../ui/GlassCard';

const RiskOptimizerVisual = () => {
    return (
        <>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
            <GlassCard className="p-8 rounded-[2.5rem] border-primary/30 shadow-neon overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1 font-mono">RISK_OPTIMIZER_v1</h3>
                        <p className="text-xs text-primary">Position Sizing Calculator</p>
                    </div>
                    <ShieldCheck className="text-primary w-6 h-6" />
                </div>

                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <div className="text-[10px] font-black text-text-muted uppercase mb-4 tracking-widest">Account Allocation</div>
                        <div className="flex items-end justify-between mb-2">
                            <div className="text-2xl font-black text-white">$25,000</div>
                            <div className="text-xs text-text-muted font-bold">Total Capital</div>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[20%]" />
                        </div>
                        <div className="mt-2 flex justify-between text-[10px] font-bold">
                            <span className="text-primary">Max Risk: $500 (2%)</span>
                            <span className="text-text-muted italic">Recommended</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <div className="text-[10px] font-black text-text-muted uppercase mb-2">Stop Loss</div>
                            <div className="text-lg font-black text-red-400">-$150.00</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <div className="text-[10px] font-black text-text-muted uppercase mb-2">Profit Target</div>
                            <div className="text-lg font-black text-success">+$450.00</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-2xl">
                        <Zap className="w-5 h-5 text-primary" />
                        <div className="text-xs font-bold text-white">R:R Ratio: 3.0 (Excellent)</div>
                    </div>
                </div>
            </GlassCard>
        </>
    );
};

export default RiskOptimizerVisual;
