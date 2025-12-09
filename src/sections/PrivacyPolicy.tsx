import { Shield, Lock, Database, Eye, FileCheck } from 'lucide-react';

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: Database,
            title: "البيانات التي نجمعها",
            content: [
                "نحن نجمع عنوان بريدك الإلكتروني الأساسي واسمك (كما هو مسجل في حسابك بجوجل) لأغراض المصادقة والتعريف.",
                "مهم: يطلب تطبيق Shamil App الوصول إلى مكتبة ملفاتك على Google Drive (النطاق المطلوب هو .../auth/drive) بهدف وحيد هو تمكينك من تشغيل وتنزيل ملفات الفيديو التي قمت برفعها مسبقاً بنفسك. نحن نستخدم هذه البيانات فقط لغرض توفير هذه الخدمة."
            ],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Eye,
            title: "كيفية استخدام البيانات",
            content: [
                "تُستخدم بيانات Drive التي يتم الوصول إليها فقط لتشغيل ميزات الفيديو التي تطلبها داخل التطبيق.",
                "لا يتم تخزين أو نقل أو مشاركة أي من ملفات Drive الخاصة بك على خوادم Shamil App أو مع أي طرف ثالث."
            ],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Lock,
            title: "أمن البيانات",
            content: [
                "نحن ملتزمون بحماية أمن بياناتك. يتم التعامل مع جميع البيانات وفقاً لأفضل ممارسات الأمان."
            ],
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section id="privacy-policy" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl shadow-blue-500/30 animate-float">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        سياسة الخصوصية
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        نحن نقدّر خصوصيتك ونلتزم بحماية بياناتك الشخصية
                    </p>
                </div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                }}
                            >
                                {/* Gradient border effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                                {/* Icon */}
                                <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-6 text-slate-800 relative">
                                    {section.title}
                                    <span className={`absolute -bottom-2 right-0 w-0 h-0.5 bg-gradient-to-r ${section.gradient} group-hover:w-full transition-all duration-500`}></span>
                                </h3>

                                {/* Content */}
                                <div className="space-y-4">
                                    {section.content.map((paragraph, pIndex) => (
                                        <div key={pIndex} className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br ${section.gradient} mt-2 animate-pulse`}></div>
                                            <p className="text-slate-600 leading-relaxed text-right flex-1">
                                                {paragraph}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative corner */}
                                <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${section.gradient} opacity-5 rounded-br-full`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-slate-200/50">
                        <FileCheck className="w-6 h-6 text-green-600" />
                        <span className="text-slate-700 font-medium">
                            ملتزمون بخصوصيتك وأمان بياناتك
                        </span>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
        </section>
    );
};

export default PrivacyPolicy;
