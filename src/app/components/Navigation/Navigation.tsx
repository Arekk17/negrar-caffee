'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import logo from '@/assets/NEGRAR.png';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import styles from './Navigation.module.css';

export const Navigation = () => {
  const pathname = usePathname();
  console.log(pathname)
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  const backgroundImage = isHome ? 'none' : `url('../../../assets/bgnav.png')`;
  const overlayClass = isHome ? 'transparent-background' : '';

  return (
    <nav className={`${styles.navigation} ${overlayClass}`} style={{ backgroundImage }}>
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
  );
};
