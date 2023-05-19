import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from '../Data';
import {AiFillFilter, AiOutlineArrowRight} from 'react-icons/ai'

function CollectionCars() {
  const [selectedTab, setSelectedTab] = useState("popular");

  const filter = (e) => {
    const tab = e.target.value;
    setSelectedTab(tab);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='md:mt-60'>
      <div className='flex justify-between mb-8 lg:justify-start lg:gap-3'>
        <div className='flex items-center gap-3'>
          <p className='text-xl font-semibold text-blue-600'>Filter</p>
          <AiFillFilter size={20} className='text-blue-600' />
        </div>
        <select name="tab" id="tab" className='text-xl bg-blue-600 py-1 px-3 rounded-md text-white outline-none' value={selectedTab} onChange={filter}>
          <option value="popular">Sedan</option>
          <option value="larger">Mobil Mewah</option>
          <option value="small">Mobil Sport</option>
          <option value="exclusive">Van</option>
        </select>
      </div>

      <div className="tab-content md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-4">
        {data.filter((d) => d.kategori == selectedTab).map(({nama, id, harga, gambar, kategori}) => (
          <div key={id} className=' bg-slate-100 mb-8 md:mb-0 rounded-xl overflow-hidden pb-5'>
            <img src={gambar} alt={nama} className='mb-4 h-[200px] w-full object-cover'/>
            <span className='text-slate-700 ms-5'>{kategori}</span>
            <p className='text-3xl font-bold my-1 ms-5 text-blue-600'>${harga}</p>
            <h3 className='text-xl text-slate-900 ms-5 font-semibold mb-4'>{nama}</h3>
            <button className='py-2 px-4 font-bold text-white ms-5 rounded-md bg-blue-600 hover:bg-blue-900 duration-300 transition-all'>Lihat Detail</button>
            </div>
        ))}
      </div>
      <div className='text-center w-[150px] lg:w-[20%] mx-auto bg-blue-600 font-bold py-2 text-white text-lg flex justify-center items-center gap-1 my-5 rounded-md cursor-pointer hover:bg-blue-700 transition-all duration-300 px-4'>
        <button>Lihat Semua </button>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
}

export default CollectionCars;
