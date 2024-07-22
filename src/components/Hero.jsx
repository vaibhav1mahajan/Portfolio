import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/vaibhav.jpg'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-16 lg:mb-24'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 '>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 text-4xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl '>Vaibhav Mahajan</h1>
                <span className='bg-gradient-to-r from-pink-600 via-white to-cyan-900 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</span>
                <p className='my-2 max-w-xl py-6 font-light tracking-wide leading-8 text-lg'>{HERO_CONTENT}</p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <img src={profilePic} alt="Vaibhav" width={450} height={450} className='rounded-xl' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
