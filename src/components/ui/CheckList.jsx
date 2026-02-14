import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

const CheckList = ({ items, className }) => {
    return (
        <ul className={cn("space-y-3", className)}>
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-success" />
                    </div>
                    <span className="text-text-secondary">{item}</span>
                </li>
            ))}
        </ul>
    );
};

export default CheckList;
