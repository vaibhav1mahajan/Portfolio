import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'

const Skills = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-20 text-center text-4xl'>
          <div className='flex flex-wrap justify-center items-center gap-4 lg:gap-6'>
            <div className='skills'>
              <RiReactjsLine  className='text-7xl text-cyan-700'/>
            </div>
          </div>
        </h1>
    </div>
  )
}

export default Skills
