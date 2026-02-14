import React from 'react';
import { Clock, TrendingDown, Layers } from 'lucide-react';

const ProblemSection = () => {
    const problems = [
        {
            icon: Clock,
            title: "Tired of Missing Opportunities?",
            description: "Markets move fast. By the time you analyze charts, research fundamentals, and calculate entry points, the opportunity is gone."
        },
        {
            icon: TrendingDown,
            title: "Paying Professional Prices?",
            description: "Premium signal services charge $200-$400/month but deliver generic alerts you could get for a fraction of the cost."
        },
        {
            icon: Layers,
            title: "Juggling Multiple Apps?",
            description: "One app for options, another for stocks, a third for crypto. Managing your portfolio shouldn't require constant switching."
        }
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Trading Doesn't Have to Be <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-primary-light">Complicated or Expensive</span>
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Most traders fail because of information overload and execution delays. We solve that.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="group relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-14 h-14 rounded-xl bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-neon/20">
                                <item.icon className="w-7 h-7 text-text-secondary group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                            <p className="text-text-secondary leading-relaxed relative z-10">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
