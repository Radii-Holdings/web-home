import { allBlogs } from "contentlayer2/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import TrackedLink from "@/src/components/Analytics/TrackedLink";
import { moneyPageLinks } from "@/src/utils/servicePages";
import { CollectionPageSchema } from "@/src/components/StructuredData/PageSchemas";
import { buildPageMetadata } from "@/src/utils/pageMetadata";
import { slug } from "github-slugger";

const formatCategoryName = (value) =>
  value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

export async function generateStaticParams() {
  const set = new Set(["all"]);
  for (const blog of allBlogs) {
    if (!blog.isPublished) continue;
    for (const tag of blog.tags) set.add(slug(tag));
  }
  return Array.from(set).map((s) => ({ slug: s }));
}

export async function generateMetadata({ params }) {
  const { slug: s } = await params;
  const normalized = s.replace(/-\d+$/, "");
  const isHub = normalized === "all";
  const categoryName = isHub ? "Trading Research Hub" : formatCategoryName(normalized);

  return buildPageMetadata({
    title: `${categoryName} | Radii Labs`,
    description: isHub
      ? "Browse the Radii Labs research hub for quantitative analysis, execution explainers, broker workflow articles, and practical trading intelligence."
      : `Explore ${normalized.replaceAll("-", " ")} research, strategy explainers, and actionable market insights for Indian and global traders from Radii Labs.`,
    path: `/categories/${s}`,
    robots: {
      index: isHub,
      follow: true,
    },
  });
}

const CategoryPage = async ({ params }) => {
  const { slug: current } = await params;
  const normalized = current.replace(/-\d+$/, "");
  const isHub = normalized === "all";
  if (!current || typeof current !== 'string') {
    return <div>Category Not Found</div>;
  }
  const allCategories = new Set(["all"]);
  const blogs = allBlogs.filter((blog) => {
    const tagSlugs = blog.tags.map((t) => slug(t));
    tagSlugs.forEach((s) => allCategories.add(s));
    if (normalized === "all") return blog.isPublished;
    return blog.isPublished && (tagSlugs.includes(current) || tagSlugs.includes(normalized));
  });

  const categoryIntros = {
    "algo-trading": (
      <>
        Explore practical algorithmic trading frameworks, execution logic, and risk controls for Global & Indian market participants. Built for traders who want process over prediction. For enterprise-grade infrastructure, check our <a href="/algo-trading-platform-india" className="underline hover:text-accent">Algo Trading Platform</a>.
      </>
    ),
    "all": "A comprehensive collection of insights covering quantitative analysis, algorithmic execution, and market intelligence for modern traders.",
  };

  const categoryHeading = isHub ? "Trading Research Hub" : formatCategoryName(normalized);
  const defaultIntro = `Deep dive into ${normalized.replaceAll("-", " ")} with data-backed research and execution strategies designed for disciplined trading.`;

  return (
    <article className="mt-12 flex flex-col text-dark">
      <CollectionPageSchema
        name={categoryHeading}
        description={
          isHub
            ? "Browse the Radii Labs research hub for quantitative analysis, execution explainers, broker workflow articles, and practical trading intelligence."
            : defaultIntro
        }
        path={`/categories/${current}`}
        items={blogs.slice(0, 12).map((blog) => ({ name: blog.title, url: blog.url }))}
      />
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">{categoryHeading}</h1>
        <span className="mt-2 inline-block font-medium text-lg">
          {isHub ? categoryIntros.all : categoryIntros[normalized] || defaultIntro}
        </span>
      </div>
      <Categories categories={Array.from(allCategories)} currentSlug={normalized} />

      <section className="mt-10 px-5 sm:px-10 md:px-24 sxl:px-32">
        <div className="rounded-lg border border-dark/15 bg-accent/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
            Commercial research paths
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Move from reading to workflow review
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
            {moneyPageLinks.map((page) => (
              <TrackedLink
                key={page.href}
                href={page.href}
                eventParams={{
                  cta_location: "category_service_hub",
                  cta_label: page.label,
                  category_slug: normalized,
                }}
                className="rounded-lg border border-dark/10 bg-light p-4 font-bold transition hover:border-accent"
              >
                {page.label}
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog) => (
          <article key={blog._id} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
