'use client'
import Image from 'next/image'
import { IncreasingIcon } from '@/assets/Icon/IncreasingIcon'
import { ReducationIcon } from '@/assets/Icon/ReducationIcon'
import { DeleteIcon } from '@/assets/Icon/DeleteIcon'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromBasket } from '@/store/shopSlice'

interface IBasketCard {
  id: number
  quantity: number
  title: string
  price: number
  image: any
}

export const BasketCard: React.FC<IBasketCard> = ({ id, quantity, image, title, price }) => {
  const dispatch = useDispatch()
  const handleIncrease = () => dispatch(increaseQuantity(id))
  const handleDecrease = () => dispatch(decreaseQuantity(id))
  const handleRemove = () => dispatch(removeFromBasket(id))

  let summary = price * quantity

  return (
    <div className='flex justify-between w-[537px] h-[243px] bg-white rounded-md'>
      <div className='flex flex-col justify-center ml-4'>
        <Image
          src={image}
          alt={''}
          width={140}
          height={200}
        />
      </div>
      <div className='flex flex-col mt-8'>
        <h2 className='text-s'>{title}</h2>
        <div className='flex flex-row'>
          <span className='mr-2 text-gray'>Ilość:</span>
          <div
            className='mr-2'
            onClick={handleDecrease}
          >
            <ReducationIcon />
          </div>
          <span className='mr-2 text-gray'>{quantity}</span>
          <div
            className='mr-2'
            onClick={handleIncrease}
          >
            <IncreasingIcon />
          </div>
        </div>
        <div
          className='flex items-center'
          onClick={handleRemove}
        >
          <DeleteIcon />
          <span className='ml-2'>przenieść do kosza</span>
        </div>
      </div>
      <div className='flex flex-row justify-end items-end gap-10 mr-4 mb-4'>
        <div className='flex flex-col text-gray text-[18px]'>
          <p>Cena</p>
          <p>{price}</p>
        </div>
        <div className='flex flex-col gap-0'>
          <span className='text-gray text-[22px] font-bold'>Suma</span>
          <span className='text-black text-right text-s font-bold'>{summary}</span>
        </div>
      </div>
    </div>
  )
}
