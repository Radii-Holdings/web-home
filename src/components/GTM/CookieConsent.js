'use client';

import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleConsent = (status) => {
        localStorage.setItem('cookie-consent', status);
        setShowBanner(false);

        // Update GTM Consent Mode
        if (window.__setGtmConsent) {
            window.__setGtmConsent(status);
        }
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-9999 p-6 bg-dark/95 backdrop-blur-xl border-t border-accent/30 flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom duration-700 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="text-base text-light font-mr px-4 text-center md:text-left max-w-3xl leading-relaxed">
                <p>
                    We use cookies to enhance your experience and analyze our traffic. By clicking <span className="text-accent font-bold">"Accept All"</span>, you consent to our use of cookies.
                </p>
            </div>
            <div className="flex gap-4 px-4 w-full md:w-auto">
                <button
                    onClick={() => handleConsent('denied')}
                    className="flex-1 md:flex-none px-8 py-3 text-sm font-bold text-light border border-light/30 hover:border-light hover:bg-light/10 transition-all duration-300 rounded-sm"
                >
                    Reject All
                </button>
                <button
                    onClick={() => handleConsent('granted')}
                    className="flex-1 md:flex-none px-8 py-3 text-sm font-bold bg-accent text-light hover:bg-accent/80 transition-all duration-300 shadow-xl shadow-accent/20 rounded-sm"
                >
                    Accept All
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
