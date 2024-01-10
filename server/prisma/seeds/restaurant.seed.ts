import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const restaurantsData = [
  {
    name: 'Burger Palace',
    address: '123 Main St, Cityville',
    phone: '555-1234',
    description: 'Delicious burgers for everyone!',
    category: 'BURGER',
  },
  {
    name: 'Pizza Haven',
    address: '456 Oak St, Townsville',
    phone: '555-5678',
    description: 'Authentic pizzas made with love.',
    category: 'PIZZA',
  },
  {
    name: 'Fresh Greens',
    address: '789 Elm St, Veggie City',
    phone: '555-9101',
    description: 'Healthy salads to keep you fit!',
    category: 'SALAD',
  },
  {
    name: 'Thirst Quencher',
    address: '101 Pine St, Drinksville',
    phone: '555-1122',
    description: 'Wide range of refreshing drinks.',
    category: 'DRINKS',
  },
  {
    name: 'Flavors Delight',
    address: '202 Maple St, Tasty Town',
    phone: '555-3344',
    description: 'A mix of delicious flavors in every dish.',
    category: 'BURGER',
  },
];

async function seedDatabase() {
  for (const restaurantData of restaurantsData) {
    try {
      const validatedData = z.object({
        name: z.string().min(3).max(255),
        address: z.string().max(255),
        phone: z.string().max(20),
        description: z.string(),
        category: z.enum(['BURGER', 'PIZZA', 'SALAD', 'DRINKS']),
      }).parse(restaurantData);

      await prisma.restaurant.create({
        data: {
          name: validatedData.name,
          address: validatedData.address,
          phone: validatedData.phone,
          description: validatedData.description,
          category: validatedData.category,
        }
      });
    } catch (error) {
      console.error(`Error seeding restaurant: ${error.message}`);
    }
  }

  await prisma.$disconnect();
}

seedDatabase();
