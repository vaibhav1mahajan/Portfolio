import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaDocker, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiPostgresql, SiPrisma, SiTypescript, SiWebrtc } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-20 text-center text-4xl'> Skills </h1>
          <div className='flex flex-wrap justify-center items-center gap-4 lg:gap-6'>
            <div className='skills'>
              <RiReactjsLine  className='text-7xl text-cyan-700'/>
            </div>
            <div className='skills'>
              <RiNextjsLine  className='text-7xl text-white'/>
            </div>
            <div className='skills'>
              <SiExpress  className='text-7xl text-yellow-300'/>
            </div> 
            <div className='skills'>
              <FaNodeJs  className='text-7xl text-green-700'/>
            </div> 
            <div className='skills'>
              <FaDocker  className='text-7xl text-sky-700'/>
            </div>
            <div className='skills'>
              <IoLogoJavascript  className='text-7xl text-yellow-300'/>
            </div> 
            <div className='skills'>
              <RiTailwindCssFill  className='text-7xl text-cyan-700'/>
            </div>
            <div className='skills'>
              <SiTypescript  className='text-7xl text-blue-700'/>
            </div>
            <div className='skills'>
              <SiPrisma  className='text-7xl text-white'/>
            </div>
            <div className='skills'>
              <DiMongodb  className='text-7xl text-green-600'/>
            </div>
            <div className='skills'>
              <SiPostgresql  className='text-7xl text-sky-700'/>
            </div>
            <div className='skills'>
              <SiWebrtc  className='text-7xl text-white'/>
            </div>
          </div>
    </div>
  )
}

export default Skills
