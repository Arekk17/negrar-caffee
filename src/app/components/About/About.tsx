import React from 'react'
import Button from '../Buttons/Button'

const About = () => {
  const handleClickButton = () => {
    console.log('click')
  }
  return (
    <div className='aboutBackground w-full h-screen flex justify-center items-center'>
      <div className='flex justify-end w-full mr-24'>
        {' '}
        <div className='flex items-end flex-col'>
          <h2 className='text-m'>Welcome to Bartons incredibly</h2>
          <p className='text-[21px] flex-wrap max-w-1'>
            Your best local coffee. In addition to delicious sandwiches and cakes and hot dish of the day,{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
