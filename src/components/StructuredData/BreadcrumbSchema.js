import siteMetadata from "@/src/utils/siteMetaData";

const absoluteUrl = (path) => {
  if (path.startsWith("http")) return path;
  if (path === "/") return siteMetadata.siteUrl;
  return `${siteMetadata.siteUrl}${path}`;
};

const BreadcrumbSchema = ({ items }) => {
  if (!items?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": absoluteUrl(item.url),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BreadcrumbSchema;
