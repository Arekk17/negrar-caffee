import React from 'react'
import { Controller } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { EditIcon } from '@/assets/Icon/EditIcon'

export const ProfileBillingAddress = ({ userData, editingSection, handleEditClick, register, control, setValue }: any) => {
  const hasBillingAddressData =
    userData && userData.name && userData.street && userData.postCode && userData.city && userData.country && userData.phoneNu

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
      ) : (
        <>
          {hasBillingAddressData ? (
            <>
              <p>{userData.name}</p>
              <p>{userData.street}</p>
              <p>
                {userData.postCode}
                {userData.city}
              </p>
              <p>{userData.country}</p>
              <p>tel:{userData.phoneNu}</p>
            </>
          ) : (
            <div>
              <p>Brak adresu rozliczeniowego, proszę uzupełnić</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
