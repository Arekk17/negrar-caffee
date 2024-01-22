'use client'
import React, { useEffect, useState } from 'react'
import { fetchUserData } from '@/api/authFirebase'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ProfilePersonalInfo } from './ProfilePersonalInfo'
import { ProfileBillingAddress } from './ProfileBillingAddress'
import { editUserData } from '@/api/profileOperation'
import { editUser, userInfo } from '@/store/authSlice'

export const ProfileInfo = () => {
  const dispatch = useDispatch()
  const userId = typeof window !== 'undefined' ? (localStorage.getItem('token') as string | null) : null
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const { control, handleSubmit, setValue, register } = useForm()
  const userData = useSelector((state: any) => state.userSlice.userInfo)
  console.log(userData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const fetchedUserData = await fetchUserData(userId)
          dispatch(userInfo(fetchedUserData))
          setValue('name', userData?.name || '')
          setValue('phoneNu', userData?.phoneNu || '')
          setValue('street', userData?.street || '')
          setValue('postCode', userData?.postCode || '')
          setValue('city', userData?.city || '')
          setValue('country', userData?.country || '')
        }
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error)
      }
    }
    fetchData()
  }, [userId, dispatch])

  const onSubmit = async (data: any) => {
    try {
      if (userId) {
        await editUserData(userId, data)
        dispatch(editUser(data))
        console.log('Dane zaktualizowane pomyślnie')
      }
    } catch (error) {
      console.error('Błąd podczas aktualizacji danych użytkownika:', error)
    }
    setEditingSection(null)
  }

  const handleEditClick = (sectionName: string) => {
    if (editingSection === sectionName) {
      setEditingSection(null)
      handleSubmit(onSubmit)()
    } else {
      setEditingSection(sectionName)
    }
  }

  return (
    <div className='flex items-start justify-center flex-col ml-7'>
      <ProfilePersonalInfo
        userData={userData}
        editingSection={editingSection}
        handleEditClick={handleEditClick}
        register={register}
        control={control}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      <ProfileBillingAddress
        userData={userData}
        editingSection={editingSection}
        handleEditClick={handleEditClick}
        register={register}
        control={control}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
