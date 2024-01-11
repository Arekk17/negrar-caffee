import type { Meta, StoryObj } from '@storybook/react';
import { BasketCard } from './BasketCard';
import image from '../../../assets/SIMPLo.png'

const meta = {
  title: 'Components/BasketCard',
  component: BasketCard,
  parameters: {
    layout: 'centered'
  }

} satisfies Meta<typeof BasketCard>

export default meta;
type Story = StoryObj<typeof meta>
export const Product: Story = {
    args: {
      id: 1,
      quantity: 2,
      title: 'Example Product',
      price: 15.99,
    }
}
