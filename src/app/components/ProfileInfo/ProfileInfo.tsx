import React, { useEffect, useState } from 'react'
import { fetchUserData } from '@/api/authFirebase'
import { DocumentData } from 'firebase/firestore'
import { EditIcon } from '@/assets/Icon/EditIcon'
import { useForm, Controller } from 'react-hook-form'
import ProfilePersonalInfo from './ProfilePersonalInfo'
import ProfileBillingAddress from './ProfileBillingAddress'

const ProfileInfo = () => {
  const userId = localStorage.getItem('token') as string | null
  const [userData, setUserData] = useState<DocumentData | null | undefined>(null)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const { control, handleSubmit, setValue, register } = useForm()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const fetchedUserData = await fetchUserData(userId)
          setUserData(fetchedUserData)
          setValue('name', fetchedUserData?.name || '')
          setValue('phoneNu', fetchedUserData?.phoneNu || '')
          setValue('street', fetchedUserData?.street || '')
          setValue('postCode', fetchedUserData?.postCode || '')
          setValue('city', fetchedUserData?.city || '')
          setValue('country', fetchedUserData?.country || '')
        }
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error)
      }
    }

    fetchData()
  }, [userId, setValue])

  const onSubmit = (data: any) => {
    console.log('Dane do zapisania:', data)
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

export default ProfileInfo
