import About from '@/app/components/About/About'
import Landing from '../../components/Landing/Landing'
import React from 'react'
import TimeOpen from '@/app/components/TimeOpen/TimeOpen'
import OurMenu from '@/app/components/OurMenu/OurMenu'

const HomeLayout = () => {
  return (
    <div>
      <Landing />
      <About />
      <TimeOpen />
      <OurMenu />
    </div>
  )
}

export default HomeLayout
