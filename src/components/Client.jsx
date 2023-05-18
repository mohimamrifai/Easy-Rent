import React from 'react'
import {SiToyota, SiHonda, SiBmw, SiMercedes, SiFord, SiChevrolet, SiNissan, SiAudi} from 'react-icons/si'

const Client = () => {
  return (
    <div className='grid grid-cols-4 mt-10 gap-5 justify-center w-full items-center lg:grid-cols-8 lg:mb-10'>
        <SiToyota size={35} color='#bebebe' className=' mx-auto' />
        <SiHonda size={35} color='#bebebe' className=' mx-auto'/>
        <SiBmw size={35} color='#bebebe' className=' mx-auto'/>
        <SiMercedes size={35} color='#bebebe' className=' mx-auto'/>
        <SiFord size={35} color='#bebebe' className=' mx-auto'/>
        <SiChevrolet size={35} color='#bebebe' className=' mx-auto'/>
        <SiNissan size={35} color='#bebebe' className=' mx-auto'/>
        <SiAudi size={35} color='#bebebe' className=' mx-auto'/>
    </div>
  )
}

export default Client