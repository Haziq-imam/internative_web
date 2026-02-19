import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, TrendingUp, ChevronDown, BarChart2, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import Logo from '../../assets/internative logo.svg';
import { navigationLinks } from '../../data/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <header
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1920px] z-40 transition-all duration-500 rounded-full",
                    isScrolled ? "bg-[#030014]/80 backdrop-blur-md border border-white/5 py-3 shadow-lg" : "bg-transparent py-6"
                )}
            >
                <div className="px-6 md:px-12 relative">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center group">
                            <img
                                src={Logo}
                                alt="InterNative Traders"
                                className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
                            {navigationLinks.map((link) => (
                                <div key={link.label} className="group">
                                    {link.megaMenu ? (
                                        <div className="relative px-3 py-2 text-xs 2xl:text-sm font-semibold text-text-secondary hover:text-white transition-all duration-300 flex items-center gap-1 hover:bg-white/5 rounded-full cursor-pointer">
                                            <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                                            <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-primary" />
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="relative px-3 py-2 text-xs 2xl:text-sm font-semibold text-text-secondary hover:text-white transition-all duration-300 flex items-center gap-1 hover:bg-white/5 rounded-full"
                                        >
                                            <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                                            {link.columns && (
                                                <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-primary" />
                                            )}
                                        </Link>
                                    )}

                                    {/* Mega Menu Dropdown */}
                                    {link.columns && (
                                        <div className="absolute top-full left-0 w-full pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 flex justify-center">
                                            <div className="w-[85vw] max-w-5xl bg-[#0A051A]/95 backdrop-blur-3xl border border-white/5 rounded-3xl p-1 shadow-2xl overflow-hidden ring-1 ring-white/5 mx-auto">
                                                {/* Links Columns */}
                                                <div className="p-8 grid grid-cols-5 gap-6 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[20px]">
                                                    {link.columns.map((col, idx) => (
                                                        <div key={idx} className="relative z-10 flex flex-col gap-4">
                                                            <div>
                                                                <Link to={col.href} className="block group/title mb-2">
                                                                    <h4 className="text-sm font-bold text-white flex items-center gap-2 group-hover/title:text-primary transition-colors whitespace-nowrap">
                                                                        {col.title}
                                                                    </h4>
                                                                </Link>
                                                                <div className="flex flex-col gap-1">
                                                                    {col.items.map((item) => (
                                                                        <Link
                                                                            key={item.label}
                                                                            to={item.href}
                                                                            className="group/item flex flex-col py-1.5 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                                                                        >
                                                                            <span className="text-sm font-medium text-text-secondary group-hover/item:text-white transition-colors">
                                                                                {item.label}
                                                                            </span>
                                                                            {item.desc && (
                                                                                <span className="text-xs text-text-muted mt-0.5 group-hover/item:text-text-secondary transition-colors line-clamp-1">
                                                                                    {item.desc}
                                                                                </span>
                                                                            )}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {col.secondarySection && (
                                                                <div className="mt-2">
                                                                    <Link to={col.secondarySection.href} className="block group/title mb-2">
                                                                        <h4 className="text-sm font-bold text-white flex items-center gap-2 group-hover/title:text-primary transition-colors whitespace-nowrap">
                                                                            {col.secondarySection.title}
                                                                        </h4>
                                                                    </Link>
                                                                    <div className="flex flex-col gap-1">
                                                                        {col.secondarySection.items.map((item) => (
                                                                            <Link
                                                                                key={item.label}
                                                                                to={item.href}
                                                                                className="group/item flex flex-col py-1.5 px-3 -mx-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                                                                            >
                                                                                <span className="text-sm font-medium text-text-secondary group-hover/item:text-white transition-colors">
                                                                                    {item.label}
                                                                                </span>
                                                                                {item.desc && (
                                                                                    <span className="text-xs text-text-muted mt-0.5 group-hover/item:text-text-secondary transition-colors line-clamp-1">
                                                                                        {item.desc}
                                                                                    </span>
                                                                                )}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
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
                        <div className="hidden xl:flex items-center gap-6">
                            <Link to="/pricing" className="text-sm font-semibold text-white hover:text-primary transition-colors duration-300 whitespace-nowrap">
                                Log in
                            </Link>
                            <Link to="/pricing">
                                <Button size="default" className="shadow-neon whitespace-nowrap">Get Started</Button>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="xl:hidden p-2 text-text-secondary hover:text-white transition-colors"
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
