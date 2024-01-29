'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '../Buttons/Button'
import { signInWithGoogle } from '@/api/authFirebase'
import { useRouter } from 'next/navigation'

export const NoAccountSection = () => {
  const router = useRouter()
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.push('/home')
      console.log('login')
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }
  const handleSignUp = () => router.push('/home/signup')
  return (
    <>
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
        className='px-8 py-1'
        variant={'google'}
        onClick={handleGoogleSignIn}
      />
    </>
  )
}
