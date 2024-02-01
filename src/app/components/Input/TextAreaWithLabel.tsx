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

export const TextAreaWithLabel = forwardRef<HTMLInputElement, TTextInputWithLabel>(
  ({ type, label, style, placeholder, value, register, errorMessage, ...rest }, ref) => {
    return (
      <div className='flex flex-col'>
        <textarea
          className={`border-solid border-2 border-brown rounded-md opacity-50 min-h-[200px] max-h-[400px] p-4 bg-transparent outline-none ${style}`}
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

TextAreaWithLabel.displayName = 'TextAreaWithLabel'
