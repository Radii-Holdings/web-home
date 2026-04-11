import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/android-chrome-512x512.png"

const Logo = () => {
  return (
    <Link href="/" className="flex min-w-0 items-center text-dark">
      <div className="w-11 shrink-0 overflow-hidden rounded-full border border-solid border-dark mr-2 md:mr-4 md:w-16">
        <Image src={profileImg} alt="Radii Lab logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
      </div>
      <span className="truncate font-bold text-base md:text-xl">Radii Labs</span>
    </Link>
  )
}

export default Logo
