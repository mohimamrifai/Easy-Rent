import React from 'react'
import {SiToyota, SiHonda, SiBmw, SiMercedes, SiFord, SiChevrolet, SiNissan, SiAudi} from 'react-icons/si'

const Client = () => {
  return (
    <div className='flex justify-evenly items-center mt-10 py-5 flex-wrap gap-10'>
        <SiToyota size={30} color='#bebebe' />
        <SiHonda size={30} color='#bebebe' />
        <SiBmw size={30} color='#bebebe' />
        <SiMercedes size={30} color='#bebebe' />
        <SiFord size={30} color='#bebebe' />
        <SiChevrolet size={30} color='#bebebe' />
        <SiNissan size={30} color='#bebebe' />
        <SiAudi size={30} color='#bebebe' />
    </div>
  )
}

export default Client