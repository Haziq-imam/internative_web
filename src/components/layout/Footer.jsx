import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Logo from '../../assets/internative logo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Product",
            links: [
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Pricing", href: "/pricing" },
                { label: "Performance", href: "/performance" },
                { label: "Mobile App", href: "/#app" },
                { label: "Free Trial", href: "/signup" },
            ]
        },
        {
            title: "Signal Types",
            links: [
                { label: "Options Signals", href: "/products/options-signals" },
                { label: "Stock Signals", href: "/products/stock-signals" },
                { label: "Swing Trading", href: "/products/swing-trading-signals" },
                { label: "Day Trading", href: "/signals/day-trading" },
            ]
        },
        {
            title: "Resources",
            links: [
                { label: "Trading Guides", href: "/education" },
                { label: "Blog", href: "/blog" },
                { label: "Success Stories", href: "/#testimonials" },
                { label: "FAQs", href: "/#faq" },
                { label: "Help Center", href: "/help" },
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Careers", href: "/careers" },
                { label: "Press", href: "/press" },
                { label: "Legal", href: "/legal" },
            ]
        }
    ];

    return (
        <footer className="bg-[#060410] border-t border-primary/20 text-text-main pt-20 pb-10 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center mb-6">
                            <img
                                src={Logo}
                                alt="InterNative Traders"
                                className="h-10 md:h-12 w-auto"
                            />
                        </Link>
                        <p className="text-text-muted mb-8 max-w-sm leading-relaxed font-bold text-sm">
                            Your trusted source for real-time trading signals across options, stocks, and swing strategies. Join 10,000+ elite traders.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-neon group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <a href="mailto:support@internativetraders.com" className="font-bold text-text-muted hover:text-white transition-colors">support@internativetraders.com</a>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 hover:shadow-neon hover:-translate-y-1"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerSections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.href} className="text-sm font-bold text-text-muted hover:text-primary transition-all flex items-center gap-2 group">
                                            <div className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-text-muted">
                        © {currentYear} InterNative Traders. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-text-muted">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</Link>
                        <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-primary/5 rounded-3xl text-[10px] text-text-muted text-justify leading-relaxed border border-primary/20 backdrop-blur-sm">
                    <strong className="text-primary uppercase tracking-widest mr-2">Legal Disclaimer:</strong>
                    Trading involves significant risk. Past performance is not indicative of future results. InterNative Traders provides educational signals and analysis Only. We do not provide personalized financial advice. Always conduct your own research and consult with a licensed financial advisor before making investment decisions. Use of this service implies agreement to our Terms of Service and Risk Disclosure Policy.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
