import React from 'react';
import { cn } from '../../lib/utils';

const Badge = ({ children, variant = "default", className }) => {
    const variants = {
        default: "bg-white/10 text-white border-white/20",
        primary: "bg-primary/20 text-primary border-primary/50 shadow-neon-sm",
        success: "bg-success/20 text-success border-success/50",
        warning: "bg-warning/20 text-warning border-warning/50",
        danger: "bg-danger/20 text-danger border-danger/50",
    };

    return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-sm",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};

export default Badge;
