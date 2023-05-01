import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='mt-[50px] bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 mb-5 md:text-center md:py-10 lg:py-20'>
        <h2 className='text-slate-200 font-semibold text-3xl mb-3 lg:text-4xl'>Lets drive with <span className='font-bold text-white'>RENT</span> today!</h2>
        <p className='text-gray-300 lg:w-[70%] mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta qui at nesciunt cumque quia?</p>
        <div className='flex flex-col gap-5 mt-3 text-white md:flex-row md:justify-center'>
            <div className='flex gap-2'>
                <AiFillApple size={25}/>
                <p className='text-lg'>Apple store</p>
            </div>
            <div className='flex gap-2'>
                <FaGooglePlay size={25}/>
                <p className='text-lg'>Google store</p>
            </div>
        </div>
    </div>
  )
}

export default Contact