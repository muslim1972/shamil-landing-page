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

            // إعادة التفعيل بعد فترة قصيرة للسماح بالمحاولة مرة أخرى إذا فشل
            setTimeout(() => setIsDownloading(false), 5000);
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
