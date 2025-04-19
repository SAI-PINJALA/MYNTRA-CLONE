import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (

    <ol className='h-[100%] w-[100%] flex justify-evenly items-center  '>

      <li><Link to="/men" className='text-gray-700 font-semibold'>Men</Link></li>
      <li><Link to="/women" className='text-gray-700 font-semibold'>Women</Link></li>
      <li><Link to="/kids" className='text-gray-700 font-semibold'>Kids</Link></li>
      <li><Link to="homeliving" className='text-gray-700 font-semibold'>Home&Living</Link></li>
      <li><Link to="beauty" className='text-gray-700 font-semibold'>Beauty</Link></li>
      <li><Link to="studio" className='text-gray-700 font-semibold'>Studio <sup className='text-pink-700 font-semibold'>NEW</sup></Link></li>

    </ol>

  )
}


export default Menu