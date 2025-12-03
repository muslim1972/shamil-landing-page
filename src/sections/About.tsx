import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-secondary-600 font-bold tracking-wider uppercase text-sm">رؤيتنا</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2">
                            لماذا تطبيق شامل؟
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 relative"
                        dir="rtl"
                    >
                        <Quote className="absolute top-8 right-8 text-primary-100 dark:text-slate-800 w-16 h-16 -z-0 transform -scale-x-100" />

                        <div className="relative z-10 space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-loose">
                            <p>
                                <span className="font-bold text-primary-600 text-xl">تطبيق (شامل آب) Shamil App :</span> هو تطبيق يجمع اغلب البرامج التي يحتاجها المستخدم في مكان واحد، ويهدف الى التحول من تبعية التطبيقات الأجنبية والخارجية التي اما لاتتوافق مع مجتمعاتنا وتقاليدها او انها تتسبب في تسريب معلوماتنا الشخصية وهدر خصوصيتنا والتي أيضا تتعارض مع ضوابط ديننا ومجتمعاتنا او على اقل تقدير تستنزف مقدراتنا الاقتصادية وتهدر مورد من موارد التمويل التي تجعل تدوير الإمكانات في بيئة واحدة ليعود النفع بشكل حلقي الى من انفق بطريقة حتمية اذا ما اعتمد نظام التكامل بين المنتج والمستهلك في بيئة واحدة.
                            </p>

                            <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-6"></div>

                            <p>
                                وفيما يلي تبويبات نرجو ان تكون بسيطة وسهلة قدر الإمكان لتجعل المستخدم يتعرف على التطبيق بشكل يمكنه من استخدامه بكامل طاقته وخصائصه، ونحن مستمرون بتطويره ونرحب بالأفكار والاقتراحات والانتقادات البناءة.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                                ش
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">فريق تطوير شامل</h4>
                                <p className="text-sm text-slate-500">نحو مستقبل رقمي أفضل</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
