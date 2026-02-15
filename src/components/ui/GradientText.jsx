import React from 'react';
import { cn } from '../../lib/utils';

const GradientText = ({ children, className }) => {
    return (
        <span className={cn(
            "bg-clip-text text-transparent bg-brand-gradient bg-[length:200%_auto] animate-gradient",
            className
        )}>
            {children}
        </span>
    );
};

export default GradientText;
