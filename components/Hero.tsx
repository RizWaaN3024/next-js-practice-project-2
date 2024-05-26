import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation'

const Hero = () => {
  return (
    <section className='container'>
      <div className='flex items-center justify-center text-6xl tracking-wide pt-40'>
        <h1>Building Websites, Products. <br/><span className='text-purple font-semibold'>One Line of Code at a Time</span></h1>
      </div>
      <div className='flex items-center justify-center py-5'>
      <TextGenerateEffect className='text-2xl font-semibold' words='Crafting Digital Experiences: Elevating Ideas to Code'/>
      </div>
    </section>
  )
}

export default Hero
