import siteMetadata from "./siteMetaData";

export const toAbsoluteUrl = (path = "/") => {
  if (!path) return siteMetadata.siteUrl;
  if (path.startsWith("http")) return path;
  return `${siteMetadata.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

const normalizeOpenGraphImages = (image) => {
  const imageList = Array.isArray(image) ? image : [image];

  return imageList
    .filter(Boolean)
    .map((entry) =>
      typeof entry === "string"
        ? { url: toAbsoluteUrl(entry) }
        : {
            ...entry,
            url: toAbsoluteUrl(entry.url),
          }
    );
};

const normalizeTwitterImages = (image) => {
  const imageList = Array.isArray(image) ? image : [image];

  return imageList.filter(Boolean).map((entry) =>
    typeof entry === "string" ? toAbsoluteUrl(entry) : toAbsoluteUrl(entry.url)
  );
};

export const buildPageMetadata = ({
  title,
  description,
  path = "/",
  image = siteMetadata.socialBanner,
  type = "website",
  robots,
}) => ({
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: toAbsoluteUrl(path),
    siteName: siteMetadata.title,
    images: normalizeOpenGraphImages(image),
    locale: siteMetadata.locale,
    type,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: normalizeTwitterImages(image),
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
  },
  ...(robots ? { robots } : {}),
});
