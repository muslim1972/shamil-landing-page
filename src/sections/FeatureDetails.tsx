import { motion } from 'framer-motion';
import { Camera, PlayCircle, MessageCircle, Gamepad2, BrainCircuit, Activity, Heart, Share2, Send, Mic, Image as ImageIcon, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

const FeatureDetails = () => {
    const details = [
        {
            id: 'shagram',
            title: 'ShamaGram',
            subtitle: 'عالمك الاجتماعي الخاص',
            description: 'منصة تواصل اجتماعي متكاملة تتيح لك مشاركة يومياتك وصورك مع من تحب في بيئة آمنة ومحافظة.',
            features: [
                { icon: <Heart className="text-pink-500" />, text: 'نظام إعجاب وتفاعل متطور' },
                { icon: <MessageCircle className="text-pink-500" />, text: 'تعليقات ومحادثات فورية' },
                { icon: <Share2 className="text-pink-500" />, text: 'مشاركة سهلة وسريعة' },
            ],
            interfaceDescription: 'واجهة عصرية تشبه انستغرام ولكن بلمسة خاصة. زر الكاميرا العائم يتيح لك التقاط اللحظات فوراً، وشريط القصص في الأعلى يعرض تحديثات أصدقائك.',
            color: 'from-pink-500 to-rose-600',
            lightColor: 'bg-pink-50 dark:bg-pink-900/10',
            bgGradient: 'from-pink-100 to-rose-100 dark:from-pink-900/40 dark:to-rose-900/40',
            icon: <Camera size={40} className="text-white" />,
            videoPlaceholder: 'فيديو استعراض ShamaGram'
        },
        {
            id: 'shamatube',
            title: 'ShamaTube',
            subtitle: 'متعة المشاهدة الهادفة',
            description: 'مكتبة فيديو ضخمة تضم محتوى تعليمي، ترفيهي، وثقافي مختار بعناية ليناسب جميع أفراد الأسرة.',
            features: [
                { icon: <PlayCircle className="text-red-500" />, text: 'مشغل فيديو متقدم وسريع' },
                { icon: <CheckCircle2 className="text-red-500" />, text: 'محتوى منقى وآمن 100%' },
                { icon: <Activity className="text-red-500" />, text: 'قوائم تشغيل ذكية' },
            ],
            interfaceDescription: 'تصميم انسيابي يركز على المحتوى. تصفح الفيديوهات بالسحب العمودي (مثل تيك توك) أو العرض التقليدي. أزرار تحكم ذكية تظهر عند الحاجة.',
            color: 'from-red-500 to-orange-600',
            lightColor: 'bg-red-50 dark:bg-red-900/10',
            bgGradient: 'from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40',
            icon: <PlayCircle size={40} className="text-white" />,
            videoPlaceholder: 'فيديو استعراض ShamaTube'
        },
        {
            id: 'chat',
            title: 'المحادثات الفورية',
            subtitle: 'تواصل بلا حدود',
            description: 'نظام دردشة فوري يضمن لك البقاء على اتصال دائم مع عائلتك وأصدقائك بخصوصية تامة.',
            features: [
                { icon: <Send className="text-indigo-500" />, text: 'إرسال رسائل نصية وصوتية' },
                { icon: <ImageIcon className="text-indigo-500" />, text: 'مشاركة الصور والملفات والفيديوهات' },
                { icon: <Mic className="text-indigo-500" />, text: 'تسجيلات صوتية عالية الوضوح' },
            ],
            interfaceDescription: 'واجهة محادثة نظيفة وسريعة. فقاعات الرسائل ملونة لتمييز المرسل والمستقبل. إمكانية الرد السريع وتثبيت المحادثات المهمة.',
            color: 'from-indigo-500 to-blue-600',
            lightColor: 'bg-indigo-50 dark:bg-indigo-900/10',
            bgGradient: 'from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40',
            icon: <MessageCircle size={40} className="text-white" />,
            videoPlaceholder: 'فيديو استعراض المحادثات',
            widget: 'images/Wedget.jpeg'
        },
        {
            id: 'games',
            title: 'ألعاب وتحديات',
            subtitle: 'وقت المرح والذكاء',
            description: 'مجموعة متنوعة من الألعاب التي تنمي الذكاء والذاكرة، بالإضافة إلى ألعاب ترفيهية لقضاء وقت ممتع.',
            features: [
                { icon: <BrainCircuit className="text-purple-500" />, text: 'ألعاب ذكاء وألغاز' },
                { icon: <Gamepad2 className="text-purple-500" />, text: 'تحديات يومية' },
                { icon: <Activity className="text-purple-500" />, text: 'لوحة صدارة للمنافسة' },
            ],
            interfaceDescription: 'واجهة ألعاب حيوية مليئة بالألوان. بطاقات الألعاب تعرض صورة اللعبة وزر "العب الآن" البارز. تأثيرات صوتية وبصرية ممتعة عند الفوز.',
            color: 'from-purple-500 to-violet-600',
            lightColor: 'bg-purple-50 dark:bg-purple-900/10',
            bgGradient: 'from-purple-100 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40',
            icon: <Gamepad2 size={40} className="text-white" />,
            videoPlaceholder: 'فيديو استعراض الألعاب'
        },
        {
            id: 'learn',
            title: 'تعلم واكتشف',
            subtitle: 'رحلة المعرفة المستمرة',
            description: 'منصة تعليمية شاملة تقدم دورات ودروساً في مختلف المجالات لتطوير مهاراتك الشخصية والمهنية.',
            features: [
                { icon: <BrainCircuit className="text-yellow-500" />, text: 'دروس تفاعلية ممتعة' },
                { icon: <Activity className="text-yellow-500" />, text: 'تتبع تقدمك لحظة بلحظة' },
                { icon: <CheckCircle2 className="text-yellow-500" />, text: 'شهادات إنجاز فورية' },
            ],
            interfaceDescription: 'تصميم يشجع على التعلم. لوحة تحكم تعرض تقدمك في الدورات. مشغل دروس يدعم الملاحظات والإشارات المرجعية.',
            color: 'from-yellow-500 to-amber-600',
            lightColor: 'bg-yellow-50 dark:bg-yellow-900/10',
            bgGradient: 'from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40',
            icon: <BrainCircuit size={40} className="text-white" />,
            videoPlaceholder: 'فيديو استعراض التعلم'
        },
        {
            id: 'health',
            title: 'صحة الجهاز',
            subtitle: 'جهازك في أفضل حالاته',
            description: 'أدوات صيانة متقدمة لفحص أداء جهازك، تنظيف الذاكرة، وتحسين سرعة النظام بضغطة زر.',
            features: [
                { icon: <Activity className="text-cyan-500" />, text: 'فحص شامل للنظام' },
                { icon: <Zap className="text-cyan-500" />, text: 'تسريع الأداء فوراً' },
                { icon: <ShieldCheck className="text-cyan-500" />, text: 'حماية من الفيروسات' },
            ],
            interfaceDescription: 'واجهة بسيطة ومباشرة. عدادات دائرية تعرض حالة البطارية والذاكرة. زر "فحص الآن" الكبير يتوسط الشاشة لسهولة الاستخدام.',
            color: 'from-cyan-500 to-teal-600',
            lightColor: 'bg-cyan-50 dark:bg-cyan-900/10',
            bgGradient: 'from-cyan-100 to-teal-100 dark:from-cyan-900/40 dark:to-teal-900/40',
            icon: <Activity size={40} className="text-white" />,
            videoPlaceholder: 'فيديو استعراض الصحة'
        }
    ];

    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 space-y-32">
                {details.map((item, index) => (
                    <div
                        id={`${item.id}-detail`}
                        key={item.id}
                        className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 p-8 lg:p-12 rounded-[3rem]`}
                    >
                        {/* Artistic Background Layer - Always Visible */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} rounded-[3rem] -z-20`}></div>
                        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] rounded-[3rem] -z-10"></div>

                        {/* Floating Blobs for more artistic feel */}
                        <div className={`absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br ${item.color} opacity-20 blur-3xl rounded-full -z-10`}></div>
                        <div className={`absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br ${item.color} opacity-20 blur-3xl rounded-full -z-10`}></div>

                        {/* Content Side - Animated */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-right relative z-10"
                            dir="rtl"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-6 transform rotate-3 hover:rotate-6 transition-transform`}>
                                {item.icon}
                            </div>

                            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className={`text-lg font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-6`}>{item.subtitle}</p>

                            <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8">
                                {item.description}
                            </p>

                            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-slate-700 shadow-sm mb-8">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Activity size={20} className="text-slate-500" />
                                    تجربة المستخدم
                                </h4>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                                    {item.interfaceDescription}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className={`p-2 rounded-full ${item.lightColor} bg-white dark:bg-slate-800 shadow-sm`}>
                                            {feature.icon}
                                        </div>
                                        <span className="font-medium text-slate-800 dark:text-slate-100">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Visual/Video Side - Animated */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 w-full relative z-10"
                        >
                            {/* Gallery Section for Chat (only for chat feature) */}
                            {item.id === 'chat' && (
                                <div className="mb-12 space-y-8">
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">معرض المحادثات</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                            {[
                                                { num: 2, label: 'واجهة المحادثات الرئيسية' },
                                                { num: 3, label: 'واجهة المحادثة المفتوحة مع اسم الطرف الاخر وصورته' },
                                                { num: 4, label: 'امكانية ارشفة المحادثات' },
                                                { num: 5, label: 'محادثة حية مع الذكاء الصناعي' },
                                                { num: 6, label: 'امكانية مشاركة الملفات والصور والفيديوهات والموقع' }
                                            ].map((photo) => (
                                                <motion.div
                                                    key={`p${photo.num}`}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="relative group flex flex-col"
                                                >
                                                    <div className="overflow-hidden rounded-xl shadow-lg mb-3">
                                                        <img
                                                            src={`images/p${photo.num}.png`}
                                                            alt={photo.label}
                                                            className="w-full h-auto object-cover group-hover:brightness-110 transition-all"
                                                        />
                                                    </div>
                                                    <p className="text-center text-sm font-medium text-slate-700 dark:text-slate-300 px-2">
                                                        {photo.label}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {item.widget && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
                                        >
                                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">واجهة التطبيق الكاملة</h4>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="relative rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto"
                                            >
                                                <img
                                                    src={item.widget?.replace('/', '')}
                                                    alt="واجهة تطبيق المحادثات"
                                                    className="w-full h-auto object-cover"
                                                />
                                            </motion.div>
                                            <p className="text-center text-slate-600 dark:text-slate-400 mt-4">
                                                واجهة المحادثات كاملة مع جميع الأدوات والميزات المتقدمة
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                            )}

                            <div className="relative group cursor-pointer">
                                {/* Decorative Background Blob behind video */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br ${item.color} opacity-30 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500`}></div>

                                {/* Video Container */}
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80 dark:border-slate-800/80 aspect-video bg-slate-900 transform transition-transform duration-500 hover:scale-[1.02]">
                                    {/* Placeholder Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center bg-black/40 hover:bg-black/30 transition-colors">
                                        <div className={`w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/30`}>
                                            <PlayCircle size={40} className="text-white fill-white" />
                                        </div>
                                        <span className="font-bold text-lg drop-shadow-md">{item.videoPlaceholder}</span>
                                        <p className="text-sm text-slate-200 mt-2 drop-shadow-md">اضغط للمشاهدة</p>
                                    </div>

                                    {/* Simulated UI Elements for "Realism" */}
                                    <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <div className={`h-full w-1/3 bg-gradient-to-r ${item.color}`}></div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
                                >
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}></div>
                                    <span className="font-bold text-sm text-slate-900 dark:text-white">مباشر</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureDetails;
