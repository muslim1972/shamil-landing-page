import { motion } from 'framer-motion';
import { MessageCircle, Camera, PlayCircle, Gamepad2, BrainCircuit, Activity, ShieldCheck, Zap } from 'lucide-react';

const features = [
    {
        id: 'chat',
        title: 'المحادثات الفورية',
        description: 'تواصل سريع وآمن مع من تحب، مع ميزات متقدمة للخصوصية.',
        icon: <MessageCircle className="w-8 h-8 text-indigo-500" />,
        color: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-100 dark:border-indigo-800',
        image: '/images/Wedget.jpeg'
    },
    {
        id: 'shagram',
        title: 'ShamaGram',
        description: 'شارك لحظاتك المميزة مع الأصدقاء والعائلة في بيئة آمنة وممتعة.',
        icon: <Camera className="w-8 h-8 text-pink-500" />,
        color: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-100 dark:border-pink-800'
    },
    {
        id: 'shamatube',
        title: 'ShamaTube',
        description: 'مكتبة ضخمة من الفيديوهات التعليمية والترفيهية المختارة بعناية.',
        icon: <PlayCircle className="w-8 h-8 text-red-500" />,
        color: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-100 dark:border-red-800'
    },
    {
        id: 'games',
        title: 'ألعاب وتحديات',
        description: 'مجموعة من الألعاب الذهنية والترفيهية لتنمية المهارات وقضاء وقت ممتع.',
        icon: <Gamepad2 className="w-8 h-8 text-purple-500" />,
        color: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-100 dark:border-purple-800'
    },
    {
        id: 'learn',
        title: 'تعلم واكتشف',
        description: 'أدوات تعليمية ذكية تساعدك على اكتساب مهارات جديدة يومياً.',
        icon: <BrainCircuit className="w-8 h-8 text-yellow-500" />,
        color: 'bg-yellow-50 dark:bg-yellow-900/20',
        border: 'border-yellow-100 dark:border-yellow-800'
    },
    {
        id: 'health',
        title: 'صحة الجهاز',
        description: 'راقب أداء جهازك وحافظ على كفاءته بأدوات فحص متقدمة.',
        icon: <Activity className="w-8 h-8 text-cyan-500" />,
        color: 'bg-cyan-50 dark:bg-cyan-900/20',
        border: 'border-cyan-100 dark:border-cyan-800'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-600 font-bold tracking-wider uppercase text-sm"
                    >
                        مميزات التطبيق
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2 mb-4"
                    >
                        كل ما تحتاجه في تطبيق واحد
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 text-lg"
                    >
                        استمتع بتجربة متكاملة تجمع بين التواصل، الترفيه، والتعلم في منصة واحدة آمنة وسهلة الاستخدام.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
                    {features.map((feature, index) => (
                        <motion.a
                            href={`#${feature.id}-detail`}
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`block p-8 rounded-3xl border ${feature.border} ${feature.color} hover:shadow-xl transition-all duration-300 group cursor-pointer ${feature.image ? 'flex flex-col' : ''}`}
                        >
                            {feature.image && (
                                <div className="mb-6 rounded-2xl overflow-hidden shadow-md h-48 w-full">
                                        <img
                                            src={`${import.meta.env.BASE_URL}${feature.image?.replace(/^\//, '')}`}
                                            alt={feature.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                            )}
                            <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* Extra Features Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-slate-900 dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-center md:text-right"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8" dir="rtl">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                أمان وخصوصية تامة
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                نحن نضع خصوصيتك في المقام الأول. جميع بياناتك مشفرة ومحمية بأحدث تقنيات الأمان، لتستمتع بتجربة خالية من القلق.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <ShieldCheck size={18} className="text-green-400" />
                                    <span className="text-sm font-medium">تشفير تام</span>
                                </div>
                                <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <Zap size={18} className="text-yellow-400" />
                                    <span className="text-sm font-medium">سرعة فائقة</span>
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <ShieldCheck size={120} className="text-primary-500 opacity-20 md:opacity-100" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
