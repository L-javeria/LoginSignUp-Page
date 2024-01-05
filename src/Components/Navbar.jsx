import React from 'react'
import logo from '../Assests/logo.png'
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className=' px-5 py-2 flex justify-between w-full shadow-gray-300 shadow-lg'>
        <div className='flex space-x-3 items-end'>
        <img
              className="mx-auto h-[54px]  w-auto  p-2 border  border-neutral-500"
              src={logo}
              alt="Your Company"
            />
        <h1 className='text-3xl'> CompanyName </h1>
        </div>
        <div className='flex items-end text-lg'>
            <ul className='flex space-x-10'>
                <li>About</li>
                <li>Projects</li>
                <li>Tools</li>
                <li>Clients</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='flex items-end text-lg'>
            <ul className='flex space-x-3 '>
                <li><IoSearch size={36} /></li>
                <li><FaUserCircle size={36} /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar