import { Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12 text-right" dir="rtl">

                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center font-bold">ش</div>
                            <span className="text-xl font-bold">شامل آب</span>
                        </div>
                        <p className="leading-relaxed mb-6 max-w-md ml-auto">
                            تطبيق شامل يهدف إلى توفير بيئة رقمية آمنة ومتكاملة للمستخدم العربي، نجمع بين التواصل والتعلم والترفيه في مكان واحد.
                        </p>
                        <div className="flex gap-4 justify-end md:justify-start">
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:text-primary-400 transition-colors">الرئيسية</a></li>
                            <li><a href="#features" className="hover:text-primary-400 transition-colors">المميزات</a></li>
                            <li><a href="#about" className="hover:text-primary-400 transition-colors">عن التطبيق</a></li>
                            <li><a href="#download" className="hover:text-primary-400 transition-colors">التحميل</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
                        <ul className="space-y-2">
                            <li>الدعم الفني</li>
                            <li>سياسة الخصوصية</li>
                            <li>شروط الاستخدام</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row items-center justify-between gap-4" dir="rtl">
                    <p>© 2024 شامل آب. جميع الحقوق محفوظة.</p>
                    <p className="flex items-center gap-1 text-sm">
                        صنع بـ <Heart size={14} className="text-red-500 fill-red-500" /> من أجل مجتمع أفضل
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
