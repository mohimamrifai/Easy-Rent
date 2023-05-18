import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Box = ({Icon, title, desc, duration}) => {
  const [iconSize, setIconSize] = useState(80);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIconSize(80);
      } else if(window.innerWidth >= 768) {
        setIconSize(30);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration={duration} className='text-center bg-white py-10 px-12 shadow-lg rounded-lg md:shadow-lg md:py-3 md:px-2 lg:py-10 lg:px-5'>
        <Icon size={iconSize} className="mx-auto mb-5 text-blue-400 md:mb-3" />
        <h3 className='text-2xl mb-2 font-bold text-gray-800 md:text-lg'>{title}</h3>
        <p className='text-gray-500 md:text-base md:leading-5'>{desc}</p>
    </div>
  )
}

export default Box