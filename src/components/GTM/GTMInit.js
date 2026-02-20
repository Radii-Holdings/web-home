'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function GTMInit() {
    useEffect(() => {
        // Initial Consent State
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }

        const savedConsent = typeof window !== 'undefined' ? localStorage.getItem('cookie-consent') : null;

        if (savedConsent === 'granted') {
            gtag('consent', 'default', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted',
            });
        } else {
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
            });
        }

        // Helper to update consent globally
        window.__setGtmConsent = (status) => {
            gtag('consent', 'update', {
                'ad_storage': status,
                'ad_user_data': status,
                'ad_personalization': status,
                'analytics_storage': status,
            });
        };
    }, []);

    if (!GTM_ID || GTM_ID === 'GTM-XXXXXXX') {
        return null;
    }

    return (
        <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
            }}
        />
    );
}
