import React, { forwardRef } from 'react'

export type TTextInputWithLabel = {
  type: string
  label?: string
  placeholder: string
  errorMessage?: string
  register: any
}

export const TextInputWithLabel = forwardRef<HTMLInputElement, TTextInputWithLabel>(
  ({ type, label, placeholder, register, errorMessage, ...rest }, ref) => {
    return (
      <div className='flex flex-col'>
        <label className='text-xs font-bold'>{label}</label>
        <input
          className='border-solid border-2 border-brown rounded-md pl-2 h-[45px] bg-transparent'
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          {...register}
        />
        {errorMessage && <p className='text-red-500 text-xs mt-1'>{errorMessage}</p>}
      </div>
    )
  },
)

TextInputWithLabel.displayName = 'TextInputWithLabel'
