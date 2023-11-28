import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from '../Buttons/Button'

interface ICard {
  name: string
  image: any
  price: any
  description: string
}

export const ProductCard: React.FC<ICard> = ({ name, image, description, price }) => {
  const handleOrder = (name: string) => {
    console.log(name)
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
            className='w-[120px] py-[10px]'
            label='Zamowić'
            onClick={() => handleOrder(name)}
          />
        </div>
      </Paper>
    </Box>
  )
}
