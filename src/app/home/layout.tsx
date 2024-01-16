import React from 'react'
import { Navigation } from '../components/Navigation/Navigation'
import { Footer } from '../components/Footer/Footer'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navigation />
      {children}
      <Footer />
    </section>
  )
}
