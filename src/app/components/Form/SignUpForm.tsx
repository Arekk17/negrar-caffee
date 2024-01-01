'use client'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import Button from '../Buttons/Button'
import Link from 'next/link'

interface FormData {
  email: string
  name: string
  phoneNu: string
  password: string
}

export const SignUpForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [loginErrors, setLoginErrors] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onSubmit = async (data: FormData) => {
    // Logika przesyłania formularza
  }

  return (
    <div className='w-[600px]'>
      <h2 className='text-m text-center'>REJSTRACJA</h2>
      <div className='mb-4 flex space-x-4'>
        <div className='flex-1'>
          <Controller
            name='name'
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextInputWithLabel
                label='Imie i nazwisko:'
                type={'text'}
                placeholder={'podaj imie i nazwisko'}
                register={register('name')}
                {...field}
              />
            )}
          />
        </div>
        <div className='flex-1'>
          <Controller
            name='email'
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
      </div>
      <div className='mb-4 flex space-x-4'>
        <div className='flex-1'>
          <Controller
            name='phoneNu'
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextInputWithLabel
                label='Numer telefonu'
                type={'text'}
                placeholder={'podaj numer telefonu'}
                register={register('phoneNu')}
                {...field}
              />
            )}
          />
        </div>
        <div className='flex-1'>
          <Controller
            name='password'
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
      </div>
      <Button
        label={'Zarejstruj się'}
        variant={'classic'}
        className='w-full h-[45px] text-white mb-2'
        onClick={handleSubmit(onSubmit)}
      />
      <div className='flex items-center justify-center'>
        <Link
          href={'/home/signin'}
          className='text-grayDark cursor-pointer'
        >
          Mam juz konto
        </Link>
      </div>
    </div>
  )
}
