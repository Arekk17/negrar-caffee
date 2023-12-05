import React from 'react'
import { OpinionCard } from '../Card/OpinionCard'

export const Opinion = () => {
  return (
    <div className='opinionBackground w-full h-full pb-[40px]'>
      <div className='flex items-center justify-center pt-[80px]'>
        <h2 className='text-[40px] text-white font-bold mb-[10px]'>What our Customers</h2>
      </div>
      <div className='pb-[40px]'>
        <OpinionCard />
      </div>
    </div>
  )
}
