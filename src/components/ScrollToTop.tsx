import { useState, useEffect, useCallback } from 'react';
import { ChevronsUp, ChevronsDown } from 'lucide-react';

const ScrollToTop = () => {
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const checkScrollPosition = useCallback(() => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        const threshold = 300;

        // إظهار زر الأعلى إذا تجاوز المستخدم الـ threshold
        setShowScrollUp(scrollTop > threshold);

        // إظهار زر الأسفل إذا لم يصل المستخدم لنهاية الصفحة
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;
        setShowScrollDown(!isAtBottom && scrollHeight > clientHeight + threshold);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition(); // فحص أولي عند التحميل

        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, [checkScrollPosition]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const buttonBaseClass = `
        p-2 rounded-full
        bg-slate-900/50 dark:bg-white/50 backdrop-blur-sm
        text-white dark:text-slate-900 shadow-lg border border-white/20 dark:border-slate-900/20
        transform transition-all duration-300 ease-in-out
        hover:bg-slate-900 hover:dark:bg-white hover:scale-110 hover:shadow-2xl
        active:scale-95
    `;

    return (
        <div className="fixed bottom-24 left-8 z-[9999] flex flex-col gap-2">
            {/* زر التمرير للأعلى */}
            <button
                onClick={scrollToTop}
                className={`
                    ${buttonBaseClass}
                    ${showScrollUp ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}
                `}
                aria-label="التمرير للأعلى"
            >
                <ChevronsUp size={18} />
            </button>

            {/* زر التمرير للأسفل */}
            <button
                onClick={scrollToBottom}
                className={`
                    ${buttonBaseClass}
                    ${showScrollDown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}
                `}
                aria-label="التمرير للأسفل"
            >
                <ChevronsDown size={18} />
            </button>
        </div>
    );
};

export default ScrollToTop;
