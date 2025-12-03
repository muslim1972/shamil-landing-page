import { motion } from 'framer-motion';

const Showcase = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Image Container */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                        <img
                            src="/images/p1.jpg"
                            alt="تطبيق شامل - عرض توضيحي"
                            className="w-full h-auto object-cover"
                        />

                        {/* Overlay Gradient for Better Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Optional Caption */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-center mt-8"
                        dir="rtl"
                    >
                        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
                            استكشف تجربة استخدام فريدة ومتكاملة
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
