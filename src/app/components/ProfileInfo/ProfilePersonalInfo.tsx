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
              {!userData.name && <p className='text-red'>Proszę podać imię.</p>}
              {!userData.phoneNu && <p className='text-red'>Proszę podać numer telefonu.</p>}
            </>
          ) : (
            <>
              <p>{userData?.email}</p>
              {userData?.name ? <p>{userData?.name}</p> : <p className='text-red'>Brak danych: proszę podać imię.</p>}
              {userData?.phoneNu ? <p>{userData?.phoneNu}</p> : <p className='text-red'>Brak danych: proszę podać numer telefonu.</p>}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default ProfilePersonalInfo
