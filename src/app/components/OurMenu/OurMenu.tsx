import React from 'react'
import { CaffeeSlider } from '../Sliders/Slider'

const OurMenu = () => {
  return (
    <div className='ourMenuBackground w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden relative flex-col'>
      <div className='mb-[100px]'>
        <h2 className='text-brown text-m font-bold'>Our Menu</h2>
      </div>
      <div className='flex flex-col items-center w-full '>
        <div className='self-start ml-[200px]'>
          <p className='text-brownLight font-semiBold text-[30px] underline'>Coffee</p>
        </div>
        <CaffeeSlider />
      </div>
    </div>
  )
}

export default OurMenu
