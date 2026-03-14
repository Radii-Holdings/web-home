import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";

const SiteNavigationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": `${siteMetadata.siteUrl}/`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "About",
        "url": `${siteMetadata.siteUrl}/about`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Contact",
        "url": `${siteMetadata.siteUrl}/contact`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Blogs",
        "url": `${siteMetadata.siteUrl}/blogs`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Console",
        "url": "https://console.radii.in/"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Algo Trading Platform",
        "url": `${siteMetadata.siteUrl}/algo-trading-platform-india`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Forex Algo Execution",
        "url": `${siteMetadata.siteUrl}/forex-algo-execution-india`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 8,
        "name": "Quant Research Services",
        "url": `${siteMetadata.siteUrl}/quant-research-services-india`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 9,
        "name": "Risk Managed Trading Automation",
        "url": `${siteMetadata.siteUrl}/risk-managed-trading-automation`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 10,
        "name": "Multi-broker order routing",
        "url": `${siteMetadata.siteUrl}/multi-broker-order-routing`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 11,
        "name": "Tutorial",
        "url": `${siteMetadata.siteUrl}/tutorial`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SiteNavigationSchema;
