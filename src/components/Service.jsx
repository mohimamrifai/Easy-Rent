import React from 'react'
import Box from './Box'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {FaShippingFast} from 'react-icons/fa'
import {MdSecurity} from 'react-icons/md'

const rentalServices = [
  {
    service: "Penyewaan Mobil Cepat",
    description: "Layanan utama dalam rental mobil adalah menyediakan kendaraan untuk disewakan kepada pelanggan.",
    icon: BsFillCarFrontFill,
    duration: 500
  },
  {
    service: "Pengiriman & Penjemputan",
    description: "Layanan pengiriman dan penjemputan mobil untuk memberikan kemudahan kepada pelanggan.",
    icon: FaShippingFast,
    duration: 700
  },
  {
    service: "Asuransi & Perlindungan",
    description: "Menawarkan opsi asuransi dan perlindungan tambahan untuk memberikan keamanan ekstra selama masa sewa mobil.",
    icon: MdSecurity,
    duration: 1000
  }
];


const Service = () => {

  return (
    <div className='text-center my-10 bg-blue-600 py-10 px-8 md:h-[400px] lg:h-[350px] md:mt-20 lg:p-10 mb-20 rounded-md'>
        <h3 className='text-2xl font-bold text-white mb-8 md:text-2xl'>Layanan kami</h3>
        <p className='text-3xl font-semibold text-gray-50 mb-8 md:w-[70%] md:mx-auto md:mb-3'>kami memiliki layanan terbaik untuk sewa mobil</p>
        <div className="container-box mt-5 flex flex-col gap-8 md:grid md:grid-cols-3 md:relative md:gap-2 md:top-5 md:z-10 lg:gap-6">
        {rentalServices.map((data) => (
          <Box Icon={data.icon} title={data.service} desc={data.description} duration={data.duration} />
        ))}
        </div>
    </div>
  )
}

export default Service