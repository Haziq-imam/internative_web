import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, TrendingUp, ChevronDown, BarChart2, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import Logo from '../../assets/internative logo.svg';

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
            href: '/signals/options',
            megaMenu: true,
            promo: {
                title: "Options Trading Signals",
                subtitle: "Professional alerts for maximum leverage & returns.",
                image: "https://images.unsplash.com/photo-1611974765275-e4277a78c346?q=80&w=3270&auto=format&fit=crop",
                link: "/signals/options"
            },
            columns: [
                {
                    title: 'Stock Trading Signals',
                    href: '/signals/stocks',
                    icon: 'BarChart2',
                    items: [
                        { label: 'Day Trading Stocks', href: '/signals/stocks/day-trading', desc: 'Intraday volatility' },
                        { label: 'Momentum Stock Signals', href: '/signals/stocks/momentum', desc: 'Ride the trend' },
                        { label: 'Swing Trading Stocks', href: '/signals/stocks/swing', desc: 'Multi-day holds' },
                        { label: 'Earnings Trading Strategy', href: '/signals/stocks/earnings', desc: 'Earnings plays' },
                        { label: 'Gap Up / Gap Down Stocks', href: '/signals/stocks/gap', desc: 'Pre-market movers' },
                    ]
                },
                {
                    title: 'Swing Trading Signals',
                    href: '/signals/swing',
                    icon: 'TrendingUp',
                    items: [
                        { label: 'View Swing Signals', href: '/signals/swing', desc: 'Capture major moves' },
                    ]
                },
                {
                    title: 'Trading Education',
                    href: '/education',
                    icon: 'BookOpen',
                    items: [
                        { label: 'What Are Trading Signals', href: '/education/what-are-trading-signals', desc: 'Learn the basics' },
                        { label: 'How Options Trading Works', href: '/education/how-options-trading-works', desc: 'Options fundamentals' },
                        { label: 'What Is Lotto Options', href: '/education/what-is-lotto-options', desc: 'High-risk plays' },
                        { label: '0DTE Options Explained', href: '/education/0dte-options-explained', desc: 'Same-day expiry' },
                        { label: 'How To Use Trading Signals', href: '/education/how-to-use-trading-signals', desc: 'Maximize results' },
                    ]
                },
                {
                    title: 'Compare Trading Signals',
                    href: '/compare',
                    icon: 'BarChart2',
                    items: [
                        { label: 'Best Options Trading Signals', href: '/compare/best-options-trading-signals', desc: 'Top providers' },
                        { label: 'Best Trading Signals Platform', href: '/compare/best-trading-signals-platform', desc: 'Platform comparison' },
                        { label: 'Signals vs Copy Trading', href: '/compare/options-trading-signals-vs-copy-trading', desc: 'Which is better?' },
                        { label: 'Free vs Paid Signals', href: '/compare/free-vs-paid-trading-signals', desc: 'Value analysis' },
                    ]
                },
                {
                    title: 'Trading Tools & Access',
                    href: '/tools',
                    icon: 'BookOpen',
                    items: [
                        { label: 'Signals For Beginners', href: '/tools/beginners', desc: 'Start your journey' },
                        { label: 'Advanced Options Trading', href: '/tools/advanced-options', desc: 'Expert strategies' },
                        { label: 'Trading Signals Risk Guide', href: '/tools/risk-guide', desc: 'Protect capital' },
                        { label: 'Trading Signals App', href: '/tools/app', desc: 'Mobile access' },
                        { label: 'Real-Time Trading Alerts', href: '/tools/real-time-alerts', desc: 'Instant notifications' },
                    ]
                }
            ]
        },
        { label: 'About', href: '/about' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
        { label: 'Risk Disclosure', href: '/risk-disclosure' },
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
                        <Link to="/" className="flex items-center group">
                            <img
                                src={Logo}
                                alt="InterNative Traders"
                                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
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
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1200px] pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                                            <div className="bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-0 shadow-2xl overflow-hidden grid grid-cols-12 ring-1 ring-white/5">

                                                {/* Promo Column (Left) */}
                                                <div className="col-span-3 relative overflow-hidden group/promo">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent z-10" />
                                                    <img
                                                        src={link.promo.image}
                                                        alt={link.promo.title}
                                                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/promo:scale-105 transition-transform duration-700"
                                                    />
                                                    <div className="relative z-20 h-full flex flex-col justify-end p-6">
                                                        <h3 className="text-lg font-bold text-white mb-2">{link.promo.title}</h3>
                                                        <p className="text-xs text-white/80 mb-4">{link.promo.subtitle}</p>
                                                        <Link
                                                            to={link.promo.link}
                                                            className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-lg"
                                                        >
                                                            Explore Signals
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Links Columns (Right) - 5 columns */}
                                                <div className="col-span-9 p-6 grid grid-cols-5 gap-4 bg-background/50">
                                                    {link.columns.map((col, idx) => (
                                                        <div key={idx} className="relative z-10">
                                                            <Link to={col.href} className="block group/title">
                                                                <h4 className="text-[10px] font-black text-white/60 uppercase tracking-[0.15em] mb-3 border-b border-white/5 pb-2 hover:text-primary transition-colors flex items-center gap-1">
                                                                    {col.title}
                                                                    <ChevronDown className="-rotate-90 w-2.5 h-2.5 opacity-0 group-hover/title:opacity-100 transition-opacity text-primary" />
                                                                </h4>
                                                            </Link>
                                                            <div className="flex flex-col gap-0.5">
                                                                {col.items.map((item) => (
                                                                    <Link
                                                                        key={item.label}
                                                                        to={item.href}
                                                                        className="group/item flex flex-col p-1.5 -mx-1.5 rounded-lg hover:bg-white/5 transition-colors"
                                                                    >
                                                                        <div className="flex items-center gap-1.5">
                                                                            <div className="w-1 h-1 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors" />
                                                                            <span className="text-xs font-medium text-text-secondary group-hover/item:text-white transition-colors leading-tight">
                                                                                {item.label}
                                                                            </span>
                                                                        </div>
                                                                        {item.desc && (
                                                                            <span className="text-[9px] text-text-muted pl-2.5 mt-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
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
