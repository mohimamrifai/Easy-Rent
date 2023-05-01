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
          <animated.h2 style={h1} className='py-5 text-4xl text-gray-900 font-bold md:text-6xl'>Search and fine your best car rental with easy way</animated.h2>
            <animated.p style={paragraf} className='text-base text-gray-400 mb-5 md:px-10 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic omnis repellendus earum eos voluptates voluptas consequuntur distinctio animi modi quidem quod optio minus neque ullam nostrum</animated.p>
            <button className='py-2 px-4 font-semibold text-white bg-purple-500 block m-auto mb-3'>Booking now</button>
            <button className='font-bold border-b-2 border-black text-lg'>See all cars</button>
       </div>
       <animated.img style={gambar} src={heroImg} alt="hero" />
    </div>
  )
}

export default Hero