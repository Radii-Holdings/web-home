import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/android-chrome-512x512.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
      <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
        <Image src={profileCharacter} alt="Radii Lab"
          className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h2 className='font-bold capitalize text-3xl xs:text-4xl sxl:text-5xl text-center lg:text-left mb-4'>
          Who We Are
        </h2>
        <p className='font-medium capitalize mt-2 text-base mb-8'>
          Radii Labs is a quantitative research firm delivering actionable market intelligence. We bridge the gap between complex data analysis and effective market action.
        </p>
        <h2 className='font-bold capitalize text-3xl xs:text-4xl sxl:text-5xl text-center lg:text-left mb-4'>
          What We Solve
        </h2>
        <p className='font-medium capitalize mt-2 text-base'>
          AI BASED automated trading with Patent Pending algorithms and Proven success rates of above 80 percent success rate. We help you move from emotional trading to disciplined, data-backed execution.
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection