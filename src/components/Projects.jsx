import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-6'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div>
        {PROJECTS.map((project,index)=>{
            return(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <img src={project.image} width={200} height={200} alt="" className='mb-6 rounded-lg' />
                    </div>
                    <div className='w-full lg:w-3/4 max-w-xl'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-3'>{project.description}</p>
                        {project.technologies.map((tech,index)=>{
                            return (
                                <span key={index} className='mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800'>{tech}</span>
                            )
                        })}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Projects
