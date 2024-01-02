'use client'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import Button from '../Buttons/Button'
import { signInWithEmail } from '@/api/authFirebase'
import { useRouter } from 'next/navigation'
interface FormData {
  email: string
  password: string
}
export const SignInForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [loginErrors, setLoginErrors] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const onSubmit = async (data: FormData) => {
    try {
      await signInWithEmail(data.email, data.password, setLoginErrors, setIsLoggedIn)
      router.push('/home')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <>
      <div className='mb-4'>
        <Controller
          name='email'
          defaultValue=''
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextInputWithLabel
              label='Adres email:'
              type={'email'}
              placeholder={'podaj email'}
              register={register('email')}
              {...field}
            />
          )}
        />
      </div>
      <div className='mb-4'>
        <Controller
          name='password'
          defaultValue=''
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextInputWithLabel
              label='Hasło:'
              type='password'
              placeholder={'podaj haslo'}
              register={register('password')}
              {...field}
            />
          )}
        />
      </div>
      <Button
        label={'Zaloguj się'}
        variant={'classic'}
        className='w-full h-[45px] text-white mb-4'
        onClick={handleSubmit(onSubmit)}
      />
    </>
  )
}
