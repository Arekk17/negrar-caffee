import type { Meta, StoryObj } from '@storybook/react';
import {SignInLayout} from './SignInLayout';

const meta = {
    title: 'sign in layout',
    component: SignInLayout,
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof SignInLayout>

export default meta
type Story = StoryObj<typeof meta>

export const signIn: Story = {};