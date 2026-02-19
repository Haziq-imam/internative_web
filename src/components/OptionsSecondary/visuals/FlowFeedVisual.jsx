import React from 'react';
import { Waves } from 'lucide-react';
import GlassCard from '../../ui/GlassCard';

const FlowFeedVisual = () => {
    return (
        <>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
            <GlassCard className="p-6 rounded-[2.5rem] border-primary/30 shadow-neon overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-wider mb-1 font-mono">WHALE_FEED_v2</h3>
                        <p className="text-xs text-primary">Live Institutional Tracking</p>
                    </div>
                    <Waves className="text-primary w-5 h-5 animate-pulse" />
                </div>

                <div className="space-y-4">
                    {[
                        { ticker: 'NVDA', price: '$120.00', type: 'CALL', premium: '$1.2M', sentiment: 'Bullish' },
                        { ticker: 'AAPL', price: '$185.00', type: 'PUT', premium: '$850k', sentiment: 'Bearish' },
                        { ticker: 'TSLA', price: '$210.00', type: 'CALL', premium: '$2.4M', sentiment: 'Bullish' }
                    ].map((trade, i) => (
                        <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${trade.sentiment === 'Bullish' ? 'bg-success' : 'bg-red-500'}`} />
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-3">
                                    <div className="text-lg font-black text-white">{trade.ticker}</div>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${trade.sentiment === 'Bullish' ? 'bg-success/20 text-success' : 'bg-red-500/20 text-red-500'
                                        }`}>
                                        {trade.type}
                                    </span>
                                </div>
                                <div className="text-sm font-black text-white">{trade.premium}</div>
                            </div>
                            <div className="flex justify-between text-[10px] font-bold text-text-muted">
                                <span>Strike: {trade.price}</span>
                                <span className="uppercase tracking-widest italic">{trade.sentiment} Flow</span>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </>
    );
};

export default FlowFeedVisual;
