'use client'
import React from 'react'
import Image from 'next/image'
import coffee from '@/assets/pngwing.com (1).png'
import { Button } from '../Buttons/Button'

export const About = () => {
  const handleClickButton = () => {
    console.log('click')
  }
  return (
    <div className='signinBackground w-full h-screen flex flex-col-reverse md:flex-row justify-center items-center p-4 md:p-10'>
      <div className='flex flex-1 justify-start items-center'>
        <Image
          src={coffee}
          alt='Coffee'
          width={800}
          height={600}
        />
      </div>
      <div className='flex flex-1 flex-col md:items-start justify-center'>
        <h2 className='text-l mb-4'>Witamy w Negrar-Caffee</h2>
        <span className='text-s mt-4 mb-6'>Twoja najlepsza lokalna kawa. Oprócz pysznych kanapek i ciast oraz gorącego dania dnia,</span>
        <Button
          className='py-[10px] px-[40px] text-white'
          label={'Zobacz Więcej'}
          onClick={handleClickButton}
          variant={'classic'}
        />
      </div>
    </div>
  )
}
