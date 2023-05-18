import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import heroImg from '../assets/hero.png'

const Hero = () => {
  const h1 = useSpring({
    from: { y: -200 },
    to: { y: 0 },
    config: {duration: 800}
  })
  const paragraf = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1000}
  })
  const gambar = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: {duration: 800}
  })
  return (
    <div className='flex flex-col lg:pt-10 gap-5 mt-10'>
       <div className='text-center mt-5 md:px-5 lg:px-20'>
          <animated.h2 style={h1} className='py-5 text-4xl text-gray-900 font-bold md:text-6xl'>Temukan Petualangan Baru, Satu Mobil pada Satu Waktu</animated.h2>
            <animated.p style={paragraf} className='text-base text-gray-400 mb-5 md:px-10 md:text-lg'>Bersiaplah untuk petualangan baru dengan <span className='text-blue-600 font-semibold'>EaseRent!,</span> Kami adalah pilihan terbaik untuk rental mobil yang andal dan terpercaya.</animated.p>
            <button className='py-2 px-4 font-semibold text-white bg-blue-600 rounded-md block m-auto mt-8 mb-3 hover:bg-blue-800 duration-300 transition-all'>Sewa Sekarang</button>
            <button className=' text-gray-700 text-sm underline duration-300 transition italic'>Lihat Semua</button>
       </div>
       <animated.img style={gambar} src={heroImg} alt="hero" />
    </div>
  )
}

export default Hero