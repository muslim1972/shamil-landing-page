import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, CheckCircle2 } from 'lucide-react';

const Download = () => {
    return (
        <section id="download" className="py-24 bg-gradient-to-br from-primary-600 to-secondary-700 relative overflow-hidden text-white">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-right order-2 lg:order-1"
                        dir="rtl"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            حمل التطبيق الآن
                            <br />
                            <span className="text-primary-200">واستمتع بالتجربة الكاملة</span>
                        </h2>

                        <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-xl ml-auto">
                            احصل على أحدث نسخة من تطبيق شامل آب (ShamilApp.apk) واستفد من جميع المميزات والتحسينات الجديدة.
                        </p>

                        <ul className="space-y-4 mb-10 text-lg">
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
                                    className="flex items-center gap-3 justify-end"
                                >
                                    <span>{item}</span>
                                    <CheckCircle2 className="text-green-400" />
                                </motion.li>
                            ))}
                        </ul>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#" // This will be replaced with the actual APK link later
                            className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
                        >
                            <DownloadIcon size={24} />
                            <span>تحميل ShamilApp.apk</span>
                        </motion.a>

                        <p className="mt-4 text-sm text-primary-200 opacity-80">
                            الإصدار: 1.0.0 | الحجم: 45MB | التحديث: 2024
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full animate-pulse-slow"></div>
                            <Smartphone size={300} strokeWidth={0.5} className="text-white/90 relative z-10 drop-shadow-2xl" />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-1/4 -right-10 bg-white text-primary-600 p-4 rounded-2xl shadow-lg z-20 font-bold"
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
