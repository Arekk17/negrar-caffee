import React from 'react'
import { SignInForm } from '../../Form/SignInForm'
import Button from '../../Buttons/Button'
import Link from 'next/link'

export const SignInLayout = () => {
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
        />
        <Link href={'/'}>Dlaczego warto mieć konto?</Link>
        <Button
          label={'Zaloguj się przez Google'}
          className='p-1'
          variant={'google'}
        />
      </div>
    </div>
  )
}
