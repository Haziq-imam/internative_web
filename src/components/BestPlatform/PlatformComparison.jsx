import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlatformComparison = () => {
    const platforms = [
        {
            name: 'InterNative Traders',
            rating: '9.8/10',
            mobile: true,
            web: true,
            alerts: 'Push, SMS, Discord',
            assets: 'Stocks, Options, Crypto',
            price: '$97/mo',
            support: '24/7',
            isRecommended: true
        },
        {
            name: 'TradingView',
            rating: '8.5/10',
            mobile: true,
            web: true,
            alerts: 'In-app only',
            assets: 'All markets',
            price: '$14.95-$59.95/mo',
            support: 'Email'
        },
        {
            name: 'Discord Groups',
            rating: '6.5/10',
            mobile: true,
            web: true,
            alerts: 'Discord only',
            assets: 'Varies',
            price: '$50-$200/mo',
            support: 'Community'
        },
        {
            name: 'Telegram Channels',
            rating: '5.0/10',
            mobile: true,
            web: false,
            alerts: 'Telegram only',
            assets: 'Crypto focus',
            price: 'Free-$100/mo',
            support: 'None'
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">
                        Platform <GradientText>Comparison</GradientText>
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-6 text-white font-black">Platform</th>
                                    <th className="text-center py-4 px-6 text-white font-black">Rating</th>
                                    <th className="text-center py-4 px-6 text-white font-black">Mobile App</th>
                                    <th className="text-center py-4 px-6 text-white font-black">Alert Types</th>
                                    <th className="text-center py-4 px-6 text-white font-black">Assets</th>
                                    <th className="text-center py-4 px-6 text-white font-black">Price</th>
                                    <th className="text-center py-4 px-6 text-white font-black">Support</th>
                                </tr>
                            </thead>
                            <tbody>
                                {platforms.map((platform, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-white/10 ${platform.isRecommended ? 'bg-primary/5' : ''}`}
                                    >
                                        <td className="py-6 px-6">
                                            <div className="flex items-center gap-3">
                                                <span className="text-white font-black">{platform.name}</span>
                                                {platform.isRecommended && (
                                                    <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-xs font-black">
                                                        BEST
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            <span className="text-emerald-500 font-black">{platform.rating}</span>
                                        </td>
                                        <td className="py-6 px-6 text-center">
                                            {platform.mobile ? (
                                                <CheckCircle2 className="text-emerald-500 mx-auto" size={20} />
                                            ) : (
                                                <XCircle className="text-red-500 mx-auto" size={20} />
                                            )}
                                        </td>
                                        <td className="py-6 px-6 text-center text-text-secondary font-medium text-sm">
                                            {platform.alerts}
                                        </td>
                                        <td className="py-6 px-6 text-center text-text-secondary font-medium text-sm">
                                            {platform.assets}
                                        </td>
                                        <td className="py-6 px-6 text-center text-white font-black">
                                            {platform.price}
                                        </td>
                                        <td className="py-6 px-6 text-center text-text-secondary font-medium text-sm">
                                            {platform.support}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/pricing"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-black px-8 py-4 rounded-2xl transition-all"
                        >
                            Try InterNative Traders Free
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default PlatformComparison;
