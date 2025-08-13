import { allBlogs } from "contentlayer2/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";

export async function generateStaticParams() {
  const set = new Set(["all"]);
  for (const blog of allBlogs) {
    if (!blog.isPublished) continue;
    for (const tag of blog.tags) set.add(slug(tag));
  }
  return Array.from(set).map((s) => ({ slug: s }));
}

export async function generateMetadata({ params }) {
  const { slug: s } = params;
  const normalized = s.replace(/-\d+$/, "");
  return {
    title: `${normalized.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${normalized === "all" ? "web development" : normalized} through our collection of expert blogs and tutorials`,
  };
}


const CategoryPage = async ({ params }) => {
  const { slug: current } = params;
  const normalized = current.replace(/-\d+$/, "");
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

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{normalized}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={Array.from(allCategories)} currentSlug={normalized} />

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
