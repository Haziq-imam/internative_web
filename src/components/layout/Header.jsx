import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, TrendingUp, ChevronDown, BarChart2, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            label: 'Trading Signals',
            href: '/signals/options-signals',
            megaMenu: true,
            promo: {
                title: "Options Trading Signals",
                subtitle: "Professional alerts for maximum leverage & returns.",
                image: "https://images.unsplash.com/photo-1611974765275-e4277a78c346?q=80&w=3270&auto=format&fit=crop",
                link: "/signals/options-signals"
            },
            columns: [
                {
                    title: 'Options Trading',
                    href: '/signals/options-signals',
                    icon: 'TrendingUp',
                    items: [
                        { label: 'Lotto Options Alerts', href: '/signals/options-signals?type=lotto', desc: 'High risk, high reward plays' },
                        { label: '0DTE Options Signals', href: '/signals/options-signals?type=0dte', desc: 'Daily expiration setups' },
                        { label: 'Weekly Options Signals', href: '/signals/options-signals?type=weekly', desc: 'Standard weekly expiry' },
                        { label: 'Options Scalping', href: '/signals/options-signals?type=scalping', desc: 'Quick in & out trades' },
                        { label: 'Unusual Activity', href: '/signals/options-signals?type=unusual', desc: 'Institutional anomalies' },
                    ]
                },
                {
                    title: 'Stock Trading',
                    href: '/signals/stocks',
                    icon: 'BarChart2',
                    items: [
                        { label: 'Day Trading Stocks', href: '/signals/stocks/day-trading', desc: 'Intraday volatility' },
                        { label: 'Momentum Signals', href: '/signals/stocks/momentum', desc: 'Ride the trend' },
                        { label: 'Swing Trading', href: '/signals/stocks/swing', desc: 'Multi-day holds' },
                        { label: 'Gap Up / Down', href: '/signals/stocks/gap', desc: 'Pre-market movers' },
                    ]
                },
                {
                    title: 'Resources',
                    href: '/education',
                    icon: 'BookOpen',
                    items: [
                        { label: 'Swing Signals', href: '/signals/swing', desc: 'Capture major moves' },
                        { label: 'Education Hub', href: '/education', desc: 'Master the markets' },
                        { label: 'Beginners Guide', href: '/beginners', desc: 'Start your journey' },
                        { label: 'Risk Management', href: '/education/risk-management', desc: 'Protect your capital' },
                    ]
                }
            ]
        },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
                    isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-neon group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp size={24} strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-bold font-display tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                                InterNative
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <div key={link.label} className="relative group">
                                    <Link
                                        to={link.href}
                                        className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors duration-300 flex items-center gap-1 group-hover:bg-white/5 rounded-lg border border-transparent group-hover:border-white/5"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {link.megaMenu && (
                                            <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                                        )}
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    {link.megaMenu && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                                            <div className="bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-0 shadow-2xl overflow-hidden grid grid-cols-12 ring-1 ring-white/5">

                                                {/* Promo Column (Left) */}
                                                <div className="col-span-4 relative overflow-hidden group/promo">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent z-10" />
                                                    <img
                                                        src={link.promo.image}
                                                        alt={link.promo.title}
                                                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/promo:scale-105 transition-transform duration-700"
                                                    />
                                                    <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                                        <h3 className="text-xl font-bold text-white mb-2">{link.promo.title}</h3>
                                                        <p className="text-sm text-white/80 mb-6">{link.promo.subtitle}</p>
                                                        <Link
                                                            to={link.promo.link}
                                                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-colors shadow-lg"
                                                        >
                                                            Explore Signals
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Links Columns (Right) */}
                                                <div className="col-span-8 p-8 grid grid-cols-3 gap-8 bg-background/50">
                                                    {link.columns.map((col, idx) => (
                                                        <div key={idx} className="relative z-10">
                                                            <Link to={col.href} className="block group/title">
                                                                <h4 className="text-xs font-black text-white/60 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2 hover:text-primary transition-colors flex items-center gap-2">
                                                                    {col.title}
                                                                    <ChevronDown className="-rotate-90 w-3 h-3 opacity-0 group-hover/title:opacity-100 transition-opacity text-primary" />
                                                                </h4>
                                                            </Link>
                                                            <div className="flex flex-col gap-1">
                                                                {col.items.map((item) => (
                                                                    <Link
                                                                        key={item.label}
                                                                        to={item.href}
                                                                        className="group/item flex flex-col p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors"
                                                                    >
                                                                        <div className="flex items-center gap-2">
                                                                            <div className="w-1 h-1 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors" />
                                                                            <span className="text-sm font-medium text-text-secondary group-hover/item:text-white transition-colors">
                                                                                {item.label}
                                                                            </span>
                                                                        </div>
                                                                        {item.desc && (
                                                                            <span className="text-[10px] text-text-muted pl-3 mt-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                                                {item.desc}
                                                                            </span>
                                                                        )}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-6">
                            <button className="text-sm font-semibold text-white hover:text-primary transition-colors duration-300">
                                Log in
                            </button>
                            <Button size="default" className="shadow-neon">Get Started</Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-text-secondary"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Header;
