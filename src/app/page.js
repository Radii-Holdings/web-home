import { allBlogs } from "contentlayer2/generated";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeBanner from "../components/Home/HomeBanner";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import { buildPageMetadata } from "@/src/utils/pageMetadata";

export const metadata = buildPageMetadata({
  title: "AI Trading Research and Algo Execution | Radii Labs",
  description: "Use Radii Labs for quantitative market research, AI trading intelligence, and disciplined algorithmic execution workflows for Indian and global markets.",
  path: "/",
});

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCarousel />
      <HomeBanner />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />


    </main>
  )
}
