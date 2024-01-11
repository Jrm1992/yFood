import { Category } from '@prisma/client';
import z from 'zod';

export const RestaurantDtoSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3).max(255),
  address: z.string().max(255),
  phone: z.string().max(20),
  description: z.string(),
  category: z.nativeEnum(Category),
});

export type RestaurantDto = z.infer<typeof RestaurantDtoSchema>;