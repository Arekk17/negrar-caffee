import React from 'react'
import { Controller } from 'react-hook-form'
import { TextInputWithLabel } from '../Input/TextInputWithLabel'
import { EditIcon } from '@/assets/Icon/EditIcon'

const ProfilePersonalInfo = ({ userData, editingSection, handleEditClick, register, control, setValue, handleSubmit }: any) => {
  return (
    <div>
      <h2 className='text-m flex items-center'>
        Dane osobowe
        <span
          className='ml-2'
          onClick={() => handleEditClick('personalInfo')}
        >
          <EditIcon />
        </span>
      </h2>
      {userData && (
        <div className='text-black'>
          {editingSection === 'personalInfo' ? (
            <>
              <p>{userData?.email}</p>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <TextInputWithLabel
                    register={register}
                    type='text'
                    label='Imię'
                    {...field}
                  />
                )}
              />
              <Controller
                name='phoneNu'
                control={control}
                render={({ field }) => (
                  <TextInputWithLabel
                    register={register}
                    type='text'
                    label='Numer telefonu'
                    {...field}
                  />
                )}
              />
            </>
          ) : (
            <>
              <p>{userData?.email}</p>
              <p>{userData?.name}</p>
              <p>{userData?.phoneNu}</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default ProfilePersonalInfo
