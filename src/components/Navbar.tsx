import { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'الرئيسية', href: '#hero' },
        { name: 'المميزات', href: '#features' },
        { name: 'عن التطبيق', href: '#about' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between" dir="rtl">
                {/* Logo and Back Button */}
                <div className="flex items-center gap-4">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                            ش
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                            شامل آب
                        </span>
                    </a>

                    {/* Back to App Button */}
                    <a
                        href="/"
                        className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100"
                    >
                        <ArrowRight size={18} />
                        <span>العودة للتطبيق</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-primary-600 font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#download"
                        className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        <Download size={18} />
                        <span>تحميل التطبيق</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4" dir="rtl">
                            {/* Back to App Button - Mobile */}
                            <a
                                href="/"
                                className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-5 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                            >
                                <ArrowRight size={18} />
                                <span>العودة للتطبيق</span>
                            </a>

                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-slate-900 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#download"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-5 py-3 rounded-xl font-bold mt-2 shadow-lg shadow-primary-500/25"
                            >
                                <Download size={18} />
                                <span>تحميل التطبيق</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
