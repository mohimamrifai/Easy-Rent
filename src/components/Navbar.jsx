import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [active, setActive] = useState(false)

    const toogleMenu = () => {
        setActive(!active)
    }

    return (
        <div className=' flex justify-between items-center sticky top-0 z-50 p-5 shadow-sm bg-white md:px-10 lg:px-16'>
            <h1 className='text-2xl font-bold text-gray-800'>RENT</h1>
            <div className={`flex flex-col ${active ? "absolute top-0 right-0 bg-purple-200 w-[60%] py-10 px-3" : "absolute top-0 -right-full"} font-semibold gap-4 text-lg transition-all duration-200 md:static md:flex-row md:items-center`}>
                <a href="#">About</a>
                <a href="#">Feature</a>
                <select className='bg-transparent border-none -ml-1' name="price" id="price">
                    <option className='text-gray-900' value="1">Price</option>
                    <option className='text-gray-900' value="2">opsi 2</option>
                    <option className='text-gray-900' value="3">opsi 3</option>
                </select>
                <a href="#">Resource</a>
                <a href="#">Contact</a>
                <button className='bg-purple-600 py-2 text-white md:py-1 md:px-2 rounded-sm'>Download app</button>
            </div>
            <AiOutlineClose size={25}  className={`${active ? "absolute z-10 top-3 right-3": "hidden"}`} onClick={toogleMenu} />
            <AiOutlineMenu size={25} className={`${active ? "hidden": "block"} md:hidden`} onClick={toogleMenu}/>
        </div>
    )
}

export default Navbar