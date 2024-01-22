import { z } from 'zod';

export const OrderItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const OrderSchema = z.object({
  date: z.string(),
  items: z.array(OrderItemSchema),
  orderNumber: z.string(),
  total: z.string(),
});

export type OrderItem = z.infer<typeof OrderItemSchema>;
export type Order = z.infer<typeof OrderSchema>;
