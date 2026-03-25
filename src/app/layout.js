import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
import Script from "next/script";
import TelegramButton from "@/src/components/TelegramButton";
import { Toaster } from "react-hot-toast";
import GTMInit from "../components/GTM/GTMInit";
import CookieConsent from "../components/GTM/CookieConsent";
import SiteNavigationSchema from "../components/StructuredData/SiteNavigationSchema";
import LeadCaptureModal from "../components/LeadCaptureModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const GTM_ID = siteMetadata.gtmId;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GTMInit />
        <SiteNavigationSchema />
      </head>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light"
        )}
      >
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}

        <Header />
        {children}
        <Footer />
        <TelegramButton />
        <Toaster />
        <CookieConsent />
        <LeadCaptureModal />
      </body>
    </html>
  );
}
