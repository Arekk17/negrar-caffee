import { fetchAllOrdersFromId } from '@/api/orderFirebase'
import { Arrow } from '@/assets/Icon/Arrow'
import { Order } from '@/types/orderTypes'
import React, { useEffect, useState } from 'react'

export const HistoryOrder = () => {
  const [orders, setOrders] = useState([])
  const [error, setError] = useState(null)
  const [viewedOrderNumber, setViewedOrderNumber] = useState<string | null>(null)

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = localStorage.getItem('token')
      if (userId) {
        fetchAllOrdersFromId(userId)
          .then((fetchedOrders: any) => {
            setOrders(fetchedOrders)
          })
          .catch((err) => {
            console.error(err)
            setError(err.message)
          })
      }
    }

    fetchOrders()
  }, [])

  const handleViewProducts = (orderNumber: string) =>
    setViewedOrderNumber((prevOrderNumber) => (prevOrderNumber === orderNumber ? null : orderNumber))
  return (
    <div className='container mx-auto py-4'>
      <div className='shadow overflow-y:scroll sm:rounded-lg'>
        {orders.map((order: Order) => (
          <div
            key={order.orderNumber}
            className='px-4 py-5 border-b border-gray-200'
          >
            <p className='text-s font-semibold mb-2'>Numer Zamówienia: {order.orderNumber}</p>
            <div
              className='flex font-semibold cursor-pointer'
              onClick={() => handleViewProducts(order.orderNumber)}
            >
              <span className='mr-4'>Produkty</span>{' '}
              <span className={viewedOrderNumber === order.orderNumber ? `rotate-0` : 'rotate-180'}>
                <Arrow />
              </span>
            </div>
            {viewedOrderNumber === order.orderNumber &&
              order.items.map(({ id, name, price, quantity }) => (
                <div
                  key={id}
                  className='ml-4 mt-2'
                >
                  <p className='text-lg font-semibold'>{name}</p>
                  <p>cena: {price} zł</p>
                  <p>ilość: {quantity}</p>
                </div>
              ))}
            <p className='mt-2'>Suma {order.total}</p>
            <p className='mt-2'>Data złożenia zamówienia: {order.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
