import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'À propos', href: '#about' },
        { name: 'Galerie', href: '#gallery' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Témoignages', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo */}
                    <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover bg-white shadow-sm" />
                    <div className={`font-serif text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                        Centre Dentaire <span className="text-primary">Et-Tahery</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        <Calendar className="w-4 h-4" />
                        Prendre RDV
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-white shadow-xl p-4 md:hidden border-t"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-600 hover:text-primary font-medium py-2 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#booking"
                                    className="bg-primary text-white py-3 rounded-lg text-center font-bold mt-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Prendre Rendez-vous
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
