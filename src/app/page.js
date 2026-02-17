import { allBlogs } from "contentlayer2/generated";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeBanner from "../components/Home/HomeBanner";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export const metadata = {
  title: "Radii Labs: Quant Intelligence + Layr0 Algo Execution",
  description: "Radii Labs delivers quantitative market intelligence and Layr0 enables fast algorithmic execution for Global Forex and Indian markets. Build smarter, data-driven trading decisions.",
};

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
