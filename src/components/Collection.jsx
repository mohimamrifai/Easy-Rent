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
      <div className='flex justify-between mb-4 lg:justify-start lg:gap-3'>
        <div className='flex items-center gap-3'>
            <p className='text-xl font-semibold'>Filter</p>
            <AiFillFilter size={20} />
        </div>
        <select name="tab" id="tab" className='text-xl' value={selectedTab} onChange={filter}>
            <option value="popular">Popular</option>
            <option value="larger">Large Car</option>
            <option value="small">Small Car</option>
            <option value="exclusive">Exclusive</option>
        </select>
      </div>

      <div data-aos="zoom-in" className="tab-content md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-4">
        {data.filter((d) => d.kategori == selectedTab).map(({nama, id, harga, gambar, kategori}) => (
            <div key={id} className='p-3 bg-slate-100 mb-3 md:p-2 md:mb-0'>
                <img src={gambar} alt={nama} />
                <span className='text-slate-400'>{kategori}</span>
                <p className='text-2xl font-bold text-red-500'>{harga}</p>
                <h3 className='text-2xl font-semibold mb-4'>{nama}</h3>
                <button className='bg-gray-700 p-2 font-bold text-white rounded-sm'>Booking now</button>
            </div>
        ))}
      </div>
      <div className='text-center w-[50%] lg:w-[20%] mx-auto bg-purple-500 font-bold py-1 text-white text-lg flex justify-center items-center gap-1 my-5'>
        <button>See all cars </button>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
}

export default CollectionCars;
