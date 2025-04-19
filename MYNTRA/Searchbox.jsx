import React from 'react'
import { IoIosSearch } from "react-icons/io";


const Searchbox = () => {
  return (
    <div className='h-[48%] w-[95%] bg-gray-200 rounded-sm flex items-center pl-[10px]'>
      <IoIosSearch className='text-[18px] pt-[2px]' />

      <input type="text" placeholder='Search for products,brands and more' className='h-[80%] w-[80%]  bg-gray-200 placeholder:text-[13px] placeholder:text-gray-500 pl-[15px] outline-none' />

    </div>
  )
}

export default Searchbox