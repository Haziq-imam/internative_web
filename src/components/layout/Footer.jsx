import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Twitter, Instagram, Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';

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
                { label: "Options Signals", href: "/signals/options" },
                { label: "Stock Signals", href: "/signals/stocks" },
                { label: "Crypto Signals", href: "/signals/crypto" },
                { label: "Swing Trading", href: "/signals/swing" },
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
        <footer className="bg-background-secondary border-t border-white/5 text-text-secondary pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent-gold flex items-center justify-center text-white shadow-lg">
                                <TrendingUp size={24} strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-bold text-white font-display tracking-tight">InterNative</span>
                        </Link>
                        <p className="text-text-muted mb-8 max-w-sm leading-relaxed">
                            Your trusted source for real-time trading signals across options, stocks, and crypto markets.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:support@internativetraders.com">support@internativetraders.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                <span>24/7 Live Chat Support</span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerSections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.href} className="text-sm hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-text-muted">
                        © {currentYear} InterNative Traders. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
                        <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/risk-disclosure" className="hover:text-white">Risk Disclosure</Link>
                        <Link to="/refund" className="hover:text-white">Refund Policy</Link>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-white/5 rounded-xl text-[10px] text-text-muted text-justify leading-relaxed border border-white/5">
                    <strong>Legal Disclaimer:</strong> Trading involves significant risk. Past performance is not indicative of future results. InterNative Traders provides educational signals and analysis Only. We do not provide personalized financial advice. Always conduct your own research and consult with a licensed financial advisor before making investment decisions. Use of this service implies agreement to our Terms of Service and Risk Disclosure Policy.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
