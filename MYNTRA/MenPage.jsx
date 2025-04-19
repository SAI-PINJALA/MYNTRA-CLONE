import React from 'react'
import men1 from "./images/Men1.webp"
import flexone from "./images/flex1.webp"
import flextwo from "./images/flex2.webp"
import flexthree from "./images/flex3.webp"
import flexfour from "./images/flex4.webp"
import a from "./images/flex2.1.webp"
import b from "./images/flex2.2.webp"
import c from "./images/flex2.3.webp"
import d from "./images/flex2.4.webp"


const MenPage = () => {
  return (
    <div>
      <div className='mt-[40px] h-[470px] mb-[30px]'>
        <img src={men1} />
      </div>

      <div className='h-[100px]'>
        <h4 className='font-medium font-sans ml-[25px] text-4xl'>BIGGEST DEALS ON TOP BRANDS</h4>
      </div>

      <div className=' h-[500px] flex items-center m-[40px] '>
        <img className='w-[25%]' src={flexone} />
        <img className='w-[25%]' src={flextwo} />
        <img className='w-[25%]' src={flexthree} />
        <img className='w-[25%]' src={flexfour} />
      </div>

      <div className='h-[500px] flex items-center m-[40px]'>
        <img className='w-[25%]' src={a}/>
        <img className='w-[25%]' src={b}/>
        <img className='w-[25%]' src={c}/>
        <img className='w-[25%]' src={d}/>
      </div>


    </div>
  )
}

export default MenPage