import React from 'react'
import image from "./images/kids1.webp"
import flexone from "./images/kidsflex1.webp"
import flextwo from "./images/kidsflex2.webp"
import flexthree from "./images/kidsflex3.webp"
import flexfour from "./images/kidsflex4.webp"
import flexfive from "./images/kidsflex5.webp"
import flexsix from "./images/kidsflex6.webp"
import flexseven from "./images/kidsflex7.webp"
import flexeight from "./images/kidsflex8.webp"
import flexnine from "./images/kidsflex9.webp"
import a from "./images/kidsflex2.1.webp"
import b from "./images/kidsflex2.2.webp"
import c from "./images/kidsflex2.3.webp"
import d from "./images/kidsflex2.4.webp"
import e from "./images/kidsflex2.5.webp"
import f from "./images/kidsflex2.6.webp"
import g from "./images/kidsflex2.7.webp"
import h from "./images/kidsflex2.8.webp"
import i from "./images/kidsflex2.9.webp"
import j from "./images/kidsflex2.10.webp"
import k from "./images/kidsflex2.11.webp"
import aa from "./images/kidsflex3.1.webp"
import bb from "./images/kidsflex3.2.webp"
import cc from "./images/kidsflex3.3.webp"
import dd from "./images/kidsflex3.4.webp"
import ee from "./images/kidsflex3.5.webp"


const KidsPage = () => {
  return (
    <div>
      <div className='h-[500px] mt-[40px]'>
        <img src={image} />
      </div>

      <div className=' font-sans text-4xl font-medium ml-[100px]'>
        <h4>FAVOURITE BRANDS</h4>
      </div>

      <div className='flex items-center  mt-[50px]'>
        <img className='w-[11.1%]' src={flexone} />
        <img className='w-[11.1%]' src={flextwo} />
        <img className='w-[11.1%]' src={flexthree} />
        <img className='w-[11.1%]' src={flexfour} />
        <img className='w-[11.1%]' src={flexfive} />
        <img className='w-[11.1%]' src={flexsix} />
        <img className='w-[11.1%]' src={flexseven} />
        <img className='w-[11.1%]' src={flexeight} />
        <img className='w-[11.1%]' src={flexnine} />
      </div>

      <div className='font-sans text-4xl font-medium ml-[100px] mt-[50px]'>
        <h4>TOP PICKS</h4>
      </div>

      <div className='flex items-center mt-[60px]'>
        <img className='w-[9%]' src={a} />
        <img className='w-[9%]' src={b} />
        <img className='w-[9%]' src={c} />
        <img className='w-[9%]' src={d} />
        <img className='w-[9%]' src={e} />
        <img className='w-[9%]' src={f} />
        <img className='w-[9%]' src={g} />
        <img className='w-[9%]' src={h} />
        <img className='w-[9%]' src={i} />
        <img className='w-[9%]' src={j} />
        <img className='w-[9%]' src={k} />
      </div>

      <div className='font-sans text-4xl font-medium ml-[100px] mt-[50px]'>
        <h4>ICONIC BRANDS</h4>
      </div>

      <div className='flex items-center mt-[70px]'>
        <img className='w-[20%]' src={aa} />
        <img className='w-[20%]' src={bb} />
        <img className='w-[20%]' src={cc} />
        <img className='w-[20%]' src={dd} />
        <img className='w-[20%]' src={ee} />
      </div>
    </div>
  )
}

export default KidsPage