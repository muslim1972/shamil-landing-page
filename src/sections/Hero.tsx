import { motion, AnimatePresence } from 'framer-motion';
import { Download, Play, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDownload } from '../context/DownloadContext';

// Use relative paths, we will prepend BASE_URL
const images = [
    'images/InPhone.png',
    'images/p2.png',
    'images/p3.png',
    'images/p4.png',
    'images/p5.png',
    'images/p6.png'
];

const Hero = () => {
    // 0 = Intro Screen
    // 1..N = Images (index - 1)
    const [currentIndex, setCurrentIndex] = useState(0);
    const { isDownloading, handleDownload } = useDownload();

    // الكشف عن بيئة التشغيل (داخل التطبيق أم متصفح عادي)
    const isEmbedded = window.parent !== window;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                // Total states: 1 (intro) + images.length
                const totalStates = 1 + images.length;
                return (prev + 1) % totalStates;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const showIntro = currentIndex === 0;
    const currentImage = currentIndex > 0 ? images[currentIndex - 1] : null;

    // Helper to handle base URL (e.g. /shamil-landing-page/)
    const getImageUrl = (path: string) => {
        // import.meta.env.BASE_URL generally ends with /
        return `${import.meta.env.BASE_URL}${path}`;
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-right order-2 lg:order-1"
                    dir="rtl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 mb-6 shadow-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">الإصدار الجديد متوفر الآن</span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                        تطبيق <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">شامل</span>
                        <br />
                        لكل ما تحتاجه
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl ml-auto">
                        تطبيق يجمع لك أدوات التواصل، التعلم، الترفيه، وإدارة المهام في مكان واحد.
                        تجربة مستخدم فريدة مصممة خصيصاً لتناسب احتياجاتك اليومية.
                    </p>

                    <div className="flex flex-row flex-wrap items-center justify-end gap-x-6 gap-y-4 w-full">
                        {/* Stats */}
                        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 order-2 sm:order-1">
                            <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-900 dark:text-white text-sm">+100K</span>
                                <span className="text-[10px] sm:text-xs">تحميل</span>
                            </div>
                            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                            <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-900 dark:text-white text-sm">4.8</span>
                                <span className="text-[10px] sm:text-xs">تقييم</span>
                            </div>
                        </div>

                        {/* Download Button */}
                        <motion.button
                            whileHover={!isDownloading ? { scale: 1.05 } : {}}
                            whileTap={!isDownloading ? { scale: 0.95 } : {}}
                            onClick={handleDownload}
                            disabled={isDownloading}
                            style={{
                                backgroundColor: isDownloading ? '#94a3b8' : '#0284c7',
                                color: '#ffffff',
                                cursor: isDownloading ? 'not-allowed' : 'pointer'
                            }}
                            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold shadow-lg shadow-primary-500/25 transition-all hover:opacity-90 order-1 sm:order-2 text-sm sm:text-base"
                        >
                            <Download size={18} className={isDownloading ? 'animate-bounce' : ''} style={{ color: '#ffffff' }} />
                            <span className="hidden sm:inline" style={{ color: '#ffffff' }}>
                                {isDownloading
                                    ? 'جارٍ التحميل...'
                                    : (isEmbedded ? 'تحديث التطبيق' : 'حمل التطبيق')
                                }
                            </span>
                            <span className="sm:hidden" style={{ color: '#ffffff' }}>
                                {isDownloading
                                    ? 'جارٍ...'
                                    : (isEmbedded ? 'تحديث' : 'تحميل')
                                }
                            </span>
                        </motion.button>
                    </div>

                    {/* Dashboard Video Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative w-full max-w-[300px] mx-auto sm:mx-0 sm:self-end mt-6 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-400/20 dark:shadow-slate-900/40 border-4 border-white/80 dark:border-slate-800/80 bg-slate-900"
                    >
                        <video
                            className="w-full h-auto"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            src={`${import.meta.env.BASE_URL}videos/dashboard.mp4`}
                        >
                            <source src={`${import.meta.env.BASE_URL}videos/dashboard.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>


                </motion.div>

                {/* Visual Content (Phone Mockup) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative order-1 lg:order-2 flex justify-center"
                >
                    <motion.div
                        className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden">
                        {/* Screen Content with Image Rotation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                            <AnimatePresence mode="wait">
                                {showIntro ? (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center text-white p-6"
                                    >
                                        <div className="w-32 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl mb-4 flex items-center justify-center shadow-lg px-3">
                                            <span className="text-lg md:text-3xl font-bold whitespace-nowrap text-center">Shamil App</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">شامل آب</h3>
                                        <p className="text-slate-400 text-center text-sm">كل تطبيقاتك في مكان واحد</p>

                                        {/* Floating App Icons */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-20 -right-12 w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg z-20"
                                        >
                                            <Sparkles className="text-white" />
                                        </motion.div>

                                        <motion.div
                                            animate={{ y: [0, 10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="absolute bottom-32 -left-8 w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg z-20"
                                        >
                                            <Play className="text-white fill-white" />
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    <motion.img
                                        key={`image-${currentIndex}`}
                                        src={getImageUrl(currentImage || "")}
                                        alt="تطبيق شامل"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 w-full h-full object-fill"
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-30"></div>
                    </motion.div>

                    {/* Decorative Circle Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full -z-10 blur-2xl"></div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
            >
                <ChevronDown size={32} />
            </motion.div>

        </section>
    );
};

export default Hero;
