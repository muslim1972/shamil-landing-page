import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DownloadSuccessModal from './DownloadSuccessModal';
import { useDownload } from '../context/DownloadContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);
    const { isDownloading, handleDownload, showModal, downloadedApkPath, resetDownload } = useDownload();

    // الكشف عن بيئة التشغيل (داخل التطبيق أم متصفح عادي)
    const isEmbedded = window.parent !== window;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (!isMobileMenuOpen) return;
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'الرئيسية', href: '#hero' },
        { name: 'المميزات', href: '#features' },
        { name: 'عن التطبيق', href: '#about' },
        { name: 'سياسة الخصوصية', href: '#privacy-policy' },
        { name: 'شروط الخدمة', href: '#terms-of-service' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        // إغلاق القائمة بعد تأخير قصير للسماح بالتمرير
        setTimeout(() => {
            setIsMobileMenuOpen(false);
        }, 300);

        // التمرير إلى القسم المطلوب
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // تحديث حالة الـ navbar بعد انتهاء التمرير السلس (حوالي 1 ثانية)
            // هذا يضمن أن الـ navbar يبقى ثابتاً خلال التمرير
            setTimeout(() => {
                const currentScroll = window.scrollY;
                setIsScrolled(currentScroll > 20);
            }, 1000);
        }
    };

    const handleBackToApp = () => {
        // محاولة إرسال رسالة للتطبيق الرئيسي إذا كنا في iframe
        if (window.parent !== window) {
            window.parent.postMessage({ type: 'NAVIGATE_BACK' }, '*');
        } else {
            window.location.href = '/';
        }
    };

    const onDownloadClick = (e: React.MouseEvent) => {
        setIsMobileMenuOpen(false);
        handleDownload(e);
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-lg shadow-md py-3'
                : 'bg-white/80 backdrop-blur-md py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between" dir="rtl">
                {/* Logo Section - Static */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 group cursor-default">
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo.png`}
                            alt="شامل آب"
                            className="w-10 h-10 rounded-xl shadow-lg"
                        />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                            شامل آب
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-slate-700 hover:text-teal-600 font-medium transition-colors relative group cursor-pointer"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Left Side: Back Button & Mobile Menu */}
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Button - Hidden on Desktop */}
                    <button
                        className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="القائمة"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Back Button */}
                    <button
                        onClick={handleBackToApp}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
                        title="العودة"
                    >
                        <ArrowRight size={24} className="transform rotate-180" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 500 }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200 shadow-xl"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-3" dir="rtl">
                            {/* Navigation Links */}
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-slate-900 hover:text-teal-600 font-semibold py-3 px-4 border-b border-slate-200 last:border-0 hover:bg-slate-50 rounded-lg transition-all cursor-pointer active:bg-slate-100"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Download Button - Mobile */}
                            <button
                                onClick={onDownloadClick}
                                disabled={isDownloading}
                                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold shadow-lg transition-all cursor-pointer mt-2 ${isDownloading
                                    ? 'bg-slate-400 cursor-not-allowed text-slate-100'
                                    : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-teal-500/30 hover:shadow-teal-500/50 active:scale-95'
                                    }`}
                            >
                                <Download size={20} className={isDownloading ? 'animate-bounce' : ''} />
                                <span className="text-lg">
                                    {isDownloading
                                        ? 'جارٍ التحميل...'
                                        : (isEmbedded ? 'تحديث التطبيق' : 'تحميل التطبيق')
                                    }
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal نجاح التحميل */}
            <DownloadSuccessModal
                isOpen={showModal}
                onClose={resetDownload}
                apkPath={downloadedApkPath}
            />
        </nav>
    );
};

export default Navbar;
