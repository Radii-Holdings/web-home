"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const TelegramButton = () => {
  const [open, setOpen] = useState(false);
  const [shareData, setShareData] = useState({ url: "", title: "", desc: "" });
  const pathname = usePathname();

  const handleShare = (url) => {
    if (typeof window === "undefined") return;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(
      document.querySelector("article h1")?.textContent || document.title
    );
    const desc = encodeURIComponent(
      document.querySelector('meta[property="og:description"]')?.content ||
        document.querySelector('meta[name="description"]')?.content ||
        ""
    );

    setShareData({ url, title, desc });
  }, [pathname]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {open && (
        <>
          <div className="relative group">
            <button
              onClick={() =>
                handleShare(
                  `https://www.linkedin.com/shareArticle?mini=true&url=${shareData.url}&title=${shareData.title}&summary=${shareData.desc}`
                )
              }
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all"
              aria-label="Share to LinkedIn"
            >
              <Image src="/svgs/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </button>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-dark text-light text-xs font-bold rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Share on LinkedIn
            </span>
          </div>
          <div className="relative group">
            <button
              onClick={() =>
                handleShare(
                  `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`
                )
              }
              className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all"
              aria-label="Share to Twitter"
            >
              <Image src="/svgs/twitter.svg" alt="Twitter" width={24} height={24} />
            </button>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-dark text-light text-xs font-bold rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Share on Twitter
            </span>
          </div>
        </>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all"
        aria-label="Contact us on Telegram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M9.993 16.2 9.8 20.2c.57 0 .82-.24 1.12-.53l2.68-2.5 5.56 3.97c1.02.57 1.75.27 2.02-.94l3.66-16.2c.34-1.56-.57-2.27-1.56-1.94L1.8 9.2c-1.5.57-1.47 1.38-.25 1.75l4.7 1.47 10.9-6.8c.51-.34.98-.15.59.2l-8.9 8.1Z" />
        </svg>
      </button>
    </div>
  );
};

export default TelegramButton;
