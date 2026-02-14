import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils'; // Make sure this path operates correctly

const GlassCard = ({ children, className, hoverEffect = false, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 0 30px rgba(85, 11, 119, 0.4)" } : {}}
            transition={{ duration: 0.3 }}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/10 bg-background-secondary/40 backdrop-blur-xl shadow-glass",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
