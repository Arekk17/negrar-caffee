'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BasketCard } from '../Card/BasketCard'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { Button } from '../Buttons/Button'
import { useForm } from 'react-hook-form'
import { calculateTotal } from '@/helper/calculateTotal'
import { generateOrderNumber } from '@/helper/generateOrderNumber'
import { addSummaryOrder } from '@/store/shopSlice'
import { checkPromotion } from '@/api/orderFirebase'
import { useRouter } from 'next/navigation'

export const Basket = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [emptyBasket, setEmptyBasket] = useState<boolean>(false)
  const productBasket = useSelector((state: any) => state.shopSlice.basket)
  const total = calculateTotal(productBasket)
  const totalWithDelivery = total + 9
  const [finalPrice, setFinalPrice] = useState<number>(totalWithDelivery)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setEmptyBasket(productBasket.length === 0)
  }, [productBasket])

  const onSubmit = (data: any) => {
    checkPromotion(data.discountCode, total)
      .then((discountedPrice) => {
        console.log(`Nowa cena po zastosowaniu promocji: ${discountedPrice}`)
        setFinalPrice(discountedPrice + 9)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const handleCheckout = () => {
    if (productBasket.length === 0) {
      console.log('Cannot proceed to checkout, the basket is empty.')
      return
    }
    const orderNumber = generateOrderNumber()
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    const orderDetails = {
      orderNumber: orderNumber,
      items: productBasket,
      total: totalWithDelivery + 'zł',
      date: currentDate,
    }
    console.log(orderDetails)
    dispatch(addSummaryOrder(orderDetails))
    router.push('/home/shop/basket/summaryOrder')
  }

  return (
    <div className='signinBackground w-full py-6 flex flex-col items-center'>
      <div className='w-full flex justify-center py-6'>
        <h2 className='text-l font-bold text-brownDark'>KOSZYK</h2>
      </div>
      <div className='flex w-full justify-center'>
        <div className='w-1/3'>
          {productBasket.length > 0 ? (
            productBasket.map((product: any) => (
              <div className='mb-4'>
                <BasketCard
                  key={product.id}
                  id={product.id}
                  quantity={product.quantity}
                  title={product.name}
                  price={product.price}
                  image={product.image.src}
                />
              </div>
            ))
          ) : (
            <p className='text-center'>Brak produktów w koszyku</p>
          )}
        </div>
        <div className='flex flex-col w-1/4 h-[500px] bg-white p-6 rounded-lg'>
          <h3 className='text-lg mb-4 font-bold'>Zamówienie</h3>
          <div className='flex justify-between mb-2'>
            <span className='font-bold'>Suma częściowa</span>
            <span className='text-gray font-bold'>{total}zł</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='font-bold'>dostawa</span>
            <span className='text-gray font-bold'>9zł</span>
          </div>
          <div>
            <span className='font-bold'>Kod rabatowy</span>
            <div className='flex items-center justify-between'>
              <TextInputWithLabel
                type='text'
                placeholder='Kod rabatowy'
                register={register('discountCode', { required: 'This field is required' })}
              />
              <Button
                label={'aktywuj'}
                variant={'classic'}
                className='text-white py-2 px-6'
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </div>
          <div className='flex items-start justify-between mt-auto'>
            <div className='flex flex-col'>
              <span className='font-bold'>Suma Całkowita</span>
              <span className='text-gray'>(Zawiera podatek Vat)</span>
            </div>
            <span>{finalPrice}zł</span>
          </div>
          <div className='mt-auto ml-auto mr-auto'>
            <Button
              label={'PRZEJDZ DO KASY'}
              variant={'classic'}
              className='text-white py-4 px-8'
              onClick={handleCheckout}
              disabled={emptyBasket}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
