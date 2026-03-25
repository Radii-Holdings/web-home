import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 flex flex-col items-center justify-center">
      <div className="w-full px-5 sm:px-10 md:px-24 sxl:px-32">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
          Featured Story
        </h2>
      </div>

      <div className="w-full mt-10 sm:mt-16">
        <article className="w-full relative">
          <BlogLayoutOne blog={sortedBlogs[1]} highlight fullWidth />
        </article>
      </div>

      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 w-full">
        <div className="grid grid-cols-2 gap-6 mt-10 sm:mt-16">
          <article className="col-span-2 sm:col-span-1 relative">
            <BlogLayoutTwo blog={sortedBlogs[2]} />
          </article>
          <article className="col-span-2 sm:col-span-1 relative">
            <BlogLayoutTwo blog={sortedBlogs[3]} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
