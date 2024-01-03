'use client'
import Profile from '@/app/components/Profile/Profile'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function page() {
  const router = useRouter()

  useEffect(() => {
    const userId = localStorage.getItem('token') as string | null
    if (!userId || userId === '') {
      router.push('/home/signin')
    }
  }, [])
  return (
    <div>
      <Profile />
    </div>
  )
}
