import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Logo from '../../assets/internative logo.svg';

const MobileMenu = ({ isOpen, onClose }) => {
    const [openSubmenu, setOpenSubmenu] = React.useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const menuItems = [
        {
            label: 'Signals',
            href: '#',
            megaMenu: true,
            columns: [
                {
                    title: 'Stock Trading Signals',
                    href: '/signals/stock-trading-signals',
                    items: [
                        { label: 'Day Trading Stocks', href: '/signals/day-trading-stocks' },
                        { label: 'Momentum Stock Signals', href: '/signals/momentum-stock-signals' },
                        { label: 'Swing Trading Stocks', href: '/signals/swing-trading-stocks' },
                        { label: 'Earnings Trading Strategy', href: '/signals/earnings-trading-strategy' },
                        { label: 'Gap Up / Gap Down Stocks', href: '/signals/gap-up-gap-down-stocks' },
                    ]
                },
                {
                    title: 'Swing Trading Signals',
                    href: '/signals/swing-trading-signals',
                    items: []
                },
                {
                    title: 'Options Trading Signals',
                    href: '/signals/options-trading-signals',
                    items: []
                },
                {
                    title: 'Trading Education',
                    href: '/trading-education',
                    items: [
                        { label: 'View All Education', href: '/trading-education' },
                        { label: 'What Are Trading Signals', href: '/trading-education/what-are-trading-signals' },
                        { label: 'How Options Trading Works', href: '/trading-education/how-options-trading-works' },
                        { label: 'What Is Lotto Options', href: '/trading-education/what-is-lotto-options' },
                        { label: '0DTE Options Explained', href: '/trading-education/0dte-options-explained' },
                        { label: 'How To Use Trading Signals', href: '/trading-education/how-to-use-trading-signals' },
                    ]
                },
                {
                    title: 'Compare Trading Signals',
                    href: '/compare-trading-signals',
                    items: [
                        { label: 'View Comparison', href: '/compare-trading-signals' },
                        { label: 'Best Options Trading Signals', href: '/compare-trading-signals/best-options-trading-signals' },
                        { label: 'Best Trading Signals Platform', href: '/compare-trading-signals/best-trading-signals-platform' },
                        { label: 'Options Trading Signals vs Copy Trading', href: '/compare-trading-signals/options-trading-signals-vs-copy-trading' },
                        { label: 'Free vs Paid Trading Signals', href: '/compare-trading-signals/free-vs-paid-trading-signals' },
                    ]
                },
                {
                    title: 'Trading Tools & Access',
                    href: '/trading-tools-access',
                    items: [
                        { label: 'View All Tools', href: '/trading-tools-access' },
                        { label: 'Trading Signals For Beginners', href: '/trading-tools-access/beginners' },
                        { label: 'Advanced Options Trading', href: '/trading-tools-access/advanced-options' },
                        { label: 'Trading Signals Risk Guide', href: '/trading-tools-access/risk-guide' },
                        { label: 'Trading Signals App', href: '/trading-tools-access/trading-signals-app' },
                        { label: 'Real-Time Trading Alerts', href: '/trading-tools-access/real-time-alerts' },
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
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-[#060410] border-l border-primary/10 shadow-glass"
                    >
                        <div className="flex flex-col h-full relative overflow-hidden">
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                            <div className="flex items-center justify-between p-6 border-b border-white/5 relative z-10">
                                <Link to="/" onClick={onClose}>
                                    <img
                                        src={Logo}
                                        alt="InterNative Traders"
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/20 transition-all shadow-neon"
                                >
                                    <X className="h-5 w-5 text-text-secondary hover:text-white" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto relative z-10 custom-scrollbar">
                                <nav className="flex flex-col space-y-1 px-4 py-6">
                                    {menuItems.map((item, index) => (
                                        <div key={item.label}>
                                            {item.megaMenu ? (
                                                <div className="rounded-xl overflow-hidden border border-transparent transition-all duration-300">
                                                    <button
                                                        onClick={() => toggleSubmenu(index)}
                                                        className={`w-full flex items-center justify-between px-4 py-4 text-base font-bold text-text-secondary hover:text-white hover:bg-white/5 transition-all rounded-xl ${openSubmenu === index ? 'bg-primary/10 text-primary' : ''}`}
                                                    >
                                                        {item.label}
                                                        <ChevronDown className={`h-4 w-4 text-text-muted transition-transform duration-300 ${openSubmenu === index ? 'rotate-180 text-primary' : ''}`} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {openSubmenu === index && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden bg-black/20 rounded-b-xl"
                                                            >
                                                                <div className="flex flex-col py-4 gap-6 px-6">
                                                                    {item.columns.map((col, cIdx) => (
                                                                        <div key={cIdx} className="space-y-2">
                                                                            {col.href ? (
                                                                                <Link
                                                                                    to={col.href}
                                                                                    onClick={onClose}
                                                                                    className="text-xs font-black uppercase tracking-wider text-text-muted hover:text-primary transition-colors block mb-2"
                                                                                >
                                                                                    {col.title}
                                                                                </Link>
                                                                            ) : (
                                                                                <h5 className="text-xs font-black uppercase tracking-wider text-text-muted">{col.title}</h5>
                                                                            )}
                                                                            {col.items.length > 0 && (
                                                                                <div className="flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                                                                                    {col.items.map((child) => (
                                                                                        <Link
                                                                                            key={child.label}
                                                                                            href={child.href}
                                                                                            to={child.href}
                                                                                            onClick={onClose}
                                                                                            className="py-1.5 text-sm font-medium text-text-secondary hover:text-white hover:translate-x-1 transition-all"
                                                                                        >
                                                                                            {child.label}
                                                                                        </Link>
                                                                                    ))}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    to={item.href}
                                                    onClick={onClose}
                                                    className="flex items-center justify-between px-4 py-4 rounded-xl text-base font-bold text-text-secondary hover:text-white hover:bg-white/5 border border-transparent transition-all group"
                                                >
                                                    {item.label}
                                                    <ChevronRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors group-hover:translate-x-1" />
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="p-6 border-t border-white/10 bg-background-secondary/50 relative z-10 space-y-4">
                                    <Link to="/pricing" onClick={onClose} className="block">
                                        <Button className="w-full py-6 text-xl shadow-neon" size="lg">Start Free Trial</Button>
                                    </Link>
                                    <div className="text-center">
                                        <span className="text-text-muted font-medium">Already a member? </span>
                                        <Link to="/pricing" onClick={onClose} className="font-bold text-primary hover:text-primary-hover transition-colors">
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
