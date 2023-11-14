'use client'
import React from 'react'
import styles from './Landing.module.css'
import Button from '../Buttons/Button'

const Landing = () => {
  const handleClickButton = () => {
    console.log('button')
  }
  return (
    <div className={styles.landing}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>ŚWIEŻA KAWA O PORANKU</h1>
        <p className={styles.description}>
          Rozpocznij dzień od kawy. Wybierz aromatyczne doznania w naszym sklepie, gdzie świeżo palone ziarna spotykają się z Twoją pasją do
          wyjątkowych poranków
        </p>
        <Button
          onClick={handleClickButton}
          label='Zamów teraz'
        />
      </div>
    </div>
  )
}

export default Landing
