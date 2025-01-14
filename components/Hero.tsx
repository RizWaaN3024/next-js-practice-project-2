import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation'
import { TypewriterEffect } from './ui/TypewriterEffect'
import { Button } from './ui/button'
import SocialIcons from './SocialIcons'
import {RiArrowDownSLine} from 'react-icons/ri'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  const words =  [
    {
      text: "Building",
    },
    {
      text: "Websites,",
    },
    {
      text: "Products."
    }
  ]
  return (
    <section className='container relative py-16'>
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        /> */}
        {/* <Spotlight
          className="-top-40 -right-10 md:left-1/4 md:-top-20 h-screen"
          fill="white"
        /> */}
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      <div className='px-5 md:px-0 md:flex flex-col items-center justify-center tracking-wide pt-20'>
      <h1 className='text-xl dark:text-primary'>Hi I&apos;m <span className='font-semibold dark:text-purple-300'>Rizwaan Ansari</span> </h1>
        <TypewriterEffect words={words} className='pt-5 text-white'/>
          <h1 className='pt-8 md:pt-2 text-4xl'>
          <span className='dark:text-purple-300 font-semibold'>One Line of Code at a Time</span></h1>
      </div>
      <div className='flex items-center justify-center px-5 md:px-0 relative'>
      <TextGenerateEffect className='text-2xl font-semibold' words='Crafting Digital Experiences: Elevating Ideas to Code'/>
      </div>
      <div className='flex flex-col items-center md:justify-center px-5 md:px-0'>
        <h1>I&apos;m a <span className='dark:text-purple-300 font-semibold'>Full Stack Developer</span>  by profession and learner by passion.</h1>
        <div className="mt-10 flex items-center justify-center gap-6">
        <Button variant='outline' size='lg' className='rounded-full hover:bg-primary hover:text-white dark:hover:bg-secondary'>Resume</Button>
        <Button variant='secondary' className='bg-primary text-white hover:text-primary dark:bg-secondary  dark:text-primary'>Contact Me</Button>
        {/*  */}
      </div>
      <SocialIcons className={`mt-5 dark:text-primary text-white`}/>
      <div className='hidden md:flex absolute left-2/4 bottom-44 xl:-bottom-16 animate-bounce'>
        <RiArrowDownSLine className='text-3xl text-primary' />
      </div>
      </div>
      
      
    </section>
  )
}

export default Hero
