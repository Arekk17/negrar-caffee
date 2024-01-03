import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from '../Buttons/Button'

interface ICard {
  id: any
  name: string
  image: any
  price: any
  description: string
}

export const ProductCard: React.FC<ICard> = ({ id, name, image, description, price }) => {
  const handleOrder = () => {
    console.log(`name: ${name} id: ${id} `)
  }
  return (
    <Box className='mr-[40px] max-w-[260px] flex-shrink-0 relative'>
      <Paper
        className='p-2 h-full bg-brownDark bg-opacity-90 text-white'
        elevation={3}
      >
        <Image
          src={image}
          width={500}
          height={500}
          alt={name}
        />
        <Typography className='text-[25px]'>{name}</Typography>
        <Typography className='text-[14px] text-cream'>{description}</Typography>
        <div className='flex flex-row justify-evenly my-[10px] items-center'>
          <Typography>{price}</Typography>
          <Button
            className='w-[120px] py-[10px] text-white'
            label='Zamowić'
            onClick={() => handleOrder()}
            variant={'classic'}
          />
        </div>
      </Paper>
    </Box>
  )
}
