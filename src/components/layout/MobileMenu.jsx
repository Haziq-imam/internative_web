import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';
import Logo from '../../assets/internative logo.svg';
import { navigationLinks } from '../../data/navigation';

const MobileMenu = ({ isOpen, onClose }) => {
    const [openSubmenu, setOpenSubmenu] = React.useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };


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
                                    {navigationLinks.map((item, index) => (
                                        <div key={item.label}>
                                            {item.megaMenu ? (
                                                <div className="rounded-xl overflow-hidden border border-transparent transition-all duration-300">
                                                    <button
                                                        onClick={() => toggleSubmenu(index)}
                                                        className={cn(
                                                            "w-full flex items-center justify-between px-4 py-4 text-base font-bold text-text-secondary hover:text-white hover:bg-white/5 transition-all rounded-xl",
                                                            openSubmenu === index && "bg-primary/10 text-primary"
                                                        )}
                                                    >
                                                        {item.label}
                                                        <ChevronDown className={cn(
                                                            "h-4 w-4 text-text-muted transition-transform duration-300",
                                                            openSubmenu === index && "rotate-180 text-primary"
                                                        )} />
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
