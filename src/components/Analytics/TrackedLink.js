"use client";

import Link from "next/link";

const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
};

export default function TrackedLink({
  href,
  children,
  className,
  eventName = "cta_click",
  eventParams = {},
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    trackEvent(eventName, {
      link_url: typeof href === "string" ? href : "",
      ...eventParams,
    });

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

export { trackEvent };
