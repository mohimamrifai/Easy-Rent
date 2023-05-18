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
        <img data-aos="fade-right"  data-aos-offset="300" src={aboutimg} alt="hero" className='md:w-[50%] rounded-md object-cover' />
        <div data-aos="fade-left" data-aos-offset="300" data-aos-delay="200" className='text-center md:text-left md:flex md:flex-col md:justify-between py-5'>
            <h3 className='font-bold text-2xl mb-10 text-gray-800 lg:mb-1'>Tentang <span className='text-blue-600'>EaseRent</span></h3>
            <p className='text-4xl font-bold text-gray-800 mb-3 md:text-3xl lg:text-5xl'>Lebih dari 150+ mobil koleksi khusus</p>
            <p className='text-gray-600 text-center mb-10 md:mb-5 text-base leading-5 md:text-start'>kami bangga menyajikan lebih dari 150+ koleksi mobil spesial yang memikat hati. Dari mobil klasik yang elegan hingga mobil sport yang berkecepatan tinggi, kami memiliki pilihan mobil yang unik dan istimewa.</p>
            <button className='bg-blue-600 rounded-md py-2 px-3 font-bold text-white mb-10 md:mb-0 lg:w-[50%] hover:bg-blue-800 transition-all duration-300'>Jelajahi</button>
        </div>
    </div>
  )
}

export default About