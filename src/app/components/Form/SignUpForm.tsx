'use client'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { Button } from '../Buttons/Button'
import Link from 'next/link'
import { signUpWithEmail } from '@/api/authFirebase'
import { useRouter } from 'next/navigation'

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
    reset,
    formState: { errors },
  } = useForm<FormData>()
  const [loginErrors, setLoginErrors] = useState('')
  const router = useRouter()
  const onSubmit = async (data: FormData) => {
    const { name, email, phoneNu, password } = data

    try {
      await signUpWithEmail(name, email, phoneNu, password, setLoginErrors)
      router.push('/home/signin')
      reset()
    } catch (error: any) {
      setLoginErrors('Error during registration. Please try again.')
      console.error(error)
    }
  }

  return (
    <div className='w-[600px] mx-4'>
      <h2 className='text-l mb-4 text-center'>REJSTRACJA</h2>
      <p className='text-red'>{loginErrors}</p>
      <div className='flex flex-col md:flex-row md:space-x-5'>
        <div className='flex-1'>
          <Controller
            name='name'
            control={control}
            defaultValue=''
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
            defaultValue=''
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
      <div className='flex flex-col md:flex-row md:space-x-5 relative mb-4'>
        <div className='flex-1'>
          <Controller
            name='phoneNu'
            control={control}
            defaultValue=''
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextInputWithLabel
                label='Numer telefonu'
                type={'tel'}
                style='pl-[50px]'
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
            defaultValue=''
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
