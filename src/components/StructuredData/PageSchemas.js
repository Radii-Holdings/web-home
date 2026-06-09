import siteMetadata from "@/src/utils/siteMetaData";
import { toAbsoluteUrl } from "@/src/utils/pageMetadata";

const JsonLd = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export const AboutPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Radii Labs",
    url: toAbsoluteUrl("/about"),
    description:
      "Learn how Radii Labs approaches quantitative research, broker-aware execution workflows, and trading risk controls for Indian and global market operators.",
    about: {
      "@type": "Organization",
      "@id": `${siteMetadata.siteUrl}/#organization`,
      name: siteMetadata.title,
      url: siteMetadata.siteUrl,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteMetadata.siteUrl}/#website`,
    },
  };

  return <JsonLd schema={schema} />;
};

export const ContactPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Radii Labs",
    url: toAbsoluteUrl("/contact"),
    description:
      "Contact Radii Labs for research reviews, product walkthroughs, broker workflow questions, and trading automation discovery calls.",
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteMetadata.siteUrl}/#organization`,
      name: siteMetadata.title,
      url: siteMetadata.siteUrl,
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: siteMetadata.email,
          contactType: "sales",
          availableLanguage: ["English"],
        },
      ],
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteMetadata.siteUrl}/#website`,
    },
  };

  return <JsonLd schema={schema} />;
};

export const CollectionPageSchema = ({ name, description, path, items = [] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: toAbsoluteUrl(path),
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteMetadata.siteUrl}/#website`,
    },
    about: {
      "@type": "Organization",
      "@id": `${siteMetadata.siteUrl}/#organization`,
    },
    hasPart: items.map((item) => ({
      "@type": "CreativeWork",
      name: item.name,
      url: toAbsoluteUrl(item.url),
    })),
  };

  return <JsonLd schema={schema} />;
};
