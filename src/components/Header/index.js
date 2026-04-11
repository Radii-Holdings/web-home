"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useState } from "react";
import TrackedLink from "../Analytics/TrackedLink";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(true);

  const toggle = () => {
    setMenuOpen((open) => !open)
  }

  const mobileLinkClass =
    "rounded-md px-1.5 py-1 text-[11px] font-semibold leading-none text-dark transition hover:bg-dark hover:text-light xs:px-2 xs:text-xs";

  return (
    <header className="relative z-50 flex w-full items-center justify-between px-4 py-4 sm:px-10">
      <Logo />

      <button
        type="button"
        className="z-[60] inline-grid h-11 w-11 place-items-center rounded-lg border border-dark/20 bg-light/90 lg:hidden"
        onClick={toggle}
        aria-label={menuOpen ? "Hide navigation menu" : "Show navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <div className="w-10 h-10 grid place-items-center cursor-pointer transition-all ease duration-300">
          <div className="relative w-6 h-4">
            <span
              className="absolute left-0 inline-block w-full h-[2px] rounded bg-(--brand-blue) transition-transform duration-200 ease"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(0)" : "translateY(6px)", filter: "drop-shadow(0 0 2px rgba(0,0,0,0.25))" }}
            />
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 inline-block w-full h-[2px] rounded bg-(--brand-blue) transition-opacity duration-200 ease"
              style={{ opacity: menuOpen ? 0 : 1, filter: "drop-shadow(0 0 2px rgba(0,0,0,0.25))" }}
            />
            <span
              className="absolute left-0 inline-block w-full h-[2px] rounded bg-(--brand-blue) transition-transform duration-200 ease"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(0)" : "translateY(-6px)", filter: "drop-shadow(0 0 2px rgba(0,0,0,0.25))" }}
            />
          </div>
        </div>
      </button>

      <nav
        id="mobile-navigation"
        className={`fixed left-2 right-2 top-4 z-50 flex max-w-[calc(100vw-1rem)] flex-wrap items-center justify-center gap-1 rounded-lg border border-solid border-dark bg-light/90 px-2 py-2 font-medium capitalize shadow-lg backdrop-blur-sm transition-all duration-300 min-[420px]:left-1/2 min-[420px]:right-auto min-[420px]:w-[calc(100vw-2rem)] min-[420px]:max-w-md min-[420px]:-translate-x-1/2 lg:hidden ${menuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-16 opacity-0 pointer-events-none"
          }`}
      >
        <Link href="/" className={mobileLinkClass}>Home</Link>
        <Link href="/algo-trading-platform-india" className={mobileLinkClass}>Services</Link>
        <Link href="/categories/all" className={mobileLinkClass}>Research</Link>
        <Link href="/about" className={mobileLinkClass}>About</Link>
        <Link href="/contact" className={mobileLinkClass}>Contact</Link>
        <TrackedLink
          href="https://console.radii.in/"
          eventName="console_click"
          eventParams={{ cta_location: "mobile_header", cta_label: "Get Started" }}
          className="inline-flex shrink-0 items-center justify-center gap-1 rounded-md border border-black px-1.5 py-1 text-[11px] font-bold leading-none btn-bezel xs:px-2 xs:text-xs"
        >
          <span>Get Started</span>
          <Image src="/svgs/cli_mainframe_logo_blue.svg" alt="CLI Mainframe" width={16} height={16} />
        </TrackedLink>
      </nav>


      <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden lg:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/algo-trading-platform-india" className="mx-2">Services</Link>
        <Link href="/categories/all" className="mx-2">Research</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mx-2">Contact</Link>
        <TrackedLink
          href="https://console.radii.in/"
          eventName="console_click"
          eventParams={{ cta_location: "desktop_header", cta_label: "Get Started" }}
          className="ml-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-black btn-bezel"
        >
          <span>Get Started</span>
          <Image src="/svgs/cli_mainframe_logo_blue.svg" alt="CLI Mainframe" width={16} height={16} />
        </TrackedLink>
      </nav>
      <div className="hidden lg:flex items-center">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200" /></a>
        {/* <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a> */}
      </div>
    </header>
  )
}

export default Header;
