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
        <h2 className='text-m text-left mr-[60px]'>Welcome to Bartons incredibly</h2>
        <span className='text-[21px] mt-4 max-w-xl mb-[30px]'>
          Your best local coffee. In addition to delicious sandwiches and cakes and hot dish of the day,
        </span>
        <Button
          className='w-[180px] py-[10px] px-[40px]'
          label={'View more'}
          onClick={handleClickButton}
        />
      </div>
    </div>
  )
}

export default About
