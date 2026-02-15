import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils'; // Make sure this path operates correctly

const GlassCard = ({ children, className, hoverEffect = false, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2)" } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-2xl shadow-glass group/card",
                className
            )}
            {...props}
        >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none group-hover/card:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
