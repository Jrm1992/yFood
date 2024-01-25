import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../../domain/models/restaurant.model';
import { RestaurantRepository } from '../../infrastructure/database/repositories/restaurant.repository';
import { PrismaService } from '../..//infrastructure/database/prisma/prisma.service';

describe('RestaurantController', () => {
  let restaurantController: RestaurantController;
  let restaurantService: RestaurantService;
  let restaurantRespository: RestaurantRepository
  let prismaService: PrismaService

  beforeEach(async () => {
    prismaService = new PrismaService();
    restaurantRespository = new RestaurantRepository(prismaService);
    restaurantService = new RestaurantService(restaurantRespository);
    restaurantController = new RestaurantController(restaurantService);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const result = await restaurantController.getAllRestaurants();
      expect(result).toEqual(Array<Restaurant>());
    });
  });
});
