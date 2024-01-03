import React from 'react';
import { TextInputWithLabel } from './TextInputWithLabel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'input',
    component: TextInputWithLabel,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof TextInputWithLabel>

export default meta;
type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        label:'text',
        type: 'text',
        placeholder: 'input',
        register: () => {}, 
    }
}
export const Password: Story = {
    args: {
        label:'Password',
        type: 'passoword',
        placeholder: 'haslo',
        register: () => {}, 
    }
}
