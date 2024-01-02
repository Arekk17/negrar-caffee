import React, { ReactNode } from 'react'

interface SignInLayoutProps {
  LeftSection: ReactNode
  RightSection: ReactNode
}

export const DividedSection: React.FC<SignInLayoutProps> = ({ LeftSection, RightSection }) => {
  return (
    <div className='w-full h-screen flex items-center justify-center signinBackground'>
      {LeftSection}
      <div className='h-[488px] border-l border-solid border-brown ml-10' />
      <div className='max-w-[500px] flex items-center justify-center flex-col text-center space-y-4'>{RightSection}</div>
    </div>
  )
}
