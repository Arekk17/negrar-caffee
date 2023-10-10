import React from "react";
import Image from 'next/image'
import logo from '@/assets/NEGRAR.png'
import Link from "next/link";
import './Navigation.css'

export const Navigation = () => {
  return(
    <nav>
        <div className="container">
            <div className="logo">
            <Image
                src={logo}
                width={146}
                height={88}
                alt="logo"
            />
            </div>
            <div className="options">
                <Link href='/Home' className="option">Home</Link>
                <Link href='/about' className="option">O nas</Link>
                <Link href='/menu' className="option">Menu</Link>
                <Link href='/product' className="option">Produkty</Link>
                <Link href='/localization' className="option">Lokalizacja</Link>
            </div>
        </div>
    </nav>
  )
};


