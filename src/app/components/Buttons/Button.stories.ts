import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
    title: 'button',
    component: Button,
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const button: Story = {
    args:{
        label: 'button',
        className: 'w-[300px] text-white h-[45px]',
        variant: 'classic'
    }
}
export const googleButton: Story = {
    args:{
        label: 'button',
        className: 'w-[300px] text-white h-[45px]',
        variant: 'google'
    }
}