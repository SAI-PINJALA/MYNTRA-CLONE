import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";


const Icon = () => {
  return (
    <div className='h-[100%] w-[100%] flex items-center'>

      <div
        className='h-[70%] w-[33.3%] flex items-center justify-center flex-col'>
        <FaRegUser />
        <p>Profile</p>
      </div>

      <div
        className='h-[70%] w-[33.3%] flex items-center justify-center flex-col'>
        <FaRegHeart />
        <p>Wishlist</p>
      </div>

      <div
        className='h-[70%] w-[33.3%] flex items-center justify-center flex-col'>
        <IoBagOutline />
        <p>Bag</p>
      </div>


    </div>
  )
}

export default Icon