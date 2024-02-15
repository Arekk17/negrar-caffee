'use client'
import React, { useEffect } from 'react'
import { fetchUserData } from '@/api/authFirebase'
import { userInfo } from '@/store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigation } from '../components/Navigation/Navigation'
import { Footer } from '../components/Footer/Footer'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()
  const userId = typeof window !== 'undefined' ? (localStorage.getItem('token') as string | null) : null
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const fetchedUserData = await fetchUserData(userId)
          dispatch(userInfo(fetchedUserData))
        }
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error)
      }
    }
    fetchData()
  }, [userId, dispatch])
  return (
    <section>
      <Navigation />
      {children}
      <Footer />
    </section>
  )
}
