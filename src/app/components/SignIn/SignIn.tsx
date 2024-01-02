import { SignInForm } from '../Form/SignInForm'
import Link from 'next/link'

export const SignIn = () => {
  return (
    <div className='w-[400px]'>
      <h2 className='text-m text-center mb-4'>MAM JUZ KONTA</h2>
      <SignInForm />
      <div className='flex items-center justify-center'>
        <Link href={'/home/signin/forgetpassword'}>Zapomnialem hasła</Link>
      </div>
    </div>
  )
}
