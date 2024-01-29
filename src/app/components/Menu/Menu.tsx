import React from 'react'
import { menuData } from '@/api/menuDataMock'

const MenuItem = ({ category, items }: any) => (
  <div className='w-full'>
    <h2 className='text-m pt-2 pb-4 relative mb-4'>
      <span className='absolute top-0 left-0 right-0 border-t-2 border-solid border-black'></span>
      {category}
      <span className='absolute bottom-0 left-0 right-0 border-b-2 border-dotted border-black'></span>
    </h2>
    {items.map((item: any) => (
      <div
        key={item.title}
        className='flex flex-col md:flex-row justify-between items-start mb-4'
      >
        <div className='flex flex-col md:mr-4'>
          <h3 className='text-s text-brownDark'>{item.title}</h3>
          <span className='md:w-[400px] text-xs text-black'>{item.description}</span>
        </div>
        <div className='text-black md:self-start'>
          <p>{item.price} zł</p>
        </div>
      </div>
    ))}
  </div>
)
export const Menu = () => {
  return (
    <div className='signinBackground w-full h-full '>
      <div className='flex items-center justify-center pt-4'>
        <h2 className='text-l text-black md:text-brownDark'>Menu</h2>
      </div>
      <div className='w-full p-10 flex flex-wrap justify-center'>
        <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
          <div className='mb-10'>
            <MenuItem
              category='Coffee'
              items={menuData.coffee}
            />
          </div>
          <div>
            <MenuItem
              category='Smoothies'
              items={menuData.smoothies}
            />
          </div>
        </div>
        <div className='w-1/12 md:w-1/12 lg:w-1/12 xl:w-1/12 flex items-center justify-center'>
          <div className='border-r-2 border-brownDark h-full'></div>
        </div>
        <div className='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
          <div>
            <MenuItem
              category='Tea'
              items={menuData.tea}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
