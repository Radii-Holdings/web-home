import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="section pt-14">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-center max-w-3xl lg:max-w-4xl">
            <h1 className="mb-4 font-semibold text-2xl md:text-4xl lg:text-5xl">
              AI Trading Research and Algo Execution
            </h1>
            <p className="mb-6 text-base md:text-lg text-dark/80">
              <span className="font-bold text-lg md:text-xl text-dark">Radii Labs</span> helps traders and teams move from research to rules-based execution across global forex and Indian markets.
            </p>
            <div className="mb-10">
              <Link
                href="/multi-broker-order-routing"
                className="inline-block px-5 py-2 text-sm md:text-base font-bold uppercase tracking-wider border-2 border-dark text-dark hover:bg-dark hover:text-light transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              >
                Discover our AI-enhanced multi-broker order routing engine &rarr;
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://console.radii.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold shadow hover:scale-105 transition-transform"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                Start Trading Now
              </Link>
              <Link
                href="/algo-trading-platform-india"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-dark font-semibold border border-dark hover:scale-105 transition-transform"
              >
                Explore Algo Platform
              </Link>
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-dark/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/TSMkPJVfs_I"
                title="Radii Labs AI trading platform walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-12 flex justify-center">
              <Link
                href="/tutorial"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold shadow hover:scale-105 transition-transform"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                Tutorial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
