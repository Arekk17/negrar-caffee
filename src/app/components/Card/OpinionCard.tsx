import React from 'react'
import { opinionsData } from '../../../api/opinionData'
import { Stars } from '../Opinions/Star'
export const OpinionCard = () => (
  <div className='flex flex-col md:flex-row items-center w-full justify-center mt-10'>
    {opinionsData.map((opinion, index) => (
      <div
        key={index}
        className='relative inline-block mb-[50px] md:mr-4'
      >
        <div className='absolute w-[100px] h-[100px] rounded-full bg-white top-[-50px] left-1/2 transform -translate-x-1/2'></div>
        <div className='bg-[#583115] w-[370px] text-white pt-[50px]'>
          <div className='flex items-center justify-center flex-col'>
            <div className='flex flex-row my-2'>
              <Stars rating={opinion.rating} />
            </div>
            <p className='text-center my-2'>{opinion.descriptio}</p>
            <div className='text-green m-y'>{opinion.name}</div>
            <div>{opinion.time}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
)
