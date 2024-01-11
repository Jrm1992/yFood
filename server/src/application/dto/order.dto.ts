import z from 'zod';
import { OrderStatus } from '@prisma/client';

export const CreateOrderDtoSchema = z.object({
  restaurantId: z.string(),
  orderItems: z.array(
    z.object({
      menuItemId: z.string(),
      quantity: z.number(),
    }),
  ),
});

export type CreateOrderDto = z.infer<typeof CreateOrderDtoSchema>;
