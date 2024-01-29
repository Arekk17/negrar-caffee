'use client'
import React, { useRef, useEffect, useState } from 'react'
import { menuItem } from '../../../api/menuData'
import { LeftArrow } from '@/assets/Icon/LeftArrow'
import { RightArrow } from '@/assets/Icon/RightArrow'
import { ProductCard } from '../Card/ProductCard'

export const CaffeeSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => window.innerWidth < 768
    setIsMobile(checkIfMobile())

    const handleResize = () => {
      setIsMobile(checkIfMobile())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 300 : 1200
      const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount

      scrollContainerRef.current.scrollBy({ left: scrollDirection, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className='relative flex items-center mt-[43px] ml-[10px] w-full md:w-[1200px]'>
        {!isMobile && (
          <button
            onClick={() => scroll('left')}
            className='absolute left-[-45px]  z-10 bg-white bg-opacity-80 w-[50px] h-[50px] flex items-center justify-center rounded-2xl'
          >
            <LeftArrow />
          </button>
        )}
        {!isMobile && (
          <button
            onClick={() => scroll('right')}
            className='absolute right-[-5px]  z-10 bg-white bg-opacity-80 w-[50px] h-[50px] flex items-center justify-center rounded-2xl'
          >
            <RightArrow />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className={`scroll-container flex ${isMobile ? 'overflow-x-auto' : 'md:overflow-hidden'}`}
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
