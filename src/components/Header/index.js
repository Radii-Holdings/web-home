"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useEffect, useState } from "react";

const Header = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
        <Logo />

        <button className="inline-block sm:hidden z-[60]" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-10 h-10 grid place-items-center cursor-pointer transition-all ease duration-300">
            <div className="relative w-6 h-4">
              <span
                className="absolute left-0 inline-block w-full h-[2px] rounded bg-[var(--brand-blue)] transition-transform duration-200 ease"
                style={{ transform: click ? "rotate(-45deg) translateY(0)" : "translateY(6px)", filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))" }}
              />
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 inline-block w-full h-[2px] rounded bg-[var(--brand-blue)] transition-opacity duration-200 ease"
                style={{ opacity: click ? 0 : 1, filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))" }}
              />
              <span
                className="absolute left-0 inline-block w-full h-[2px] rounded bg-[var(--brand-blue)] transition-transform duration-200 ease"
                style={{ transform: click ? "rotate(45deg) translateY(0)" : "translateY(-6px)", filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))" }}
              />
            </div>
          </div>
        </button>

        <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <Link href="/console" className="ml-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black btn-bezel">
              <span>Console</span>
              <Image src="/svgs/cli_mainframe_logo_blue.svg" alt="CLI Mainframe" width={16} height={16} />
            </Link>
        </nav>


        <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <Link href="/console" className="ml-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black btn-bezel">
              <span>Console</span>
              <Image src="/svgs/cli_mainframe_logo_blue.svg" alt="CLI Mainframe" width={16} height={16} />
            </Link>
        </nav>
        <div className=" hidden sm:flex items-center">
            <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
            {/* <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a> */}
        </div>
    </header>
  )
}

export default Header;
