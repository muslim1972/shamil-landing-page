import { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 left-8 z-[9999]
                p-3 rounded-full
                bg-slate-900/80 dark:bg-white/80 backdrop-blur-md
                text-white dark:text-slate-900 shadow-lg border border-white/20 dark:border-slate-900/20
                transform transition-all duration-500 ease-in-out
                hover:bg-slate-900 dark:hover:bg-white hover:scale-110 hover:shadow-2xl
                group
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
            `}
            aria-label="العودة للأعلى"
        >
            <ChevronsUp size={24} className="group-hover:animate-bounce" />
        </button>
    );
};

export default ScrollToTop;
