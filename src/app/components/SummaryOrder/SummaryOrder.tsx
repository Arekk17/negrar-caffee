'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../Buttons/Button'
import { useRouter } from 'next/navigation'
import { makeOrder } from '@/api/orderFirebase'

export const SummaryOrder = () => {
  const router = useRouter()
  const [successMakeOrder, setSuccessMakeOrder] = useState('')

  const order = useSelector((state: any) => state.shopSlice.summaryOrder)
  const userId = localStorage.getItem('token')
  const currentUser = useSelector((state: any) => state.userSlice.userInfo)

  useEffect(() => {
    if (order === null) {
      router.push('/home/shop/basket')
    }
  }, [])

  const handleMakeOrder = () => {
    const newOrder = {
      ...order,
      items: order.items.map(({ image, ...item }: any) => item),
    }
    makeOrder(userId, currentUser, newOrder, setSuccessMakeOrder)
  }

  return (
    <div className='signinBackground w-full py-6 flex flex-col items-center'>
      <div className='w-full flex justify-center py-6'>
        <h2 className='text-m font-bold text-brownDark'>PODSUMOWANIE</h2>
      </div>
      <div className='flex justify-between items-center mb-8 gap-4'>
        {order ? (
          <div className='p-6 rounded shadow-md'>
            <div className='font-bold text-m mb-4'>Dane użytkownika</div>
            <div className='mb-4'>
              <span className='font-bold text-s'>Numer Zamówienia:</span> {order.orderNumber}
            </div>
            <div className='mb-4'>
              <span className='font-bold text-s'>Data Zamówienia:</span> {order.date}
            </div>
            <div className='mb-4'>
              <span className='font-bold text-s'>Razem:</span> {order.total}
            </div>
            <div className='font-bold text-s mb-2'>Produkty:</div>
            <ul className='list-disc pl-5'>
              {order?.items?.map((item: any) => (
                <li key={item.id}>
                  {item.name} - {item.quantity} szt. - {item.price}zł
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className='text-red-500'>Brak informacji o zamówieniu</p>
        )}
        {currentUser ? (
          <div className='p-6 mt-4 rounded shadow-md h-full'>
            <div className='font-bold text-m mb-4'>Dane użytkownika</div>
            <div className='mb-4'>
              <span className='font-bold text-s'>Imię:</span> {currentUser.name}
            </div>
            <div className='mb-4'>
              <span className='font-bold text-s'>Telefon:</span> {currentUser.phoneNu}
            </div>
            <div className='mb-4'>
              <span className='font-bold text-s'>Ulica:</span> {currentUser.street}
            </div>
            <div className='mb-4'>
              <span className='font-bold text-s'>Miasto:</span> {currentUser.postCode} {currentUser.city}
            </div>
          </div>
        ) : (
          <p>brak adresu prosze uzupelnic</p>
        )}
      </div>
      {successMakeOrder && (
        <div className='w-full flex justify-center py-6'>
          <p className='text-m font-bold text-green-500'>{successMakeOrder}</p>
        </div>
      )}
      <div>
        <Button
          label={'ZŁÓŻ ZAMÓWIENIE'}
          variant={'classic'}
          className='text-white py-4 px-8'
          onClick={handleMakeOrder}
        />
      </div>
    </div>
  )
}
