import BreadcrumbSchema from "@/src/components/StructuredData/BreadcrumbSchema";
import { authorList, getAuthorBySlug } from "@/src/utils/authors";
import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return authorList.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  return {
    title: `${author.name} Author Profile`,
    description: author.bio,
    alternates: {
      canonical: author.url,
    },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: author.name,
    description: author.bio,
    url: `${siteMetadata.siteUrl}${author.url}`,
    sameAs: [siteMetadata.linkedin, siteMetadata.twitter],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Authors", url: "/authors/radii-labs" },
          { name: author.name, url: author.url },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-5 py-20 text-dark md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
          Author profile
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">{author.name}</h1>
        <p className="mt-3 text-xl font-semibold text-dark/70">{author.role}</p>
        <p className="mt-8 text-lg leading-8 text-dark/75">{author.bio}</p>
        <section className="mt-10 rounded-lg border border-dark/15 p-6">
          <h2 className="text-2xl font-bold">Editorial methodology</h2>
          <p className="mt-4 leading-7 text-dark/75">{author.methodology}</p>
        </section>
        <section className="mt-10 rounded-lg bg-accent/5 p-6">
          <h2 className="text-2xl font-bold">Financial risk note</h2>
          <p className="mt-4 leading-7 text-dark/75">
            Radii content is educational and operational in nature. It does not
            guarantee returns, recommend a specific security, or replace advice
            from a qualified financial professional.
          </p>
        </section>
        <Link
          href="/categories/all"
          className="mt-10 inline-flex rounded-lg bg-dark px-6 py-3 font-bold text-light transition hover:bg-dark/85"
        >
          Read research
        </Link>
      </main>
    </>
  );
}
