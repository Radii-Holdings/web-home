import TrackedLink from "@/src/components/Analytics/TrackedLink";
import { moneyPageLinks } from "@/src/utils/servicePages";
import siteMetadata from "@/src/utils/siteMetaData";
import YouTubeFacade from "@/src/components/Media/YouTubeFacade";

const HomeBanner = () => {
  return (
    <section className="section pt-14">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-center max-w-3xl lg:max-w-4xl">
            <h1 className="mb-4 font-semibold text-2xl md:text-4xl lg:text-5xl">
              AI trading research and algorithmic execution workflows
            </h1>
            <p className="mb-6 text-base md:text-lg text-dark/80">
              <span className="font-bold text-lg md:text-xl text-dark">Radii Labs</span> helps traders and teams move from research review to broker-aware execution across Indian and global markets.
            </p>
            <div className="mb-10">
              <TrackedLink
                href="/multi-broker-order-routing"
                eventParams={{
                  cta_location: "home_intro",
                  cta_label: "Review multi-broker routing workflow",
                }}
                className="inline-block px-5 py-2 text-sm md:text-base font-bold uppercase tracking-wider border-2 border-dark text-dark hover:bg-dark hover:text-light transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              >
                Review our multi-broker order routing workflow &rarr;
              </TrackedLink>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink
                href={siteMetadata.consoleUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="console_click"
                eventParams={{
                  cta_location: "home_hero",
                  cta_label: "Start Trading Now",
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold shadow hover:scale-105 transition-transform"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                Start Trading Now
              </TrackedLink>
              <TrackedLink
                href="/algo-trading-platform-india"
                eventParams={{
                  cta_location: "home_hero",
                  cta_label: "Explore Algo Platform",
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-dark font-semibold border border-dark hover:scale-105 transition-transform"
              >
                Explore Algo Platform
              </TrackedLink>
            </div>
          </div>

          <div className="mb-14 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-5">
            {moneyPageLinks.map((page) => (
              <TrackedLink
                key={page.href}
                href={page.href}
                eventParams={{
                  cta_location: "home_money_page_grid",
                  cta_label: page.label,
                }}
                className="rounded-lg border border-dark/15 bg-white p-4 text-left transition hover:border-accent hover:shadow-md"
              >
                <span className="block text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  Service
                </span>
                <span className="mt-2 block text-lg font-bold text-dark">
                  {page.label}
                </span>
              </TrackedLink>
            ))}
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-dark/10">
              <YouTubeFacade
                title="Radii Labs AI trading platform walkthrough"
                embedUrl="https://www.youtube.com/embed/TSMkPJVfs_I?autoplay=1"
                posterUrl="https://i.ytimg.com/vi/TSMkPJVfs_I/hqdefault.jpg"
                className="rounded-3xl"
              />
            </div>
            <div className="mt-12 flex justify-center">
              <TrackedLink
                href="/tutorial"
                eventParams={{
                  cta_location: "home_video",
                  cta_label: "Tutorial",
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold shadow hover:scale-105 transition-transform"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                Tutorial
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
