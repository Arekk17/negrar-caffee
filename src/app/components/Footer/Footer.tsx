import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/NEGRAR.png'

export const Footer = () => {
  return (
    <footer className='footerBackground w-full h-screen p-10 flex items-center justify-center flex-col max-h-[700px]'>
      <div className='flex justify-around items-center flex-wrap gap-10 text-white  w-full'>
        <div className='flex flex-col space-y-4'>
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
        <div className='flex flex-col space-y-4'>
          <p>Kontakt</p>
          <p>STRZEGOMSKA, WROCŁAW</p>
          <p>Tel: 000 000 000</p>
        </div>
        <div>
          <Image
            src={logo}
            width={146}
            height={88}
            alt='NEGRAR logo'
          />
        </div>
      </div>
      <div className='text-center text-white text-sm mt-10'>© 2023 Bartonsuk Limited. All Rights Reserved.</div>
    </footer>
  )
}
