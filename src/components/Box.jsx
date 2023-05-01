import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Box = ({Icon, title}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" className='text-center bg-white p-5 shadow-lg rounded-sm md:shadow-lg'>
        <Icon size={100} color="gray" className="mx-auto mb-5" />
        <h3 className='text-2xl mb-2 font-bold'>{title}</h3>
        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sed, atque est nobis earum explicabo.</p>
    </div>
  )
}

export default Box