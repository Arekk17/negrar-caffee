'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { Button } from '../Buttons/Button'
import { forgetPassword } from '../../../api/authFirebase'
export const ForgetPasswordForm = () => {
  const [resetEmailSent, setResetEmailSent] = useState(false)
  const [resetEmailError, setResetEmailError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    forgetPassword(data.email, setResetEmailSent, setResetEmailError)
  }

  return (
    <div className='w-full flex items-center flex-col py-4 signinBackground'>
      <h2 className='text-l mb-4 text-center'>ZAPOMNIAŁEM HASŁA</h2>
      {resetEmailSent === false ? (
        <div className='flex flex-col gap-4 w-1/4'>
          <TextInputWithLabel
            type='email'
            label='Email'
            style='w-full'
            placeholder='Wpisz swój adres email'
            register={register('email', {
              required: 'Adres email jest wymagany',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Nieprawidłowy adres email',
              },
            })}
          />
          <Button
            label={'Zresetuj hasło'}
            variant={'classic'}
            className='p-2 text-white'
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      ) : (
        <p>Przejdź do skrzynki mailowej w celu zmiany hasła</p>
      )}
    </div>
  )
}
