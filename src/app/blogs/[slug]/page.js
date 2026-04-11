import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import { allBlogs } from "contentlayer2/generated";
import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";

const toAbsoluteUrl = (path) => {
  if (path.startsWith("http")) return path;
  return `${siteMetadata.siteUrl}${path}`;
};

const getBlogImages = (blog) => {
  if (!blog?.image) return [toAbsoluteUrl(siteMetadata.socialBanner)];

  const images =
    typeof blog.image.filePath === "string"
      ? [blog.image.filePath.replace("../public", "")]
      : blog.image;

  return images.map((img) => toAbsoluteUrl(img));
};

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const { slug: slugParam } = await params;
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slugParam);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  const imageList = getBlogImages(blog);
  const ogImages = imageList.map((img) => ({ url: img }));

  const authors = blog?.author ? [blog.author] : [siteMetadata.author];

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: blog.url,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug: slugParam } = await params;
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slugParam);
  if (!blog) notFound();

  const imageList = getBlogImages(blog);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [{
      "@type": "Person",
      "name": blog?.author ? blog.author : siteMetadata.author,
      "url": siteMetadata.twitter,
    }],
    "publisher": {
      "@type": "Organization",
      "name": siteMetadata.author,
      "logo": {
        "@type": "ImageObject",
        "url": siteMetadata.siteUrl + siteMetadata.siteLogo,
        "width": 512,
        "height": 512
      },
      "sameAs": [
        siteMetadata.twitter,
        siteMetadata.github,
        siteMetadata.linkedin
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteMetadata.siteUrl + blog.url
    }
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Research", url: "/categories/all" },
          { name: blog.title, url: blog.url },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.tags[0]}
              link={`/categories/${slug(blog.tags[0])}`}
              className="px-6 text-sm py-2 hero-tag-animated"
            />
            <h1
              className="inline-block mt-6 font-semibold capitalize text-2xl md:text-3xl lg:text-5xl leading-normal! relative w-5/6"
            >
              <span className="hero-title-underline">{blog.title}</span>
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <BlogDetails blog={blog} slug={slugParam} />

        <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12  lg:col-span-4">
            <details
              className="border border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <RenderMdx blog={blog} />
            <div className="mt-16 p-8 bg-accent/10 rounded-lg border border-accent text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Automate Your Strategy?</h3>
              <p className="mb-6">
                Transition from emotional trading to disciplined, data-backed execution with our AI tools.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://console.radii.in/" className="inline-block px-6 py-3 bg-accent text-light font-semibold rounded-full hover:scale-105 transition-transform">
                  Explore The Console
                </a>
                <a href="/tutorial" className="inline-block px-6 py-3 border border-dark font-semibold rounded-full hover:scale-105 transition-transform">
                  AI Trading Tutorial
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>

  );
}
