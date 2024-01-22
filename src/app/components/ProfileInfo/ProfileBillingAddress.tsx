import React from 'react'
import { Controller } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { EditIcon } from '@/assets/Icon/EditIcon'

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
export const ProfileBillingAddress = ({ userData, editingSection, handleEditClick, register, control, error }: any) => {
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
          <p>{userData.street}</p>
          <p>
            {userData.postCode}
            {userData.city}
          </p>
          <p>{userData.country}</p>
          <p>{userData.name}</p>
          <p>tel: {userData.phoneNu}</p>
        </>
      )}
    </div>
  )
}
