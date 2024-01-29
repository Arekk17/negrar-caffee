import React from 'react'

interface SignInLayoutProps {
  LeftSection: React.ReactNode
  RightSection: React.ReactNode
}

export const DividedSection: React.FC<SignInLayoutProps> = ({ LeftSection, RightSection }) => {
  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen items-center justify-center signinBackground'>
      <div className='md:w-1/4 w-3/4 flex justify-center items-center'>{LeftSection}</div>
      <div className='hidden md:block h-[488px] border-l border-solid border-brown ml-10' />
      <div className='md:w-1/4 w-full max-w-md flex items-center justify-center flex-col text-center space-y-4 p-4'>{RightSection}</div>
    </div>
  )
}
