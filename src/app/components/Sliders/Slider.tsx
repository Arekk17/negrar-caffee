'use client'
import React, { useRef } from 'react'
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
      <div className='relative flex items-center mt-[43px] ml-[10px] w-[1155px]'>
        <button
          onClick={() => scroll('left')}
          className='absolute left-[-45px] z-10 bg-white bg-opacity-80 w-[50px] h-[50px]  flex items-center justify-center rounded-2xl'
        >
          <LeftArrow />
        </button>
        <button
          onClick={() => scroll('right')}
          className='absolute right-[-45px] z-10 bg-white bg-opacity-80 w-[50px] h-[50px] hover:bg-white flex items-center justify-center rounded-2xl'
        >
          <RightArrow />
        </button>

        <div
          ref={scrollContainerRef}
          style={{ display: 'flex', overflow: 'hidden' }}
          className='scroll-container'
        >
          {menuItem.map((item) => (
            <ProductCard
              className='mr-[40px]'
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              handleOrder={() => console.log('x')}
            />
          ))}
        </div>
      </div>
    </>
  )
}
