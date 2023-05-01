import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimg from '../assets/about.jpg'
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='mt-10 flex flex-col-reverse md:flex-row mb-5 md:gap-5 lg:gap-16'>
        <img data-aos="fade-right"  data-aos-offset="300" src={aboutimg} alt="hero" className='md:w-[50%]' />
        <div data-aos="fade-left" data-aos-offset="300" data-aos-delay="200" className='text-center md:text-left md:flex md:flex-col md:justify-between py-5'>
            <h3 className='font-bold text-2xl mb-2 text-purple-500 lg:mb-1'>about</h3>
            <p className='text-4xl font-bold text-gray-900 mb-3 md:text-3xl lg:text-5xl'>More than 150+ spesial collcetion cars</p>
            <p className='text-gray-400 text-justify mb-10 md:mb-5 text-base leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ea et optio deleniti dolore sequi quasi natus quae placeat corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            <button className='bg-purple-500 py-2 px-3 font-bold text-white mb-10 md:mb-0 lg:w-[50%]'>See all cars</button>
        </div>
    </div>
  )
}

export default About