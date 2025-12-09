import { FileText, CheckCircle, AlertCircle, UserCheck, RefreshCw, Scale } from 'lucide-react';

const TermsOfService = () => {
    const sections = [
        {
            icon: CheckCircle,
            title: "القبول بالشروط",
            content: "باستخدامك لتطبيق Shamil App، فإنك تقر وتوافق على الالتزام بهذه الشروط والأحكام، وجميع القوانين واللوائح المعمول بها. إذا كنت لا توافق على أي من هذه الشروط، فلا تستخدم التطبيق.",
            gradient: "from-indigo-500 to-blue-500",
            accentColor: "bg-indigo-500"
        },
        {
            icon: UserCheck,
            title: "طبيعة الخدمة ومسؤولية المستخدم",
            content: null,
            subsections: [
                {
                    subtitle: "Shamil App هو أداة تشغيل",
                    text: "يوفر التطبيق واجهة لتشغيل وتنزيل الملفات المخزنة في حساب Google Drive الخاص بك، بناءً على الصلاحيات التي تمنحها للتطبيق."
                },
                {
                    subtitle: "المسؤولية عن المحتوى",
                    text: "أنت المسؤول الوحيد عن جميع المحتويات (الملفات) التي تختار الوصول إليها أو تشغيلها أو تنزيلها باستخدام Shamil App."
                },
                {
                    subtitle: "القانونية وحقوق الملكية",
                    text: "تضمن أن لديك الحقوق الكاملة لاستخدام وتشغيل جميع الملفات التي تصل إليها عبر التطبيق، وأن هذه الملفات لا تنتهك أي قوانين معمول بها أو حقوق ملكية فكرية لأطراف ثالثة."
                },
                {
                    subtitle: "إخلاء المسؤولية عن المحتوى",
                    text: "لا يتحمل Shamil App أي مسؤولية قانونية عن المحتوى الذي يقوم المستخدم بالوصول إليه أو تخزينه أو مشاركته.",
                    isWarning: true
                }
            ],
            gradient: "from-purple-500 to-pink-500",
            accentColor: "bg-purple-500"
        },
        {
            icon: AlertCircle,
            title: "إنهاء الخدمة",
            content: "نحتفظ بالحق في تعليق أو إنهاء وصولك إلى التطبيق في أي وقت، دون إشعار مسبق، لأي سبب كان، بما في ذلك انتهاكك لهذه الشروط.",
            gradient: "from-orange-500 to-red-500",
            accentColor: "bg-orange-500"
        },
        {
            icon: RefreshCw,
            title: "التعديلات على الشروط",
            content: "يحق لنا مراجعة شروط الخدمة هذه في أي وقت دون إشعار. باستخدامك لهذا التطبيق، فإنك توافق على الالتزام بالنسخة الحالية من هذه الشروط.",
            gradient: "from-teal-500 to-cyan-500",
            accentColor: "bg-teal-500"
        }
    ];

    return (
        <section id="terms-of-service" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-8 shadow-2xl shadow-indigo-500/50 animate-float">
                        <FileText className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        شروط الخدمة
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-purple-400 rounded-full"></div>
                        <Scale className="w-6 h-6 text-purple-400" />
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-transparent rounded-full"></div>
                    </div>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        يُرجى قراءة شروط الخدمة هذه بعناية قبل استخدام تطبيق Shamil App. يعني استخدامك للتطبيق موافقتك على هذه الشروط
                    </p>
                </div>

                {/* Content Cards */}
                <div className="space-y-8">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 transform hover:scale-[1.02] border border-white/10 hover:border-purple-400/50"
                                style={{
                                    animationDelay: `${index * 200}ms`,
                                }}
                            >
                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700 blur-xl`}></div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start gap-6 mb-8">
                                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-bold text-white mb-2">
                                                {section.title}
                                            </h3>
                                            <div className={`w-20 h-1 bg-gradient-to-r ${section.gradient} rounded-full`}></div>
                                        </div>
                                        <div className="flex-shrink-0 text-6xl font-bold text-white/5">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    {section.content && (
                                        <p className="text-slate-300 text-lg leading-relaxed text-right pr-22">
                                            {section.content}
                                        </p>
                                    )}

                                    {/* Subsections */}
                                    {section.subsections && (
                                        <div className="space-y-6 pr-22">
                                            {section.subsections.map((sub, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className={`relative bg-white/5 rounded-2xl p-6 border-r-4 ${sub.isWarning
                                                            ? 'border-red-500 bg-red-500/5'
                                                            : `border-${section.gradient.split('-')[1]}-500`
                                                        } hover:bg-white/10 transition-all duration-500`}
                                                >
                                                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                                                        <span className={`w-2 h-2 rounded-full ${section.accentColor} animate-pulse`}></span>
                                                        {sub.subtitle}
                                                    </h4>
                                                    <p className="text-slate-400 leading-relaxed text-right">
                                                        {sub.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Decorative corner gradient */}
                                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${section.gradient} opacity-10 rounded-tr-full`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* Agreement Notice */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-5 rounded-2xl shadow-2xl shadow-purple-500/30 border border-white/20">
                        <CheckCircle className="w-8 h-8 text-white animate-pulse" />
                        <span className="text-white font-bold text-lg">
                            استخدامك للتطبيق يعني موافقتك الكاملة على هذه الشروط
                        </span>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
        </section>
    );
};

export default TermsOfService;
