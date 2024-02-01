'use client'
import React, { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { TextAreaWithLabel } from '../Input/TextAreaWithLabel'
import { Button } from '../Buttons/Button'
import emailjs from '@emailjs/browser'
import { TitleCenterLayout } from '../layout/TitleCenterLayout/TitleCenterLayout'

export const ContactFrom = () => {
  const form = useRef<HTMLFormElement>(null)
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    if (form.current) {
      emailjs.sendForm('service_2dmpstq', 'template_or0wb2r', form.current, 'mUwKh56iAbdWe7B7f').then(
        () => {
          reset()
        },
        (error) => {
          console.log(error)
        },
      )
    }
  }

  return (
    <TitleCenterLayout
      background={'ourMenuBackground'}
      title={'KONTAKT'}
    >
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className='flex gap-4 flex-col items-center justify-center'
      >
        <div className='w-2/4'>
          <Controller
            name='name'
            defaultValue=''
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextInputWithLabel
                type={'text'}
                placeholder='imie'
                register={register('name')}
                {...field}
              />
            )}
          />
        </div>
        <div className='w-2/4'>
          <Controller
            name='email'
            defaultValue=''
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextInputWithLabel
                type={'email*'}
                placeholder='email'
                register={register('email')}
                {...field}
              />
            )}
          />
        </div>
        <div className='w-2/4'>
          <Controller
            name='title'
            defaultValue=''
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextInputWithLabel
                type={'text'}
                placeholder='Tytuł wiadomości'
                register={register('title')}
                {...field}
              />
            )}
          />
        </div>
        <div className='w-2/4'>
          <Controller
            name='message'
            defaultValue=''
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <TextAreaWithLabel
                type={'text'}
                placeholder='Wiadomość'
                register={register('message')}
                {...field}
              />
            )}
          />
        </div>
        <div className='flex items-center justify-center'>
          <Button
            type='submit'
            label={'Wyślij'}
            variant={'classic'}
            className='text-white py-2 px-4'
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </TitleCenterLayout>
  )
}
