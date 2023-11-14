import React, { MouseEventHandler, useState } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  label: string
  size?: 'small' | 'medium'
  onClick: MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({ label, onClick, size = 'medium' }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleButtonClick = (event: React.MouseEvent) => {
    setIsClicked(true)

    setTimeout(() => {
      setIsClicked(false)
    }, 500)

    if (onClick) {
      onClick(event)
    }
  }

  const buttonClass = `${styles.button} ${isClicked ? styles.clicked : ''} ${
    size === 'small' ? styles.small : size === 'medium' ? styles.medium : ''
  }`

  return (
    <button
      className={buttonClass}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  )
}

export default Button
