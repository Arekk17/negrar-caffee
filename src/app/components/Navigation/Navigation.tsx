'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/NEGRAR.png'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../Buttons/Button'
import { signOutUser } from '@/api/authFirebase'
import { BasketIcon } from '@/assets/Icon/BasketIcon'
import { useSelector } from 'react-redux'

export const Navigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const basket = useSelector((state: any) => state.shopSlice.basket)
  const [isHome, setIsHome] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  let quantityBasket = basket.length

  const handleLogIn = () => router.push('/home/signin')
  const handleLogOut = () => {
    signOutUser()
    setIsAuthenticated((prevState) => !prevState)
    router.push('/home')
  }

  useEffect(() => {
    const home = pathname === '/home'
    setIsHome(home)
    const userToken = localStorage.getItem('token')
    setIsAuthenticated(!!userToken)
  }, [pathname])

  return (
    <div
      className={` p-4 flex justify-between items-center z-20 h-[100px] ${
        isHome ? 'bg-transparent absolute top-0 left-0 right-0' : ' static navigationBackground text-white z-0'
      } `}
    >
      <Link href='/home'>
        <Image
          src={logo}
          alt='Logo'
          width={146}
          height={88}
        />
      </Link>
      <div className='hidden md:flex md: items-center gap-6'>
        <Link
          href='/home/shop'
          className='text-white no-underline'
        >
          Sklep
        </Link>
        <Link
          href='/home/menu'
          className='text-white no-underline'
        >
          Menu
        </Link>
        <Link
          href='/home/contact'
          className='text-white no-underline'
        >
          Kontakt
        </Link>
        <Link
          href='#location'
          className='text-white no-underline'
        >
          Lokalizacja
        </Link>
        <Link
          href='/home/shop/basket'
          className='text-white no-underline relative'
        >
          <BasketIcon />
          <span className='bg-white text-brownDark absolute w-4 h-4 rounded-md flex items-center justify-center z-10 top-5 right-0'>
            {quantityBasket}
          </span>
        </Link>
        {isAuthenticated ? (
          <>
            <Link
              href='/home/account'
              className='text-white no-underline'
            >
              Konto
            </Link>
            <Button
              label={'Wyloguj'}
              className='bg-white text-brownDark px-[30px] py-[10px] text-bold'
              onClick={handleLogOut}
              variant={'classic'}
            />
          </>
        ) : (
          <Button
            label={'Logowanie'}
            className='bg-white text-brownDark px-[30px] py-[10px] text-bold'
            onClick={handleLogIn}
            variant={'classic'}
          />
        )}
      </div>
      <button
        className='w-10 h-10 relative focus:outline-none z-50 md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block w-8 h-0.5 bg-white absolute transform transition duration-500 ease-in-out ${
            isOpen ? 'rotate-45' : '-translate-y-1.5'
          } top-1/2`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white absolute transform transition duration-500 ease-in-out ${isOpen && 'opacity-0'} top-1/2`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white absolute transform transition duration-500 ease-in-out ${
            isOpen ? '-rotate-45' : 'translate-y-1.5'
          } top-1/2`}
        ></span>
      </button>
      <div
        className={`fixed inset-0 transform z-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-1000 ease-in-out bg-black bg-opacity-75 flex flex-col items-center space-y-6 pt-20 md:hidden`}
      >
        <Link
          href='/home/shop'
          className='text-white text-lg no-underline hover:text-gray-300'
        >
          Sklep
        </Link>
        <Link
          href='/home/menu'
          className='text-white text-lg no-underline hover:text-gray-300'
        >
          Menu
        </Link>
        <Link
          href='/home/contact'
          className='text-white text-lg no-underline hover:text-gray-300'
        >
          Kontakt
        </Link>
        <Link
          href='/home/localization'
          className='text-white text-lg no-underline hover:text-gray-300'
        >
          Lokalizacja
        </Link>
        <div className='text-white text-lg flex items-center'>
          <BasketIcon className='ml-2' />
          <span className='ml-2 bg-red-600 px-2 py-1 rounded-full'>{quantityBasket}</span>
        </div>
        {isAuthenticated ? (
          <Button
            label='Wyloguj'
            onClick={handleLogOut}
            className='bg-white text-brownDark px-[30px] py-[10px] text-bold'
            variant={'classic'}
          />
        ) : (
          <Button
            label='Logowanie'
            onClick={() => router.push('/home/signin')}
            className='bg-white text-brownDark px-[30px] py-[10px] text-bold'
            variant={'classic'}
          />
        )}
      </div>
    </div>
  )
}
