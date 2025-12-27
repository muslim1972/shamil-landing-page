import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface DownloadContextType {
    isDownloading: boolean;
    handleDownload: (e: React.MouseEvent) => void;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    downloadedApkPath: string;
    resetDownload: () => void;
}

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

export const DownloadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [downloadedApkPath, setDownloadedApkPath] = useState('');

    // الكشف عن بيئة التشغيل (داخل التطبيق أم متصفح عادي)
    const isEmbedded = window.parent !== window;

    // الاستماع لرسائل من التطبيق الرئيسي
    React.useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log('📩 Landing Page received message:', event.data);

            // معالجة رسالة اكتمال التحميل
            if (event.data?.type === 'DOWNLOAD_COMPLETE') {
                console.log('✅ Download completed, re-enabling buttons');
                setIsDownloading(false);
            }

            // معالجة رسالة فشل التحميل
            if (event.data?.type === 'DOWNLOAD_FAILED') {
                console.log('❌ Download failed, re-enabling buttons');
                setIsDownloading(false);
            }
        };

        // إضافة المستمع فقط إذا كنا داخل iframe
        if (isEmbedded) {
            window.addEventListener('message', handleMessage);
            return () => window.removeEventListener('message', handleMessage);
        }
    }, [isEmbedded]);

    const resetDownload = () => {
        setIsDownloading(false);
        setShowModal(false);
        setDownloadedApkPath('');
    };

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();

        if (isDownloading) return;

        setIsDownloading(true);

        const downloadUrl = `${window.location.origin}${import.meta.env.BASE_URL}apk/ShamilApp.apk`;

        // التحقق إذا كنا في iframe
        if (isEmbedded) {
            // داخل التطبيق - إرسال رسالة للتطبيق الأم
            console.log('PostMessage: Sending DOWNLOAD_APK to parent', { url: downloadUrl });
            window.parent.postMessage({
                type: 'DOWNLOAD_APK',
                url: downloadUrl,
                filename: 'ShamilApp.apk'
            }, '*');

            // لا نعيد التفعيل تلقائياً - ننتظر رسالة DOWNLOAD_COMPLETE من التطبيق
            // سيتم إعادة التفعيل عند استقبال رسالة من التطبيق الرئيسي
        } else {
            // في المتصفح - بدء التحميل وعرض المودال
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'ShamilApp.apk';
            link.click();

            setDownloadedApkPath(downloadUrl);
            setShowModal(true);

            // في المتصفح، لا نعيد تعيين setIsDownloading(false) أوتوماتيكياً
            // سيتم ذلك عند إغلاق المودال عن طريق استدعاء resetDownload
        }
    };

    return (
        <DownloadContext.Provider value={{ isDownloading, handleDownload, showModal, setShowModal, downloadedApkPath, resetDownload }}>
            {children}
        </DownloadContext.Provider>
    );
};

export const useDownload = () => {
    const context = useContext(DownloadContext);
    if (context === undefined) {
        throw new Error('useDownload must be used within a DownloadProvider');
    }
    return context;
};
