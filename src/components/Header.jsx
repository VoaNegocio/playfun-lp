import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#identification' },
    { label: 'Solução', href: '#solution' },
    { label: 'Diferenciais', href: '#differential' },
    { label: 'Contato', href: '#cta' },
];

const Header = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="w-full mx-auto antialiased bg-brand-offwhite text-brand-text font-sans scroll-smooth relative">
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/80 backdrop-blur-lg shadow-md py-3 px-6'
                    : 'bg-transparent py-6 px-6 md:py-8 md:px-10'
                    }`}
            >
                <div className="container mx-auto max-w-6xl flex items-center justify-between">
                    <a href="#hero" className="flex-shrink-0">
                        <img
                            src="/assets/logo/logo-playfun.jpg"
                            alt="PlayFun Logo"
                            className={`w-auto mix-blend-multiply transition-all duration-300 ${scrolled ? 'h-10' : 'h-12 md:h-16'}`}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`font-sans text-sm tracking-wide transition-colors duration-300 hover:text-brand-peach ${scrolled ? 'text-brand-text' : 'text-stone-600'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/5500000000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            style={{ background: 'linear-gradient(135deg, #2D6A4F, #1B4332)', color: '#fff' }}
                        >
                            Fale Conosco
                        </a>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors z-50"
                        aria-label="Menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed inset-0 top-0 bg-white/95 backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center gap-8 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-serif text-2xl text-brand-text hover:text-brand-peach transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5500000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg mt-4"
                        style={{ background: 'linear-gradient(135deg, #2D6A4F, #1B4332)', color: '#fff' }}
                    >
                        Fale Conosco
                    </a>
                </div>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
};

export default Header;
