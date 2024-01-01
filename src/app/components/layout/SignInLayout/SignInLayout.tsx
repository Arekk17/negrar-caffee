'use client'
import React from 'react'
import { SignInForm } from '../../Form/SignInForm'
import Button from '../../Buttons/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signInWithGoogle } from '@/api/authFirebase'

export const SignInLayout = () => {
  const router = useRouter()
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      console.log('login')
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }
  const handleSignUp = () => router.push('/home/signup')

  return (
    <div className='w-full h-screen flex items-center justify-center signinBackground'>
      <SignInForm />
      <div className='h-[488px] border-l border-solid border-brown ml-10' />
      <div className='max-w-[500px] flex items-center justify-center flex-col text-center space-y-4'>
        <h2 className='text-m'>NIE MAM KONTA</h2>
        <p>Kontynuuj zakupy bez konieczności rejestrowania konta, wybierając opcje Szybkie zakupy lub Załóż konto. </p>
        <Button
          label={'ZAŁÓŻ KONTO'}
          className='text-white w-[330px] h-[45px]'
          variant={'classic'}
          onClick={handleSignUp}
        />
        <Link href={'/'}>Dlaczego warto mieć konto?</Link>
        <Button
          label={'Zaloguj się przez Google'}
          className='p-1'
          variant={'google'}
          onClick={handleGoogleSignIn}
        />
      </div>
    </div>
  )
}
