import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation'
import { TypewriterEffect } from './ui/TypewriterEffect'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import MagicButton from './ui/MagicButton'
import { Button } from './ui/button'

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
    <section className='container relative'>
      
      <div className='px-5 md:px-0 md:flex flex-col items-center justify-center tracking-wide pt-40'>
      <h1 className='text-xl'>Hi I&apos;m <span className='text-purple font-semibold'>Rizwaan Ansari</span> </h1>
        <TypewriterEffect words={words} className='pt-5'/>
          <h1 className='pt-8 md:pt-2 text-4xl'>
          <span className='text-purple font-semibold'>One Line of Code at a Time</span></h1>
      </div>
      <div className='flex items-center justify-center px-5 md:px-0'>
      <TextGenerateEffect className='text-2xl font-semibold' words='Crafting Digital Experiences: Elevating Ideas to Code'/>
      </div>
      <div className='flex flex-col items-center md:justify-center px-5 md:px-0'>
        <h1>I&apos;m a <span className='text-purple font-semibold'>Full Stack Developer</span>  by profession and learner by passion.</h1>
        <div className="mt-10 flex items-center justify-center gap-6">
        <Button variant='outline' size='lg' className='rounded-full'>Resume</Button>
        <Button variant='secondary' className=''>Contact Me</Button>
      </div>
      </div>
    </section>
  )
}

export default Hero
