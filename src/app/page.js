import { allBlogs } from "contentlayer2/generated";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeBanner from "../components/Home/HomeBanner";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export const metadata = {
  title: "Radii Labs: AI Auto Trading Robots for Global & Indian Markets",
  description: "Radii Labs delivers AI-driven quantitative market intelligence and Layr0 enables fast algorithmic execution for Global Forex and Indian markets. Master the markets with AI-powered trading decisions.",
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
