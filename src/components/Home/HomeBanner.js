import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="section pt-14">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-center max-w-3xl lg:max-w-4xl">
            <h1 className="mb-4 font-semibold text-2xl md:text-4xl lg:text-5xl">
              The Ultimate Starter Template You Need To Start Your Next Project
            </h1>
            <p className="mb-8 text-base md:text-lg text-dark/80 dark:text-light/80">
              Nextplate is a free starter template built with Next and TailwindCSS, providing everything you need to jumpstart your Next project and save valuable time.
            </p>
            <Link
              href="https://github.com/zeon-studio/nextplate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold shadow"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Get Started For Free
            </Link>
          </div>
          <div className="w-full">
            <Image
              alt="banner image"
              src="/svgs/cli_mainframe_logo_blue.svg"
              width={800}
              height={420}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

