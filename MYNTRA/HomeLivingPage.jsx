import React from 'react'
import image from "./images/homeliving1.webp"
import flex1 from "./images/homelivingflex1.webp"
import flex2 from "./images/homelivingflex.2.webp"

const HomeLivingPage = () => {
  return (
    <div>
      <div className='h-[55vh] bg-black mt-[25px] ml-[60px] mr-[60px]'>
        <img src={image}/>
      </div>

      <div className=' font-sans font-medium text-4xl mt-[55px] ml-[90px] '>
        <h6>NICE TO SEE YOU,COME ON IN!</h6>
      </div>

      <div className=' ml-[60px] flex items-center'>
        <img className='w-[35%] mr-[8px]' src={flex1}/>
        <img className='w-[35%] mr-[8px]' src={flex2}/>

        <aside className='w-[30%] ml-[40px]'>
          <ol>
            <li><a href="">Furnishings & Bed Linen</a></li>
            <li><a href="">Bed Sheets</a></li>
            <li><a href="">Bedding Sets & Bed Covers</a></li>
            <li><a href="">Blankets, Quilts & Dohars</a></li>
            <li><a href="">Pillows & Pillow Covers</a></li>
            <li><a href="">Cushions & Cushion Covers</a></li>
            <li><a href="">Curtains</a></li>
            <li><a href="">Mats & Dhurries</a></li>
            <li><a href="">Carpets</a></li>
            <li><a href="">Bath & Bed Linen</a></li>
            <li><a href="">Towels & Towel Sets</a></li>
            <li><a href="">Bath Robes</a></li>
            <li><a href="">Bathroom Accessories</a></li>
            <li><a href="">Shower Curtains</a></li>
            <li><a href="">Bath Rugs</a></li>
            <li><a href="">Home Décor</a></li>
            <li><a href="">Pooja Essentials</a></li>
            <li><a href="">Laptop Table</a></li>
            <li><a href="">Ottomans</a></li>
            <li><a href="">Artificial Flowers & Plants</a></li>
            <li><a href="">Candles & Candle Holders</a></li>
            <li><a href="">Clocks</a></li>
            <li><a href="">Planters & Garden Accessories</a></li>
            <li><a href="">Home Fragrances</a></li>
            <li><a href="">Mirrors</a></li>
            <li><a href="">Wall Art</a></li>
            <li><a href="">Wall Décor</a></li>
            <li><a href="">Wall Shelves</a></li>
            <li><a href="">Showpieces & Vases</a></li>
            <li><a href="">Lamps & Lighting</a></li>
            <li><a href="">Floor Lamps</a></li>
            <li><a href="">Table Lamps</a></li>
            <li><a href="">Wall Lamp & String Lights</a></li>
            <li><a href="">Bathroom Lights & Outdoor Lamps</a></li>
            <li><a href="">Ceiling Lamps</a></li>
            <li><a href="">Kitchen & Table</a></li>
            <li><a href="">Dinnerware</a></li>
            <li><a href="">Cups & Mugs</a></li>
            <li><a href="">Water Bottles</a></li>
            <li><a href="">Bakeware</a></li>
            <li><a href="">Trays & Serveware</a></li>
            <li><a href="">Bar & Drinkware</a></li>
            <li><a href="">Cookware & Kitchen Tools</a></li>
            <li><a href="">Kitchen Storage</a></li>
            <li><a href="">Table Covers & Furnishings</a></li>
            <li><a href="">Storage & Organisers</a></li>
            <li><a href="">Organisers</a></li>
            <li><a href="">Hooks & Holders</a></li>
          </ol>
        </aside>
      </div>
    </div>
  )
}

export default HomeLivingPage