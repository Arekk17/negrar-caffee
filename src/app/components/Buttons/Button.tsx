'use client'
import { GoogleIcon } from '@/assets/Icon/GoogleIcon'
import React, { useState } from 'react'

interface ButtonProps {
  label: string
  variant: 'classic' | 'google'
  className?: string
  onClick?: any
}

const Button: React.FC<ButtonProps> = ({ label, className, variant, onClick }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleButtonClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 100)
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`rounded-[10px] cursor-pointer ${className} ${isClicked ? 'scale-95' : ''} 
        ${variant === 'google' ? 'bg-grayDark text-white flex flex-row items-center gap-[30px]' : 'bg-brown '}
        transition-transform duration-100 ease-out
      `}
      tabIndex={0}
      onClick={handleButtonClick}
    >
      {variant === 'google' && (
        <span className='ml-3'>
          <GoogleIcon />
        </span>
      )}
      {label}
    </button>
  )
}

export default Button
