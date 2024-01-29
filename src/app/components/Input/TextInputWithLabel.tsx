import React, { forwardRef } from 'react'

export type TTextInputWithLabel = {
  type: string
  label?: string
  placeholder?: string
  errorMessage?: string
  style?: string
  value?: string
  register: any
}

export const TextInputWithLabel = forwardRef<HTMLInputElement, TTextInputWithLabel>(
  ({ type, label, style, placeholder, value, register, errorMessage, ...rest }, ref) => {
    return (
      <div className='flex flex-col'>
        <label className='text-xs font-bold'>{label}</label>
        {type == 'tel' && (
          <div className='w-[45px] h-[45px] bg-brown flex items-center justify-center absolute z-10 md:bottom-0 bottom-[63px] rounded-md text-white'>
            +48
          </div>
        )}
        <input
          className={`border-solid border-2 border-brown rounded-md pl-2 h-[45px] bg-transparent outline-none ${style}`}
          type={type}
          placeholder={placeholder}
          value={value}
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
