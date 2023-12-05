'use client'
import React, { useRef } from 'react'
import { IconButton, Box } from '@mui/material'
import { menuItem } from '../OurMenu/menuData'
import { LeftArrow } from '@/assets/Icon/LeftArrow'
import { RightArrow } from '@/assets/Icon/RightArrow'
import { ProductCard } from '../Card/ProductCard'

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
          {menuItem.map((item) => (
            <ProductCard
              key={item.name}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}
