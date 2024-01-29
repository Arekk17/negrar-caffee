'use client'
import React from 'react'
import { Button } from '../Buttons/Button'
import { useRouter } from 'next/navigation'

export const Landing = () => {
  const router = useRouter()
  const handleClickButton = () => {
    router.push('/home/shop')
  }
  return (
    <div className='landingBackground relative h-screen text-white flex justify-center items-center px-4 md:px-10 lg:justify-start lg:px-20'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30'></div>
      <div className='max-w-[643px] z-10 text-center lg:text-left lg:ml-[100px]'>
        <h1 className='text-l lg:text-xl mb-4'>ŚWIEŻA KAWA O PORANKU</h1>
        <p className='text-s lg:text-s mb-[30px]'>
          Rozpocznij dzień od kawy. Wybierz aromatyczne doznania w naszym sklepie, gdzie świeżo palone ziarna spotykają się z Twoją pasją do
          wyjątkowych poranków.
        </p>
        <Button
          className='w-full sm:w-auto py-2 sm:py-3 px-5 sm:px-10 text-lg'
          onClick={handleClickButton}
          label='Zamów teraz'
          variant={'classic'}
        />
      </div>
    </div>
  )
}
