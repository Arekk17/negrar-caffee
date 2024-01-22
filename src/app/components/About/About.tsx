'use client'
import React from 'react'
import Button from '../Buttons/Button'

const About = () => {
  const handleClickButton = () => {
    console.log('click')
  }
  return (
    <div className='aboutBackground w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col items-end justify-center w-full mr-[100px]'>
        <h2 className='text-m text-left mr-[60px]'>Witamy w Negrar-Caffee</h2>
        <span className='text-[21px] mt-4 max-w-xl mb-[30px]'>
          Twoja najlepsza lokalna kawa. Oprócz pysznych kanapek i ciast oraz gorącego dania dnia,
        </span>
        <Button
          className='w-[180px] py-[10px] px-[40px] text-white'
          label={'View more'}
          onClick={handleClickButton}
          variant={'classic'}
        />
      </div>
    </div>
  )
}

export default About
