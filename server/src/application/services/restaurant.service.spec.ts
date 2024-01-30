import { RestaurantRepository } from "../../infrastructure/database/repositories/restaurant.repository";
import { TestingModule, Test } from "@nestjs/testing";
import { RestaurantService } from "./restaurant.service";

jest.mock('../../infrastructure/database/repositories/restaurant.repository');

describe('RestaurantService', () => {
  let restaurantService: RestaurantService;
  let restaurantRepository: RestaurantRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantService, RestaurantRepository],
    }).compile();

    restaurantService = module.get<RestaurantService>(RestaurantService);
    restaurantRepository = module.get<RestaurantRepository>(RestaurantRepository);
  })

  describe('getRestaurants', () => {
    it('should call getRestaurants', async () => {
      const getRestaurantsMock = jest.fn();
      restaurantRepository.getRestaurants = getRestaurantsMock;

      await restaurantService.getRestaurants();

      expect(getRestaurantsMock).toHaveBeenCalled();
    })
  })

  describe('getRestaurantByID', () => {
    it('should call getRestaurantByID', async () => {
      const getRestaurantByIDMock = jest.fn();
      restaurantRepository.getRestaurantByID = getRestaurantByIDMock;

      await restaurantService.getRestaurantByID('123');

      expect(getRestaurantByIDMock).toHaveBeenCalled();
    })
  })

  describe('createRestaurant', () => {
    it('should call createRestaurant', async () => {
      const createRestaurantMock = jest.fn();
      restaurantRepository.createRestaurant = createRestaurantMock;

      await restaurantService.createRestaurant(
        {
          id: 'Juhakhdyh86280JN',
          name: 'Burger Palace',
          address: '123 Main St, Cityville',
          phone: '555-1234',
          description: 'Delicious burgers for everyone!',
          category: 'BURGER',
        }
      );

      expect(createRestaurantMock).toHaveBeenCalled();
    })
  })

  describe('updateRestaurant', () => {
    it('should call updateRestaurant', async () => {
      const updateRestaurantMock = jest.fn();
      restaurantRepository.updateRestaurant = updateRestaurantMock;

      await restaurantService.updateRestaurant({
        id: 'Juhakhdyh86280JN',
        name: 'Burger Palace',
        address: '1789 Main St, Cityville',
        phone: '555-1234',
        description: 'Delicious burger for everyone!',
        category: 'BURGER',
      })

      expect(updateRestaurantMock).toHaveBeenCalled();
    })
  })
})