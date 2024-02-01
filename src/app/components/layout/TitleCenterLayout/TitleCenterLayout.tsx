import React, { ReactNode } from 'react'
type TTitleCenterLayout = {
  background: string
  title: string
  children: ReactNode
}
export const TitleCenterLayout = ({ background, title, children }: TTitleCenterLayout) => (
  <div className={`w-full h-screen ${background}`}>
    <div className='flex w-full items-center justify-center pt-10'>
      <h2 className='text-l text-brownDark font-semibold'>{title}</h2>
    </div>
    {children}
  </div>
)
