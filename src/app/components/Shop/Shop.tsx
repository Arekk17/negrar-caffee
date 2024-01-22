'use client'
import React from 'react'
import { productData } from '@/api/productDataMock'
import { ProductCard } from '../Card/ProductCard'
import { useDispatch } from 'react-redux'
import { addToBasket } from '@/store/shopSlice'

export const Shop = () => {
  const dispatch = useDispatch()
  const handleOrderClick = (id: number, name: string, price: number, image: any) => {
    dispatch(
      addToBasket({
        id,
        name,
        price,
        image,
        quantity: 0,
      }),
    )
  }
  return (
    <div className='w-full h-full ourMenuBackground'>
      <div className='flex w-full items-center justify-center pt-10'>
        <h2 className='text-l text-brownDark font-semibold'>SKLEP</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-10 place-items-center'>
        {productData.map(({ id, name, image, price }) => (
          <ProductCard
            key={id}
            name={name}
            image={image}
            price={`${price} zł`}
            handleOrder={() => handleOrderClick(id, name, price, image)}
          />
        ))}
      </div>
    </div>
  )
}
