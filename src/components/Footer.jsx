import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
        <div className='hidden md:block md:h-[300px] md:bg-gray-900 md:-mt-[150px] md:relative md:-z-20'></div>
        <div className='p-10 bg-gray-900 text-white md:flex md:justify-between md:items-end md:-mt-[150px] lg:px-36 md:relative md:z-10'>
            <h1 className='text-3xl font-bold mb-10 md:mb-0 lg:text-4xl'>RENT</h1>
            <div className='flex flex-col gap-2 text-xl mb-10 md:flex-row md:mb-0 lg:gap-10 md:gap-'>
                <a href="#" className='cursor-pointer'>Home</a>
                <a href="#" className='cursor-pointer'>About us</a>
                <a href="#" className='cursor-pointer'>Category</a>
                <a href="#" className='cursor-pointer'>Resource</a>
            </div>
            <div className='flex gap-3 lg:gap-5'>
                <BsFacebook className='cursor-pointer' size={25}/>
                <BsInstagram className='cursor-pointer' size={25}/>
                <BsTwitter className='cursor-pointer' size={25}/>
                <BsTelegram className='cursor-pointer' size={25}/>
            </div>
        </div>
    </div>
  )
}



export default Footer