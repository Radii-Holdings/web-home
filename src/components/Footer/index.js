"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "../../utils/siteMetaData";
import { toast } from "react-hot-toast";
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
  
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      toast.success('You have successfully subscribed to our newsletters')
    }
  }
 catch (error) {
    console.log(error);
  }
}

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>


      <div className="mt-6 w-full sm:w-3/5 px-4 py-6 bg-light dark:bg-dark rounded-lg shadow-lg">
        <h4 className="text-lg font-medium text-dark dark:text-light mb-4">
          Latest Posts
        </h4>
        <div id="substack-feed-embed" className="space-y-4">
          {React.useEffect(() => {
        const script1 = document.createElement("script");
        script1.innerHTML = `
          window.SubstackFeedWidget = {
            substackUrl: "radiilab.substack.com",
            posts: 3,
          };
        `;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "https://substackapi.com/embeds/feed.js";
        script2.async = true;
        document.body.appendChild(script2);

        return () => {
          document.body.removeChild(script1);
          document.body.removeChild(script2);
        };
          }, [])}
        </div>
      </div>      
          <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
            Subscribe to learn about new developments and updates. Join us as one of our
            <span className="font-medium dark:font-bold"> 100+ </span>
            subscribers and get the latest updates in your inbox.
            <br /> It's FREE ...
          </p>
      <div className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04">
        <iframe
          src="https://radiilab.substack.com/embed"
          style={{
            border: "1px solid transparent",
            background: "inherit",
            color: "inherit",
            borderRadius: "8px",
            width: "100%",
            height: "100%",
          }}
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
          <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2025 Radii Lab. All rights reserved.
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
          Radii Lab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
