import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils'; // Assuming lib/utils exists

const Stats = ({ value, label, prefix = '', suffix = '', className }) => {
    return (
        <div className={cn("text-center", className)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-2"
            >
                {prefix}{value}{suffix}
            </motion.div>
            <div className="text-sm font-medium text-primary uppercase tracking-widest">{label}</div>
        </div>
    );
};

export default Stats;
