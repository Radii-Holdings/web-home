import {allBlogs} from "contentlayer2/generated";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeBanner from "../components/Home/HomeBanner";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

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
