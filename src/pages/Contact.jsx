import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactMethods = [
        {
            icon: <Mail className="w-8 h-8 text-primary" />,
            title: "Email Us",
            description: "internativetraders@gmail.com",
            link: "mailto:internativetraders@gmail.com"
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-primary" />,
            title: "Live Chat",
            description: "Available 24/7 for support",
            link: "#"
        }
    ];

    const socialLinks = [
        {
            icon: <Facebook className="w-6 h-6" />,
            name: "Facebook",
            link: "https://www.facebook.com/share/1BaLVoxdHq/?mibextid=wwXIfr"
        },
        {
            icon: <Instagram className="w-6 h-6" />,
            name: "Instagram",
            link: "https://www.instagram.com/internative.traders?igsh=d3pkYWE3ZzR0cjM2&utm_source=qr"
        },
        {
            icon: <Twitter className="w-6 h-6" />,
            name: "Twitter",
            link: "https://www.facebook.com/share/1BaLVoxdHq/?mibextid=wwXIfr"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-text-main">
            <Helmet>
                <title>Contact | InterNative Traders</title>
                <meta name="description" content="Get in touch with InterNative Traders. We're here to help with your trading signals questions." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            Contact <span className="text-gradient">Us</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            Have questions? We're here to help. Reach out to our team anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {contactMethods.map((method, idx) => (
                                <GlassCard key={idx} className="p-8 text-center" hoverEffect>
                                    <div className="flex justify-center mb-4">
                                        {method.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                                    <a
                                        href={method.link}
                                        className="text-text-secondary hover:text-primary transition-colors"
                                    >
                                        {method.description}
                                    </a>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <GlassCard className="p-8 md:p-12">
                            <h2 className="text-3xl font-black text-white mb-8 text-center">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                        required
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full shadow-neon" size="lg">
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Social Media */}
            <section className="py-20 bg-background-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-white mb-8">
                            Connect With Us
                        </h2>
                        <div className="flex justify-center gap-6">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 group"
                                >
                                    <div className="text-text-secondary group-hover:text-white transition-colors">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
