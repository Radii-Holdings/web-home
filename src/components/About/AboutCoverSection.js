import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/android-chrome-512x512.png"
import Link from 'next/link'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center text-dark'>
      <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark flex justify-center'>
        <Image src={profileCharacter} alt="Radii Labs"
          className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h1 className='font-bold text-3xl xs:text-4xl sxl:text-5xl text-center lg:text-left mb-4'>
          About Radii Labs
        </h1>
        <p className='font-medium mt-2 text-base leading-7 mb-8'>
          Radii Labs supports trading teams that want clearer research, better execution decisions, and stronger risk controls before live capital is exposed to market volatility.
        </p>
        <h2 className='font-bold text-3xl xs:text-4xl sxl:text-5xl text-center lg:text-left mb-4'>
          What We Solve
        </h2>
        <p className='font-medium mt-2 text-base leading-7'>
          We help traders and operators move from fragmented tools and manual reactions to disciplined workflows with research review, broker-aware routing, and execution guardrails. Learn more in our <Link href="/algo-trading-platform-india" className='font-bold underline underline-offset-2 text-accent'>algo trading platform</Link>.
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection
