import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComparisonTable = () => {
    const features = [
        { name: "Monthly Price", us: "$59.99", c1: "$200-$400", c2: "$457", c3: "$167" },
        { name: "Options Signals", us: true, c1: true, c2: true, c3: false },
        { name: "Stock Signals", us: true, c1: "Limited", c2: true, c3: true },
        { name: "Crypto Signals", us: true, c1: false, c2: "Limited", c3: false },
        { name: "Mobile App", us: true, c1: false, c2: true, c3: true },
        { name: "Push Notifications", us: "Instant", c1: false, c2: true, c3: true },
        { name: "Daily Track Record", us: true, c1: false, c2: false, c3: "Limited" },
        { name: "24/7 Support", us: true, c1: "Limited", c2: true, c3: "Business Hours" },
    ];

    return (
        <section className="py-24 bg-background overflow-x-auto">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        See How We Compare
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto bg-surface border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-5 p-6 bg-white/5 border-b border-white/5 text-sm font-bold text-white min-w-[800px]">
                        <div className="col-span-1 text-text-muted font-normal self-end pb-2">Feature</div>
                        <div className="col-span-1 text-center pb-2 border-b-2 border-primary">
                            <span className="text-primary text-lg block mb-1">InterNative</span>
                            <span className="text-xs font-normal text-text-secondary">Traders</span>
                        </div>
                        <div className="col-span-1 text-center text-text-secondary pb-2 self-end">Market Rebellion</div>
                        <div className="col-span-1 text-center text-text-secondary pb-2 self-end">Benzinga Pro</div>
                        <div className="col-span-1 text-center text-text-secondary pb-2 self-end">Trade Ideas</div>
                    </div>

                    <div className="divide-y divide-white/5 min-w-[800px]">
                        {features.map((row, index) => (
                            <div key={index} className="grid grid-cols-5 p-6 hover:bg-white/5 transition-colors items-center">
                                <div className="col-span-1 font-medium text-white">{row.name}</div>

                                {/* Us */}
                                <div className="col-span-1 text-center flex justify-center bg-primary/5 -my-6 py-6 border-x border-white/5">
                                    {row.us === true ? <Check className="w-6 h-6 text-accent-green" /> : <span className="font-bold text-white">{row.us}</span>}
                                </div>

                                {/* Competitor 1 */}
                                <div className="col-span-1 text-center flex justify-center text-text-secondary">
                                    {row.c1 === true ? <Check className="w-5 h-5" /> : row.c1 === false ? <X className="w-5 h-5 text-text-muted" /> : row.c1}
                                </div>

                                {/* Competitor 2 */}
                                <div className="col-span-1 text-center flex justify-center text-text-secondary">
                                    {row.c2 === true ? <Check className="w-5 h-5" /> : row.c2 === false ? <X className="w-5 h-5 text-text-muted" /> : row.c2}
                                </div>

                                {/* Competitor 3 */}
                                <div className="col-span-1 text-center flex justify-center text-text-secondary">
                                    {row.c3 === true ? <Check className="w-5 h-5" /> : row.c3 === false ? <X className="w-5 h-5 text-text-muted" /> : row.c3}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link to="/signup" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors">
                        Get More Value for Less Money →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
