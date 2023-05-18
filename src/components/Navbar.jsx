import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [active, setActive] = useState(false)

    const toogleMenu = () => {
        setActive(!active)
    }

    return (
        <div className=' flex justify-between items-center sticky top-0 z-50 p-5 shadow-sm bg-white md:px-10 lg:px-16'>
            <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>Easy<span className='text-blue-600'>Rent</span></h1>
            <div className={`flex flex-col ${active ? "fixed top-0 right-0 bg-blue-600 w-[60%] py-10 px-5 h-full text-white" : "fixed top-0 -right-full h-full"} font-semibold gap-4 text-lg transition-all duration-300 md:static md:flex-row md:items-center`}>
                <a href="#">Tentang Kami</a>
                <select className='bg-transparent border-none -ml-1 outline-none' name="price" id="price">
                    <option className='text-gray-900' value="1">Harga</option>
                    <option className='text-gray-900' value="2">opsi 2</option>
                    <option className='text-gray-900' value="3">opsi 3</option>
                </select>
                <a href="#">Kontak</a>
                <button className='border-white border-2 py-2 text-white md:py-1 md:px-2 rounded-sm hover:bg-white hover:text-gray-900 duration-300 transition-all md:bg-blue-600 md:text-white md:rounded-md md:text-sm md:hover:border-2 md:hover:border-gray-900'>Download app</button>
            </div>
            <AiOutlineClose size={25}  className={`${active ? "absolute z-10 top-3 right-3 text-white": "hidden"}`} onClick={toogleMenu} />
            <AiOutlineMenu size={25} className={`${active ? "hidden": "block"} md:hidden`} onClick={toogleMenu}/>
        </div>
    )
}

export default Navbar