import type { Meta, StoryObj } from '@storybook/react'
import { SignUpForm } from './SignUpForm'

const meta = {
  title: 'sign up form',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const signIn: Story = {}
