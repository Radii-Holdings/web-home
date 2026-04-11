import React from "react";
import siteMetadata from "@/src/utils/siteMetaData";

const SiteNavigationSchema = () => {
  const { siteUrl, title, author, email, linkedin, twitter, facebook, github, siteLogo } = siteMetadata;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": author,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}${siteLogo}`,
          "width": 192,
          "height": 192
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": email,
            "contactType": "customer service"
          }
        ],
        "sameAs": [
          linkedin,
          twitter,
          facebook,
          github
        ].filter(Boolean)
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": title,
        "description": siteMetadata.description,
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "inLanguage": siteMetadata.language
      },
      {
        "@type": "ItemList",
        "name": "Navigation Menu",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Home",
            "url": `${siteUrl}/`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "About",
            "url": `${siteUrl}/about`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Contact",
            "url": `${siteUrl}/contact`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Research",
            "url": `${siteUrl}/categories/all`
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
            "url": `${siteUrl}/algo-trading-platform-india`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 7,
            "name": "Forex Algo Execution",
            "url": `${siteUrl}/forex-algo-execution-india`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 8,
            "name": "Quant Research Services",
            "url": `${siteUrl}/quant-research-services-india`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 9,
            "name": "Risk Managed Trading Automation",
            "url": `${siteUrl}/risk-managed-trading-automation`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 10,
            "name": "Multi-broker order routing",
            "url": `${siteUrl}/multi-broker-order-routing`
          },
          {
            "@type": "SiteNavigationElement",
            "position": 11,
            "name": "Tutorial",
            "url": `${siteUrl}/tutorial`
          }
        ]
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
