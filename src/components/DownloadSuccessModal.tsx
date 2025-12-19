import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface DownloadSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    apkPath: string;
}

const DownloadSuccessModal = ({ isOpen, onClose, apkPath }: DownloadSuccessModalProps) => {
    // منع التمرير عند فتح المودال
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleInstallNow = () => {
        // محاولة فتح ملف APK مباشرة (يعمل على Android فقط)
        const link = document.createElement('a');
        link.href = apkPath;
        link.target = '_blank';
        link.click();

        // إرسال رسالة للتطبيق الرئيسي إذا كان في iframe
        if (window.parent !== window) {
            window.parent.postMessage({
                type: 'INSTALL_APK',
                path: apkPath
            }, '*');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
                        dir="rtl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 left-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors z-10"
                            aria-label="إغلاق"
                        >
                            <X size={20} className="text-slate-500 dark:text-slate-400" />
                        </button>

                        {/* Header */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30"
                            >
                                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                            </motion.div>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                                ✅ تم التحميل بنجاح!
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                ملف <span className="font-bold text-green-600 dark:text-green-400">ShamilApp.apk</span> جاهز للتثبيت
                            </p>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-4">
                            {/* خطوات التثبيت */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-4">
                                <h3 className="text-base font-bold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
                                    <span>📱</span>
                                    <span>خطوات التثبيت:</span>
                                </h3>
                                <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">1️⃣</span>
                                        <span>افتح تطبيق <strong>"التنزيلات"</strong> أو <strong>"الملفات"</strong> في جهازك</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">2️⃣</span>
                                        <span>ابحث عن ملف: <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-xs font-mono">ShamilApp.apk</code></span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">3️⃣</span>
                                        <span>اضغط على الملف لبدء التثبيت</span>
                                    </li>
                                </ol>
                            </div>

                            {/* تنبيه للأذونات */}
                            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
                                <p className="text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                                    <span className="text-base flex-shrink-0">⚠️</span>
                                    <span>قد تحتاج للسماح بتثبيت التطبيقات من مصادر غير معروفة في إعدادات جهازك</span>
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 pt-2">
                                {/* زر التثبيت الآن - أزرق */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleInstallNow}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                                >
                                    <span>📲</span>
                                    <span>التثبيت الآن</span>
                                </motion.button>

                                {/* زر حسناً */}
                                <button
                                    onClick={onClose}
                                    className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-xl font-medium text-sm transition-colors"
                                >
                                    حسناً، فهمت
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DownloadSuccessModal;
