import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

const variants = {
    primary: "bg-brand-gradient text-white hover:shadow-neon-hover border border-white/20 active:brightness-110",
    secondary: "bg-white/[0.05] text-white border border-white/10 hover:bg-white/10 backdrop-blur-md",
    outline: "border border-primary/40 text-white hover:bg-primary/10 hover:border-primary shadow-neon",
    ghost: "hover:bg-primary/5 text-text-secondary hover:text-primary",
    link: "text-primary underline-offset-4 hover:underline font-bold"
};

const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 rounded-full px-4 text-xs",
    lg: "h-14 rounded-full px-8 text-lg",
    icon: "h-10 w-10"
};

const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'default',
    children,
    isLoading,
    ...props
}, ref) => {

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            ref={ref}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : null}
            {children}
        </motion.button>
    );
});

Button.displayName = "Button";

export default Button;
