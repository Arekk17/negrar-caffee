import React, { useState } from 'react'
interface ButtonProps {
  label: string
  size?: 'small' | 'medium'
  onClick: any
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

  const buttonClass = `bg-[#B77E66] border-none text-white rounded-[10px] cursor-pointer 
    ${isClicked ? 'clicked-animation-class' : ''} 
    ${size === 'small' ? 'w-[180px] h-[44px] text-[15px] font-normal' : 'w-[330px] h-[88px] text-[24px] font-bold'}`

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
