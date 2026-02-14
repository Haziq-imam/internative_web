import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import GlassCard from './GlassCard';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <GlassCard className={cn("p-0 overflow-hidden", isOpen ? "border-primary/50 shadow-neon" : "border-white/5")}>
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className={cn("text-xl font-black tracking-tight transition-colors font-display", isOpen ? "text-primary" : "text-white")}>
                    {title}
                </span>
                <ChevronDown
                    className={cn("w-6 h-6 transition-transform duration-300", isOpen ? "rotate-180 text-primary" : "text-text-secondary")}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-8 pb-8 text-text-secondary leading-relaxed border-t border-white/5 pt-6 text-lg font-medium">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </GlassCard>
    );
};

const Accordion = ({ items, className }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className={cn("space-y-4", className)}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
