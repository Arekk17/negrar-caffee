import React from 'react'

const TimeOpen = () => {
  return (
    <div className='timeOpenBackground h-[440px] flex items-center justify-start gap-[100px]'>
      <div className='text-white text-m bg-brownTransparent w-[540px] h-[137px] flex flex-col items-center justify-center ml-[100px] p-4'>
        <h2 className='font-bold text-m mb-2'>GODZINY OTWARCIA</h2>
      </div>
      <div className='grid grid-cols-2 gap-4 text-white text-m'>
        <div className='flex flex-col items-start justify-center'>
          <span>Mon-Thu</span>
          <span>08:00-18:00</span>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <span>Fri</span>
          <span>08:00-19:00</span>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <span>Sat</span>
          <span>9:00-18:00</span>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <span>Sun</span>
          <span>9:00-18:00</span>
        </div>
      </div>
    </div>
  )
}

export default TimeOpen
