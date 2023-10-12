'use client'
import React from "react";
import Image from 'next/image'
import logo from '@/assets/NEGRAR.png'
import Link from "next/link";
import styles from './Navigation.module.css';
import { useSearchParams } from 'next/navigation'

export const Navigation = () => {
  const searchParams = useSearchParams()
  let backgroundImage = '';
  let overlayClass = '';

  if (searchParams.get('/') === null) {
    backgroundImage = 'transparent';
    overlayClass = styles.transparentOverlay;
  } else {
    backgroundImage = '../../../assets/bgnav.png';
    overlayClass = styles.darkOverlay;
  }
  
  return(
    <nav className={`${styles.navigation} ${overlayClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="logo">
            <Image
                src={logo}
                width={146}
                height={88}
                alt="logo"
            />
            </div>
            <div className={styles.options}>
                <Link href='/' className={styles.option}>Home</Link>
                <Link href='/about' className={styles.option}>O nas</Link>
                <Link href='/menu' className={styles.option}>Menu</Link>
                <Link href='/product' className={styles.option}>Produkty</Link>
                <Link href='/localization' className={styles.option}>Lokalizacja</Link>
            </div>
    </nav>
  )
};


