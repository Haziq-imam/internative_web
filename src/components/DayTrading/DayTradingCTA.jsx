import React from 'react';
import { Target, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

import { Link } from 'react-router-dom';

const DayTradingCTA = () => {
    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Trade The <GradientText>Open</GradientText> Like Pro
                    </h2>
                    <p className="text-xl text-text-secondary mb-8">
                        Get live access to our pre-market game plans, real-time momentum scanners, and daily watchlist. Don't trade alone.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <Link to="/pricing">
                            <Button size="lg" className="shadow-neon bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
                                Join Day Trading Room
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10">
                                View Sample Alerts
                            </Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <GlassCard className="p-6">
                            <Target className="w-8 h-8 text-orange-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Pre-Market Prep</h3>
                            <p className="text-sm text-text-secondary">Know exactly which stocks are in play before the bell rings.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Live Mentorship</h3>
                            <p className="text-sm text-text-secondary">Watch experienced traders execute setups in real-time with commentary.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Scanner Access</h3>
                            <p className="text-sm text-text-secondary">Use our proprietary filters to find momentum stocks instantly.</p>
                        </GlassCard>
                    </div>
                </div>

                {/* Risk Disclosure */}
                <div className="max-w-4xl mx-auto mt-16 p-6 border border-red-500/10 bg-red-900/5 rounded-xl">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                        <div>
                            <h4 className="text-sm font-black text-red-400 uppercase tracking-wider mb-2">Detailed Risk Disclosure</h4>
                            <p className="text-xs text-red-200/60 leading-relaxed mb-2">
                                Day trading stocks involves substantial risk of loss and is unsuitable for most investors. Statistics consistently show that 70% to 90% of retail day traders lose money, with the majority depleting their accounts within the first year. The rapid pace, use of leverage (margin), and high frequency of trading create opportunities for significant gains but also for catastrophic losses.
                            </p>
                            <p className="text-xs text-red-200/60 leading-relaxed">
                                Never trade with money you cannot afford to lose (e.g., rent, mortgage, education funds). Day trading requires significant time commitment, advanced skills, emotional discipline, and is not a path to quick wealth. This content is for educational purposes only and does not constitute financial advice. Past performance is not indicative of future results. Consult with a qualified financial professional before engaging in day trading activities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default DayTradingCTA;
