import Image from 'next/image'
import React from 'react'
import MapImage from '@/assets/map.png'

export const Map = () => {
  return (
    <div className='w-full p-[50px] bg-[#E3D9D5]'>
      <div className='relative  border-brown border-8'>
        <Image
          src={MapImage}
          layout='responsive'
          width={500}
          height={500}
          alt={'map'}
        />
      </div>
    </div>
  )
}
