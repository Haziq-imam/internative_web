import React from 'react';
import { Activity } from 'lucide-react';
import GlassCard from '../../ui/GlassCard';

const RadarVisual = () => {
    return (
        <>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
            <div className="relative aspect-square">
                {/* Radar Grid */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
                <div className="absolute inset-[20%] border border-primary/10 rounded-full" />
                <div className="absolute inset-[40%] border border-primary/10 rounded-full" />
                <div className="absolute inset-[60%] border border-primary/10 rounded-full" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-primary/20" />

                {/* Radar Line */}
                <div className="absolute inset-0 bg-[conic-gradient(transparent,rgba(110,68,255,0.3))] rounded-full animate-spin-slow" />

                {/* Detected Points */}
                <div className="absolute top-[20%] right-[30%] animate-pulse">
                    <div className="w-3 h-3 bg-primary rounded-full shadow-neon" />
                    <div className="absolute top-full left-full mt-1 ml-1 text-[10px] font-black text-white whitespace-nowrap">EXTREME_VOL</div>
                </div>
                <div className="absolute bottom-[35%] left-[25%] animate-pulse delay-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full shadow-neon" />
                    <div className="absolute top-full left-full mt-1 ml-1 text-[10px] font-black text-white whitespace-nowrap">WHALE_ENTRY</div>
                </div>

                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-background border border-primary/50 rounded-full flex items-center justify-center shadow-neon">
                        <Activity className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RadarVisual;
