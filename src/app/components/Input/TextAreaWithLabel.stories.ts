import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextAreaWithLabel } from './TextAreaWithLabel';

const meta = {
    title: 'textarea',
    component: TextAreaWithLabel,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof TextAreaWithLabel>

export default meta;
type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        label:'text',
        type: 'text',
        placeholder: 'Wiadomość',
        register: () => {}, 
    }
}
