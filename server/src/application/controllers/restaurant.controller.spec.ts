import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantRepository } from '../../infrastructure/database/repositories/restaurant.repository';
import { PrismaService } from '../..//infrastructure/database/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';

jest.mock('../services/restaurant.service');

describe('RestaurantController', () => {
  let restaurantController: RestaurantController;
  let restaurantService: RestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [RestaurantService, RestaurantRepository, PrismaService],
    }).compile();

    restaurantController =
      module.get<RestaurantController>(RestaurantController);
    restaurantService = module.get<RestaurantService>(RestaurantService);
  });

  describe('getAllRestaurants', () => {
    it('should call getRestaurants', async () => {
      const getAllRestaurantsMock = jest.fn();
      restaurantService.getRestaurants = getAllRestaurantsMock;

      await restaurantController.getAllRestaurants();

      expect(getAllRestaurantsMock).toHaveBeenCalled();
    });
  });

  describe('getRestaurant', () => {
    it('should call getRestaurantByID', async () => {
      const getRestaurantByIDMock = jest.fn();
      restaurantService.getRestaurantByID = getRestaurantByIDMock;

      await restaurantController.getRestaurant('1');

      expect(getRestaurantByIDMock).toHaveBeenCalled();
    });
  });

  describe('createRestaurant', () => {
    it('should call createRestaurant', async () => {
      const createRestaurantMock = jest.fn();
      restaurantService.createRestaurant = createRestaurantMock;

      await restaurantController.createRestaurant({
        name: 'Burger Palace',
        address: '123 Main St, Cityville',
        phone: '555-1234',
        description: 'Delicious burgers for everyone!',
        category: 'BURGER',
      })

      expect(createRestaurantMock).toHaveBeenCalled();
    })
  })
});
