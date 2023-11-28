'use client'
import React from 'react'
import Button from '../Buttons/Button'
import { useRouter } from 'next/navigation'

const Landing = () => {
  const router = useRouter()
  const handleClickButton = () => {
    router.push('/shop')
  }
  return (
    <div className='landingBackground relative h-screen text-white flex justify-start items-center'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30'></div>
      <div className='max-w-[643px] ml-[100px] z-10'>
        <h1 className='text-xl mb-4'>ŚWIEŻA KAWA O PORANKU</h1>
        <p className='text-s mb-[30px]'>
          Rozpocznij dzień od kawy. Wybierz aromatyczne doznania w naszym sklepie, gdzie świeżo palone ziarna spotykają się z Twoją pasją do
          wyjątkowych poranków
        </p>
        <Button
          className='w-[330px] py-[27px] px-[60px] text-[24px]'
          onClick={handleClickButton}
          label='Zamów teraz'
        />
      </div>
    </div>
  )
}

export default Landing
