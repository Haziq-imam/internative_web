import React from 'react';
import sp500 from '../../assets/trust_logos/S & P 500.svg';
import nasdaq from '../../assets/trust_logos/Nasdaq.svg';
import dow from '../../assets/trust_logos/Dow Jones.svg';
import russell from '../../assets/trust_logos/Russel 2000.svg';
import bitcoin from '../../assets/trust_logos/bitcoin-btc-logo.svg';
import ethereum from '../../assets/trust_logos/ethereum-eth-logo.svg';

const SocialProof = () => {
    const tickers = [
        { name: 'S&P 500', logo: sp500, width: 120 },
        { name: 'Nasdaq 100', logo: nasdaq, width: 120 },
        { name: 'Dow Jones', logo: dow, width: 120 },
        { name: 'Russell 2000', logo: russell, width: 120 },
        { name: 'Bitcoin', logo: bitcoin, width: 40 },
        { name: 'Ethereum', logo: ethereum, width: 30 },
    ];

    // Duplicate for infinite scroll
    const scrollTickers = [...tickers, ...tickers, ...tickers, ...tickers];

    return (
        <section className="bg-[#060410] border-y border-primary/20 py-12 overflow-hidden relative z-10">
            <div className="container mx-auto px-4 mb-10">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                    <p className="text-center text-primary text-xs font-black uppercase tracking-[0.3em]">
                        Institutional Grade Analysis
                    </p>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                </div>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060410] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060410] to-transparent z-10" />

                <div className="flex animate-scroll whitespace-nowrap py-4">
                    {scrollTickers.map((ticker, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 mx-8 md:mx-16 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group">
                            <div className="h-20 flex items-center justify-center">
                                <img
                                    src={ticker.logo}
                                    alt={ticker.name}
                                    className="h-full w-auto object-contain max-h-12 md:max-h-16 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                                    style={{ maxWidth: ticker.width ? `${ticker.width * 1.5}px` : 'auto' }}
                                />
                            </div>
                            <span className="text-xs md:text-sm font-bold text-text-muted/80 uppercase tracking-widest group-hover:text-white transition-colors">
                                {ticker.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
