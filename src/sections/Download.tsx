import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, CheckCircle2 } from 'lucide-react';

const Download = () => {
    return (
        <section id="download" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-right order-2 lg:order-1"
                        dir="rtl"
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-white leading-tight">
                            حمل التطبيق <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">الآن</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">واستمتع بالتجربة الكاملة</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
                            احصل على أحدث نسخة من تطبيق شامل آب (ShamilApp.apk) واستفد من جميع المميزات والتحسينات الجديدة.
                        </p>

                        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-base md:text-lg">
                            {[
                                'تحديثات دورية ومستمرة',
                                'حجم خفيف وأداء سريع',
                                'متوافق مع جميع أجهزة أندرويد',
                                'آمن وخالي من الإعلانات المزعجة'
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 justify-end text-slate-200"
                                >
                                    <span>{item}</span>
                                    <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                                </motion.li>
                            ))}
                        </ul>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/src/apk/app-debug.apk"
                            download="ShamilApp.apk"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-lg md:text-xl shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/40 transition-all"
                        >
                            <DownloadIcon size={24} />
                            <span>تحميل التطبيق</span>
                        </motion.a>

                        <p className="mt-3 md:mt-4 text-xs md:text-sm text-slate-400">
                            الإصدار: 1.1.0 | الحجم: 30MB | التحديث: 2025
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-full max-w-xs md:max-w-md">
                            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full animate-pulse-slow"></div>
                            <Smartphone size={300} strokeWidth={0.5} className="text-white/90 relative z-10 drop-shadow-2xl w-full h-auto" />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-1/4 -right-10 md:-right-12 bg-white text-primary-600 p-3 md:p-4 rounded-2xl shadow-lg z-20 font-bold text-sm md:text-base whitespace-nowrap"
                            >
                                <div className="flex items-center gap-2">
                                    <span>مجاني 100%</span>
                                    <CheckCircle2 size={20} className="text-green-500" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Download;
