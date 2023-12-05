import React from 'react'
import { FaStar } from 'react-icons/fa'

export const Stars = ({ rating }: any) => {
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1
        return (
          <FaStar
            key={index}
            size={14}
            color={currentRate <= rating ? '#E4E74F' : '#FFFCFC'}
          />
        )
      })}
    </>
  )
}
