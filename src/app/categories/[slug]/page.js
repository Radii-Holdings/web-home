import { allBlogs } from "contentlayer2/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${slug === "all" ? "web development" : slug} through our collection of expert blogs and tutorials`,
  };
}


const CategoryPage = async ({ params }) => {
  const { slug } = await params;
  if (!slug || typeof slug !== 'string') {
    return <div>Category Not Found</div>;
  }
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slugger.slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (slug === "all") {
        return true;
      }
      return slugified === slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={slug} />

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
