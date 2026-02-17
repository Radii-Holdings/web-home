import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="section pt-14">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-center max-w-3xl lg:max-w-4xl">
            <h1 className="mb-4 font-semibold text-2xl md:text-4xl lg:text-5xl">
              Quantitative Market Intelligence + Algorithmic Execution for Global & Indian Traders
            </h1>
            <p className="mb-8 text-base md:text-lg text-dark/80 dark:text-light/80">
              <span className="font-bold text-lg md:text-xl text-dark dark:text-light">Radii Labs</span> helps traders and investors convert market complexity into actionable signals. With <span className="font-bold text-lg md:text-xl text-dark dark:text-light">Layr0</span>, those insights become disciplined execution across Global Forex and Indian markets—without emotional decision-making.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-dark font-semibold shadow hover:scale-105 transition-transform bg-accent dark:bg-accentDark"
              >
                Book a Demo
              </Link>
              <Link
                href="/categories/algo-trading"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-dark dark:text-light font-semibold border border-dark dark:border-light hover:scale-105 transition-transform"
              >
                Explore Strategies
              </Link>
              <Link
                href="/console"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold shadow hover:scale-105 transition-transform"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                Start Trading Now
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Link
              href="/console"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Console in new tab"
            >
              <Image
                alt="banner image"
                src="/svgs/cli_mainframe_logo_blue.svg"
                width={800}
                height={420}
                className="mx-auto cursor-pointer"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
