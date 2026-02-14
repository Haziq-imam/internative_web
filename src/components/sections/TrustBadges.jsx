import React from 'react';
import { ShieldCheck, Smartphone, Users, Bell } from 'lucide-react';

const TrustBadges = () => {
    const badges = [
        { icon: Users, text: "10,000+ Active Traders" },
        { icon: ShieldCheck, text: "78% Average Win Rate" },
        { icon: Bell, text: "Real-Time Push Notifications" },
        { icon: Smartphone, text: "Available on iOS & Android" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5 bg-background-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

            {badges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center p-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                        <badge.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-black text-white/60 uppercase tracking-[0.1em]">{badge.text}</span>
                </div>
            ))}
        </div>
    );
};

export default TrustBadges;
