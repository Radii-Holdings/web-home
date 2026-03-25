import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

const BlogLayoutOne = ({ blog, highlight = false, fullWidth = false }) => {
  return (
    <div className={`group inline-block overflow-hidden ${fullWidth ? "w-full" : "rounded-xl"}`}>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-linear-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className={`w-full h-full object-center object-cover group-hover:scale-105 transition-all ease duration-300 ${fullWidth ? "" : "rounded-xl"}`}
        sizes={fullWidth ? "100vw" : "(max-width: 1180px) 100vw, 50vw"}
      />

      <div className={`w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20 ${fullWidth ? "px-8 sm:px-16 md:px-32 sxl:px-48" : ""}`}>
        <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} className="px-6 text-sm py-2 border! border-solid border-light " />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            {highlight ? (
              <span className="hero-title-underline">{blog.title}</span>
            ) : (
              <span
                className="bg-linear-to-r from-accent to-accent bg-size-[0px_6px] group-hover:bg-size-[100%_6px] bg-bottom-left transition-[background-size] duration-500"
              >
                {blog.title}
              </span>
            )}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
