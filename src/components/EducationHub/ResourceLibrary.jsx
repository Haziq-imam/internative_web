import React from 'react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import Button from '../ui/Button';
import { FileText, Book, Video, BarChart3, Download, ArrowRight, ExternalLink } from 'lucide-react';

const ResourceLibrary = () => {
    const categories = [
        {
            title: "Templates & Worksheets",
            icon: FileText,
            items: [
                "Trading plan template (Word/PDF)",
                "Trade journal spreadsheet (Excel)",
                "Position sizing calculator (Excel)",
                "Pre-trade checklist (PDF)"
            ]
        },
        {
            title: "Ebooks & Guides",
            icon: Book,
            items: [
                "Complete Guide to Signals (68p)",
                "Options for Beginners (42p)",
                "Swing Trading Strategies (55p)",
                "Risk Management Essentials (38p)"
            ]
        },
        {
            title: "Special Video Series",
            icon: Video,
            items: [
                "Chart Reading Mastery (12 videos)",
                "Options Greeks Explained (8 videos)",
                "Day Trading Bootcamp (15 videos)",
                "Institutional Flow (6 videos)"
            ]
        },
        {
            title: "Cheat Sheets",
            icon: BarChart3,
            items: [
                "Candlestick Quick Reference",
                "Options Strategy Grid",
                "Chart Pattern Visual Guide",
                "Risk-Reward Ratio Calculator"
            ]
        }
    ];

    return (
        <Section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Download Our <br />
                            <GradientText>Resource Library</GradientText>
                        </h2>
                        <p className="text-lg text-text-secondary font-medium max-w-2xl leading-relaxed">
                            Enhance your trading workflow with our institutional-grade templates, ebooks, and calculators. Everything you need to manage your portfolio like a pro.
                        </p>
                    </div>
                    <div>
                        <Button size="lg" className="px-10 py-6 text-sm font-black uppercase tracking-widest shadow-neon group">
                            Access Full Library
                            <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, i) => (
                        <GlassCard key={i} className="p-8 rounded-[2.5rem] border-white/5 bg-white/[0.01]" hoverEffect>
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 border border-white/10">
                                <cat.icon size={24} />
                            </div>
                            <h4 className="text-lg font-black text-white mb-6 uppercase tracking-tight">{cat.title}</h4>
                            <div className="space-y-4 mb-8">
                                {cat.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between group/link cursor-pointer">
                                        <span className="text-xs font-semibold text-text-muted group-hover/link:text-white transition-colors">{item}</span>
                                        <ExternalLink size={12} className="text-primary opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ResourceLibrary;
