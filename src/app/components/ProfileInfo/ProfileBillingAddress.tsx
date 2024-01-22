import React from 'react'
import { Controller } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { EditIcon } from '@/assets/Icon/EditIcon'
import { User, UserSchema } from '@/types/userTypes'
interface ProfileBillingAddressProps {
  userData: User
  editingSection: string
  handleEditClick: (section: string) => void
  register: any
  control: any
  error: any
}

const BillingAddressForm = ({ control, register }: any) => (
  <>
    <Controller
      name='street'
      control={control}
      render={({ field }) => (
        <TextInputWithLabel
          register={register}
          type='text'
          label='Ulica'
          {...field}
        />
      )}
    />
    <Controller
      name='postCode'
      control={control}
      render={({ field }) => (
        <TextInputWithLabel
          register={register}
          type='text'
          label='Kod pocztowy'
          {...field}
        />
      )}
    />
    <Controller
      name='city'
      control={control}
      render={({ field }) => (
        <TextInputWithLabel
          register={register}
          type='text'
          label='Miasto'
          {...field}
        />
      )}
    />
    <Controller
      name='country'
      control={control}
      render={({ field }) => (
        <TextInputWithLabel
          register={register}
          type='text'
          label='Kraj'
          {...field}
        />
      )}
    />
  </>
)
const BillingAddressDisplay = (userData: any) => (
  <>
    <p>{userData.name}</p>
    <p>{userData.email}</p>
    <p>{userData.street}</p>
    <p>
      {userData.postCode} {userData.city}
    </p>
    <p>{userData.country}</p>
    <p>tel:{userData.phoneNumber}</p>
  </>
)
const validateUserData = (userData: User) => {
  try {
    UserSchema.parse(userData)
    return true
  } catch (error) {
    console.error('Walidacja danych nie powiodła się:', error)
    return false
  }
}
export const ProfileBillingAddress = ({ userData, editingSection, handleEditClick, register, control, error }: any) => {
  const isValidUserData = validateUserData(userData)

  if (!isValidUserData) {
    return <div>Błędne dane użytkownika</div>
  }

  return (
    <div>
      <h2 className='text-m flex items-center'>
        Adres rozliczeniowy
        <span
          className='ml-2'
          onClick={() => handleEditClick('billingAddress')}
        >
          <EditIcon />
        </span>
      </h2>
      {editingSection === 'billingAddress' ? (
        <BillingAddressForm
          control={control}
          register={register}
        />
      ) : (
        <>
          <BillingAddressDisplay userData={userData} />
        </>
      )}
    </div>
  )
}
