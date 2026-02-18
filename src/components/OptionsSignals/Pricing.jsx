import { CheckCircle, Zap, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const Pricing = () => {
    return (
        <Section className="py-24 bg-background-secondary/30 relative border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Professional Options Alerts for <br /><span className="text-gradient">Less Than One Winning Trade</span></h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Deluxe Plan */}
                    <GlassCard className="p-8 md:p-12 rounded-[2.5rem] bg-background border-white/5 relative" hoverEffect>
                        <h3 className="text-2xl font-black text-white mb-2">DELUXE</h3>
                        <div className="flex items-end gap-2 mb-6">
                            <span className="text-5xl font-black text-white">$59.99</span>
                            <span className="text-text-muted mb-2 font-bold lowercase">/month</span>
                        </div>
                        <p className="text-text-secondary text-sm mb-8">Best For: Individual traders seeking consistent options flow.</p>
                        <Link to="/pricing" className="w-full">
                            <Button variant="outline" className="w-full mb-8 h-14 text-lg font-bold" size="lg">Start Free 7-Day Trial</Button>
                        </Link>
                        <div className="space-y-4">
                            {[
                                "All options signals (Lottos, Swings, Index)",
                                "4-6 signals per day",
                                "Real-time push notifications",
                                "Complete entry/exit details",
                                "Stop-loss and profit targets",
                                "Trade analysis and reasoning",
                                "Performance tracking dashboard",
                                "Standard delivery (1-2 second alerts)",
                                "Mobile app access (iOS/Android)",
                                "Email support",
                                "Cancel anytime"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-sm text-text-secondary">
                                    <CheckCircle size={18} className="text-primary shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Ultimate Plan */}
                    <GlassCard className="p-8 md:p-12 rounded-[2.5rem] bg-primary/5 border-primary/30 shadow-neon relative overflow-hidden" hoverEffect>
                        <div className="absolute top-0 right-0 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">Most Popular</div>
                        <h3 className="text-2xl font-black text-white mb-2">ULTIMATE</h3>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-5xl font-black text-white">$599.99</span>
                            <span className="text-text-muted mb-2 font-bold lowercase">/year</span>
                        </div>
                        <div className="text-primary font-black text-xs uppercase tracking-widest mb-6">Savings: $120/year vs monthly</div>
                        <p className="text-text-secondary text-sm mb-8">Best For: Serious options traders maximizing edge.</p>
                        <Link to="/pricing" className="w-full">
                            <Button className="w-full mb-8 h-14 text-lg font-bold shadow-neon" size="lg">Start Free 7-Day Trial</Button>
                        </Link>
                        <div className="space-y-4">
                            <div className="text-[10px] font-black text-primary uppercase tracking-widest">Everything in Deluxe, PLUS:</div>
                            {[
                                "Priority delivery (30s early access)",
                                "Exclusive swing options (not in Deluxe)",
                                "Monthly live webinar with analysts",
                                "Options education library",
                                "Greeks masterclass (recorded course)",
                                "VIP Discord channel (Direct Q&A)",
                                "Advanced Greeks analysis in signals",
                                "Risk calculator tool access",
                                "Priority support (live chat)",
                                "Early access to new signal types"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 text-sm text-white">
                                    <Zap size={18} className="text-primary shrink-0" fill="currentColor" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                    <GlassCard className="p-8 rounded-3xl bg-background border-white/5">
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Value Comparison</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm p-4 bg-white/5 rounded-2xl">
                                <span className="text-text-secondary">One 100% winner pays for</span>
                                <span className="text-primary font-black">1.7 months of Deluxe</span>
                            </div>
                            <div className="flex justify-between items-center text-sm p-4 bg-white/5 rounded-2xl">
                                <span className="text-text-secondary">One 200% winner pays for</span>
                                <span className="text-primary font-black">4 months of Deluxe</span>
                            </div>
                            <div className="flex justify-between items-center text-sm p-4 bg-primary/10 border border-primary/20 rounded-2xl">
                                <span className="text-white font-bold">One 347% winner (like NVDA) pays for</span>
                                <span className="text-primary font-black">7 months of Deluxe</span>
                            </div>
                        </div>
                    </GlassCard>
                    <div className="text-center md:text-left p-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                            <Lock size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-white mb-4">30-Day Money-Back Guarantee</h4>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            Not satisfied with the quality of our signals? Send us a message within 30 days for a full refund. No questions asked.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;
