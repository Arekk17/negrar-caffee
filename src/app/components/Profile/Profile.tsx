'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ProfileInfo from '../ProfileInfo/ProfileInfo'

const Profile = () => {
  const router = useRouter()

  useEffect(() => {
    const userId = localStorage.getItem('token') as string | null
    if (!userId || userId === '') {
      router.push('/home/signin')
    }
  }, [])

  return (
    <div className='flex flex-col items-center pt-10 h-screen signinBackground '>
      <h2 className='text-l mb-6'>Profil</h2>
      <div className='flex mt-4 w-full '>
        <div className='flex-1'>
          <ProfileInfo />
        </div>
        <div className='w-px h-screen bg-brown mx-4' />
        <div className='flex-1'>historia zamówień</div>
      </div>
    </div>
  )
}

export default Profile
