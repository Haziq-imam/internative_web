import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Ann Chovey",
            role: "Day Trader",
            image: "AC",
            stars: 5,
            text: "I've tried Market Rebellion, Benzinga, and three other signal services. InterNative gives me the same quality alerts for literally one-fourth the price. The mobile app is incredibly easy to use."
        },
        {
            name: "Russell Sprout",
            role: "Options Trader",
            image: "RS",
            stars: 5,
            text: "The swing trading signals alone have paid for my subscription 10 times over. I caught a 240% gain on a tech stock lotto option last month following their alert. This is the real deal."
        },
        {
            name: "Isla White",
            role: "Beginner Trader",
            image: "IW",
            stars: 5,
            text: "As someone new to options trading, I needed clear guidance without overwhelming complexity. InterNative delivers exactly that. Every signal includes why they are making the trade."
        },
        {
            name: "Mona Lott",
            role: "Crypto Trader",
            image: "ML",
            stars: 5,
            text: "The push notifications are a game-changer. I'm not glued to my screen anymore but I never miss opportunities. Got alerted to a crypto breakout at 6am and made 18% profit."
        }
    ];

    return (
        <section className="py-24 bg-background-secondary border-t border-white/5 overflow-hidden" id="testimonials">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Real traders. Real results. Real testimonials.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-background rounded-2xl p-8 border border-white/5 relative hover:border-primary/20 transition-colors">
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                                ))}
                            </div>

                            <p className="text-text-secondary mb-8 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center font-bold text-white">
                                    {review.image}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{review.name}</div>
                                    <div className="text-sm text-text-muted">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="inline-flex -space-x-4 mb-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full bg-surface border-2 border-background flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-white/10" />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full bg-surface border-2 border-background flex items-center justify-center text-xs font-bold text-white">
                            +10k
                        </div>
                    </div>
                    <p className="text-sm text-text-muted">Join 10,000+ winning traders today</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
