'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/NEGRAR.png'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Button from '../Buttons/Button'

export const Navigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isHome, setIsHome] = useState(false)
  const handleLogIn = () => router.push('/home/signin')
  useEffect(() => {
    const home = pathname === '/home'
    setIsHome(home)
  }, [pathname])

  return (
    <nav
      className={`absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 h-[100px] ${
        isHome ? 'bg-transparent' : 'navigationBackground  text-white'
      } `}
    >
      <div className='ml-[80px]'>
        <Image
          src={logo}
          width={146}
          height={88}
          alt='logo'
        />
      </div>
      <div className='flex items-center justify-between gap-[46px] mr-[126px]'>
        <Link
          href='/home'
          className='text-white no-underline'
        >
          Home
        </Link>
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
        <Button
          label={'Logowanie'}
          className='bg-white text-brownDark px-[30px] py-[10px] text-bold'
          onClick={handleLogIn}
          variant={'classic'}
        />
      </div>
    </nav>
  )
}
