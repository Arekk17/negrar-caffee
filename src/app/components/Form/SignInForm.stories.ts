import type { Meta, StoryObj } from '@storybook/react';
import { SignInForm } from './SignInForm';

const meta = {
    title: 'sign in form',
    component: SignInForm,
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const signIn: Story = {};