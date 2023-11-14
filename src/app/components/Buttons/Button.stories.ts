import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};
export default meta

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
    args: {
      size: 'medium',
      label: 'Button',
    },
  };
  
  export const Small: Story = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };