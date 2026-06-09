import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "../../utils/siteMetaData";
const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-2 sm:m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Research briefings | product notes | workflow updates
      </h3>


      <div className="mt-6 w-full max-w-3xl px-6 py-8 bg-light rounded-2xl shadow-lg text-dark">
        <h4 className="text-lg font-medium mb-4">
          Follow the Radii Labs research brief
        </h4>
        <p className="text-base leading-7 text-dark/75">
          Subscribe for new market research, broker workflow explainers, and execution-control updates without loading third-party feeds on every page visit.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href={siteMetadata.newsletterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-dark px-5 py-3 font-semibold text-light transition hover:bg-dark/85"
          >
            Open the Substack brief
          </a>
          <Link
            href="/categories/all"
            className="inline-flex items-center justify-center rounded-xl border border-dark px-5 py-3 font-semibold transition hover:bg-dark hover:text-light"
          >
            Browse research hub
          </Link>
        </div>
      </div>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base">
        If you prefer the embedded signup, it loads only when this section comes into view.
      </p>
      <div className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-1 sm:p-2 rounded mx04">
        <iframe
          src={`${siteMetadata.newsletterUrl}/embed`}
          style={{
            border: "1px solid transparent",
            background: "inherit",
            color: "inherit",
            borderRadius: "8px",
            width: "100%",
            height: "100%",
          }}
          loading="lazy"
          frameBorder="0"
          scrolling="no"
          title="Substack Embed"
        ></iframe>
      </div>

      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="fill-light  hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2026 Radii Labs. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://github.com/Radii-Holdings" className="underline" target="_blank">
            Radii Labs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
