import React, { useState } from 'react'
interface ButtonProps {
  label: string
  className: any
  onClick: any
}
const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
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

  const buttonClass = `${className} bg-brown border-none rounded-[10px] cursor-pointer 
    ${isClicked ? 'clicked-animation-class' : ''} 
    `
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
