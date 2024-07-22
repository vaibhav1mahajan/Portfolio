import React from 'react'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-10'>
      <h1 className='text-4xl m-10 text-center'>Contact <span className='text-neutral-500'> Me</span></h1>
      <div className='flex gap-2 items-center justify-center'>
      <MdEmail  className='text-3xl'/>
      <p className='text-center tracking-wide text-lg'>vaibhavmahajan2257@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
