import React from 'react'
import image from "./images/women1.webp"
import flex1 from "./images/womenflex1.webp"
import flex2 from "./images/womenflex2.webp"
import flex3 from "./images/womenflex3.webp"
import flex4 from "./images/womenflex4.webp"
import flex5 from "./images/womenflex5.webp"
import a from "./images/womenflex2.1.webp"
import b from "./images/womenflex2.2.webp"
import c from "./images/womenflex2.3.webp"
import d from "./images/womenflex2.4.webp"
import e from "./images/womenflex2.5.webp"



const WomenPage = () => {
  return (
    <div>
      <div className='h-[450px] mt-[45px] '>
        <img src={image} />
      </div>

      <div className=' font-medium font-sans text-4xl m-[30px] mb-[60px]'>
        <h4>BIGGEST DEALS ON TOP BRANDS</h4>
      </div>

      <div className=' flex items-center ml-[48px] mr-[190px]'>
        <img src={flex1} className='w-[20%] m-[15px]'/>
        <img src={flex2} className='w-[20%] m-[15px]'/>
        <img src={flex3} className='w-[20%] m-[15px]'/>
        <img src={flex4} className='w-[20%] m-[15px]'/>
        <img src={flex5} className='w-[20%] m-[15px]'/>
      </div>

      <div className='flex items-center ml-[48px] mr-[190px]'>
        <img src={a} className='w-[20%] m-[15px]'/>
        <img src={b} className='w-[20%] m-[15px]'/>
        <img src={c} className='w-[20%] m-[15px]'/>
        <img src={d} className='w-[20%] m-[15px]'/>
        <img src={e} className='w-[20%] m-[15px]'/>
      </div>
    </div>
  )
}

export default WomenPage