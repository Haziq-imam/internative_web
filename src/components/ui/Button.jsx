import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'default',
    children,
    isLoading,
    ...props
}, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover shadow-neon hover:shadow-neon-hover",
        secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
        outline: "border border-primary/50 text-white hover:bg-primary/10 hover:border-primary",
        ghost: "hover:bg-white/5 text-text-secondary hover:text-white",
        link: "text-primary underline-offset-4 hover:underline"
    };

    const sizes = {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-14 rounded-full px-8 text-lg",
        icon: "h-10 w-10"
    };

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
