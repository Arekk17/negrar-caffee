import Image from 'next/image'
import React from 'react'
import Button from '../Buttons/Button'

interface ICard {
  id: any
  name: string
  image: any
  price: any
  description: string
}

export const ProductCard: React.FC<ICard> = ({ id, name, image, description, price }) => {
  const handleOrder = () => {
    console.log(`name: ${name} id: ${id} `)
  }
  return (
    <div className='mr-[40px] max-w-[260px] flex-shrink-0 relative'>
      <div className='p-2 h-full bg-brownDark bg-opacity-90 text-white'>
        <Image
          src={image}
          width={500}
          height={500}
          alt={name}
        />
        <h2 className='text-[25px]'>{name}</h2>
        <p className='text-[14px] text-cream'>{description}</p>
        <div className='flex flex-row justify-evenly my-[10px] items-center'>
          <p>{price}</p>
          <Button
            className='w-[120px] py-[10px] text-white'
            label='Zamowić'
            onClick={() => handleOrder()}
            variant={'classic'}
          />
        </div>
      </div>
    </div>
  )
}
