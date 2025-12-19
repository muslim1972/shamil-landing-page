import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DownloadSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    apkPath: string;
}

const DownloadSuccessModal = ({ isOpen, onClose, apkPath }: DownloadSuccessModalProps) => {
    const [isAppEnvironment, setIsAppEnvironment] = useState(false);

    useEffect(() => {
        // التحقق مما إذا كنا داخل التطبيق (iframe)
        setIsAppEnvironment(window.parent !== window);
    }, []);

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

    const handleAction = () => {
        if (isAppEnvironment) {
            // داخل التطبيق: إرسال أمر التثبيت
            window.parent.postMessage({
                type: 'INSTALL_APK',
                path: apkPath
            }, '*');
            // إغلاق المودال لأن التطبيق سيتولى الأمر
            onClose();
        } else {
            // في المتصفح: لا يمكن التثبيت التلقائي
            // نقوم بإرشاد المستخدم أو إعادة التحميل إذا فشل
            const link = document.createElement('a');
            link.href = apkPath;
            link.download = 'ShamilApp.apk';
            link.click();
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
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Dialog Content - Mimicking Shadcn UI Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="relative bg-white dark:bg-slate-900 rounded-lg shadow-lg w-full max-w-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
                        dir="rtl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>

                        <div className="p-6">
                            {/* Header */}
                            <div className="flex flex-col space-y-1.5 text-center sm:text-right">
                                <h2 className="text-lg font-semibold leading-none tracking-tight flex items-center gap-2">
                                    <Download className="h-5 w-5 text-green-600" />
                                    اكتمل تحميل التحديث
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 pt-2">
                                    تم حفظ ملف التحديث بنجاح في جهازك.
                                    {isAppEnvironment
                                        ? " هل تريد تثبيت التحديث الآن؟"
                                        : " يمكنك الآن فتح الملف من قائمة التنزيلات لتثبيته."}
                                </p>
                            </div>

                            {/* Content based on environment */}
                            {!isAppEnvironment && (
                                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-md text-xs text-blue-800 dark:text-blue-300">
                                    ℹ️ ملاحظة: في المتصفحات، يجب تفعيل خيار "تثبيت التطبيقات من مصادر غير معروفة" عند فتح الملف لأول مرة.
                                </div>
                            )}

                            {/* Footer */}
                            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 sm:space-x-reverse mt-6 gap-2">
                                <button
                                    onClick={onClose}
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2"
                                >
                                    إغلاق
                                </button>
                                <button
                                    onClick={handleAction}
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-slate-50 hover:bg-green-700 dark:bg-green-600 dark:text-slate-50 dark:hover:bg-green-700 h-10 px-4 py-2 flex-1 sm:flex-none"
                                >
                                    {isAppEnvironment ? "تثبيت الآن" : "إعادة التحميل"}
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
