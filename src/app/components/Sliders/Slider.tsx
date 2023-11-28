'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { Paper, Typography, IconButton, Box } from '@mui/material'
import Button from '../Buttons/Button'
import { menuItem } from '../OurMenu/menuItem'
import { LeftArrow } from '@/assets/icon/LeftArrow'
import { RightArrow } from '@/assets/icon/RightArrow'

export const CaffeeSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 1200
      const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount

      scrollContainerRef.current.scrollBy({ left: scrollDirection, behavior: 'smooth' })
    }
  }

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        className='flex flex-row items-center mt-[43px] ml-[10px] w-[1155px]'
      >
        <IconButton
          onClick={() => scroll('left')}
          className='absolute left-[135px] z-10 bg-white w-[50px] h-[50px] hover:bg-white'
        >
          <LeftArrow />
        </IconButton>
        <IconButton
          onClick={() => scroll('right')}
          className='absolute right-[125px] z-10 bg-white w-[50px] h-[50px] hover:bg-white'
        >
          <RightArrow />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          display='flex'
          overflow='hidden'
          className='scroll-container'
        >
          {menuItem.map((item, index) => (
            <Box
              key={index}
              className='mr-[40px] max-w-[260px] flex-shrink-0 relative'
            >
              <Paper
                className='p-2 h-full bg-brownDark bg-opacity-90 text-white'
                elevation={3}
              >
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.name}
                />
                <Typography className='text-[25px]'>{item.name}</Typography>
                <Typography className='text-[14px] text-cream'>{item.description}</Typography>
                <div className='flex flex-row justify-evenly my-[10px] items-center'>
                  <Typography>{item.price}</Typography>
                  <Button
                    className='w-[120px] py-[10px]'
                    label='Zamowić'
                    onClick={undefined}
                  />
                </div>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}
