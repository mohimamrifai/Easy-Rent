import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='mt-[50px] p-5 mb-5 md:text-center md:py-10 lg:py-20 bg-gray-200 rounded-sm' >
        <h2 className='text-gray-800 font-semibold text-3xl mb-3 lg:text-4xl'>Ayo berkendara dengan <span className='text-blue-600'>EaseRent</span> sekarang juga!</h2>
        <p className='text-gray-500 lg:w-[70%] mx-auto mb-5'>Jelajahi dunia, nikmati perjalanan dengan RENT, sekarang juga!</p>
        <div className='flex flex-col gap-5 mt-3 md:flex-row md:justify-center'>
            <a href='#' className='flex gap-2 items-center text-gray-800 border-2 border-blue-300 w-max py-1 ps-2 pe-4 rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-300'>
                <AiFillApple size={25}/>
                <p className='text-lg'>Apple store</p>
            </a>
            <a href='3' className='flex gap-2 items-center text-gray-800 border-2 border-blue-300 w-max py-1 px-2 rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-300'>
                <FaGooglePlay size={20}/>
                <p className='text-lg'>Google store</p>
            </a>
        </div>
    </div>
  )
}

export default Contact