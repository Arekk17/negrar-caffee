'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/NEGRAR.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Navigation.module.css'

export const Navigation = () => {
  const pathname = usePathname()
  console.log(pathname)
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    setIsHome(pathname === '/')
  }, [pathname])

  const backgroundImage = isHome ? 'none' : `url('../../../assets/bgnav.png')`
  const overlayClass = isHome ? 'transparent-background' : ''

  return (
    <nav
      className={`absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 bg-cover bg-center text-white ${overlayClass}`}
      style={{ backgroundImage }}
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
          href='/'
          className='text-white no-underline'
        >
          Home
        </Link>
        <Link
          href='/about'
          className='text-white no-underline'
        >
          O nas
        </Link>
        <Link
          href='/menu'
          className='text-white no-underline'
        >
          Menu
        </Link>
        <Link
          href='/product'
          className='text-white no-underline'
        >
          Produkty
        </Link>
        <Link
          href='/localization'
          className='text-white no-underline'
        >
          Lokalizacja
        </Link>
      </div>
    </nav>
  )
}
