import React from 'react'
import Box from './Box'
import {MdHighQuality} from 'react-icons/md'
import {GrServices} from 'react-icons/gr'
import {SiFastapi} from 'react-icons/si'

const Service = () => {

  return (
    <div className='text-center my-10 bg-gradient-to-r from-sky-500 to-indigo-500 py-5 px-3 md:h-[400px] lg:h-[350px] md:mt-20 lg:p-10 mb-10'>
        <h3 className='text-2xl font-bold text-purple-200 mb-3 md:text-2xl'>our service</h3>
        <p className='text-3xl font-semibold text-gray-50 mb-5 md:w-[70%] md:mx-auto md:mb-3'>we have best service for the rent cars</p>
        <p className=' text-gray-300 md:w-[80%] md:mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis assumenda amet qui sint cumque debitis!</p>
        <div className="container-box mt-5 flex flex-col gap-3 md:grid md:grid-cols-3 md:relative md:top-5 md:z-10 lg:gap-6">
          <Box Icon={MdHighQuality} title="Quality Choice" />
          <Box Icon={GrServices} title="Exclusive service" />
          <Box Icon={SiFastapi} title="Fast and safe" />
        </div>
    </div>
  )
}

export default Service