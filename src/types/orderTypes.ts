import { z } from 'zod';

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.object({
    src: z.string(),
    height: z.number(),
    width: z.number(),
    blurDataURL: z.string(),
    blurWidth: z.number(),
  }),
  quantity: z.number(),
});

export const OrderSchema = z.object({
  date: z.string(),
  items: z.array(productSchema),
  orderNumber: z.string(),
  total: z.string(),
});

export const shopStateSchema = z.object({
  basket: z.array(productSchema),
  summaryOrder: OrderSchema.nullable(),
});



export type ProductType = z.infer<typeof productSchema>;
export type ShopType = z.infer<typeof shopStateSchema>;
export type OrderType = z.infer<typeof OrderSchema>;
