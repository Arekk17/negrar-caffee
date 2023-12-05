import About from '@/app/components/About/About'
import Landing from '../../Landing/Landing'
import React from 'react'
import TimeOpen from '@/app/components/TimeOpen/TimeOpen'
import OurMenu from '@/app/components/OurMenu/OurMenu'
import { Opinion } from '@/app/components/Opinions/Opinion'
import { Map } from '@/app/components/Map/Map'

const HomeLayout = () => {
  return (
    <div>
      <Landing />
      <About />
      <TimeOpen />
      <OurMenu />
      <Opinion />
      <Map />
    </div>
  )
}

export default HomeLayout
