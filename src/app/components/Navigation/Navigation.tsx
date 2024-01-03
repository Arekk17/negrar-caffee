'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/NEGRAR.png'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Button from '../Buttons/Button'
import { signOutUser } from '@/api/authFirebase'

export const Navigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogIn = () => router.push('/home/signin')
  const handleLogOut = () => {
    signOutUser()
    setIsAuthenticated((prevState) => !prevState)
  }

  useEffect(() => {
    const home = pathname === '/home'
    setIsHome(home)
    const userToken = localStorage.getItem('token')
    setIsAuthenticated(!!userToken)
  }, [pathname])

  return (
    <nav
      className={`absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 h-[100px] ${
        isHome ? 'bg-transparent' : 'navigationBackground text-white'
      } `}
    >
      <div className='ml-[80px]'>
        <Link href='/home'>
          <Image
            src={logo}
            width={146}
            height={88}
            alt='logo'
          />
        </Link>
      </div>
      <div className='flex items-center justify-between gap-[46px] mr-[126px]'>
        <Link
          href='/home/about'
          className='text-white no-underline'
        >
          O nas
        </Link>
        <Link
          href='/home/menu'
          className='text-white no-underline'
        >
          Menu
        </Link>
        <Link
          href='/home/product'
          className='text-white no-underline'
        >
          Produkty
        </Link>
        <Link
          href='/home/localization'
          className='text-white no-underline'
        >
          Lokalizacja
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
    </nav>
  )
}
