'use client'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { Button } from '../Buttons/Button'
import { signInWithEmail } from '@/api/authFirebase'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInFormSchema, UserSignInType } from '@/types/userTypes'

export const SignInForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignInType>({
    resolver: zodResolver(SignInFormSchema),
  })
  const [LoginErrors, setLoginErrors] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const onSubmit = async (data: UserSignInType) => {
    try {
      await signInWithEmail(data, setLoginErrors, setIsLoggedIn)
      if (isLoggedIn) {
        router.push('/home')
      }
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <>
      <div>
        <p className='text-red text-xs mt-1'>{LoginErrors}</p>
      </div>
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
              errorMessage={errors.email && 'Email is required'}
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
              errorMessage={errors.password && 'Password is required'}
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
